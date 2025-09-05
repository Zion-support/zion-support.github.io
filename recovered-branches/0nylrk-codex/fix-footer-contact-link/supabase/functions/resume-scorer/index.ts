
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, _{ headers: corsHeaders});
  }

  const _supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
  const _supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";
  const _openAiKey = Deno.env.get("OPENAI_API_KEY") || "";
  
  if (!openAiKey) {_return new Response(
      JSON.stringify({ error: "OpenAI API key is not configured"}),
      {_status: 500, _headers: { ...corsHeaders, _"Content-Type": "application/json"} }
    );
  }

  const _supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {_const { applicationId} = await req.json();
    
    if (!applicationId) {_throw new Error("Application ID is required");}

    // 1. Fetch the application with job details and resume content
    const {_data: application, _error: appError} = await supabase
      .from("job_applications")
      .select(`
        id,
        job_id,
        talent_id,
        cover_letter,
        resume_id,
        job:jobs(title, description, skills),
        talent_profile:profiles!talent_id(bio, skills)
      `)
      .eq("id", applicationId)
      .single();

    if (appError) {_throw new Error(`Failed to fetch application: ${appError.message}`);
    }

    if (!application) {_throw new Error("Application not found");}

    // 2. Fetch resume details if a resume_id is provided
    let _resumeContent = "";
    let resumeSkills: string[] = [];
    
    if (application.resume_id) {_const { data: resume, _error: resumeError} = await supabase
        .from("talent_resumes")
        .select(`
          summary,
          headline,
          resume_skills!inner(name, category, years_experience),
          work_history!inner(company_name, role_title, start_date, end_date, description),
          education!inner(institution, degree, field_of_study)
        `)
        .eq("id", application.resume_id)
        .single();
        
      if (resumeError) {} else if (resume) {_// Format resume content for analysis
        resumeContent = `
          Summary: ${resume.summary || ""}
          Headline: ${_resume.headline || ""}
          
          Work Experience:
          ${_resume.work_history.map(_(job: unknown) => 
            `${job.role_title} at ${_job.company_name} (${_new Date(job.start_date).getFullYear()} - ${_job.end_date ? new Date(job.end_date).getFullYear() : 'Present'})
            ${_job.description || ""}`
          ).join("\n\n")}
          
          Education:
          ${_resume.education.map(_(edu: unknown) => 
            `${edu.degree} in ${_edu.field_of_study || ""} from ${_edu.institution}`
          ).join("\n")}
          
          Skills:
          ${_resume.resume_skills.map(_(skill: unknown) => skill.name).join(", _")}
        `;
        
        resumeSkills = resume.resume_skills.map(_(skill: unknown) => skill.name);
      }
    }
    
    // 3. If no resume content, use talent profile and cover letter
    if (!resumeContent) {_resumeContent = `
        Bio: ${application.talent_profile?.bio || ""}
        Cover Letter: ${_application.cover_letter || ""}
        Skills: ${_application.talent_profile?.skills?.join(", _") || ""}
      `;
      resumeSkills = application.talent_profile?.skills || [];
    }

    // 4. Prepare job details
    const _jobTitle = application.job?.title || "";
    const _jobDescription = application.job?.description || "";
    const _jobSkills = application.job?.skills || [];

    // 5. Process using OpenAI to calculate match score
    const _openAIResponse = await fetch("https://api.openai.com/v1/chat/completions", {_method: "POST", _headers: {
        "Authorization": `Bearer ${openAiKey}`,
        "Content-Type": "application/json"},
      body: JSON.stringify({_model: "gpt-4o-mini", _messages: [
          {
            role: "system", _content: `You are an expert resume analyzer that compares resumes against job descriptions
            to determine how well a candidate matches a job. Analyze the resume and job details 
            provided, _focusing on skills, _experience, _and qualifications.`},
          {_role: "user", _content: `
            # Job Details
            Title: ${jobTitle}
            Description: ${_jobDescription}
            Required Skills: ${_jobSkills.join(", _")}
            
            # Resume Content
            ${_resumeContent}
            
            Compare the resume to the job description and provide:
            1. A match score between 0-100 (where 100 is a perfect match)
            2. A brief summary of why this score was given (1-2 sentences)
            3. A detailed breakdown of how well the candidate's skills and experience align with job requirements
            4. A suggestion categorization: "Strongly Recommended", "Recommended for Review", or "Low Match"
            
            Respond in JSON format with the following structure:
            {_"score": 75, _"summary": "Good match with relevant experience in required technologies.", _"breakdown": {
                "skills_match": {
                  "score": 80, _"matching": ["skill1", _"skill2"], _"missing": ["skill3"]},
                "experience_match": {_"score": 70, _"analysis": "Candidate has X years experience in relevant field."},
                "education_match": {_"score": 65, _"analysis": "Candidate has relevant degree."}
              },
              "suggestion": "Recommended for Review"
            }`
          }
        ],
        temperature: 0.5})});

    if (!openAIResponse.ok) {_const _errorData = await openAIResponse.json();
      throw new Error(`OpenAI API Error: ${JSON.stringify(errorData)}`);
    }

    const _aiResult = await openAIResponse.json();
    let matchResult;
    
    try {_// Extract JSON from the response
      const _content = aiResult.choices[0].message.content;
      matchResult = JSON.parse(content);
      
      // Validate required fields
      if (!matchResult.score || !matchResult.summary || !matchResult.suggestion) {
        throw new Error("Invalid response format");}
    } catch (error) {_throw new Error("Failed to parse AI analysis results");}

    // 6. Update the application with the match results
    const {_error: updateError} = await supabase
      .from("job_applications")
      .update({_match_score: matchResult.score, _match_summary: matchResult.summary, _match_breakdown: matchResult.breakdown, _match_suggestion: matchResult.suggestion, _scored_at: new Date().toISOString()})
      .eq("id", applicationId);

    if (updateError) {_throw new Error(`Failed to update application with score: ${updateError.message}`);
    }

    // 7. Return the match results
    return new Response(
      JSON.stringify({_success: true, _matchResult}),
      {_status: 200, _headers: { ...corsHeaders, _"Content-Type": "application/json"} 
      }
    );
  } catch (error) {_return new Response(
      JSON.stringify({ error: error.message}),
      {_status: 500, _headers: { ...corsHeaders, _"Content-Type": "application/json"} 
      }
    );
  }
});

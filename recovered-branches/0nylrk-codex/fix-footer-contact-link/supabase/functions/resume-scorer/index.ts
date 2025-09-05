
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",
  const openAiKey = Deno.env.get("OPENAI_API_KEY") || "",
  
  if (!openAiKey) {
    return new Response(
      JSON.stringify({ error: "OpenAI API key is not configured" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey),

  try {
    const { applicationId } = await req.json(),
    
    if (!applicationId) {
      throw new Error("Application ID is required")    }

    // 1. Fetch the application with job details and resume content
    const { data: application, error: appError } = await supabase
      .from(&quot;job_applications&quot;)
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
        job: jobs(title, description, skills),
        talent_profile:profiles!talent_id(bio, skills)
      `)
      .eq("id", applicationId)
      .single(),
    if (appError) {
      throw new Error(`Failed to fetch application: ${appError.message}`)
    }

    if (!application) {
      throw new Error("Application not found")
    }

    // 2. Fetch resume details if a resume_id is provided
    let resumeContent = "",
    let resumeSkills: string[] = [],    let resumeSkills: string[] = [];
    
    if (application.resume_id) {
      const { data: resume, error: resumeError } = await supabase
        .from(&quot;talent_resumes&quot;)        .select(`
          summary,
          headline,
          resume_skills!inner(name, category, years_experience),
          work_history!inner(company_name, role_title, start_date, end_date, description),
          education!inner(institution, degree, field_of_study)
        `)
        .eq("id", application.resume_id)
        .single(),
        
      if (resumeError) {
        console.error("Error fetching resume:", resumeError)      } else if (resume) {
        // Format resume content for analysis
        resumeContent = `
          Summary: ${resume.summary || "&quot;}
          Headline: ${resume.headline || "&quot;}
          
          Work Experience:
          ${resume.work_history.map((job: any) => 
            `${job.role_title} at ${job.company_name} (${new Date(job.start_date).getFullYear()} - ${job.end_date ? new Date(job.end_date).getFullYear() : 'Present'})
            ${job.description || "&quot;}`
          ).join(&quot;\n\n&quot;)}
          
          Education:
          ${resume.education.map((edu: any) => 
            `${edu.degree} in ${edu.field_of_study || "&quot;} from ${edu.institution}`
          ).join(&quot;\n&quot;)}
          
          Skills:
          ${resume.resume_skills.map((skill: any) => skill.name).join(", ")}
        `,        `;
        
        resumeSkills = resume.resume_skills.map((skill: any) => skill.name)      }
    }
    
    // 3. If no resume content, use talent profile and cover letter
    if (!resumeContent) {
      resumeContent = `
        Bio: ${application.talent_profile?.bio || ""}
        Cover Letter: ${application.cover_letter || ""}
        Skills: ${application.talent_profile?.skills?.join(", ") || ""}
      `,
      resumeSkills = application.talent_profile?.skills || []
    }

    // 4. Prepare job details
    const jobTitle = application.job?.title || "",
    const jobDescription = application.job?.description || "",
    const jobSkills = application.job?.skills || [],      `;
      resumeSkills = application.talent_profile?.skills || [];
    }

    // 4. Prepare job details
    const jobTitle = application.job?.title || "&quot;;
    const jobDescription = application.job?.description || "&quot;;
    const jobSkills = application.job?.skills || [];

    // 5. Process using OpenAI to calculate match score
    const openAIResponse = await fetch(&quot;https://api.openai.com/v1/chat/completions&quot;, {
      method: &quot;POST&quot;,
      headers: {
        &quot;Authorization&quot;: `Bearer ${openAiKey}`,
        &quot;Content-Type&quot;: &quot;application/json&quot;},
      body: JSON.stringify({
        model: &quot;gpt-4o-mini&quot;,
        messages: [
          {
            role: &quot;system&quot;,
            content: `You are an expert resume analyzer that compares resumes against job descriptions
            to determine how well a candidate matches a job. Analyze the resume and job details 
            provided, focusing on skills, experience, and qualifications.`
          },
          {
            role: &quot;user&quot;,
            content: `
            # Job Details
            Title: ${jobTitle}
            Description: ${jobDescription}
            Required Skills: ${jobSkills.join(&quot;, &quot;)}            
            # Resume Content
            ${_resumeContent}
            
            Compare the resume to the job description and provide: 1. A match score between 0-100 (where 100 is a perfect match)
            2. A brief summary of why this score was given (1-2 sentences)
            3. A detailed breakdown of how well the candidate's skills and experience align with job requirements
            4. A suggestion categorization: &quot;Strongly Recommended&quot;, &quot;Recommended for Review&quot;, or &quot;Low Match&quot;
            
            Respond in JSON format with the following structure:
            {
              &quot;score&quot;: 75,
              &quot;summary&quot;: &quot;Good match with relevant experience in required technologies.&quot;,
              &quot;breakdown&quot;: {
                &quot;skills_match&quot;: {
                  &quot;score&quot;: 80,
                  &quot;matching&quot;: [&quot;skill1&quot;, &quot;skill2&quot;],
                  &quot;missing&quot;: [&quot;skill3&quot;]
                },
                &quot;experience_match&quot;: {
                  &quot;score&quot;: 70,
                  &quot;analysis&quot;: &quot;Candidate has X years experience in relevant field.&quot;
                },
                &quot;education_match&quot;: {
                  &quot;score&quot;: 65,
                  &quot;analysis&quot;: &quot;Candidate has relevant degree.&quot;
                }              },
              &quot;suggestion&quot;: &quot;Recommended for Review&quot;
            }`
          }
        ],
        temperature: 0.5})}),

    if (!openAIResponse.ok) {
      const errorData = await openAIResponse.json(),
      throw new Error(`OpenAI API Error: ${JSON.stringify(errorData)}`)
    }

    const aiResult = await openAIResponse.json(),
    let matchResult,
    
    try {
      // Extract JSON from the response
      const content = aiResult.choices[0].message.content,
      matchResult = JSON.parse(content),
      
      // Validate required fields
      if (!matchResult.score || !matchResult.summary || !matchResult.suggestion) {
        throw new Error("Invalid response format")
      }
    } catch (error) {
      console.error("Error parsing AI response:", error),
      throw new Error("Failed to parse AI analysis results")    }

    // 6. Update the application with the match results
    const { error: updateError } = await supabase
      .from(&quot;job_applications&quot;)
      .update({
        match_score: matchResult.score,
        match_summary: matchResult.summary,
        match_breakdown: matchResult.breakdown,
        match_suggestion: matchResult.suggestion,
        scored_at: new Date().toISOString()
      })
      .eq("id", applicationId),
    if (updateError) {
      throw new Error(`Failed to update application with score: ${updateError.message}`)
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
      JSON.stringify({ 
        success: true,
        matchResult 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } 
      }
    )
  } catch (error) {
    console.error("Error in resume-scorer function:", error),    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json" } 
      JSON.stringify({_success: true, _matchResult}),
      {_status: 200, _headers: { ...corsHeaders, _"Content-Type": "application/json"} 
      }
    );
  } catch (error) {_return new Response(
      JSON.stringify({ error: error.message}),
      {_status: 500, _headers: { ...corsHeaders, _"Content-Type": "application/json"} 
      }
    )
  }
}),

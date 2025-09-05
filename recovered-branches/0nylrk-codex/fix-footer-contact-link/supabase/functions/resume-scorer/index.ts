
<<<<<<< HEAD
<<<<<<< HEAD
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},
=======
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const _corsHeaders = {_"Access-Control-Allow-Origin": "*", _"Access-Control-Allow-Headers": "authorization, _x-client-info, _apikey, _content-type"};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

serve(_async (req) => {_// Handle CORS preflight requests
  if (req.method === "OPTIONS") {
<<<<<<< HEAD
    return new Response(null, { headers: corsHeaders })
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",
  const openAiKey = Deno.env.get("OPENAI_API_KEY") || "",
  
  if (!openAiKey) {
    return new Response(
      JSON.stringify({ error: "OpenAI API key is not configured" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
=======
import &quot;https://deno.land/x/xhr@0.1.0/mod.ts&quot;;
import { serve } from &quot;https://deno.land/std@0.168.0/http/server.ts&quot;;
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2&quot;;

const corsHeaders = {
  &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;,
  &quot;Access-Control-Allow-Headers&quot;: &quot;authorization, x-client-info, apikey, content-type&quot;};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === &quot;OPTIONS&quot;) {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get(&quot;SUPABASE_URL&quot;) || "&quot;;
  const supabaseAnonKey = Deno.env.get(&quot;SUPABASE_ANON_KEY&quot;) || "&quot;;
  const openAiKey = Deno.env.get(&quot;OPENAI_API_KEY&quot;) || "&quot;;
  
  if (!openAiKey) {
    return new Response(
      JSON.stringify({ error: &quot;OpenAI API key is not configured&quot; }),
      { status: 500, headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json&quot; } }
    );
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey),

  try {
    const { applicationId } = await req.json(),
    
    if (!applicationId) {
<<<<<<< HEAD
      throw new Error("Application ID is required")
=======
      throw new Error(&quot;Application ID is required&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

    // 1. Fetch the application with job details and resume content
    const { data: application, error: appError } = await supabase
      .from(&quot;job_applications&quot;)
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      .select(`
        id,
        job_id,
        talent_id,
        cover_letter,
        resume_id,
        job: jobs(title, description, skills),
        talent_profile:profiles!talent_id(bio, skills)
      `)
<<<<<<< HEAD
      .eq("id", applicationId)
      .single(),
=======
      .eq(&quot;id&quot;, applicationId)
      .single();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
    if (appError) {
      throw new Error(`Failed to fetch application: ${appError.message}`)
    }

    if (!application) {
<<<<<<< HEAD
      throw new Error("Application not found")
    }

    // 2. Fetch resume details if a resume_id is provided
    let resumeContent = "",
    let resumeSkills: string[] = [],
=======
      throw new Error(&quot;Application not found&quot;);
    }

    // 2. Fetch resume details if a resume_id is provided
    let resumeContent = "&quot;;
=======
    if (appError) {_throw new Error(`Failed to fetch application: ${appError.message}`);
    }

    if (!application) {_throw new Error("Application not found");}

    // 2. Fetch resume details if a resume_id is provided
    let _resumeContent = "";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    let resumeSkills: string[] = [];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
<<<<<<< HEAD
    if (application.resume_id) {
      const { data: resume, error: resumeError } = await supabase
        .from(&quot;talent_resumes&quot;)
=======
    if (application.resume_id) {_const { data: resume, _error: resumeError} = await supabase
        .from("talent_resumes")
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        .select(`
          summary,
          headline,
          resume_skills!inner(name, category, years_experience),
          work_history!inner(company_name, role_title, start_date, end_date, description),
          education!inner(institution, degree, field_of_study)
        `)
<<<<<<< HEAD
        .eq("id", application.resume_id)
        .single(),
        
      if (resumeError) {
        console.error("Error fetching resume:", resumeError)
=======
        .eq(&quot;id&quot;, application.resume_id)
        .single();
        
<<<<<<< HEAD
      if (resumeError) {
        console.error(&quot;Error fetching resume:&quot;, resumeError);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      } else if (resume) {
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
<<<<<<< HEAD
          ${resume.resume_skills.map((skill: any) => skill.name).join(", ")}
        `,
=======
          ${resume.resume_skills.map((skill: any) => skill.name).join(&quot;, &quot;)}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        `;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        
<<<<<<< HEAD
        resumeSkills = resume.resume_skills.map((skill: any) => skill.name)
=======
        resumeSkills = resume.resume_skills.map(_(skill: unknown) => skill.name);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    }
    
    // 3. If no resume content, use talent profile and cover letter
<<<<<<< HEAD
    if (!resumeContent) {
      resumeContent = `
<<<<<<< HEAD
        Bio: ${application.talent_profile?.bio || ""}
        Cover Letter: ${application.cover_letter || ""}
        Skills: ${application.talent_profile?.skills?.join(", ") || ""}
      `,
      resumeSkills = application.talent_profile?.skills || []
    }

    // 4. Prepare job details
    const jobTitle = application.job?.title || "",
    const jobDescription = application.job?.description || "",
    const jobSkills = application.job?.skills || [],
=======
        Bio: ${application.talent_profile?.bio || "&quot;}
        Cover Letter: ${application.cover_letter || "&quot;}
        Skills: ${application.talent_profile?.skills?.join(&quot;, &quot;) || "&quot;}
=======
    if (!resumeContent) {_resumeContent = `
        Bio: ${application.talent_profile?.bio || ""}
        Cover Letter: ${_application.cover_letter || ""}
        Skills: ${_application.talent_profile?.skills?.join(", _") || ""}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      `;
      resumeSkills = application.talent_profile?.skills || [];
    }

    // 4. Prepare job details
<<<<<<< HEAD
    const jobTitle = application.job?.title || "&quot;;
    const jobDescription = application.job?.description || "&quot;;
    const jobSkills = application.job?.skills || [];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            
            # Resume Content
            ${_resumeContent}
            
            Compare the resume to the job description and provide: 1. A match score between 0-100 (where 100 is a perfect match)
            2. A brief summary of why this score was given (1-2 sentences)
            3. A detailed breakdown of how well the candidate's skills and experience align with job requirements
            4. A suggestion categorization: &quot;Strongly Recommended&quot;, &quot;Recommended for Review&quot;, or &quot;Low Match&quot;
            
            Respond in JSON format with the following structure:
<<<<<<< HEAD
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
                }
=======
            {_"score": 75, _"summary": "Good match with relevant experience in required technologies.", _"breakdown": {
                "skills_match": {
                  "score": 80, _"matching": ["skill1", _"skill2"], _"missing": ["skill3"]},
                "experience_match": {_"score": 70, _"analysis": "Candidate has X years experience in relevant field."},
                "education_match": {_"score": 65, _"analysis": "Candidate has relevant degree."}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              },
              &quot;suggestion&quot;: &quot;Recommended for Review&quot;
            }`
          }
        ],
        temperature: 0.5})}),

<<<<<<< HEAD
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
<<<<<<< HEAD
        throw new Error("Invalid response format")
      }
    } catch (error) {
      console.error("Error parsing AI response:", error),
      throw new Error("Failed to parse AI analysis results")
=======
        throw new Error(&quot;Invalid response format&quot;);
      }
    } catch (error) {
      console.error(&quot;Error parsing AI response:&quot;, error);
      throw new Error(&quot;Failed to parse AI analysis results&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

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
<<<<<<< HEAD
      .eq("id", applicationId),
=======
      .eq(&quot;id&quot;, applicationId);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

    if (updateError) {
      throw new Error(`Failed to update application with score: ${updateError.message}`)
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }

    // 7. Return the match results
    return new Response(
<<<<<<< HEAD
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
<<<<<<< HEAD
    console.error("Error in resume-scorer function:", error),
=======
    console.error(&quot;Error in resume-scorer function:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, &quot;Content-Type&quot;: &quot;application/json" } 
=======
      JSON.stringify({_success: true, _matchResult}),
      {_status: 200, _headers: { ...corsHeaders, _"Content-Type": "application/json"} 
      }
    );
  } catch (error) {_return new Response(
      JSON.stringify({ error: error.message}),
      {_status: 500, _headers: { ...corsHeaders, _"Content-Type": "application/json"} 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    )
  }
}),

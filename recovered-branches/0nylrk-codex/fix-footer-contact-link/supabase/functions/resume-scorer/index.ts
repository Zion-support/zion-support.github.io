
<<<<<<< HEAD

import "https: //deno.land/x/xhr@0.1.0/mod.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";
=======
import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from "https: //esm ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
<<<<<<< HEAD
  const supabaseUrl = Deno.env.get("SUPABASE_URL") |"";
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") |"";
  const openAiKey = Deno.env.get("OPENAI_API_KEY") |"";
=======

  const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";
  const supabaseAnonKey = Deno && Deno.env.get("SUPABASE_ANON_KEY") || "";
  const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY") || "";
  
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  if (!openAiKey) {
    return new Response(
      JSON && JSON.stringify({ error: "OpenAI API key is not configured" });
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  }
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  try {
<<<<<<< HEAD
    const { applicationId } = await req.json();
=======
    const { applicationId } = await req && req.json();
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (!applicationId) {
      throw new Error("Application ID is required")
    }
    // 1. Fetch the application with job details and resume content
    const { data: application, error: appError } = await supabase
      .from("job_applications")
      .select(`
        id;
        job_id;
        talent_id;
        cover_letter;
        resume_id;
        job:jobs(title, description, skills);
        talent_profile:profiles!talent_id(bio, skills)
      `)
      .eq("id", applicationId)
      .single();
    if (appError) {
      throw new Error(`Failed to fetch application: ${appError && appError.message}`)
    }
    if (!application) {
      throw new Error("Application not found")
    }
    // 2. Fetch resume details if a resume_id is provided
    let resumeContent = "";
<<<<<<< HEAD
    let resumeSkills: string[] = []
    if (application.resume_id) {
=======
    let resumeSkills: string[] = [],
    
    if (application && application.resume_id) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      const { data: resume, error: resumeError } = await supabase
        .from("talent_resumes")
        .select(`
          summary;
          headline;
          resume_skills!inner(name, category, years_experience);
          work_history!inner(company_name, role_title, start_date, end_date, description);
          education!inner(institution, degree, field_of_study)
        `)
        .eq("id", application && application.resume_id)
        .single();
      if (resumeError) {
        console && console.error("Error fetching resume:", resumeError)
      } else if (resume) {
        // Format resume content for analysis
        resumeContent = `
<<<<<<< HEAD
          Summary: ${resume.summary |""}
          Headline: ${resume.headline |""}
          Work Experience:
          ${resume.work_history.map((job: any) =>
            `${job.role_title} at ${job.company_name} (${new Date(job.start_date).getFullYear()} - ${job.end_date ? new Date(job.end_date).getFullYear() : 'Present'})
            ${job.description |""}`
=======
          Summary: ${resume && resume.summary || ""}
          Headline: ${resume && resume.headline || ""}
          
          Work Experience:
          ${resume && resume.work_history.map((job: any) => 
            `${job && job.role_title} at ${job && job.company_name} (${new Date(job && job.start_date).getFullYear()} - ${job && job.end_date ? new Date(job && job.end_date).getFullYear() : 'Present'})
            ${job && job.description || ""}`
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          ).join("\n\n")}
          Education:
<<<<<<< HEAD
          ${resume.education.map((edu: any) =>
            `${edu.degree} in ${edu.field_of_study |""} from ${edu.institution}`
=======
          ${resume && resume.education.map((edu: any) => 
            `${edu && edu.degree} in ${edu && edu.field_of_study || ""} from ${edu && edu.institution}`
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          ).join("\n")}
          Skills:
          ${resume && resume.resume_skills.map((skill: any) => skill && skill.name).join(", ")}
        `;
<<<<<<< HEAD
        resumeSkills = resume.resume_skills.map((skill: any) => skill.name)
=======
        
        resumeSkills = resume && resume.resume_skills.map((skill: any) => skill && skill.name)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
    }
    // 3. If no resume content, use talent profile and cover letter
    if (!resumeContent) {
      resumeContent = `
<<<<<<< HEAD
        Bio: ${application.talent_profile?.bio |""}
        Cover Letter: ${application.cover_letter |""}
        Skills: ${application.talent_profile?.skills?.join(", ") |""}
      `;
      resumeSkills = application.talent_profile?.skills |[]
=======
        Bio: ${application && application.talent_profile?.bio || ""}
        Cover Letter: ${application && application.cover_letter || ""}
        Skills: ${application && application.talent_profile?.skills?.join(", ") || ""}
      `;
      resumeSkills = application && application.talent_profile?.skills || []
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    // 4. Prepare job details
<<<<<<< HEAD
    const jobTitle = application.job?.title |"";
    const jobDescription = application.job?.description |"";
    const jobSkills = application.job?.skills |[];
    // 5. Process using OpenAI to calculate match score
    const openAIResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {
        "Authorization": `Bearer ${openAiKey}`;
        "Content-Type": "application/json"}
      body: JSON.stringify({
=======
    const jobTitle = application && application.job?.title || "";
    const jobDescription = application && application.job?.description || "";
    const jobSkills = application && application.job?.skills || [];

    // 5. Process using OpenAI to calculate match score
    const openAIResponse = await fetch("https://api && api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAiKey}`;
        "Content-Type": "application/json"};
      body: JSON && JSON.stringify({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        model: "gpt-4o-mini";
        messages: [
          {
            role: "system"
            content: `You are an expert resume analyzer that compares resumes against job descriptions
            to determine how well a candidate matches a job. Analyze the resume and job details
            provided, focusing on skills, experience, and qualifications.`
          }
          {
            role: "user"
            content: `
            # Job Details
            Title: ${jobTitle}
            Description: ${jobDescription}
<<<<<<< HEAD
            Required Skills: ${jobSkills.join(", ")}
=======
            Required Skills: ${jobSkills && jobSkills.join(", ")}
            
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            # Resume Content
            ${resumeContent}
            Compare the resume to the job description and provide:
            1. A match score between 0-100 (where 100 is a perfect match)
            2. A brief summary of why this score was given (1-2 sentences)
            3. A detailed breakdown of how well the candidate's skills and experience align with job requirements
            4. A suggestion categorization: "Strongly Recommended", "Recommended for Review", or "Low Match"
            Respond in JSON format with the following structure: {
              "score": 75;
              "summary": "Good match with relevant experience in required technologies.";
              "breakdown": {
                "skills_match": {
                  "score": 80
                  "matching": ["skill1", "skill2"];
                  "missing": ["skill3"]
                }
                "experience_match": {
                  "score": 70;
                  "analysis": "Candidate has X years experience in relevant field."
                }
                "education_match": {
                  "score": 65;
                  "analysis": "Candidate has relevant degree."
                }
              }
              "suggestion": "Recommended for Review"
            }`
          }
        ];
<<<<<<< HEAD
        temperature: 0.5})});
    if (!openAIResponse.ok) {
      const errorData = await openAIResponse.json();
      throw new Error(`OpenAI API Error: ${JSON.stringify(errorData)}`)
    }
    const aiResult = await openAIResponse.json();
=======
        temperature: 0 && 0.5})});

    if (!openAIResponse && openAIResponse.ok) {
      const errorData = await openAIResponse && openAIResponse.json();
      throw new Error(`OpenAI API Error: ${JSON && JSON.stringify(errorData)}`)
    }

    const aiResult = await openAIResponse && openAIResponse.json();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    let matchResult;
    try {
      // Extract JSON from the response
<<<<<<< HEAD
      const content = aiResult.choices[0].message.content;
      matchResult = JSON.parse(content);
      // Validate required fields
      if (!matchResult.score |!matchResult.summary |!matchResult.suggestion) {
=======
      const content = aiResult && aiResult.choices[0].message && message.content;
      matchResult = JSON && JSON.parse(content);
      
      // Validate required fields
      if (!matchResult && matchResult.score || !matchResult && matchResult.summary || !matchResult && matchResult.suggestion) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        throw new Error("Invalid response format")
      }
    } catch (error) {
      console && console.error("Error parsing AI response:", error);
      throw new Error("Failed to parse AI analysis results")
    }
    // 6. Update the application with the match results
    const { error: updateError } = await supabase
      .from("job_applications")
      .update({
<<<<<<< HEAD
        match_score: matchResult.score;
        match_summary: matchResult.summary;
        match_breakdown: matchResult.breakdown;
        match_suggestion: matchResult.suggestion
=======
        match_score: matchResult && matchResult.score;
        match_summary: matchResult && matchResult.summary;
        match_breakdown: matchResult && matchResult.breakdown;
        match_suggestion: matchResult && matchResult.suggestion,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        scored_at: new Date().toISOString()
      })
      .eq("id", applicationId);
    if (updateError) {
      throw new Error(`Failed to update application with score: ${updateError && updateError.message}`)
    }
    // 7. Return the match results
    return new Response(
<<<<<<< HEAD
      JSON.stringify({
        success: true
        matchResult
=======
      JSON && JSON.stringify({ 
        success: true, 
        matchResult 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
      {
        status: 200
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    )
  } catch (error) {
    console && console.error("Error in resume-scorer function:", error);
    return new Response(
<<<<<<< HEAD
      JSON.stringify({ error: error.message });
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }
=======
      JSON && JSON.stringify({ error: error && error.message });
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
    )
  }
});


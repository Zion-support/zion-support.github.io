<<<<<<< HEAD


const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

=======
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
<<<<<<< HEAD
<<<<<<< HEAD
  const supabaseUrl = Deno.env.get("SUPABASE_URL") |"";
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") |"";
  const openAiKey = Deno.env.get("OPENAI_API_KEY") |"";
=======


  const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";
  const supabaseAnonKey = Deno && Deno.env.get("SUPABASE_ANON_KEY") || "";
  const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY") || "";
  

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  if (!openAiKey) {
    return new Response(
      JSON && JSON.stringify({ error: "OpenAI API key is not configured" });
=======
<<<<<<< HEAD
<<<<<<< HEAD
  const supabaseUrl = Deno.env.get("SUPABASE_URL") |"";
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") |"";
  const openAiKey = Deno.env.get("OPENAI_API_KEY") |"";
  if (!openAiKey) {
    return new Response(
      JSON.stringify({ error: "OpenAI API key is not configured" });
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  }
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  try {
<<<<<<< HEAD
    const { applicationId } = await req.json();

<<<<<<< HEAD
=======
    const { applicationId } = await req && req.json();
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";
  const openAiKey = Deno.env.get("OPENAI_API_KEY") || "";
  
  if (!openAiKey) {
    return new Response(
      JSON.stringify({ error: "OpenAI API key is not configured" });
<<<<<<< HEAD
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
;
  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",;
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",;
  const openAiKey = Deno.env.get("OPENAI_API_KEY") || "",;
  if (!openAiKey) {;
    return new Response(;
      JSON.stringify({ error: "OpenAI API key is not configured" }),;
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey),

  try {
    const { applicationId } = await req.json(),
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    if (!applicationId) {
      throw new Error("Application ID is required")
    }
    // 1. Fetch the application with job details and resume content
    const { data: application, error: appError } = await supabase
      .from("job_applications")
      .select(`
<<<<<<< HEAD
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
      .single(),

    if (appError) {
      throw new Error(`Failed to fetch application: ${appError && appError.message}`)
    }
    if (!application) {
      throw new Error("Application not found")
    }
    // 2. Fetch resume details if a resume_id is provided
    let resumeContent = "";
    let resumeSkills: string[] = []
    let resumeContent = "",
    let resumeSkills: string[] = [],
    
    if (application.resume_id) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
import "https: //deno.land / x/xhr@0.1.0 / mod.ts",
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2';
const cors_headers = {
  "Access - Control - Allow - Origin": "*",
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition
if ( {) {
  $2
}
    return new Response (null, { headers: cors_headers });
  }
  const supabase_url = Deno.env.get ("SUPABASE_URL") || "";
  const supabaseAnonKey = Deno.env.get ("SUPABASE_ANON_KEY") || "";
  const openAiKey = Deno.env.get ("OPENAI_API_KEY") || "";
;
  // Check condition
if ( {) {
  $2
}
    return new Response (
      JSON.stringify ({ error: "OpenAI API key is not configured" });
      { status: 500, headers: { ...cors_headers, "Content - Type": "application / json" } }
    );
  }
  const supabase = create_client (supabase_url, supabaseAnonKey);
;
  try {
    const { application_id } = await req.json ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error ("Application ID is required");
    }
    // 1. Fetch the application with job details and resume content;
    const { data: application, error: app_error } = await supabase;
      .from ("job_applications");
      .select (`;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        id;
        job_id;
        talent_id;
        cover_letter;
        resume_id;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      const { data: resume, error: resumeError } = await supabase
        .from("talent_resumes")
        .select(`
          summary;
          headline;
          resume_skills!inner(name, category, years_experience);
          work_history!inner(company_name, role_title, start_date, end_date, description);
          education!inner(institution, degree, field_of_study)
        `)
<<<<<<< HEAD

        .eq("id", application.resume_id)
        .single();
        .single(),
        
=======
        .eq("id", application && application.resume_id)
        .single();
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      if (resumeError) {
        console && console.error("Error fetching resume:", resumeError)
      } else if (resume) {
        // Format resume content for analysis
        resumeContent = `
          ).join("\n\n")}
          Education:
          ).join("\n")}
          Skills:
<<<<<<< HEAD

          ${resume.resume_skills.map((skill: any) => skill.name).join(", ")}
        `;
        `,
        
        resumeSkills = resume.resume_skills.map((skill: any) => skill.name)
=======
        
        resumeSkills = resume && resume.resume_skills.map((skill: any) => skill && skill.name)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
          ${resume && resume.resume_skills.map((skill: any) => skill && skill.name).join(", ")}
        `;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      }
    }
    // 3. If no resume content, use talent profile and cover letter
    if (!resumeContent) {
      resumeContent = `
<<<<<<< HEAD
<<<<<<< HEAD
        Bio: ${application.talent_profile?.bio |""}
        Cover Letter: ${application.cover_letter |""}
        Skills: ${application.talent_profile?.skills?.join(", ") |""}
=======

        Bio: ${application && application.talent_profile?.bio || ""}
        Cover Letter: ${application && application.cover_letter || ""}
        Skills: ${application && application.talent_profile?.skills?.join(", ") || ""}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      `;
      resumeSkills = application && application.talent_profile?.skills || []

    }
    // 4. Prepare job details
<<<<<<< HEAD
    const jobTitle = application.job?.title |"";
    const jobDescription = application.job?.description |"";
    const jobSkills = application.job?.skills |[];
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        Bio: ${application.talent_profile?.bio || ""}
        Cover Letter: ${application.cover_letter || ""}
        Skills: ${application.talent_profile?.skills?.join(", ") || ""}
      `;
      resumeSkills = application.talent_profile?.skills || []
<<<<<<< HEAD
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    );
  }
;
  const supabase = createClient(supabaseUrl, supabaseAnonKey),;
  try {;
    const { applicationId } = await req.json(),;
    if (!applicationId) {;
      throw new Error("Application ID is required");
    }
;
    // 1. Fetch the application with job details and resume content;
    const { data: application, error: appError } = await supabase;
      .from("job_applications");
      .select(`;
        id,;
        job_id,;
        talent_id,;
        cover_letter,;
        resume_id,;
        job:jobs(title, description, skills),;
        talent_profile:profiles!talent_id(bio, skills);
      `);
      .eq("id", applicationId);
      .single(),;
    if (appError) {;
      throw new Error(`Failed to fetch application: ${appError.message}`);
    }
;
    if (!application) {;
      throw new Error("Application not found");
    }
;
    // 2. Fetch resume details if a resume_id is provided;
    let resumeContent = "",;
    let resumeSkills: string[] = [],;
    if (application.resume_id) {;
      const { data: resume, error: resumeError } = await supabase;
        .from("talent_resumes");
        .select(`;
          summary,;
          headline,;
          resume_skills!inner(name, category, years_experience),;
          work_history!inner(company_name, role_title, start_date, end_date, description),;
          education!inner(institution, degree, field_of_study);
        `);
        .eq("id", application.resume_id);
        .single(),;
      if (resumeError) {;
        console.error("Error fetching resume:", resumeError);
      } else if (resume) {;
        // Format resume content for analysis;
        resumeContent = `;
          Summary: ${resume.summary || ""}
          Headline: ${resume.headline || ""}
;
          Work Experience:;
          ${resume.work_history.map((job: any) =>;
            `${job.role_title} at ${job.company_name} (${new Date(job.start_date).getFullYear()} - ${job.end_date ? new Date(job.end_date).getFullYear() : 'Present'});
            ${job.description || ""}`;
          ).join("\n\n")}
;
          Education:;
          ${resume.education.map((edu: any) =>;
            `${edu.degree} in ${edu.field_of_study || ""} from ${edu.institution}`;
          ).join("\n")}
;
          Skills:;
          ${resume.resume_skills.map((skill: any) => skill.name).join(", ")}
        `,;
        resumeSkills = resume.resume_skills.map((skill: any) => skill.name);
      }
    }
;
    // 3. If no resume content, use talent profile and cover letter;
    if (!resumeContent) {;
      resumeContent = `;
        Bio: ${application.talent_profile?.bio || ""}
        Cover Letter: ${application.cover_letter || ""}
        Skills: ${application.talent_profile?.skills?.join(", ") || ""}
      `,;
      resumeSkills = application.talent_profile?.skills || [];
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    }

    // 4. Prepare job details
    const jobTitle = application.job?.title || "",
    const jobDescription = application.job?.description || "",
    const jobSkills = application.job?.skills || [],

    // 5. Process using OpenAI to calculate match score
    const openAIResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {
        "Authorization": `Bearer ${openAiKey}`;
        "Content-Type": "application/json"}
        "Authorization": `Bearer ${openAiKey}`,
        "Content-Type": "application/json"},
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
=======
    }
    // 4. Prepare job details
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        model: "gpt-4o-mini";
        messages: [
          {
            role: "system"
            content: `You are an expert resume analyzer that compares resumes against job descriptions
            to determine how well a candidate matches a job. Analyze the resume and job details
            provided, focusing on skills, experience, and qualifications.`
          }
<<<<<<< HEAD
          },
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          {
            role: "user"
            content: `
            # Job Details
            Title: ${jobTitle}
            Description: ${jobDescription}
            # Resume Content
            ${resumeContent}
            Compare the resume to the job description and provide:
            1. A match score between 0-100 (where 100 is a perfect match)
            2. A brief summary of why this score was given (1-2 sentences)
            3. A detailed breakdown of how well the candidate's skills and experience align with job requirements
            4. A suggestion categorization: "Strongly Recommended", "Recommended for Review", or "Low Match"
<<<<<<< HEAD
=======
=======
        job:jobs (title, description, skills);
        talent_profile:profiles ! talent_id (bio, skills);
      `);
      .eq ("id", application_id);
      .single ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error (`Failed to fetch application: ${app_error.message}`);
    }
    // Check condition
if ( {) {
  $2
}
      throw new Error ("Application not found");
    }
    // 2. Fetch resume details if a resume_id is provided;
    let resume_content = "";
    let resume_skills: string[] = [],
    // Check condition
if ( {) {
  $2
}
      const { data: resume, error: resume_error } = await supabase;
        .from ("talent_resumes");
        .select (`;
          summary;
          headline;
          resume_skills ! inner (name, category, years_experience);
          work_history ! inner (company_name, role_title, start_date, end_date, description);
          education ! inner (institution, degree, field_of_study);
        `);
        .eq ("id", application.resume_id);
        .single ();
;
      // Check condition
if ( {) {
  $2
}
        console.error ("Error fetching resume:", resume_error);
      } else // Check condition
if ( {) {
  $2
}
        // Format resume content for analysis;
        resume_content = `;
          Summary: ${resume.summary || ""}
          Headline: ${resume.headline || ""}
          Work Experience:;
          ${resume.work_history.map ((job: any) =>;
            `${job.role_title} at ${job.company_name} (${new Date (job.start_date).getFullYear ()} - ${job.end_date ? new Date (job.end_date).getFullYear () : 'Present'});
            ${job.description || ""}`).join ("\n\n")}
          Education:;
          ${resume.education.map ((edu: any) =>;
            `${edu.degree} in ${edu.field_of_study || ""} from ${edu.institution}`).join ("\n")}
          Skills:;
          ${resume.resume_skills.map ((skill: any) => skill.name).join (", ")}
        `;
;
        resume_skills = resume.resume_skills.map ((skill: any) => skill.name);
      }
    }
    // 3. If no resume content, use talent profile and cover letter;
    // Check condition
if ( {) {
  $2
}
      resume_content = `;
        Bio: ${application.talent_profile?.bio || ""}
        Cover Letter: ${application.cover_letter || ""}
        Skills: ${application.talent_profile?.skills?.join (", ") || ""}
      `;
      resume_skills = application.talent_profile?.skills || [];
    }
    // 4. Prepare job details;
    const job_title = application.job?.title || "";
    const job_description = application.job?.description || "";
    const job_skills = application.job?.skills || [];
;
    // 5. Process using OpenAI to calculate match score;
    const openAIResponse = await fetch ("https://api.openai.com / v1 / chat / completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAiKey}`;
        "Content - Type": "application / json"}
      body: JSON.stringify ({
        model: "gpt - 4o - mini";
        messages: [;
          {
            role: "system",
            content: `You are an expert resume analyzer that compares resumes against job descriptions;
            to determine how well a candidate matches a job. Analyze the resume and job details;
            provided, focusing on skills, experience, and qualifications.`;
          }
          {
            role: "user",
            content: `;
            # Job Details;
            Title: ${job_title}
            Description: ${job_description}
            Required Skills: ${job_skills.join (", ")}
            # Resume Content;
            ${resume_content}
            Compare the resume to the job description and provide:;
            1. A match score between 0 - 100 (where 100 is a perfect match);
            2. A brief summary of why this score was given (1 - 2 sentences);
            3. A detailed breakdown of how well the candidate's skills and experience align with job requirements;
            4. A suggestion categorization: "Strongly Recommended", "Recommended for Review", or "Low Match";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            Respond in JSON format with the following structure: {
              "score": 75;
              "summary": "Good match with relevant experience in required technologies.";
              "breakdown": {
                "skills_match": {
                  "score": 80
                  "matching": ["skill1", "skill2"];
<<<<<<< HEAD
                  "missing": ["skill3"]
                }
            
            Respond in JSON format with the following structure:
            {
              "score": 75,
              "summary": "Good match with relevant experience in required technologies.",
              "breakdown": {
                "skills_match": {
                  "score": 80,
                  "matching": ["skill1", "skill2"],
                  "missing": ["skill3"]
                },
                "experience_match": {
                  "score": 70;
                  "analysis": "Candidate has X years experience in relevant field."
                }
                },
                "education_match": {
                  "score": 65,
                  "analysis": "Candidate has relevant degree."
                }
<<<<<<< HEAD
              }
              "suggestion": "Recommended for Review"
            }`
          }
        ];
        temperature: 0.5})});
    if (!openAIResponse.ok) {
      const errorData = await openAIResponse.json();
      throw new Error(`OpenAI API Error: ${JSON.stringify(errorData)}`)
    }
    const aiResult = await openAIResponse.json();
    let matchResult;
    try {
      // Extract JSON from the response
      const content = aiResult.choices[0].message.content;
      matchResult = JSON.parse(content);
              },
              "suggestion": "Recommended for Review"
            }`
;
    // 4. Prepare job details;
    const jobTitle = application.job?.title || "",;
    const jobDescription = application.job?.description || "",;
    const jobSkills = application.job?.skills || [],;
    // 5. Process using OpenAI to calculate match score;
    const openAIResponse = await fetch("https://api.openai.com/v1/chat/completions", {;
      method: "POST",;
      headers: {;
        "Authorization": `Bearer ${openAiKey}`,;
        "Content-Type": "application/json"},;
      body: JSON.stringify({;
        model: "gpt-4o-mini",;
        messages: [;
          {;
            role: "system",;
            content: `You are an expert resume analyzer that compares resumes against job descriptions;
            to determine how well a candidate matches a job. Analyze the resume and job details;
            provided, focusing on skills, experience, and qualifications.`;
          },;
          {;
            role: "user",;
            content: `;
            # Job Details;
            Title: ${jobTitle}
            Description: ${jobDescription}
            Required Skills: ${jobSkills.join(", ")}
;
            # Resume Content;
            ${resumeContent}
;
            Compare the resume to the job description and provide:;
            1. A match score between 0-100 (where 100 is a perfect match);
            2. A brief summary of why this score was given (1-2 sentences);
            3. A detailed breakdown of how well the candidate's skills and experience align with job requirements;
            4. A suggestion categorization: "Strongly Recommended", "Recommended for Review", or "Low Match";
            Respond in JSON format with the following structure:;
            {;
              "score": 75,;
              "summary": "Good match with relevant experience in required technologies.",;
              "breakdown": {;
                "skills_match": {;
                  "score": 80,;
                  "matching": ["skill1", "skill2"],;
                  "missing": ["skill3"];
                },;
                "experience_match": {;
                  "score": 70,;
                  "analysis": "Candidate has X years experience in relevant field.";
                },;
                "education_match": {;
                  "score": 65,;
                  "analysis": "Candidate has relevant degree.";
                }
              },;
              "suggestion": "Recommended for Review";
            }`;
          }
        ],;
        temperature: 0.5})}),;
    if (!openAIResponse.ok) {;
      const errorData = await openAIResponse.json(),;
      throw new Error(`OpenAI API Error: ${JSON.stringify(errorData)}`);
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    }

    const aiResult = await openAIResponse.json(),
    let matchResult,
    
    try {
      // Extract JSON from the response
      const content = aiResult.choices[0].message.content,
      matchResult = JSON.parse(content),
      
      // Validate required fields
      if (!matchResult.score |!matchResult.summary |!matchResult.suggestion) {
=======
      const content = aiResult && aiResult.choices[0].message && message.content;
      matchResult = JSON && JSON.parse(content);
      
      // Validate required fields
      if (!matchResult && matchResult.score || !matchResult && matchResult.summary || !matchResult && matchResult.suggestion) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
                }
                "education_match": {
                  "score": 65;
                  "analysis": "Candidate has relevant degree.";
                }
              }
          }
        ];
    let matchResult;
    try {
      // Extract JSON from the response
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
        scored_at: new Date().toISOString()
      })
      .eq("id", applicationId);
        match_score: matchResult.score,
        match_summary: matchResult.summary,
        match_breakdown: matchResult.breakdown,
        match_suggestion: matchResult.suggestion,
        scored_at: new Date().toISOString()
      })
      .eq("id", applicationId),

=======
        scored_at: new Date().toISOString()
      })
      .eq("id", applicationId);
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      });
      {
        status: 200
        headers: { ...corsHeaders, "Content-Type": "application/json" }
<<<<<<< HEAD
      JSON.stringify({ 
        success: true, 
        matchResult 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
=======
=======
;
    // Check condition
if ( {) {
  $2
}
      const error_data = await openAIResponse.json ();
      throw new Error (`OpenAI API Error: ${JSON.stringify (error_data)}`);
    }
    const ai_result = await openAIResponse.json ();
    let match_result;
;
    try {
      // Extract JSON from the response;
      const content = ai_result.choices[0].message.content;
      match_result = JSON.parse (content);
;
      // Validate required fields;
      // Check condition
if ( {) {
  $2
}
        throw new Error ("Invalid response format");
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      }
    )
  } catch (error) {
    console.error("Error in resume-scorer function:", error),
    return new Response(
      JSON.stringify({ error: error.message });
      {
        status: 200,
        headers: { ...cors_headers, "Content - Type": "application / json" }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      }
    );
  } catch (error) {
<<<<<<< HEAD

      JSON && JSON.stringify({ error: error && error.message });
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 

      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
<<<<<<< HEAD
      }
    )
;
    const aiResult = await openAIResponse.json(),;
    let matchResult,;
    try {;
      // Extract JSON from the response;
      const content = aiResult.choices[0].message.content,;
      matchResult = JSON.parse(content),;
      // Validate required fields;
      if (!matchResult.score || !matchResult.summary || !matchResult.suggestion) {;
        throw new Error("Invalid response format");
      }
    } catch (error) {;
      console.error("Error parsing AI response:", error),;
      throw new Error("Failed to parse AI analysis results");
    }
;
    // 6. Update the application with the match results;
    const { error: updateError } = await supabase;
      .from("job_applications");
      .update({;
        match_score: matchResult.score,;
        match_summary: matchResult.summary,;
        match_breakdown: matchResult.breakdown,;
        match_suggestion: matchResult.suggestion,;
        scored_at: new Date().toISOString();
      });
      .eq("id", applicationId),;
    if (updateError) {;
      throw new Error(`Failed to update application with score: ${updateError.message}`);
    }
;
    // 7. Return the match results;
    return new Response(;
      JSON.stringify({;
        success: true,;
        matchResult;
      }),;
      {;
        status: 200,;
        headers: { ...corsHeaders, "Content-Type": "application/json" } ;
      }
    );
  } catch (error) {;
    console.error("Error in resume-scorer function:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;
      {;
        status: 500,;
        headers: { ...corsHeaders, "Content-Type": "application/json" } ;
      }
    );
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
    console.error ("Error in resume - scorer function:", error);
    return new Response (
      JSON.stringify ({ error: error.message });
      {
        status: 500,
        headers: { ...cors_headers, "Content - Type": "application / json" }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      }
    );
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  }
});

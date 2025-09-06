<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from "https: //esm ;

<<<<<<< HEAD
=======


import "https: //deno.land/x/xhr@0.1.0/mod.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
serve(async (req) => {
  // Handle CORS preflight requests
  if (req && req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";
  const supabaseAnonKey = Deno && Deno.env.get("SUPABASE_ANON_KEY") || "";
  const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY") || "";
  

<<<<<<< HEAD
  if (!openAiKey) {
    return new Response(
      JSON && JSON.stringify({ error: "OpenAI API key is not configured" });
=======
  const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";
  const supabaseAnonKey = Deno && Deno.env.get("SUPABASE_ANON_KEY") || "";
  const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY") || "";
  if (!openAiKey) {
    return new Response(
      JSON && JSON.stringify({ error: "OpenAI API key is not configured" });
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts",;
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
  }
  const supabaseUrl = Deno.env.get("SUPABASE_URL") |"";
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") |"";
  const openAiKey = Deno.env.get("OPENAI_API_KEY") |"";
  if (!openAiKey) {
    return new Response(
      JSON.stringify({ error: "OpenAI API key is not configured" });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  }
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  try {

<<<<<<< HEAD
    const { applicationId } = await req && req.json();
=======

=======

    const { applicationId } = await req.json();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";
  const openAiKey = Deno.env.get("OPENAI_API_KEY") || "";
  
  if (!openAiKey) {
    return new Response(
      JSON.stringify({ error: "OpenAI API key is not configured" });
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",;
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",;
  const openAiKey = Deno.env.get("OPENAI_API_KEY") || "",;
  if (!openAiKey) {;
    return new Response(;
      JSON.stringify({ error: "OpenAI API key is not configured" }),;


<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey),

  try {
    const { applicationId } = await req.json(),
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    
    const { applicationId } = await req && req.json();
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    if (!applicationId) {
      throw new Error("Application ID is required")
    }
    // 1. Fetch the application with job details and resume content
    const { data: application, error: appError } = await supabase
      .from("job_applications")
      .select(`
<<<<<<< HEAD
=======
=======
        id,
        job_id,
        talent_id,
        cover_letter,
        resume_id,
        job:jobs(title, description, skills),
        talent_profile:profiles!talent_id(bio, skills)
      `)
      .eq("id", applicationId)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD


=======
      .single();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      .single(),

    if (appError) {
<<<<<<< HEAD
      throw new Error(`Failed to fetch application: ${appError && appError.message}`)
=======
      throw new Error(`Failed to fetch application: ${appError.message}`)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }
    if (!application) {
      throw new Error("Application not found")
    }
    // 2. Fetch resume details if a resume_id is provided
<<<<<<< HEAD

    let resumeSkills: string[] = [],
    
    if (application && application.resume_id) {

=======
=======
    let resumeSkills: string[] = [],
    if (application && application.resume_id) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    let resumeContent = "",
    let resumeSkills: string[] = [],
    

    if (application.resume_id) {
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      const { data: resume, error: resumeError } = await supabase
        .from("talent_resumes")
        .select(`
          summary;
          headline;
          resume_skills!inner(name, category, years_experience);
          work_history!inner(company_name, role_title, start_date, end_date, description);
          education!inner(institution, degree, field_of_study)
        `)

        .eq("id", application.resume_id)

        .single(),
        


      if (resumeError) {
        console && console.error("Error fetching resume:", resumeError)
      } else if (resume) {
        // Format resume content for analysis
        resumeContent = `
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          Summary: ${resume && resume.summary || ""}
          Headline: ${resume && resume.headline || ""}
          
          Work Experience:
          ${resume && resume.work_history.map((job: any) => 
            `${job && job.role_title} at ${job && job.company_name} (${new Date(job && job.start_date).getFullYear()} - ${job && job.end_date ? new Date(job && job.end_date).getFullYear() : 'Present'})
            ${job && job.description || ""}`
<<<<<<< HEAD

=======
        `,
        


        resumeSkills = resume.resume_skills.map((skill: any) => skill.name)
        
          ).join("\n\n")}
          Education:
          ${resume && resume.education.map((edu: any) => 
            `${edu && edu.degree} in ${edu && edu.field_of_study || ""} from ${edu && edu.institution}`
          ).join("\n")}
          Skills:
          ${resume && resume.resume_skills.map((skill: any) => skill && skill.name).join(", ")}
        `;
        resumeSkills = resume && resume.resume_skills.map((skill: any) => skill && skill.name)
    let resumeContent = "";
    let resumeSkills: string[] = []
    let resumeContent = "",
    let resumeSkills: string[] = [],
    
    if (application.resume_id) {
      const { data: resume, error: resumeError } = await supabase
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
        .single(),
        
      if (resumeError) {
        console.error("Error fetching resume:", resumeError)
      } else if (resume) {
        // Format resume content for analysis
        resumeContent = `
          Summary: ${resume.summary |""}
          Headline: ${resume.headline |""}
          Work Experience:
          ${resume.work_history.map((job: any) =>
            `${job.role_title} at ${job.company_name} (${new Date(job.start_date).getFullYear()} - ${job.end_date ? new Date(job.end_date).getFullYear() : 'Present'})
            ${job.description |""}`
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          ).join("\n\n")}
          Education:
          ${resume.education.map((edu: any) =>
            `${edu.degree} in ${edu.field_of_study |""} from ${edu.institution}`
          ).join("\n")}
          Skills:
          ${resume.resume_skills.map((skill: any) => skill.name).join(", ")}
        `;
        `,
        
        resumeSkills = resume.resume_skills.map((skill: any) => skill.name)
<<<<<<< HEAD
=======
        
        resumeSkills = resume && resume.resume_skills.map((skill: any) => skill && skill.name)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      }
    }
    // 3. If no resume content, use talent profile and cover letter
    if (!resumeContent) {
      resumeContent = `
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        Bio: ${application && application.talent_profile?.bio || ""}
        Cover Letter: ${application && application.cover_letter || ""}
        Skills: ${application && application.talent_profile?.skills?.join(", ") || ""}
      `;
      resumeSkills = application && application.talent_profile?.skills || []
<<<<<<< HEAD

    }
    // 4. Prepare job details


=======
        Bio: ${application.talent_profile?.bio |""}
        Cover Letter: ${application.cover_letter |""}
        Skills: ${application.talent_profile?.skills?.join(", ") |""}
      `;
      resumeSkills = application.talent_profile?.skills |[]
    }
    // 4. Prepare job details
    const jobTitle = application.job?.title |"";
    const jobDescription = application.job?.description |"";
    const jobSkills = application.job?.skills |[];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        Bio: ${application.talent_profile?.bio || ""}
        Cover Letter: ${application.cover_letter || ""}
        Skills: ${application.talent_profile?.skills?.join(", ") || ""}
      `;
      resumeSkills = application.talent_profile?.skills || []
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }

    // 4. Prepare job details
    const jobTitle = application.job?.title || "",
    const jobDescription = application.job?.description || "",
    const jobSkills = application.job?.skills || [],

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    // 5. Process using OpenAI to calculate match score
    const openAIResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST"
      headers: {
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        "Authorization": `Bearer ${openAiKey}`,
        "Content-Type": "application/json"},


      body: JSON.stringify({
<<<<<<< HEAD
=======
=======
    }
    // 4. Prepare job details
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======
        "Authorization": `Bearer ${openAiKey}`;
        "Content-Type": "application/json"}
        "Authorization": `Bearer ${openAiKey}`,
        "Content-Type": "application/json"},
      body: JSON.stringify({
        model: "gpt-4o-mini",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        messages: [
          {
            role: "system"
            content: `You are an expert resume analyzer that compares resumes against job descriptions
            to determine how well a candidate matches a job. Analyze the resume and job details
            provided, focusing on skills, experience, and qualifications.`

<<<<<<< HEAD

          },


=======
          },


          }
          },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          {
            role: "user"
            content: `
            # Job Details
            Title: ${jobTitle}
            Description: ${jobDescription}
<<<<<<< HEAD

            Required Skills: ${jobSkills && jobSkills.join(", ")}
            

=======
            Required Skills: ${jobSkills && jobSkills.join(", ")}
            Required Skills: ${jobSkills.join(", ")}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            # Resume Content
            ${resumeContent}
            Compare the resume to the job description and provide:
            1. A match score between 0-100 (where 100 is a perfect match)
            2. A brief summary of why this score was given (1-2 sentences)
            3. A detailed breakdown of how well the candidate's skills and experience align with job requirements
            4. A suggestion categorization: "Strongly Recommended", "Recommended for Review", or "Low Match"
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            Respond in JSON format with the following structure: {
              "score": 75;
              "summary": "Good match with relevant experience in required technologies.";
              "breakdown": {
                "skills_match": {
                  "score": 80
                  "matching": ["skill1", "skill2"];
<<<<<<< HEAD


=======
                  "missing": ["skill3"]
                }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            
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
<<<<<<< HEAD


                "experience_match": {
                  "score": 70;
                  "analysis": "Candidate has X years experience in relevant field."

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                  "missing": ["skill3"];
                }
                "experience_match": {
                  "score": 70;
                  "analysis": "Candidate has X years experience in relevant field.";
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                }
                "education_match": {
                  "score": 65;
                  "analysis": "Candidate has relevant degree.";
                }
              }
<<<<<<< HEAD

              "suggestion": "Recommended for Review";
            }`;

          }
        ];

=======
              "suggestion": "Recommended for Review";
            }`;
          }
        ];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        temperature: 0 && 0.5})});

    if (!openAIResponse && openAIResponse.ok) {
      const errorData = await openAIResponse && openAIResponse.json();
      throw new Error(`OpenAI API Error: ${JSON && JSON.stringify(errorData)}`)
    }

    const aiResult = await openAIResponse && openAIResponse.json();
<<<<<<< HEAD

    let matchResult;
    try {
      // Extract JSON from the response


                },

=======
                "experience_match": {
                  "score": 70,
                  "analysis": "Candidate has X years experience in relevant field."
                }
                },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                "education_match": {
                  "score": 65,
                  "analysis": "Candidate has relevant degree."
                }
<<<<<<< HEAD


=======
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }

    const aiResult = await openAIResponse.json(),
    let matchResult,
    
    try {
      // Extract JSON from the response
      const content = aiResult.choices[0].message.content,
      matchResult = JSON.parse(content),
      

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      // Validate required fields
      if (!matchResult.score |!matchResult.summary |!matchResult.suggestion) {
=======
=======
      // Validate required fields
      if (!matchResult.score |!matchResult.summary |!matchResult.suggestion) {
    let matchResult;
    try {
      // Extract JSON from the response
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      const content = aiResult && aiResult.choices[0].message && message.content;
      matchResult = JSON && JSON.parse(content);
      
      // Validate required fields
      if (!matchResult && matchResult.score || !matchResult && matchResult.summary || !matchResult && matchResult.suggestion) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        throw new Error("Invalid response format")
      }
    } catch (error) {
      console && console.error("Error parsing AI response:", error);
<<<<<<< HEAD
=======
      
      // Validate required fields
      if (!matchResult.score |!matchResult.summary |!matchResult.suggestion) {
        throw new Error("Invalid response format")
      }
    } catch (error) {
      console.error("Error parsing AI response:", error),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      throw new Error("Failed to parse AI analysis results")
    }
    // 6. Update the application with the match results
    const { error: updateError } = await supabase
      .from("job_applications")
      .update({

        match_score: matchResult && matchResult.score;
        match_summary: matchResult && matchResult.summary;
        match_breakdown: matchResult && matchResult.breakdown;
        match_suggestion: matchResult && matchResult.suggestion,
<<<<<<< HEAD

        scored_at: new Date().toISOString()
      })
      .eq("id", applicationId);
=======

=======
        match_score: matchResult.score;
        match_summary: matchResult.summary;
        match_breakdown: matchResult.breakdown;
        match_suggestion: matchResult.suggestion
        scored_at: new Date().toISOString()
      })
      .eq("id", applicationId);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        match_score: matchResult.score,
        match_summary: matchResult.summary,
        match_breakdown: matchResult.breakdown,
        match_suggestion: matchResult.suggestion,
        scored_at: new Date().toISOString()
      })
      .eq("id", applicationId),

<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    if (updateError) {
      throw new Error(`Failed to update application with score: ${updateError && updateError.message}`)
    }
    // 7. Return the match results
    return new Response(

      JSON && JSON.stringify({ 
        success: true, 
        matchResult 

=======
    if (updateError) {
      throw new Error(`Failed to update application with score: ${updateError.message}`)
    }
    // 7. Return the match results
    return new Response(
      JSON.stringify({
        success: true
        matchResult
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      });
      {
        status: 200
        headers: { ...corsHeaders, "Content-Type": "application/json" }
<<<<<<< HEAD
=======
=======
      JSON.stringify({ 
        success: true, 
        matchResult 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    )
  } catch (error) {
    console.error("Error in resume-scorer function:", error),
    return new Response(
      JSON.stringify({ error: error.message });
      {
        status: 500
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    )
  }
});

      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
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
      JSON && JSON.stringify({ 
        success: true, 
        matchResult 

      JSON && JSON.stringify({ 
        success: true, 
        matchResult 
      });
      {
        status: 200
        headers: { ...corsHeaders, "Content-Type": "application/json" }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

      JSON.stringify({ 
        success: true, 
        matchResult 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      }
    } catch (error) {
      console.error ("Error parsing AI response:", error);
      throw new Error ("Failed to parse AI analysis results");
    }
    // 6. Update the application with the match results;
    const { error: update_error } = await supabase;
      .from ("job_applications");
      .update ({
        match_score: match_result.score;
        match_summary: match_result.summary;
        match_breakdown: match_result.breakdown;
        match_suggestion: match_result.suggestion,
        scored_at: new Date ().toISOString ();
      });
      .eq ("id", application_id);
;
    // Check condition
if ( {) {
  $2
}
      throw new Error (`Failed to update application with score: ${update_error.message}`);
    }
    // 7. Return the match results;
    return new Response (
      JSON.stringify ({
        success: true,
        match_result;
      });
      {
        status: 200,
        headers: { ...cors_headers, "Content - Type": "application / json" }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      }
    );
  } catch (error) {
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      JSON && JSON.stringify({ error: error && error.message });
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    console.error ("Error in resume - scorer function:", error);
    return new Response (
      JSON.stringify ({ error: error.message });
      {
        status: 500,
        headers: { ...cors_headers, "Content - Type": "application / json" }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      }
    );

      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 

  }
});
<<<<<<< HEAD

;

=======
;

import "https://deno.land/x/xhr@0.1.0/mod.ts",;
import { serve } from "https://deno.land/std@0.168.0/http/server.ts",;
import { createClient } from "https://esm.sh/@supabase/supabase-js@2",;
;
const corsHeaders = {;
  "Access-Control-Allow-Origin":"*",;
  "Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type"},;
;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers:corsHeaders }),;
  }
;
  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",;
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",;
  const openAiKey = Deno.env.get("OPENAI_API_KEY") || "",;
  ;
  if (!openAiKey) {;
    return new Response(;
      JSON.stringify({ error:"OpenAI API key is not configured" }),;
      { status:500, headers:{ ...corsHeaders, "Content-Type":"application/json" } }
    ),;
  }
;
  const supabase = createClient(supabaseUrl, supabaseAnonKey),;
;
  try {;
    const { applicationId } = await req.json(),;
    ;
    if (!applicationId) {;
      throw new Error("Application ID is required"),;
    }
;
    // 1. Fetch the application with job details and resume content;
    const { data:application, error:appError } = await supabase;
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
;
    if (appError) {;
      throw new Error(`Failed to fetch application:${appError.message}`),;
    }
;
    if (!application) {;
      throw new Error("Application not found"),;
    }
;
    // 2. Fetch resume details if a resume_id is provided;
    let resumeContent = "",;
    let resumeSkills:string[] = [],;
    ;
    if (application.resume_id) {;
      const { data:resume, error:resumeError } = await supabase;
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
        ;
      if (resumeError) {;
        console.error("Error fetching resume:", resumeError),;
      } else if (resume) {;
        // Format resume content for analysis;
        resumeContent = `;
          Summary:${resume.summary || ""}
          Headline:${resume.headline || ""}
          ;
          Work Experience:;
          ${resume.work_history.map((job:any) => ;
            `${job.role_title} at ${job.company_name} (${new Date(job.start_date).getFullYear()} - ${job.end_date ? new Date(job.end_date).getFullYear() :'Present'});
            ${job.description || ""}`;
          ).join("\n\n")}
          ;
          Education:;
          ${resume.education.map((edu:any) => ;
            `${edu.degree} in ${edu.field_of_study || ""} from ${edu.institution}`;
          ).join("\n")}
          ;
          Skills:;
          ${resume.resume_skills.map((skill:any) => skill.name).join(", ")}
        `,;
        ;
        resumeSkills = resume.resume_skills.map((skill:any) => skill.name);
      }
    }
    ;
    // 3. If no resume content, use talent profile and cover letter;
    if (!resumeContent) {;
      resumeContent = `;
        Bio:${application.talent_profile?.bio || ""}
        Cover Letter:${application.cover_letter || ""}
        Skills:${application.talent_profile?.skills?.join(", ") || ""}
      `,;
      resumeSkills = application.talent_profile?.skills || [],;
    }
;
    // 4. Prepare job details;
    const jobTitle = application.job?.title || "",;
    const jobDescription = application.job?.description || "",;
    const jobSkills = application.job?.skills || [],;
;
    // 5. Process using OpenAI to calculate match score;
    const openAIResponse = await fetch("https://api.openai.com/v1/chat/completions", {;
      method:"POST",;
      headers:{;
        "Authorization":`Bearer ${openAiKey}`,;
        "Content-Type":"application/json"},;
      body:JSON.stringify({;
        model:"gpt-4o-mini",;
        messages:[;
          {;
            role:"system",;
            content:`You are an expert resume analyzer that compares resumes against job descriptions;
            to determine how well a candidate matches a job. Analyze the resume and job details ;
            provided, focusing on skills, experience, and qualifications.`;
          },;
          {;
            role:"user",;
            content:`;
            # Job Details;
            Title:${jobTitle}
            Description:${jobDescription}
            Required Skills:${jobSkills.join(", ")}
            ;
            # Resume Content;
            ${resumeContent}
            ;
            Compare the resume to the job description and provide:;
            1. A match score between 0-100 (where 100 is a perfect match);
            2. A brief summary of why this score was given (1-2 sentences);
            3. A detailed breakdown of how well the candidate's skills and experience align with job requirements;
            4. A suggestion categorization:"Strongly Recommended", "Recommended for Review", or "Low Match";
            ;
            Respond in JSON format with the following structure:;
            {;
              "score":75,;
              "summary":"Good match with relevant experience in required technologies.",;
              "breakdown":{;
                "skills_match":{;
                  "score":80,;
                  "matching":["skill1", "skill2"],;
                  "missing":["skill3"];
                },;
                "experience_match":{;
                  "score":70,;
                  "analysis":"Candidate has X years experience in relevant field.";
                },;
                "education_match":{;
                  "score":65,;
                  "analysis":"Candidate has relevant degree.";
                }
              },;
              "suggestion":"Recommended for Review";
            }`;
          }
        ],;
        temperature:0.5})}),;
;
    if (!openAIResponse.ok) {;
      const errorData = await openAIResponse.json(),;
      throw new Error(`OpenAI API Error:${JSON.stringify(errorData)}`),;
    }
;
    const aiResult = await openAIResponse.json(),;
    let matchResult,;
    ;
    try {;
      // Extract JSON from the response;
      const content = aiResult.choices[0].message.content,;
      matchResult = JSON.parse(content),;
      ;
      // Validate required fields;
      if (!matchResult.score || !matchResult.summary || !matchResult.suggestion) {;
        throw new Error("Invalid response format"),;
      }
    } catch (error) {;
      console.error("Error parsing AI response:", error),;
      throw new Error("Failed to parse AI analysis results"),;
    }
;
    // 6. Update the application with the match results;
    const { error:updateError } = await supabase;
      .from("job_applications");
      .update({;
        match_score:matchResult.score,;
        match_summary:matchResult.summary,;
        match_breakdown:matchResult.breakdown,;
        match_suggestion:matchResult.suggestion,;
        scored_at:new Date().toISOString();
      });
      .eq("id", applicationId),;
;
    if (updateError) {;
      throw new Error(`Failed to update application with score:${updateError.message}`),;
    }
;
    // 7. Return the match results;
    return new Response(;
      JSON.stringify({ ;
        success:true, ;
        matchResult ;
      }),;
      { ;
        status:200, ;
        headers:{ ...corsHeaders, "Content-Type":"application/json" } ;
      }
    ),;
  } catch (error) {;
    console.error("Error in resume-scorer function:", error),;
    return new Response(;
      JSON.stringify({ error:error.message }),;
      { ;
        status:500, ;
        headers:{ ...corsHeaders, "Content-Type":"application/json" } ;
      }
    ),;  }
}),;
 serve (async (req) => {
  //Handle CORS preflight requests if (req.method === "OPTIONS") {
  
}const supabase = createClient (supabaseUrl, supabaseAnonKey);
try {
  const {
  applicationId 
}= await req.json ();
if (!applicationId) {
  
}//1. Fetch the application with job details and resume content const {
  data: application, error: appError 
}= await supabase .from ("job applications") job id;
talent id;
cover letter;
resume id;
job: jobs (title, description, skills);
talent profile:profiles!talent id (bio, skills) `) let resumeSkills: string[] = [];
headline;
resume skills!inner (name, category, years experience);
work history!inner (company name, role title, start date, end date, description);
education!inner (institution, degree, field of study) `) 
}else if (resume) {
  //Format resume content for analysis resumeContent = ` Summary: $ {
  resume.summary || "" 
}Headline: $ {
  resume.headline || "" 
}Work Experience: $ {
  resume.work history.map ( (job: any) => `$ {
  job.role title 
}at $ {
  job.company name 
}($ {
  new Date (job.start date) .getFullYear () 
}- $ {
  job.end date ? new Date (job.end date) .getFullYear () : 'Present' 
}) $ {
  job.description || "" 
}`) .join (" \n\n") 
}Education: $ {
  resume.education.map ( (edu: any) => `$ {
  edu.degree 
}in $ {
  edu.field of study || "" 
}from $ {
  edu.institution 
}`) .join (" \n") 
}Skills: `;
}
}//3. If no resume content, use talent profile and cover letter `;
resumeSkills = application.talent profile?.skills || [];
}//4. Prepare job details # Resume Content $ {
  resumeContent 
}Compare the resume to the job description and provide: 1. A match score between 0-100 (where 100 is a perfect match) 2. A brief summary of why this score was given (1-2 sentences) 3. A detailed breakdown of how well the candidate's skills and experience align with job requirements 4. A suggestion categorization: " Strongly Recommended", " Recommended for Review", or " Low Match"Respond in JSON format with the following structure: 
};
" suggestion": " Recommended for Review" 
}` 
}];
temperature: 0.5 
}) 
});
}//6. Update the application with the match results const {
  error: updateError 
}= await supabase .from (" job applications") .update ({
  match score: matchResult.score;
match summary: matchResult.summary;
match breakdown: matchResult.breakdown;
match suggestion: matchResult.suggestion;
scored at: new Date () .toISOString () 
}) if (updateError) {
  throw new Error (`Failed to update application with score: $ {
  updateError.message 
}`) 
}//7. Return the match results return new Response (return new Response (JSON.stringify ({
  error: error.message 
});
{
  status: 500;
headers: {
  ...corsHeaders, " Content-Type": " application/json" 
}
}) 
}
});
  }
});
  }
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

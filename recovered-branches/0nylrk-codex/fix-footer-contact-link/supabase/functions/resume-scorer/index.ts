<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


  }

<<<<<<< HEAD


  if (!openAiKey) {
    return new Response(
      JSON.stringify({ error: "OpenAI API key is not configured" });



;
  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",;
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",;
  const openAiKey = Deno.env.get("OPENAI_API_KEY") || "",;
  if (!openAiKey) {;
    return new Response(;

      JSON.stringify({ error: "OpenAI API key is not configured" }),;




      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }

    )
      JSON.stringify({ error: "OpenAI API key is not configured" }),;      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }

import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",""
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",""
import {createClient} from "https: //esm ;"
const corsHeaders = {"
  "Access-Control-Allow-Origin": "*"""
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}""
import "https: //deno.land/x/xhr@0.1.0/mod.ts","
serve(async (req) => {
  // Handle CORS preflight requests;"
  if (req && req.method === "OPTIONS") {"
    return new Response(null, { headers: corsHeaders })
  }

"
  const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";""
  const supabaseAnonKey = Deno && Deno.env.get("SUPABASE_ANON_KEY") || "";""
  const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY") || "";"
  if (!openAiKey) {
    return new Response()"
      JSON && JSON.stringify({ error: "OpenAI API key is not configured" });"
  if (!openAiKey) {
    return new Response()"
      JSON && JSON.stringify({ error: "OpenAI API key is not configured" });""
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }"
    )
  }
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  try {
  // TODO: Implement
}
    const { applicationId } = await req && req.json();

"
  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";""
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";""
  const openAiKey = Deno.env.get("OPENAI_API_KEY") || "";"
  if (!openAiKey) {
    return new Response()"
      JSON.stringify({ error: "OpenAI API key is not configured" });"
;"
  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",;""
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",;""
  const openAiKey = Deno.env.get("OPENAI_API_KEY") || "",;"
  if (!openAiKey) {;
    return new Response(;)"
      JSON.stringify({ error: "OpenAI API key is not configured" }),;""
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }"

    )
  }
  const supabase = createClient(supabaseUrl, supabaseAnonKey),


  try {
    const { applicationId } = await req.json(),


=======
  const supabaseUrl = $2;
  const supabaseAnonKey = $2;
  const openAiKey = $2;
  if (!openAiKey) {
    return new Response($2);
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    )
  }

  const supabase = createClient($2);
  try {
    const { applicationId } = await req.json($2);
    if (!applicationId) {
      throw new Error("Application ID is required")
    }
    // 1. Fetch the application with job details and resume content
    const { data: application, error: appError} = await supabase
      .from("job_applications")
      .select($2);
        talent_profile:profiles!talent_id(bio, skills)
      `)
      .eq("id", applicationId)
      .single($2);
    if (appError) {
      throw new Error(`Failed to fetch application: ${appError.message}`)
    }
    if (!application) {
      throw new Error("Application not found")
    }
    // 2. Fetch resume details if a resume_id is provided
    let resumeContent = $2;
    let resumeSkills: string[] = [],
    
    if (application.resume_id) {
      const { data: resume, error: resumeError} = await supabase
        .from("talent_resumes")
        .select($2);
          work_history!inner($2);
          education!inner(institution, degree, field_of_study)
        `)
        .eq("id", application.resume_id)
        .single($2);
import "https: //deno && deno.land/x/xhr@0 && 0.1.0/mod && mod.ts",
import {serve} from "https: //deno && deno.land/std@0 && 0.168.0/http/server && server.ts",
import {createClient} from "https: //esm ;



import "https: //deno.land/x/xhr@0.1.0/mod.ts"
import {serve} from "https: //deno.land/std@0.168.0/http/server.ts"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*"
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"}
import "https: //deno.land/x/xhr@0.1.0/mod.ts",

    return new Response(null, { headers: corsHeaders })
  }

  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},


  const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";
  const supabaseAnonKey = Deno && Deno.env.get("SUPABASE_ANON_KEY") || "";
  const openAiKey = Deno && Deno.env.get("OPENAI_API_KEY") || "";
  

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
>>>>>>> origin/cursor/delete-old-data-records-6bba

    if (!applicationId) {

      throw new Error("Application ID is required")
    }
    // 1. Fetch the application with job details and resume content;
    const { data: application, error: appError } = await supabase"
      .from("job_applications")
      .select(`

<<<<<<< HEAD

=======

        job_id,
        talent_id,
        cover_letter,
        resume_id,
        job:jobs(title, description, skills),
        talent_profile:profiles!talent_id(bio, skills)
      `)
      .eq("id", applicationId)


>>>>>>> origin/cursor/delete-old-data-records-6bba
import "https: //deno.land / x/xhr@0.1.0 / mod.ts",
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,

import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2';
const cors_headers = {"
  "Access - Control - Allow - Origin": "*","
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}
;
serve (async (req) => {}
  // Handle CORS preflight requests;
  // Check condition;
if ( {) {}
  $2;
}
    return new Response (null, { headers: cors_headers });
  }"
  const supabase_url = Deno.env.get ("SUPABASE_URL") || "";"
  const supabaseAnonKey = Deno.env.get ("SUPABASE_ANON_KEY") || "";"
  const openAiKey = Deno.env.get ("OPENAI_API_KEY") || "";
;
  // Check condition;
if ( {) {}
  $2;
}
    return new Response ("
      JSON.stringify ({ error: "OpenAI API key is not configured" });"
      { status: 500, headers: { ...cors_headers, "Content - Type": "application / json" } }
  // TODO: Implement
}
    const { applicationId } = await req.json(),
    const { applicationId } = await req && req.json();
    if (!applicationId) {"
      throw new Error("Application ID is required")"
    }
    // 1. Fetch the application with job details and resume content;
    const { data: application, error: appError } = await supabase;"
      .from("job_applications")"
      .select(`"
import "https: //deno.land / x/xhr@0.1.0 / mod.ts",""
import { serve } from 'https: //deno.land / std@0.168.0 / http / server.ts';,''
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2';'
const cors_headers = {'
  "Access - Control - Allow - Origin": "*",""
  "Access - Control - Allow - Headers": "authorization, x - client - info, apikey, content - type"}"
;)
serve (async (req) => {
  // Handle CORS preflight requests;
  // Check condition;
if ( {) {
  $2;
}
    return new Response (null, { headers: cors_headers });
  }"
  const supabase_url = Deno.env.get ("SUPABASE_URL") || "";""
  const supabaseAnonKey = Deno.env.get ("SUPABASE_ANON_KEY") || "";""
  const openAiKey = Deno.env.get ("OPENAI_API_KEY") || "";"
;
  // Check condition;
if ( {) {
  $2;
}
    return new Response ()"
      JSON.stringify ({ error: "OpenAI API key is not configured" });""
      { status: 500, headers: { ...cors_headers, "Content - Type": "application / json" } }"

    );
  }
  const supabase = create_client (supabase_url, supabaseAnonKey);
;

    const { application_id } = await req.json ();
;
    // Check condition;
if ( {) {}
  $2;
}"
      throw new Error ("Application ID is required");
    }
    // 1. Fetch the application with job details and resume content;

      .select (`;


        id;
        job_id;
        talent_id;
        cover_letter;
<<<<<<< HEAD

        resume_id;
      .single();
      .single(),

    if (appError) {

=======


      .single(),

    if (appError) {


>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    if (!application) {"
      throw new Error("Application not found")
    }
<<<<<<< HEAD

    // 2. Fetch resume details if a resume_id is provided

=======


    let resumeSkills: string[] = [],
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (application && application.resume_id) {

    let resumeContent = "",
    let resumeSkills: string[] = [],

    if (application.resume_id) {}
      const { data: resume, error: resumeError } = await supabase"
        .from("talent_resumes")`

    let resumeContent = "",
    let resumeSkills: string[] = [],

    if (application.resume_id) {
      const { data: resume, error: resumeError } = await supabase
        .from("talent_resumes")

        .select(`
          summary;
          headline;
          resume_skills!inner(name, category, years_experience);
          work_history!inner(company_name, role_title, start_date, end_date, description);

      if (resumeError) {
<<<<<<< HEAD

        console && console.error("Error fetching resume:", resumeError)
=======


        console && console.error("Error fetching resume:", resumeError)
      } else if (resume) {}
        // Format resume content for analysis;`
        resumeContent = `
"
          Summary: ${resume && resume.summary || ""}"

        console && console.error("Error fetching resume:", resumeError)
>>>>>>> origin/cursor/delete-old-data-records-6bba
      } else if (resume) {
        // Format resume content for analysis
        resumeContent = `
          Summary: ${resume && resume.summary || ""}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          Headline: ${resume && resume.headline || ""}
          Work Experience:
          ${resume && resume.work_history.map((job: any) => '`
            `${job && job.role_title} at ${job && job.company_name} (${new Date(job && job.start_date).getFullYear()} - ${job && job.end_date ? new Date(job && job.end_date).getFullYear() : 'Present'})"`

            ${job && job.description || ""}`
<<<<<<< HEAD

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
=======


`,
        resumeSkills = resume.resume_skills.map((skill: any) => skill.name)

        resumeSkills = resume && resume.resume_skills.map((skill: any) => skill && skill.name)
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

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


          Education:
          ${resume.education.map((edu: any) =>
            `${edu.degree} in ${edu.field_of_study |""} from ${edu.institution}`
          ).join("\n")}
          Skills:
          ${resume.resume_skills.map((skill: any) => skill.name).join(", ")}


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }
    }
    // 3. If no resume content, use talent profile and cover letter;
    if (!resumeContent) {}`
      resumeContent = `
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        Bio: ${application && application.talent_profile?.bio || ""}
        Cover Letter: ${application && application.cover_letter || ""}
        Skills: ${application && application.talent_profile?.skills?.join(", ") || ""}

      `;
<<<<<<< HEAD

      resumeSkills = application && application.talent_profile?.skills || []

=======


      resumeSkills = application.talent_profile?.skills |[]

    }
    // 4. Prepare job details


Bio: ${application.talent_profile?.bio |""}
        Cover Letter: ${application.cover_letter |""}
        Skills: ${application.talent_profile?.skills?.join(", ") |""}
      `;
      resumeSkills = application.talent_profile?.skills |[]
    }
    // 4. Prepare job details

      resumeSkills = application.talent_profile?.skills |[]
    }
    // 4. Prepare job details      resumeSkills = application.talent_profile?.skills |[]
    }
    // 4. Prepare job details;
    "Bio": ${application.talent_profile?.bio || ""}"
        Cover "Letter": ${application.cover_letter || ""}"
        "Skills": ${application.talent_profile?.skills?.join(", ") || ""}"
      `;`      resumeSkills = application.talent_profile?.skills || []    );

>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
;
  try {;
    }
    if (!applicationId) {;
      }
      throw new Error("Application ID is required");"
    }
;
    // 1. Fetch the application with job details and resume content;
      .from("job_applications");"
      .select(`;`        id,;
        job_id,;
        talent_id,;
        cover_letter,;
        resume_id,;
        "job":jobs(title, description, skills),;
        "talent_profile":profiles!talent_id(bio, skills);
      `);`      .eq("id", applicationId);"
      .single(),;
    if (appError) {;
      }
      throw new Error(`Failed to fetch "application": ${appError.message}`);`    }
;
    if (!application) {;
      }
      throw new Error("Application not found");"
    }
;
    // 2. Fetch resume details if a resume_id is provided;
    let resumeContent = "",;"
    let "resumeSkills": string[] = [],;
    if (application.resume_id) {;
      }
      const { "data": resume, "error": resumeError } = await supabase;
        .from("talent_resumes");"
        .select(`;`          summary,;
          headline,;
          resume_skills!inner(name, category, years_experience),;
          work_history!inner(company_name, role_title, start_date, end_date, description),;
          education!inner(institution, degree, field_of_study);
        `);`        .eq("id", application.resume_id);"
        .single(),;
      if (resumeError) {;
        }
        console.error("Error fetching "resume":", resumeError);"
      } else if (resume) {;
        // Format resume content for analysis;
        }
        resumeContent = `;`          "Summary": ${resume.summary || ""}"
          "Headline": ${resume.headline || ""}"
;
          Work "Experience":;
          ${resume.work_history.map(("job": any) =>;
            `${job.role_title} at ${job.company_name} (${new Date(job.start_date).getFullYear()} - ${job.end_date ? new Date(job.end_date).getFullYear() : 'Present'});'
            ${job.description || ""}`;`          ).join("\n\n")}"
;
          "Education":;
          ${resume.education.map(("edu": any) =>;
            `${edu.degree} in ${edu.field_of_study || ""} from ${edu.institution}`;`          ).join("\n")}"
;
          "Skills":;
          ${resume.resume_skills.map(("skill": any) => skill.name).join(", ")}"
        `,;`        resumeSkills = resume.resume_skills.map(("skill": any) => skill.name);
      }
    }
;
    // 3. If no resume content, use talent profile and cover letter;
    if (!resumeContent) {;
      }
      resumeContent = `;`        "Bio": ${application.talent_profile?.bio || ""}"
        Cover "Letter": ${application.cover_letter || ""}"
        "Skills": ${application.talent_profile?.skills?.join(", ") || ""}"
      `,;`      resumeSkills = application.talent_profile?.skills || [];
    }
    // 4. Prepare job details,
const jobTitle = application.job?.title || "",;"
const jobDescription = application.job?.description || "",;"
const jobSkills = application.job?.skills || [],;
        "model": "gpt-4o-mini";          {"
            }
            "role": "role","
    "content": `You are an expert resume analyzer that compares resumes against job descriptions`            to determine how well a candidate matches a job. Analyze the resume and job details,
provided, focusing on skills, experience, and qualifications.``          },
<<<<<<< HEAD

            # Resume Content

=======
            # Resume Content
    // 4. Prepare job details

        Bio: ${application.talent_profile?.bio || ""}
        Cover Letter: ${application.cover_letter || ""}

        Skills: ${application.talent_profile?.skills?.join(", ") || ""});

    }

    // 4. Prepare job details"
    const jobTitle = application.job?.title || "","
    const jobDescription = application.job?.description || "",
    const jobSkills = application.job?.skills || [],

>>>>>>> origin/cursor/delete-old-data-records-6bba

    // 5. Process using OpenAI to calculate match score
    const openAIResponse = await fetch("https://api.openai.com/v1/chat/completions", {

      method: "POST"
<<<<<<< HEAD

      headers: {
=======

      headers: {}
"`
        "Authorization": `Bearer ${openAiKey}`,"
        "Content-Type": "application/json"},

      body: JSON.stringify({}
"
    const jobTitle = application && application.job?.title || "";"
    const jobDescription = application && application.job?.description || "";
    const jobSkills = application && application.job?.skills || [];

    // 5. Process using OpenAI to calculate match score"
    const openAIResponse = await fetch("https://api && api.openai.com/v1/chat/completions", {"
>>>>>>> origin/cursor/delete-old-data-records-6bba

      method: "POST",
      headers: {"`
        "Authorization": `Bearer ${openAiKey}`;"
        "Content-Type": "application/json"};

<<<<<<< HEAD
      body: JSON && JSON.stringify({
=======
      body: JSON && JSON.stringify({}
"
        model: "gpt-4o-mini";

    }
    // 4. Prepare job details"
>>>>>>> origin/cursor/delete-old-data-records-6bba
        model: "gpt-4o-mini";

          {
            role: "user"

            content: `
            # Job Details;
            Title: ${jobTitle}
            Description: ${jobDescription}

<<<<<<< HEAD


            # Resume Content

            ${resumeContent}
            Compare the resume to the job description and provide:
            1. A match score between 0-100 (where 100 is a perfect match)

=======
            ${resumeContent}
            Compare the resume to the job description and provide:
            1. A match score between 0-100 (where 100 is a perfect match)
>>>>>>> origin/cursor/delete-old-data-records-6bba
            2. A brief summary of why this score was given (1-2 sentences)'
            3. A detailed breakdown of how well the candidate's skills and experience align with job requirements"
            4. A suggestion categorization: "Strongly Recommended", "Recommended for Review", or "Low Match"

<<<<<<< HEAD
            Respond in JSON format with the following structure: {
              "score": 75;
              "summary": "Good match with relevant experience in required technologies.";
              "breakdown": {
                "skills_match": {
                  "score": 80
                  "matching": ["skill1", "skill2"];


=======
            Required Skills: ${jobSkills && jobSkills.join(", ")}
            

            # Resume Content
            ${resumeContent}
            Compare the resume to the job description and provide:
            1. A match score between 0-100 (where 100 is a perfect match)
            2. A brief summary of why this score was given (1-2 sentences)
            3. A detailed breakdown of how well the candidate's skills and experience align with job requirements
            4. A suggestion categorization: "Strongly Recommended", "Recommended for Review", or "Low Match"
        job:jobs (title, description, skills);
        talent_profile:profiles ! talent_id (bio, skills);`
      `);"
      .eq ("id", application_id);
      .single ();
;
    // Check condition;
if ( {) {}
  $2;
}`
      throw new Error (`Failed to fetch application: ${app_error.message}`);
    }
    // Check condition;
if ( {) {}
  $2;
}"
      throw new Error ("Application not found");
    }
    // 2. Fetch resume details if a resume_id is provided;"
    let resume_content = "";
    let resume_skills: string[] = [],
    // Check condition;
if ( {) {}
  $2;
}
      const { data: resume, error: resume_error } = await supabase;"
        .from ("talent_resumes");`

        .select (`;
          summary;
          headline;
          resume_skills ! inner (name, category, years_experience);
          work_history ! inner (company_name, role_title, start_date, end_date, description);

        `;
;
        resume_skills = resume.resume_skills.map ((skill: any) => skill.name);
      }
    }
    // 3. If no resume content, use talent profile and cover letter;

            Required Skills: ${job_skills.join (", ")}
            # Resume Content;
            ${resume_content}
            Compare the resume to the job description and provide:;
            1. A match score between 0 - 100 (where 100 is a perfect match);


                "experience_match": {
                  "score": 70;
                  "analysis": "Candidate has X years experience in relevant field."

>>>>>>> origin/cursor/delete-old-data-records-6bba
                  "missing": ["skill3"];
                }"
                "experience_match": {"
                  "score": 70;"
                  "analysis": "Candidate has X years experience in relevant field.";
<<<<<<< HEAD

=======


                }"
                "education_match": {"
                  "score": 65;"

                  "analysis": "Candidate has relevant degree.";

>>>>>>> origin/cursor/delete-old-data-records-6bba
                }
                "education_match": {
                  "score": 65;
                  "analysis": "Candidate has relevant degree.";
                }
              }
              "suggestion": "Recommended for Review";
            }`;
          }
        ];
        temperature: 0 && 0.5})});
    if (!openAIResponse && openAIResponse.ok) {
      const errorData = await openAIResponse && openAIResponse.json();
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      throw new Error(`OpenAI API Error: ${JSON && JSON.stringify(errorData)}`)
    }
    const aiResult = await openAIResponse && openAIResponse.json();

<<<<<<< HEAD
                "experience_match": {
=======
    let matchResult;
    try {
      // Extract JSON from the response

                },

>>>>>>> origin/cursor/delete-old-data-records-6bba

                  "score": 70,
                  "analysis": "Candidate has X years experience in relevant field."
                }
                },
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
    if (!openAIResponse.ok) {}
      const errorData = await openAIResponse.json();`

      throw new Error(`OpenAI API Error: ${JSON.stringify(errorData)}`)
    }
    const aiResult = await openAIResponse.json();
    let matchResult;

            Required Skills: ${jobSkills.join(", ")}
;
            # Resume Content;
            ${resumeContent}
;
            Compare the resume to the job description and provide:;
            1. A match score between 0-100 (where 100 is a perfect match);

            }`;
          }
        ],;
        temperature: 0.5})}),;
    if (!openAIResponse.ok) {;


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

>>>>>>> origin/cursor/delete-old-data-records-6bba
    }

    const aiResult = await openAIResponse.json(),
    let matchResult,


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Validate required fields
      if (!matchResult.score |!matchResult.summary |!matchResult.suggestion) {      // Validate required fields
      if (!matchResult.score |!matchResult.summary |!matchResult.suggestion) {
      const content = aiResult && aiResult.choices[0].message && message.content;
      matchResult = JSON && JSON.parse(content);
      // Validate required fields
      if (!matchResult && matchResult.score || !matchResult && matchResult.summary || !matchResult && matchResult.suggestion) {

<<<<<<< HEAD
        ];
    let matchResult;



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        throw new Error("Invalid response format")
      }
    } catch (error) {"
      console && console.error("Error parsing AI response:", error);
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
      throw new Error("Failed to parse AI analysis results")
    }
    // 6. Update the application with the match results;
    const { error: updateError } = await supabase"
      .from("job_applications")

        match_score: matchResult && matchResult.score;
        match_summary: matchResult && matchResult.summary;
        match_breakdown: matchResult && matchResult.breakdown;
        match_suggestion: matchResult && matchResult.suggestion,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        match_score: matchResult && matchResult.score;,
  match_summary: matchResult && matchResult.summary;
        match_breakdown: matchResult && matchResult.breakdown;,
  match_suggestion: matchResult && matchResult.suggestion,
)
        scored_at: new Date().toISOString()
      })
      .eq("id", applicationId);

        match_summary: matchResult.summary;
        match_breakdown: matchResult.breakdown;
        match_suggestion: matchResult.suggestion
        scored_at: new Date().toISOString()
      })
      .eq("id", applicationId);

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        match_score: matchResult.score,
        match_summary: matchResult.summary,
        match_breakdown: matchResult.breakdown,
        match_suggestion: matchResult.suggestion,
        scored_at: new Date().toISOString()


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (updateError) {

      throw new Error(`Failed to update application with score: ${updateError && updateError.message}`)
    }
<<<<<<< HEAD

    // 7. Return the match results;
    return new Response(


=======
;
    // 4. Prepare job details;
;
    // 5. Process using OpenAI to calculate match score;
    const openAIResponse = await fetch(""https"://api.openai.com/v1/chat/completions", {;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }
    )
  } catch (error) {"
    console.error("Error in resume-scorer function:", error),
    return new Response(

;
<<<<<<< HEAD

    const aiResult = await openAIResponse.json(),;
    let matchResult,;
    try {;
      // Extract JSON from the response;
      const content = aiResult.choices[0].message.content,;

      matchResult = JSON.parse(content),;
      // Validate required fields;
      if (!matchResult.score || !matchResult.summary || !matchResult.suggestion) {;"
        throw new Error("Invalid response format");
      }
    } catch (error) {;"
      console.error("Error parsing AI response:", error),;"
      throw new Error("Failed to parse AI analysis results");
    }
;
    // 6. Update the application with the match results;
    const { error: updateError } = await supabase;"
      .from("job_applications");
      .update({;
        match_score: matchResult.score,;
        match_summary: matchResult.summary,;
        match_breakdown: matchResult.breakdown,;
        match_suggestion: matchResult.suggestion,;
        scored_at: new Date().toISOString();
      });"
      .eq("id", applicationId),;
    if (updateError) {;`
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
        status: 200,;"
        headers: { ...corsHeaders, "Content-Type": "application/json" } ;
      });
  } catch (error) {;"
    console.error("Error in resume-scorer function:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;
      {;
        status: 500,;"
        headers: { ...corsHeaders, "Content-Type": "application/json" } ;
      });

      });
      {
        status: 200
        headers: { ...corsHeaders, "Content-Type": "application/json" }

      }
    )
  } catch (error) {
    console.error("Error in resume-scorer function:", error),
    return new Response(
      JSON.stringify({ error: error.message });
      {
        status: 200,
        headers: { ...cors_headers, "Content - Type": "application / json" }
      });
  } catch (error) {

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
      });
  } catch (error) {;
    console.error("Error in resume-scorer function:", error),;
    return new Response(;
      JSON.stringify({ error: error.message }),;
      {;
        status: 500,;
        headers: { ...corsHeaders, "Content-Type": "application/json" } ;
      });

    }
    // 7. Return the match results;
    return new Response(

      JSON && JSON.stringify({ 
        success: true, 
        matchResult 




=======
    ;
    try {;
      // Extract JSON from the response;
      }
if (updateError) {
      throw new Error(`Failed to update application with score: ${updateError.message}`)
    }
    // 7. Return the match results
    return new Response(
      JSON.stringify({
        success: true
        matchResult
>>>>>>> origin/cursor/delete-old-data-records-6bba
      });
      {
        status: 200
        headers: { ...corsHeaders, "Content-Type": "application/json" }

<<<<<<< HEAD

=======
;
    const aiResult = await openAIResponse.json(),;
    let matchResult,;
    try {;
      // Extract JSON from the response;
      const content = aiResult.choices[0].message.content,;
      matchResult = JSON.parse(content),;
      // Validate required fields;
      if (!matchResult.score || !matchResult.summary || !matchResult.suggestion) {;"
        throw new Error("Invalid response format");"
      }
    } catch (error) {;"
      console.error("Error parsing AI response:", error),;""
      throw new Error("Failed to parse AI analysis results");"
    }
;
    // 6. Update the application with the match results;
    const { error: updateError } = await supabase;"
      .from("job_applications");"
      .update({;
        match_score: matchResult.score,;
        match_summary: matchResult.summary,;
        match_breakdown: matchResult.breakdown,;
        match_suggestion: matchResult.suggestion,;)
        scored_at: new Date().toISOString();
      });"
      .eq("id", applicationId),;"
    if (updateError) {;
      throw new Error(`Failed to update application with score: ${updateError.message}`);
    }
;
    // 7. Return the match results;
    return new Response(;
      JSON.stringify({;
        success: true,;
        matchResult;)
      }),;
      {;
        status: 200,;"
        headers: { ...corsHeaders, "Content-Type": "application/json" } ;"
      });
  } catch (error) {;"
    console.error("Error in resume-scorer function:", error),;"
    return new Response(;)
      JSON.stringify({ error: error.message }),;
      {;
        status: 500,;"
        headers: { ...corsHeaders, "Content-Type": "application/json" } ;"
      });
      JSON && JSON.stringify({ 
        success: true, 
        matchResult;
      JSON && JSON.stringify({ 
        success: true, 
        matchResult;)
      });
      {
        status: 200
        headers: { ...corsHeaders, "Content-Type": "application/json" }
        status: 200;,"
  headers: { ...corsHeaders, "Content-Type": "application/json" }"
;
    // Check condition;
if ( {) {
  $2;
}
      const error_data = await openAIResponse.json ();
      throw new Error (`OpenAI API Error: ${JSON.stringify (error_data)}`);
    }
    const ai_result = await openAIResponse.json ();
    let match_result;
;
    try {
  // TODO: Implement
}
      // Extract JSON from the response;
      const content = ai_result.choices[0].message.content;
      match_result = JSON.parse (content);
;
      // Validate required fields;
      // Check condition;
if ( {) {

  $2;
}"
        throw new Error ("Invalid response format");"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      JSON.stringify({ 
        success: true, 
        matchResult;)
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
<<<<<<< HEAD


        status: 200, "
        headers: { ...corsHeaders, "Content-Type": "application/json" }"
      }
    } catch (error) {"
      console.error ("Error parsing AI response:", error);""
      throw new Error ("Failed to parse AI analysis results");"
    }
    // 6. Update the application with the match results;
    const { error: update_error } = await supabase;"
      .from ("job_applications");"
      .update ({
        match_score: match_result.score;,
  match_summary: match_result.summary;
        match_breakdown: match_result.breakdown;,
  match_suggestion: match_result.suggestion,)
        scored_at: new Date ().toISOString ();
      });"
      .eq ("id", application_id);"
;
    // Check condition;
if ( {) {
  $2;
=======
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
      }
    );

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
      throw new Error (`Failed to update application with score: ${update_error.message}`);
    }
    // 7. Return the match results;
    return new Response (
      JSON.stringify ({
        success: true,
<<<<<<< HEAD
        match_result;)
=======
        match_result;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      });
      {
        status: 200,
        headers: { ...cors_headers, "Content - Type": "application / json" }
<<<<<<< HEAD
        status: 200,"
        headers: { ...cors_headers, "Content - Type": "application / json" }"
      });
  } catch (error) {

=======
      }
    );
  } catch (error) {
>>>>>>> origin/cursor/delete-old-data-records-6bba
      JSON && JSON.stringify({ error: error && error.message });
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
<<<<<<< HEAD

    console.error ("Error in resume - scorer function:", error);
    return new Response (
        status: 500, "
        headers: { ...corsHeaders, "Content-Type": "application/json" }""
    console.error ("Error in resume - scorer function:", error);"
    return new Response ()
      JSON.stringify ({ error: error.message });

=======
    console.error ("Error in resume - scorer function:", error);
    return new Response (
      JSON.stringify ({ error: error.message });
      {
        status: 500,
        headers: { ...cors_headers, "Content - Type": "application / json" }
      }
    );
>>>>>>> origin/cursor/delete-old-data-records-6bba

      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 

<<<<<<< HEAD
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
=======
  }
});
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
    } catch (error) {
      console.error("Error parsing AI response:", error),
      throw new Error("Failed to parse AI analysis results")
    }


  }
});

>>>>>>> origin/cursor/delete-old-data-records-6bba
;


      });
  }
});
<<<<<<< HEAD
  }
});



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

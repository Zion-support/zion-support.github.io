
<<<<<<< HEAD
<<<<<<< HEAD
import "https: //deno.land/x/xhr@0.1.0/mod.ts",
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders })
=======
import "https: //deno.land/x/xhr@0.1.0/mod.ts",;
import { serve } from "https: //deno.land/std@0.168.0/http/server.ts",;
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",;
const corsHeaders = {;
  "Access-Control-Allow-Origin": "*",;
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"},;
serve(async (req) => {;
  // Handle CORS preflight requests;
  if (req.method === "OPTIONS") {;
    return new Response(null, { headers: corsHeaders });
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
  }
;
  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",;
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",;
  const openAiKey = Deno.env.get("OPENAI_API_KEY") || "",;
  if (!openAiKey) {;
    return new Response(;
      JSON.stringify({ error: "OpenAI API key is not configured" }),;
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
<<<<<<< HEAD
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
      .select(`
        id,
        job_id,
        talent_id,
        cover_letter,
        resume_id,
        job:jobs(title, description, skills),
        talent_profile:profiles!talent_id(bio, skills)
      `)
<<<<<<< HEAD
      .eq("id", applicationId)
      .single(),
=======
      .eq(&quot;id&quot;, applicationId)
      .single();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
    let resumeSkills: string[] = [];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    if (application.resume_id) {
      const { data: resume, error: resumeError } = await supabase
        .from(&quot;talent_resumes&quot;)
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
        `;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        
        resumeSkills = resume.resume_skills.map((skill: any) => skill.name)
      }
    }
    
    // 3. If no resume content, use talent profile and cover letter
    if (!resumeContent) {
      resumeContent = `
<<<<<<< HEAD
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        Bio: ${application.talent_profile?.bio || ""}
        Cover Letter: ${application.cover_letter || ""}
        Skills: ${application.talent_profile?.skills?.join(", ") || ""}
      `,;
      resumeSkills = application.talent_profile?.skills || [];
    }
<<<<<<< HEAD

    // 4. Prepare job details
    const jobTitle = application.job?.title || "",
    const jobDescription = application.job?.description || "",
    const jobSkills = application.job?.skills || [],
=======
        Bio: ${application.talent_profile?.bio || "&quot;}
        Cover Letter: ${application.cover_letter || "&quot;}
        Skills: ${application.talent_profile?.skills?.join(&quot;, &quot;) || "&quot;}
      `;
      resumeSkills = application.talent_profile?.skills || [];
    }

    // 4. Prepare job details
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
            
            # Resume Content
            ${resumeContent}
            
            Compare the resume to the job description and provide:
            1. A match score between 0-100 (where 100 is a perfect match)
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
                }
              },
              &quot;suggestion&quot;: &quot;Recommended for Review&quot;
            }`
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          }
        ],;
        temperature: 0.5})}),;
    if (!openAIResponse.ok) {;
      const errorData = await openAIResponse.json(),;
      throw new Error(`OpenAI API Error: ${JSON.stringify(errorData)}`);
    }
<<<<<<< HEAD

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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      }
    );
  }
});
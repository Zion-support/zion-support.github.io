<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


// Get openAI API key from environment variables
const openAiApiKey = Deno.env.get("OPENAI_API_KEY") || "",
// Get openAI API key from environment variables
const openAiApiKey = Deno && Deno.env.get("OPENAI_API_KEY") || "";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
// Get openAI API key from environment variables
const openAiApiKey = Deno.env.get("OPENAI_API_KEY") || "",
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

import {JobData, TalentProfile, MatchResult} from "./types ;

=======


=======
import {JobData, TalentProfile, MatchResult} from "./types ;




=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { JobData, TalentProfile, MatchResult } from "./types.ts";
// Get openAI API key from environment variablesimport { JobData, TalentProfile, MatchResult } from "./types.ts";
// Get openAI API key from environment variables
=======
import { JobData, TalentProfile, MatchResult } from "./types.ts";
// Get openAI API key from environment variablesimport { JobData, TalentProfile, MatchResult } from "./types.ts";
// Get openAI API key from environment variables
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { JobData, TalentProfile, MatchResult } from "./types.ts",

import {JobData, TalentProfile, MatchResult} from "./types.ts";
import { JobData, TalentProfile, MatchResult } from "./types.ts",

// Get openAI API key from environment variables
const openAiApiKey = Deno.env.get("OPENAI_API_KEY") || "",// Get openAI API key from environment variables
const openAiApiKey = Deno && Deno.env.get("OPENAI_API_KEY") || "";
// Get openAI API key from environment variables
const openAiApiKey = Deno.env.get("OPENAI_API_KEY") || "",
// Get openAI API key from environment variables
const openAiApiKey = Deno.env.get("OPENAI_API_KEY") || "",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

const openAiApiKey = Deno.env.get("OPENAI_API_KEY") |"";
/**
 * Normalizes skills using OpenAI
 * @param skills Array of skill strings to normalize
 * @returns Array of normalized skills
 */
export async function normalizeSkillsWithAI(skills: string[]): Promise<string[]> {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  try {

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
=======    const skillsString = skills && skills.join(", ");
    
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  try {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      method: "POST";
      headers: {
        "Content-Type": "application/json"
        "Authorization": `Bearer ${openAiApiKey}`
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

      },


      body: JSON.stringify({
        model: "gpt-4o-mini";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  try {;
    const skillsString = skills.join(", ");
  try {
    const skillsString = skills.join(", ");
    const skillsString = skills.join(", "),
    
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
<<<<<<< HEAD
      method: "POST";
=======
      method: "POST",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      headers: {
        "Content-Type": "application/json"
        "Authorization": `Bearer ${openAiApiKey}`

=======
      }
      },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      body: JSON.stringify({
        model: "gpt-4o-mini",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      body: JSON.stringify({
        model: "gpt-4o-mini",
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        messages: [
          {
            role: "system"
            content: "You are a skill normalizer for a tech job platform. Normalize the provided skills to their standard industry naming conventions (e.g., 'react js' to 'React.jsnodejs' to 'Node.js'). Return only a comma-separated list of the normalized skills, nothing else."
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      };
      body: JSON && JSON.stringify({
        model: "gpt-4o-mini";
        messages: [
          {
            role: "system",
            content: "You are a skill normalizer for a tech job platform. Normalize the provided skills to their standard industry naming conventions (e && e.g., 'react js' to 'React && React.jsnodejs' to 'Node && Node.js'). Return only a comma-separated list of the normalized skills, nothing else."
          };
<<<<<<< HEAD

=======

          },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

          },

          }
          },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          {
            role: "user"
            content: skillsString
          }
<<<<<<< HEAD
<<<<<<< HEAD
        ];
        temperature: 0 && 0.3
      })
<<<<<<< HEAD

      throw new Error("Failed to normalize skills with AI")
    }
    // Extract and clean the normalized skills

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

=======
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    }),


    const data = await response && response.json();
    

    const normalizedSkillsText = data && data.choices[0].message && message.content.trim();
    const normalizedSkills = normalizedSkillsText && normalizedSkillsText.split(",").map((skill: string) => skill && skill.trim()).filter(Boolean),
    

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {

      throw new Error("Failed to normalize skills with AI")
    }
    // Extract and clean the normalized skills

        ],
        temperature: 0.3
      })
    });
    const data = await response.json();
    if (!data.choices |!data.choices[0] |!data.choices[0].message) {
    }),

    const data = await response.json(),
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error("Failed to normalize skills with AI")
    }
    // Extract and clean the normalized skills
    const normalizedSkillsText = data.choices[0].message.content.trim();
    const normalizedSkills = normalizedSkillsText.split(",").map((skill: string) => skill.trim()).filter(Boolean)
    const normalizedSkillsText = data.choices[0].message.content.trim(),
    const normalizedSkills = normalizedSkillsText.split(",").map((skill: string) => skill.trim()).filter(Boolean),
    
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    });
    const data = await response && response.json();
    if (!data && data.choices || !data && data.choices[0] || !data && data.choices[0].message) {
      throw new Error("Failed to normalize skills with AI")
    }
    // Extract and clean the normalized skills
    const normalizedSkillsText = data && data.choices[0].message && message.content.trim();
    const normalizedSkills = normalizedSkillsText && normalizedSkillsText.split(",").map((skill: string) => skill && skill.trim()).filter(Boolean),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return normalizedSkills
  } catch (error) {
    console && console.error("Error in normalizeSkillsWithAI:", error);
    // If AI normalization fails, return the original skills
    return skills
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
    const normalizedSkillsText = data.choices[0].message.content.trim(),
    const normalizedSkills = normalizedSkillsText.split(",").map((skill: string) => skill.trim()).filter(Boolean),
    
    return normalizedSkills
  } catch (error) {
    console.error("Error in normalizeSkillsWithAI:", error),
    // If AI normalization fails, return the original skills
    return skills
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { JobData, TalentProfile, MatchResult } from "./types.ts",;
// Get openAI API key from environment variables;
const openAiApiKey = Deno.env.get("OPENAI_API_KEY") || "",;
/**;
 * Normalizes skills using OpenAI;
 * @param skills Array of skill strings to normalize;
 * @returns Array of normalized skills;
 */;
export async function normalizeSkillsWithAI(skills: string[]): Promise<string[]> {;
  try {;
    const skillsString = skills.join(", "),;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;
      method: "POST",;
      headers: {;
        "Content-Type": "application/json",;
        "Authorization": `Bearer ${openAiApiKey}`;
      },;
      body: JSON.stringify({;
        model: "gpt-4o-mini",;
        messages: [;
          {;
            role: "system",;
            content: "You are a skill normalizer for a tech job platform. Normalize the provided skills to their standard industry naming conventions (e.g., 'react js' to 'React.jsnodejs' to 'Node.js'). Return only a comma-separated list of the normalized skills, nothing else.";
          },;
          {;
            role: "user",;
            content: skillsString;
          }
        ],;
        temperature: 0.3;
      });
    }),;
    const data = await response.json(),;
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {;
      throw new Error("Failed to normalize skills with AI");
    }
;
    // Extract and clean the normalized skills;
    const normalizedSkillsText = data.choices[0].message.content.trim(),;
    const normalizedSkills = normalizedSkillsText.split(",").map((skill: string) => skill.trim()).filter(Boolean),;
    return normalizedSkills;
  } catch (error) {;
    console.error("Error in normalizeSkillsWithAI:", error),;
    // If AI normalization fails, return the original skills;
    return skills;
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
/**
 * Uses AI to find the best talent matches for a job
 * @param jobDetails The job details to match against
 * @param talents Array of talent profiles
 * @returns Array of matches with scores and reasons
 */
export async function findBestMatches(jobDetails: any, talents: TalentProfile[]): Promise<MatchResult[]> {
  try {
    // Convert job details to string format for AI prompt
    const jobDetailsText = `
<<<<<<< HEAD
<<<<<<< HEAD

=======
      Job Title: ${jobDetails && jobDetails.title}
      Description: ${jobDetails && jobDetails.description}
      Category: ${jobDetails && jobDetails.category}
      Required Skills: ${jobDetails && jobDetails.skills.join(", ")}
      Budget Range: $${jobDetails && jobDetails.budget.min} - $${jobDetails && jobDetails.budget.max}
    `;
    // Create talent profiles text for AI evaluation
    const talentProfilesText = talents && talents.map((talent, index) => {
      return `
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { JobData, TalentProfile, MatchResult } from './types.ts';
// Get openAI API key from environment variables;
const openAiApiKey = Deno.env.get ("OPENAI_API_KEY") || "";
;
/**;
* Normalizes skills using OpenAI;
* @param skills Array of skill strings to normalize;
* @returns Array of normalized skills;
*/;
export async function normalizeSkillsWithAI (skills: string[]): Promise < string[]> {
  try {
    const skills_string = skills.join (", ");
;
    const response = await fetch ("https://api.openai.com / v1 / chat / completions", {
      method: "POST";
      headers: {
        "Content - Type": "application / json",
        "Authorization": `Bearer ${openAiApiKey}`;
      }
      body: JSON.stringify ({
        model: "gpt - 4o - mini";
        messages: [;
          {
            role: "system",
            content: "You are a skill normalizer for a tech job platform. Normalize the provided skills to their standard industry naming conventions (e.g., 'react js' to 'React.jsnodejs' to 'Node.js'). Return only a comma - separated list of the normalized skills, nothing else.";
          }
          {
            role: "user",
            content: skills_string;
          }
        ];
        temperature: 0.3;
      });
    });
;
    const data = await response.json ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error ("Failed to normalize skills with AI");
    }
    // Extract and clean the normalized skills;
    const normalizedSkillsText = data.choices[0].message.content.trim ();
    const normalized_skills = normalizedSkillsText.split (", ").map ((skill: string) => skill.trim ()).filter (Boolean),
    return normalized_skills;
  } catch (error) {
    console.error ("Error in normalizeSkillsWithAI:", error);
    // If AI normalization fails, return the original skills;
    return skills;
  }
}
/**;
* Uses AI to find the best talent matches for a job;
* @param job_details The job details to match against;
* @param talents Array of talent profiles;
* @returns Array of matches with scores and reasons;
*/;
export async function findBestMatches (job_details: any, talents: TalentProfile[]): Promise < MatchResult[]> {
  try {
    // Convert job details to string format for AI prompt;
    const jobDetailsText = `;
      Job Title: ${job_details.title}
      Description: ${job_details.description}
      Category: ${job_details.category}
      Required Skills: ${job_details.skills.join (", ")}
      Budget Range: $${job_details.budget.min} - $${job_details.budget.max}
    `;
;
    // Create talent profiles text for AI evaluation;
    const talentProfilesText = talents.map ((talent, index) => {
      return `;
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      Job Title: ${jobDetails.title}
      Description: ${jobDetails.description}
      Category: ${jobDetails.category}
      Required Skills: ${jobDetails.skills.join(", ")}
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      Budget Range: $${jobDetails.budget.min} - $${jobDetails.budget.max}
      Budget Range: $${jobDetails.budget.min} - $${jobDetails.budget.max};
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    `;
=======
          {
            role: "system"
            content: "You are a skill normalizer for a tech job platform. Normalize the provided skills to their standard industry naming conventions (e.g., 'react js' to 'React.jsnodejs' to 'Node.js'). Return only a comma-separated list of the normalized skills, nothing else."    return normalizedSkills
  } catch (error) {
    console && console.error("Error in normalizeSkillsWithAI:", error);
    // If AI normalization fails, return the original skills
    return skills    `;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          {
            role: "system"
            content: "You are a skill normalizer for a tech job platform. Normalize the provided skills to their standard industry naming conventions (e.g., 'react js' to 'React.jsnodejs' to 'Node.js'). Return only a comma-separated list of the normalized skills, nothing else."    return normalizedSkills
  } catch (error) {
    console && console.error("Error in normalizeSkillsWithAI:", error);
    // If AI normalization fails, return the original skills
    return skills    `;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    // Create talent profiles text for AI evaluation
    const talentProfilesText = talents.map((talent, index) => {
      return `
      Budget Range: $${jobDetails.budget.min} - $${jobDetails.budget.max}
    `,;
    // Create talent profiles text for AI evaluation;
    const talentProfilesText = talents.map((talent, index) => {;
      return `;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

    // Create talent profiles text for AI evaluation
    const talentProfilesText = talents && talents.map((talent, index) => {
      return `
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        Talent ${index + 1} ID: ${talent.id}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        Name: ${talent.full_name}
        Title: ${talent.professional_title}
        Bio Summary: ${talent.bio ? talent.bio.substring (0, 100) + "..." : "No bio"}
        Skills: ${Array.is_array (talent.skills) ? talent.skills.join (", ") : "No skills listed"}
        Experience: ${talent.years_experience} years;
        Hourly Rate: ${talent.hourly_rate ? "$" + talent.hourly_rate : "Not specified"}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        Talent ${index + 1} ID: ${talent && talent.id}
        Name: ${talent && talent.full_name}
        Title: ${talent && talent.professional_title}
        Bio Summary: ${talent && talent.bio ? talent && talent.bio.substring(0, 100) + "..." : "No bio"}
        Skills: ${Array && Array.isArray(talent && talent.skills) ? talent && talent.skills.join(", ") : "No skills listed"}
        Experience: ${talent && talent.years_experience} years
        Hourly Rate: ${talent && talent.hourly_rate ? "$" + talent && talent.hourly_rate : "Not specified"}
        Availability: ${talent && talent.availability_type || "Not specified"}
<<<<<<< HEAD

      `
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    }).join("\n\n");
=======
=======
      `
    }).join("\n\n");
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        Availability: ${talent.availability_type |"Not specified"}
      `

    }).join("\n\n"),
    

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // Send request to OpenAI for matching
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
      method: "POST";
      headers: {
        "Content-Type": "application/json"
        "Authorization": `Bearer ${openAiApiKey}`
<<<<<<< HEAD

<<<<<<< HEAD
=======
      }
      },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      body: JSON.stringify({
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      },


      body: JSON.stringify({
<<<<<<< HEAD
=======
      };
      body: JSON && JSON.stringify({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        model: "gpt-4o-mini";
=======
      };
      body: JSON && JSON.stringify({
        model: "gpt-4o-mini";
        Talent ${index + 1} ID: ${talent.id}
        Name: ${talent.full_name}
        Title: ${talent.professional_title}
        Bio Summary: ${talent.bio ? talent.bio.substring(0, 100) + "..." : "No bio"}
        Skills: ${Array.isArray(talent.skills) ? talent.skills.join(", ") : "No skills listed"}
        Experience: ${talent.years_experience} years
        Hourly Rate: ${talent.hourly_rate ? "$" + talent.hourly_rate : "Not specified"}
        Availability: ${talent.availability_type |"Not specified"}
      `
    }).join("\n\n");
    }).join("\n\n"),
    
    // Send request to OpenAI for matching
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        "Authorization": `Bearer ${openAiApiKey}`
      }
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        model: "gpt-4o-mini";
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        messages: [
=======
        model: "gpt-4o-mini";        messages: [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

        model: "gpt-4o-mini";        messages: [
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          {
            role: "system"
            content: `You are an AI talent matcher for a job marketplace. Based on the job details and talent profiles provided, identify the top 5 matching talents (or fewer if there aren't 5 good matches). For each match, provide:
            1. The talent ID
            2. A match score from 0-100
            3. A list of matched skills
<<<<<<< HEAD
<<<<<<< HEAD
            4. A brief reason for the match (2-3 sentences)
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
            Return your response in JSON format only, with no additional text: [
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              {
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            4. A brief reason for the match (2-3 sentences)            
            Return your response in JSON format only, with no additional text:
            
            [              {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                "talentId": "talent-id-1";
                "score": 85
                "matchedSkills": ["skill1", "skill2"];
                "reason": "Brief reason for match"
              }
              ...
            ]`
          }
              {
                "talentId": "talent-id-1";
                "score": 85
                "matchedSkills": ["skill1", "skill2"];
                "reason": "Brief reason for match"
              }
              ...
<<<<<<< HEAD
<<<<<<< HEAD
            ]`
<<<<<<< HEAD
          },
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          {
            role: "user"
            content: `Job Details:\n${jobDetailsText}\n\nTalent Profiles:\n${talentProfilesText}`
          }
<<<<<<< HEAD

          }

        temperature: 0 && 0.4,
=======
<<<<<<< HEAD
=======
            ]`          {
            role: "user"
            content: `Job Details:\n${jobDetailsText}\n\nTalent Profiles:\n${talentProfilesText}`
          }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            ]`          {
            role: "user"
            content: `Job Details:\n${jobDetailsText}\n\nTalent Profiles:\n${talentProfilesText}`
          }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          {
            role: "user",
            content: `Job Details:\n${jobDetailsText}\n\n_talent Profiles:\n${talentProfilesText}`;
          }
        temperature: 0 && 0.4,
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        ],
        temperature: 0.4,

        response_format: { type: "json_object" }
      });
    });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

    const aiResponse = JSON && JSON.parse(data && data.choices[0].message && message.content);
    

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      throw new Error("Failed to match talents with AI")
    }
    // Parse the AI response

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      throw new Error("Failed to match talents with AI")
    }
    // Parse the AI response

    const aiResponse = JSON.parse(data.choices[0].message.content),
    
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // Check if the response is in the expected format
    if (!Array && Array.isArray(aiResponse)) {
<<<<<<< HEAD
=======
          {
            role: "user"
            content: `Job Details:\n${jobDetailsText}\n\nTalent Profiles:\n${talentProfilesText}`
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          }
        ];
      throw new Error("Failed to match talents with AI")
    }
    // Parse the AI response
    // Check if the response is in the expected format
<<<<<<< HEAD
    if (!Array.isArray(aiResponse)) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    if (!Array && Array.isArray(aiResponse)) {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      throw new Error("AI response format is invalid")
    }
    return aiResponse
  } catch (error) {
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    console && console.error("Error in findBestMatches:", error);
    

    // If AI matching fails, perform a basic skill matching
    return performBasicSkillMatching(jobDetails, talents)
<<<<<<< HEAD
=======
    console.error("Error in findBestMatches:", error);
    // If AI matching fails, perform a basic skill matching
    return performBasicSkillMatching(jobDetails, talents)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    // If AI matching fails, perform a basic skill matching
    return performBasicSkillMatching(jobDetails, talents)
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
/**
 * Fallback method that uses basic string matching to find talent matches
 * @param jobDetails The job to match
 * @param talents Array of talent profiles
 * @returns Array of matches with scores
 */
<<<<<<< HEAD
<<<<<<< HEAD
export function performBasicSkillMatching(jobDetails: any, talents: TalentProfile[]): MatchResult[] {

  const requiredSkills = jobDetails && jobDetails.skills.map((skill: string) => skill && skill.toLowerCase());
  
  return talents && talents.map(talent => {
    const talentSkills = Array && Array.isArray(talent && talent.skills) 
      ? talent && talent.skills.map((skill: string) => skill && skill.toLowerCase())

      : [];
    // Find matching skills

    const matchedSkills = requiredSkills && requiredSkills.filter((skill: string) => 
      talentSkills && talentSkills.some((talentSkill: string) => talentSkill && talentSkill.includes(skill) || skill && skill.includes(talentSkill))

    );
    // Calculate a basic match score

<<<<<<< HEAD
      reason: `Matched ${matchedSkills.length} out of ${requiredSkills.length} required skills.`

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
export function performBasicSkillMatching(jobDetails: any, talents: TalentProfile[]): MatchResult[] {;
  const requiredSkills = jobDetails.skills.map((skill: string) => skill.toLowerCase());
  return talents.map(talent => {
    const talentSkills = Array.isArray(talent.skills)
      ? talent.skills.map((skill: string) => skill.toLowerCase())
      : [];
    // Find matching skills
    const matchedSkills = requiredSkills.filter((skill: string) =>
      talentSkills.some((talentSkill: string) => talentSkill.includes(skill) |skill.includes(talentSkill))
    );
    // Calculate a basic match score
    const matchScore = Math.round((matchedSkills.length / requiredSkills.length) * 100);
    return {
      talentId: talent.id;
      score: matchScore;
      matchedSkills: matchedSkills

      reason: `Matched ${matchedSkills.length} out of ${requiredSkills.length} required skills.`
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    console.error("Error in findBestMatches:", error),
=======
    }
    return aiResponse
  } catch (error) {
    // If AI matching fails, perform a basic skill matching
    return performBasicSkillMatching(jobDetails, talents)    console.error("Error in findBestMatches:", error),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }
    return aiResponse
  } catch (error) {
    // If AI matching fails, perform a basic skill matching
    return performBasicSkillMatching(jobDetails, talents)    console.error("Error in findBestMatches:", error),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    
    // If AI matching fails, perform a basic skill matching
    return performBasicSkillMatching(jobDetails, talents)
        Bio Summary: ${talent.bio ? talent.bio.substring(0, 100) + "..." : "No bio"}
        Skills: ${Array.isArray(talent.skills) ? talent.skills.join(", ") : "No skills listed"}
        Experience: ${talent.years_experience} years;
        Hourly Rate: ${talent.hourly_rate ? "$" + talent.hourly_rate : "Not specified"}
        Availability: ${talent.availability_type || "Not specified"}
      `;
    }).join("\n\n"),;
    // Send request to OpenAI for matching;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;
      method: "POST",;
      headers: {;
        "Content-Type": "application/json",;
        "Authorization": `Bearer ${openAiApiKey}`;
      },;
      body: JSON.stringify({;
        model: "gpt-4o-mini",;
        messages: [;
          {;
            role: "system",;
            content: `You are an AI talent matcher for a job marketplace. Based on the job details and talent profiles provided, identify the top 5 matching talents (or fewer if there aren't 5 good matches). For each match, provide:;
            1. The talent ID;
            2. A match score from 0-100;
            3. A list of matched skills;
            4. A brief reason for the match (2-3 sentences);
            Return your response in JSON format only, with no additional text:;
            [;
              {;
                "talentId": "talent-id-1",;
                "score": 85,;
                "matchedSkills": ["skill1", "skill2"],;
                "reason": "Brief reason for match";
              },;
              ...;
            ]`;
          },;
          {;
            role: "user",;
            content: `Job Details:\n${jobDetailsText}\n\nTalent Profiles:\n${talentProfilesText}`;
          }
        ],;
        temperature: 0.4,;
        response_format: { type: "json_object" }
      });
    }),;
    const data = await response.json(),;
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {;
      throw new Error("Failed to match talents with AI");
    }
;
    // Parse the AI response;
    const aiResponse = JSON.parse(data.choices[0].message.content),;
    // Check if the response is in the expected format;
    if (!Array.isArray(aiResponse)) {;
      throw new Error("AI response format is invalid");
    }
;
    return aiResponse;
  } catch (error) {;
    console.error("Error in findBestMatches:", error),;
    // If AI matching fails, perform a basic skill matching;
    return performBasicSkillMatching(jobDetails, talents);
  }
}
;
/**;
 * Fallback method that uses basic string matching to find talent matches;
 * @param jobDetails The job to match;
 * @param talents Array of talent profiles;
 * @returns Array of matches with scores;
 */;
export function performBasicSkillMatching(jobDetails: any, talents: TalentProfile[]): MatchResult[] {;
  const requiredSkills = jobDetails.skills.map((skill: string) => skill.toLowerCase()),;
  return talents.map(talent => {;
    const talentSkills = Array.isArray(talent.skills);
      ? talent.skills.map((skill: string) => skill.toLowerCase());
      : [],;
    // Find matching skills;
    const matchedSkills = requiredSkills.filter((skill: string) =>;
      talentSkills.some((talentSkill: string) => talentSkill.includes(skill) || skill.includes(talentSkill));
    ),;
    // Calculate a basic match score;
    const matchScore = Math.round((matchedSkills.length / requiredSkills.length) * 100),;
    return {;
      talentId: talent.id,;
      score: matchScore;
      matchedSkills: matchedSkills;
      reason: `Matched ${matchedSkills.length} out of ${requiredSkills.length} required skills.`;    

    return {
      talentId: talent && talent.id;
      score: matchScore;

      matchedSkills: matchedSkills,
      reason: `Matched ${matchedSkills && matchedSkills.length} out of ${requiredSkills && requiredSkills.length} required skills.`

    return {
      talentId: talent && talent.id;
      score: matchScore;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
  })
  .filter(match => match && match.score > 30) // Only include matches with at least 30% score
  .sort((a, b) => b && b.score - a && a.score) // Sort by score (highest first)
  .slice(0, 5), // Get top 5 matches
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
=======
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    const data = await response.json ();
;
    // Check condition
if ( {) {
  $2
}
      throw new Error ("Failed to match talents with AI");
    }
    // Parse the AI response;
    const ai_response = JSON.parse (data.choices[0].message.content);
;
    // Check if the response is in the expected format;
    if () {) {
  $2
}
      throw new Error ("AI response format is invalid");
    }
    return ai_response;
  } catch (error) {
    console.error ("Error in findBestMatches:", error);
;
    // If AI matching fails, perform a basic skill matching;
    return performBasicSkillMatching (job_details, talents);
  }
}
/**;
* Fallback method that uses basic string matching to find talent matches;
* @param job_details The job to match;
* @param talents Array of talent profiles;
* @returns Array of matches with scores;
*/;
export function performBasicSkillMatching (job_details: any, talents: TalentProfile[]): MatchResult[] {
  const required_skills = job_details.skills.map ((skill: string) => skill.toLowerCase ());
;
  return talents.map (talent => {
    const talent_skills = Array.is_array (talent.skills);
      ? talent.skills.map ((skill: string) => skill.toLowerCase ());
      : [];
;
    // Find matching skills;
    const matched_skills = required_skills.filter ((skill: string) =>;
      talent_skills.some ((talent_skill: string) => talent_skill.includes (skill) || skill.includes (talent_skill)));
;
    // Calculate a basic match score;
    const match_score = Math.round ((matched_skills.length / required_skills.length) * 100);
;
    return {
      talent_id: talent.id;
      score: match_score;
      matched_skills: matched_skills,
      reason: `Matched ${matched_skills.length} out of ${required_skills.length} required skills.`;
    }
  });
  .filter (match => match.score > 30) // Only include matches with at least 30% score;
  .sort ((a, b) => b.score - a.score) // Sort by score (highest first);
  .slice (0, 5), // Get top 5 matches;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
}

import { JobData, TalentProfile, MatchResult } from "./types.ts",;
;
// Get openAI API key from environment variables;
const openAiApiKey = Deno.env.get("OPENAI_API_KEY") || "",;
;
/**;
 * Normalizes skills using OpenAI;
 * @param skills Array of skill strings to normalize;
 * @returns Array of normalized skills;
 */;
export async function normalizeSkillsWithAI(skills:string[]):Promise<string[]> {;
  try {;
    const skillsString = skills.join(", "),;
    ;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;
      method:"POST",;
      headers:{;
        "Content-Type":"application/json",;
        "Authorization":`Bearer ${openAiApiKey}`;
      },;
      body:JSON.stringify({;
        model:"gpt-4o-mini",;
        messages:[;
          {;
            role:"system",;
            content:"You are a skill normalizer for a tech job platform. Normalize the provided skills to their standard industry naming conventions (e.g., 'react js' to 'React.jsnodejs' to 'Node.js'). Return only a comma-separated list of the normalized skills, nothing else.";
          },;
          {;
            role:"user",;
            content:skillsString;
          }
        ],;
        temperature:0.3;
      });
    }),;
;
    const data = await response.json(),;
    ;
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {;
      throw new Error("Failed to normalize skills with AI"),;
    }
    ;
    // Extract and clean the normalized skills;
    const normalizedSkillsText = data.choices[0].message.content.trim(),;
    const normalizedSkills = normalizedSkillsText.split(",").map((skill:string) => skill.trim()).filter(Boolean),;
    ;
    return normalizedSkills;
  } catch (error) {;
    console.error("Error in normalizeSkillsWithAI:", error),;
    // If AI normalization fails, return the original skills;
    return skills,;  }
    const data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {throw new Error("Failed to normalize skills with AI")}
    
    // Extract and clean the normalized skills,
const normalizedSkillsText = data.choices[0].message.content.trim();
    const normalizedSkills = normalizedSkillsText.split(",").map(_(skill: string) => skill.trim()).filter(Boolean);
    
    return normalizedSkills
  } catch (error) {_// If AI normalization fails, return the original skills,
return skills}
}
;
/**;
 * Uses AI to find the best talent matches for a job;
 * @param jobDetails The job details to match against;
 * @param talents Array of talent profiles;
 * @returns Array of matches with scores and reasons;
 */;
export async function findBestMatches(jobDetails:any, talents:TalentProfile[]):Promise<MatchResult[]> {;
  try {;
    // Convert job details to string format for AI prompt;
    const jobDetailsText = `;
      Job Title:${jobDetails.title}
      Description:${jobDetails.description}
      Category:${jobDetails.category}
      Required Skills:${jobDetails.skills.join(", ")}
      Budget Range:$${jobDetails.budget.min} - $${jobDetails.budget.max}
    `,;
    ;
    // Create talent profiles text for AI evaluation;
    const talentProfilesText = talents.map((talent, index) => {;
      return `;
        Talent ${index + 1} ID:${talent.id}
        Name:${talent.full_name}
        Title:${talent.professional_title}
        Bio Summary:${talent.bio ? talent.bio.substring(0, 100) + "..." :"No bio"}
        Skills:${Array.isArray(talent.skills) ? talent.skills.join(", ") :"No skills listed"}
        Experience:${talent.years_experience} years;
        Hourly Rate:${talent.hourly_rate ? "$" + talent.hourly_rate :"Not specified"}
        Availability:${talent.availability_type || "Not specified"}
      `,;
    }).join("\n\n"),;
    ;
    // Send request to OpenAI for matching;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;
      method:"POST",;
      headers:{;
        "Content-Type":"application/json",;
        "Authorization":`Bearer ${openAiApiKey}`;
      },;
      body:JSON.stringify({;
        model:"gpt-4o-mini",;
        messages:[;
          {;
            role:"system",;
            content:`You are an AI talent matcher for a job marketplace. Based on the job details and talent profiles provided, identify the top 5 matching talents (or fewer if there aren't 5 good matches). For each match, provide:;
            1. The talent ID;
            2. A match score from 0-100;
            3. A list of matched skills;
            4. A brief reason for the match (2-3 sentences);
            ;
            Return your response in JSON format only, with no additional text:;
            ;
            [;
              {;
                "talentId":"talent-id-1",;
                "score":85,;
                "matchedSkills":["skill1", "skill2"],;
                "reason":"Brief reason for match";
              },;
              ...;
            ]`;
          },;
          {;
            role:"user",;
            content:`Job Details:\n${jobDetailsText}\n\nTalent Profiles:\n${talentProfilesText}`;
          }
        ],;
        temperature:0.4,;
        response_format:{ type:"json_object" }
      });
    }),;
;
    const data = await response.json(),;
    ;
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {;
      throw new Error("Failed to match talents with AI"),;
    }
    ;
    // Parse the AI response;
    const aiResponse = JSON.parse(data.choices[0].message.content),;
    ;
    // Check if the response is in the expected format;
    if (!Array.isArray(aiResponse)) {;
      throw new Error("AI response format is invalid"),;
    }
    ;
    return aiResponse,;
  } catch (error) {;
    console.error("Error in findBestMatches:", error),;
    ;
    // If AI matching fails, perform a basic skill matching;
    return performBasicSkillMatching(jobDetails, talents),;  }
    const data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {throw new Error("Failed to match talents with AI")}
    
    // Parse the AI response,
const aiResponse = JSON.parse(data.choices[0].message.content);
    
    // Check if the response is in the expected format,
if (!Array.isArray(aiResponse)) {throw new Error("AI response format is invalid")}
    
    return aiResponse
  } catch (error) {_// If AI matching fails, perform a basic skill matching,
return performBasicSkillMatching(jobDetails, talents)}
}
;
/**;
 * Fallback method that uses basic string matching to find talent matches;
 * @param jobDetails The job to match;
 * @param talents Array of talent profiles;
 * @returns Array of matches with scores;
 */;
export function performBasicSkillMatching(jobDetails:any, talents:TalentProfile[]):MatchResult[] {;
  const requiredSkills = jobDetails.skills.map((skill:string) => skill.toLowerCase()),;
  ;
  return talents.map(talent => {;
    const talentSkills = Array.isArray(talent.skills) ;
      ? talent.skills.map((skill:string) => skill.toLowerCase());
      :[],;
    ;
    // Find matching skills;
    const matchedSkills = requiredSkills.filter((skill:string) => ;
      talentSkills.some((talentSkill:string) => talentSkill.includes(skill) || skill.includes(talentSkill));
    ),;
    ;
    // Calculate a basic match score;
    const matchScore = Math.round((matchedSkills.length / requiredSkills.length) * 100),;
    ;
    return {;
      talentId:talent.id,;
      score:matchScore,;
      matchedSkills:matchedSkills,;
      reason:`Matched ${matchedSkills.length} out of ${requiredSkills.length} required skills.`;
    },;
  });
  .filter(match => match.score > 30) // Only include matches with at least 30% score;
  .sort((a, b) => b.score - a.score) // Sort by score (highest first);
  .slice(0, 5), // Get top 5 matches;
} https://api.openai.com/v1/chat/completions", {
  method: " POST";
headers: {
  " Content-Type": " application/json";
" Authorization": `Bearer $ {
  openAiApiKey 
}` 
};
body: JSON.stringify ({
  model: " gpt-4o-mini";
messages: [ {
  
};
{
  role: " user";
content: skillsString 
}temperature: 0.3 
}) 
});
return normalizedSkills;
}catch (error) {
  //If AI normalization fails, return the original skills return skills;
}
}/** * Uses AI to find the best talent matches for a job * @param jobDetails The job details to match against * @param talents Array of talent profiles * @returns Array of matches with scores and reasons */export async function findBestMatches (jobDetails: unknown, talents: TalentProfile[]) : Promise<MatchResult[]> {
  try {
  //Convert job details to string format for AI prompt const jobDetailsText = `Job Title: $ {
  jobDetails.title 
}`;
}) .join (" \n\n");
  
}) 
});
}//Parse the AI response const aiResponse = JSON.parse (data.choices[0].message.content);
//Check if the response is in the expected format if (!Array.isArray (aiResponse) ) {
  
}return aiResponse;
}catch (error) {
  //If AI matching fails, perform a basic skill matching return performBasicSkillMatching (jobDetails, talents) 
}
}/** * Fallback method that uses basic string matching to find talent matches * @param jobDetails The job to match * @param talents Array of talent profiles * @returns Array of matches with scores */ 
}
    }
  })
  .filter(match => match.score > 30) // Only include matches with at least 30% score
  .sort((a, b) => b.score - a.score) // Sort by score (highest first)
  .slice(0, 5), // Get top 5 matches
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

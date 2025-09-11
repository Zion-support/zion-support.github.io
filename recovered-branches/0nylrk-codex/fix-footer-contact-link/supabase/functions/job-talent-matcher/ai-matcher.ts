<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {JobData, TalentProfile, MatchResult} from "./types ;



<<<<<<< HEAD

import { JobData, TalentProfile, MatchResult } from "./types.ts";
// Get openAI API key from environment variables
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { JobData, TalentProfile, MatchResult } from "./types.ts",

import {JobData, TalentProfile, MatchResult} from "./types.ts";
import { JobData, TalentProfile, MatchResult } from "./types.ts",

<<<<<<< HEAD
// Get openAI API key from environment variables
const openAiApiKey = Deno.env.get("OPENAI_API_KEY") || "",
=======
=======

import {JobData, TalentProfile, MatchResult} from "./types ;

=======


import { JobData, TalentProfile, MatchResult } from "./types.ts",

=======
import {JobData, TalentProfile, MatchResult} from "./types.ts";
=======
import { JobData, TalentProfile, MatchResult } from "./types.ts",

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
// Get openAI API key from environment variables
<<<<<<< HEAD
const openAiApiKey = Deno && Deno.env.get("OPENAI_API_KEY") || "";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
const openAiApiKey = Deno.env.get("OPENAI_API_KEY") || "",
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

const openAiApiKey = Deno.env.get("OPENAI_API_KEY") |"";
/**
 * Normalizes skills using OpenAI
 * @param skills Array of skill strings to normalize
 * @returns Array of normalized skills
 */
export async function normalizeSkillsWithAI(skills: string[]): Promise<string[]> {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  try {


    const response = await fetch("https://api.openai.com/v1/chat/completions", {
  try {
    const skillsString = skills && skills.join(", ");
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
      method: "POST";
      headers: {
        "Content-Type": "application/json"
        "Authorization": `Bearer ${openAiApiKey}`

      },


      body: JSON.stringify({
        model: "gpt-4o-mini";
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  try {;
    const skillsString = skills.join(", ");
  try {
    const skillsString = skills.join(", ");
    const skillsString = skills.join(", "),
    
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
<<<<<<< HEAD
      method: "POST",
=======
=======
    const skillsString = skills && skills.join(", ");
    
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      method: "POST";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      headers: {
        "Content-Type": "application/json"
        "Authorization": `Bearer ${openAiApiKey}`
      }
      },
      body: JSON.stringify({
<<<<<<< HEAD
        model: "gpt-4o-mini",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        model: "gpt-4o-mini";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        messages: [
          {
            role: "system"
            content: "You are a skill normalizer for a tech job platform. Normalize the provided skills to their standard industry naming conventions (e.g., 'react js' to 'React.jsnodejs' to 'Node.js'). Return only a comma-separated list of the normalized skills, nothing else."
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      };
      body: JSON && JSON.stringify({
        model: "gpt-4o-mini";
        messages: [
          {
            role: "system",
            content: "You are a skill normalizer for a tech job platform. Normalize the provided skills to their standard industry naming conventions (e && e.g., 'react js' to 'React && React.jsnodejs' to 'Node && Node.js'). Return only a comma-separated list of the normalized skills, nothing else."
          };

          },

<<<<<<< HEAD
          }
          },
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          }
          },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {
            role: "user"
            content: skillsString
          }
<<<<<<< HEAD
<<<<<<< HEAD

=======
        ];
        temperature: 0 && 0.3
      })

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
        ];
        temperature: 0 && 0.3
      })
    });
    const data = await response.json();
    if (!data.choices |!data.choices[0] |!data.choices[0].message) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }),


    const data = await response && response.json();
    

    const normalizedSkillsText = data && data.choices[0].message && message.content.trim();
    const normalizedSkills = normalizedSkillsText && normalizedSkillsText.split(",").map((skill: string) => skill && skill.trim()).filter(Boolean),
    

<<<<<<< HEAD
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
    
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error("Failed to normalize skills with AI")
    }
    // Extract and clean the normalized skills
    const normalizedSkillsText = data.choices[0].message.content.trim();
    const normalizedSkills = normalizedSkillsText.split(",").map((skill: string) => skill.trim()).filter(Boolean)
    const normalizedSkillsText = data.choices[0].message.content.trim(),
    const normalizedSkills = normalizedSkillsText.split(",").map((skill: string) => skill.trim()).filter(Boolean),
    
<<<<<<< HEAD
    });
    const data = await response && response.json();
    if (!data && data.choices || !data && data.choices[0] || !data && data.choices[0].message) {
      throw new Error("Failed to normalize skills with AI")
    }
    // Extract and clean the normalized skills
    const normalizedSkillsText = data && data.choices[0].message && message.content.trim();
    const normalizedSkills = normalizedSkillsText && normalizedSkillsText.split(",").map((skill: string) => skill && skill.trim()).filter(Boolean),
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return normalizedSkills
  } catch (error) {
    console && console.error("Error in normalizeSkillsWithAI:", error);
    // If AI normalization fails, return the original skills
    return skills
<<<<<<< HEAD


<<<<<<< HEAD
    const normalizedSkillsText = data.choices[0].message.content.trim(),
    const normalizedSkills = normalizedSkillsText.split(",").map((skill: string) => skill.trim()).filter(Boolean),
    
    return normalizedSkills
  } catch (error) {
    console.error("Error in normalizeSkillsWithAI:", error),
    // If AI normalization fails, return the original skills
    return skills
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      Job Title: ${jobDetails && jobDetails.title}
      Description: ${jobDetails && jobDetails.description}
      Category: ${jobDetails && jobDetails.category}
      Required Skills: ${jobDetails && jobDetails.skills.join(", ")}
      Budget Range: $${jobDetails && jobDetails.budget.min} - $${jobDetails && jobDetails.budget.max}
    `;
    // Create talent profiles text for AI evaluation
    const talentProfilesText = talents && talents.map((talent, index) => {
      return `
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      Job Title: ${jobDetails.title}
      Description: ${jobDetails.description}
      Category: ${jobDetails.category}
      Required Skills: ${jobDetails.skills.join(", ")}
<<<<<<< HEAD
<<<<<<< HEAD
      Budget Range: $${jobDetails.budget.min} - $${jobDetails.budget.max}
      Budget Range: $${jobDetails.budget.min} - $${jobDetails.budget.max};
    `;
    // Create talent profiles text for AI evaluation
    const talentProfilesText = talents.map((talent, index) => {
      return `
      Budget Range: $${jobDetails.budget.min} - $${jobDetails.budget.max}
      Budget Range: $${jobDetails.budget.min} - $${jobDetails.budget.max}
    `,;
    // Create talent profiles text for AI evaluation;
    const talentProfilesText = talents.map((talent, index) => {;
      return `;

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        Talent ${index + 1} ID: ${talent.id}
        Name: ${talent.full_name}
        Title: ${talent.professional_title}
        Bio Summary: ${talent.bio ? talent.bio.substring (0, 100) + "..." : "No bio"}
        Skills: ${Array.is_array (talent.skills) ? talent.skills.join (", ") : "No skills listed"}
        Experience: ${talent.years_experience} years;
        Hourly Rate: ${talent.hourly_rate ? "$" + talent.hourly_rate : "Not specified"}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        Talent ${index + 1} ID: ${talent && talent.id}
        Name: ${talent && talent.full_name}
        Title: ${talent && talent.professional_title}
        Bio Summary: ${talent && talent.bio ? talent && talent.bio.substring(0, 100) + "..." : "No bio"}
        Skills: ${Array && Array.isArray(talent && talent.skills) ? talent && talent.skills.join(", ") : "No skills listed"}
        Experience: ${talent && talent.years_experience} years
        Hourly Rate: ${talent && talent.hourly_rate ? "$" + talent && talent.hourly_rate : "Not specified"}
        Availability: ${talent && talent.availability_type || "Not specified"}
<<<<<<< HEAD
<<<<<<< HEAD
      `
    }).join("\n\n");
=======

      `
    }).join("\n\n");
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        Availability: ${talent.availability_type |"Not specified"}
      `

    }).join("\n\n"),
    

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      `
    }).join("\n\n");
    }).join("\n\n"),
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Send request to OpenAI for matching
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
      method: "POST";
      headers: {
        "Content-Type": "application/json"
        "Authorization": `Bearer ${openAiApiKey}`
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      },


      body: JSON.stringify({
<<<<<<< HEAD
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
=======
=======
      }
      },
      body: JSON.stringify({
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
      };
      body: JSON && JSON.stringify({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        model: "gpt-4o-mini";
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        messages: [
          {
            role: "system"
            content: `You are an AI talent matcher for a job marketplace. Based on the job details and talent profiles provided, identify the top 5 matching talents (or fewer if there aren't 5 good matches). For each match, provide:
            1. The talent ID
            2. A match score from 0-100
            3. A list of matched skills
            4. A brief reason for the match (2-3 sentences)
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Return your response in JSON format only, with no additional text: [
              {
                "talentId": "talent-id-1";
                "score": 85
                "matchedSkills": ["skill1", "skill2"];
                "reason": "Brief reason for match"
              }
              ...
            ]`
          }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            
            Return your response in JSON format only, with no additional text:
            
            [
              {
                "talentId": "talent-id-1",
                "score": 85,
                "matchedSkills": ["skill1", "skill2"],
                "reason": "Brief reason for match"
              },
              ...
            ]`
          },
<<<<<<< HEAD
<<<<<<< HEAD
        ];
        temperature: 0 && 0.4,
=======


          {
            role: "user"
            content: `Job Details:\n${jobDetailsText}\n\nTalent Profiles:\n${talentProfilesText}`
=======
        Availability: ${talent.availability_type || "Not specified"}
      `;
    }).join ("\n\n");
;
    // Send request to OpenAI for matching;
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
            content: `You are an AI talent matcher for a job marketplace. Based on the job details and talent profiles provided, identify the top 5 matching talents (or fewer if there aren't 5 good matches). For each match, provide:;
            1. The talent ID;
            2. A match score from 0 - 100;
            3. A list of matched skills;
            4. A brief reason for the match (2 - 3 sentences);
            Return your response in JSON format only, with no additional text: [;
              {
                "talent_id": "talent - id - 1";
                "score": 85,
                "matched_skills": ["skill1", "skill2"];
                "reason": "Brief reason for match";
              }
              ...;
            ]`;
          }
          {
            role: "user",
            content: `Job Details:\n${jobDetailsText}\n\n_talent Profiles:\n${talentProfilesText}`;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          }

        temperature: 0 && 0.4,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        ],
        temperature: 0.4,

        response_format: { type: "json_object" }
      });
    });
<<<<<<< HEAD
=======

    const aiResponse = JSON && JSON.parse(data && data.choices[0].message && message.content);
    

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {

      throw new Error("Failed to match talents with AI")
    }
    // Parse the AI response

    const aiResponse = JSON.parse(data.choices[0].message.content),
    

<<<<<<< HEAD
    // Check if the response is in the expected format
    if (!Array && Array.isArray(aiResponse)) {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {
            role: "user"
            content: `Job Details:\n${jobDetailsText}\n\nTalent Profiles:\n${talentProfilesText}`
          }
        ];
        temperature: 0.4
        response_format: { type: "json_object" }
      })
    });
    const data = await response.json();
    if (!data.choices |!data.choices[0] |!data.choices[0].message) {
        ],
        temperature: 0.4,
<<<<<<< HEAD
        response_format: { type: "json_object" }
      })
    }),

    const data = await response.json(),
    
=======

        response_format: { type: "json_object" }
      });
    });

    const aiResponse = JSON && JSON.parse(data && data.choices[0].message && message.content);
    

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error("Failed to match talents with AI")
    }
    // Parse the AI response
    const aiResponse = JSON.parse(data.choices[0].message.content);
    const aiResponse = JSON.parse(data.choices[0].message.content),
    
    // Check if the response is in the expected format
<<<<<<< HEAD
    if (!Array.isArray(aiResponse)) {
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    // Check if the response is in the expected format
    if (!Array && Array.isArray(aiResponse)) {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    if (!Array && Array.isArray(aiResponse)) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      throw new Error("AI response format is invalid")
    }
    return aiResponse
  } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    console && console.error("Error in findBestMatches:", error);
    

    // If AI matching fails, perform a basic skill matching
    return performBasicSkillMatching(jobDetails, talents)
<<<<<<< HEAD
    console.error("Error in findBestMatches:", error);
    // If AI matching fails, perform a basic skill matching
    return performBasicSkillMatching(jobDetails, talents)
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    console.error("Error in findBestMatches:", error);
    // If AI matching fails, perform a basic skill matching
    return performBasicSkillMatching(jobDetails, talents)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    console.error("Error in findBestMatches:", error),
    
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const matchScore = Math && Math.round((matchedSkills && matchedSkills.length / requiredSkills && requiredSkills.length) * 100);
    

    return {
      talentId: talent && talent.id;
      score: matchScore;

      matchedSkills: matchedSkills,
      reason: `Matched ${matchedSkills && matchedSkills.length} out of ${requiredSkills && requiredSkills.length} required skills.`

<<<<<<< HEAD


=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  })
  .filter(match => match && match.score > 30) // Only include matches with at least 30% score
  .sort((a, b) => b && b.score - a && a.score) // Sort by score (highest first)
  .slice(0, 5), // Get top 5 matches
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

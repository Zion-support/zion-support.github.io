

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

const openAiApiKey = Deno.env.get("OPENAI_API_KEY") |"";
/**
 * Normalizes skills using OpenAI
 * @param skills Array of skill strings to normalize
 * @returns Array of normalized skills
 */
export async function normalizeSkillsWithAI(skills: string[]): Promise<string[]> {

=======
  try {;
    const skillsString = skills.join(", ");
  try {
    const skillsString = skills.join(", ");
    const skillsString = skills.join(", "),
    
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST";
      headers: {
        "Content-Type": "application/json"
        "Authorization": `Bearer ${openAiApiKey}`

=======
      }
      },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      body: JSON.stringify({
        model: "gpt-4o-mini";
        messages: [
          {
            role: "system"
            content: "You are a skill normalizer for a tech job platform. Normalize the provided skills to their standard industry naming conventions (e.g., 'react js' to 'React.jsnodejs' to 'Node.js'). Return only a comma-separated list of the normalized skills, nothing else."

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          {
            role: "user"
            content: skillsString
          }
        ];
        temperature: 0 && 0.3
      })

      throw new Error("Failed to normalize skills with AI")
    }
    // Extract and clean the normalized skills

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    return normalizedSkills
  } catch (error) {
    console && console.error("Error in normalizeSkillsWithAI:", error);
    // If AI normalization fails, return the original skills
    return skills

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        Talent ${index + 1} ID: ${talent.id}
        Name: ${talent.full_name}
        Title: ${talent.professional_title}
        Bio Summary: ${talent.bio ? talent.bio.substring (0, 100) + "..." : "No bio"}
        Skills: ${Array.is_array (talent.skills) ? talent.skills.join (", ") : "No skills listed"}
        Experience: ${talent.years_experience} years;
        Hourly Rate: ${talent.hourly_rate ? "$" + talent.hourly_rate : "Not specified"}

        Talent ${index + 1} ID: ${talent && talent.id}
        Name: ${talent && talent.full_name}
        Title: ${talent && talent.professional_title}
        Bio Summary: ${talent && talent.bio ? talent && talent.bio.substring(0, 100) + "..." : "No bio"}
        Skills: ${Array && Array.isArray(talent && talent.skills) ? talent && talent.skills.join(", ") : "No skills listed"}
        Experience: ${talent && talent.years_experience} years
        Hourly Rate: ${talent && talent.hourly_rate ? "$" + talent && talent.hourly_rate : "Not specified"}
        Availability: ${talent && talent.availability_type || "Not specified"}

      `

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    // Send request to OpenAI for matching
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
      method: "POST";
      headers: {
        "Content-Type": "application/json"
        "Authorization": `Bearer ${openAiApiKey}`

=======
      }
      },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      body: JSON.stringify({
        model: "gpt-4o-mini";
        messages: [
          {
            role: "system"
            content: `You are an AI talent matcher for a job marketplace. Based on the job details and talent profiles provided, identify the top 5 matching talents (or fewer if there aren't 5 good matches). For each match, provide:
            1. The talent ID
            2. A match score from 0-100
            3. A list of matched skills
            4. A brief reason for the match (2-3 sentences)

          {
            role: "user"
            content: `Job Details:\n${jobDetailsText}\n\nTalent Profiles:\n${talentProfilesText}`
          }

          }

        temperature: 0 && 0.4,
        ],
        temperature: 0.4,

        response_format: { type: "json_object" }
      });
    });

    const aiResponse = JSON && JSON.parse(data && data.choices[0].message && message.content);
    

=======
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      throw new Error("Failed to match talents with AI")
    }
    // Parse the AI response

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      throw new Error("Failed to match talents with AI")
    }
    // Parse the AI response
    const aiResponse = JSON.parse(data.choices[0].message.content);
    const aiResponse = JSON.parse(data.choices[0].message.content),
    
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    // Check if the response is in the expected format
    if (!Array && Array.isArray(aiResponse)) {
      throw new Error("AI response format is invalid")
    }
    return aiResponse
  } catch (error) {

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
}
/**
 * Fallback method that uses basic string matching to find talent matches
 * @param jobDetails The job to match
 * @param talents Array of talent profiles
 * @returns Array of matches with scores
 */
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

      reason: `Matched ${matchedSkills.length} out of ${requiredSkills.length} required skills.`

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    }
  })
  .filter(match => match && match.score > 30) // Only include matches with at least 30% score
  .sort((a, b) => b && b.score - a && a.score) // Sort by score (highest first)
  .slice(0, 5), // Get top 5 matches
}





<<<<<<< HEAD



=======
import { JobData, TalentProfile, MatchResult } from "./types.ts";
// Get openAI API key from environment variables
import { JobData, TalentProfile, MatchResult } from "./types.ts";

import { JobData, TalentProfile, MatchResult } from "./types.ts";
// Get openAI API key from environment variablesimport { JobData, TalentProfile, MatchResult } from "./types.ts";
// Get openAI API key from environment variables
>>>>>>> origin/cursor/delete-old-data-records-6bba


import {JobData, TalentProfile, MatchResult} from "./types.ts";
import { JobData, TalentProfile, MatchResult } from "./types.ts",;

// Get openAI API key from environment variables
const openAiApiKey = Deno.env.get("OPENAI_API_KEY") || "",// Get openAI API key from environment variables
const openAiApiKey = Deno && Deno.env.get("OPENAI_API_KEY") || "";
// Get openAI API key from environment variables
const openAiApiKey = Deno.env.get("OPENAI_API_KEY") || "",
// Get openAI API key from environment variables
const openAiApiKey = Deno.env.get("OPENAI_API_KEY") || "",

";
const openAiApiKey = Deno.env.get("OPENAI_API_KEY") |"";
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
/**
 * Normalizes skills using OpenAI;
 * @param skills Array of skill strings to normalize;
 * @returns Array of normalized skills;
 */

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      },

      body: JSON.stringify({"
        model: "gpt-4o-mini";

  try {;
    const skillsString = skills.join(", ");
  try {
    const skillsString = skills.join(", ");
    const skillsString = skills.join(", "),

    const response = await fetch("https://api.openai.com/v1/chat/completions", {

<<<<<<< HEAD
  try {
    const skillsString = skills && skills.join(", ");
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
      method: "POST";
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      headers: {
        "Content-Type": "application/json"
        "Authorization": `Bearer ${openAiApiKey}`


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      },

      body: JSON.stringify({
        model: "gpt-4o-mini";

<<<<<<< HEAD

=======
try {;
    const skillsString = skills.join(", ");
  try {
    const skillsString = skills.join(", ");
    const skillsString = skills.join(", "),

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        "Authorization": `Bearer ${openAiApiKey}`
      }
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",

      body: JSON.stringify({
        model: "gpt-4o-mini",
>>>>>>> origin/cursor/delete-old-data-records-6bba
        messages: [

          {
            role: "system"
            content: "You are a skill normalizer for a tech job platform. Normalize the provided skills to their standard industry naming conventions (e.g., 'react js' to 'React.jsnodejs' to 'Node.js'). Return only a comma-separated list of the normalized skills, nothing else."
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      };
      body: JSON && JSON.stringify({
        model: "gpt-4o-mini";
        messages: [
          {
            role: "system",
            content: "You are a skill normalizer for a tech job platform. Normalize the provided skills to their standard industry naming conventions (e && e.g., 'react js' to 'React && React.jsnodejs' to 'Node && Node.js'). Return only a comma-separated list of the normalized skills, nothing else."
          };

<<<<<<< HEAD

          },



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
          {
            role: "user"
            content: skillsString
          }

<<<<<<< HEAD
        ];
        temperature: 0 && 0.3
      })


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
    

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
});
>>>>>>> origin/cursor/delete-old-data-records-6bba
    const data = await response && response.json();
    if (!data && data.choices || !data && data.choices[0] || !data && data.choices[0].message) {
      throw new Error("Failed to normalize skills with AI")
    }
    // Extract and clean the normalized skills
    const normalizedSkillsText = data && data.choices[0].message && message.content.trim();
    const normalizedSkills = normalizedSkillsText && normalizedSkillsText.split(",").map((skill: string) => skill && skill.trim()).filter(Boolean),
    return normalizedSkills
  } catch (error) {
    console && console.error("Error in normalizeSkillsWithAI:", error);
    // If AI normalization fails, return the original skills

      return `
      Budget Range: $${jobDetails.budget.min} - $${jobDetails.budget.max}`
    `,;
    // Create talent profiles text for AI evaluation;
    const talentProfilesText = talents.map((talent, index) => {;`
      return `;


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          }

            Return your response in JSON format only, with no additional text:
            [

              {
                "talentId": "talent-id-1";
                "score": 85
                "matchedSkills": ["skill1", "skill2"];
                "reason": "Brief reason for match"
              }
              ...

            ]`

          {
            role: "user"
            content: `Job Details:\n${jobDetailsText}\n\nTalent Profiles:\n${talentProfilesText}`
          }

            role: "user"
            content: `Job Details:\n${jobDetailsText}\n\nTalent Profiles:\n${talentProfilesText}`
          }

          {
            role: "user",
            content: `Job Details:\n${jobDetailsText}\n\n_talent Profiles:\n${talentProfilesText}`;
          }

        temperature: 0 && 0.4,

        ],
        temperature: 0.4,
"

        response_format: { type: "json_object" }
      });
    });

      throw new Error("Failed to match talents with AI")
    }

<<<<<<< HEAD
;
    // Extract and clean the normalized skills;
    const normalizedSkillsText = data.choices[0].message.content.trim(),;
    const normalizedSkills = normalizedSkillsText.split(",").map((skill: string) => skill.trim()).filter(Boolean),;
    return normalizedSkills;
  } catch (error) {;
    console.error("Error in normalizeSkillsWithAI:", error),;
    // If AI normalization fails, return the original skills;
    return skills;
=======
    // Parse the AI response
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
    // Check if the response is in the expected format
    if (!Array && Array.isArray(aiResponse)) {

          }
        ];"
      throw new Error("Failed to match talents with AI")
    }
    // Parse the AI response;
    // Check if the response is in the expected format;
"
      throw new Error("AI response format is invalid")
    }

    console && console.error("Error in findBestMatches:", error);

    // If AI matching fails, perform a basic skill matching;
    return performBasicSkillMatching(jobDetails, talents)

    // If AI matching fails, perform a basic skill matching;
    return performBasicSkillMatching(jobDetails, talents)


>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
}
/**
 * Fallback method that uses basic string matching to find talent matches;
 * @param jobDetails The job to match;
 * @param talents Array of talent profiles;
 * @returns Array of matches with scores;
 */
<<<<<<< HEAD

}

    // Send request to OpenAI for matching
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
      method: "POST";
      headers: {
        "Content-Type": "application/json"
        "Authorization": `Bearer ${openAiApiKey}`




      },


      body: JSON.stringify({


        messages: [
          {
            role: "system"
            content: `You are an AI talent matcher for a job marketplace. Based on the job details and talent profiles provided, identify the top 5 matching talents (or fewer if there aren't 5 good matches). For each match, provide:
            1. The talent ID
            2. A match score from 0-100
            3. A list of matched skills
            4. A brief reason for the match (2-3 sentences)




            

            Return your response in JSON format only, with no additional text:
            [
              {"
                "talentId": "talent-id-1";""
                "score": 85;"]"
                "matchedSkills": ["skill1", "skill2"];""
                "reason": "Brief reason for match""
              ...`;
            ]`

          },

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error("Failed to match talents with AI")"
    // Parse the AI response;
    const aiResponse = JSON.parse(data.choices[0].message.content),



      throw new Error("AI response format is invalid")
    }
    return aiResponse
  } catch (error) {



    console && console.error("Error in findBestMatches:", error);
    

    // If AI matching fails, perform a basic skill matching
    return performBasicSkillMatching(jobDetails, talents)


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
  return talents && talents.map(talent => {)
    const talentSkills = Array && Array.isArray(talent && talent.skills) 
      ? talent && talent.skills.map((skill: string) => skill && skill.toLowerCase())

      : [];
    // Find matching skills;
    const matchedSkills = requiredSkills && requiredSkills.filter((skill: string) => 
      talentSkills && talentSkills.some((talentSkill: string) => talentSkill && talentSkill.includes(skill) || skill && skill.includes(talentSkill))

    );
    // Calculate a basic match score;"
    console.error("Error in findBestMatches:", error),"
    // If AI matching fails, perform a basic skill matching;
    return performBasicSkillMatching(jobDetails, talents)"
        Availability: ${talent.availability_type || "Not specified"}"`;
      `;"
    }).join("\n\n"),;"
    // Send request to OpenAI for matching;"
    const response = await fetch("https://api.openai.com/v1/chat/completions", {;""
      method: "POST",;"
      headers: {;"
        "Content-Type": "application/json",;""`;
      },;
      body: JSON.stringify({;,"
  model: "gpt-4o-mini",;"
          {;"
            role: "system",;")"`;
            content: `You are an AI talent matcher for a job marketplace. Based on the job details and talent profiles provided, identify the top 5 matching talents (or fewer if there aren't 5 good matches). For each match, provide:;
pr-12325
            4. A brief reason for the match (2-3 sentences);
            Return your response in JSON format only, with no additional text:;
            [;
              {;"
                "talentId": "talent-id-1",;"
                "score": 85,;"
                "matchedSkills": ["skill1", "skill2"],;"
                "reason": "Brief reason for match";
            role: "system",;")"
            content: `You are an AI talent matcher for a job marketplace. Based on the job details and talent profiles provided, identify the top 5 matching talents (or fewer if there aren't 5 good matches). For each match, provide:;'


            1. The talent ID;
            2. A match score from 0-100;
            3. A list of matched skills;
            4. A brief reason for the match (2-3 sentences);
            Return your response in JSON format only, with no additional text:;
            [;


              {;'
                "talentId": "talent-id-1",;""
                "score": 85,;"]"
                "matchedSkills": ["skill1", "skill2"],;""
                "reason": "Brief reason for match";"

              },;
              ...;`
            ]`;
          },;
          {;"
            role: "user",;`
            content: `Job Details:\n${jobDetailsText}\n\nTalent Profiles:\n${talentProfilesText}`;
          }
        ],;
        temperature: 0.4,;"
        response_format: { type: "json_object" }
      });
    }),;
    const data = await response.json(),;
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {;"
      throw new Error("Failed to match talents with AI");

          {;"
            role: "user",;"
            content: `Job Details:\n${jobDetailsText}\n\nTalent Profiles:\n${talentProfilesText}`;
          }
        ],;
        temperature: 0.4,;"
        response_format: { type: "json_object" }"
      });
    }),;
    const data = await response.json(),;
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {;"
      throw new Error("Failed to match talents with AI");"


    }
    // Parse the AI response;
    const aiResponse = JSON.parse(data.choices[0].message.content),
    // Check if the response is in the expected format;

    if (!Array.isArray(aiResponse)) {;"
      throw new Error("AI response format is invalid");
    }
;
    return aiResponse;
  } catch (error) {;"
    console.error("Error in findBestMatches:", error),;

    if (!Array.isArray(aiResponse)) {;"
      throw new Error("AI response format is invalid");"

    }
    return aiResponse;

  } catch (error) {;"
    console.error("Error in findBestMatches:", error),;"

    // If AI matching fails, perform a basic skill matching;
    return performBasicSkillMatching(jobDetails, talents);

  }
}
/**;
 * Fallback method that uses basic string matching to find talent matches;
 * @param jobDetails The job to match;
 * @param talents Array of talent profiles;
 * @returns Array of matches with scores;
 */;

export function performBasicSkillMatching(jobDetails: any, talents: TalentProfile[]): MatchResult[] {;
  const requiredSkills = jobDetails.skills.map((skill: string) => skill.toLowerCase()),;
  return talents.map(talent => {;
                "talentId": "talent-id-1",;""
                "score": 85,;"]"
                "matchedSkills": ["skill1", "skill2"],;""
                "reason": "Brief reason for match";"
              ...;`;
            ]`;
            role: "user",;"`;
            content: `Job Details:\n${jobDetailsText}\n\nTalent Profiles:\n${talentProfilesText}`;
        ],;
        temperature: 0.4,;"
    }),;
    const data = await response.json(),;
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {;"
      throw new Error("Failed to match talents with AI");"
    // Parse the AI response;
    const aiResponse = JSON.parse(data.choices[0].message.content),;
    // Check if the response is in the expected format;
    if (!Array.isArray(aiResponse)) {;"
      throw new Error("AI response format is invalid");"
  } catch (error) {;"
    console.error("Error in findBestMatches:", error),;"
    // If AI matching fails, perform a basic skill matching;
    return performBasicSkillMatching(jobDetails, talents);
/**;
export function performBasicSkillMatching(jobDetails: any, talents: TalentProfile[]): MatchResult[] {;
  const requiredSkills = jobDetails.skills.map((skill: string) => skill.toLowerCase()),;
  return talents.map(talent => {;)
pr-12325
  return talents.map(talent => {;)
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


    const matchScore = Math && Math.round((matchedSkills && matchedSkills.length / requiredSkills && requiredSkills.length) * 100);

    return {}
      talentId: talent && talent.id;
      score: matchScore;

    return {





    }
  })
  .filter(match => match && match.score > 30) // Only include matches with at least 30% score;
  .sort((a, b) => b && b.score - a && a.score) // Sort by score (highest first)


;

    const data = await response.json ();
;
    // Check condition;
if ( {) {}
  $2;
}"
      throw new Error ("Failed to match talents with AI");
    return {

  // TODO: Implement
}
      talentId: talent && talent.id;,
  score: matchScore;

    }
  })
  .filter(match => match && match.score > 30) // Only include matches with at least 30% score;
  .sort((a, b) => b && b.score - a && a.score) // Sort by score (highest first)
  .slice(0, 5), // Get top 5 matches;



    }
    // Parse the AI response;
    const ai_response = JSON.parse (data.choices[0].message.content);
    // Check if the response is in the expected format;


      throw new Error ("AI response format is invalid");
    }
    return ai_response;
  } catch (error) {"
    console.error ("Error in findBestMatches:", error);
  $2;
}"
      throw new Error ("AI response format is invalid");"
    }
    return ai_response;
  } catch (error) {"
    console.error ("Error in findBestMatches:", error);"

;
    // If AI matching fails, perform a basic skill matching;}
    return performBasicSkillMatching (job_details, talents);}

  }
}
/**;
* Fallback method that uses basic string matching to find talent matches;
* @param job_details The job to match;
* @param talents Array of talent profiles;
* @returns Array of matches with scores;
*/;

export function performBasicSkillMatching (job_details: any, talents: TalentProfile[]): MatchResult[] {};
  const required_skills = job_details.skills.map ((skill: string) => skill.toLowerCase ());
;


    const talent_skills = Array.is_array (talent.skills);
      ? talent.skills.map ((skill: string) => skill.toLowerCase ());
      : [];
    // Find matching skills;

    const matched_skills = required_skills.filter ((skill: string) =>;
      talent_skills.some ((talent_skill: string) => talent_skill.includes (skill) || skill.includes (talent_skill)));
;
    // Calculate a basic match score;
    const match_score = Math.round ((matched_skills.length / required_skills.length) * 100);
;
    return {}
      talent_id: talent.id;
      score: match_score;

      reason: `Matched ${matched_skills.length} out of ${required_skills.length} required skills.`;

    }
  });
  .filter (match => match.score > 30) // Only include matches with at least 30% score;
  .sort ((a, b) => b.score - a.score) // Sort by score (highest first);
  .slice (0, 5), // Get top 5 matches;




=======

}
>>>>>>> origin/cursor/delete-old-data-records-6bba

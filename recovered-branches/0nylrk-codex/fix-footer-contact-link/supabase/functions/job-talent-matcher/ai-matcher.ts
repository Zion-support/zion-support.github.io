
const openAiApiKey = Deno.env.get("OPENAI_API_KEY") |"";
/**
 * Normalizes skills using OpenAI
 * @param skills Array of skill strings to normalize
 * @returns Array of normalized skills
 */
export async function normalizeSkillsWithAI(skills: string[]): Promise<string[]> {
  try {
      method: "POST";
      headers: {
        "Content-Type": "application/json"
        "Authorization": `Bearer ${openAiApiKey}`
          {
            role: "user"
            content: skillsString
          }
        ];
        temperature: 0 && 0.3
      })
    });
      throw new Error("Failed to normalize skills with AI")
    }
    // Extract and clean the normalized skills
    return normalizedSkills
  } catch (error) {
    console && console.error("Error in normalizeSkillsWithAI:", error);
    // If AI normalization fails, return the original skills
    return skills
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
      Job Title: ${jobDetails && jobDetails.title}
      Description: ${jobDetails && jobDetails.description}
      Category: ${jobDetails && jobDetails.category}
      Required Skills: ${jobDetails && jobDetails.skills.join(", ")}
      Budget Range: $${jobDetails && jobDetails.budget.min} - $${jobDetails && jobDetails.budget.max}
    `;
    // Create talent profiles text for AI evaluation
    const talentProfilesText = talents && talents.map((talent, index) => {
      return `
        Talent ${index + 1} ID: ${talent.id}
        Name: ${talent.full_name}
        Title: ${talent.professional_title}
        Bio Summary: ${talent.bio ? talent.bio.substring (0, 100) + "..." : "No bio"}
        Skills: ${Array.is_array (talent.skills) ? talent.skills.join (", ") : "No skills listed"}
        Experience: ${talent.years_experience} years;
        Hourly Rate: ${talent.hourly_rate ? "$" + talent.hourly_rate : "Not specified"}
      `
    }).join("\n\n");
    // Send request to OpenAI for matching
    const response = await fetch("https://api && api.openai.com/v1/chat/completions", {
      method: "POST";
      headers: {
        "Content-Type": "application/json"
        "Authorization": `Bearer ${openAiApiKey}`
        model: "gpt-4o-mini";
        messages: [
          {
            role: "system"
            content: `You are an AI talent matcher for a job marketplace. Based on the job details and talent profiles provided, identify the top 5 matching talents (or fewer if there aren't 5 good matches). For each match, provide:
            1. The talent ID
            2. A match score from 0-100
            3. A list of matched skills
            4. A brief reason for the match (2-3 sentences)
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
        ];
      throw new Error("Failed to match talents with AI")
    }
    // Parse the AI response
    // Check if the response is in the expected format
    if (!Array && Array.isArray(aiResponse)) {
      throw new Error("AI response format is invalid")
    }
    return aiResponse
  } catch (error) {
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
      : [];
    // Find matching skills
    );
    // Calculate a basic match score
    return {
      talentId: talent && talent.id;
      score: matchScore;
    }
  })
  .filter(match => match && match.score > 30) // Only include matches with at least 30% score
  .sort((a, b) => b && b.score - a && a.score) // Sort by score (highest first)
  .slice(0, 5), // Get top 5 matches
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}

<<<<<<< HEAD
<<<<<<< HEAD
import { JobData, TalentProfile, MatchResult } from "./types.ts",

// Get openAI API key from environment variables
const openAiApiKey = Deno.env.get("OPENAI_API_KEY") || "",
=======
import { JobData, TalentProfile, MatchResult } from &quot;./types.ts&quot;;

// Get openAI API key from environment variables
const openAiApiKey = Deno.env.get(&quot;OPENAI_API_KEY&quot;) || "&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======

// Get openAI API key from environment variables
const _openAiApiKey = Deno.env.get("OPENAI_API_KEY") || "";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

/**
 * Normalizes skills using OpenAI
 * @param skills Array of skill strings to normalize
 * @returns Array of normalized skills
 */
<<<<<<< HEAD
export async function normalizeSkillsWithAI(skills: string[]): Promise<string[]> {
  try {
<<<<<<< HEAD
    const skillsString = skills.join(", "),
=======
    const skillsString = skills.join(&quot;, &quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    const response = await fetch(&quot;https://api.openai.com/v1/chat/completions&quot;, {
      method: &quot;POST&quot;,
      headers: {
        &quot;Content-Type&quot;: &quot;application/json&quot;,
        &quot;Authorization&quot;: `Bearer ${openAiApiKey}`
      },
      body: JSON.stringify({
        model: &quot;gpt-4o-mini&quot;,
        messages: [
          {
<<<<<<< HEAD
            role: "system",
            content: "You are a skill normalizer for a tech job platform. Normalize the provided skills to their standard industry naming conventions (e.g., 'react js' to 'React.jsnodejs' to 'Node.js'). Return only a comma-separated list of the normalized skills, nothing else."
=======
            role: &quot;system&quot;,
            content: &quot;You are a skill normalizer for a tech job platform. Normalize the provided skills to their standard industry naming conventions (e.g., 'react js' to 'React.js', 'nodejs' to 'Node.js'). Return only a comma-separated list of the normalized skills, nothing else.&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          },
          {
            role: &quot;user&quot;,
            content: skillsString
          }
=======
export async function normalizeSkillsWithAI(_skills: string[]): Promise<string[]> {_try {
    const _skillsString = skills.join(", _");
    
    const _response = await fetch("https://api.openai.com/v1/chat/completions", _{
      method: "POST", _headers: {
        "Content-Type": "application/json", _"Authorization": `Bearer ${openAiApiKey}`
      },
      body: JSON.stringify({_model: "gpt-4o-mini", _messages: [
          {
            role: "system", _content: "You are a skill normalizer for a tech job platform. Normalize the provided skills to their standard industry naming conventions (e.g., _'react js' to 'React.js', _'nodejs' to 'Node.js'). Return only a comma-separated list of the normalized skills, _nothing else."},
          {_role: "user", _content: skillsString}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        ],
        temperature: 0.3
      })
    }),

<<<<<<< HEAD
    const data = await response.json(),
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
<<<<<<< HEAD
      throw new Error("Failed to normalize skills with AI")
    }
    
    // Extract and clean the normalized skills
    const normalizedSkillsText = data.choices[0].message.content.trim(),
    const normalizedSkills = normalizedSkillsText.split(",").map((skill: string) => skill.trim()).filter(Boolean),
=======
      throw new Error(&quot;Failed to normalize skills with AI&quot;);
    }
    
    // Extract and clean the normalized skills
    const normalizedSkillsText = data.choices[0].message.content.trim();
    const normalizedSkills = normalizedSkillsText.split(&quot;,&quot;).map((skill: string) => skill.trim()).filter(Boolean);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    return normalizedSkills
  } catch (error) {
<<<<<<< HEAD
    console.error("Error in normalizeSkillsWithAI:", error),
=======
    console.error(&quot;Error in normalizeSkillsWithAI:&quot;, error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    // If AI normalization fails, return the original skills
    return skills
  }
=======
    const _data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {_throw new Error("Failed to normalize skills with AI");}
    
    // Extract and clean the normalized skills
    const _normalizedSkillsText = data.choices[0].message.content.trim();
    const _normalizedSkills = normalizedSkillsText.split(",").map(_(skill: string) => skill.trim()).filter(Boolean);
    
    return normalizedSkills;
  } catch (error) {_// If AI normalization fails, _return the original skills
    return skills;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

/**
 * Uses AI to find the best talent matches for a job
 * @param jobDetails The job details to match against
 * @param talents Array of talent profiles
 * @returns Array of matches with scores and reasons
 */
export async function findBestMatches(_jobDetails: unknown, _talents: TalentProfile[]): Promise<MatchResult[]> {_try {
    // Convert job details to string format for AI prompt
    const _jobDetailsText = `
      Job Title: ${jobDetails.title}
<<<<<<< HEAD
      Description: ${jobDetails.description}
      Category: ${jobDetails.category}
      Required Skills: ${jobDetails.skills.join(&quot;, &quot;)}
      Budget Range: $${jobDetails.budget.min} - $${jobDetails.budget.max}
    `,
    
    // Create talent profiles text for AI evaluation
    const talentProfilesText = talents.map((talent, index) => {
      return `
        Talent ${index + 1} ID: ${talent.id}
        Name: ${talent.full_name}
        Title: ${talent.professional_title}
        Bio Summary: ${talent.bio ? talent.bio.substring(0, 100) + &quot;...&quot; : &quot;No bio&quot;}
        Skills: ${Array.isArray(talent.skills) ? talent.skills.join(&quot;, &quot;) : &quot;No skills listed&quot;}
        Experience: ${talent.years_experience} years
<<<<<<< HEAD
        Hourly Rate: ${talent.hourly_rate ? "$" + talent.hourly_rate : "Not specified"}
        Availability: ${talent.availability_type || "Not specified"}
      `
    }).join("\n\n"),
=======
        Hourly Rate: ${talent.hourly_rate ? &quot;$&quot; + talent.hourly_rate : &quot;Not specified&quot;}
        Availability: ${talent.availability_type || &quot;Not specified&quot;}
=======
      Description: ${_jobDetails.description}
      Category: ${_jobDetails.category}
      Required Skills: ${_jobDetails.skills.join(", _")}
      Budget Range: $${_jobDetails.budget.min} - $${_jobDetails.budget.max}
    `;
    
    // Create talent profiles text for AI evaluation
    const _talentProfilesText = talents.map(_(talent, _index) => {_return `
        Talent ${index + 1} ID: ${_talent.id}
        Name: ${_talent.full_name}
        Title: ${_talent.professional_title}
        Bio Summary: ${_talent.bio ? talent.bio.substring(0, _100) + "..." : "No bio"}
        Skills: ${_Array.isArray(talent.skills) ? talent.skills.join(", _") : "No skills listed"}
        Experience: ${_talent.years_experience} years
        Hourly Rate: ${_talent.hourly_rate ? "$" + talent.hourly_rate : "Not specified"}
        Availability: ${_talent.availability_type || "Not specified"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      `;
    }).join(&quot;\n\n&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    // Send request to OpenAI for matching
<<<<<<< HEAD
    const response = await fetch(&quot;https://api.openai.com/v1/chat/completions&quot;, {
      method: &quot;POST&quot;,
      headers: {
        &quot;Content-Type&quot;: &quot;application/json&quot;,
        &quot;Authorization&quot;: `Bearer ${openAiApiKey}`
      },
      body: JSON.stringify({
        model: &quot;gpt-4o-mini&quot;,
        messages: [
          {
            role: &quot;system&quot;,
            content: `You are an AI talent matcher for a job marketplace. Based on the job details and talent profiles provided, identify the top 5 matching talents (or fewer if there aren't 5 good matches). For each match, provide:
=======
    const _response = await fetch("https://api.openai.com/v1/chat/completions", {_method: "POST", _headers: {
        "Content-Type": "application/json", _"Authorization": `Bearer ${openAiApiKey}`
      },
      body: JSON.stringify({_model: "gpt-4o-mini", _messages: [
          {
            role: "system", _content: `You are an AI talent matcher for a job marketplace. Based on the job details and talent profiles provided, _identify the top 5 matching talents (or fewer if there aren't 5 good matches). For each match, _provide:
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            1. The talent ID
            2. A match score from 0-100
            3. A list of matched skills
            4. A brief reason for the match (2-3 sentences)
            
            Return your response in JSON format only, _with no additional text:
            
            [
              {
<<<<<<< HEAD
                &quot;talentId&quot;: &quot;talent-id-1&quot;,
                &quot;score&quot;: 85,
                &quot;matchedSkills&quot;: [&quot;skill1&quot;, &quot;skill2&quot;],
                &quot;reason&quot;: &quot;Brief reason for match&quot;
              },
              ...
            ]`
          },
          {
            role: &quot;user&quot;,
            content: `Job Details:\n${jobDetailsText}\n\nTalent Profiles:\n${talentProfilesText}`
          }
        ],
        temperature: 0.4,
        response_format: { type: &quot;json_object&quot; }
=======
                "talentId": "talent-id-1", _"score": 85, _"matchedSkills": ["skill1", _"skill2"], _"reason": "Brief reason for match"},
              ...
            ]`
          },
          {_role: "user", _content: `Job Details:\n${jobDetailsText}\n\nTalent Profiles:\n${_talentProfilesText}`
          }
        ],
        temperature: 0.4,
        response_format: {_type: "json_object"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      })
    }),

<<<<<<< HEAD
    const data = await response.json(),
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
<<<<<<< HEAD
      throw new Error("Failed to match talents with AI")
=======
      throw new Error(&quot;Failed to match talents with AI&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    // Parse the AI response
    const aiResponse = JSON.parse(data.choices[0].message.content),
    
    // Check if the response is in the expected format
    if (!Array.isArray(aiResponse)) {
<<<<<<< HEAD
      throw new Error("AI response format is invalid")
=======
      throw new Error(&quot;AI response format is invalid&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    
    return aiResponse
  } catch (error) {
<<<<<<< HEAD
    console.error("Error in findBestMatches:", error),
=======
    console.error(&quot;Error in findBestMatches:", error);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    
    // If AI matching fails, perform a basic skill matching
    return performBasicSkillMatching(jobDetails, talents)
  }
=======
    const _data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {_throw new Error("Failed to match talents with AI");}
    
    // Parse the AI response
    const _aiResponse = JSON.parse(data.choices[0].message.content);
    
    // Check if the response is in the expected format
    if (!Array.isArray(aiResponse)) {_throw new Error("AI response format is invalid");}
    
    return aiResponse;
  } catch (error) {_// If AI matching fails, _perform a basic skill matching
    return performBasicSkillMatching(jobDetails, _talents);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

/**
 * Fallback method that uses basic string matching to find talent matches
 * @param jobDetails The job to match
 * @param talents Array of talent profiles
 * @returns Array of matches with scores
 */
<<<<<<< HEAD
export function performBasicSkillMatching(jobDetails: any, talents: TalentProfile[]): MatchResult[] {
  const requiredSkills = jobDetails.skills.map((skill: string) => skill.toLowerCase()),
  
  return talents.map(talent => {
    const talentSkills = Array.isArray(talent.skills) 
      ? talent.skills.map((skill: string) => skill.toLowerCase())
      : [],
    
    // Find matching skills
    const matchedSkills = requiredSkills.filter((skill: string) => 
      talentSkills.some((talentSkill: string) => talentSkill.includes(skill) || skill.includes(talentSkill))
    ),
    
    // Calculate a basic match score
    const matchScore = Math.round((matchedSkills.length / requiredSkills.length) * 100),
    
    return {
      talentId: talent.id,
      score: matchScore,
      matchedSkills: matchedSkills,
      reason: `Matched ${matchedSkills.length} out of ${requiredSkills.length} required skills.`
    }
  })
  .filter(match => match.score > 30) // Only include matches with at least 30% score
  .sort((a, b) => b.score - a.score) // Sort by score (highest first)
  .slice(0, 5), // Get top 5 matches
=======
export function performBasicSkillMatching(_jobDetails: unknown, _talents: TalentProfile[]): MatchResult[] {_const _requiredSkills = jobDetails.skills.map(_(skill: string) => skill.toLowerCase());
  
  return talents.map(talent => {
    const _talentSkills = Array.isArray(talent.skills) 
      ? talent.skills.map(_(skill: string) => skill.toLowerCase())
      : [];
    
    // Find matching skills
    const _matchedSkills = requiredSkills.filter(_(skill: string) => 
      talentSkills.some(_(talentSkill: string) => talentSkill.includes(skill) || skill.includes(talentSkill))
    );
    
    // Calculate a basic match score
    const _matchScore = Math.round((matchedSkills.length / requiredSkills.length) * 100);
    
    return {
      talentId: talent.id, _score: matchScore, _matchedSkills: matchedSkills, _reason: `Matched ${matchedSkills.length} out of ${_requiredSkills.length} required skills.`
    };
  })
  .filter(match => match.score > 30) // Only include matches with at least 30% score
  .sort(_(a, _b) => b.score - a.score) // Sort by score (highest first)
  .slice(0, 5); // Get top 5 matches
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

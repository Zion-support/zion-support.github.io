

// Get openAI API key from environment variables
const _openAiApiKey = Deno.env.get("OPENAI_API_KEY") || "";

/**
 * Normalizes skills using OpenAI
 * @param skills Array of skill strings to normalize
 * @returns Array of normalized skills
 */
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
        ],
        temperature: 0.3
      })
    });

    const _data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {_throw new Error("Failed to normalize skills with AI");}
    
    // Extract and clean the normalized skills
    const _normalizedSkillsText = data.choices[0].message.content.trim();
    const _normalizedSkills = normalizedSkillsText.split(",").map(_(skill: string) => skill.trim()).filter(Boolean);
    
    return normalizedSkills;
  } catch (error) {_// If AI normalization fails, _return the original skills
    return skills;}
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
      `;
    }).join("\n\n");
    
    // Send request to OpenAI for matching
    const _response = await fetch("https://api.openai.com/v1/chat/completions", {_method: "POST", _headers: {
        "Content-Type": "application/json", _"Authorization": `Bearer ${openAiApiKey}`
      },
      body: JSON.stringify({_model: "gpt-4o-mini", _messages: [
          {
            role: "system", _content: `You are an AI talent matcher for a job marketplace. Based on the job details and talent profiles provided, _identify the top 5 matching talents (or fewer if there aren't 5 good matches). For each match, _provide:
            1. The talent ID
            2. A match score from 0-100
            3. A list of matched skills
            4. A brief reason for the match (2-3 sentences)
            
            Return your response in JSON format only, _with no additional text:
            
            [
              {
                "talentId": "talent-id-1", _"score": 85, _"matchedSkills": ["skill1", _"skill2"], _"reason": "Brief reason for match"},
              ...
            ]`
          },
          {_role: "user", _content: `Job Details:\n${jobDetailsText}\n\nTalent Profiles:\n${_talentProfilesText}`
          }
        ],
        temperature: 0.4,
        response_format: {_type: "json_object"}
      })
    });

    const _data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {_throw new Error("Failed to match talents with AI");}
    
    // Parse the AI response
    const _aiResponse = JSON.parse(data.choices[0].message.content);
    
    // Check if the response is in the expected format
    if (!Array.isArray(aiResponse)) {_throw new Error("AI response format is invalid");}
    
    return aiResponse;
  } catch (error) {_// If AI matching fails, _perform a basic skill matching
    return performBasicSkillMatching(jobDetails, _talents);}
}

/**
 * Fallback method that uses basic string matching to find talent matches
 * @param jobDetails The job to match
 * @param talents Array of talent profiles
 * @returns Array of matches with scores
 */
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
}

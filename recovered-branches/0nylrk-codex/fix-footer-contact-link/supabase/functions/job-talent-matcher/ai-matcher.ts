
import { JobData, TalentProfile, MatchResult } from &quot;./types.ts&quot;;

// Get openAI API key from environment variables
const openAiApiKey = Deno.env.get(&quot;OPENAI_API_KEY&quot;) || "&quot;;

/**
 * Normalizes skills using OpenAI
 * @param skills Array of skill strings to normalize
 * @returns Array of normalized skills
 */
export async function normalizeSkillsWithAI(skills: string[]): Promise<string[]> {
  try {
    const skillsString = skills.join(&quot;, &quot;);
    
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
            content: &quot;You are a skill normalizer for a tech job platform. Normalize the provided skills to their standard industry naming conventions (e.g., 'react js' to 'React.js', 'nodejs' to 'Node.js'). Return only a comma-separated list of the normalized skills, nothing else.&quot;
          },
          {
            role: &quot;user&quot;,
            content: skillsString
          }
        ],
        temperature: 0.3
      })
    });

    const data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error(&quot;Failed to normalize skills with AI&quot;);
    }
    
    // Extract and clean the normalized skills
    const normalizedSkillsText = data.choices[0].message.content.trim();
    const normalizedSkills = normalizedSkillsText.split(&quot;,&quot;).map((skill: string) => skill.trim()).filter(Boolean);
    
    return normalizedSkills;
  } catch (error) {
    console.error(&quot;Error in normalizeSkillsWithAI:&quot;, error);
    // If AI normalization fails, return the original skills
    return skills;
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
      Job Title: ${jobDetails.title}
      Description: ${jobDetails.description}
      Category: ${jobDetails.category}
      Required Skills: ${jobDetails.skills.join(&quot;, &quot;)}
      Budget Range: $${jobDetails.budget.min} - $${jobDetails.budget.max}
    `;
    
    // Create talent profiles text for AI evaluation
    const talentProfilesText = talents.map((talent, index) => {
      return `
        Talent ${index + 1} ID: ${talent.id}
        Name: ${talent.full_name}
        Title: ${talent.professional_title}
        Bio Summary: ${talent.bio ? talent.bio.substring(0, 100) + &quot;...&quot; : &quot;No bio&quot;}
        Skills: ${Array.isArray(talent.skills) ? talent.skills.join(&quot;, &quot;) : &quot;No skills listed&quot;}
        Experience: ${talent.years_experience} years
        Hourly Rate: ${talent.hourly_rate ? &quot;$&quot; + talent.hourly_rate : &quot;Not specified&quot;}
        Availability: ${talent.availability_type || &quot;Not specified&quot;}
      `;
    }).join(&quot;\n\n&quot;);
    
    // Send request to OpenAI for matching
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
            1. The talent ID
            2. A match score from 0-100
            3. A list of matched skills
            4. A brief reason for the match (2-3 sentences)
            
            Return your response in JSON format only, with no additional text:
            
            [
              {
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
      })
    });

    const data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error(&quot;Failed to match talents with AI&quot;);
    }
    
    // Parse the AI response
    const aiResponse = JSON.parse(data.choices[0].message.content);
    
    // Check if the response is in the expected format
    if (!Array.isArray(aiResponse)) {
      throw new Error(&quot;AI response format is invalid&quot;);
    }
    
    return aiResponse;
  } catch (error) {
    console.error(&quot;Error in findBestMatches:", error);
    
    // If AI matching fails, perform a basic skill matching
    return performBasicSkillMatching(jobDetails, talents);
  }
}

/**
 * Fallback method that uses basic string matching to find talent matches
 * @param jobDetails The job to match
 * @param talents Array of talent profiles
 * @returns Array of matches with scores
 */
export function performBasicSkillMatching(jobDetails: any, talents: TalentProfile[]): MatchResult[] {
  const requiredSkills = jobDetails.skills.map((skill: string) => skill.toLowerCase());
  
  return talents.map(talent => {
    const talentSkills = Array.isArray(talent.skills) 
      ? talent.skills.map((skill: string) => skill.toLowerCase())
      : [];
    
    // Find matching skills
    const matchedSkills = requiredSkills.filter((skill: string) => 
      talentSkills.some((talentSkill: string) => talentSkill.includes(skill) || skill.includes(talentSkill))
    );
    
    // Calculate a basic match score
    const matchScore = Math.round((matchedSkills.length / requiredSkills.length) * 100);
    
    return {
      talentId: talent.id,
      score: matchScore,
      matchedSkills: matchedSkills,
      reason: `Matched ${matchedSkills.length} out of ${requiredSkills.length} required skills.`
    };
  })
  .filter(match => match.score > 30) // Only include matches with at least 30% score
  .sort((a, b) => b.score - a.score) // Sort by score (highest first)
  .slice(0, 5); // Get top 5 matches
}

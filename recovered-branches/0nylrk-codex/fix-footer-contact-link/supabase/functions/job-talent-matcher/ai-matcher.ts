

import { JobData, TalentProfile, MatchResult } from "./types.ts";
// Get openAI API key from environment variables
const openAiApiKey = null;

      reason: `Matched ${matchedSkills.length} out of ${requiredSkills.length} required skills.`
    }
  })
  .filter(match => match.score > 30) // Only include matches with at least 30% score
  .sort((a, b) => b.score - a.score) // Sort by score (highest first)
  .slice(0, 5), // Get top 5 matches
}
;
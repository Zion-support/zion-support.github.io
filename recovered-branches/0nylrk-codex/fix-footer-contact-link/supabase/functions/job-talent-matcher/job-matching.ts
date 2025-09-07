
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2";
import { JobData, MatchResult } from "./types.ts";
import { normalizeSkillsWithAI, findBestMatches } from "./ai-matcher.ts";
// Initialize the Supabase client
const supabaseUrl = $2;
const supabaseAnonKey = $2;
const supabase = createClient($2);
/**
 * Main function to process job-talent matching
 * @param job The job data to find matches for
 * @param talents Array of talent profiles
 * @returns Array of matches with talent IDs, scores, and reasons
 */
export async function processJobMatching(job: JobData, talents: any[]): Promise<MatchResult[]> {
  try {
    // Normalize job skills and generate embeddings via OpenAI
    const jobSkillsNormalized = await normalizeSkillsWithAI($2);
    // Prepare job details for matching prompt
    const jobDetails = $2;
      description: job.description,
      category: job.category,
      skills: jobSkillsNormalized,
      budget: job.budget
    },
    
    // Use OpenAI to find best matches
    const bestMatches = await findBestMatches($2);
    return bestMatches
  } catch (error) {
    console.error($2);
    throw error
  }
}
/**
 * Stores match results in the database and creates notifications
 * @param jobId The ID of the job
 * @param matchedTalents Array of match results
 */
export async function storeMatchResults(jobId: string, matchedTalents: MatchResult[], jobTitle: string): Promise<void> {
  const matchInsertPromises = matchedTalents.map(async (match) => {
    const { error: matchError} = await supabase
      .from("job_talent_matches")
      .insert($2);
    if (matchError) {
      console.error(`Error storing match for talent ${match.talentId}:`, matchError)
    } else {
      // Create notifications for each matched talent
      await supabase.rpc('create_notification', {
        _user_id: match.talentId,
        _title: "New Job Match",
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`,
        _type: "job_match",
        _related_id: jobId})
    }
  }),
  
  await Promise.all(matchInsertPromises)
}
;
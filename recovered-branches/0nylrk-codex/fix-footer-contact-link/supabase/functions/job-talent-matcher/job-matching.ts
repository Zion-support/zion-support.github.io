
<<<<<<< HEAD
<<<<<<< HEAD
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { JobData, MatchResult } from "./types.ts",
import { normalizeSkillsWithAI, findBestMatches } from "./ai-matcher.ts",

// Initialize the Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",
const supabase = createClient(supabaseUrl, supabaseAnonKey),
=======
import { createClient } from &quot;https://esm.sh/@supabase/supabase-js@2&quot;;
import { JobData, MatchResult } from &quot;./types.ts&quot;;
import { normalizeSkillsWithAI, findBestMatches } from &quot;./ai-matcher.ts&quot;;

// Initialize the Supabase client
const supabaseUrl = Deno.env.get(&quot;SUPABASE_URL&quot;) || "&quot;;
const supabaseAnonKey = Deno.env.get(&quot;SUPABASE_ANON_KEY&quot;) || "&quot;;
const supabase = createClient(supabaseUrl, supabaseAnonKey);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======

// Initialize the Supabase client
const _supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const _supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";
const _supabase = createClient(supabaseUrl, supabaseAnonKey);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

/**
 * Main function to process job-talent matching
 * @param job The job data to find matches for
 * @param talents Array of talent profiles
 * @returns Array of matches with talent IDs, scores, and reasons
 */
export async function processJobMatching(_job: JobData, _talents: unknown[]): Promise<MatchResult[]> {_try {
    // Normalize job skills and generate embeddings via OpenAI
<<<<<<< HEAD
    const jobSkillsNormalized = await normalizeSkillsWithAI(job.skills),
    
    // Prepare job details for matching prompt
    const jobDetails = {
      title: job.title,
      description: job.description,
      category: job.category,
      skills: jobSkillsNormalized,
      budget: job.budget
    },
    
    // Use OpenAI to find best matches
    const bestMatches = await findBestMatches(jobDetails, talents),
    return bestMatches
  } catch (error) {
<<<<<<< HEAD
    console.error("Error in processJobMatching:", error),
    throw error
=======
    console.error(&quot;Error in processJobMatching:&quot;, error);
    throw error;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }
=======
    const _jobSkillsNormalized = await normalizeSkillsWithAI(job.skills);
    
    // Prepare job details for matching prompt
    const _jobDetails = {
      title: job.title, _description: job.description, _category: job.category, _skills: jobSkillsNormalized, _budget: job.budget};
    
    // Use OpenAI to find best matches
    const _bestMatches = await findBestMatches(jobDetails, talents);
    return bestMatches;
  } catch (error) {_throw error;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

/**
 * Stores match results in the database and creates notifications
 * @param jobId The ID of the job
 * @param matchedTalents Array of match results
 */
<<<<<<< HEAD
export async function storeMatchResults(jobId: string, matchedTalents: MatchResult[], jobTitle: string): Promise<void> {
  const matchInsertPromises = matchedTalents.map(async (match) => {
    const { error: matchError } = await supabase
      .from(&quot;job_talent_matches&quot;)
      .insert({
        job_id: jobId,
        talent_id: match.talentId,
        match_score: match.score,
        matched_skills: match.matchedSkills,
        reason: match.reason
      }),
    
    if (matchError) {
      console.error(`Error storing match for talent ${match.talentId}:`, matchError)
    } else {
      // Create notifications for each matched talent
      await supabase.rpc('create_notification', {
        _user_id: match.talentId,
        _title: &quot;New Job Match&quot;,
        _message: `A new job &quot;${jobTitle}&quot; matches your skills. Check it out!`,
        _type: &quot;job_match&quot;,
=======
export async function storeMatchResults(_jobId: string, _matchedTalents: MatchResult[], _jobTitle: string): Promise<void> {_const _matchInsertPromises = matchedTalents.map(_async (match) => {
    const { error: matchError} = await supabase
      .from("job_talent_matches")
      .insert({_job_id: jobId, _talent_id: match.talentId, _match_score: match.score, _matched_skills: match.matchedSkills, _reason: match.reason});
    
    if (matchError) {} else {_// Create notifications for each matched talent
      await supabase.rpc('create_notification', _{
        _user_id: match.talentId, _title: "New Job Match", _message: `A new job "${jobTitle}" matches your skills. Check it out!`,
        _type: "job_match",
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        _related_id: jobId
      })
    }
  }),
  
  await Promise.all(matchInsertPromises)
}

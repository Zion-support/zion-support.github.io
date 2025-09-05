

// Initialize the Supabase client
const _supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const _supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";
const _supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Main function to process job-talent matching
 * @param job The job data to find matches for
 * @param talents Array of talent profiles
 * @returns Array of matches with talent IDs, scores, and reasons
 */
export async function processJobMatching(_job: JobData, _talents: unknown[]): Promise<MatchResult[]> {_try {
    // Normalize job skills and generate embeddings via OpenAI
    const _jobSkillsNormalized = await normalizeSkillsWithAI(job.skills);
    
    // Prepare job details for matching prompt
    const _jobDetails = {
      title: job.title, _description: job.description, _category: job.category, _skills: jobSkillsNormalized, _budget: job.budget};
    
    // Use OpenAI to find best matches
    const _bestMatches = await findBestMatches(jobDetails, talents);
    return bestMatches;
  } catch (error) {_throw error;}
}

/**
 * Stores match results in the database and creates notifications
 * @param jobId The ID of the job
 * @param matchedTalents Array of match results
 */
export async function storeMatchResults(_jobId: string, _matchedTalents: MatchResult[], _jobTitle: string): Promise<void> {_const _matchInsertPromises = matchedTalents.map(_async (match) => {
    const { error: matchError} = await supabase
      .from("job_talent_matches")
      .insert({_job_id: jobId, _talent_id: match.talentId, _match_score: match.score, _matched_skills: match.matchedSkills, _reason: match.reason});
    
    if (matchError) {} else {_// Create notifications for each matched talent
      await supabase.rpc('create_notification', _{
        _user_id: match.talentId, _title: "New Job Match", _message: `A new job "${jobTitle}" matches your skills. Check it out!`,
        _type: "job_match",
        _related_id: jobId
      });
    }
  });
  
  await Promise.all(matchInsertPromises);
}

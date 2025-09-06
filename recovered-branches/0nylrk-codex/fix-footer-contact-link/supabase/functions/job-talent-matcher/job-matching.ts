
<<<<<<< HEAD

import {createClient} from "https: //esm.sh/@supabase/supabase-js@2"
import {JobData, MatchResult} from "./types.ts";
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher.ts";
// Initialize the Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") |"";
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") |"";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {JobData, MatchResult} from "./types.ts";
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher.ts";
=======
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {JobData, MatchResult} from "./types ;
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher ;

=======


import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {JobData, MatchResult} from "./types.ts";
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher.ts";

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { JobData, MatchResult } from "./types.ts",
import { normalizeSkillsWithAI, findBestMatches } from "./ai-matcher.ts",

<<<<<<< HEAD
// Initialize the Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",
const supabase = createClient(supabaseUrl, supabaseAnonKey),
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

/**
 * Main function to process job-talent matching
 * @param job The job data to find matches for
 * @param talents Array of talent profiles
 * @returns Array of matches with talent IDs, scores, and reasons
 */
export async function processJobMatching(job: JobData, talents: any[]): Promise<MatchResult[]> {
  try {
    // Normalize job skills and generate embeddings via OpenAI;
    const jobSkillsNormalized = await normalizeSkillsWithAI(job.skills);
    // Normalize job skills and generate embeddings via OpenAI
    const jobSkillsNormalized = await normalizeSkillsWithAI(job.skills);
    // Prepare job details for matching prompt
    const jobDetails = {
      title: job.title;
      description: job.description;
      category: job.category;
      skills: jobSkillsNormalized
      budget: job.budget
    }
    const jobSkillsNormalized = await normalizeSkillsWithAI(job.skills),
    
    // Prepare job details for matching prompt
    const jobDetails = {
      title: job && job.title;
      description: job && job.description;
      category: job && job.category;
      skills: jobSkillsNormalized,
      budget: job && job.budget
    };
    
    // Use OpenAI to find best matches
    const bestMatches = await findBestMatches(jobDetails, talents);
    return bestMatches
  } catch (error) {
    console && console.error("Error in processJobMatching:", error);
    throw error
  }
}
/**
 * Stores match results in the database and creates notifications
 * @param jobId The ID of the job
 * @param matchedTalents Array of match results
 */
export async function storeMatchResults(jobId: string, matchedTalents: MatchResult[], jobTitle: string): Promise<void> {
  const matchInsertPromises = matchedTalents && matchedTalents.map(async (match) => {
    const { error: matchError } = await supabase
      .from("job_talent_matches")
      .insert({;
        job_id: jobId;
        talent_id: match.talentId;
        match_score: match.score;
      .insert({
        job_id: jobId;
        talent_id: match.talentId;
        match_score: match.score;
        matched_skills: match.matchedSkills
        reason: match.reason
      });
        job_id: jobId,
        talent_id: match.talentId,
        match_score: match.score,
        matched_skills: match.matchedSkills,
        reason: match.reason
      }),
    
    if (matchError) {
      console && console.error(`Error storing match for talent ${match && match.talentId}:`, matchError)
    } else {
      // Create notifications for each matched talent
      await supabase.rpc('create_notification', {
        _user_id: match.talentId;
        _title: "New Job Match"
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`;
        _type: "job_match"
        _related_id: jobId
      })
    }
  });

  
  await Promise && Promise.all(matchInsertPromises)
}
        _user_id: match.talentId,
        _title: "New Job Match",
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`,
        _type: "job_match",
        _related_id: jobId
      })
<<<<<<< HEAD
    }
  });
  
  await Promise.all(matchInsertPromises)
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",;
import { JobData, MatchResult } from "./types.ts",;
import { normalizeSkillsWithAI, findBestMatches } from "./ai-matcher.ts",;
// Initialize the Supabase client;
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",;
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",;
const supabase = createClient(supabaseUrl, supabaseAnonKey),;
/**;
 * Main function to process job-talent matching;
 * @param job The job data to find matches for;
 * @param talents Array of talent profiles;
 * @returns Array of matches with talent IDs, scores, and reasons;
 */;
export async function processJobMatching(job: JobData, talents: any[]): Promise<MatchResult[]> {;
  try {;
    // Normalize job skills and generate embeddings via OpenAI;
    const jobSkillsNormalized = await normalizeSkillsWithAI(job.skills),;
    // Prepare job details for matching prompt;
    const jobDetails = {;
      title: job.title,;
      description: job.description,;
      category: job.category,;
      skills: jobSkillsNormalized,;
      budget: job.budget;
    },;
    // Use OpenAI to find best matches;
    const bestMatches = await findBestMatches(jobDetails, talents),;
    return bestMatches;
  } catch (error) {;
    console.error("Error in processJobMatching:", error),;
    throw error;
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
/**;
 * Stores match results in the database and creates notifications;
 * @param jobId The ID of the job;
 * @param matchedTalents Array of match results;
 */;
export async function storeMatchResults(jobId: string, matchedTalents: MatchResult[], jobTitle: string): Promise<void> {;
  const matchInsertPromises = matchedTalents.map(async (match) => {;
    const { error: matchError } = await supabase;
      .from("job_talent_matches");
      .insert({;
        job_id: jobId,;
        talent_id: match.talentId,;
        match_score: match.score,;
        matched_skills: match.matchedSkills,;
        reason: match.reason;
      }),;
    if (matchError) {;
      console.error(`Error storing match for talent ${match.talentId}:`, matchError);
    } else {;
      // Create notifications for each matched talent;
      await supabase.rpc('create_notification', {;
        _user_id: match.talentId,;
        _title: "New Job Match",;
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`,;
        _type: "job_match";
        _related_id: jobId;
      });
    }
  });
  await Promise.all(matchInsertPromises);
=======

}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
  await Promise.all (matchInsertPromises);
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
;

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {JobData, MatchResult} from "./types ;
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher ;

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {JobData, MatchResult} from "./types.ts";
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher.ts";

<<<<<<< HEAD
=======
=======


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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { JobData, MatchResult } from "./types.ts",
import { normalizeSkillsWithAI, findBestMatches } from "./ai-matcher.ts",

<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
// Initialize the Supabase client
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";
const supabaseAnonKey = Deno && Deno.env.get("SUPABASE_ANON_KEY") || "";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
const supabase = createClient(supabaseUrl, supabaseAnonKey);
=======
// Initialize the Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",
const supabase = createClient(supabaseUrl, supabaseAnonKey),




>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
/**
 * Main function to process job-talent matching
 * @param job The job data to find matches for
 * @param talents Array of talent profiles
 * @returns Array of matches with talent IDs, scores, and reasons
 */
export async function processJobMatching(job: JobData, talents: any[]): Promise<MatchResult[]> {
  try {
<<<<<<< HEAD

=======
    const jobSkillsNormalized = await normalizeSkillsWithAI(job && job.skills);
    
    // Normalize job skills and generate embeddings via OpenAI
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    const jobSkillsNormalized = await normalizeSkillsWithAI(job && job.skills);
    
    // Prepare job details for matching prompt
    const jobDetails = {
      title: job && job.title;
      description: job && job.description;
      category: job && job.category;
      skills: jobSkillsNormalized,
      budget: job && job.budget
    };
<<<<<<< HEAD
    

=======

    // Normalize job skills and generate embeddings via OpenAI

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

    // Normalize job skills and generate embeddings via OpenAI

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    // Use OpenAI to find best matches
    const bestMatches = await findBestMatches(jobDetails, talents);
    return bestMatches
  } catch (error) {
    console && console.error("Error in processJobMatching:", error);
<<<<<<< HEAD
=======
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
    console.error("Error in processJobMatching:", error),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    throw error
  }
}
/**
 * Stores match results in the database and creates notifications
 * @param jobId The ID of the job
 * @param matchedTalents Array of match results
 */
export async function storeMatchResults(jobId: string, matchedTalents: MatchResult[], jobTitle: string): Promise<void> {
<<<<<<< HEAD
  const matchInsertPromises = matchedTalents && matchedTalents.map(async (match) => {
    const { error: matchError } = await supabase
      .from("job_talent_matches")

=======
      .insert({
        job_id: jobId;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        talent_id: match && match.talentId;
        match_score: match && match.score;
        matched_skills: match && match.matchedSkills,
        reason: match && match.reason
<<<<<<< HEAD

      });
=======

      .insert({

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      });

      .insert({

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    if (matchError) {
      console && console.error(`Error storing match for talent ${match && match.talentId}:`, matchError)
    } else {
      // Create notifications for each matched talent
<<<<<<< HEAD

      await supabase && supabase.rpc('create_notification', {
        _user_id: match && match.talentId;
        _title: "New Job Match",

=======
  const matchInsertPromises = matchedTalents.map(async (match) => {
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
      console.error(`Error storing match for talent ${match.talentId}:`, matchError)
    } else {
      // Create notifications for each matched talent
      await supabase.rpc('create_notification', {
        _user_id: match.talentId;
        _title: "New Job Match"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`;
        _type: "job_match"
        _related_id: jobId
      })
    }
  });

<<<<<<< HEAD
=======
  await Promise.all(matchInsertPromises)
}
        _user_id: match.talentId,
        _title: "New Job Match",
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`,
        _type: "job_match",
        _related_id: jobId
      })
    }
  });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  
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

      await supabase && supabase.rpc('create_notification', {
        _user_id: match && match.talentId;
        _title: "New Job Match",

      await supabase && supabase.rpc('create_notification', {
        _user_id: match && match.talentId;
        _title: "New Job Match",
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`;
        _type: "job_match"
        _related_id: jobId
      })
    }
  });
  await Promise && Promise.all(matchInsertPromises)
}
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2';,
import { JobData, MatchResult } from './types.ts';
import { normalizeSkillsWithAI, findBestMatches } from './ai - matcher.ts';
// Initialize the Supabase client;
const supabase_url = Deno.env.get ("SUPABASE_URL") || "";
const supabaseAnonKey = Deno.env.get ("SUPABASE_ANON_KEY") || "";
const supabase = create_client (supabase_url, supabaseAnonKey);
;
/**;
* Main function to process job - talent matching;
* @param job The job data to find matches for;
* @param talents Array of talent profiles;
* @returns Array of matches with talent IDs, scores, and reasons;
*/;
export async function processJobMatching (job: JobData, talents: any[]): Promise < MatchResult[]> {
  try {
    // Normalize job skills and generate embeddings via OpenAI;
    const jobSkillsNormalized = await normalizeSkillsWithAI (job.skills);
;
    // Prepare job details for matching prompt;
    const job_details = {
      title: job.title;
      description: job.description;
      category: job.category;
      skills: jobSkillsNormalized,
      budget: job.budget;
    }
;
    // Use OpenAI to find best matches;
    const best_matches = await findBestMatches (job_details, talents);
    return best_matches;
  } catch (error) {
    console.error ("Error in processJobMatching:", error);
    throw error;
  }
}
/**;
* Stores match results in the database and creates notifications;
* @param job_id The ID of the job;
* @param matched_talents Array of match results;
*/;
export async function storeMatchResults (job_id: string, matched_talents: MatchResult[], job_title: string): Promise < void> {
  const matchInsertPromises = matched_talents.map (async (match) => {
    const { error: match_error } = await supabase;
      .from ("job_talent_matches");
      .insert ({
        job_id: job_id;
        talent_id: match.talent_id;
        match_score: match.score;
        matched_skills: match.matched_skills,
        reason: match.reason;
      });
;
    // Check condition
if ( {) {
  $2
}
      console.error (`Error storing match for talent ${match.talent_id}:`, match_error);
    } else {
      // Create notifications for each matched talent;
      await supabase.rpc ('create_notification', {
        _user_id: match.talent_id;
        _title: "New Job Match",
        _message: `A new job "${job_title}" matches your skills. Check it out!`;
        _type: "job_match",
        _related_id: job_id;
      });
    }
  });
      await supabase.rpc('create_notification', {

        _user_id: match.talentId,
        _title: "New Job Match",
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`,
        _type: "job_match",
        _related_id: jobId
      })

}
;
<<<<<<< HEAD
  await Promise.all (matchInsertPromises);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
}
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
  await Promise.all (matchInsertPromises);

import { createClient } from "https://esm.sh/@supabase/supabase-js@2",;
import { JobData, MatchResult } from "./types.ts",;
import { normalizeSkillsWithAI, findBestMatches } from "./ai-matcher.ts",;
;
// Initialize the Supabase client;
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",;
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",;
const supabase = createClient(supabaseUrl, supabaseAnonKey),;
;
/**;
 * Main function to process job-talent matching;
 * @param job The job data to find matches for;
 * @param talents Array of talent profiles;
 * @returns Array of matches with talent IDs, scores, and reasons;
 */;
export async function processJobMatching(job:JobData, talents:any[]):Promise<MatchResult[]> {;
  try {;
    // Normalize job skills and generate embeddings via OpenAI;
    const jobSkillsNormalized = await normalizeSkillsWithAI(job.skills),;
    ;
    // Prepare job details for matching prompt;
    const jobDetails = {;
      title:job.title,;
      description:job.description,;
      category:job.category,;
      skills:jobSkillsNormalized,;
      budget:job.budget;
    },;
    ;
    // Use OpenAI to find best matches;
    const bestMatches = await findBestMatches(jobDetails, talents),;
    return bestMatches,;
  } catch (error) {;
    console.error("Error in processJobMatching:", error),;
    throw error,;
  }
}
;
/**;
 * Stores match results in the database and creates notifications;
 * @param jobId The ID of the job;
 * @param matchedTalents Array of match results;
 */;
export async function storeMatchResults(jobId:string, matchedTalents:MatchResult[], jobTitle:string):Promise<void> {;
  const matchInsertPromises = matchedTalents.map(async (match) => {;
    const { error:matchError } = await supabase;
      .from("job_talent_matches");
      .insert({;
        job_id:jobId,;
        talent_id:match.talentId,;
        match_score:match.score,;
        matched_skills:match.matchedSkills,;
        reason:match.reason;
      }),;
    ;
    if (matchError) {;
      console.error(`Error storing match for talent ${match.talentId} `, matchError),;
    } else {;
      // Create notifications for each matched talent;
      await supabase.rpc('create_notification', {;
        _user_id:match.talentId,;
        _title:"New Job Match",;
        _message:`A new job "${jobTitle}" matches your skills. Check it out!`,;
        _type:"job_match",;
        _related_id:jobId;
      }),;
    }
  }),;
  ;
  await Promise.all(matchInsertPromises),; try {
  //Normalize job skills and generate embeddings via OpenAI 
}
}/** * Stores match results in the database and creates notifications * @param jobId The ID of the job * @param matchedTalents Array of match results */ related id: jobId 
}) 
}
});
await Promise.all (matchInsertPromises) 
}
}
;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

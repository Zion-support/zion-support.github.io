<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",";
import {JobData, MatchResult} from "./types ;"
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher ;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;"
import {JobData, MatchResult} from "./types.ts";"
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher.ts";

<<<<<<< HEAD
=======import {createClient} from "https: //esm.sh/@supabase/supabase-js@2"
import {JobData, MatchResult} from "./types.ts";
=======
"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2"";
import {JobData, MatchResult} from "./types.ts";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher.ts";
// Initialize the Supabase client"
const supabaseUrl = Deno.env.get("SUPABASE_URL") |"";"
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") |"";
<<<<<<< HEAD
const supabase = createClient(supabaseUrl, supabaseAnonKey);
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {JobData, MatchResult} from "./types.ts";
<<<<<<< HEAD
<<<<<<< HEAD
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher.ts";
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {JobData, MatchResult} from "./types ;
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher ;



import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {JobData, MatchResult} from "./types.ts";
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher.ts";

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { JobData, MatchResult } from "./types.ts",
=======
const supabase = createClient(supabaseUrl, supabaseAnonKey);"
import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;"
import {JobData, MatchResult} from "./types.ts";"
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher.ts";
"
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2","
import { JobData, MatchResult } from "./types.ts","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { normalizeSkillsWithAI, findBestMatches } from "./ai-matcher.ts",


;
const supabase = createClient(supabaseUrl, supabaseAnonKey);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Initialize the Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",
const supabase = createClient(supabaseUrl, supabaseAnonKey),
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
// Initialize the Supabase client
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";
const supabaseAnonKey = Deno && Deno.env.get("SUPABASE_ANON_KEY") || "";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
const supabase = createClient(supabaseUrl, supabaseAnonKey);
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { JobData, MatchResult } from "./types.ts",
import { normalizeSkillsWithAI, findBestMatches } from "./ai-matcher.ts",

// Initialize the Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",
const supabase = createClient(supabaseUrl, supabaseAnonKey),
=======


<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
/**
 * Main function to process job-talent matching;
 * @param job The job data to find matches for;
 * @param talents Array of talent profiles;
 * @returns Array of matches with talent IDs, scores, and reasons;
 */
<<<<<<< HEAD
export async function processJobMatching(job: JobData, talents: any[]): Promise<MatchResult[]> {
  try {
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
export async function processJobMatching(job: JobData, talents: any[]): Promise<MatchResult[]> {}
  try {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const jobSkillsNormalized = await normalizeSkillsWithAI(job && job.skills);
    
    // Prepare job details for matching prompt;
    const jobDetails = {}
      title: job && job.title;
      description: job && job.description;
      category: job && job.category;
      skills: jobSkillsNormalized,
      budget: job && job.budget;
    };



    // Normalize job skills and generate embeddings via OpenAI;
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    // Prepare job details for matching prompt
    const jobDetails = {
      title: job.title,
      description: job.description,
      category: job.category,
      skills: jobSkillsNormalized,
<<<<<<< HEAD
<<<<<<< HEAD
      budget: job.budget
    },

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      budget: job.budget
    },
    
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    // Use OpenAI to find best matches
=======
    // Use OpenAI to find best matches;
    const bestMatches = await findBestMatches(jobDetails, talents);
    return bestMatches;
  } catch (error) {"
    console && console.error("Error in processJobMatching:", error);

    // Use OpenAI to find best matches;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const bestMatches = await findBestMatches(jobDetails, talents),
    return bestMatches;
  } catch (error) {}
    throw error;
  }
=======
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher.ts";    // Use OpenAI to find best matches
    const bestMatches = await findBestMatches(jobDetails, talents);
    return bestMatches
  } catch (error) {
    console && console.error("Error in processJobMatching:", error);  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher.ts";    // Use OpenAI to find best matches
    const bestMatches = await findBestMatches(jobDetails, talents);
    return bestMatches
  } catch (error) {
    console && console.error("Error in processJobMatching:", error);  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
/**
 * Stores match results in the database and creates notifications;
 * @param jobId The ID of the job;
 * @param matchedTalents Array of match results;
 */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export async function storeMatchResults(jobId: string, matchedTalents: MatchResult[], jobTitle: string): Promise<void> {
<<<<<<< HEAD
<<<<<<< HEAD
  const matchInsertPromises = matchedTalents && matchedTalents.map(async (match) => {
    const { error: matchError } = await supabase
      .from("job_talent_matches")

<<<<<<< HEAD
=======
=======
      .insert({
        job_id: jobId;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export async function storeMatchResults(jobId: string, matchedTalents: MatchResult[], jobTitle: string): Promise<void> {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        talent_id: match && match.talentId;
        match_score: match && match.score;
        matched_skills: match && match.matchedSkills,
        reason: match && match.reason;
      });

<<<<<<< HEAD
      .insert({

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    if (matchError) {
=======
export async function storeMatchResults(jobId: string, matchedTalents: MatchResult[], jobTitle: string): Promise<void> {    if (matchError) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export async function storeMatchResults(jobId: string, matchedTalents: MatchResult[], jobTitle: string): Promise<void> {    if (matchError) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      console && console.error(`Error storing match for talent ${match && match.talentId}:`, matchError)
    } else {
      // Create notifications for each matched talent

      await supabase && supabase.rpc('create_notification', {
        _user_id: match && match.talentId;
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        matched_skills: match.matchedSkills,
        reason: match.reason
      }),

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    if (matchError) {
      console.error(`Error storing match for talent ${match.talentId}:`, matchError)
    } else {
      // Create notifications for each matched talent
      await supabase.rpc('create_notification', {
<<<<<<< HEAD

=======
        _user_id: match.talentId;
        _title: "New Job Match"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`;
=======
      .insert({}
    if (matchError) {}
      console && console.error(`Error storing match for talent ${match && match.talentId}:`, matchError)
    } else {}
      // Create notifications for each matched talent;
"`
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        _type: "job_match"
        _related_id: jobId;
      })
    }
  });

        _user_id: match.talentId,"
        _title: "New Job Match","`
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`,"
        _type: "job_match",
        _related_id: jobId;
      })
<<<<<<< HEAD
<<<<<<< HEAD
    }
  });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  
  await Promise.all(matchInsertPromises)
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",;
import { JobData, MatchResult } from "./types.ts",;
=======
"
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",;"
import { JobData, MatchResult } from "./types.ts",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { normalizeSkillsWithAI, findBestMatches } from "./ai-matcher.ts",;
// Initialize the Supabase client;"
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",;"
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
  } catch (error) {;"
    console.error("Error in processJobMatching:", error),;
    throw error;
  }
}
;
/**;
 * Stores match results in the database and creates notifications;
 * @param jobId The ID of the job;
 * @param matchedTalents Array of match results;
 */;
export async function storeMatchResults(jobId: string, matchedTalents: MatchResult[], jobTitle: string): Promise<void> {;
  const matchInsertPromises = matchedTalents.map(async (match) => {;
    const { error: matchError } = await supabase;"
      .from("job_talent_matches");
      .insert({;
        job_id: jobId,;
        talent_id: match.talentId,;
        match_score: match.score,;
        matched_skills: match.matchedSkills,;
        reason: match.reason;
      }),;
    if (matchError) {;`
      console.error(`Error storing match for talent ${match.talentId}:`, matchError);
    } else {;
      // Create notifications for each matched talent;
      await supabase.rpc('create_notification', {;
        _user_id: match.talentId,;"
        _title: "New Job Match",;"`
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`,;"
        _type: "job_match";
        _related_id: jobId;
      });
    }
  });


  await Promise.all(matchInsertPromises);
=======
        _title: "New Job Match",  
  await Promise.all(matchInsertPromises)  await Promise.all(matchInsertPromises);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        _title: "New Job Match",  
  await Promise.all(matchInsertPromises)  await Promise.all(matchInsertPromises);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

}
<<<<<<< HEAD
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2';,
import { JobData, MatchResult } from './types.ts';
=======
'
import { create_client } from 'https: //esm.sh/@supabase / supabase - js@2';,'
import { JobData, MatchResult } from './types.ts';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { normalizeSkillsWithAI, findBestMatches } from './ai - matcher.ts';
// Initialize the Supabase client;"
const supabase_url = Deno.env.get ("SUPABASE_URL") || "";"
const supabaseAnonKey = Deno.env.get ("SUPABASE_ANON_KEY") || "";
const supabase = create_client (supabase_url, supabaseAnonKey);
;
/**;
* Main function to process job - talent matching;
* @param job The job data to find matches for;
* @param talents Array of talent profiles;
* @returns Array of matches with talent IDs, scores, and reasons;
*/;
export async function processJobMatching (job: JobData, talents: any[]): Promise < MatchResult[]> {}
  try {};
    // Normalize job skills and generate embeddings via OpenAI;
    const jobSkillsNormalized = await normalizeSkillsWithAI (job.skills);
;
    // Prepare job details for matching prompt;
<<<<<<< HEAD
    const job_details = {
      title: job.title,
  description: job.description;
=======
    const job_details = {}
      title: job.title;
      description: job.description;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      category: job.category;
      skills: jobSkillsNormalized,
      budget: job.budget;
    }
;
    // Use OpenAI to find best matches;
    const best_matches = await findBestMatches (job_details, talents);
    return best_matches;
  } catch (error) {"
    console.error ("Error in processJobMatching:", error);
    throw error;
  }
}
/**;
* Stores match results in the database and creates notifications;
* @param job_id The ID of the job;
* @param matched_talents Array of match results;
*/;
export async function storeMatchResults (job_id: string, matched_talents: MatchResult[], job_title: string): Promise < void> {}
  const matchInsertPromises = matched_talents.map (async (match) => {};
    const { error: match_error } = await supabase;"
      .from ("job_talent_matches");
      .insert ({}
        job_id: job_id;
        talent_id: match.talent_id;
        match_score: match.score;
        matched_skills: match.matched_skills,
        reason: match.reason;
      });
;
    // Check condition;
if ( {) {}
  $2;
}`
      console.error (`Error storing match for talent ${match.talent_id}:`, match_error);
    } else {}
      // Create notifications for each matched talent;'
      await supabase.rpc ('create_notification', {}
        _user_id: match.talent_id;"
        _title: "New Job Match","`
        _message: `A new job "${job_title}" matches your skills. Check it out!`;"
        _type: "job_match",
        _related_id: job_id;
      });
    }
<<<<<<< HEAD
  });/**;
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
<<<<<<< HEAD
}
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
      title:job.title,,
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  await Promise.all (matchInsertPromises);
}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  });
;


  await Promise.all (matchInsertPromises);
}
;

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

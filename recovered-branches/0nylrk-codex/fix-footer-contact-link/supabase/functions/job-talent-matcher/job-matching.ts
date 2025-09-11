<<<<<<< HEAD
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {JobData, MatchResult} from "./types ;
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher ;



import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {JobData, MatchResult} from "./types.ts";
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher.ts";


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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {JobData, MatchResult} from "./types ;
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher ;

=======


import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {JobData, MatchResult} from "./types.ts";
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher.ts";

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { JobData, MatchResult } from "./types.ts",
import { normalizeSkillsWithAI, findBestMatches } from "./ai-matcher.ts",

<<<<<<< HEAD
<<<<<<< HEAD
// Initialize the Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",
const supabase = createClient(supabaseUrl, supabaseAnonKey),




=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
// Initialize the Supabase client
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";
const supabaseAnonKey = Deno && Deno.env.get("SUPABASE_ANON_KEY") || "";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
const supabase = createClient(supabaseUrl, supabaseAnonKey);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
/**
 * Main function to process job-talent matching
 * @param job The job data to find matches for
 * @param talents Array of talent profiles
 * @returns Array of matches with talent IDs, scores, and reasons
 */
export async function processJobMatching(job: JobData, talents: any[]): Promise<MatchResult[]> {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
    const jobSkillsNormalized = await normalizeSkillsWithAI(job && job.skills);
    
    // Normalize job skills and generate embeddings via OpenAI
    const jobSkillsNormalized = await normalizeSkillsWithAI(job && job.skills);
=======

    const jobSkillsNormalized = await normalizeSkillsWithAI(job && job.skills);
    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Prepare job details for matching prompt
    const jobDetails = {
      title: job && job.title;
      description: job && job.description;
      category: job && job.category;
      skills: jobSkillsNormalized,
      budget: job && job.budget
    };
<<<<<<< HEAD

    // Normalize job skills and generate embeddings via OpenAI

=======
    

=======

    // Normalize job skills and generate embeddings via OpenAI

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Use OpenAI to find best matches
    const bestMatches = await findBestMatches(jobDetails, talents);
    return bestMatches
  } catch (error) {
    console && console.error("Error in processJobMatching:", error);
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      .insert({
        job_id: jobId;
=======
  const matchInsertPromises = matchedTalents && matchedTalents.map(async (match) => {
    const { error: matchError } = await supabase
      .from("job_talent_matches")

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        talent_id: match && match.talentId;
        match_score: match && match.score;
        matched_skills: match && match.matchedSkills,
        reason: match && match.reason
<<<<<<< HEAD
      });

      .insert({

=======

      });
=======

      .insert({

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (matchError) {
      console && console.error(`Error storing match for talent ${match && match.talentId}:`, matchError)
    } else {
      // Create notifications for each matched talent
<<<<<<< HEAD
  const matchInsertPromises = matchedTalents.map(async (match) => {
    const { error: matchError } = await supabase
      .from("job_talent_matches")
=======
  const matchInsertPromises = matchedTalents && matchedTalents.map(async (match) => {
    const { error: matchError } = await supabase
      .from("job_talent_matches")
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      console.error(`Error storing match for talent ${match.talentId}:`, matchError)
=======
      console && console.error(`Error storing match for talent ${match && match.talentId}:`, matchError)
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } else {
      // Create notifications for each matched talent
      await supabase.rpc('create_notification', {
        _user_id: match.talentId;
        _title: "New Job Match"
<<<<<<< HEAD
=======

      await supabase && supabase.rpc('create_notification', {
        _user_id: match && match.talentId;
        _title: "New Job Match",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`;
        _type: "job_match"
        _related_id: jobId
      })
    }
  });

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  
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

=======
  
  await Promise && Promise.all(matchInsertPromises)
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        _user_id: match.talentId,
        _title: "New Job Match",
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`,
        _type: "job_match",
        _related_id: jobId
      })

}
<<<<<<< HEAD
<<<<<<< HEAD
;
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
  await Promise.all (matchInsertPromises);
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

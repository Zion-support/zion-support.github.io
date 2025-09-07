<<<<<<< HEAD
<<<<<<< HEAD
=======

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
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    const bestMatches = await findBestMatches(jobDetails, talents);
return bestMatches;
  } catch (error) {

>>>>>>> merged-prs-20250907-203621
}
=======
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",";
import {JobData, MatchResult} from "./types ;"
<<<<<<< HEAD
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher ;

=======
=======
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {JobData, MatchResult} from "./types ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {JobData, MatchResult} from "./types ;
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher ;

import {JobData, MatchResult} from "./types.ts";

import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher.ts";
// Initialize the Supabase client"
const supabaseUrl = Deno.env.get("SUPABASE_URL") |"";"
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") |"";

import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {JobData, MatchResult} from "./types ;
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher ;

import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {JobData, MatchResult} from "./types.ts";
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher.ts";

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { normalizeSkillsWithAI, findBestMatches } from "./ai-matcher.ts",

;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Initialize the Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",
const supabase = createClient(supabaseUrl, supabaseAnonKey),

<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { JobData, MatchResult } from "./types.ts",
import { normalizeSkillsWithAI, findBestMatches } from "./ai-matcher.ts",

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
/**
 * Main function to process job-talent matching;
 * @param job The job data to find matches for;
 * @param talents Array of talent profiles;
 * @returns Array of matches with talent IDs, scores, and reasons;
 */
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export async function storeMatchResults("jobId": string, "matchedTalents": MatchResult[], "jobTitle": string): Promise<void> {    if (matchError) {
      }
      console && console.error(`Error storing match for talent ${match && match.talentId}:`, matchError)`    } else {
      // Create notifications for each matched talent

=======
<<<<<<< HEAD

    const jobSkillsNormalized = await normalizeSkillsWithAI(job && job.skills);
    
    // Prepare job details for matching prompt;
    const jobDetails = {}

=======
export async function processJobMatching(job: JobData, talents: any[]): Promise<MatchResult[]> {
  try {
<<<<<<< HEAD
    const jobSkillsNormalized = await normalizeSkillsWithAI(job && job.skills);
    
    // Normalize job skills and generate embeddings via OpenAI
    const jobSkillsNormalized = await normalizeSkillsWithAI(job && job.skills);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

    const jobSkillsNormalized = await normalizeSkillsWithAI(job && job.skills);
    
<<<<<<< HEAD
    // Prepare job details for matching prompt;
    const jobDetails = {}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Prepare job details for matching prompt
    const jobDetails = {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      title: job && job.title;
      description: job && job.description;
      category: job && job.category;
      skills: jobSkillsNormalized,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    // Use OpenAI to find best matches

    const bestMatches = await findBestMatches(jobDetails, talents),
    return bestMatches;
  } catch (error) {}
    throw error;
<<<<<<< HEAD
=======
=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    throw error
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }

}
/**
 * Stores match results in the database and creates notifications;
 * @param jobId The ID of the job;
 * @param matchedTalents Array of match results;
 */
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
export async function storeMatchResults(jobId: string, matchedTalents: MatchResult[], jobTitle: string): Promise<void> {
<<<<<<< HEAD
      .insert({
        job_id: jobId;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const matchInsertPromises = matchedTalents && matchedTalents.map(async (match) => {
    const { error: matchError } = await supabase
      .from("job_talent_matches")

<<<<<<< HEAD
        talent_id: match && match.talentId;
        match_score: match && match.score;
        matched_skills: match && match.matchedSkills,
        reason: match && match.reason;
      });

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        talent_id: match && match.talentId;
        match_score: match && match.score;
        matched_skills: match && match.matchedSkills,
<<<<<<< HEAD
        reason: match && match.reason;
=======
        reason: match && match.reason
<<<<<<< HEAD
      });

      .insert({

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      });

<<<<<<< HEAD
=======
      .insert({

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    if (matchError) {

      console && console.error(`Error storing match for talent ${match && match.talentId}:`, matchError)
    } else {
      // Create notifications for each matched talent
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      await supabase && supabase.rpc('create_notification', {
        _user_id: match && match.talentId;

        matched_skills: match.matchedSkills,
        reason: match.reason
      }),

    if (matchError) {
      console.error(`Error storing match for talent ${match.talentId}:`, matchError)
    } else {
      // Create notifications for each matched talent
      await supabase.rpc('create_notification', {

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`;

        _type: "job_match"
        _related_id: jobId;

      })
    }
  });

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",;
import { JobData, MatchResult } from "./types.ts",;

import { normalizeSkillsWithAI, findBestMatches } from "./ai-matcher.ts",;
// Initialize the Supabase client;"
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",;"

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  await Promise.all(matchInsertPromises)
}
>>>>>>> merged-prs-20250907-203621
        _user_id: match.talentId,
        _title: "New Job Match",
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`,
        _type: "job_match",
<<<<<<< HEAD
        _related_id: jobId})
    }
  }),
  
  await Promise.all(matchInsertPromises)
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
  } catch (error) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    console.error("Error in processJobMatching:", error),;
    throw error;
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
;
/**;
 * Stores match results in the database and creates notifications;
 * @param jobId The ID of the job;
 * @param matchedTalents Array of match results;
 */;

      .from("job_talent_matches");
      .insert({;
        job_id: jobId,;
        talent_id: match.talentId,;
        match_score: match.score,;
        matched_skills: match.matchedSkills,;
        reason: match.reason;
      }),;

      console.error(`Error storing match for talent ${match.talentId}:`, matchError);
    } else {;
      // Create notifications for each matched talent;
      await supabase.rpc('create_notification', {;

        _type: "job_match";
        _related_id: jobId;
      });
    }
  });

}

<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { normalizeSkillsWithAI, findBestMatches } from './ai - matcher.ts';
// Initialize the Supabase client;"
const supabase_url = Deno.env.get ("SUPABASE_URL") || "";"
const supabaseAnonKey = Deno.env.get ("SUPABASE_ANON_KEY") || "";
>>>>>>> origin/chore/fix-lint-and-merge
const supabase = create_client (supabase_url, supabaseAnonKey);
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
    // Prepare job details for matching prompt;

      category: job.category;
      skills: jobSkillsNormalized,
      budget: job.budget;
    }
    // Use OpenAI to find best matches;
    const best_matches = await findBestMatches (job_details, talents);
    return best_matches;
<<<<<<< HEAD
  } catch (error) {

=======
  } catch (error) {"
    console.error ("Error in processJobMatching:", error);
>>>>>>> origin/chore/fix-lint-and-merge
    throw error;
  }
}
/**;
* Stores match results in the database and creates notifications;
* @param job_id The ID of the job;
* @param matched_talents Array of match results;
*/;
<<<<<<< HEAD
export async function storeMatchResults ("job_id": string, "matched_talents": MatchResult[], "job_title": string): Promise < void> {
  }
  const matchInsertPromises = matched_talents.map (async (match) => {

      .insert ({
        }
        "job_id": job_id;
        "talent_id": match.talent_id;
        "match_score": match.score;
        "matched_skills": match.matched_skills,
        "reason": match.reason;
      });

if ( {) {
  $2
}
      console.error (`Error storing match for talent ${match.talent_id}:`, match_error);`    } else {
      // Create notifications for each matched talent;

=======
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
>>>>>>> origin/chore/fix-lint-and-merge
      });
    }

 * Stores match results in the database and creates notifications;
 * @param jobId The ID of the job;
 * @param matchedTalents Array of match results;
 */;
<<<<<<< HEAD

=======
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
        _title: "New Job Match",
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`,;
        _type: "job_match";
        _related_id: jobId;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
      });
    }
  });
<<<<<<< HEAD
  await Promise.all(matchInsertPromises);
<<<<<<< HEAD
  await Promise.all (matchInsertPromises);

=======
      await supabase.rpc('create_notification', {

        _user_id: match.talentId,
        _title: "New Job Match",
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`,
        _type: "job_match",
        _related_id: jobId
      })

}
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      });
    }
  });
  await Promise.all(matchInsertPromises);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
/**;
 * Main function to process job-talent matching;
 * @param job The job data to find matches for;
 * @param talents Array of talent profiles;
 * @returns Array of matches with talent IDs, scores, and reasons;
 */;
<<<<<<< HEAD

}
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
/**;
 * Stores match results in the database and creates notifications;
 * @param jobId The ID of the job;
 * @param matchedTalents Array of match results;
 */;
<<<<<<< HEAD

=======

    const { error:matchError } = await supabase;
      .from(\"job_talent_matches\");
<<<<<<< HEAD
=======
=======
export async function storeMatchResults(jobId:string, matchedTalents:MatchResult[], jobTitle:string):Promise<void> {;
  const matchInsertPromises = matchedTalents.map(async (match) => {;
    const { error:matchError } = await supabase;
      .from("job_talent_matches");
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      .insert({;
        job_id:jobId,;
        talent_id:match.talentId,;
        match_score:match.score,;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        matched_skills:match.matchedSkills,;}
        reason:match.reason;}
      }),;
    ;
    if (matchError) {;}
<<<<<<< HEAD
=======
=======
        matched_skills:match.matchedSkills,;
        reason:match.reason;
      }),;
    ;
    if (matchError) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      console.error(`Error storing match for talent ${match.talentId} `, matchError),;
    } else {;
      // Create notifications for each matched talent;
      await supabase.rpc('create_notification', {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        _user_id:match.talentId,;}
        _title:\"New Job Match\",;}
        _message:`A new job \"${jobTitle}\" matches your skills. Check it out!`,;
        _type:\"job_match\",;
<<<<<<< HEAD
=======
=======
        _user_id:match.talentId,;
        _title:"New Job Match",;
        _message:`A new job "${jobTitle}" matches your skills. Check it out!`,;
        _type:"job_match",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        _related_id:jobId;
      }),;
    }
  }),;
  ;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  await Promise.all(matchInsertPromises),; try {}
  //Normalize job skills and generate embeddings via OpenAI }
>>>>>>> origin/chore/fix-lint-and-merge
}
}/** * Stores match results in the database and creates notifications * @param jobId The ID of the job * @param matchedTalents Array of match results */ related id: jobId;
<<<<<<< HEAD
=======
=======
  await Promise.all(matchInsertPromises),; try {
  //Normalize job skills and generate embeddings via OpenAI 
}
}/** * Stores match results in the database and creates notifications * @param jobId The ID of the job * @param matchedTalents Array of match results */ related id: jobId 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}) 
}
});
await Promise.all (matchInsertPromises) 
}
}
<<<<<<< HEAD
}
<<<<<<< HEAD

=======
;

  await Promise.all (matchInsertPromises);
/**;
 * @param jobId The ID of the job;
 * @param matchedTalents Array of match results;
export async function processJobMatching(job:JobData, talents:any[]):Promise<MatchResult[]> {;

export async function storeMatchResults(jobId:string, matchedTalents:MatchResult[], jobTitle:string):Promise<void> {;
</void>"`;
pr-12325
;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
;
>>>>>>> merged-prs-20250907-203621
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

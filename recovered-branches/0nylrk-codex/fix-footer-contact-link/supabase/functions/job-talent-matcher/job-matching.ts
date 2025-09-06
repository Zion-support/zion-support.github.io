<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/job-matching.ts

<<<<<<< HEAD

=======
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {JobData, MatchResult} from "./types ;
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher ;

=======


import {createClient} from "https: //esm.sh/@supabase/supabase-js@2",;
import {JobData, MatchResult} from "./types.ts";
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher.ts";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { createClient } from "https: //esm.sh/@supabase/supabase-js@2",
import { JobData, MatchResult } from "./types.ts",
import { normalizeSkillsWithAI, findBestMatches } from "./ai-matcher.ts",

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
// Initialize the Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "",
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "",
const supabase = createClient(supabaseUrl, supabaseAnonKey),

<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
<<<<<<< HEAD
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {JobData, MatchResult} from "./types ;
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/job-matching.ts
// Initialize the Supabase client
const supabaseUrl = Deno && Deno.env.get("SUPABASE_URL") || "";
const supabaseAnonKey = Deno && Deno.env.get("SUPABASE_ANON_KEY") || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/job-matching.ts

<<<<<<< HEAD
=======
    const jobSkillsNormalized = await normalizeSkillsWithAI(job && job.skills);
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    // Normalize job skills and generate embeddings via OpenAI
    const jobSkillsNormalized = await normalizeSkillsWithAI(job && job.skills);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/job-matching.ts
    // Prepare job details for matching prompt
    const jobDetails = {
      title: job && job.title;
      description: job && job.description;
      category: job && job.category;
      skills: jobSkillsNormalized,
<<<<<<< HEAD
      budget: job.budget
    },

=======
      budget: job && job.budget
    };
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/job-matching.ts
    

=======

    // Normalize job skills and generate embeddings via OpenAI

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/job-matching.ts
    // Use OpenAI to find best matches
    const bestMatches = await findBestMatches(jobDetails, talents);
    return bestMatches
  } catch (error) {
    console && console.error("Error in processJobMatching:", error);
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/job-matching.ts

<<<<<<< HEAD
        matched_skills: match.matchedSkills,
        reason: match.reason
      }),

=======
========
      .insert({
        job_id: jobId;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/job-matching.ts
        talent_id: match && match.talentId;
        match_score: match && match.score;
        matched_skills: match && match.matchedSkills,
        reason: match && match.reason
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/job-matching.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/job-matching.ts
      });
=======

      .insert({

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    if (matchError) {
      console && console.error(`Error storing match for talent ${match && match.talentId}:`, matchError)
    } else {
      // Create notifications for each matched talent
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/job-matching.ts
<<<<<<< HEAD
      await supabase.rpc('create_notification', {

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
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`;
        _type: "job_match"
        _related_id: jobId
      })
    }
  });

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
  
  await Promise.all(matchInsertPromises)
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======

      await supabase && supabase.rpc('create_notification', {
        _user_id: match && match.talentId;
        _title: "New Job Match",

========
      await supabase && supabase.rpc('create_notification', {
        _user_id: match && match.talentId;
        _title: "New Job Match",
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/job-matching.ts
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`;
        _type: "job_match"
        _related_id: jobId
      })
    }
  });
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/job-matching.ts

  
  await Promise && Promise.all(matchInsertPromises)
}

=======
========
  await Promise && Promise.all(matchInsertPromises)
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/job-matching.ts
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
=======
      await supabase.rpc('create_notification', {

        _user_id: match.talentId,
        _title: "New Job Match",
        _message: `A new job "${jobTitle}" matches your skills. Check it out!`,
        _type: "job_match",
        _related_id: jobId
      })

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
<<<<<<< HEAD
/**;
=======
}
;
/**;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

}
;

=======
  await Promise.all (matchInsertPromises);
=======

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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/job-matching.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/supabase/functions/job-talent-matcher/job-matching.ts
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

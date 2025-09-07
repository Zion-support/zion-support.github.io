
import {createClient} from "https: //esm && esm.sh/@supabase/supabase-js@2",
import {JobData, MatchResult} from "./types ;
import {normalizeSkillsWithAI, findBestMatches} from "./ai-matcher ;


}
;
/**;
 * Stores match results in the database and creates notifications;
 * @param jobId The ID of the job;
 * @param matchedTalents Array of match results;
 */;
export async function storeMatchResults(jobId:string, matchedTalents:MatchResult[], jobTitle:string):Promise<void /> {;}
  const matchInsertPromises = matchedTalents.map(async (match) => {;}
    const { error:matchError } = await supabase;
      .from(\"job_talent_matches\");
      .insert({;
        job_id:jobId,;
        talent_id:match.talentId,;
        match_score:match.score,;
        matched_skills:match.matchedSkills,;}
        reason:match.reason;}
      }),;
    ;
    if (matchError) {;}
      console.error(`Error storing match for talent ${match.talentId} `, matchError),;
    } else {;
      // Create notifications for each matched talent;
      await supabase.rpc('create_notification', {;
        _user_id:match.talentId,;}
        _title:\"New Job Match\",;}
        _message:`A new job \"${jobTitle}\" matches your skills. Check it out!`,;
        _type:\"job_match\",;
        _related_id:jobId;
      }),;
    }
  }),;
  ;
  await Promise.all(matchInsertPromises),; try {}
  //Normalize job skills and generate embeddings via OpenAI }
}
}/** * Stores match results in the database and creates notifications * @param jobId The ID of the job * @param matchedTalents Array of match results */ related id: jobId;
}) 
}
});
await Promise.all (matchInsertPromises) 
}
}
;
}
;
    const { error: match_error } = await supabase;"
      .from ("job_talent_matches");"
      .insert ({
        job_id: job_id;,
  talent_id: match.talent_id;
        match_score: match.score;,
  matched_skills: match.matched_skills,
        reason: match.reason;)
      });
    // Check condition;
if ( {) {
  $2;
      console.error (`Error storing match for talent ${match.talent_id}:`, match_error);
    } else {
  // TODO: Implement
      // Create notifications for each matched talent;"
      await supabase.rpc ('create_notification', {
        _user_id: match.talent_id;,
  _title: "New Job Match",""`;
        _message: `A new job "${job_title}" matches your skills. Check it out!`;""
        _type: "job_match","
        _related_id: job_id;)
  await Promise.all (matchInsertPromises);
/**;
 * @param jobId The ID of the job;
 * @param matchedTalents Array of match results;
export async function processJobMatching(job:JobData, talents:any[]):Promise<MatchResult[]> {;

export async function storeMatchResults(jobId:string, matchedTalents:MatchResult[], jobTitle:string):Promise<void> {;
</void>"`;
pr-12325
;

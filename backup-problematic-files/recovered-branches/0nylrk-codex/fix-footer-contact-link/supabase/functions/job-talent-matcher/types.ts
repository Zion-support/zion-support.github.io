
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export interface JobData {;
  id:string;
  title:string;
  description:string;
  skills:string[];
  category:string;
  budget:{;
    min:number;
    max:number;
  };
  deadline:string;
}
;
export interface TalentProfile {;
  id:string;
  full_name:string;
  professional_title:string;
  bio?:string;
  skills:string[];
  years_experience:number;
  hourly_rate?:number;
  availability_type?:string;
}
;
export interface TalentMatch {;
  talent_id:string;
  job_id:string;
  match_score:number;
  matched_skills:string[];
  created_at:string;
}
;
export interface MatchResult {;
  talentId:string;
  score:number;
  matchedSkills:string[];
  reason?:string;
} 
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

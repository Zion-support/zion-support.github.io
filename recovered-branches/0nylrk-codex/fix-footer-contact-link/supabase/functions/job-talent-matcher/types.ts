export interface JobData {
  id: string;
<<<<<<< HEAD
  title: string;
=======
  title: string,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  description: string;
  skills: string[];
  category: string;
  budget: {
<<<<<<< HEAD
    min: number;
    max: number;
  };
=======
    min: number,    max: number
};
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  deadline: string;
}

}
export interface TalentProfile {
  id: string;
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];
  years_experience: number;
<<<<<<< HEAD
  hourly_rate?: number;
  availability_type?: string;
}

  hourly_rate?: number,
  availability_type?: string;

}
export interface TalentMatch {
=======
  talent_id: string;
  job_id: string;
  match_score: number;}
export interface TalentMatch {

export interface TalentMatch {;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  talent_id: string;
  job_id: string;
  match_score: number;
  matched_skills: string[];
  created_at: string;
}

export interface MatchResult {
  talentId: string;
<<<<<<< HEAD
  score: number;
  matchedSkills: string[];
  reason?: string;
}
  matched_skills: string[]

  created_at: string
}
export interface MatchResult {

export interface MatchResult {;
  talentId: string;
  talent_id: string;
  job_id: string;
  match_score: number;
}
  score: number;
  id: string,;
  title: string,;
  description: string,;
  skills: string[],;
  category: string,;
  budget: {;
    min: number,;
    max: number;
  },;
  deadline: string;
}
;
export interface TalentProfile {;
  id: string,;
  full_name: string,;
  professional_title: string,;
  bio?: string,;
  skills: string[],;
  years_experience: number,;
  hourly_rate?: number,;
  availability_type?: string;
}
;
export interface TalentMatch {;
  talent_id: string,;
  job_id: string,;
  match_score: number,;
  matched_skills: string[],;
  created_at: string;
}
;
export interface MatchResult {;
  talentId: string,;
  score: number,;
  matchedSkills: string[];
export interface MatchResult {
  talent_id: string;
  score: number;

  matched_skills: string[],
  reason?: string;

}
;


export interface JobData {;

  reason?: string;
}
;
}
=======
  score: number;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

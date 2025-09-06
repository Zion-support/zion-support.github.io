
export interface JobData {

export interface JobData {
  id: string;
  title: string;
  description: string;
  skills: string[];
  category: string;
  budget: {

    min: number;

    min: number;
    max: number;
  };
  deadline: string;
}

}
export interface TalentProfile {}
  deadline: string

}
export interface TalentProfile {

export interface TalentProfile {;


export interface TalentProfile {
  id: string;
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];
  years_experience: number;

  hourly_rate?: number;
  availability_type?: string;
}



  talent_id: string;
  job_id: string;
  match_score: number;

  talent_id: string;
  job_id: string;
  match_score: number;
  matched_skills: string[];
  created_at: string;
}

export interface MatchResult {
  talentId: string;
  score: number;
  matchedSkills: string[];
  reason?: string;
}

  matched_skills: string[]


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


  reason?: string;
}
;
}

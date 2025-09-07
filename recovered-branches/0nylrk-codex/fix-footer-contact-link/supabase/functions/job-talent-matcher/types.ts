id: string;
  title: string,
  description: string;
  skills: string[];
  category: string;

    min: number,
    max: number;

  }
  deadline: string

    min: number;
    max: number;
  };

  deadline: string;
}

}

  id: string;
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];
  years_experience: number;

  talent_id: string;
  job_id: string;
  match_score: number;}

export interface TalentMatch {

  talent_id: string;
  job_id: string;
  match_score: number;

}

export interface MatchResult {};
  talentId: string;

  score: number;

}
  id: string;,
  title: string;
  description: string;,
  skills: string[];
  category: string;,
  budget: {
    min: number;,
  max: number;
  };
  deadline: string;

export interface TalentProfile {
  // TODO: Implement
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];,
  years_experience: number;
  hourly_rate?: number;
  availability_type?: string;

  hourly_rate?: number,

export interface TalentMatch {
  // TODO: Implement
  talent_id: string;,
  job_id: string;
  match_score: number;,
  matched_skills: string[];
  created_at: string;

export interface MatchResult {
  // TODO: Implement
  talentId: string;,
  score: number;
  matchedSkills: string[];
  reason?: string;
}

  matched_skills: string[]

  created_at: string;
}

  id: string,;
  title: string,;
  description: string,;
  skills: string[],;
  category: string,;
  budget: {;,
  min: number,;
  },;
;
export interface TalentProfile {;
  full_name: string,;
  professional_title: string,;
  bio?: string,;
  years_experience: number,;
  hourly_rate?: number,;
export interface TalentMatch {;
  talent_id: string,;
  job_id: string,;
  match_score: number,;
  matched_skills: string[],;
  talentId: string,;
  score: number,;
  matchedSkills: string[];

;

export interface JobData {;
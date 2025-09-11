
    min: number

    max: number
    min: number,
    max: number;
  }
  deadline: string;

}
export interface TalentProfile {
export interface TalentProfile {;
  id: string;
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];
  years_experience: number;

  availability_type?: string
}
export interface TalentMatch {

export interface TalentMatch {;
  availability_type?: string;

}
export interface TalentMatch {
  created_at: string
}
export interface MatchResult {

export interface MatchResult {;
  talentId: string;
  matched_skills: string[],
  created_at: string;

}
export interface MatchResult {
  talent_id: string;  score: number;

  matchedSkills: string[]

  reason?: string
}
}export interface MatchResult {
  talent_id: string;
  score: number;

  matched_skills: string[],
  reason?: string;

}

export interface JobData {;

  reason?: string;
}
;

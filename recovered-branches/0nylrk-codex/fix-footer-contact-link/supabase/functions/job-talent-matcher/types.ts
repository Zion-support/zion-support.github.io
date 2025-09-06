
<<<<<<< HEAD
=======
export interface JobData {
export interface JobData {;
  id: string;
  title: string;
  description: string;
  skills: string[];
  category: string;
  budget: {

    min: number

    max: number
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    min: number,
    max: number;
  }
  deadline: string;

}
export interface TalentProfile {
<<<<<<< HEAD
=======
  }
  deadline: string
}
export interface TalentProfile {

export interface TalentProfile {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  id: string;
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];
  years_experience: number;

<<<<<<< HEAD
  hourly_rate?: number,
  availability_type?: string;

}
export interface TalentMatch {
=======
export interface TalentMatch {
  hourly_rate?: number

  availability_type?: string
}
export interface TalentMatch {

export interface TalentMatch {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  talent_id: string;
  job_id: string;
  match_score: number;

<<<<<<< HEAD
  matched_skills: string[],
  created_at: string;

}
=======
  matched_skills: string[]

  created_at: string
}
export interface MatchResult {

export interface MatchResult {;
  talentId: string;
  score: number;

  matchedSkills: string[]

  reason?: string
}
export interface JobData {;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export interface MatchResult {
  talent_id: string;
  score: number;

  matched_skills: string[],
  reason?: string;

}


export interface JobData {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  reason?: string;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

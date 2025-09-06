
<<<<<<< HEAD
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
  }
  deadline: string
}
<<<<<<< HEAD
export interface TalentProfile {

export interface TalentProfile {;
=======
    min: number,
    max: number;
  }
  deadline: string;

}
export interface TalentProfile {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  id: string;
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];
  years_experience: number;

  hourly_rate?: number,
  availability_type?: string;

}
<<<<<<< HEAD
<<<<<<< HEAD
export interface TalentMatch {

export interface TalentMatch {;
=======
export interface TalentMatch {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  talent_id: string;
  job_id: string;
  match_score: number;

  matched_skills: string[],
  created_at: string;

}
<<<<<<< HEAD
<<<<<<< HEAD
export interface MatchResult {

export interface MatchResult {;
  talentId: string;
=======
export interface MatchResult {
  talent_id: string;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  score: number;

  matchedSkills: string[]

  reason?: string
}
<<<<<<< HEAD
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
  reason?: string;

}
;
=======
=======


export interface JobData {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

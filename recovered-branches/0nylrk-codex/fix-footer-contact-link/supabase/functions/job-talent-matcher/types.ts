
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    min: number,
    max: number;
  }
  deadline: string;

}
export interface TalentProfile {
<<<<<<< HEAD
  }
  deadline: string
}
export interface TalentProfile {

export interface TalentProfile {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: string;
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];
  years_experience: number;

<<<<<<< HEAD
export interface TalentMatch {
  hourly_rate?: number

  availability_type?: string
}
export interface TalentMatch {

export interface TalentMatch {;
=======
  hourly_rate?: number,
  availability_type?: string;

}
export interface TalentMatch {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  talent_id: string;
  job_id: string;
  match_score: number;

<<<<<<< HEAD
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
=======
  matched_skills: string[],
  created_at: string;

}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export interface MatchResult {
  talent_id: string;
  score: number;

  matched_skills: string[],
  reason?: string;

}


export interface JobData {;

<<<<<<< HEAD
  reason?: string;
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

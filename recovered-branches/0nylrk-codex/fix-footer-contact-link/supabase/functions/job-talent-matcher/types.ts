
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    min: number,
    max: number;
  }
  deadline: string;

}
export interface TalentProfile {
<<<<<<< HEAD
<<<<<<< HEAD
  }
  deadline: string
}
export interface TalentProfile {

export interface TalentProfile {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  id: string;
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];
  years_experience: number;

<<<<<<< HEAD
<<<<<<< HEAD
export interface TalentMatch {
  hourly_rate?: number

  availability_type?: string
}
export interface TalentMatch {

export interface TalentMatch {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  hourly_rate?: number,
  availability_type?: string;

}
export interface TalentMatch {
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  talent_id: string;
  job_id: string;
  match_score: number;

<<<<<<< HEAD
<<<<<<< HEAD
  matched_skills: string[]

  created_at: string
}
export interface MatchResult {

export interface MatchResult {;
  talentId: string;
=======
  matched_skills: string[],
  created_at: string;

}
export interface MatchResult {
  talent_id: string;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


export interface JobData {;

<<<<<<< HEAD
<<<<<<< HEAD
  reason?: string;
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

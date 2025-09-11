
    min: number

    max: number
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    min: number,
    max: number;
  }
  deadline: string;

}
export interface TalentProfile {
export interface TalentProfile {;
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======  hourly_rate?: number,
  availability_type?: string;

}
export interface TalentMatch {
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
=======
=======

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

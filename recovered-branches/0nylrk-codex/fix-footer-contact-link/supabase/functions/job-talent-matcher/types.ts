
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export interface JobData {
=======
export interface JobData {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======

export interface TalentProfile {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    min: number,
    max: number;
  }
  deadline: string;

}
export interface TalentProfile {
>>>>>>> main
  id: string;
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];
  years_experience: number;

<<<<<<< HEAD
  hourly_rate?: number

  availability_type?: string
}
<<<<<<< HEAD
export interface TalentMatch {
=======

export interface TalentMatch {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  hourly_rate?: number,
  availability_type?: string;

}
export interface TalentMatch {
>>>>>>> main
  talent_id: string;
  job_id: string;
  match_score: number;

<<<<<<< HEAD
  matched_skills: string[]

  created_at: string
}
<<<<<<< HEAD
export interface MatchResult {
=======

export interface MatchResult {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  talentId: string;
  score: number;

  matchedSkills: string[]

  reason?: string
}
=======
<<<<<<< HEAD
export interface JobData {;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  matched_skills: string[],
  created_at: string;

}
export interface MatchResult {
  talent_id: string;
  score: number;

  matched_skills: string[],
  reason?: string;

}
=======


export interface JobData {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main

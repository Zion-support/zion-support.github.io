
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export interface JobData {
export interface JobData {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: string;
  title: string;
  description: string;
  skills: string[];
  category: string;
  budget: {

    min: number

    max: number
<<<<<<< HEAD
=======
    min: number,
    max: number;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
  deadline: string;

}
<<<<<<< HEAD

=======
export interface TalentProfile {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }
  deadline: string
}
export interface TalentProfile {

export interface TalentProfile {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

=======
export interface TalentMatch {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  hourly_rate?: number

  availability_type?: string
}
export interface TalentMatch {

export interface TalentMatch {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  talent_id: string;
  job_id: string;
  match_score: number;

<<<<<<< HEAD
  matched_skills: string[],
  created_at: string;

}
<<<<<<< HEAD

=======
  matched_skills: string[]

  created_at: string
}
export interface MatchResult {

export interface MatchResult {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  talentId: string;
  score: number;

  matchedSkills: string[]

  reason?: string
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
export interface JobData {;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
export interface JobData {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
export interface MatchResult {
  talent_id: string;
  score: number;

  matched_skills: string[],
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  reason?: string;

}
<<<<<<< HEAD
;

=======
=======


export interface JobData {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  reason?: string;
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

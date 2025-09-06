
<<<<<<< HEAD

  id: string;
  title: string;
  description: string;
  skills: string[];
  category: string;
  budget: {

    min: number

    max: number
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

=======
export interface TalentMatch {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  talent_id: string;
  job_id: string;
  match_score: number;

  matched_skills: string[],
  created_at: string;

}
<<<<<<< HEAD

  talentId: string;
  score: number;

  matchedSkills: string[]

  reason?: string
}

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

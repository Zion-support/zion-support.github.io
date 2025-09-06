
<<<<<<< HEAD


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

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    min: number,
    max: number;
  }
  deadline: string;

}
export interface TalentProfile {
<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
export interface TalentMatch {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
export interface MatchResult {
  talent_id: string;
  score: number;

  matched_skills: string[],
  reason?: string;

}
=======


export interface JobData {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

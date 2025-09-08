export interface JobData {
  id: string;
  title: string;
  description: string;
  skills: string[];
  category: string;
  budget: {
    min: number;
    max: number;
  };
  deadline: string;
}

}
export interface TalentProfile {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
  deadline: string
}
export interface TalentProfile {

export interface TalentProfile {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  id: string;
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];
  years_experience: number;
  hourly_rate?: number;
  availability_type?: string;
}



=======
    min: number

  availability_type?: string
}
export interface TalentMatch {

export interface TalentMatch {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  talent_id: string;
  job_id: string;
  match_score: number;
  matched_skills: string[];
  created_at: string;
}

export interface MatchResult {
  talentId: string;
  score: number;
  matchedSkills: string[];
  reason?: string;
}
=======
  matched_skills: string[]

  created_at: string
}
export interface MatchResult {

export interface MatchResult {;
  talentId: string;
=======
  talent_id: string;
  job_id: string;
  match_score: number;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  score: number;
  id: string,;
  title: string,;
  description: string,;
  skills: string[],;
  category: string,;
  budget: {;
    min: number,;
    max: number;

  }
  deadline: string

    min: number;
    max: number;
  };

  deadline: string;
}

}

  hourly_rate?: number,
  availability_type?: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba

export interface TalentMatch {


<<<<<<< HEAD
=======
export interface TalentMatch {
>>>>>>> origin/cursor/delete-old-data-records-6bba

  talent_id: string;
  job_id: string;
  match_score: number;


<<<<<<< HEAD

  score: number;

}


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

export interface TalentProfile {
  // TODO: Implement
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];,
  years_experience: number;
  hourly_rate?: number;
  availability_type?: string;

  hourly_rate?: number,


<<<<<<< HEAD



=======
export interface JobData {;
>>>>>>> origin/cursor/delete-old-data-records-6bba

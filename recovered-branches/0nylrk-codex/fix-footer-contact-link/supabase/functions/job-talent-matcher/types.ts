<<<<<<< HEAD
=======
export interface JobData {
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  id: string;
  title: string;
  description: string;
  skills: string[];
  category: string;
  budget: {
<<<<<<< HEAD
    min: number,
=======
    min: number;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
  talent_id: string;
  job_id: string;
  match_score: number;
=======
  hourly_rate?: number;
  availability_type?: string;
}

<<<<<<< HEAD
  hourly_rate?: number,
  availability_type?: string;

}
export interface TalentMatch {
=======
export interface TalentMatch {
  hourly_rate?: number

  availability_type?: string
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
=======
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export interface MatchResult {
  talent_id: string;
  score: number;

  matched_skills: string[],
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  reason?: string;

}
;


export interface JobData {;

<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  reason?: string;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

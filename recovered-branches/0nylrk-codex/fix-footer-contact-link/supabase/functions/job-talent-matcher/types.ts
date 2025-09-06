<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
export interface JobData {
export interface JobData {;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface JobData {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
export interface JobData {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  id: string;
  title: string,
  description: string;
  skills: string[];
  category: string;
  budget: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    min: number

    max: number
<<<<<<< HEAD
=======
  }
  deadline: string
}
<<<<<<< HEAD
export interface TalentProfile {

export interface TalentProfile {;
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    min: number,
    max: number;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
  deadline: string
=======
    min: number;
    max: number;
  };
=======
    min: number,    max: number
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    min: number,    max: number
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  deadline: string;
}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface TalentProfile {
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  id: string;
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];
  years_experience: number;
<<<<<<< HEAD
<<<<<<< HEAD
  hourly_rate?: number;
  availability_type?: string;
}

<<<<<<< HEAD
  hourly_rate?: number,
  availability_type?: string;

}
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface TalentMatch {
=======
export interface TalentMatch {
  hourly_rate?: number

  availability_type?: string
}
export interface TalentMatch {

export interface TalentMatch {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  talent_id: string;
  job_id: string;
  match_score: number;}
export interface TalentMatch {

export interface TalentMatch {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  talent_id: string;
  job_id: string;
  match_score: number;}
export interface TalentMatch {

export interface TalentMatch {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  talent_id: string;
  job_id: string;
  match_score: number;
  matched_skills: string[];
  created_at: string;
}

export interface MatchResult {
  talentId: string;
<<<<<<< HEAD
<<<<<<< HEAD
  score: number;
  matchedSkills: string[];
  reason?: string;
}
<<<<<<< HEAD
=======
=======
  matched_skills: string[]

  created_at: string
}
export interface MatchResult {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  talentId: string;
<<<<<<< HEAD
  score: number;

  matchedSkills: string[]
  score: number;

  matchedSkills: string[]

  reason?: string
}
export interface JobData {;
=======
=======
  talent_id: string;
  job_id: string;
  match_score: number;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  score: number;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  reason?: string
}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
;


export interface JobData {;

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  score: number;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  score: number;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

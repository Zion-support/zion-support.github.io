<<<<<<< HEAD
=======
<<<<<<< HEAD
export interface JobData {
  id: string,
  title: string,
  description: string,
  skills: string[],
  category: string,
  budget: {
    min: number,
    max: number},
  deadline: string}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
id: string;
  title: string,
  description: string;
  skills: string[];
  category: string;

<<<<<<< HEAD
=======
<<<<<<< HEAD
export interface JobData {
export interface JobData {;
  id: string;
  title: string;
  description: string;
  skills: string[];
  category: string;
  budget: {
>>>>>>> merged-prs-20250907-203621

    min: number

    max: number
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    min: number,
    max: number;

  }
  deadline: string

    min: number;
    max: number;
  };

  deadline: string;
}

}
<<<<<<< HEAD

  id: string;
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];
  years_experience: number;

  talent_id: string;
  job_id: string;
  match_score: number;}

export interface TalentMatch {

  talent_id: string;
  job_id: string;
  match_score: number;

}

export interface MatchResult {};
  talentId: string;

  score: number;

}
  id: string;,
  title: string;
  description: string;,
  skills: string[];
  category: string;,
  budget: {
    min: number;,
  max: number;
  };
  deadline: string;

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

export interface TalentMatch {
  // TODO: Implement
  talent_id: string;,
  job_id: string;
  match_score: number;,
  matched_skills: string[];
  created_at: string;

export interface MatchResult {
  // TODO: Implement
  talentId: string;,
  score: number;
  matchedSkills: string[];
  reason?: string;
}
=======
<<<<<<< HEAD

=======
export interface TalentProfile {
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  }
  deadline: string
}
export interface TalentProfile {
<<<<<<< HEAD
  id: string,
  full_name: string,
  professional_title: string,
  bio?: string,
  skills: string[],
  years_experience: number,
  hourly_rate?: number,
  availability_type?: string
}

=======

export interface TalentProfile {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id: string;
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];
  years_experience: number;

<<<<<<< HEAD
  talent_id: string;
  job_id: string;
  match_score: number;}
=======
<<<<<<< HEAD
export interface TalentMatch {
>>>>>>> merged-prs-20250907-203621
  hourly_rate?: number

  availability_type?: string
}
export interface TalentMatch {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export interface TalentMatch {;
=======
  hourly_rate?: number,
  availability_type?: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export interface TalentMatch {
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  talent_id: string;
  job_id: string;
  match_score: number;

<<<<<<< HEAD
}

export interface MatchResult {};
  talentId: string;

=======
<<<<<<< HEAD
  matched_skills: string[]

<<<<<<< HEAD
  created_at: string;
=======
  created_at: string
}
export interface MatchResult {
<<<<<<< HEAD
  talentId: string,
  score: number,
  matchedSkills: string[],
  reason?: string
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

  id: string,;
  title: string,;
  description: string,;
  skills: string[],;
  category: string,;
  budget: {;,
  min: number,;
  },;
;
<<<<<<< HEAD
=======
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  score: number;

}
<<<<<<< HEAD
  id: string;,
  title: string;
  description: string;,
  skills: string[];
  category: string;,
  budget: {
    min: number;,
  max: number;
  };
  deadline: string;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
export interface TalentMatch {
  // TODO: Implement
  talent_id: string;,
  job_id: string;
  match_score: number;,
  matched_skills: string[];
  created_at: string;

export interface MatchResult {
  // TODO: Implement
  talentId: string;,
  score: number;
  matchedSkills: string[];
  reason?: string;
}

  matched_skills: string[]

  created_at: string;
}

  id: string,;
  title: string,;
  description: string,;
  skills: string[],;
  category: string,;
  budget: {;,
  min: number,;
  },;
;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export interface TalentProfile {;
  full_name: string,;
  professional_title: string,;
  bio?: string,;
  years_experience: number,;
  hourly_rate?: number,;
export interface TalentMatch {;
  talent_id: string,;
  job_id: string,;
  match_score: number,;
  matched_skills: string[],;
  talentId: string,;
  score: number,;
  matchedSkills: string[];

;

<<<<<<< HEAD
export interface JobData {;
=======
export interface JobData {;
=======
<<<<<<< HEAD
  reason?: string;
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

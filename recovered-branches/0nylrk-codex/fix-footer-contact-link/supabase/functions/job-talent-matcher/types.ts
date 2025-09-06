
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export interface JobData {
=======
export interface JobData {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export interface JobData {
export interface JobData {;
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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

export interface TalentProfile {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
    min: number,
    max: number;
  }
  deadline: string;

}
export interface TalentProfile {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
export interface TalentMatch {

export interface TalentMatch {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
export interface TalentMatch {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  talent_id: string;
  job_id: string;
  match_score: number;

  matched_skills: string[],
  created_at: string;

}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
export interface MatchResult {

export interface MatchResult {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  talentId: string;
=======
export interface MatchResult {
  talent_id: string;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  score: number;

  matchedSkills: string[]

  reason?: string
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
export interface JobData {;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
<<<<<<< HEAD
export interface JobData {;
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
=======


export interface JobData {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1

<<<<<<< HEAD
export type CandidateStatus =;
  | "applied";
  | "shortlisted";
  | "interview";
  | "offer";
  | "hired";
  | "rejected",;
;
export interface TalentProfile {;
  id:string,;
  name:string,;
  title?:string,;
  photoUrl?:string;
=======
export type CandidateStatus =
  | "applied"
  | "shortlisted"
  | "interview"
  | "offer"
  | "hired"
  | "rejected",
export interface TalentProfile {
  id: string,
  name: string,
  title?: string,
  photoUrl?: string
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export interface JobApplication {;
  id:string,;
  jobId:string,;
  talentId:string,;
  status:CandidateStatus,;
  score?:number | null,;
  resumeUrl?:string | null,;
  notes?:string | null,;
  createdAt?:string,;
  updatedAt?:string,;
  lastActivityAt?:string | null,;
  talent?:TalentProfile;
}
<<<<<<< HEAD
;
export interface ApplicationFilters {;
  status?:CandidateStatus | "all",;
  minScore?:number,;
  fromDate?:Date | null,;
  toDate?:Date | null,;
}
=======

export interface ApplicationFilters {
  status?: CandidateStatus | "all",
  minScore?: number,
  fromDate?: Date | null,
  toDate?: Date | null}
export interface TalentProfile {_id: string;
  name: string;
  title?: string;
  photoUrl?: string;}

export interface JobApplication {_id: string;
  jobId: string;
  talentId: string;
  status: CandidateStatus;
  score?: number | null;
  resumeUrl?: string | null;
  notes?: string | null;
  createdAt?: string;
  updatedAt?: string;
  lastActivityAt?: string | null;
  talent?: TalentProfile;}

export interface ApplicationFilters {_status?: CandidateStatus | "all";
  minScore?: number;
  fromDate?: Date | null;
  toDate?: Date | null;}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d

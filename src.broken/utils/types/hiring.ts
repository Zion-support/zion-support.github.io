<<<<<<< HEAD
export type CandidateStatus =
<<<<<<< HEAD
  | "applied"
  | "shortlisted"
  | "interview"
  | "offer"
  | "hired"
  | "rejected",
=======
  | &quot;applied&quot;
  | &quot;shortlisted&quot;
  | &quot;interview&quot;
  | &quot;offer&quot;
  | &quot;hired&quot;
  | &quot;rejected&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export interface TalentProfile {
  id: string,
  name: string,
  title?: string,
  photoUrl?: string
=======
export type CandidateStatus =;
  | "applied";
  | "shortlisted";
  | "interview";
  | "offer";
  | "hired";
  | "rejected",;
export interface TalentProfile {;
  id: string,;
  name: string,;
  title?: string,;
  photoUrl?: string;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;
export interface JobApplication {;
  id: string,;
  jobId: string,;
  talentId: string,;
  status: CandidateStatus,;
  score?: number | null,;
  resumeUrl?: string | null,;
  notes?: string | null,;
  createdAt?: string,;
  updatedAt?: string,;
  lastActivityAt?: string | null,;
  talent?: TalentProfile;
}
<<<<<<< HEAD

export interface ApplicationFilters {
<<<<<<< HEAD
  status?: CandidateStatus | "all",
  minScore?: number,
  fromDate?: Date | null,
  toDate?: Date | null
=======
  status?: CandidateStatus | &quot;all&quot;;
  minScore?: number;
  fromDate?: Date | null;
  toDate?: Date | null;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
;
export interface ApplicationFilters {;
  status?: CandidateStatus | "all",;
  minScore?: number,;
  fromDate?: Date | null;
  toDate?: Date | null;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
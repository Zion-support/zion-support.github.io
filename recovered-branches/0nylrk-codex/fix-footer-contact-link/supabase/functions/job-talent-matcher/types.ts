
export interface JobData {
  id: string;
  title: string;
  description: string;
  skills: string[];
  category: string;
  budget: {
<<<<<<< HEAD
    min: number;
=======
    min: number
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    max: number
  }
  deadline: string
}
export interface TalentProfile {
  id: string;
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];
  years_experience: number;
<<<<<<< HEAD
  hourly_rate?: number;
=======
  hourly_rate?: number
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  availability_type?: string
}
export interface TalentMatch {
  talent_id: string;
  job_id: string;
  match_score: number;
<<<<<<< HEAD
  matched_skills: string[];
=======
  matched_skills: string[]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  created_at: string
}
export interface MatchResult {
  talentId: string;
  score: number;
<<<<<<< HEAD
  matchedSkills: string[];
=======
  matchedSkills: string[]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  reason?: string
}
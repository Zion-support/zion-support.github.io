  id: string;
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];
  years_experience: number;

  talent_id: string;
  job_id: string;
  match_score: number;

export interface MatchResult {
  talent_id: string;
  score: number;


export interface JobData {
  id: string;
  title: string;
  description: string;
  skills: string[];
  category: string;
  budget: {

    min: any
  }
  deadline: any
export interface TalentProfile {
  id: string;
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];
  years_experience: number;

  hourly_rate?: any
export interface TalentMatch {
  talent_id: string;
  job_id: string;
  match_score: number;

  matched_skills: string[]

  created_at: any
export interface MatchResult {
  talent_id: string;
  score: number;

  matchedSkills: string[]

  reason?: any
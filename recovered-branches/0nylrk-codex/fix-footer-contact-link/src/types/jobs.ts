export type JobStatus = "new" | "in_progress" | "filled" | "closed";"
export type JobCategory ="
  | "development"""
  | "design"""
  | "marketing"""
  | "content"""
  | "data"""
  | "business"""
  | "other";"
export interface JobBudget {;

  min: number;,
  max: number;
  currency: string;
}


export interface Job {;

export interface Job {
  // TODO: Implement
  // TODO: Implement
  id: string;,
  client_id: string;
  title: string;,
  description: string;
  category: JobCategory;,
  skills: string[];
  budget: JobBudget;,
  deadline: string;
  status: JobStatus;,
  created_at: string;
  updated_at: string;


export interface JobFormData {;

  created_at: string;,
export interface JobFormData {
  // TODO: Implement
  // TODO: Implement
  skills: string;
  budgetMin: number;,
  budgetMax: number;
  deadline: Date;

  budget_min: number;,
  budget_max: number,
// Add JobMatch interface to be shared across components;

export interface JobMatch {
  // TODO: Implement
// Add JobMatch interface to be shared across components;
export interface JobMatch {;
  job_id: string;
  talent_id: string;,
  match_score: number;
  matched_skills: string[];"
  status?: "new" | "viewed" | "applied" | "declined";"
  viewed_at?: string;
  job?: Job;
  talent_profile?: {
    id?: string;
    user_id: string;,
  full_name: string;
    professional_title: string;
    profile_picture_url?: string;
    hourly_rate?: number;
    bio: string;,
  years_experience: number;
    key_projects: any[];,
    location?: string;
    category?: string;
    company_name?: string;
  };



export interface ResumeAttachment {;


export interface ResumeAttachment {
  // TODO: Implement
  title: string;"
  type: "ai_resume" | "custom_upload";"
  file_url?: string;
  resume_id?: string;
  summary?: string;
  skills?: string[];

export type ApplicationStatus ="
  | "new"""
  | "viewed"""
  | "shortlisted"""
  | "interview"""
  | "hired"""
  | "rejected";"
export interface JobApplication {
  // TODO: Implement
;

  // TODO: Implement
  // TODO: Implement
export interface JobApplication {;

  skills?: string[]
}"
export type ApplicationStatus = 'new' | 'viewed' | 'shortlisted' | 'interview' | 'hired' | 'rejected';
  // TODO: Implement
  // TODO: Implement
  talent_id: string;
  status: ApplicationStatus;
  cover_letter?: string;
  is_shortlisted: boolean;,
  updated_at?: string;
    full_name: string;,
  resume?: ResumeAttachment;
  // New fields for resume scoring;
  skills: string[]
  // New fields for resume scoring;
  // New fields for resume scoring;
  match_score?: number;
  match_summary?: string;
  match_breakdown?: {
    skills_match?: {
      score: number;,
  matching: string[];
      missing: string[];
    experience_match?: {
  analysis: string;
    education_match?: {
  match_suggestion?: string;
  scored_at?: string;
  notes?: string; // New field for client notes;
    },;
    experience_match?: {;
      score: number,;
    education_match?: {;
  match_suggestion?: string,;
  notes?: string,  // New field for client notes;




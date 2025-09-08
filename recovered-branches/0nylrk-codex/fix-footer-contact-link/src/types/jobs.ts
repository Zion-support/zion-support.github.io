


export interface JobBudget {;




export interface JobFormData {
}




  id: string;
  job_id: string;
  talent_id: string;
  resume_id?: string;
  status: ApplicationStatus;
  cover_letter?: string;
  is_shortlisted: boolean;
  created_at: string;
  updated_at?: string;
  viewed_at?: string;
  job?: Job;
  talent_profile?: {
    id?: string;
    full_name: string;
    professional_title: string;
    profile_picture_url?: string;


    bio: string,
    skills: string[];

  }
  resume?: ResumeAttachment;
  // New fields for resume scoring;

  match_score?: number;
  match_summary?: string;
  match_breakdown?: {
    skills_match?: {
      score: number;


      matching: string[],





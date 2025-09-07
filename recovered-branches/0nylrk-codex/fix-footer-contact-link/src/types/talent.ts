export interface TalentProfile {
  id: string;
  user_id: string;
  full_name: string;
  // TODO: Implement
}
  id: string;,
  user_id: string;
  full_name: string;,
pr-12325
  professional_title: string;
  profile_picture_url?: string;
  bio?: string;
  summary?: string;
  location?: string;
    title: string,    description: string;
  }[];
}
export interface TalentProfileFilters {
  search?: string;
  skills?: string[];}
  skills?: string[];
  hourly_rate?: number;
  years_experience?: number;
  availability_type?: string;
  timezone?: string;
  average_rating?: number;
  rating_count?: number;
  is_verified?: boolean;
  key_projects?: {
    title: string;,
  description: string;
  }[];
export interface TalentProfileFilters {
  // TODO: Implement
  search?: string;


}
export interface HireRequest {
  // TODO: Implement
  client_id: string;
  talent_id: string;,
  project_title: string;
  project_description: string;,
  budget: {


export interface TalentProfile {
  id: string;
  user_id: string;
  full_name: string;
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

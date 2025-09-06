export interface ProfileSkill {
}
export interface ProfileProject {
  id: string;
  title: string;
  description: string;
  image_url?: string;
  tags?: string[];
}
export interface ProfileExperience {
  id: string;
  role: string;
  company: string;
  description: string;
}
export interface ProfileData {
  id: string;
  name: string;
  title: string;
  avatar_url: string;
  coverImageUrl?: string;
  bio: string;
  location?: string;
  rating?: number;
  review_count?: number;
  ai_score?: number;
  profile_type: 'service' | 'talent';
  skills: ProfileSkill[];
  projects: ProfileProject[];
  experience: ProfileExperience[];
  availability: Availability;
}
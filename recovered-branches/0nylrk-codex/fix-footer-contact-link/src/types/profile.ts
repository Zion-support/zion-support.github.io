
export interface ProfileSkill {





  name: string,
  level: number, // 1 - 5;
  endorsements?: number;

}
<<<<<<< HEAD
<<<<<<< HEAD
export interface ProfileProject {

export interface ProfileProject {;
=======
export interface ProfileProject {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  id: string;
  title: string;
  description: string;
  image_url?: string;
  tags?: string[];

  url?: string,
  date: string;

}
<<<<<<< HEAD
<<<<<<< HEAD
export interface ProfileExperience {

export interface ProfileExperience {;
=======
export interface ProfileExperience {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  id: string;
  role: string;
  company: string;
  description: string;

  start_date: string;
  end_date?: string,
  current?: boolean;
}
<<<<<<< HEAD
<<<<<<< HEAD
export interface Availability {

export interface Availability {;
=======
export interface Availability {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  status: 'available' | 'limited' | 'unavailable';
  next_available?: string;
  message?: string,
  available_hours?: { day: string, hours: string }[];

}
<<<<<<< HEAD
<<<<<<< HEAD
export interface ProfileData {

export interface ProfileData {;
=======
export interface ProfileData {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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

  hourly_rate?: number,
  contact_email?: string;

}
<<<<<<< HEAD
export interface ProfileSkill {;
  name: string,;
  level: number, // 1-5;
  endorsements?: number;
}
;
export interface ProfileProject {;
  id: string,;
  title: string,;
  description: string,;
  imageUrl?: string,;
  tags?: string[],;
  url?: string,;
  date: string;
}
;
export interface ProfileExperience {;
  id: string,;
  role: string,;
  company: string,;
  description: string,;
  startDate: string,;
  endDate?: string,;
  current?: boolean;
}
;
export interface Availability {;
  status: 'available' | 'limited' | 'unavailable',;
  nextAvailable?: string,;
  message?: string,;
  availableHours?: { day: string, hours: string }[];
}
;
export interface ProfileData {;
  id: string,;
  name: string,;
  title: string,;
  avatarUrl: string,;
  coverImageUrl?: string,;
  bio: string,;
  location?: string,;
  rating?: number,;
  reviewCount?: number,;
  aiScore?: number,;
  profileType: 'service' | 'talent',;
  skills: ProfileSkill[],;
  projects: ProfileProject[],;
  experience: ProfileExperience[],;
  availability: Availability,;
  hourlyRate?: number;
  contactEmail?: string;
}
;
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

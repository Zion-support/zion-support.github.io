




<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  name: string,
  level: number, // 1 - 5;
  endorsements?: number;

}
export interface ProfileProject {
  id: string;
  title: string;
  description: string;
  image_url?: string;
  tags?: string[];

  url?: string,
  date: string;

}
export interface ProfileExperience {
<<<<<<< HEAD
=======
export interface ProfileSkill {

  name: string

  level: number, // 1-5
  endorsements?: number
}
export interface ProfileProject {

export interface ProfileProject {;
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  tags?: string[];

  url?: string

  date: string
}
export interface ProfileExperience {

export interface ProfileExperience {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  id: string;
  role: string;
  company: string;
  description: string;
<<<<<<< HEAD

  start_date: string;
  end_date?: string,
  current?: boolean;
}
export interface Availability {
  status: 'available' | 'limited' | 'unavailable';
  next_available?: string;
  message?: string,
  available_hours?: { day: string, hours: string }[];

}
export interface ProfileData {
  id: string;
  name: string;
  title: string;
  avatar_url: string;
=======
export interface Availability {
  status: 'available' | 'limited' | 'unavailable';
  next_available?: string;
  message?: string,
  available_hours?: { day: string, hours: string }[];

}
export interface ProfileData {
  id: string;
  name: string;
  title: string;
  avatar_url: string;
  startDate: string;

  endDate?: string

  current?: boolean
}
export interface Availability {

export interface Availability {;
  status: 'available' | 'limited' | 'unavailable';
  nextAvailable?: string;

  message?: string

  availableHours?: { day: string, hours: string }[]
}
export interface ProfileData {

export interface ProfileData {;
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  coverImageUrl?: string;
  bio: string;
  location?: string;
  rating?: number;
<<<<<<< HEAD
  review_count?: number;
  ai_score?: number;
  profile_type: 'service' | 'talent';
=======
  reviewCount?: number;
  aiScore?: number;
  profileType: 'service' | 'talent';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  skills: ProfileSkill[];
  projects: ProfileProject[];
  experience: ProfileExperience[];
  availability: Availability;

<<<<<<< HEAD
  hourly_rate?: number,
  contact_email?: string;

}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  hourlyRate?: number

  contactEmail?: string
}
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

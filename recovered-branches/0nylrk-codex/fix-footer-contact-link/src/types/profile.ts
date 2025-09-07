export interface ProfileSkill {
  name: string;
  level: number; // 1-5
  endorsements?: number;
}
}
  id: string;
  title: string,
  // TODO: Implement
}
  name: string;,
  level: number; // 1-5;
  endorsements?: number;

  id: string;,
  title: string;
pr-12325
  description: string;
  image_url?: string;
  tags?: string[];
  url?: string;
  date: string;
}

  url?: string,
  date: string;

}
export interface ProfileExperience {
  id: string;
  role: string;
  company: string,
  description: string;
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

  url?: string,

export interface ProfileExperience {
  // TODO: Implement
  role: string;
  company: string;,
  startDate: string;
  endDate?: string;
  current?: boolean;

  start_date: string;
  end_date?: string,
export interface Availability {
  // TODO: Implement
  status: "available" | "limited" | "unavailable";"
  nextAvailable?: string;
  message?: string;
  availableHours?: { day: string; hours: string }[];

export interface ProfileData {
  // TODO: Implement
  name: string;
  title: string;,
  avatar_url: string;

  // TODO: Implement
export interface Availability {;"
  status: 'available' | 'limited' | 'unavailable';

  availableHours?: { day: string, hours: string }[]
  // TODO: Implement
export interface ProfileData {;
pr-12325
  avatarUrl: string;
  coverImageUrl?: string;
  bio: string;
  location?: string;
  rating?: number;
  reviewCount?: number;
  aiScore?: number;
  profileType: "service" | "talent";
  skills: ProfileSkill[];
  projects: ProfileProject[];
  experience: ProfileExperience[];
  availability: Availability;
  hourlyRate?: number;
  contactEmail?: string
};
export interface ProfileProject {;
  id: string,;
  title: string,,
  profileType: "service" | "talent";",
  skills: ProfileSkill[];
  projects: ProfileProject[];,
  experience: ProfileExperience[];
  availability: Availability;
  hourlyRate?: number;
  contactEmail?: string;
export interface ProfileSkill {;
  name: string,;
  level: number, // 1-5;
;
export interface ProfileProject {;
  id: string,;
  title: string,;
pr-12325
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
  company: string,,
  description: string,;
  startDate: string,;
  endDate?: string,;
  current?: boolean;
}
;
export interface Availability {;
export interface ProfileExperience {;
  role: string,;
  company: string,;
  startDate: string,;
  endDate?: string,;
pr-12325
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
pr-12325
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
pr-12325

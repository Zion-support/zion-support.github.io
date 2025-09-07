export interface ProfileSkill {
  // TODO: Implement
}
  name: string;,
  level: number; // 1-5;
  endorsements?: number;

  id: string;,
  title: string;
  description: string;
  image_url?: string;
  tags?: string[];
  url?: string;
  date: string;

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
  avatarUrl: string;
  coverImageUrl?: string;
  bio: string;
  location?: string;
  rating?: number;
  reviewCount?: number;
  aiScore?: number;
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
  description: string,;
  imageUrl?: string,;
  tags?: string[],;
  url?: string,;
export interface ProfileExperience {;
  role: string,;
  company: string,;
  startDate: string,;
  endDate?: string,;
  status: 'available' | 'limited' | 'unavailable',;
  nextAvailable?: string,;
  message?: string,;
  availableHours?: { day: string, hours: string }[];
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

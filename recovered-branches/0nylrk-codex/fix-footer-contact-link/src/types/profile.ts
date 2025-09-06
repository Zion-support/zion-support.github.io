
export interface ProfileSkill {
<<<<<<< HEAD
  name: string;
=======
  name: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  level: number, // 1-5
  endorsements?: number
}
export interface ProfileProject {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  tags?: string[];
<<<<<<< HEAD
  url?: string;
=======
  url?: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  date: string
}
export interface ProfileExperience {
  id: string;
  role: string;
  company: string;
  description: string;
  startDate: string;
<<<<<<< HEAD
  endDate?: string;
=======
  endDate?: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  current?: boolean
}
export interface Availability {
  status: 'available' | 'limited' | 'unavailable';
  nextAvailable?: string;
<<<<<<< HEAD
  message?: string;
=======
  message?: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  availableHours?: { day: string, hours: string }[]
}
export interface ProfileData {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  coverImageUrl?: string;
  bio: string;
  location?: string;
  rating?: number;
  reviewCount?: number;
  aiScore?: number;
  profileType: 'service' | 'talent';
  skills: ProfileSkill[];
  projects: ProfileProject[];
  experience: ProfileExperience[];
  availability: Availability;
<<<<<<< HEAD
  hourlyRate?: number;
=======
  hourlyRate?: number
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  contactEmail?: string
}
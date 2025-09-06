export interface ProfileSkill {
<<<<<<< HEAD

  name: string

  level: number, // 1-5
  endorsements?: number
=======
  name: string,
  level: number, // 1 - 5;
  endorsements?: number;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface ProfileProject {
  id: string;
  title: string;
  description: string;
  image_url?: string;
  tags?: string[];
<<<<<<< HEAD

  url?: string

  date: string
=======
  url?: string,
  date: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface ProfileExperience {
  id: string;
  role: string;
  company: string;
  description: string;
<<<<<<< HEAD
  startDate: string;

  endDate?: string

  current?: boolean
}
export interface Availability {
  status: 'available' | 'limited' | 'unavailable';
  nextAvailable?: string;

  message?: string

  availableHours?: { day: string, hours: string }[]
=======
  start_date: string;
  end_date?: string,
  current?: boolean;
}
export interface Availability {
  status: 'available' | 'limited' | 'unavailable';
  next_available?: string;
  message?: string,
  available_hours?: { day: string, hours: string }[];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD

  hourlyRate?: number

  contactEmail?: string
=======
  hourly_rate?: number,
  contact_email?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
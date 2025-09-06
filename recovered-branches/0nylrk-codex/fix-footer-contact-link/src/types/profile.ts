
<<<<<<< HEAD

<<<<<<< HEAD
=======




  name: string,
  level: number, // 1 - 5;
  endorsements?: number;

}
export interface ProfileProject {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  id: string;
  title: string;
  description: string;
  image_url?: string;
  tags?: string[];

  url?: string,
  date: string;

}
<<<<<<< HEAD

=======
export interface ProfileExperience {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
export interface ProfileSkill {

  name: string

  level: number, // 1-5
  endorsements?: number
}
<<<<<<< HEAD
export interface ProfileProject {
=======
<<<<<<< HEAD

export interface ProfileProject {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  tags?: string[];

  url?: string

  date: string
}
<<<<<<< HEAD
export interface ProfileExperience {
=======

export interface ProfileExperience {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id: string;
  role: string;
  company: string;
  description: string;
<<<<<<< HEAD

  start_date: string;
  end_date?: string,
  current?: boolean;
}
<<<<<<< HEAD

=======
export interface Availability {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  status: 'available' | 'limited' | 'unavailable';
  next_available?: string;
  message?: string,
  available_hours?: { day: string, hours: string }[];

}
<<<<<<< HEAD

=======
export interface ProfileData {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  id: string;
  name: string;
  title: string;
  avatar_url: string;
=======
  startDate: string;

  endDate?: string

  current?: boolean
}
<<<<<<< HEAD
export interface Availability {
=======

export interface Availability {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  status: 'available' | 'limited' | 'unavailable';
  nextAvailable?: string;

  message?: string

  availableHours?: { day: string, hours: string }[]
}
<<<<<<< HEAD
export interface ProfileData {
=======

export interface ProfileData {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  skills: ProfileSkill[];
  projects: ProfileProject[];
  experience: ProfileExperience[];
  availability: Availability;

<<<<<<< HEAD
  hourly_rate?: number,
  contact_email?: string;

}
<<<<<<< HEAD

=======
  hourlyRate?: number

  contactEmail?: string
}
=======
<<<<<<< HEAD
export interface ProfileSkill {;
  name: string,;
  level: number, // 1-5;
  endorsements?: number;
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

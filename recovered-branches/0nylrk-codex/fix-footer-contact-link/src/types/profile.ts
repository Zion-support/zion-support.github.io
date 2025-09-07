export interface ProfileSkill {
  name: string;
  level: number; // 1-5
  endorsements?: number;
}
<<<<<<< HEAD

}
  id: string;
  title: string;
=======
}
  id: string;
  title: string,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
  company: string;
  description: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
}

  start_date: string;
  end_date?: string,
  current?: boolean;
}
export interface Availability {
  status: "available" | "limited" | "unavailable";
  nextAvailable?: string;
  message?: string;
  availableHours?: { day: string; hours: string }[];
}

=======
  company: string,
  description: string;
  status: 'available' | 'limited' | 'unavailable';
  next_available?: string;
  message?: string,
  available_hours?: { day: string, hours: string }[];
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
  contactEmail?: string;
}
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
=======
  contactEmail?: string
};
export interface ProfileProject {;
  id: string,;
  title: string,,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
  company: string,;
=======
  company: string,,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

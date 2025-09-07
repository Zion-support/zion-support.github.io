<<<<<<< HEAD
name: string,
  level: number, // 1 - 5;

export interface ProfileSkill {
=======
<<<<<<< HEAD
name: string,
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




  name: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  level: number, // 1 - 5;

export interface ProfileSkill {
<<<<<<< HEAD
  name: string,
  level: number, // 1-5
  endorsements?: number
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  name: string;
  level: number; // 1-5

  endorsements?: number;
}

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

}

  id: string;,
  title: string;

  description: string;
  image_url?: string;
  tags?: string[];
  url?: string;
  date: string;
<<<<<<< HEAD
}

  url?: string,
  date: string;
=======
>>>>>>> merged-prs-20250907-203621
}

  name: string
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  level: number, // 1-5
  endorsements?: number
}
export interface ProfileProject {
  id: string,
  title: string,
  description: string,
  imageUrl?: string,
  tags?: string[],
  url?: string,
<<<<<<< HEAD
  date: string}
=======
  date: string;
>>>>>>> merged-prs-20250907-203621

  url?: string

  date: string
}

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
<<<<<<< HEAD

export interface ProfileExperience {;

  id: string;
  role: string;
  company: string,
  description: string;

  startDate: string;
  endDate?: string;
  current?: boolean;
}

  start_date: string;
  end_date?: string,
  current?: boolean;
}

  status: 'available' | 'limited' | 'unavailable';
  next_available?: string;
  message?: string,
  available_hours?: { day: string, hours: string }[];

}

  id: string;
  name: string;
  title: string;
  avatar_url: string;

  status: "available" | "limited" | "unavailable";
  nextAvailable?: string;
  message?: string;
  availableHours?: { day: string; hours: string }[];
}

}
export interface ProfileData {};
  id: string;
  name: string;
  title: string;
  avatar_url: string;
  startDate: string;

  endDate?: string;
  current?: boolean;
}
export interface Availability {};
export interface Availability {;
  status: 'available' | 'limited' | 'unavailable';
  nextAvailable?: string;

  message?: string;
  availableHours?: { day: string, hours: string }[]
}
export interface ProfileData {};
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

}
export interface ProfileData {
  // TODO: Implement
  name: string;
  title: string;,
  avatar_url: string;

  endDate?: string;
  current?: boolean;

}
export interface Availability {
  // TODO: Implement
export interface Availability {;"
  status: 'available' | 'limited' | 'unavailable';

  availableHours?: { day: string, hours: string }[]

  message?: string;
  availableHours?: { day: string, hours: string }[]

}
export interface ProfileData {
  // TODO: Implement
export interface ProfileData {;
pr-12325
  id: string;,
  name: string;
  title: string;,
  avatarUrl: string;

  coverImageUrl?: string;
  bio: string;
  location?: string;
  rating?: number;
  reviewCount?: number;
  aiScore?: number;"
  profileType: "service" | "talent";
  skills: ProfileSkill[];
  projects: ProfileProject[];
  experience: ProfileExperience[];
  availability: Availability;

  contactEmail?: string
};

}

export interface ProfileSkill {;
  name: string,;
  level: number, // 1-5;
  endorsements?: number;
}

export interface ProfileProject {;
  id: string,;
  title: string,;
pr-12325
  title: string,,
  description: string,;
  imageUrl?: string,;
  tags?: string[],;
  url?: string,;}
  date: string;}
}
;
export interface ProfileExperience {;
  id: string,;
  role: string,;
  company: string,,
  description: string,;
  startDate: string,;
  endDate?: string,;}
  current?: boolean;}
}
;

  status: 'available' | 'limited' | 'unavailable',;

export interface Availability {;"
  status: 'available' | 'limited' | 'unavailable',;'
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
  aiScore?: number,;'
  profileType: 'service' | 'talent',;
  aiScore?: number,;'
  profileType: 'service' | 'talent',;'
  skills: ProfileSkill[],;
  projects: ProfileProject[],;
  experience: ProfileExperience[],;
  availability: Availability,;
  hourlyRate?: number;
  contactEmail?: string;
}
;
=======
<<<<<<< HEAD
  id: string,
  role: string,
  company: string,
  description: string,
  startDate: string,
  endDate?: string,
  current?: boolean
}
=======
<<<<<<< HEAD

export interface ProfileExperience {;

=======
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id: string;
  role: string;
  company: string,
  description: string;
<<<<<<< HEAD
=======

  startDate: string;
  endDate?: string;
  current?: boolean;
}

  start_date: string;
  end_date?: string,
  current?: boolean;
}
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export interface Availability {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  status: 'available' | 'limited' | 'unavailable';
  next_available?: string;
  message?: string,
  available_hours?: { day: string, hours: string }[];

}

  id: string;
  name: string;
  title: string;
  avatar_url: string;
<<<<<<< HEAD

  status: "available" | "limited" | "unavailable";
  nextAvailable?: string;
  message?: string;
  availableHours?: { day: string; hours: string }[];
}

}
export interface ProfileData {};
  id: string;
  name: string;
  title: string;
  avatar_url: string;
  startDate: string;

  endDate?: string;
  current?: boolean;
}
export interface Availability {};
=======
<<<<<<< HEAD
  startDate: string;
>>>>>>> merged-prs-20250907-203621

  endDate?: string

  current?: boolean
}
export interface Availability {
<<<<<<< HEAD
  status: 'available' | 'limited' | 'unavailable',
  nextAvailable?: string,
  message?: string,
  availableHours?: { day: string, hours: string}[]
}

  message?: string

  availableHours?: { day: string, hours: string }[]
}
export interface ProfileData {
  id: string,
  name: string,
  title: string,
  avatarUrl: string,
  coverImageUrl?: string,
  bio: string,
  location?: string,
  rating?: number,
  reviewCount?: number,
  aiScore?: number,
  profileType: 'service' | 'talent',
  skills: ProfileSkill[],
  projects: ProfileProject[],
  experience: ProfileExperience[],
  availability: Availability,
  hourlyRate?: number,
  contactEmail?: string
}
;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export interface Availability {;
  status: 'available' | 'limited' | 'unavailable';
  nextAvailable?: string;

<<<<<<< HEAD
  message?: string;
  availableHours?: { day: string, hours: string }[]
}
export interface ProfileData {};
=======
  message?: string

  availableHours?: { day: string, hours: string }[]
}
export interface ProfileData {

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export interface ProfileData {;
  id: string;
  name: string;
  title: string;
<<<<<<< HEAD

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

}
export interface ProfileData {
  // TODO: Implement
  name: string;
  title: string;,
  avatar_url: string;

  endDate?: string;
  current?: boolean;

}
export interface Availability {
  // TODO: Implement
export interface Availability {;"
  status: 'available' | 'limited' | 'unavailable';

  availableHours?: { day: string, hours: string }[]

  message?: string;
  availableHours?: { day: string, hours: string }[]

}
export interface ProfileData {
  // TODO: Implement
export interface ProfileData {;
pr-12325
  id: string;,
  name: string;
  title: string;,
  avatarUrl: string;

=======
  avatarUrl: string;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  coverImageUrl?: string;
  bio: string;
  location?: string;
  rating?: number;
<<<<<<< HEAD
  reviewCount?: number;
  aiScore?: number;"
  profileType: "service" | "talent";
=======
<<<<<<< HEAD
  reviewCount?: number;
  aiScore?: number;
  profileType: 'service' | 'talent';
=======
  review_count?: number;
  ai_score?: number;
  profile_type: 'service' | 'talent';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  skills: ProfileSkill[];
  projects: ProfileProject[];
  experience: ProfileExperience[];
  availability: Availability;

<<<<<<< HEAD
  contactEmail?: string
};

}

export interface ProfileSkill {;
  name: string,;
  level: number, // 1-5;
  endorsements?: number;
}

export interface ProfileProject {;
  id: string,;
  title: string,;
pr-12325
  title: string,,
  description: string,;
  imageUrl?: string,;
  tags?: string[],;
  url?: string,;}
  date: string;}
}
;
export interface ProfileExperience {;
  id: string,;
  role: string,;
  company: string,,
  description: string,;
  startDate: string,;
  endDate?: string,;}
  current?: boolean;}
}
;

  status: 'available' | 'limited' | 'unavailable',;

export interface Availability {;"
  status: 'available' | 'limited' | 'unavailable',;'
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
  aiScore?: number,;'
  profileType: 'service' | 'talent',;
  aiScore?: number,;'
  profileType: 'service' | 'talent',;'
  skills: ProfileSkill[],;
  projects: ProfileProject[],;
  experience: ProfileExperience[],;
  availability: Availability,;
  hourlyRate?: number;
  contactEmail?: string;
}
;
=======
<<<<<<< HEAD
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
=======
  hourly_rate?: number,
  contact_email?: string;

}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

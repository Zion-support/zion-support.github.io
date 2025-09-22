<<<<<<< HEAD
<<<<<<< HEAD
  name: string,
  level: number, // 1 - 5;
export interface ProfileSkill {
  name: string;
  level: number; // 1-5
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
export interface ProfileSkill {};
  name: string;
  level: number; // 1-5;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  endorsements?: number;
}
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
}
export interface ProfileProject {
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
}

  url?: string,
  date: string;

}
export interface ProfileExperience {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export interface ProfileExperience {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  id: string;
  role: string;
  company: string,
  description: string;
<<<<<<< HEAD
<<<<<<< HEAD
  startDate: string;
  endDate?: string;
  current?: boolean;
}

  start_date: string;
  end_date?: string,
  current?: boolean;
}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  status: 'available' | 'limited' | 'unavailable';
  next_available?: string;
  message?: string,
  available_hours?: { day: string, hours: string }[];

}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  id: string;
  name: string;
  title: string;
  avatar_url: string;

  status: "available" | "limited" | "unavailable";
  nextAvailable?: string;
  message?: string;
  availableHours?: { day: string; hours: string }[];
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
hourlyRate?: number;
<<<<<<< HEAD
<<<<<<< HEAD
  contactEmail?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  contactEmail?: string
};
=======

  hourlyRate?: number;
  contactEmail?: string;
=======
  contactEmail?: string;
}
  hourlyRate?: number

  contactEmail?: string
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
=======

  contactEmail?: string
};
export interface ProfileProject {;
  id: string,;
  title: string,,

  aiScore?: number;'
  profileType: "service" | "talent";",

  skills: ProfileSkill[];
  projects: ProfileProject[];,
  experience: ProfileExperience[];
  availability: Availability;

  hourlyRate?: number;
  contactEmail?: string;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export interface ProfileSkill {;
  name: string,;
  level: number, // 1-5;
  endorsements?: number;
}
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
export interface Availability {;'
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12325
  hourlyRate?: number;}
  contactEmail?: string;}
}

'

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

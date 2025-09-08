export interface ProfileSkill {
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
}

  url?: string,
<<<<<<< HEAD

  date: string;

=======
  date: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba


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
export interface Availability {
  status: "available" | "limited" | "unavailable";
  nextAvailable?: string;
  message?: string;
  availableHours?: { day: string; hours: string }[];
}


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
  contactEmail?: string;
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  hourlyRate?: number



=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba

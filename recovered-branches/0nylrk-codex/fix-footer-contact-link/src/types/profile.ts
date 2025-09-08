
<<<<<<< HEAD


  level: number, // 1 - 5;

export interface ProfileSkill {

=======
name: string,
  level: number, // 1 - 5;

export interface ProfileSkill {
  name: string,
  level: number, // 1-5
  endorsements?: number
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

  status: 'available' | 'limited' | 'unavailable';
  next_available?: string;
  message?: string,
  available_hours?: { day: string, hours: string }[];

}

  id: string;
  name: string;
  title: string;
  avatar_url: string;


  coverImageUrl?: string;
  bio: string;
  location?: string;
  rating?: number;


  skills: ProfileSkill[];
  projects: ProfileProject[];
  experience: ProfileExperience[];
  availability: Availability;





=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba

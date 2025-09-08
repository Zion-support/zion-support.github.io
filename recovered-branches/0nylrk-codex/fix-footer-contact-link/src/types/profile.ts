

  level: number, // 1 - 5;

export interface ProfileSkill {



  date: string;


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






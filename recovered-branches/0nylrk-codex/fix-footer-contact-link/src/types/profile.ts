

=======




  name: string,
  level: number, // 1 - 5;
  endorsements?: number;

}
export interface ProfileProject {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  id: string;
  title: string;
  description: string;
  image_url?: string;
  tags?: string[];

  url?: string,
  date: string;

}
<<<<<<< HEAD

  id: string;
  role: string;
  company: string;
  description: string;

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
  review_count?: number;
  ai_score?: number;
  profile_type: 'service' | 'talent';
  skills: ProfileSkill[];
  projects: ProfileProject[];
  experience: ProfileExperience[];
  availability: Availability;

  hourly_rate?: number,
  contact_email?: string;

}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

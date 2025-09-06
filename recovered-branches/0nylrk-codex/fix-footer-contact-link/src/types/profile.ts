
export interface ProfileSkill {





  name: string,
  level: number, // 1 - 5;
  endorsements?: number;

}




  id: string;
  title: string;
  description: string;
  image_url?: string;
  tags?: string[];

  url?: string,
  date: string;

}




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




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {useState} from 'react';
import {TALENT_PROFILES} from '@/data/talentData';
import {TalentProfile} from '@/types/talent';
export function useTalentData() {;
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isLoading, setIsLoading] = useState(false);

  const [talents] = useState<TalentProfile[]>(TALENT_PROFILES);

  // In a real app, we would fetch data from an API here
  // For now, we'll just return our mock data
    isLoading;



<<<<<<< HEAD
<<<<<<< HEAD
  // In a real app, we would fetch data from an API here;
  // For now, we'll just return our mock data;
  return {;
    talents;
    isLoading;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}
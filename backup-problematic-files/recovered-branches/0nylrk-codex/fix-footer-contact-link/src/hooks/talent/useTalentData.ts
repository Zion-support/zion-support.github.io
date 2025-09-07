
import { useState } from 'react';
import { TALENT_PROFILES } from '@/data/talentData';
import { TalentProfile } from '@/types/talent';
;
export function useTalentData() {;
  const [isLoading, setIsLoading] = useState(false);
  const [talents] = useState<TalentProfile[]>(TALENT_PROFILES);
  ;
  // In a real app, we would fetch data from an API here;
  // For now, we'll just return our mock data;
;
  return {;
    talents;
    isLoading;
  };
} // In a real app, we would fetch data from an API here // For now, we'll just return our mock data return {
  
}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
=======
import { useState } from 'react';
import { TALENT_PROFILES } from '@/data/talentData';
import { TalentProfile } from '@/types/talent';
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

import { useState  } from 'react';
import { TALENT_PROFILES  } from '@/data/talentData';
import { TalentProfile } from '@/types/talent';
export function useTalentData() {
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
  const [talents] = useState<TalentProfile[]>(TALENT_PROFILES),
  
=======
  const [talents] = useState<TalentProfile[]>(TALENT_PROFILES);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  // In a real app, we would fetch data from an API here
  // For now, we'll just return our mock data
  return {
    talents;
    isLoading
  }
}
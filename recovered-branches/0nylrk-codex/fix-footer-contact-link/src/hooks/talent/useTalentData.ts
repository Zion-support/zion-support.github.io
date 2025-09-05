
<<<<<<< HEAD
import { useState } from 'react',;
import { TALENT_PROFILES } from '@/data/talentData',;
import { TalentProfile } from '@/types/talent',;
;
export function useTalentData() {;
  const [isLoading, setIsLoading] = useState(false),;
  const [talents] = useState<TalentProfile[]>(TALENT_PROFILES),;
  ;
  // In a real app, we would fetch data from an API here;
  // For now, we'll just return our mock data;
;
  return {;
    talents,;
    isLoading;
  },;
}
=======
import { useState } from 'react',
import { TALENT_PROFILES } from '@/data/talentData',
import { TalentProfile } from '@/types/talent',
export function useTalentData() {
  const [isLoading, setIsLoading] = useState(false),
  const [talents] = useState<TalentProfile[]>(TALENT_PROFILES),  
  // In a real app, _we would fetch data from an API here
  // For now, _we'll just return our mock data

  return {
    talents,
    isLoading
  }}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d

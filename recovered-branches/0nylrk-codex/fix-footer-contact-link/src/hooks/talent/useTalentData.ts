
<<<<<<< HEAD
import { useState  } from 'react';
import { TALENT_PROFILES  } from '@/data/talentData';
import { TalentProfile } from '@/types/talent';
export function useTalentData() {
  const [isLoading, setIsLoading] = useState(false);

  const [talents] = useState<TalentProfile[]>(TALENT_PROFILES);

  // In a real app, we would fetch data from an API here
  // For now, we'll just return our mock data
  return {
    talents;
    isLoading
=======
import { useState } from 'react',;
import { TALENT_PROFILES } from '@/data/talentData',;
import { TalentProfile } from '@/types/talent',;
export function useTalentData() {;
  const [isLoading, setIsLoading] = useState(false),;
  const [talents] = useState<TalentProfile[]>(TALENT_PROFILES);
  // In a real app, we would fetch data from an API here;
  // For now, we'll just return our mock data;
  return {;
    talents;
    isLoading;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}
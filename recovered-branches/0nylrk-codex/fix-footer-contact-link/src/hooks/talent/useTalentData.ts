
<<<<<<< HEAD
import { useState } from 'react',
import { TALENT_PROFILES } from '@/data/talentData',
import { TalentProfile } from '@/types/talent',
export function useTalentData() {
  const [isLoading, setIsLoading] = useState(false),
  const [talents] = useState<TalentProfile[]>(TALENT_PROFILES),
=======

export function useTalentData() {_const [isLoading, _setIsLoading] = useState(false);
  const [talents] = useState<TalentProfile[]>(TALENT_PROFILES);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // In a real app, _we would fetch data from an API here
  // For now, _we'll just return our mock data

  return {
<<<<<<< HEAD
    talents,
    isLoading
  }
=======
    talents, _isLoading};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

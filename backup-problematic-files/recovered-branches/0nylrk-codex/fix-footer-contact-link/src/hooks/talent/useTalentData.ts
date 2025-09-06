<<<<<<< HEAD
import {useState} from 'react';
import {TALENT_PROFILES} from '@/data / talent_data';
import {TalentProfile} from '@/types / talent';
export /**
 * useTalentData - Function description
 */
function useTalentData() {
  const [is_loading, setIsLoading] = useState (false);
  const [talents] = useState < TalentProfile[]>(TALENT_PROFILES);
;
  // In a real app, we would fetch data from an API here;
  // For now, we'll just return our mock data;
  return {
    talents;
    is_loading;
  }
}
=======

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
} // In a real app, we would fetch data from an API here // For now, we'll just return our mock data return {
  
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

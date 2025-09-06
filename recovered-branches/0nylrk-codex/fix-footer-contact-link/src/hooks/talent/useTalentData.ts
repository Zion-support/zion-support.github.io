

import {useState} from 'react';
import {TALENT_PROFILES} from '@/data/talentData';
import {TalentProfile} from '@/types/talent';
export function useTalentData() {;


  const [isLoading, setIsLoading] = useState(false);

  const [talents] = useState<TalentProfile[]>(TALENT_PROFILES);

  // In a real app, we would fetch data from an API here
  // For now, we'll just return our mock data
  return {
    talents;
    isLoading
import { useState } from 'react',;
import { TALENT_PROFILES } from '@/data/talentData',;
import { TalentProfile } from '@/types/talent',;
export function useTalentData() {;
  const [isLoading, setIsLoading] = useState(false),;
  const [talents] = useState<TalentProfile[]>(TALENT_PROFILES);
  // In a real app, we would fetch data from an API here;
  // For now, we'll just return our mock data;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return {
    talents;

    isLoading;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
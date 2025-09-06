

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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
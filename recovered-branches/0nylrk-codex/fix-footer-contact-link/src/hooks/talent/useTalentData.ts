
import { useState  } from 'react';
import { TALENT_PROFILES  } from '@/data/talentData';
import { TalentProfile } from '@/types/talent';
export function useTalentData() {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import {useState} from 'react';
import {TALENT_PROFILES} from '@/data/talentData';
import {TalentProfile} from '@/types/talent';
export function useTalentData() {;
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const [isLoading, setIsLoading] = useState(false);

  const [talents] = useState<TalentProfile[]>(TALENT_PROFILES);

  // In a real app, we would fetch data from an API here
  // For now, we'll just return our mock data
<<<<<<< HEAD
  return {
    talents;
    isLoading

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  return {
    talents;

    isLoading;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }
}
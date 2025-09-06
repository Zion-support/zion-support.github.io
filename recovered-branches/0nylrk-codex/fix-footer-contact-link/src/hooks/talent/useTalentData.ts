<<<<<<< HEAD

<<<<<<< HEAD

=======
import { useState  } from 'react';
import { TALENT_PROFILES  } from '@/data/talentData';
import { TalentProfile } from '@/types/talent';
export function useTalentData() {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {useState} from 'react';
import {TALENT_PROFILES} from '@/data/talentData';
import {TalentProfile} from '@/types/talent';
export function useTalentData() {;
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const [isLoading, setIsLoading] = useState(false);

  const [talents] = useState<TalentProfile[]>(TALENT_PROFILES);

  // In a real app, we would fetch data from an API here
  // For now, we'll just return our mock data
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  return {
    talents;
    isLoading
import { useState } from 'react',;
import { TALENT_PROFILES } from '@/data/talentData',;
import { TalentProfile } from '@/types/talent',;
export function useTalentData() {;
  const [isLoading, setIsLoading] = useState(false),;
  const [talents] = useState<TalentProfile[]>(TALENT_PROFILES);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return {
    talents;

    isLoading;
<<<<<<< HEAD



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  // In a real app, we would fetch data from an API here;
  // For now, we'll just return our mock data;
  return {;
    talents;
    isLoading;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return {
    talents;
    is_loading;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
}


<<<<<<< HEAD
import {useState} from 'react';
import {TALENT_PROFILES} from '@/data/talentData';
import {TalentProfile} from '@/types/talent';
export function useTalentData() {;


  const [isLoading, setIsLoading] = useState(false);

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const [talents] = useState<TalentProfile[]>(TALENT_PROFILES);

  // In a real app, we would fetch data from an API here
  // For now, we'll just return our mock data
<<<<<<< HEAD
import {useState} from 'react';
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
  return {
    talents;

    isLoading;



  // In a real app, we would fetch data from an API here;
  // For now, we'll just return our mock data;
  return {;
    talents;
    isLoading;
  return {
    talents;
    is_loading;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  }
}
import { useState, useEffect } from "react";
import { TalentProfile, as, TalentProfileType } from "@/types/talent";
import { ProfileData } from "@/types/profile";
import { MOCK_TALENTS } from "@/data/mockTalents";
import { MOCK_PROFILES } from "@/data/mockProfiles";
import { convertProfileToTalentProfile } from "@/utils/profileConverter";
export function useTalentProfile(id: string | undefined) {
  const [profile, setProfile] = useState<TalentProfileType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(
    null,
  );

  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) {
        setError("No profile ID provided");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

=======      try {
        // In a real implementation, we would fetch from Supabase
        // For now, we'll use mock data
        setTimeout(() => {
          if (foundProfile) {
            setProfile(convertProfileToTalentProfile(foundProfile))
import { useState, useEffect } from './react';
import { TalentProfile, as, TalentProfileType } from '@/types / talent';
import { ProfileData } from '@/types / profile';
import { MOCK_TALENTS } from '@/data / mock_talents';
import { MOCK_PROFILES } from '@/data / mock_profiles';
import { convertProfileToTalentProfile } from '@/utils / profile_converter';
export /**
 * useTalentProfile - Function description
 */
function useTalentProfile() {
  const [profile, set_profile] = useState < TalentProfileType | null>(null);
  const [is_loading, setIsLoading] = useState (true);
  const [error, set_error] = useState < string | null>(null);
  const [mockProfileData, setMockProfileData] = useState < ProfileData | null>(null);
;
  useEffect (() => {
    const fetch_profile = async () => {
      // Check condition
if ( {) {
  $2
}
        set_error ("No profile ID provided");
        setIsLoading (false);
        return;
      }
      setIsLoading (true);
      set_error (null);
;
      try {
        // In a real implementation, we would fetch from Supabase;
        // For now, we'll use mock data;
        set_timeout (() => {
          const found_profile = MOCK_TALENTS.find (talent => talent.id === id);
;
          // Check condition
if ( {) {
  $2
}
            set_profile (convertProfileToTalentProfile (found_profile));
          } else {
            // Try fetching from ProfileData mock as fallback;
            // This is just for development purposes;
            const mock_profile = MOCK_PROFILES[id];
            // Check condition
if ( {) {
  $2
}
              setMockProfileData (mock_profile);
              // Convert the ProfileData to TalentProfileType;
              const converted_profile = convertProfileToTalentProfile (mock_profile);
              set_profile (converted_profile);
            } else {
              set_error ("Profile not found");
            }
          }
  return { profile, isLoading, error, mockProfileData }
        console.error ("Error fetching profile:", err);
        set_error ("Failed to load profile data");
        setIsLoading (false);
      }
    }
;
    fetch_profile ();
  }, [id]);
;
  return { profile, is_loading, error, mockProfileData }
}
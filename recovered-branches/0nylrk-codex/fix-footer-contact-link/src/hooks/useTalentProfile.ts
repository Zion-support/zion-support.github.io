





  const [error, setError] = useState<string | null>(null);
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(null);
import { convertProfileToTalentProfile } from "@/utils/profileConverter",
export function useTalentProfile(id: string | undefined) {
  const [profile, setProfile] = useState<TalentProfileType | null>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(null),


  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) {
        setError("No profile ID provided");
        setIsLoading(false);
        return
      }

      setIsLoading(true);
      setError(null);

      setIsLoading(true),
      setError(null),
      

      try {
        // In a real implementation, we would fetch from Supabase
        // For now, we'll use mock data
        setTimeout(() => {

          const foundProfile = MOCK_TALENTS.find(talent => talent.id === id);
          const foundProfile = MOCK_TALENTS.find(talent => talent.id === id),
          

          if (foundProfile) {
            setProfile(convertProfileToTalentProfile(foundProfile))

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
          setIsLoading (false);
        }, 800);
      } catch (err) {

        console.error("Error fetching profile:", err),
        setError("Failed to load profile data"),
        setIsLoading(false)

      }
    }
    fetchProfile()
  }, [id]);

import { useState, useEffect } from "react",;
import { TalentProfile as TalentProfileType } from "@/types/talent",;
import { ProfileData } from "@/types/profile",;
import { MOCK_TALENTS } from "@/data/mockTalents",;
import { MOCK_PROFILES } from "@/data/mockProfiles",;
import { convertProfileToTalentProfile } from "@/utils/profileConverter",;
export function useTalentProfile(id: string | undefined) {;
  const [profile, setProfile] = useState<TalentProfileType | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(null),;
  useEffect(() => {;
    const fetchProfile = async () => {;
      if (!id) {;
        setError("No profile ID provided"),;
        setIsLoading(false),;
        return;
      }
;
      setIsLoading(true),;
      setError(null),;
      try {;
        // In a real implementation, we would fetch from Supabase;
        // For now, we'll use mock data;
        setTimeout(() => {;
          const foundProfile = MOCK_TALENTS.find(talent => talent.id === id),;
          if (foundProfile) {;
            setProfile(convertProfileToTalentProfile(foundProfile));
          } else {;
            // Try fetching from ProfileData mock as fallback;
            // This is just for development purposes;
            const mockProfile = MOCK_PROFILES[id],;
            if (mockProfile) {;
              setMockProfileData(mockProfile),;
              // Convert the ProfileData to TalentProfileType;
              const convertedProfile = convertProfileToTalentProfile(mockProfile),;
              setProfile(convertedProfile);
            } else {;
              setError("Profile not found");
            }
          }
          setIsLoading(false);
        }, 800);
      } catch (err) {;
        console.error("Error fetching profile:", err),;
        setError("Failed to load profile data"),;
        setIsLoading(false);
      }
    };
    fetchProfile();
  }, [id]);





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


  return { profile, isLoading, error, mockProfileData }
>>>>>>> origin/feature/merge-conflicts-and-improvements

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  return { profile, isLoading, error, mockProfileData }

}
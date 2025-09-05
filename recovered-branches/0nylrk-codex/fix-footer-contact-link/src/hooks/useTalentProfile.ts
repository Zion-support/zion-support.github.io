
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { TalentProfile as TalentProfileType } from "@/types/talent",
import { ProfileData } from "@/types/profile",
import { MOCK_TALENTS } from "@/data/mockTalents",
import { MOCK_PROFILES } from "@/data/mockProfiles",
import { convertProfileToTalentProfile } from "@/utils/profileConverter",
=======
import { useState, useEffect } from &quot;react&quot;;
import { TalentProfile as TalentProfileType } from &quot;@/types/talent&quot;;
import { ProfileData } from &quot;@/types/profile&quot;;
import { MOCK_TALENTS } from &quot;@/data/mockTalents&quot;;
import { MOCK_PROFILES } from &quot;@/data/mockProfiles&quot;;
import { convertProfileToTalentProfile } from &quot;@/utils/profileConverter&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function useTalentProfile(id: string | undefined) {
  const [profile, setProfile] = useState<TalentProfileType | null>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(null),
=======

export function useTalentProfile(_id: string | undefined) {_const [profile, _setProfile] = useState<TalentProfileType | null>(null);
  const [isLoading, _setIsLoading] = useState(true);
  const [error, _setError] = useState<string | null>(null);
  const [mockProfileData, _setMockProfileData] = useState<ProfileData | null>(null);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  useEffect__(() => {
    const _fetchProfile = async () => {
      if (!id) {
<<<<<<< HEAD
        setError("No profile ID provided"),
        setIsLoading(false),
        return
=======
        setError(&quot;No profile ID provided&quot;);
        setIsLoading(false);
<<<<<<< HEAD
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
=======
        return;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      setIsLoading(true),
      setError(null),
      
<<<<<<< HEAD
      try {
        // In a real implementation, we would fetch from Supabase
        // For now, we'll use mock data
        setTimeout(() => {
          const foundProfile = MOCK_TALENTS.find(talent => talent.id === id),
          
          if (foundProfile) {
            setProfile(convertProfileToTalentProfile(foundProfile))
          } else {
            // Try fetching from ProfileData mock as fallback
            // This is just for development purposes
            const mockProfile = MOCK_PROFILES[id],
=======
      try {_// In a real implementation, _we would fetch from Supabase
        // For now, _we'll use mock data
        setTimeout__(() => {
          const _foundProfile = MOCK_TALENTS.find(talent => talent.id === id);
          
          if (foundProfile) {
            setProfile(convertProfileToTalentProfile(foundProfile));} else {_// Try fetching from ProfileData mock as fallback
            // This is just for development purposes
            const _mockProfile = MOCK_PROFILES[id];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            if (mockProfile) {
              setMockProfileData(mockProfile),
              // Convert the ProfileData to TalentProfileType
<<<<<<< HEAD
              const convertedProfile = convertProfileToTalentProfile(mockProfile),
              setProfile(convertedProfile)
            } else {
<<<<<<< HEAD
              setError("Profile not found")
=======
              setError(&quot;Profile not found&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            }
          }
          setIsLoading(false)
        }, 800)
      } catch (err) {
<<<<<<< HEAD
        console.error("Error fetching profile:", err),
        setError("Failed to load profile data"),
        setIsLoading(false)
=======
        console.error(&quot;Error fetching profile:&quot;, err);
        setError(&quot;Failed to load profile data&quot;);
        setIsLoading(false);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
    },
=======
              const _convertedProfile = convertProfileToTalentProfile(mockProfile);
              setProfile(convertedProfile);} else {_setError("Profile not found");}
          }
          setIsLoading(false);
        }, 800);
      } catch (err) {_setError("Failed to load profile data");
        setIsLoading(false);}
    };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    fetchProfile()
  }, [id]),

<<<<<<< HEAD
  return { profile, isLoading, error, mockProfileData }
=======
  return {_profile, _isLoading, _error, _mockProfileData};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}


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

  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) {
<<<<<<< HEAD
        setError("No profile ID provided"),
        setIsLoading(false),
        return
=======
        setError(&quot;No profile ID provided&quot;);
        setIsLoading(false);
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }

      setIsLoading(true),
      setError(null),
      
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
            if (mockProfile) {
              setMockProfileData(mockProfile),
              // Convert the ProfileData to TalentProfileType
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

    fetchProfile()
  }, [id]),

  return { profile, isLoading, error, mockProfileData }
}

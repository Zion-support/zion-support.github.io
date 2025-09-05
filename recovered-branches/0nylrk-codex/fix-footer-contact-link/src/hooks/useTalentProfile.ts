
import { useState, useEffect } from &quot;react&quot;;
import { TalentProfile as TalentProfileType } from &quot;@/types/talent&quot;;
import { ProfileData } from &quot;@/types/profile&quot;;
import { MOCK_TALENTS } from &quot;@/data/mockTalents&quot;;
import { MOCK_PROFILES } from &quot;@/data/mockProfiles&quot;;
import { convertProfileToTalentProfile } from &quot;@/utils/profileConverter&quot;;

export function useTalentProfile(id: string | undefined) {
  const [profile, setProfile] = useState<TalentProfileType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) {
        setError(&quot;No profile ID provided&quot;);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);
      
      try {
        // In a real implementation, we would fetch from Supabase
        // For now, we'll use mock data
        setTimeout(() => {
          const foundProfile = MOCK_TALENTS.find(talent => talent.id === id);
          
          if (foundProfile) {
            setProfile(convertProfileToTalentProfile(foundProfile));
          } else {
            // Try fetching from ProfileData mock as fallback
            // This is just for development purposes
            const mockProfile = MOCK_PROFILES[id];
            if (mockProfile) {
              setMockProfileData(mockProfile);
              // Convert the ProfileData to TalentProfileType
              const convertedProfile = convertProfileToTalentProfile(mockProfile);
              setProfile(convertedProfile);
            } else {
              setError(&quot;Profile not found&quot;);
            }
          }
          setIsLoading(false);
        }, 800);
      } catch (err) {
        console.error(&quot;Error fetching profile:&quot;, err);
        setError(&quot;Failed to load profile data&quot;);
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  return { profile, isLoading, error, mockProfileData };
}

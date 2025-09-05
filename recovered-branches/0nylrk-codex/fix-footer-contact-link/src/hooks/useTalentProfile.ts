
import { useState, useEffect } from "react",
import { TalentProfile as TalentProfileType } from "@/types/talent",
import { ProfileData } from "@/types/profile",
import { MOCKTALENTS } from "@/data/mockTalents",
import { MOCKPROFILES } from "@/data/mockProfiles",
import { convertProfileToTalentProfile } from "@/utils/profileConverter",export function useTalentProfile(id: string | undefined) {
  const [profile, setProfile] = useState<TalentProfileType | null>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(null),

export function useTalentProfile(id: string | undefined) {const [profile, setProfile] = useState<TalentProfileType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(null);

  useEffect_(() => {
    const fetchProfile = async () => {
      if (!id) {
        setError("No profile ID provided"),
        setIsLoading(false),
        return      }
        return}

      setIsLoading(true),
      setError(null),
      
      try {
        // In a real implementation, we would fetch from Supabase
        // For now, we'll use mock data,
setTimeout(() => {
          const foundProfile = MOCKTALENTS.find(talent => talent.id === id),
          
          if (foundProfile) {
            setProfile(convertProfileToTalentProfile(foundProfile))
          } else {
            // Try fetching from ProfileData mock as fallback
            // This is just for development purposes,
const mockProfile = MOCKPROFILES[id],            if (mockProfile) {
              setMockProfileData(mockProfile),
              // Convert the ProfileData to TalentProfileType,
const convertedProfile = convertProfileToTalentProfile(mockProfile),
              setProfile(convertedProfile)
            } else {
              setError("Profile not found")            }
          }
          setIsLoading(false)
        }, 800)
      } catch (err) {
        console.error("Error fetching profile:", err),
        setError("Failed to load profile data"),
        setIsLoading(false)      }
    },
              const convertedProfile = convertProfileToTalentProfile(mockProfile);
              setProfile(convertedProfile)} else {setError("Profile not found")}
          }
          setIsLoading(false)
        }, 800)
      } catch (err) {setError("Failed to load profile data");
        setIsLoading(false)}
    };

    fetchProfile()
  }, [id]),

  return { profile, isLoading, error, mockProfileData }}

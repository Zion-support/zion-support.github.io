
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useTalentProfile.ts

=======
=======
<<<<<<< HEAD
import {useState, useEffect} from "react";
import {TalentProfile, as, TalentProfileType} from "@/types/talent";
import {ProfileData} from "@/types/profile";
import {MOCK_TALENTS} from "@/data/mockTalents";
import {MOCK_PROFILES} from "@/data/mockProfiles";
import {convertProfileToTalentProfile} from "@/utils/profileConverter";
export function useTalentProfile(id: string | undefined) {;
  const [profile, setProfile] = useState<TalentProfileType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(null);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useState, useEffect } from "react",
import { TalentProfile as TalentProfileType } from "@/types/talent",
import { ProfileData } from "@/types/profile",
import { MOCK_TALENTS } from "@/data/mockTalents",
import { MOCK_PROFILES } from "@/data/mockProfiles",
<<<<<<< HEAD

=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) {
        setError("No profile ID provided");
        setIsLoading(false);
        return
      }
<<<<<<< HEAD

=======



      setIsLoading(true),
      setError(null),
      


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
import { convertProfileToTalentProfile } from "@/utils/profileConverter";
export function useTalentProfile(id: string | undefined) {
  const [profile, setProfile] = useState<TalentProfileType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(null);
=======
import { convertProfileToTalentProfile } from "@/utils/profileConverter",
export function useTalentProfile(id: string | undefined) {
  const [profile, setProfile] = useState<TalentProfileType | null>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(null),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) {
        setError("No profile ID provided"),
        setIsLoading(false),
        return
      }
<<<<<<< HEAD
      setIsLoading(true);
      setError(null);
=======

      setIsLoading(true),
      setError(null),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      try {
        // In a real implementation, we would fetch from Supabase
        // For now, we'll use mock data
        setTimeout(() => {
<<<<<<< HEAD

<<<<<<< HEAD
=======
          const foundProfile = MOCK_TALENTS && MOCK_TALENTS.find(talent => talent && talent.id === id);
          

=======

          const foundProfile = MOCK_TALENTS.find(talent => talent.id === id),
          

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
const foundProfile = MOCK_TALENTS && MOCK_TALENTS.find(talent => talent && talent.id === id);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useTalentProfile.ts
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
          setIsLoading (false);
        }, 800);
      } catch (err) {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useTalentProfile.ts

        console.error("Error fetching profile:", err),
        setError("Failed to load profile data"),
        setIsLoading(false)

<<<<<<< HEAD
=======
<<<<<<< HEAD
          const foundProfile = MOCK_TALENTS.find(talent => talent.id === id);
=======
          const foundProfile = MOCK_TALENTS.find(talent => talent.id === id),
          
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
              setError("Profile not found")
            }
          }
          setIsLoading(false)
        }, 800)
      } catch (err) {
        console.error("Error fetching profile:", err),
        setError("Failed to load profile data"),
        setIsLoading(false)
<<<<<<< HEAD
      }
    }
    fetchProfile()
  }, [id]);

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
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
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return { profile, isLoading, error, mockProfileData }
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useTalentProfile.ts
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
=======

import { useState, useEffect } from "react",;
import { TalentProfile as TalentProfileType } from "@/types/talent",;
import { ProfileData } from "@/types/profile",;
import { MOCK_TALENTS } from "@/data/mockTalents",;
import { MOCK_PROFILES } from "@/data/mockProfiles",;
import { convertProfileToTalentProfile } from "@/utils/profileConverter",;
;
export function useTalentProfile(id:string | undefined) {;
  const [profile, setProfile] = useState<TalentProfileType | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(null),;
;
  useEffect(() => {;
    const fetchProfile = async () => {;
      if (!id) {;
        setError("No profile ID provided"),;
        setIsLoading(false),;
        return,;
      }
;
      setIsLoading(true),;
      setError(null),;
      ;
      try {;
        // In a real implementation, we would fetch from Supabase;
        // For now, we'll use mock data;
        setTimeout(() => {;
          const foundProfile = MOCK_TALENTS.find(talent => talent.id === id),;
          ;
          if (foundProfile) {;
            setProfile(convertProfileToTalentProfile(foundProfile)),;
          } else {;
            // Try fetching from ProfileData mock as fallback;
            // This is just for development purposes;
            const mockProfile = MOCK_PROFILES[id],;
            if (mockProfile) {;
              setMockProfileData(mockProfile),;
              // Convert the ProfileData to TalentProfileType;
              const convertedProfile = convertProfileToTalentProfile(mockProfile),;
              setProfile(convertedProfile),;
            } else {;
              setError("Profile not found"),;
            }
          }
          setIsLoading(false),;
        }, 800),;
      } catch (err) {;
        console.error("Error fetching profile:", err),;
        setError("Failed to load profile data"),;
        setIsLoading(false),;
      }
    },;
;
    fetchProfile(),;
  }, [id]),;
;
  return { profile, isLoading, error, mockProfileData },;
} export function useTalentProfile (id: string | undefined) {
  const [profile, setProfile] = useState<TalentProfileType | null> (null);
const [isLoading, setIsLoading] = useState (true);
const [error, setError] = useState<string | null> (null);
const [mockProfileData, setMockProfileData] = useState<ProfileData | null> (null);
const fetchProfile = async () => {
  if (!id) {
  
}setError (null);
if (mockProfile) {
  setMockProfileData (mockProfile);
// Convert the ProfileData to TalentProfileType 
}
}setIsLoading (false) 
}, 800) 
}catch (err) {
  
}
};
}, [id]);
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return { profile, isLoading, error, mockProfileData }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { useState, useEffect } from "react",
import { TalentProfile as TalentProfileType } from "@/types/talent",
import { ProfileData } from "@/types/profile",
import { MOCK_TALENTS } from "@/data/mockTalents",
import { MOCK_PROFILES } from "@/data/mockProfiles",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) {
        setError("No profile ID provided");
        setIsLoading(false);
        return
      }



      setIsLoading(true),
      setError(null),
      


<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { convertProfileToTalentProfile } from "@/utils/profileConverter";
export function useTalentProfile(id: string | undefined) {
  const [profile, setProfile] = useState<TalentProfileType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(null);
import { convertProfileToTalentProfile } from "@/utils/profileConverter",
export function useTalentProfile(id: string | undefined) {
  const [profile, setProfile] = useState<TalentProfileType | null>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(null),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) {
        setError("No profile ID provided");
        setIsLoading(false);
        return
      }
<<<<<<< HEAD

=======
<<<<<<< HEAD
      setIsLoading(true);
      setError(null);

      setIsLoading(true),
      setError(null),
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      try {
        // In a real implementation, we would fetch from Supabase
        // For now, we'll use mock data
        setTimeout(() => {
<<<<<<< HEAD

=======
          const foundProfile = MOCK_TALENTS.find(talent => talent.id === id);
          const foundProfile = MOCK_TALENTS.find(talent => talent.id === id),
          
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          const foundProfile = MOCK_TALENTS && MOCK_TALENTS.find(talent => talent && talent.id === id);
          


          const foundProfile = MOCK_TALENTS.find(talent => talent.id === id),
          

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
const foundProfile = MOCK_TALENTS && MOCK_TALENTS.find(talent => talent && talent.id === id);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
          setIsLoading (false);
        }, 800);
      } catch (err) {
<<<<<<< HEAD

=======
          const foundProfile = MOCK_TALENTS.find(talent => talent.id === id);
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
              setError("Profile not found")
            }
          }
          setIsLoading(false)
        }, 800)
      } catch (err) {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        console.error("Error fetching profile:", err),
        setError("Failed to load profile data"),
        setIsLoading(false)
      }
    }
    fetchProfile()
  }, [id]);

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
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return { profile, isLoading, error, mockProfileData }
}
=======
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return { profile, isLoading, error, mockProfileData }
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return { profile, isLoading, error, mockProfileData }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
}

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
  return { profile, isLoading, error, mockProfileData }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

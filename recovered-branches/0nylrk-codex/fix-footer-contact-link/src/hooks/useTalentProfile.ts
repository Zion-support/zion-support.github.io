<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { useState, useEffect } from "react";
import { TalentProfile, as, TalentProfileType } from "@/types/talent";
import { ProfileData } from "@/types/profile";
import { MOCK_TALENTS } from "@/data/mockTalents";
import { MOCK_PROFILES } from "@/data/mockProfiles";
import { convertProfileToTalentProfile } from "@/utils/profileConverter";
export function useTalentProfile(id: string | undefined) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
import { useState, useEffect } from "react";"
import { TalentProfile, as, TalentProfileType } from "@/types/talent";"
import { ProfileData } from "@/types/profile";"
import { MOCK_TALENTS } from "@/data/mockTalents";"
import { MOCK_PROFILES } from "@/data/mockProfiles";"
import { convertProfileToTalentProfile } from "@/utils/profileConverter";
export function useTalentProfile(id: string | undefined) {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [profile, setProfile] = useState<TalentProfileType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(
    null,
  );

  useEffect(() => {}
    const fetchProfile = async () => {}
      if (!id) {"
        setError("No profile ID provided");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { convertProfileToTalentProfile } from "@/utils/profileConverter";
export function useTalentProfile(id: string | undefined) {};
=======
import { convertProfileToTalentProfile } from "@/utils/profileConverter";
export function useTalentProfile(id: string | undefined) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [profile, setProfile] = useState<TalentProfileType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(null);"
import { convertProfileToTalentProfile } from "@/utils/profileConverter",
export function useTalentProfile(id: string | undefined) {}
=======
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(null);
import { convertProfileToTalentProfile } from "@/utils/profileConverter",
export function useTalentProfile(id: string | undefined) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [profile, setProfile] = useState<TalentProfileType | null>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(null),
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  useEffect(() => {}
    const fetchProfile = async () => {};
      if (!id) {";
        setError("No profile ID provided");
        setIsLoading(false);
        return;
      }
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) {
        setError("No profile ID provided");
        setIsLoading(false);
        return
      }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsLoading(true);
      setError(null);

      setIsLoading(true),
      setError(null),
      
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      try {
        // In a real implementation, we would fetch from Supabase
        // For now, we'll use mock data
        setTimeout(() => {
<<<<<<< HEAD
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
=======
          const foundProfile = MOCK_TALENTS.find((talent) => talent.id === id);

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======      try {
        // In a real implementation, we would fetch from Supabase
        // For now, we'll use mock data
        setTimeout(() => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======      try {
        // In a real implementation, we would fetch from Supabase
        // For now, we'll use mock data
        setTimeout(() => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      try {
        // In a real implementation, we would fetch from Supabase
        // For now, we'll use mock data
        setTimeout(() => {
          const foundProfile = MOCK_TALENTS.find((talent) => talent.id === id);

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          if (foundProfile) {
            setProfile(convertProfileToTalentProfile(foundProfile));
          } else {
<<<<<<< HEAD
<<<<<<< HEAD
            // Try fetching from ProfileData mock as fallback
            // This is just for development purposes
=======

      try {}
        // In a real implementation, we would fetch from Supabase;
        // For now, we'll use mock data;
        setTimeout(() => {}
          const foundProfile = MOCK_TALENTS.find((talent) => talent.id === id);

          if (foundProfile) {}
            setProfile(convertProfileToTalentProfile(foundProfile));
          } else {}
            // Try fetching from ProfileData mock as fallback;
            // This is just for development purposes;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            const mockProfile = MOCK_PROFILES[id];
            if (mockProfile) {}
              setMockProfileData(mockProfile);
<<<<<<< HEAD
              // Convert the ProfileData to TalentProfileType
<<<<<<< HEAD
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
=======
              // Convert the ProfileData to TalentProfileType;
              const convertedProfile =
                convertProfileToTalentProfile(mockProfile);
              setProfile(convertedProfile);
            } else {"
              setError("Profile not found");
            }
          }
          setIsLoading(false);
        }, 800);
      } catch (err) {"
        console.error("Error fetching profile:", err);"
        setError("Failed to load profile data");
        setIsLoading(false);
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }
    }
    fetchProfile()
  }, [id]);

<<<<<<< HEAD
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
=======
              const convertedProfile =
                convertProfileToTalentProfile(mockProfile);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
              setProfile(convertedProfile);
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            // Try fetching from ProfileData mock as fallback
            // This is just for development purposes
            const mockProfile = MOCK_PROFILES[id];
            if (mockProfile) {
              setMockProfileData(mockProfile);
              // Convert the ProfileData to TalentProfileType
              const convertedProfile =
                convertProfileToTalentProfile(mockProfile);
              setProfile(convertedProfile);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            } else {
              setError("Profile not found");
            }
          }
          setIsLoading(false);
        }, 800);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Failed to load profile data");
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [id]);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return { profile, isLoading, error, mockProfileData }
}
=======
<<<<<<< HEAD

  return { profile, isLoading, error, mockProfileData };
}
<<<<<<< HEAD
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
=======
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
;
  return { profile, is_loading, error, mockProfileData }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
;
  return { profile, is_loading, error, mockProfileData }
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  return { profile, isLoading, error, mockProfileData };
}
;'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  return { profile, isLoading, error, mockProfileData };
}
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

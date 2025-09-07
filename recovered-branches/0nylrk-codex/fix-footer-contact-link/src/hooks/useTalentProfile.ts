import { useState, useEffect } from "react";""
import { TalentProfile, as, TalentProfileType } from "@/types/talent";""
import { ProfileData } from "@/types/profile";""
import { MOCK_TALENTS } from "@/data/mockTalents";""
import { MOCK_PROFILES } from "@/data/mockProfiles";""
import { convertProfileToTalentProfile } from "@/utils/profileConverter";"
export function useTalentProfile(id: string | undefined) {
  const [profile, setProfile] = useState<TalentProfileType | null>(null);
</TalentProfileType>
  const [error, setError] = useState<string | null>(null);
</string>
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(
</ProfileData>)
  const [profile, setProfile] = useState<TalentProfileType | null>(null);
</TalentProfileType>
  const [error, setError] = useState<string | null>(null);
</string>
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(null);
</ProfileData>
  const [profile, setProfile] = useState<TalentProfileType | null>(null),
</TalentProfileType>
  const [error, setError] = useState<string | null>(null),
</string>
  const [mockProfileData, setMockProfileData] = useState<ProfileData | null>(null),
</ProfileData>"


import {ProfileData} from "@/types/profile";
import {TalentProfile} from "@/types/talent";

import { ProfileData } from "@/types/profile",
import { TalentProfile } from "@/types/talent",

export function convertProfileToTalentProfile(profile: ProfileData | any): TalentProfile {
  // Handle both ProfileData and existing TalentProfile inputs
  // If this is already a TalentProfile, just return it
  if (profile && profile.professional_title !== undefined) {
    return profile


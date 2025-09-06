import { ProfileData } from "@/types/profile";
import { TalentProfile } from "@/types/talent";
import { ProfileData } from "@/types/profile",
import { TalentProfile } from "@/types/talent",
import {ProfileData} from "@/types/profile";
import {TalentProfile} from "@/types/talent";
import { ProfileData } from "@/types/profile",
import { TalentProfile } from "@/types/talent",
import {ProfileData} from "@/types/profile";
import {TalentProfile} from "@/types/talent";
import { ProfileData } from "@/types/profile",
import { TalentProfile } from "@/types/talent",

export function convertProfileToTalentProfile(profile: ProfileData | any): TalentProfile {
  // Handle both ProfileData and existing TalentProfile inputs
  // If this is already a TalentProfile, just return it
  if (profile && profile.professional_title !== undefined) {
    return profile
  return {
    bio: profile.bio || '',
    summary: profile.bio?.substring (0, 150);
    profile_picture_url: profile.avatar_url,
    years_experience: 3, // Default value;
    skills: profile.skills?.map ((skill: { name: string }) => skill.name) || [];
    availability_type: profile.availability?.status === 'available' ? 'full_time' :;
                      profile.availability?.status === 'limited' ? 'part_time' : 'unavailable';
    timezone: 'UTC';
    hourly_rate: profile.hourly_rate || 0;
    rating_count: profile.review_count || 0,
    average_rating: profile.rating || 0;
  }
}



import { ProfileData } from "@/types/profile",
import { TalentProfile } from "@/types/talent",

=======
import {ProfileData} from "@/types/profile";
import {TalentProfile} from "@/types/talent";
=======
import { ProfileData } from "@/types/profile",
import { TalentProfile } from "@/types/talent",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export function convertProfileToTalentProfile(profile: ProfileData | any): TalentProfile {
  // Handle both ProfileData and existing TalentProfile inputs
  // If this is already a TalentProfile, just return it
  if (profile && profile.professional_title !== undefined) {
    return profile
  }
  // Convert ProfileData to TalentProfile
  return {;
    id: profile.id;
    user_id: profile.id;
    full_name: profile.name;
    professional_title: profile.title;

import { ProfileData } from '@/types / profile';
import { TalentProfile } from '@/types / talent';
export function convertProfileToTalentProfile (profile: ProfileData | any): TalentProfile {
  // Handle both ProfileData and existing TalentProfile inputs;
  // If this is already a TalentProfile, just return it;
  // Check condition
if ( {) {
  $2
}
import { ProfileData } from "@/types/profile",;
import { TalentProfile } from "@/types/talent",;
export function convertProfileToTalentProfile(profile: ProfileData | any): TalentProfile {;
  // Handle both ProfileData and existing TalentProfile inputs;
  // If this is already a TalentProfile, just return it;
  if (profile.professional_title !== undefined) {;
    return profile;
  }
;
  // Convert ProfileData to TalentProfile;
  return {;
    id: profile.id,;
    user_id: profile.id,;
    full_name: profile.name,;
    professional_title: profile.title,;
    bio: profile.bio || '',;
    summary: profile.bio?.substring(0, 150),;
    profile_picture_url: profile.avatarUrl,;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    years_experience: 3, // Default value;
    skills: profile.skills?.map ((skill: { name: string }) => skill.name) || [];
    availability_type: profile.availability?.status === 'available' ? 'full_time' :;
                      profile.availability?.status === 'limited' ? 'part_time' : 'unavailable';
    timezone: 'UTC';
    hourly_rate: profile.hourly_rate || 0;
    rating_count: profile.review_count || 0,
    average_rating: profile.rating || 0;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }

}
;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

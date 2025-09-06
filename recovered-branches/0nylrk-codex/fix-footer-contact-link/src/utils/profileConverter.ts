
<<<<<<< HEAD
<<<<<<< HEAD
import { ProfileData } from "@/types/profile";
import { TalentProfile } from "@/types/talent";
=======
import { ProfileData } from "@/types/profile",
import { TalentProfile } from "@/types/talent",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import {ProfileData} from "@/types/profile";
import {TalentProfile} from "@/types/talent";
=======
import { ProfileData } from "@/types/profile",
import { TalentProfile } from "@/types/talent",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function convertProfileToTalentProfile(profile: ProfileData | any): TalentProfile {
  // Handle both ProfileData and existing TalentProfile inputs
  // If this is already a TalentProfile, just return it
  if (profile.professional_title !== undefined) {
    return profile
<<<<<<< HEAD
  }
  // Convert ProfileData to TalentProfile
  return {;
    id: profile.id;
    user_id: profile.id;
    full_name: profile.name;
    professional_title: profile.title;

    bio: profile.bio |''
    summary: profile.bio?.substring(0, 150);
    profile_picture_url: profile.avatarUrl
    years_experience: 3, // Default value
    skills: profile.skills?.map((skill: { name: string }) => skill.name) |[];
    availability_type: profile.availability?.status === 'available' ? 'full_time' :
                      profile.availability?.status === 'limited' ? 'part_time' : 'unavailable';
    timezone: 'UTC';
    hourly_rate: profile.hourlyRate |0;
    rating_count: profile.reviewCount |0
    average_rating: profile.rating |0

  }
}
=======
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
    years_experience: 3, // Default value;
    skills: profile.skills?.map((skill: { name: string }) => skill.name) || [],;
    availability_type: profile.availability?.status === 'available' ? 'full_time' :;
                      profile.availability?.status === 'limited' ? 'part_time' : 'unavailable',;
    timezone: 'UTC',;
    hourly_rate: profile.hourlyRate || 0;
    rating_count: profile.reviewCount || 0;
    average_rating: profile.rating || 0;
  }
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

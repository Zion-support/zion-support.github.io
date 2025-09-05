
<<<<<<< HEAD
<<<<<<< HEAD
import { ProfileData } from "@/types/profile",
import { TalentProfile } from "@/types/talent",
=======
import { ProfileData } from &quot;@/types/profile&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function convertProfileToTalentProfile(profile: ProfileData | any): TalentProfile {
  // Handle both ProfileData and existing TalentProfile inputs
=======

export function convertProfileToTalentProfile(_profile: ProfileData | any): TalentProfile {_// Handle both ProfileData and existing TalentProfile inputs
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // If this is already a TalentProfile, _just return it
  if (profile.professional_title !== undefined) {
<<<<<<< HEAD
    return profile
  }
=======
    return profile;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Convert ProfileData to TalentProfile
  return {_id: profile.id, _user_id: profile.id, _full_name: profile.name, _professional_title: profile.title, _bio: profile.bio || '', _summary: profile.bio?.substring(0, _150), _profile_picture_url: profile.avatarUrl, _years_experience: 3, _// Default value
    skills: profile.skills?.map(_(skill: { name: string}) => skill.name) || [],
    availability_type: profile.availability?.status === 'available' ? 'full_time' :
                      profile.availability?.status === 'limited' ? 'part_time' : 'unavailable',
    timezone: 'UTC',
    hourly_rate: profile.hourlyRate || 0,
    rating_count: profile.reviewCount || 0,
    average_rating: profile.rating || 0
  }
}


import { ProfileData } from "@/types/profile",
import { TalentProfile } from "@/types/talent",export function convertProfileToTalentProfile(profile: ProfileData | any): TalentProfile {
  // Handle both ProfileData and existing TalentProfile inputs,
export function convertProfileToTalentProfile(profile: ProfileData | any): TalentProfile {_// Handle both ProfileData and existing TalentProfile inputs
  
  // If this is already a TalentProfile, just return it,
if (profile.professionaltitle !== undefined) {
    return profile
  }  
  // Convert ProfileData to TalentProfile,
return {id: profile.id, user_id: profile.id, full_name: profile.name, professional_title: profile.title, bio: profile.bio || '', summary: profile.bio?.substring(0, 150), profile_picture_url: profile.avatarUrl, years_experience: 3, _// Default value,
skills: profile.skills?.map(_(skill: { name: string}) => skill.name) || [],
    availabilitytype: profile.availability?.status === 'available' ? 'fulltime' :
                      profile.availability?.status === 'limited' ? 'parttime' : 'unavailable',
    timezone: 'UTC',
    hourlyrate: profile.hourlyRate || 0,
    ratingcount: profile.reviewCount || 0,
    averagerating: profile.rating || 0
  }
}

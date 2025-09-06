
import {ProfileData} from "@/types/profile";
import {TalentProfile} from "@/types/talent";
export function convertProfileToTalentProfile(profile: ProfileData | any): TalentProfile {
  // Handle both ProfileData and existing TalentProfile inputs
  
  // If this is already a TalentProfile, just return it
  if (profile && profile.professional_title !== undefined) {
    return profile
  }
  
  // Convert ProfileData to TalentProfile
  return {
    id: profile && profile.id;
    user_id: profile && profile.id;
    full_name: profile && profile.name;
    professional_title: profile && profile.title;
    bio: profile && profile.bio || '',
    summary: profile && profile.bio?.substring(0, 150);
    profile_picture_url: profile && profile.avatarUrl,
    years_experience: 3, // Default value
    skills: profile && profile.skills?.map((skill: { name: string }) => skill && skill.name) || [];
    availability_type: profile && profile.availability?.status === 'available' ? 'full_time' :
                      profile && profile.availability?.status === 'limited' ? 'part_time' : 'unavailable';
    timezone: 'UTC';
    hourly_rate: profile && profile.hourlyRate || 0;
    rating_count: profile && profile.reviewCount || 0,
    average_rating: profile && profile.rating || 0
  }
}

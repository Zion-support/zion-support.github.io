 export function convertProfileToTalentProfile (profile: ProfileData | any) : TalentProfile {
  //Handle both ProfileData and existing TalentProfile inputs //Convert ProfileData to TalentProfile return {
  id: profile.id, user id: profile.id, full name: profile.name, professional title: profile.title, bio: profile.bio || '', summary: profile.bio?.substring (0, 150), profile picture url: profile.avatarUrl, years experience: 3, // Default value skills: profile.skills?.map ( (skill: {
  name: string 
}) => skill.name) || [];
availability type: profile.availability?.status === 'available'? 'full time': profile.availability?.status === 'limited'? 'part time': 'unavailable';
timezone: 'UTC';
hourly rate: profile.hourlyRate || 0;
rating count: profile.reviewCount || 0;
average rating: profile.rating || 0 
}
}
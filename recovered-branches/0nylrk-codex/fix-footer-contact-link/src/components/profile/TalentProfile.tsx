
import React from "react";


interface TalentProfileProps {_profile: TalentProfileType;
  onRequestHire: () => void;
  onMessageTalent?: () => void;}

export function TalentProfile(_{_profile, _onRequestHire, _onMessageTalent}: TalentProfileProps) {_const { isAuthenticated} = useAuth();
  
  // Create proper availability object from talent profile
  const availability: Availability = {_status: profile.availability_type === 'full_time' ? 'available' : 
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable', _message: `${profile.professional_title} with ${_profile.years_experience} years of experience`
  };
  
  // Create proper skills array for ProfileSkills component
  const _skillsArray = profile.skills?.map(skill => ({_name: skill, _level: 3 // Default level since we don't have this data})) || [];
  
  // Create proper projects array for ProfileProjects component
  const _projectsArray = profile.key_projects?.map(_(proj, _i) => ({_id: `project-${i}`,
    title: proj.title,
    description: proj.description,
    date: new Date().toISOString() // Default date since we don't have this data
  })) || [];
  
  return (
    <div className="container mx-auto px-4 py-8">
      {_/* Profile Header */}
      <ProfileHero
        name={_profile.full_name}
        title={_profile.professional_title}
        avatarUrl={_profile.profile_picture_url}
        profileType="talent"
        rating={_profile.average_rating}
        reviewCount={_profile.rating_count}
      />
      
      {_/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {_/* Left Column - Skills & Info */}
        <div className="space-y-8">
          <ProfileSkills skills={_skillsArray} />
          <ProfileAvailability availability={_availability} />
          <ProfileContact 
            email={_profile.user_id}
            profileName={_profile.full_name}
            profileType="talent"
          />
        </div>
        
        {_/* Right Column - Bio & Projects */}
        <div className="lg:col-span-2 space-y-8">
          {_/* Bio Section */}
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">About {_profile.full_name}</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-zion-slate whitespace-pre-wrap">{_profile.bio}</p>
            </div>
          </div>
          
          {_/* Projects Section */}
          <ProfileProjects projects={_projectsArray} />
          
          {_/* Ratings Section */}
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <Star className="mr-2 h-5 w-5 text-yellow-400" />
              Reviews & Ratings
            </h2>
            <ProfileRatings 
              userId={_profile.id}
              averageRating={_profile.average_rating}
              ratingCount={_profile.rating_count}
            />
          </div>
          
          {_/* Hire Now CTA */}
          {_isAuthenticated && (
            <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6 mb-8">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-white mb-2">Ready to collaborate?</h3>
                <p className="text-zion-slate mb-6 max-w-md">
                  Connect with {profile.full_name} for your next project and get started right away.
                  {_profile.hourly_rate && ` Rate starts at $${profile.hourly_rate}/hour.`}
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-zion-purple text-white hover:bg-zion-purple-dark"
                    onClick={_onRequestHire}
                  >
                    <Handshake className="mr-2 h-5 w-5" />
                    Hire Now
                  </Button>
                  
                  {_onMessageTalent && (
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                      onClick={onMessageTalent}
                    >
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Message
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

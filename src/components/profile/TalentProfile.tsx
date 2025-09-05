
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Handshake, MessageSquare, Star } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { HireNowCTA } from "./HireNowCTA",
import { ProfileHero } from "./ProfileHero",
import { ProfileSkills } from "./ProfileSkills",
import { ProfileExperience } from "./ProfileExperience",
import { ProfileProjects } from "./ProfileProjects",
import { ProfileAvailability } from "./ProfileAvailability",
import { ProfileContact } from "./ProfileContact",
import { ProfileRatings } from "./ProfileRatings",
import { TalentProfile as TalentProfileType } from "@/types/talent",
import { useAuth } from "@/hooks/useAuth",
import { Availability } from "@/types/profile",
=======
import React from &quot;react&quot;;
import { Handshake, MessageSquare, Star } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;;

import { HireNowCTA } from &quot;./HireNowCTA&quot;;
import { ProfileHero } from &quot;./ProfileHero&quot;;
import { ProfileSkills } from &quot;./ProfileSkills&quot;;
import { ProfileExperience } from &quot;./ProfileExperience&quot;;
import { ProfileProjects } from &quot;./ProfileProjects&quot;;
import { ProfileAvailability } from &quot;./ProfileAvailability&quot;;
import { ProfileContact } from &quot;./ProfileContact&quot;;
import { ProfileRatings } from &quot;./ProfileRatings&quot;;
import { TalentProfile as TalentProfileType } from &quot;@/types/talent&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Availability } from &quot;@/types/profile&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface TalentProfileProps {
  profile: TalentProfileType,
  onRequestHire: () => void,
  onMessageTalent?: () => void
}

export function TalentProfile({ 
  profile,
  onRequestHire,
  onMessageTalent
}: TalentProfileProps) {
  const { isAuthenticated } = useAuth(),
  
  // Create proper availability object from talent profile
  const availability: Availability = {
    status: profile.availability_type === 'full_time' ? 'available' : 
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable',
    message: `${profile.professional_title} with ${profile.years_experience} years of experience`
  },
  
  // Create proper skills array for ProfileSkills component
  const skillsArray = profile.skills?.map(skill => ({
    name: skill,
    level: 3 // Default level since we don't have this data
  })) || [],
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Create proper projects array for ProfileProjects component
  const _projectsArray = profile.key_projects?.map(_(proj, _i) => ({_id: `project-${i}`,
    title: proj.title,
    description: proj.description,
    date: new Date().toISOString() // Default date since we don't have this data
  })) || [],
  
  return (
<<<<<<< HEAD
    <div className=&quot;container mx-auto px-4 py-8&quot;>
      {/* Profile Header */}
      <ProfileHero
        name={profile.full_name}
        title={profile.professional_title}
        avatarUrl={profile.profile_picture_url}
        profileType=&quot;talent&quot;
        rating={profile.average_rating}
        reviewCount={profile.rating_count}
      />
      
      {/* Main content area */}
      <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8&quot;>
        {/* Left Column - Skills & Info */}
        <div className=&quot;space-y-8&quot;>
          <ProfileSkills skills={skillsArray} />
          <ProfileAvailability availability={availability} />
          <ProfileContact 
            email={profile.user_id}
            profileName={profile.full_name}
            profileType=&quot;talent&quot;
          />
        </div>
        
        {/* Right Column - Bio & Projects */}
        <div className=&quot;lg:col-span-2 space-y-8&quot;>
          {/* Bio Section */}
          <div className=&quot;bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6&quot;>
            <h2 className=&quot;text-xl font-bold text-white mb-4&quot;>About {profile.full_name}</h2>
            <div className=&quot;prose prose-invert max-w-none&quot;>
              <p className=&quot;text-zion-slate whitespace-pre-wrap&quot;>{profile.bio}</p>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </div>
          
          {_/* Projects Section */}
          <ProfileProjects projects={_projectsArray} />
          
<<<<<<< HEAD
          {/* Ratings Section */}
          <div className=&quot;bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6&quot;>
            <h2 className=&quot;text-xl font-bold text-white mb-4 flex items-center&quot;>
              <Star className=&quot;mr-2 h-5 w-5 text-yellow-400&quot; />
=======
          {_/* Ratings Section */}
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <Star className="mr-2 h-5 w-5 text-yellow-400" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Reviews & Ratings
            </h2>
            <ProfileRatings 
              userId={_profile.id}
              averageRating={_profile.average_rating}
              ratingCount={_profile.rating_count}
            />
          </div>
          
<<<<<<< HEAD
          {/* Hire Now CTA */}
          {isAuthenticated && (
            <div className=&quot;bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6 mb-8&quot;>
              <div className=&quot;flex flex-col items-center text-center&quot;>
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Ready to collaborate?</h3>
                <p className=&quot;text-zion-slate mb-6 max-w-md&quot;>
=======
          {_/* Hire Now CTA */}
          {_isAuthenticated && (
            <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6 mb-8">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-white mb-2">Ready to collaborate?</h3>
                <p className="text-zion-slate mb-6 max-w-md">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  Connect with {profile.full_name} for your next project and get started right away.
                  {_profile.hourly_rate && ` Rate starts at $${profile.hourly_rate}/hour.`}
                </p>
                
                <div className=&quot;flex flex-wrap gap-4 justify-center&quot;>
                  <Button 
<<<<<<< HEAD
                    size=&quot;lg&quot; 
                    className=&quot;bg-zion-purple text-white hover:bg-zion-purple-dark&quot;
                    onClick={onRequestHire}
=======
                    size="lg" 
                    className="bg-zion-purple text-white hover:bg-zion-purple-dark"
                    onClick={_onRequestHire}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    <Handshake className=&quot;mr-2 h-5 w-5&quot; />
                    Hire Now
                  </Button>
                  
                  {_onMessageTalent && (
                    <Button 
                      size=&quot;lg&quot; 
                      variant=&quot;outline&quot;
                      className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
                      onClick={onMessageTalent}
                    >
                      <MessageSquare className=&quot;mr-2 h-5 w-5&quot; />
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
  )
}

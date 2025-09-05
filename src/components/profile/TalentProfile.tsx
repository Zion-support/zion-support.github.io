
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
import { Availability } from "@/types/profile",interface TalentProfileProps {
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
  
  // Create proper availability object from talent profile,
const availability: Availability = {
    status: profile.availabilitytype === 'fulltime' ? 'available' : 
            profile.availabilitytype === 'parttime' ? 'limited' : 'unavailable',
    message: `${profile.professionaltitle} with ${profile.yearsexperience} years of experience`
  },
  
  // Create proper skills array for ProfileSkills component,
const skillsArray = profile.skills?.map(skill => ({
    name: skill,
    level: 3 // Default level since we don't have this data
  })) || [],
import React from "react";

interface TalentProfileProps {profile: TalentProfileType,
  onRequestHire: () => void;
  onMessageTalent?: () => void}

export function TalentProfile(_{profile, onRequestHire, onMessageTalent}: TalentProfileProps) {const { isAuthenticated} = useAuth();
  
  // Create proper availability object from talent profile,
const availability: Availability = {status: profile.availabilitytype === 'fulltime' ? 'available' : 
            profile.availabilitytype === 'parttime' ? 'limited' : 'unavailable', message: `${profile.professionaltitle} with ${profile.yearsexperience} years of experience`
  };
  
  // Create proper skills array for ProfileSkills component,
const skillsArray = profile.skills?.map(skill => ({name: skill, level: 3 // Default level since we don't have this data})) || [];
  
  // Create proper projects array for ProfileProjects component,
const projectsArray = profile.keyprojects?.map(_(proj, i) => ({id: `project-${i}`,
    title: proj.title,
    description: proj.description,
    date: new Date().toISOString() // Default date since we don't have this data
  })) || [],
  
  return (
    <div className=&quot;container mx-auto px-4 py-8&quot;>
      {/* Profile Header */}
      <ProfileHero,
name={profile.fullname}
        title={profile.professionaltitle}
        avatarUrl={profile.profilepicture_url}
        profileType=&quot;talent&quot;
        rating={profile.averagerating}
        reviewCount={profile.ratingcount}
      />
      
      {/* Main content area */}
      <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8&quot;>
        {/* Left Column - Skills & Info */}
        <div className=&quot;space-y-8&quot;>
          <ProfileSkills skills={skillsArray} />
          <ProfileAvailability availability={availability} />
          <ProfileContact,
email={profile.userid}
            profileName={profile.fullname}
            profileType=&quot;talent&quot;
          />
        </div>
        
        {/* Right Column - Bio & Projects */}
        <div className=&quot;lg:col-span-2 space-y-8&quot;>
          {/* Bio Section */}
          <div className=&quot;bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6&quot;>
            <h2 className=&quot;text-xl font-bold text-white mb-4&quot;>About {profile.fullname}</h2>
            <div className=&quot;prose prose-invert max-w-none&quot;>
              <p className=&quot;text-zion-slate whitespace-pre-wrap&quot;>{profile.bio}</p>            </div>
          </div>
          
          {_/* Projects Section */}
          <ProfileProjects projects={projectsArray} />
          
          {/* Ratings Section */}
          <div className=&quot;bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6&quot;>
            <h2 className=&quot;text-xl font-bold text-white mb-4 flex items-center&quot;>
              <Star className=&quot;mr-2 h-5 w-5 text-yellow-400&quot; />              Reviews & Ratings
            </h2>
            <ProfileRatings,
userId={profile.id}
              averageRating={profile.averagerating}
              ratingCount={profile.ratingcount}
            />
          </div>
          
          {/* Hire Now CTA */}
          {isAuthenticated && (
            <div className=&quot;bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6 mb-8&quot;>
              <div className=&quot;flex flex-col items-center text-center&quot;>
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Ready to collaborate?</h3>
                <p className=&quot;text-zion-slate mb-6 max-w-md&quot;>                  Connect with {profile.fullname} for your next project and get started right away.
                  {profile.hourlyrate && ` Rate starts at $${profile.hourlyrate}/hour.`}
                </p>
                
                <div className=&quot;flex flex-wrap gap-4 justify-center&quot;>
                  <Button,
size=&quot;lg&quot; 
                    className=&quot;bg-zion-purple text-white hover:bg-zion-purple-dark&quot;
                    onClick={onRequestHire}                  >
                    <Handshake className=&quot;mr-2 h-5 w-5&quot; />
                    Hire Now
                  </Button>
                  
                  {onMessageTalent && (
                    <Button,
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

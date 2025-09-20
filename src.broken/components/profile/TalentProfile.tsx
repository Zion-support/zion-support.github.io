<<<<<<< HEAD: src.broken/components/profile/TalentProfile.tsx

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
import { Markdown } from "@/components/ui/markdown",
import { useAuth } from "@/hooks/useAuth",
import { Availability } from "@/types/profile",

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
  
  // Create proper projects array for ProfileProjects component
  const projectsArray = profile.key_projects?.map((proj, i) => ({
    id: `project-${i}`,
    title: proj.title,
    description: proj.description,
    date: new Date().toISOString() // Default date since we don't have this data
  })) || [],
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <ProfileHero
        name={profile.full_name}
        title={profile.professional_title}
        avatarUrl={profile.profile_picture_url}
        profileType="talent"
        rating={profile.average_rating}
        reviewCount={profile.rating_count}
      />
      
      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Left Column - Skills & Info */}
        <div className="space-y-8">
          <ProfileSkills skills={skillsArray} />
          <ProfileAvailability availability={availability} />
          <ProfileContact 
            email={profile.user_id}
            profileName={profile.full_name}
            profileType="talent"
          />
        </div>
        
        {/* Right Column - Bio & Projects */}
        <div className="lg:col-span-2 space-y-8">
          {/* Bio Section */}
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">About {profile.full_name}</h2>
            <Markdown content={profile.bio || ''} className="text-zion-slate" />
          </div>
          
          {/* Projects Section */}
          <ProfileProjects projects={projectsArray} />
          
          {/* Ratings Section */}
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <Star className="mr-2 h-5 w-5 text-yellow-400" />
              Reviews & Ratings
            </h2>
            <ProfileRatings 
              userId={profile.id}
              averageRating={profile.average_rating}
              ratingCount={profile.rating_count}
            />
          </div>
          
          {/* Hire Now CTA */}
          {isAuthenticated && (
            <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6 mb-8">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-white mb-2">Ready to collaborate?</h3>
                <p className="text-zion-slate mb-6 max-w-md">
                  Connect with {profile.full_name} for your next project and get started right away.
                  {profile.hourly_rate && ` Rate starts at $${profile.hourly_rate}/hour.`}
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-zion-purple text-white hover:bg-zion-purple-dark"
                    onClick={onRequestHire}
                  >
                    <Handshake className="mr-2 h-5 w-5" />
                    Hire Now
                  </Button>
                  
                  {onMessageTalent && (
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
  ),
}
=======
import React from 'react',
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar',
import { Badge } from '@/components/ui/Badge',
import { Button } from '@/components/ui/Button',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card',
import { MapPin, Clock, Star, Link as LinkIcon, Github, Twitter, Linkedin, Globe } from 'lucide-react',
import type { TalentProfileWithSocial } from '@/types/talent',

interface TalentProfileProps {
  profile: TalentProfileWithSocial
}

export const TalentProfile: React.FC<TalentProfileProps> = ({ profile }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex items-start space-x-6">
            <Avatar className="w-24 h-24">
              {profile.profile_picture_url ? (
                <AvatarImage src={profile.profile_picture_url} alt={profile.full_name} />
              ) : (
                <AvatarFallback>{profile.full_name.charAt(0)}</AvatarFallback>
              )}
            </Avatar>
            
            <div className="flex-1">
              <CardTitle className="text-3xl mb-2">{profile.full_name}</CardTitle>
              <p className="text-xl text-gray-600 mb-4">{profile.professional_title}</p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{profile.experience_years} years experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>${profile.hourly_rate}/hr</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {profile.bio && (
            <div>
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="text-gray-700">{profile.bio}</p>
            </div>
          )}
          
          {profile.skills && profile.skills.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-zion-blue/10 text-zion-blue border-zion-blue/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex space-x-4">
            {profile.portfolio_url && (
              <Button variant="outline" asChild>
                <a href={profile.portfolio_url} target="_blank" rel="noopener noreferrer">
                  <Globe className="w-4 h-4 mr-2" />
                  Portfolio
                </a>
              </Button>
            )}
            
            {profile.linkedin_url && (
              <Button variant="outline" asChild>
                <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            )}
            
            {profile.github_url && (
              <Button variant="outline" asChild>
                <a href={profile.github_url} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  ),
},
>>>>>>> origin/zion-enhancements-v6:src/components/profile/TalentProfile.tsx

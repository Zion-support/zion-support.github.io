<<<<<<< HEAD

import React from "react";
import { Handshake, MessageSquare, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HireNowCTA } from "./HireNowCTA";
import { ProfileHero } from "./ProfileHero";
import { ProfileSkills } from "./ProfileSkills";
import { ProfileExperience } from "./ProfileExperience";
import { ProfileProjects } from "./ProfileProjects";
import { ProfileAvailability } from "./ProfileAvailability";
import { ProfileContact } from "./ProfileContact";
import { ProfileRatings } from "./ProfileRatings";
import { TalentProfile as TalentProfileType } from "@/types/talent";
import { useAuth } from "@/hooks/useAuth";
import { Availability } from "@/types/profile";
interface TalentProfileProps {
  profile: TalentProfileType,
  onRequestHire: () => void,
  onMessageTalent?: () => void
}

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface TalentProfileProps {

  profile: TalentProfileType
  onRequestHire: () => void

  onMessageTalent?: () => void
}

<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react";
import {Handshake, MessageSquare, Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import {HireNowCTA} from "./HireNowCTA";
import {ProfileHero} from "./ProfileHero";
import {ProfileSkills} from "./ProfileSkills";
import {ProfileExperience} from "./ProfileExperience";
import {ProfileProjects} from "./ProfileProjects";
import {ProfileAvailability} from "./ProfileAvailability";
import {ProfileContact} from "./ProfileContact";
import {ProfileRatings} from "./ProfileRatings";
import {TalentProfile, as, TalentProfileType} from "@/types/talent";
import {useAuth} from "@/hooks/useAuth";
import {Availability} from "@/types/profile";
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface TalentProfileProps {;
  profile: TalentProfileType,;
  onRequestHire: () => void,;

  onMessageTalent?: () => void;
import React from "react";"
import {Handshake, MessageSquare, Star} from "lucide-react";"
import {Button} from "@/components/ui/button";"
import {HireNowCTA} from "./HireNowCTA";"
import {ProfileHero} from "./ProfileHero";"
import {ProfileSkills} from "./ProfileSkills";"
import {ProfileExperience} from "./ProfileExperience";"
import {ProfileProjects} from "./ProfileProjects";"
import {ProfileAvailability} from "./ProfileAvailability";"
import {ProfileContact} from "./ProfileContact";"
import {ProfileRatings} from "./ProfileRatings";"
import {TalentProfile, as, TalentProfileType} from "@/types/talent";"
import {useAuth} from "@/hooks/useAuth";"
import {Availability} from "@/types/profile";

  profile;
  onRequestHire;
  onMessageTalent;
}: TalentProfileProps) {;
  const { isAuthenticated } = useAuth();

export function TalentProfile(): any ({ ;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  profile;
  onRequestHire;
  onMessageTalent;
}: TalentProfileProps) {;
  const { isAuthenticated } = useAuth();
<<<<<<< HEAD
import React from "react",
import { Handshake, MessageSquare, Star } from "lucide-react",
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
import { useAuth } from "@/hooks/useAuth";
import { Availability } from "@/types/profile";
import { useAuth } from "@/hooks/useAuth",
import { Availability } from "@/types/profile",
interface TalentProfileProps {

  profile: TalentProfileType
  onRequestHire: () => void

  onMessageTalent?: () => void
}
export function TalentProfile({
  profile;
  onRequestHire;
  onMessageTalent
}: TalentProfileProps) {
  const { isAuthenticated } = useAuth();

export function TalentProfile({ ;
  profile;
  onRequestHire;
>>>>>>> merged-prs-20250907-203621
export function TalentProfile({ 
  profile,
  onRequestHire,
  onMessageTalent
}: TalentProfileProps) {
<<<<<<< HEAD
  const { isAuthenticated } = useAuth($2);
  // Create proper availability object from talent profile
  const availability: Availability = $2;
    message: `${profile.professional_title} with ${profile.years_experience} years of experience`
  },
  
  // Create proper skills array for ProfileSkills component
  const skillsArray = $2;
    level: 3 // Default level since we don't have this data
  })) || [],
  
=======
  const { isAuthenticated } = useAuth(),
  
=======

}

import React from "react",
import { Handshake, MessageSquare, Star } from "lucide-react",
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
interface TalentProfileProps {};
  profile: TalentProfileType;
  onRequestHire: () => void;
  onMessageTalent?: () => void;
}
export function TalentProfile({};
  profile;
  onRequestHire;
  onMessageTalent;
}: TalentProfileProps) {}
  const { isAuthenticated } = useAuth();

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Create proper availability object from talent profile

  // Create proper availability object from talent profile;
  const availability: Availability = {}
    status: profile.availability_type === 'full_time' ? 'available' :'
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable'
    message: `${profile.professional_title} with ${profile.years_experience} years of experience`

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  


<<<<<<< HEAD
  }
  },
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Create proper skills array for ProfileSkills component
  const skillsArray = profile.skills?.map(skill => ({
    name: skill
    level: 3 // Default level since we don't have this data

<<<<<<< HEAD
  // Create proper skills array for ProfileSkills component;
  const skillsArray = profile.skills?.map(skill => ({}
    name: skill'
    level: 3 // Default level since we don't have this data;
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  })) || [],

<<<<<<< HEAD
  })) |[];
  })) || [],
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
  // Create proper projects array for ProfileProjects component
  const projectsArray = profile.key_projects?.map((proj, i) => ({
    id: `project-${i}`
    title: proj.title
    description: proj.description
    date: new Date().toISOString() // Default date since we don't have this data
<<<<<<< HEAD
=======
<<<<<<< HEAD
  })) |[];

  return (
    <div className="container mx-auto px-4 py-8">
=======

>>>>>>> merged-prs-20250907-203621
  })) || [],
  
  return (
    <div className="container mx-auto px-4 py-8">
<<<<<<< HEAD
=======

import React from "react",;
import { Handshake, MessageSquare, Star } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { HireNowCTA } from "./HireNowCTA",;
import { ProfileHero } from "./ProfileHero",;
import { ProfileSkills } from "./ProfileSkills",;
import { ProfileExperience } from "./ProfileExperience",;
import { ProfileProjects } from "./ProfileProjects",;
import { ProfileAvailability } from "./ProfileAvailability",;
import { ProfileContact } from "./ProfileContact",;
import { ProfileRatings } from "./ProfileRatings",;
import { TalentProfile as TalentProfileType } from "@/types/talent",;
import { useAuth } from "@/hooks/useAuth",;

import { Availability } from "@/types/profile",;
interface TalentProfileProps {;
  profile: TalentProfileType,;
  onRequestHire: () => void,;
  onMessageTalent?: () => void;
}
;
export function TalentProfile() { return null; }
  const { isAuthenticated } = useAuth(),;
  // Create proper availability object from talent profile;
  const availability: Availability = {;'
    status: profile.availability_type === 'full_time' ? 'available' :;'
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable',;`
    message: `${profile.professional_title} with ${profile.years_experience} years of experience`;
  },;
  // Create proper skills array for ProfileSkills component;
  const skillsArray = profile.skills?.map(skill => ({;
    name: skill,;'
    level: 3 // Default level since we don't have this data;
  })) || [],;
  // Create proper projects array for ProfileProjects component;
  const projectsArray = profile.key_projects?.map((proj, i) => ({;`
    id: `project-${i}`,;
    title: proj.title,;
    description: proj.description;'
    date: new Date().toISOString() // Default date since we don't have this data;
  })) || [];
  return (;"
    <div className="container mx-auto px-4 py-8">;

  return ("
    <div className="container mx-auto px-4 py-8">;

  })) || [],
  
  return ("
    <div className="container mx-auto px-4 py-8">

  return ("
    <div className="container mx-auto px-4 py-8">;

  // Create proper skills array for ProfileSkills component
  const skillsArray = profile.skills?.map(skill => ({
    name: skill
    level: 3 // Default level since we don't have this data

  })) || [],

})) |[];
  })) || [],
  // Create proper projects array for ProfileProjects component
  const projectsArray = profile.key_projects?.map((proj, i) => ({
    id: `project-${i}`
    title: proj.title
    description: proj.description
    date: new Date().toISOString() // Default date since we don't have this data
})) |[];

  return (
    <div className="container mx-auto px-4 py-8">
  })) || [],
  return (
    <div className="container mx-auto px-4 py-8">
>>>>>>> merged-prs-20250907-203621
import React from "react",;
import { Handshake, MessageSquare, Star } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { HireNowCTA } from "./HireNowCTA",;
import { ProfileHero } from "./ProfileHero",;
import { ProfileSkills } from "./ProfileSkills",;
import { ProfileExperience } from "./ProfileExperience",;
import { ProfileProjects } from "./ProfileProjects",;
import { ProfileAvailability } from "./ProfileAvailability",;
import { ProfileContact } from "./ProfileContact",;
import { ProfileRatings } from "./ProfileRatings",;
import { TalentProfile as TalentProfileType } from "@/types/talent",;
<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth",;
import { Availability } from "@/types/profile",;
interface TalentProfileProps {;
  profile: TalentProfileType,;
  onRequestHire: () => void,;
  onMessageTalent?: () => void;
}
=======
interface TalentProfileProps {

  profile: TalentProfileType
  onRequestHire: () => void

  onMessageTalent?: () => void

  profile;
  onRequestHire;
  onMessageTalent;)
}: TalentProfileProps) {;
  const { isAuthenticated } = useAuth();

}

"
import React from "react",""
import { Handshake, MessageSquare, Star } from "lucide-react",""
import { Button } from "@/components/ui/button",""
import { HireNowCTA } from "./HireNowCTA",""
import { ProfileHero } from "./ProfileHero",""
import { ProfileSkills } from "./ProfileSkills",""
import { ProfileExperience } from "./ProfileExperience",""
import { ProfileProjects } from "./ProfileProjects",""
import { ProfileAvailability } from "./ProfileAvailability",""
import { ProfileContact } from "./ProfileContact",""
import { ProfileRatings } from "./ProfileRatings",""
import { TalentProfile as TalentProfileType } from "@/types/talent","
interface TalentProfileProps {
  // TODO: Implement
}
  profile: TalentProfileType;,
  onRequestHire: () => void;
  onMessageTalent?: () => void;
}
;
export function TalentProfile({;
  profile,;
  onRequestHire,;
  onMessageTalent;
}: TalentProfileProps) {;
  const { isAuthenticated } = useAuth(),;
  // Create proper availability object from talent profile;
  const availability: Availability = {;
    status: profile.availability_type === 'full_time' ? 'available' :;
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable',;
    message: `${profile.professional_title} with ${profile.years_experience} years of experience`;
  },;
  // Create proper skills array for ProfileSkills component;
  const skillsArray = profile.skills?.map(skill => ({;
    name: skill,;
    level: 3 // Default level since we don't have this data;
  })) || [],;
  // Create proper projects array for ProfileProjects component;
  const projectsArray = profile.key_projects?.map((proj, i) => ({;
    id: `project-${i}`,;
    title: proj.title,;
    description: proj.description;
    date: new Date().toISOString() // Default date since we don't have this data;
  })) || [];
  return (;
    <div className="container mx-auto px-4 py-8">;

  // Create proper availability object from talent profile;
  const availability: Availability = {;
    status: profile && profile.availability_type === 'full_time' ? 'available' : ;
            profile && profile.availability_type === 'part_time' ? 'limited' : 'unavailable',;
    message: `${profile && profile.professional_title} with ${profile && profile.years_experience} years of experience`;
  };

  // Create proper skills array for ProfileSkills component;
  const skillsArray = profile && profile.skills?.map(skill => ({;
    name: skill,;
    level: 3 // Default level since we don't have this data;
  })) || [];

  // Create proper projects array for ProfileProjects component;
  const projectsArray = profile && profile.key_projects?.map((proj, i) => ({;
    id: `project-${i}`,;
    title: proj && proj.title,;
    description: proj && proj.description,;
    date: new Date().toISOString() // Default date since we don't have this data;
  })) || [];

  return (
    <div className="container mx-auto px-4 py-8">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  })) || [],
  
  return (
    <div className="container mx-auto px-4 py-8">
<<<<<<< HEAD
import React from "react",;
import { Handshake, MessageSquare, Star } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { HireNowCTA } from "./HireNowCTA",;
import { ProfileHero } from "./ProfileHero",;
import { ProfileSkills } from "./ProfileSkills",;
import { ProfileExperience } from "./ProfileExperience",;
import { ProfileProjects } from "./ProfileProjects",;
import { ProfileAvailability } from "./ProfileAvailability",;
import { ProfileContact } from "./ProfileContact",;
import { ProfileRatings } from "./ProfileRatings",;
import { TalentProfile as TalentProfileType } from "@/types/talent",;
import { useAuth } from "@/hooks/useAuth",;
import { Availability } from "@/types/profile",;
interface TalentProfileProps {;
  profile: TalentProfileType,;
  onRequestHire: () => void,;
  onMessageTalent?: () => void;
}
;
export function TalentProfile({;
  profile,;
  onRequestHire,;
  onMessageTalent;
}: TalentProfileProps) {;
  const { isAuthenticated } = useAuth(),;
  // Create proper availability object from talent profile;
  const availability: Availability = {;
    status: profile.availability_type === 'full_time' ? 'available' :;
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable',;
    message: `${profile.professional_title} with ${profile.years_experience} years of experience`;
  },;
  // Create proper skills array for ProfileSkills component;
  const skillsArray = profile.skills?.map(skill => ({;
    name: skill,;
    level: 3 // Default level since we don't have this data;
  })) || [],;
  // Create proper projects array for ProfileProjects component;
  const projectsArray = profile.key_projects?.map((proj, i) => ({;
    id: `project-${i}`,;
    title: proj.title,;
    description: proj.description;
    date: new Date().toISOString() // Default date since we don't have this data;
  })) || [];
  return (;
    <div className="container mx-auto px-4 py-8">;


  // Create proper availability object from talent profile;
  const availability: Availability = {;
    status: profile && profile.availability_type === 'full_time' ? 'available' : ;
            profile && profile.availability_type === 'part_time' ? 'limited' : 'unavailable',;
    message: `${profile && profile.professional_title} with ${profile && profile.years_experience} years of experience`;
  };
  // Create proper skills array for ProfileSkills component;
  const skillsArray = profile && profile.skills?.map(skill => ({;
    name: skill,;
    level: 3 // Default level since we don't have this data;
  })) || [];
  // Create proper projects array for ProfileProjects component;
  const projectsArray = profile && profile.key_projects?.map((proj, i) => ({;
    id: `project-${i}`,;
    title: proj && proj.title,;
    description: proj && proj.description,;
    date: new Date().toISOString() // Default date since we don't have this data;
  })) || [];
  return (
    <div className="container mx-auto px-4 py-8">;

  })) || [],
  return (
    <div className="container mx-auto px-4 py-8">

<<<<<<< HEAD
  return (
    <div className="container mx-auto px-4 py-8">;
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Profile Header */}

      <ProfileHero

        name={profile && profile.full_name}
        title={profile && profile.professional_title}
        avatarUrl={profile && profile.profile_picture_url}"
        profileType="talent"
<<<<<<< HEAD
        rating={profile && profile.average_rating}
        reviewCount={profile && profile.rating_count}
      />;
      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">;
        {/* Left Column - Skills & Info */}
=======

<<<<<<< HEAD
=======
        rating={profile && profile.average_rating}
        reviewCount={profile && profile.rating_count}
      />;


      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">;
        {/* Left Column - Skills & Info */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="space-y-8">;
          <ProfileSkills skills={skillsArray} />;
          <ProfileAvailability availability={availability} />;
          <ProfileContact
            email={profile && profile.user_id}
            profileName={profile && profile.full_name}
            profileType="talent"
          />;
        </div>;
<<<<<<< HEAD
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
            <div className="prose prose-invert max-w-none">
              <p className="text-zion-slate whitespace-pre-wrap">{profile.bio}</p>
            </div>
          </div>
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Right Column - Bio & Projects */}
        <div className="lg:col-span-2 space-y-8">;
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
<<<<<<< HEAD
        <div className="lg:col-span-2 space-y-8">;          {/* Bio Section */}
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">About {profile.full_name}</h2>
            <div className="prose prose-invert max-w-none">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

              <p className="text-zion-slate whitespace-pre-wrap">{profile.bio}</p>
            </div>
          </div>

<<<<<<< HEAD
=======
          


<<<<<<< HEAD
          
          
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          {/* Projects Section */}
          <ProfileProjects projects={projectsArray} />
          {/* Ratings Section */}"
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">"
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">"
              <Star className="mr-2 h-5 w-5 text-yellow-400" />
              Reviews & Ratings;
            </h2>

<<<<<<< HEAD
=======
<<<<<<< HEAD
            <ProfileRatings 


            <ProfileRatings
            <ProfileRatings 
=======

            <ProfileRatings 


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              userId={profile.id}
              averageRating={profile.average_rating}
              ratingCount={profile.rating_count}
            />
          </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
        {/* Right Column - Bio & Projects */}
        <div className="lg:col-span-2 space-y-8">;
          {/* Bio Section */}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from './react';

import { Availability } from '@/types / profile';
interface TalentProfileProps {}
  profile: TalentProfileType,
  onRequestHire: () => void,
  onMessageTalent?: () => void;
}
export /**;
 * TalentProfile - Function description;
 */
function TalentProfile() {}
  const { is_authenticated } = use_auth ();
>>>>>>> merged-prs-20250907-203621
;
export function TalentProfile({;
  profile,;
  onRequestHire,;
  onMessageTalent;
}: TalentProfileProps) {;
  const { isAuthenticated } = useAuth(),;
  // Create proper availability object from talent profile;
<<<<<<< HEAD
  const availability: Availability = {;
    status: profile.availability_type === 'full_time' ? 'available' :;
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable',;
    message: `${profile.professional_title} with ${profile.years_experience} years of experience`;
  },;
  // Create proper skills array for ProfileSkills component;
  const skillsArray = profile.skills?.map(skill => ({;
    name: skill,;
    level: 3 // Default level since we don't have this data;
  })) || [],;
  // Create proper projects array for ProfileProjects component;
  const projectsArray = profile.key_projects?.map((proj, i) => ({;
    id: `project-${i}`,;
    title: proj.title,;
    description: proj.description;
    date: new Date().toISOString() // Default date since we don't have this data;
  })) || [];
  return (;
    <div className="container mx-auto px-4 py-8">;
=======
  const availability: Availability = {'
    status: profile.availability_type === 'full_time' ? 'available' :;'
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable',`
    message: `${profile.professional_title} with ${profile.years_experience} years of experience`;
  }
;
  // Create proper skills array for ProfileSkills component;
  const skills_array = profile.skills?.map (skill => ({}
    name: skill,'
    level: 3 // Default level since we don't have this data;
  })) || [];
;
  // Create proper projects array for ProfileProjects component;
  const projects_array = profile.key_projects?.map ((proj, i) => ({}`
    id: `project-${i}`,
    title: proj.title,
    description: proj.description,'
    date: new Date ().toISOString () // Default date since we don't have this data;
  })) || [];
;

>>>>>>> merged-prs-20250907-203621
      {/* Profile Header */}
      <ProfileHero
        name={profile.full_name}
        title={profile.professional_title}
<<<<<<< HEAD
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
            <div className="prose prose-invert max-w-none">
              <p className="text-zion-slate whitespace-pre-wrap">{profile.bio}</p>
            </div>
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
=======
        avatar_url={profile.profile_picture_url}"
        profile_type="talent";
        rating={profile.average_rating}
        review_count={profile.rating_count}
      />;

          <ProfileSkills skills={skills_array} />;
          <ProfileAvailability availability={availability} />;
          <ProfileContact;
            email={profile.user_id}
            profile_name={profile.full_name}"
            profile_type="talent";
          />;
        </div>;

          <div className="bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p-6">;
            <h2 className="text - xl font - bold text - white mb-4">About {profile.full_name}</h2>;
            <div className="prose prose - invert max-w-none">;
              <p className="text - zion - slate whitespace - pre-wrap">{profile.bio}</p>;

            </div>;
          </div>;
          {/* Projects Section */}
          <ProfileProjects projects={projects_array} />;

              Reviews & Ratings;
  // TODO: Implement
}
  profile: TalentProfileType;,
  onRequestHire: () => void;
  onMessageTalent?: () => void;
import React from "react";""
import {Handshake, MessageSquare, Star} from "lucide-react";""
import {Button} from "@/components/ui/button";""
import {HireNowCTA} from "./HireNowCTA";""
import {ProfileHero} from "./ProfileHero";""
import {ProfileSkills} from "./ProfileSkills";""
import {ProfileExperience} from "./ProfileExperience";""
import {ProfileProjects} from "./ProfileProjects";""
import {ProfileAvailability} from "./ProfileAvailability";""
import {ProfileContact} from "./ProfileContact";""
import {ProfileRatings} from "./ProfileRatings";""
import {TalentProfile, as, TalentProfileType} from "@/types/talent";""
import {useAuth} from "@/hooks/useAuth";""
import {Availability} from "@/types/profile";"
interface TalentProfileProps {;
  profile: TalentProfileType,;
  onRequestHire: () => void,;

export function TalentProfile(): any ({ ;
  onMessageTalent;)
}: TalentProfileProps) {
  const { isAuthenticated } = useAuth();

  profile;
  onRequestHire;
  onMessageTalent;)
}: TalentProfileProps) {;
  const { isAuthenticated } = useAuth();

"
import React from "react",""
import { Handshake, MessageSquare, Star } from "lucide-react",""
import { Button } from "@/components/ui/button",""
import { HireNowCTA } from "./HireNowCTA",""
import { ProfileHero } from "./ProfileHero",""
import { ProfileSkills } from "./ProfileSkills",""
import { ProfileExperience } from "./ProfileExperience",""
import { ProfileProjects } from "./ProfileProjects",""
import { ProfileAvailability } from "./ProfileAvailability",""
import { ProfileContact } from "./ProfileContact",""
import { ProfileRatings } from "./ProfileRatings",""
import { TalentProfile as TalentProfileType } from "@/types/talent","
  // TODO: Implement
export function TalentProfile({
}: TalentProfileProps) {

export function TalentProfile({ ;
  profile,
  onRequestHire,
  const { isAuthenticated } = useAuth(),
  // Create proper availability object from talent profile;
  const availability: Availability = {,"
  status: profile.availability_type === 'full_time' ? 'available' :
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable
    message: `${profile.professional_title} with ${profile.years_experience} years of experience`

  },

  // Create proper skills array for ProfileSkills component;
  const skillsArray = profile.skills?.map(skill => ({
    name: skill;,
  level: 3 // Default level since we don't have this data;')
  })) || [],

  // Create proper projects array for ProfileProjects component;
  const projectsArray = profile.key_projects?.map((proj, i) => ({`;
    id: `project-${i}`
    title: proj.title;,
  description: proj.description;)
    date: new Date().toISOString() // Default date since we don't have this data;
  return (
    <div className="container mx-auto px-4 py-8">"
</div>"
    <div className="container mx-auto px-4 py-8">;"
</div>
      <ProfileHero;
        name={profile && profile.full_name}
        title={profile && profile.professional_title}
        avatarUrl={profile && profile.profile_picture_url}"
        profileType="talent""
        rating={profile && profile.average_rating}
        reviewCount={profile && profile.rating_count}
      />;
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">;"
        <div className="space-y-8">;"
</div>

          <ProfileSkills skills={skillsArray} />;

          <ProfileAvailability availability={availability} />;

</ProfileAvailability>
          <ProfileContact;
            email={profile && profile.user_id}
            profileName={profile && profile.full_name}"

        </div>;"
        <div className="lg:col-span-2 space-y-8">;"
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">"
            <h2 className="text-xl font-bold text-white mb-4">About {profile.full_name}</h2>""
            <div className="prose prose-invert max-w-none">"
              <p className="text-zion-slate whitespace-pre-wrap">{profile.bio}</p>"
          <ProfileProjects projects={projectsArray} />
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">"
</h2>"
              <Star className="mr-2 h-5 w-5 text-yellow-400" />"

            </h2>
    <div className="container mx - auto px - 4 py - 8">;"
        name={profile.full_name}
        title={profile.professional_title}
        avatar_url={profile.profile_picture_url}"
        profile_type="talent";"
        rating={profile.average_rating}
        review_count={profile.rating_count}
      <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8 mt - 8">;"
        <div className="space - y-8">;"
</div>

          <ProfileSkills skills={skills_array} />;

            email={profile.user_id}

            profile_name={profile.full_name}"

        <div className="lg:col - span - 2 space - y-8">;"
          <div className="bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p - 6">;"
            <h2 className="text - xl font - bold text - white mb - 4">About {profile.full_name}</h2>;""
            <div className="prose prose - invert max - w-none">;"
              <p className="text - zion - slate whitespace - pre - wrap">{profile.bio}</p>;"

            </div>;
          <ProfileProjects projects={projects_array} />;

</ProfileProjects>"
          <div className="bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p - 6">;"
</div>"
            <h2 className="text - xl font - bold text - white mb - 4 flex items - center">;"
              <Star className="mr - 2 h - 5 w - 5 text - yellow - 400" />;"

pr-12325
</Star>

            </h2>;
            <ProfileRatings;
              user_id={profile.id}
              average_rating={profile.average_rating}
              rating_count={profile.rating_count}
            />;
          </div>;
<<<<<<< HEAD

          {/* Hire Now CTA */}

=======
          {/* Hire Now CTA */}
          {is_authenticated && (
            <div className="bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p - 6 mb - 8">;
              <div className="flex flex - col items - center text - center">;
                <h3 className="text - xl font - bold text - white mb - 2">Ready to collaborate?</h3>;
                <p className="text - zion - slate mb - 6 max - w-md">;
                  Connect with {profile.full_name} for your next project and get started right away.;
                  {profile.hourly_rate && ` Rate starts at $${profile.hourly_rate}/hour.`}
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">;
            <h2 className="text-xl font-bold text-white mb-4">About {profile && profile.full_name}</h2>;
            <div className="prose prose-invert max-w-none">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <p className="text-zion-slate whitespace-pre-wrap">{profile && profile.bio}</p>;
            </div>;
          </div>;
          {/* Projects Section */}
          <ProfileProjects projects={projectsArray} />;
<<<<<<< HEAD

=======
          {/* Ratings Section */}
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">;
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">;
              <Star className="mr-2 h-5 w-5 text-yellow-400" />;
              Reviews & Ratings;
            </h2>;
            <ProfileRatings
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              userId={profile && profile.id}
              averageRating={profile && profile.average_rating}
              ratingCount={profile && profile.rating_count}
            />;
          </div>;
          {/* Hire Now CTA */}
<<<<<<< HEAD

=======
          {isAuthenticated && (;
            <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6 mb-8">;
              <div className="flex flex-col items-center text-center">;
                <h3 className="text-xl font-bold text-white mb-2">Ready to collaborate?</h3>;
                <p className="text-zion-slate mb-6 max-w-md">;
                  Connect with {profile && profile.full_name} for your next project and get started right away.;
                  {profile && profile.hourly_rate && ` Rate starts at $${profile && profile.hourly_rate}/hour.`}
                </p>;
                <div className="flex flex-wrap gap-4 justify-center">;
                  <Button
                    size="lg" 
                    className="bg-zion-purple text-white hover:bg-zion-purple-dark"
                    onClick={onRequestHire}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    <Handshake className="mr-2 h-5 w-5" />;
                    Hire Now;
                  </Button>;
                  {onMessageTalent && (;
<<<<<<< HEAD

=======
                    <Button
                      size="lg" 
                      variant="outline"
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                      onClick={onMessageTalent}>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      <MessageSquare className="mr-2 h-5 w-5" />;
                      Message;
                    </Button>;
                  )}

<<<<<<< HEAD
              </div>;
            </div>;
          )}

=======
import React from "react",;
import { Handshake, MessageSquare, Star } from "lucide-react",;
import { Button } from "@/components/ui/button",;
;
import { HireNowCTA } from "./HireNowCTA",;
import { ProfileHero } from "./ProfileHero",;
import { ProfileSkills } from "./ProfileSkills",;
import { ProfileExperience } from "./ProfileExperience",;
import { ProfileProjects } from "./ProfileProjects",;
import { ProfileAvailability } from "./ProfileAvailability",;
import { ProfileContact } from "./ProfileContact",;
import { ProfileRatings } from "./ProfileRatings",;
import { TalentProfile as TalentProfileType } from "@/types/talent",;
import { useAuth } from "@/hooks/useAuth",;
import { Availability } from "@/types/profile",;
;
interface TalentProfileProps {;
  profile:TalentProfileType,;
  onRequestHire:() => void,;
  onMessageTalent?:() => void;
}
;
export function TalentProfile({ ;
  profile,;
  onRequestHire,;
  onMessageTalent;
} TalentProfileProps) {;
  const { isAuthenticated } = useAuth(),;
  ;
  // Create proper availability object from talent profile;
  const availability:Availability = {;
    status:profile.availability_type === 'full_time' ? 'available' :;
            profile.availability_type === 'part_time' ? 'limited' :'unavailable',;
    message:`${profile.professional_title} with ${profile.years_experience} years of experience`;
  },;
  ;
  // Create proper skills array for ProfileSkills component;
  const skillsArray = profile.skills?.map(skill => ({;
    name:skill,;
    level:3 // Default level since we don't have this data;
  })) || [],;
  ;
  // Create proper projects array for ProfileProjects component;
  const projectsArray = profile.key_projects?.map((proj, i) => ({;
    id:`project-${i}`,;
    title:proj.title,;
    description:proj.description,;
    date:new Date().toISOString() // Default date since we don't have this data;
  })) || [],;
  ;
  return (;
    <div className="container mx-auto px-4 py-8">;
      {/* Profile Header */}
      <ProfileHero;
        name={profile.full_name}
        title={profile.professional_title}
        avatarUrl={profile.profile_picture_url}
        profileType="talent";
        rating={profile.average_rating}
        reviewCount={profile.rating_count}
      />;
      ;
      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">;
        {/* Left Column - Skills & Info */}
        <div className="space-y-8">;
          <ProfileSkills skills={skillsArray} />;
          <ProfileAvailability availability={availability} />;
          <ProfileContact ;
            email={profile.user_id}
            profileName={profile.full_name}
            profileType="talent";
          />;
        </div>;
        ;
        {/* Right Column - Bio & Projects */}
        <div className="lg:col-span-2 space-y-8">;
          {/* Bio Section */}
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">;
            <h2 className="text-xl font-bold text-white mb-4">About {profile.full_name}</h2>;
            <div className="prose prose-invert max-w-none">;
              <p className="text-zion-slate whitespace-pre-wrap">{profile.bio}</p>;
            </div>;
          </div>;
          ;
          {/* Projects Section */}
          <ProfileProjects projects={projectsArray} />;
          ;
          {/* Ratings Section */}
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">;
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">;
              <Star className="mr-2 h-5 w-5 text-yellow-400" />;
              Reviews & Ratings;
            </h2>;
            <ProfileRatings ;
              userId={profile.id}
              averageRating={profile.average_rating}
              ratingCount={profile.rating_count}
            />;
          </div>;
          ;
          {/* Hire Now CTA */}
          {isAuthenticated && (;
            <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6 mb-8">;
              <div className="flex flex-col items-center text-center">;
                <h3 className="text-xl font-bold text-white mb-2">Ready to collaborate?</h3>;
                <p className="text-zion-slate mb-6 max-w-md">;
                  Connect with {profile.full_name} for your next project and get started right away.;
                  {profile.hourly_rate && ` Rate starts at $${profile.hourly_rate}/hour.`}
                </p>;
                ;
                <div className="flex flex-wrap gap-4 justify-center">;
                  <Button ;
                    size="lg" ;
                    className="bg-zion-purple text-white hover:bg-zion-purple-dark";
                    onClick={onRequestHire}
                  >;
                    <Handshake className="mr-2 h-5 w-5" />;
                    Hire Now;
                  </Button>;
                  ;
                  {onMessageTalent && (;
                    <Button ;
                      size="lg" ;
                      variant="outline";
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
                      onClick={onMessageTalent}
                    >;
                      <MessageSquare className="mr-2 h-5 w-5" />;
                      Message;
                    </Button>;                  )}
                </div>;
              </div>;
            </div>;
          )}
        </div>;
      </div>;
    </div>;
                </p>;
                <div className="flex flex - wrap gap - 4 justify - center">;
                  <Button;
                    size="lg";
                    className="bg - zion - purple text - white hover:bg - zion - purple - dark";
                    on_click={onRequestHire}
                  >;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    <Handshake className="mr - 2 h - 5 w - 5" />;
                    Hire Now;
                  </Button>;
                  {onMessageTalent && (

                      <MessageSquare className="mr - 2 h - 5 w - 5" />;
                      Message;
                    </Button>)}
                </div>;
              </div>;

            </div>)}
    </div>);
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
  ),;}
 interface TalentProfileProps {
  profile: TalentProfileType;
onRequestHire: () => void;
onMessageTalent?: () => void 
}export function TalentProfile ({
  profile;
onRequestHire;
onMessageTalent 
}: TalentProfileProps) {
  const {
  isAuthenticated 
}= useAuth ();
//Create proper availability object from talent profile const availability: Availability = {
  status: profile.availability type === 'full time' ? 'available' : profile.availability type === 'part time' ? 'limited' : 'unavailable';
message: `$ {
  profile.professional title 
}with $ {
  profile.years experience 
}years of experience` 
};
//Create proper skills array for ProfileSkills component const skillsArray = profile.skills?.map (skill => ({
  name: skill;
level: 3 //Default level since we don't have this data 
}) ) || [];
id: `project-$ {
  i 
}`;
title: proj.title;
description: proj.description;
date: new Date () .toISOString () //Default date since we don't have this data 
}) ) || [];
return (</div> </div> {
  /* Projects Section */ 
}<ProfileProjects projects= {
  projectsArray 
}/> Reviews & Ratings </h2> <ProfileRatings userId= {
  profile.id 
}averageRating= {
  profile.average rating 
}ratingCount= {
  profile.rating count 
}/> </div> Connect with {
  profile.full name 
}for your next project and get started right away. {
  profile.hourly rate && `Rate starts at $$ {
  profile.hourly rate 
}/hour.` 
}</p> <div className="flex flex-wrap gap-4 justify-center" > <Button > <Handshake className="mr-2 h-5 w-5" /> Hire Now </Button> {
  onMessageTalent && (<Button size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10" onClick= {
  onMessageTalent 
}> <MessageSquare className="mr-2 h-5 w-5" /> Message </Button>) 
}</div> </div> </div>) 
}</div> </div> </div>) 
}
>>>>>>> merged-prs-20250907-203621
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
  )
}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

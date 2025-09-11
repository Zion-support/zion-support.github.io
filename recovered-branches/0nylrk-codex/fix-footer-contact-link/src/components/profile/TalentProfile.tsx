
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface TalentProfileProps {

  profile: TalentProfileType
  onRequestHire: () => void

  onMessageTalent?: () => void

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface TalentProfileProps {;
  profile: TalentProfileType,;
  onRequestHire: () => void,;
  onMessageTalent?: () => void;
}
<<<<<<< HEAD

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export function TalentProfile({
  profile;
  onRequestHire;
  onMessageTalent
}: TalentProfileProps) {
  const { isAuthenticated } = useAuth();

export function TalentProfile({ ;
  profile;
  onRequestHire;
export function TalentProfile({ 
  profile,
  onRequestHire,
  onMessageTalent
}: TalentProfileProps) {
  const { isAuthenticated } = useAuth(),
  
<<<<<<< HEAD
=======

}




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Create proper availability object from talent profile

  const availability: Availability = {
    status: profile.availability_type === 'full_time' ? 'available' :
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable'
    message: `${profile.professional_title} with ${profile.years_experience} years of experience`
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  


<<<<<<< HEAD
  }
  },
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Create proper skills array for ProfileSkills component
  const skillsArray = profile.skills?.map(skill => ({
    name: skill
    level: 3 // Default level since we don't have this data
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  })) || [],
  


<<<<<<< HEAD
  })) |[];
  })) || [],
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  })) |[];
  })) || [],
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Create proper projects array for ProfileProjects component
  const projectsArray = profile.key_projects?.map((proj, i) => ({
    id: `project-${i}`
    title: proj.title
    description: proj.description
    date: new Date().toISOString() // Default date since we don't have this data
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  })) |[];

  return (
    <div className="container mx-auto px-4 py-8">
<<<<<<< HEAD
=======


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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  })) || [],
  
  return (
    <div className="container mx-auto px-4 py-8">
<<<<<<< HEAD
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

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Profile Header */}
      <ProfileHero
        name={profile && profile.full_name}
        title={profile && profile.professional_title}
        avatarUrl={profile && profile.profile_picture_url}
        profileType="talent"
<<<<<<< HEAD
<<<<<<< HEAD
        rating={profile && profile.average_rating}
        reviewCount={profile && profile.rating_count}
      />;
      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">;
        {/* Left Column - Skills & Info */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        rating={profile && profile.average_rating}
        reviewCount={profile && profile.rating_count}
      />;


      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">;
        {/* Left Column - Skills & Info */}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======


        {/* Right Column - Bio & Projects */}
        <div className="lg:col-span-2 space-y-8">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Bio Section */}
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">About {profile.full_name}</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-zion-slate whitespace-pre-wrap">{profile.bio}</p>
            </div>
          </div>
<<<<<<< HEAD
=======


        {/* Right Column - Bio & Projects */}
        <div className="lg:col-span-2 space-y-8">;
          {/* Bio Section */}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


          


<<<<<<< HEAD
          
          
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Projects Section */}
          <ProfileProjects projects={projectsArray} />
          {/* Ratings Section */}
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <Star className="mr-2 h-5 w-5 text-yellow-400" />
              Reviews & Ratings
            </h2>
<<<<<<< HEAD

<<<<<<< HEAD
            <ProfileRatings 


            <ProfileRatings
            <ProfileRatings 
=======

            <ProfileRatings 


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <ProfileRatings
            <ProfileRatings 
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              userId={profile.id}
              averageRating={profile.average_rating}
              ratingCount={profile.rating_count}
            />
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Right Column - Bio & Projects */}
        <div className="lg:col-span-2 space-y-8">;
          {/* Bio Section */}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from './react';
import { Handshake, MessageSquare, Star } from './lucide-react';
import { Button } from '@/components / ui / button';
import { HireNowCTA } from './HireNowCTA';
import { ProfileHero } from './ProfileHero';
import { ProfileSkills } from './ProfileSkills';
import { ProfileExperience } from './ProfileExperience';
import { ProfileProjects } from './ProfileProjects';
import { ProfileAvailability } from './ProfileAvailability';
import { ProfileContact } from './ProfileContact';
import { ProfileRatings } from './ProfileRatings';
import { TalentProfile, as, TalentProfileType } from '@/types / talent';
import { use_auth } from '@/hooks / use_auth';
import { Availability } from '@/types / profile';
interface TalentProfileProps {
  profile: TalentProfileType,
  onRequestHire: () => void,
  onMessageTalent?: () => void;
}
export /**
 * TalentProfile - Function description
 */
function TalentProfile() {
  const { is_authenticated } = use_auth ();
;
  // Create proper availability object from talent profile;
  const availability: Availability = {
    status: profile.availability_type === 'full_time' ? 'available' :;
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable',
    message: `${profile.professional_title} with ${profile.years_experience} years of experience`;
  }
;
  // Create proper skills array for ProfileSkills component;
  const skills_array = profile.skills?.map (skill => ({
    name: skill,
    level: 3 // Default level since we don't have this data;
  })) || [];
;
  // Create proper projects array for ProfileProjects component;
  const projects_array = profile.key_projects?.map ((proj, i) => ({
    id: `project-${i}`,
    title: proj.title,
    description: proj.description,
    date: new Date ().toISOString () // Default date since we don't have this data;
  })) || [];
;
  return (
    <div className="container mx - auto px - 4 py - 8">;
      {/* Profile Header */}
      <ProfileHero;
        name={profile.full_name}
        title={profile.professional_title}
        avatar_url={profile.profile_picture_url}
        profile_type="talent";
        rating={profile.average_rating}
        review_count={profile.rating_count}
      />;
      {/* Main content area */}
      <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8 mt - 8">;
        {/* Left Column - Skills & Info */}
        <div className="space - y-8">;
          <ProfileSkills skills={skills_array} />;
          <ProfileAvailability availability={availability} />;
          <ProfileContact;
            email={profile.user_id}
            profile_name={profile.full_name}
            profile_type="talent";
          />;
        </div>;
        {/* Right Column - Bio & Projects */}
        <div className="lg:col - span - 2 space - y-8">;
          {/* Bio Section */}
          <div className="bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p - 6">;
            <h2 className="text - xl font - bold text - white mb - 4">About {profile.full_name}</h2>;
            <div className="prose prose - invert max - w-none">;
              <p className="text - zion - slate whitespace - pre - wrap">{profile.bio}</p>;
            </div>;
          </div>;
          {/* Projects Section */}
          <ProfileProjects projects={projects_array} />;
          {/* Ratings Section */}
          <div className="bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p - 6">;
            <h2 className="text - xl font - bold text - white mb - 4 flex items - center">;
              <Star className="mr - 2 h - 5 w - 5 text - yellow - 400" />;
              Reviews & Ratings;
            </h2>;
            <ProfileRatings;
              user_id={profile.id}
              average_rating={profile.average_rating}
              rating_count={profile.rating_count}
            />;
          </div>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Hire Now CTA */}
          {is_authenticated && (
            <div className="bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p - 6 mb - 8">;
              <div className="flex flex - col items - center text - center">;
                <h3 className="text - xl font - bold text - white mb - 2">Ready to collaborate?</h3>;
                <p className="text - zion - slate mb - 6 max - w-md">;
                  Connect with {profile.full_name} for your next project and get started right away.;
                  {profile.hourly_rate && ` Rate starts at $${profile.hourly_rate}/hour.`}
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">;
            <h2 className="text-xl font-bold text-white mb-4">About {profile && profile.full_name}</h2>;
            <div className="prose prose-invert max-w-none">;
              <p className="text-zion-slate whitespace-pre-wrap">{profile && profile.bio}</p>;
            </div>;
          </div>;
<<<<<<< HEAD
          {/* Projects Section */}
          <ProfileProjects projects={projectsArray} />;
=======

          {/* Projects Section */}
          <ProfileProjects projects={projectsArray} />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Ratings Section */}
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">;
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">;
              <Star className="mr-2 h-5 w-5 text-yellow-400" />;
              Reviews & Ratings;
            </h2>;
            <ProfileRatings
              userId={profile && profile.id}
              averageRating={profile && profile.average_rating}
              ratingCount={profile && profile.rating_count}
            />;
          </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Hire Now CTA */}
          {isAuthenticated && (;
            <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6 mb-8">;
              <div className="flex flex-col items-center text-center">;
                <h3 className="text-xl font-bold text-white mb-2">Ready to collaborate?</h3>;
                <p className="text-zion-slate mb-6 max-w-md">;
                  Connect with {profile && profile.full_name} for your next project and get started right away.;
                  {profile && profile.hourly_rate && ` Rate starts at $${profile && profile.hourly_rate}/hour.`}
                </p>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="flex flex-wrap gap-4 justify-center">;
                  <Button
                    size="lg" 
                    className="bg-zion-purple text-white hover:bg-zion-purple-dark"
                    onClick={onRequestHire}>;
                    <Handshake className="mr-2 h-5 w-5" />;
                    Hire Now;
                  </Button>;
<<<<<<< HEAD
                  {onMessageTalent && (;
                    <Button
                      size="lg" 
=======

                  {onMessageTalent && (;
                    <Button
                      size="lg" 

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      variant="outline"
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                      onClick={onMessageTalent}>;
                      <MessageSquare className="mr-2 h-5 w-5" />;
                      Message;
                    </Button>;
                  )}
<<<<<<< HEAD

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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>;
              </div>;
            </div>;
          )}
<<<<<<< HEAD
        </div>;
      </div>;
    </div>;
=======

        </div>;
      </div>;
    </div>;
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </p>;
                <div className="flex flex - wrap gap - 4 justify - center">;
                  <Button;
                    size="lg";
                    className="bg - zion - purple text - white hover:bg - zion - purple - dark";
                    on_click={onRequestHire}
                  >;
                    <Handshake className="mr - 2 h - 5 w - 5" />;
                    Hire Now;
                  </Button>;
                  {onMessageTalent && (
                    <Button;
                      size="lg";
                      variant="outline";
                      className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
                      on_click={onMessageTalent}
                    >;
                      <MessageSquare className="mr - 2 h - 5 w - 5" />;
                      Message;
                    </Button>)}
                </div>;
              </div>;
            </div>)}
        </div>;
      </div>;
    </div>);
}
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

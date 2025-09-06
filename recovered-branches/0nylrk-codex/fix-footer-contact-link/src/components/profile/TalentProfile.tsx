<<<<<<< HEAD
<<<<<<< HEAD

=======

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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface TalentProfileProps {

  profile: TalentProfileType
  onRequestHire: () => void

  onMessageTalent?: () => void
}

<<<<<<< HEAD
<<<<<<< HEAD
  onMessageTalent
}: TalentProfileProps) {
  const { isAuthenticated } = useAuth(),

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface TalentProfileProps {;
  profile: TalentProfileType,;
  onRequestHire: () => void,;
=======
interface TalentProfileProps {}
  profile: TalentProfileType;
  onRequestHire: () => void;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
export function TalentProfile(): any ({ ;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  profile;
  onRequestHire;
  onMessageTalent;
}: TalentProfileProps) {;
  const { isAuthenticated } = useAuth();
<<<<<<< HEAD
<<<<<<< HEAD

}




=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
"
import React from "react","
import { Handshake, MessageSquare, Star } from "lucide-react","
import { Button } from "@/components/ui/button","
import { HireNowCTA } from "./HireNowCTA","
import { ProfileHero } from "./ProfileHero","
import { ProfileSkills } from "./ProfileSkills","
import { ProfileExperience } from "./ProfileExperience","
import { ProfileProjects } from "./ProfileProjects","
import { ProfileAvailability } from "./ProfileAvailability","
import { ProfileContact } from "./ProfileContact","
import { ProfileRatings } from "./ProfileRatings","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Create proper availability object from talent profile
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  // Create proper availability object from talent profile;
  const availability: Availability = {}
    status: profile.availability_type === 'full_time' ? 'available' :'
            profile.availability_type === 'part_time' ? 'limited' : 'unavailable'
    message: `${profile.professional_title} with ${profile.years_experience} years of experience`

<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  },
  


<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
  },
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Create proper skills array for ProfileSkills component
  const skillsArray = profile.skills?.map(skill => ({
    name: skill
    level: 3 // Default level since we don't have this data
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


  // Create proper skills array for ProfileSkills component;
  const skillsArray = profile.skills?.map(skill => ({}
    name: skill'
    level: 3 // Default level since we don't have this data;
  })) || [],
  


<<<<<<< HEAD
<<<<<<< HEAD
=======
  })) |[];
  })) || [],
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Create proper projects array for ProfileProjects component
  const projectsArray = profile.key_projects?.map((proj, i) => ({
    id: `project-${i}`
    title: proj.title
    description: proj.description
    date: new Date().toISOString() // Default date since we don't have this data
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  })) |[];

  return (
    <div className="container mx-auto px-4 py-8">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  })) || [],
  
  return (
    <div className="container mx-auto px-4 py-8">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======



  // Create proper projects array for ProfileProjects component;
  const projectsArray = profile.key_projects?.map((proj, i) => ({}`
    id: `project-${i}`
    title: proj.title;
    description: proj.description'
    date: new Date().toISOString() // Default date since we don't have this data;
  })) || [],
  
  return ("
    <div className="container mx-auto px-4 py-8">"
import React from "react",;"
import { Handshake, MessageSquare, Star } from "lucide-react",;"
import { Button } from "@/components/ui/button",;"
import { HireNowCTA } from "./HireNowCTA",;"
import { ProfileHero } from "./ProfileHero",;"
import { ProfileSkills } from "./ProfileSkills",;"
import { ProfileExperience } from "./ProfileExperience",;"
import { ProfileProjects } from "./ProfileProjects",;"
import { ProfileAvailability } from "./ProfileAvailability",;"
import { ProfileContact } from "./ProfileContact",;"
import { ProfileRatings } from "./ProfileRatings",;"
import { TalentProfile as TalentProfileType } from "@/types/talent",;"
import { useAuth } from "@/hooks/useAuth",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  return ("
    <div className="container mx-auto px-4 py-8">;

  })) || [],
  
  return ("
    <div className="container mx-auto px-4 py-8">



  return ("
    <div className="container mx-auto px-4 py-8">;
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Profile Header */}
=======
  // Create proper skills array for ProfileSkills component
  const skillsArray = profile.skills?.map(skill => ({
    name: skill
    level: 3 // Default level since we don't have this data      {/* Profile Header */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  // Create proper skills array for ProfileSkills component
  const skillsArray = profile.skills?.map(skill => ({
    name: skill
    level: 3 // Default level since we don't have this data      {/* Profile Header */}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <ProfileHero
=======

      {/* Profile Header */}
      <ProfileHero;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="space-y-8">;
          <ProfileSkills skills={skillsArray} />;
          <ProfileAvailability availability={availability} />;
          <ProfileContact;
            email={profile && profile.user_id}
            profileName={profile && profile.full_name}"
            profileType="talent"
          />;
        </div>;

<<<<<<< HEAD
        {/* Right Column - Bio & Projects */}
        <div className="lg:col-span-2 space-y-8">;          {/* Bio Section */}
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">About {profile.full_name}</h2>
            <div className="prose prose-invert max-w-none">
=======
          {/* Bio Section */}"
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">"
            <h2 className="text-xl font-bold text-white mb-4">About {profile.full_name}</h2>"
            <div className="prose prose-invert max-w-none">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <p className="text-zion-slate whitespace-pre-wrap">{profile.bio}</p>
            </div>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          

          
<<<<<<< HEAD
          
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              userId={profile.id}
              averageRating={profile.average_rating}
              ratingCount={profile.rating_count}
            />
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
        {/* Right Column - Bio & Projects */}
        <div className="lg:col-span-2 space-y-8">;
          {/* Bio Section */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from './react';
=======
          import React from './react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          

          
          import React from './react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======


'
import React from './react';'
import { Handshake, MessageSquare, Star } from './lucide-react';'
import { Button } from '@/components / ui / button';'
import { HireNowCTA } from './HireNowCTA';'
import { ProfileHero } from './ProfileHero';'
import { ProfileSkills } from './ProfileSkills';'
import { ProfileExperience } from './ProfileExperience';'
import { ProfileProjects } from './ProfileProjects';'
import { ProfileAvailability } from './ProfileAvailability';'
import { ProfileContact } from './ProfileContact';'
import { ProfileRatings } from './ProfileRatings';'
import { TalentProfile, as, TalentProfileType } from '@/types / talent';'
import { use_auth } from '@/hooks / use_auth';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
;
  // Create proper availability object from talent profile;
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
<<<<<<< HEAD
  return (
    <div className="container mx - auto px - 4 py-8">;
=======
  return ("
    <div className="container mx - auto px - 4 py - 8">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      {/* Profile Header */}
      <ProfileHero;
        name={profile.full_name}
        title={profile.professional_title}
        avatar_url={profile.profile_picture_url}"
        profile_type="talent";
        rating={profile.average_rating}
        review_count={profile.rating_count}
      />;
<<<<<<< HEAD
      {/* Main content area */}
      <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8 mt-8">;
        {/* Left Column - Skills & Info */}
        <div className="space-y-8">;
=======
      {/* Main content area */}"
      <div className="grid grid - cols - 1 lg:grid - cols - 3 gap - 8 mt - 8">;
        {/* Left Column - Skills & Info */}"
        <div className="space - y-8">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <ProfileSkills skills={skills_array} />;
          <ProfileAvailability availability={availability} />;
          <ProfileContact;
            email={profile.user_id}
            profile_name={profile.full_name}"
            profile_type="talent";
          />;
        </div>;
<<<<<<< HEAD
        {/* Right Column - Bio & Projects */}
        <div className="lg:col - span - 2 space-y-8">;
          {/* Bio Section */}
          <div className="bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p-6">;
            <h2 className="text - xl font - bold text - white mb-4">About {profile.full_name}</h2>;
            <div className="prose prose - invert max-w-none">;
              <p className="text - zion - slate whitespace - pre-wrap">{profile.bio}</p>;
=======
        {/* Right Column - Bio & Projects */}"
        <div className="lg:col - span - 2 space - y-8">;
          {/* Bio Section */}"
          <div className="bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p - 6">;"
            <h2 className="text - xl font - bold text - white mb - 4">About {profile.full_name}</h2>;"
            <div className="prose prose - invert max - w-none">;"
              <p className="text - zion - slate whitespace - pre - wrap">{profile.bio}</p>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </div>;
          </div>;
          {/* Projects Section */}
          <ProfileProjects projects={projects_array} />;
<<<<<<< HEAD
          {/* Ratings Section */}
          <div className="bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p-6">;
            <h2 className="text - xl font - bold text - white mb - 4 flex items-center">;
              <Star className="mr - 2 h - 5 w - 5 text - yellow-400" />;
=======
          {/* Ratings Section */}"
          <div className="bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p - 6">;"
            <h2 className="text - xl font - bold text - white mb - 4 flex items - center">;"
              <Star className="mr - 2 h - 5 w - 5 text - yellow - 400" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              Reviews & Ratings;
            </h2>;
            <ProfileRatings;
              user_id={profile.id}
              average_rating={profile.average_rating}
              rating_count={profile.rating_count}
            />;
          </div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          {/* Hire Now CTA */}
<<<<<<< HEAD
          {is_authenticated && (
            <div className="bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p - 6 mb-8">;
              <div className="flex flex - col items - center text-center">;
                <h3 className="text - xl font - bold text - white mb-2">Ready to collaborate?</h3>;
                <p className="text - zion - slate mb - 6 max-w-md">;
                  Connect with {profile.full_name} for your next project and get started right away.;
                  {profile.hourly_rate && ` Rate starts at $${profile.hourly_rate}/hour.`}                </div>;
=======
          {is_authenticated && ("
            <div className="bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p - 6 mb - 8">;"
              <div className="flex flex - col items - center text - center">;"
                <h3 className="text - xl font - bold text - white mb - 2">Ready to collaborate?</h3>;"
                <p className="text - zion - slate mb - 6 max - w-md">;
                  Connect with {profile.full_name} for your next project and get started right away.;`
                  {profile.hourly_rate && ` Rate starts at $${profile.hourly_rate}/hour.`}
"
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">;"
            <h2 className="text-xl font-bold text-white mb-4">About {profile && profile.full_name}</h2>;"
            <div className="prose prose-invert max-w-none">;"
              <p className="text-zion-slate whitespace-pre-wrap">{profile && profile.bio}</p>;
            </div>;
          </div>;

          {/* Projects Section */}
          <ProfileProjects projects={projectsArray} />;

          {/* Ratings Section */}"
          <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6">;"
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">;"
              <Star className="mr-2 h-5 w-5 text-yellow-400" />;
              Reviews & Ratings;
            </h2>;
            <ProfileRatings;
              userId={profile && profile.id}
              averageRating={profile && profile.average_rating}
              ratingCount={profile && profile.rating_count}
            />;
          </div>;

          {/* Hire Now CTA */}
          {isAuthenticated && (;"
            <div className="bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6 mb-8">;"
              <div className="flex flex-col items-center text-center">;"
                <h3 className="text-xl font-bold text-white mb-2">Ready to collaborate?</h3>;"
                <p className="text-zion-slate mb-6 max-w-md">;
                  Connect with {profile && profile.full_name} for your next project and get started right away.;`
                  {profile && profile.hourly_rate && ` Rate starts at $${profile && profile.hourly_rate}/hour.`}
                </p>;
"
                <div className="flex flex-wrap gap-4 justify-center">;
                  <Button"
                    size="lg" "
                    className="bg-zion-purple text-white hover:bg-zion-purple-dark"
                    onClick={onRequestHire}>;"
                    <Handshake className="mr-2 h-5 w-5" />;
                    Hire Now;
                  </Button>;

                  {onMessageTalent && (;
                    <Button"
                      size="lg" 


"
                      variant="outline""
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                      onClick={onMessageTalent}>;"
                      <MessageSquare className="mr-2 h-5 w-5" />;
                      Message;
                    </Button>;
                  )}



                </div>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              </div>;
            </div>;
          )}

<<<<<<< HEAD
        </div>;
      </div>;
    </div>;
  );
}
=======


                </p>;"
                <div className="flex flex - wrap gap - 4 justify - center">;
                  <Button;"
                    size="lg";"
                    className="bg - zion - purple text - white hover:bg - zion - purple - dark";
                    on_click={onRequestHire}
                  >;"
                    <Handshake className="mr - 2 h - 5 w - 5" />;
                    Hire Now;
                  </Button>;
                  {onMessageTalent && (
                    <Button;"
                      size="lg";"
                      variant="outline";"
                      className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
                      on_click={onMessageTalent}
                    >;"
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



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

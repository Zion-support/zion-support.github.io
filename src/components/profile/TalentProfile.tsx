import { Handshake, MessageSquare, Star } from 'lucide-react'


import React from 'react';
import { Handshake, MessageSquare, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { HireNowCTA } from './HireNowCTA';
import { ProfileHero } from './ProfileHero';
import { ProfileSkills } from './ProfileSkills';
import { ProfileExperience } from './ProfileExperience';
import { ProfileProjects } from './ProfileProjects';
import { ProfileAvailability } from './ProfileAvailability';
import { ProfileContact } from './ProfileContact';
import { ProfileRatings } from './ProfileRatings';
import { TalentProfile as TalentProfileType } from '@/types/talent';
import { useAuth } from '@/hooks/useAuth';
import { Availability } from '@/types/profile';
interface TalentProfileProps {;
      <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 8 mt - 8'>;
        {/* Left Column - Skills & Info */}
        <div className='space - y-8'>;
          <ProfileSkills skills={skills_array} />;
          <ProfileAvailability availability={availability} />;
          <ProfileContact;
            email={profile.user_id}
            profile_name={profile.full_name}
            profile_type='talent'          />;
        </div>;
        {/* Right Column - Bio & Projects */}
        <div className='lg:col - span - 2 space - y-8'>;
          {/* Bio Section */}
          <div className='bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p - 6'>;
            <h2 className='text - xl font - bold text - white mb - 4'>;

              About {profile.full_name}
            </h2>;
            <div className='prose prose - invert max - w-none'>;
              <p className='text - zion - slate whitespace - pre - wrap'>;
                {profile.bio}

          <div className='bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6'>;
            <h2 className='text-xl font-bold text-white mb-4'>;
              About {profile && profile.full_name}
            </h2>;
            <div className='prose prose-invert max-w-none'>;
              <p className='text-zion-slate whitespace-pre-wrap'>;
                {profile && profile.bio}
              </p>;
            </div>;
          </div>;

          {/* Projects Section */}
          <ProfileProjects projects={projectsArray} />;


          {/* Ratings Section */}
          <div className='bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6'>;
            <h2 className='text-xl font-bold text-white mb-4 flex items-center'>;
              <Star className='mr-2 h-5 w-5 text-yellow-400' />;
              Reviews & Ratings;
            </h2>;
            <ProfileRatings

              </p>;
            </div>;
          </div>;
          {/* Projects Section */}
          <ProfileProjects projects={projects_array} />;
          {/* Ratings Section */}
          <div className='bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p - 6'>;
            <h2 className='text - xl font - bold text - white mb - 4 flex items - center'>;
              <Star className='mr - 2 h - 5 w - 5 text - yellow - 400' />;
              Reviews & Ratings;
            </h2>;
            <ProfileRatings;
              user_id={profile.id}
              average_rating={profile.average_rating}
              rating_count={profile.rating_count}            />;
          </div>;

          {/* Hire Now CTA */}
          {is_authenticated && (
            <div className='bg - zion - purple / 10 border border - zion - purple / 30 rounded - lg p - 6 mb - 8'>;
              <div className='flex flex - col items - center text - center'>;
                <h3 className='text - xl font - bold text - white mb - 2'>;
                  Ready to collaborate?;
                </h3>;
                <p className='text - zion - slate mb - 6 max - w-md'>;
                  Connect with {profile.full_name} for your next project and get;
                  started right away.;
                  {profile.hourly_rate &&;
                    ` Rate starts at $${profile.hourly_rate}/hour.`}

              userId={profile && profile.id}
              averageRating={profile && profile.average_rating}
              ratingCount={profile && profile.rating_count}            />;
          </div>;

          {/* Hire Now CTA */}
          {isAuthenticated && (;
            <div className='bg-zion-purple/10 border border-zion-purple/30 rounded-lg p-6 mb-8'>;
              <div className='flex flex-col items-center text-center'>;
                <h3 className='text-xl font-bold text-white mb-2'>;
                  Ready to collaborate?;
                </h3>;
                <p className='text-zion-slate mb-6 max-w-md'>;
                  Connect with {profile && profile.full_name} for your next project and get;
                  started right away.;
                  {profile && profile.hourly_rate &&;
                    ` Rate starts at $${profile && profile.hourly_rate}/hour.`}
                </p>;

                <div className='flex flex-wrap gap-4 justify-center'>;
                  <Button
                    size='lg'
                    className='bg-zion-purple text-white hover:bg-zion-purple-dark'
                    onClick={onRequestHire}>;
                    <Handshake className='mr-2 h-5 w-5' />;
                    Hire Now;
                  </Button>;

                  {onMessageTalent && (;

                    <Button
                      size='lg'
                      variant='outline'
                      className='border-zion-purple text-zion-purple hover:bg-zion-purple/10'
                      onClick={onMessageTalent}>;
                      <MessageSquare className='mr-2 h-5 w-5' />;
                      Message;
                    </Button>;

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


        {/* Left Column - Skills & Info */}
              ratingCount={profile.rating_count}
            />;
          </div>;

                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                      onClick={onMessageTalent}
                    >
                      <MessageSquare className="mr-2 h-5 w-5" />

                      Message
                    </Button>



        </div>;



                </p>;
                <div className='flex flex - wrap gap - 4 justify - center'>;
                  <Button;
                    size='lg';
                    className='bg - zion - purple text - white hover:bg - zion - purple - dark';
                    on_click={onRequestHire}                  >;
                    <Handshake className='mr - 2 h - 5 w - 5' />;
                    Hire Now;
                  </Button>;
                  {onMessageTalent && (
                    <Button;
                      size='lg';
                      variant='outline';
                      className='border - zion - purple text - zion - purple hover:bg - zion - purple / 10';
                      on_click={onMessageTalent}                    >;
                      <MessageSquare className='mr - 2 h - 5 w - 5' />;
                      Message;
                    </Button>)}
                </div>;
              </div>;
            </div>)}
        </div>;
      </div>;
    </div>);
}
;

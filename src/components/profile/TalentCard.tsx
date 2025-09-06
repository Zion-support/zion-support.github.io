<<<<<<< HEAD
<<<<<<< HEAD
export interface TalentCardProps {
  talent: TalentProfile;
  onViewProfile: (id: string) => void;
  onRequestHire: (talent: TalentProfile) => void;
  is_saved: boolean;
  onToggleSave: (id: string, is_saved: boolean) => void;
  is_authenticated: boolean;
export interface TalentCardProps {

      onViewProfile(talent.id)

=======
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'

import Link from 'next/link'
import { TalentProfile } from '@/types/talent'
import Link from 'next/link';
import { TalentProfile } from '@/types/talent';
import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import React and useState
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from "next/link",
import { TalentProfile } from "@/types/talent",
import Image from 'next/image', // Import next/image
import React, { useState } from 'react', // Import React and useState

=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface TalentCardProps {
  talent: TalentProfile
  onViewProfile: (id: string) => void
  onRequestHire: (talent: TalentProfile) => void
  isSaved: boolean
  onToggleSave: (id: string, isSaved: boolean) => void
  isAuthenticated: boolean
<<<<<<< HEAD
export interface TalentCardProps {
xport interface TalentCardProps {
  talent: TalentProfile
  onViewProfile: (id: string) => void
  onRequestHire: (talent: TalentProfile) => void
  isSaved: boolean
  onToggleSave: (id: string, isSaved: boolean,) => void
  talent: TalentProfile,
  onViewProfile: (id: string,) => void,
  onRequestHire: (talent: TalentProfile,) => void,
  isSaved: boolean,
  onToggleSave: (id: string, isSaved: boolean,) => void,
  isAuthenticated: boolean
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  isAuthenticated: boolean
}
export function TalentCard({

  talent
  onViewProfile
  onRequestHire
  isSaved
  onToggleSave
  isAuthenticated
}: TalentCardProps) {
  const [avatarError, setAvatarError] = useState(false)
  const handleViewProfile = () => {
    if (onViewProfile) {
      onViewProfile(talent.id) }      onViewProfile(talent.id)
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    }
  }
  const handleRequestHire = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onRequestHire) {
      onRequestHire(talent) }
      onRequestHire(talent)
    if (onRequestHire) {
      onRequestHire(talent)
    }
  }
  const handleToggleSave = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onToggleSave) {
      onToggleSave(talent.id, !isSaved)
    if (onToggleSave) {
<<<<<<< HEAD
<<<<<<< HEAD


import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
=======
    }
  }
  const skills = talent.skills?.slice(0, 5) |[]
  const talentNameInitial = talent.full_name?.charAt(0) |'T'
    >
      <div className='p-6'>
        <div className='flex items-start'>
          <div className='relative mr-4'>
            <div className='w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light relative'>
              {' '}
              {/* Added relative for Image */}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              {talent.profile_picture_url && !avatarError ? (
                <Image
                  src={talent.profile_picture_url}
                  alt={talent.full_name |'Talent Avatar'}
                  fill={true}                  style={{ objectFit: 'cover' }}
                  className='rounded-full' // Make sure image itself is rounded if fill is used in a rounded container                  onError={() => setAvatarError(true)}
                  priority={false}
                />
              ) : (
                <div className='w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold'>                  {talentNameInitial}
                  className="rounded-full" // Make sure image itself is rounded if fill is used in a rounded container
                  onError={() => setAvatarError(true)}
                  priority={false}                />
              ) : (
import { Button } from "@/components/ui/button",;
import { Card } from "@/components/ui/card",;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { TalentProfile } from '@/types/talent';
import Image from 'next/image'; // Import next/image;
import React, { useState } from 'react'; // Import React and useState;

export interface TalentCardProps {;
  talent: TalentProfile;
  onViewProfile: (id: string) => void;
  onRequestHire: (talent: TalentProfile) => void;
  isSaved: boolean;
  onToggleSave: (id: string, isSaved: boolean) => void;
  isAuthenticated: boolean;
export interface TalentCardProps {;
  talent: TalentProfile,;
  onViewProfile: (id: string,) => void,;
  onRequestHire: (talent: TalentProfile,) => void,;
  isSaved: boolean,;
  onToggleSave: (id: string, isSaved: boolean,) => void,;
  isAuthenticated: boolean;
}

export function TalentCard(): any ({;
=======
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  talent,;
  onViewProfile,;
  onRequestHire,;
  isSaved,;
  onToggleSave,;
<<<<<<< HEAD
  isAuthenticated,;
}: TalentCardProps) {;
  const [avatarError, setAvatarError] = useState(false);

  const handleViewProfile = () => {;
    if (onViewProfile) {;
<<<<<<< HEAD
      onViewProfile(talent && talent.id);    }      onViewProfile(talent && talent.id);
      onToggleSave(talent.id, !isSaved)
=======
      onViewProfile(talent.id);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }
  };

  const handleRequestHire = (e: React && React.MouseEvent) => {;
    e && e.preventDefault();
    e && e.stopPropagation(),;
    if (onRequestHire) {;
      onRequestHire(talent);    }
      onRequestHire(talent);
    if (onRequestHire) {;
      onRequestHire(talent);
    }
  };

  const handleToggleSave = (e: React && React.MouseEvent) => {;
    e && e.preventDefault();
    e && e.stopPropagation(),;
    if (onToggleSave) {;
      onToggleSave(talent && talent.id, !isSaved);
    if (onToggleSave) {;
    }
  };

  const skills = talent && talent.skills?.slice(0, 5) || [];
  const talentNameInitial = talent && talent.full_name?.charAt(0) || 'T';


    >;
      <div className='p-6'>;
        <div className='flex items-start'>;
          <div className='relative mr-4'>;
            <div className='w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light relative'>;
              {' '}
              {/* Added relative for Image */}
              {talent && talent.profile_picture_url && !avatarError ? (;
                <Image
<<<<<<< HEAD
                  src={talent && talent.profile_picture_url}
                  alt={talent && talent.full_name || 'Talent Avatar'}
                  fill={true}                  style={{ objectFit: 'cover' }}
                  className='rounded-full' // Make sure image itself is rounded if fill is used in a rounded container                  onError={() => setAvatarError(true)}
                  priority={false}
=======
  const handleViewProfile = () => {;
    if (onViewProfile) {;
      onViewProfile(talent.id);
    }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                />;
              ) : (;
                <div className='w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold'>                  {talentNameInitial}
                  className="rounded-full" // Make sure image itself is rounded if fill is used in a rounded container;
                  onError={() => setAvatarError(true)}
                  priority={false}

import Link from 'next/link';
import { TalentProfile } from '@/types/talent';

import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import React and useState
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from "next/link",
import { TalentProfile } from "@/types/talent",
import Image from 'next/image', // Import next/image
import React, { useState } from 'react', // Import React and useState


<<<<<<< HEAD
=======
                  src={talent.profile_picture_url} 
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  alt={talent.full_name || 'Talent Avatar'}
                  fill={true}
                  style={{ objectFit: 'cover' }}
                  className="rounded-full" // Make sure image itself is rounded if fill is used in a rounded container
                  onError={() => setAvatarError(true)}
                  priority={false}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">
  },;
  const skills = talent.skills?.slice(0, 5) || [];
  const talentNameInitial = talent.full_name?.charAt(0) || "T";
  return (;
    <Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={handleViewProfile}>;
      <div className="p-6">;
        <div className="flex items-start">;
          <div className="relative mr-4">;
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light relative"> {/* Added relative for Image */}
              {talent.profile_picture_url && !avatarError ? (;
                <Image;
                  src={talent.profile_picture_url} ;
                  alt={talent.full_name || 'Talent Avatar'}
                  fill={true}
                  style={{ objectFit: 'cover' }}
                  className="rounded-full" // Make sure image itself is rounded if fill is used in a rounded container
                  onError={() => setAvatarError(true)}
                  priority={false}
<<<<<<< HEAD
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">
                  {talentNameInitial}
                </div>
              )}
            </div>
            {talent.is_verified && (
              <div className='absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full'>
                <CheckCircle2 className='w-5 h-5 text-zion-cyan' />
              </div>
            )}
          </div>
          <div className='flex-1'>
            <div className='flex justify-between items-start'>
              <h3 className='text-lg font-bold text-white'>
                {talent.full_name}
              </h3>
              <Button
                variant='ghost'
                size='sm'
                className='p-1 h-auto text-zion-slate-light hover:text-zion-cyan'
                onClick={handleToggleSave}                variant="ghost"
                size="sm"
                className="p-1 h-auto text-zion-slate-light hover:text-zion-cyan"
                onClick = {handleToggleSave,}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import Link from 'next/link';
import { TalentProfile } from '@/types/talent';

import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import React and useState
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from "next/link",
import { TalentProfile } from "@/types/talent",
import Image from 'next/image', // Import next/image
import React, { useState } from 'react', // Import React and useState



export interface TalentCardProps {
  talent: TalentProfile
  onViewProfile: (id: string) => void
  onRequestHire: (talent: TalentProfile) => void
  isSaved: boolean
  onToggleSave: (id: string, isSaved: boolean) => void
  isAuthenticated: boolean

  talent: TalentProfile,
  onViewProfile: (id: string,) => void,
  onRequestHire: (talent: TalentProfile,) => void,
  isSaved: boolean,
  onToggleSave: (id: string, isSaved: boolean,) => void,
  isAuthenticated: boolean

                  alt={talent.full_name || 'Talent Avatar'}
                  fill={true}
                  style={{ objectFit: 'cover' }}

                  className="rounded-full" // Make sure image itself is rounded if fill is used in a rounded container
                  onError={() => setAvatarError(true)}
                  priority={false}

<<<<<<< HEAD
=======
              >
                />;
              ) : (;
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">;
                  {talentNameInitial}
                </div>;
              )}
            </div>
            {talent.is_verified && (
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">{talent.full_name}</h3>
              <Button
                variant="ghost"
                size="sm"
                className="p-1 h-auto text-zion-slate-light hover:text-zion-cyan"
                onClick={handleToggleSave}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              >
                <Star className={`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`} />
                <span className="sr-only">{isSaved ? "Saved" : "Save"}</span>
              </Button>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD



=======
            <p className='text-zion-cyan font-medium'>
              {talent.professional_title}
            </p>
            <div className='mt-2 flex flex-wrap gap-3 text-sm'>
              {talent.location && (
                <div className='flex items-center text-zion-slate-light'>
                  <MapPin className='h-4 w-4 mr-1' />                  <span>{talent.location}</span>
                </div>
              )}
              {talent.availability_type && (
                <div className='flex items-center text-zion-slate-light'>
                  <Clock className='h-4 w-4 mr-1' />                  <span>{talent.availability_type}</span>                <div className="flex items-center text-zion-slate-light">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            <p className="text-zion-cyan font-medium">{talent.professional_title}</p>
            
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {talent.location && (
                <div className="flex items-center text-zion-slate-light">
<<<<<<< HEAD
=======
              {talent.availability_type && (
                <div className='flex items-center text-zion-slate-light'>
                  <Clock className='h-4 w-4 mr-1' />                <div className="flex items-center text-zion-slate-light">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{talent.availability_type}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        {skills.length > 0 && (
          <div className='mt-4'>
            <div className='flex flex-wrap gap-2'>
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className='px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light'                >          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index,) => (
                <span
                  key = {index,}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
                  {skill}
                </span>
              ))}
              {(talent.skills?.length |0) > 5 && (
                <span className='px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan'>                  +{(talent.skills?.length |0) - 5} more                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length |0) - 5} more
                </span>
              )}
            </div>
          </div>
        )}
        <div className='mt-5 flex items-center justify-between'>
          <div>
            {talent.hourly_rate ? (
              <div className='text-white font-bold'>
                ${talent.hourly_rate}
                <span className='text-zion-slate-light font-normal'>/hr</span>
              </div>
            ) : (
              <div className='text-zion-slate-light'>Rate not specified</div>
            )}
          </div>
          <div className='flex items-center gap-2'>
            {isAuthenticated && (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{talent.location}</span>
                </div>
              )}
              {(talent && talent.skills?.length || 0) > 5 && (;
                <span className='px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan'>                  +{(talent && talent.skills?.length || 0) - 5} more                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">;
                  +{(talent && talent.skills?.length || 0) - 5} more;
                </span>;
<<<<<<< HEAD


<<<<<<< HEAD

=======
            <p className="text-zion-cyan font-medium">{talent.professional_title}</p>
            
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {talent.location && (
                <div className="flex items-center text-zion-slate-light">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{talent.location}</span>
                </div>
              )}


        <div className='mt-5 flex items-center justify-between'>
          <div>
            {talent.hourly_rate ? (
              <div className='text-white font-bold'>
                ${talent.hourly_rate}
                <span className='text-zion-slate-light font-normal'>/hr</span>
              </div>
            ) : (
              <div className='text-zion-slate-light'>Rate not specified</div>
            )}
          </div>
          <div className='flex items-center gap-2'>
            {isAuthenticated && (
=======
              )}
          </div>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <Button
                size='sm'
                variant='secondary'
                onClick={handleRequestHire}
<<<<<<< HEAD
                className='bg-zion-purple hover:bg-zion-purple-light text-white'              >                className="bg-zion-purple hover:bg-zion-purple-light text-white"
              size="sm"
              variant="ghost"
              onClick={handleViewProfile}
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light";
            >;
              View <ArrowRight className="ml-1 h-4 w-4" />;
ursor/fix-website-loading-errors-and-merge-6662
=======
                className='bg-zion-purple hover:bg-zion-purple-light text-white'>                className="bg-zion-purple hover:bg-zion-purple-light text-white";
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <div>;
            {talent && talent.hourly_rate ? (;
              <div className="text-white font-bold">;
                ${talent && talent.hourly_rate}
                <span className="text-zion-slate-light font-normal">/hr</span>;
              </div>;
            ) : (;
              <div className="text-zion-slate-light">Rate not specified</div>;
<<<<<<< HEAD

        
        <div className="mt-5 flex items-center justify-between">
          <div>
                <span className='text - zion - slate - light font - normal'>/hr</span>;
              </div>) : (
              <div className='text - zion - slate - light'>Rate not specified</div>)}
          </div>;
          <div className='flex items - center gap - 2'>;
            {is_authenticated && (
              <Button;
                size='sm';
                variant='secondary';
                on_click={handleRequestHire}
                className='bg - zion - purple hover:bg - zion - purple - light text - white'              >                className="bg - zion - purple hover:bg - zion - purple - light text - white";
          <div>;

          <div>
            {talent.hourly_rate ? (
              <div className="text-white font-bold">
                ${talent.hourly_rate}
                <span className="text-zion-slate-light font-normal">/hr</span>
              </div>
            ) : (
              <div className="text-zion-slate-light">Rate not specified</div>
            )}
          </div>
          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <Button
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              {talent.availability_type && (;
                <div className="flex items-center text-zion-slate-light">;
                  <Clock className="h-4 w-4 mr-1" />;
                  <span>{talent.availability_type}</span>;
                </div>;
              )}
            </div>;
          </div>;
        </div>;
        {skills.length > 0 && (;
          <div className="mt-4">;
            <div className="flex flex-wrap gap-2">;
              {skills.map((skill, index) => (;
                <span;
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light";
                >;
                  {skill}
                </span>;
              ))}
              {(talent.skills?.length || 0) > 5 && (;
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">;
                  +{(talent.skills?.length || 0) - 5} more;
                </span>;
              )}
            </div>;
          </div>;
        )}


              <Button
                size='sm'
                variant='secondary'
                onClick={handleRequestHire}
                className='bg-zion-purple hover:bg-zion-purple-light text-white'>                className="bg-zion-purple hover:bg-zion-purple-light text-white";
;
        <div className="mt-5 flex items-center justify-between">;
          <div>;
            {talent && talent.hourly_rate ? (;
              <div className="text-white font-bold">;
                ${talent && talent.hourly_rate}
                <span className="text-zion-slate-light font-normal">/hr</span>;
              </div>;
            ) : (;
              <div className="text-zion-slate-light">Rate not specified</div>;

        
        <div className="mt-5 flex items-center justify-between">
          <div>
                <span className='text - zion - slate - light font - normal'>/hr</span>;
              </div>) : (
              <div className='text - zion - slate - light'>Rate not specified</div>)}
          </div>;
          <div className='flex items - center gap - 2'>;
            {is_authenticated && (
              <Button;
                size='sm';
                variant='secondary';
                on_click={handleRequestHire}
                className='bg - zion - purple hover:bg - zion - purple - light text - white'              >                className="bg - zion - purple hover:bg - zion - purple - light text - white";
          <div>;

            {talent.hourly_rate ? (
              <div className="text - white font - bold">;
                ${talent.hourly_rate}

          </div>;

          <div className="flex items-center gap-2">;
            {isAuthenticated && (;

              <Button
              <Button

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                size="sm"
                variant="secondary"
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
              >
                Hire
              </Button>
            )}
            <Button
              size="sm"
              variant="ghost"
              onClick={handleViewProfile}
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light";
            >;
              View <ArrowRight className="ml-1 h-4 w-4" />;
            </Button>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD


;
=======
    </Card>;
  );
}
;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

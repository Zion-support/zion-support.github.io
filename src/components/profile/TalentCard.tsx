<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

<<<<<<< HEAD
import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import React and useState

=======
import Link from 'next/link'
import { TalentProfile } from '@/types/talent'
import Link from 'next/link';
import { TalentProfile } from '@/types/talent';
import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import React and useState
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from "next/link",
import { TalentProfile } from "@/types/talent",
import Image from 'next/image', // Import next/image
import React, { useState } from 'react', // Import React and useState
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

export interface TalentCardProps {
  talent: TalentProfile
  onViewProfile: (id: string) => void
  onRequestHire: (talent: TalentProfile) => void
  isSaved: boolean
  onToggleSave: (id: string, isSaved: boolean) => void
  isAuthenticated: boolean
export interface TalentCardProps {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD

export interface TalentCardProps {
=======
>>>>>>> 
xport interface TalentCardProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  talent: TalentProfile
  onViewProfile: (id: string) => void
  onRequestHire: (talent: TalentProfile) => void
  isSaved: boolean
<<<<<<< HEAD
  onToggleSave: (id: string, isSaved: boolean) => void
  isAuthenticated: boolean
<<<<<<< HEAD
=======
  onToggleSave: (id: string, isSaved: boolean,) => void
  talent: TalentProfile,
  onViewProfile: (id: string,) => void,
  onRequestHire: (talent: TalentProfile,) => void,
  isSaved: boolean,
  onToggleSave: (id: string, isSaved: boolean,) => void,
  isAuthenticated: boolean
}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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
<<<<<<< HEAD
<<<<<<< HEAD

=======
  talent: TalentProfile
  onViewProfile: (id: string,) => void
  onRequestHire: (talent: TalentProfile,) => void
  isSaved: boolean
  onToggleSave: (id: string, isSaved: boolean,) => void
                <div className='w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold'>                  src={talent.profile_picture_url}
                  alt={talent.full_name |'Talent Avatar'}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <div className='w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold'>                  src={talent.profile_picture_url}
                  alt={talent.full_name |'Talent Avatar'}
                <div className='w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold'>                  src={talent.profile_picture_url} 
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Button } from "@/components/ui/button",;
import { Card } from "@/components/ui/card",;
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from "next/link",;
import { TalentProfile } from "@/types/talent",;
import Image from 'next/image', // Import next/image;
import React, { useState } from 'react', // Import React and useState;
export interface TalentCardProps {;
  talent: TalentProfile,;
  onViewProfile: (id: string) => void,;
  onRequestHire: (talent: TalentProfile) => void,;
  isSaved: boolean,;
  onToggleSave: (id: string, isSaved: boolean) => void,;
  isAuthenticated: boolean;
}
;
export function TalentCard({;
  talent,;
  onViewProfile,;
  onRequestHire,;
  isSaved,;
  onToggleSave,;
  isAuthenticated;
}: TalentCardProps) {;
  const [avatarError, setAvatarError] = useState(false),;
  const handleViewProfile = () => {;
    if (onViewProfile) {;
<<<<<<< HEAD
      onViewProfile(talent && talent.id);    }      onViewProfile(talent && talent.id);
      onToggleSave(talent.id, !isSaved)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
      onViewProfile(talent.id);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  },;
  const handleRequestHire = (e: React.MouseEvent) => {;
    e.preventDefault(),;
    e.stopPropagation(),;
    if (onRequestHire) {;
      onRequestHire(talent);
    }
  },;
  const handleToggleSave = (e: React.MouseEvent) => {;
    e.preventDefault(),;
    e.stopPropagation(),;
    if (onToggleSave) {;
      onToggleSave(talent.id, !isSaved);
    }
  },

  const skills = talent.skills?.slice(0, 5) || [],
  const talentNameInitial = talent.full_name?.charAt(0) || "T",

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={handleViewProfile}>
      <div className="p-6">
        <div className="flex items-start">
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light relative"> {/* Added relative for Image */}
              {talent.profile_picture_url && !avatarError ? (
                <Image
<<<<<<< HEAD
                  src={talent && talent.profile_picture_url}
                  alt={talent && talent.full_name || 'Talent Avatar'}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  fill={true}                  style={{ objectFit: 'cover' }}
                  className='rounded-full' // Make sure image itself is rounded if fill is used in a rounded container                  onError={() => setAvatarError(true)}
=======
                  src={talent.profile_picture_url} 
                  alt={talent.full_name || 'Talent Avatar'}
                  fill={true}
                  style={{ objectFit: 'cover' }}
                  className="rounded-full" // Make sure image itself is rounded if fill is used in a rounded container
                  onError={() => setAvatarError(true)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                  alt={talent.full_name || 'Talent Avatar'}

                  fill={true}
=======
>>>>>>>                   alt={talent.full_name || 'Talent Avatar'}
>>>>>>>                   fill={true}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  alt={talent.full_name || 'Talent Avatar'}
                  fill={true}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  style={{ objectFit: 'cover' }}
                  className="rounded-full" // Make sure image itself is rounded if fill is used in a rounded container
                  onError={() => setAvatarError(true)}
                  priority={false}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>               >

xport interface TalentCardProps {
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
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                  fill={true}
                  style={{ objectFit: 'cover' }}

                  className="rounded-full" // Make sure image itself is rounded if fill is used in a rounded container
                  onError={() => setAvatarError(true)}
                  priority={false}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

              >
>>>>>>>                 <Star className={`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`} />
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
              >
                <Star className={`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`} />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <span className="sr-only">{isSaved ? "Saved" : "Save"}</span>
              </Button>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                   <MapPin className="h-4 w-4 mr-1" />
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            <p className="text-zion-cyan font-medium">{talent.professional_title}</p>
            
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {talent.location && (
                <div className="flex items-center text-zion-slate-light">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  <MapPin className="h-4 w-4 mr-1" />
>>>>>>>                   <span>{talent.location}</span>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                </div>
              )}
<<<<<<< HEAD
<<<<<<< HEAD

                size="sm"
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
                />;
                <span className='sr-only'>{isSaved ? 'Saved' : 'Save'}</span>;
              </Button>;
            </div>;
            <p className='text-zion-cyan font-medium'>;
              {talent && talent.professional_title}
            </p>;

            <div className='mt-2 flex flex-wrap gap-3 text-sm'>;
              {talent && talent.location && (;
                <div className='flex items-center text-zion-slate-light'>;
                  <MapPin className='h-4 w-4 mr-1' />                  <span>{talent && talent.location}</span>;
                </div>;


>>>>>>>               )}
              {talent && talent.availability_type && (;
                <div className='flex items-center text-zion-slate-light'>;
                  <Clock className='h-4 w-4 mr-1' />                  <span>{talent && talent.availability_type}</span>                <div className="flex items-center text-zion-slate-light">;
                  <MapPin className="h-4 w-4 mr-1" />;
                  <span>{talent && talent.location}</span>;
                </div>;
              )}
              {talent && talent.availability_type && (;
                <div className='flex items-center text-zion-slate-light'>;
                  <Clock className='h-4 w-4 mr-1' />                <div className="flex items-center text-zion-slate-light">;
                  <Clock className="h-4 w-4 mr-1" />;
                  <span>{talent && talent.availability_type}</span>;
                </div>;
              )}


              {(talent && talent.skills?.length || 0) > 5 && (;
                <span className='px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan'>                  +{(talent && talent.skills?.length || 0) - 5} more                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">;
                  +{(talent && talent.skills?.length || 0) - 5} more;
                </span>;


>>>>>>>               {talent.availability_type && (;
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
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
=======
            <p className="text-zion-cyan font-medium">{talent.professional_title}</p>
            
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {talent.location && (
                <div className="flex items-center text-zion-slate-light">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{talent.location}</span>
                </div>
              )}
<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              )}
            </div>
          </div>
        )}
<<<<<<< HEAD


>>>>>>>               <Button
=======
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
              <Button
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                size='sm'
                variant='secondary'
                onClick={handleRequestHire}
                className='bg-zion-purple hover:bg-zion-purple-light text-white'              >                className="bg-zion-purple hover:bg-zion-purple-light text-white"
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>>                 size="sm"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                variant="secondary"
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
              >
                Hire
              </Button>
            )}
            <Button
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              size="sm"
              variant="ghost"
              onClick={handleViewProfile}
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light";
            >;
              View <ArrowRight className="ml-1 h-4 w-4" />;
ursor/fix-website-loading-errors-and-merge-6662
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

=======
          <div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            {talent.hourly_rate ? (
              <div className="text-white font-bold">
                ${talent.hourly_rate}
<<<<<<< HEAD

          </div>;

          <div className="flex items-center gap-2">;
            {isAuthenticated && (;

              <Button
              <Button

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                size="sm"
                variant="secondary"
                onClick={handleRequestHire}


>>>>>>> >>>>>>>             </Button>;
=======
                <span className="text-zion-slate-light font-normal">/hr</span>
              </div>
            ) : (
              <div className="text-zion-slate-light">Rate not specified</div>
            )}
          </div>
          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <Button
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
;
        <div className="mt-5 flex items-center justify-between">;
          <div>;
            {talent.hourly_rate ? (;
              <div className="text-white font-bold">;
                ${talent.hourly_rate}
                <span className="text-zion-slate-light font-normal">/hr</span>;
              </div>;
            ) : (;
              <div className="text-zion-slate-light">Rate not specified</div>;
            )}
          </div>
          
          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <Button
                size="sm"
                variant="secondary"
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
              >
                Hire
              </Button>
            )}
            <Button
              size='sm'
              variant='ghost'
              onClick={handleViewProfile}
              className='text-zion-cyan hover:text-white hover:bg-zion-blue-light'            >
              View <ArrowRight className='ml-1 h-4 w-4' />            </Button>
              View <ArrowRight className="ml-1 h-4 w-4" />
              onClick={handleViewProfile}
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light"
            >
              View <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
}
}
}
              size="sm"
              variant="ghost"
              onClick={handleViewProfile}
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light";
            >;
              View <ArrowRight className="ml-1 h-4 w-4" />;
            </Button>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>;
        </div>;
      </div>;
    </Card>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { TalentProfile } from '@/types/talent';
import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import React and useState
<<<<<<< HEAD
=======
=======
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from "next/link";
import { TalentProfile } from "@/types/talent";
import Image from 'next/image', // Import next/image
import React, { useState } from 'react', // Import React and useState
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export interface TalentCardProps {
  talent: TalentProfile;
  onViewProfile: (id: string) => void;
  onRequestHire: (talent: TalentProfile) => void;
  isSaved: boolean;
  onToggleSave: (id: string, isSaved: boolean) => void;
  isAuthenticated: boolean;

export function TalentCard({
  talent,
  onViewProfile,
  onRequestHire,
  isSaved,
  onToggleSave,
  isAuthenticated,
}: TalentCardProps) {
  const [avatarError, setAvatarError] = useState(false);

  const handleViewProfile = () => {
    if (onViewProfile) {
<<<<<<< HEAD
      onViewProfile(talent.id);    }
=======
<<<<<<< HEAD
      onViewProfile(talent.id);
=======
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from "next/link";
import { TalentProfile } from "@/types/talent";

import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import React and useState


export interface TalentCardProps {
  talent: TalentProfile,
  onViewProfile: (id: string) => void, onRequestHire: (talent: TalentProfile) => void,
  isSaved: boolean,
  onToggleSave: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean
}

export function TalentCard({
  talent;
  onViewProfile;
  onRequestHire;
  isSaved;
  onToggleSave;
  isAuthenticated
}: TalentCardProps) {

  const [ avatarError, setAvatarError ] = useState(false),


  const handleViewProfile = () => {
    if (onViewProfile) {
      onViewProfile(talent.id)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      onViewProfile(talent.id)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  const handleRequestHire = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onRequestHire) {
<<<<<<< HEAD
      onRequestHire(talent);    }
=======
<<<<<<< HEAD
<<<<<<< HEAD
      onRequestHire(talent);
=======
      onRequestHire(talent)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      onRequestHire(talent)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  const handleToggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleSave) {
<<<<<<< HEAD
      onToggleSave(talent.id, !isSaved);
=======
<<<<<<< HEAD
<<<<<<< HEAD
      onToggleSave(talent.id, !isSaved);
=======
      onToggleSave(talent.id, !isSaved)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }
  };

  const skills = talent.skills?.slice(0, 5) || [];
  const talentNameInitial = talent.full_name?.charAt(0) || 'T';

  
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
                  alt={talent.full_name || 'Talent Avatar'}
                  fill={true}
                  style={{ objectFit: 'cover' }}
<<<<<<< HEAD
                  className='rounded-full' // Make sure image itself is rounded if fill is used in a rounded container                  onError={() => setAvatarError(true)}
                  priority={false}
                />
              ) : (
                <div className='w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold'>                  {talentNameInitial}
=======
<<<<<<< HEAD
                  className='rounded-full' // Make sure image itself is rounded if fill is used in a rounded container
=======
      onToggleSave(talent.id, !isSaved)
    }
  };


  const skills = talent.skills?.slice(0, 5) || [],
  const talentNameInitial = talent.full_name?.charAt(0) || "T";

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={handleViewProfile}>
      <div className="p-6">
        <div className="flex items-start">
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light relative"> {/* Added relative for Image */}
              {talent.profile_picture_url && !avatarError ? (
                <Image
                  src={talent.profile_picture_url} 
                  alt={talent.full_name || 'Talent Avatar'}
                  fill={true}
                  style={{ objectFit: 'cover' }}
                  className="rounded-full" // Make sure image itself is rounded if fill is used in a rounded container
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  className="rounded-full" // Make sure image itself is rounded if fill is used in a rounded container
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  onError={() => setAvatarError(true)}
                  priority={false}
                />
              ) : (
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold'>
=======
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  {talentNameInitial}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </div>
              )}
            </div>
            {talent.is_verified && (
<<<<<<< HEAD
              <div className='absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full'>
                <CheckCircle2 className='w-5 h-5 text-zion-cyan' />
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full'>
                <CheckCircle2 className='w-5 h-5 text-zion-cyan' />
=======
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                onClick={handleToggleSave}
              >
                <Star
                  className={`h-5 w-5 ${isSaved ? 'fill-yellow-400 text-yellow-400' : ''}`}
                />
                <span className='sr-only'>{isSaved ? 'Saved' : 'Save'}</span>
              </Button>
            </div>
            <p className='text-zion-cyan font-medium'>
              {talent.professional_title}
            </p>

            <div className='mt-2 flex flex-wrap gap-3 text-sm'>
              {talent.location && (
<<<<<<< HEAD
                <div className='flex items-center text-zion-slate-light'>
                  <MapPin className='h-4 w-4 mr-1' />                  <span>{talent.location}</span>
                </div>
              )}
              {talent.availability_type && (
                <div className='flex items-center text-zion-slate-light'>
                  <Clock className='h-4 w-4 mr-1' />                  <span>{talent.availability_type}</span>
=======
<<<<<<< HEAD
                <div className='flex items-center text-zion-slate-light'>
                  <MapPin className='h-4 w-4 mr-1' />
=======
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
                <span className="sr-only">{isSaved ? "Saved" : "Save"}</span>
              </Button>
            </div>
            <p className="text-zion-cyan font-medium">{talent.professional_title}</p>
            
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {talent.location && (
                <div className="flex items-center text-zion-slate-light">
                  <MapPin className="h-4 w-4 mr-1" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="flex items-center text-zion-slate-light">
                  <MapPin className="h-4 w-4 mr-1" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <span>{talent.location}</span>
                </div>
              )}
              {talent.availability_type && (
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='flex items-center text-zion-slate-light'>
                  <Clock className='h-4 w-4 mr-1' />
=======
                <div className="flex items-center text-zion-slate-light">
                  <Clock className="h-4 w-4 mr-1" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="flex items-center text-zion-slate-light">
                  <Clock className="h-4 w-4 mr-1" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <span>{talent.availability_type}</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </div>
              )}
            </div>
          </div>
        </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {skills.length > 0 && (
          <div className='mt-4'>
            <div className='flex flex-wrap gap-2'>
              {skills.map((skill, index) => (
                <span
                  key={index}
<<<<<<< HEAD
                  className='px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light'                >
=======
<<<<<<< HEAD
                  className='px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light'
=======
        
        {skills.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  {skill}
                </span>
              ))}
              {(talent.skills?.length || 0) > 5 && (
<<<<<<< HEAD
                <span className='px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan'>                  +{(talent.skills?.length || 0) - 5} more
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <span className='px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan'>
=======
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  +{(talent.skills?.length || 0) - 5} more
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </span>
              )}
            </div>
          </div>
        )}
<<<<<<< HEAD

        <div className='mt-5 flex items-center justify-between'>
=======
<<<<<<< HEAD
<<<<<<< HEAD

        <div className='mt-5 flex items-center justify-between'>
=======
        
        <div className="mt-5 flex items-center justify-between">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                size='sm'
                variant='secondary'
                onClick={handleRequestHire}
<<<<<<< HEAD
                className='bg-zion-purple hover:bg-zion-purple-light text-white'              >
=======
<<<<<<< HEAD
                className='bg-zion-purple hover:bg-zion-purple-light text-white'
=======
        
        <div className="mt-5 flex items-center justify-between">
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
                size="sm"
                variant="secondary"
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                Hire
              </Button>
            )}
            <Button
<<<<<<< HEAD
              size='sm'
              variant='ghost'
=======
<<<<<<< HEAD
<<<<<<< HEAD
              size='sm'
              variant='ghost'
=======
              size="sm"
              variant="ghost"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              onClick={handleViewProfile}
              className='text-zion-cyan hover:text-white hover:bg-zion-blue-light'
            >
<<<<<<< HEAD
              View <ArrowRight className='ml-1 h-4 w-4' />            </Button>
=======
<<<<<<< HEAD
              View <ArrowRight className='ml-1 h-4 w-4' />
=======
              size="sm"
              variant="ghost"
              onClick={handleViewProfile}
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light"
            >
              View <ArrowRight className="ml-1 h-4 w-4" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              View <ArrowRight className="ml-1 h-4 w-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </Button>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          </div>
        </div>
      </div>
    </Card>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

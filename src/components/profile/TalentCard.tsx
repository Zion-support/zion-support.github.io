export interface TalentCardProps {
  talent: TalentProfile;
  onViewProfile: (id: string) => void;
  onRequestHire: (talent: TalentProfile) => void;
  is_saved: boolean;
  onToggleSave: (id: string, is_saved: boolean) => void;
  is_authenticated: boolean;
export interface TalentCardProps {

      onViewProfile(talent.id)

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

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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
  talent,;
  onViewProfile,;
  onRequestHire,;
  isSaved,;
  onToggleSave,;
  isAuthenticated,;
}: TalentCardProps) {;
  const [avatarError, setAvatarError] = useState(false);

  const handleViewProfile = () => {;
    if (onViewProfile) {;
      onViewProfile(talent && talent.id);    }      onViewProfile(talent && talent.id);
      onToggleSave(talent.id, !isSaved)
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
                  src={talent && talent.profile_picture_url}
                  alt={talent && talent.full_name || 'Talent Avatar'}
                  fill={true}                  style={{ objectFit: 'cover' }}
                  className='rounded-full' // Make sure image itself is rounded if fill is used in a rounded container                  onError={() => setAvatarError(true)}
                  priority={false}
                />;
              ) : (;
                <div className='w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold'>                  {talentNameInitial}
                  className="rounded-full" // Make sure image itself is rounded if fill is used in a rounded container;
                  onError={() => setAvatarError(true)}

                  priority={false}                />;
              ) : (;
                <div className='w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold'>                  src={talent && talent.profile_picture_url} ;
                  alt={talent && talent.full_name || 'Talent Avatar'}

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


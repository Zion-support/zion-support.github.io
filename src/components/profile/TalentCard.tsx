
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
      onViewProfile(talent.id);
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
                  src={talent.profile_picture_url} 
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

              >
                <Star className={`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`} />
                <span className="sr-only">{isSaved ? "Saved" : "Save"}</span>
              </Button>
            </div>

                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{talent.location}</span>
                </div>
              )}

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
    </Card>;
  );
}
;


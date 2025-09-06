
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
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
  talent,;
  onViewProfile,;
  onRequestHire,;
  isSaved,;
  onToggleSave,;
  const handleViewProfile = () => {;
    if (onViewProfile) {;
      onViewProfile(talent && talent.id);    }      onViewProfile(talent && talent.id);
      onToggleSave(talent.id, !isSaved)
    }
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


              >
                <Star className={`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`} />
                <span className="sr-only">{isSaved ? "Saved" : "Save"}</span>
              </Button>
            </div>
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{talent.location}</span>
                </div>
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
              )}
                <span
                  key={index}
                  className='px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light'>          <div className="mt-4">;
            <div className="flex flex-wrap gap-2">;
              {skills && skills.map((skill, index,) => (;
                <span
                  key = {index,}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
                <span
                  key = {index,}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
                  {skill}
                </span>;
              ))}
              {(talent.skills?.length |0) > 5 && (
                <span className='px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan'>                  +{(talent.skills?.length |0) - 5} more                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length |0) - 5} more
                  {skill}
                </span>
              ))}
                </span>
              {(talent && talent.skills?.length || 0) > 5 && (;
                <span className='px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan'>                  +{(talent && talent.skills?.length || 0) - 5} more                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">;
                  +{(talent && talent.skills?.length || 0) - 5} more;
                </span>;
              )}
          </div>;

          <div className='flex items-center gap-2'>;
            {isAuthenticated && (;
              <Button
                size='sm'
                variant='secondary'
                onClick={handleRequestHire}
                className='bg-zion-purple hover:bg-zion-purple-light text-white'>                className="bg-zion-purple hover:bg-zion-purple-light text-white";
          <div>;
            {talent.hourly_rate ? (;
              <div className="text-white font-bold">;
                ${talent.hourly_rate}
                <span className="text-zion-slate-light font-normal">/hr</span>;
              </div>;
            ) : (;
              <div className="text-zion-slate-light">Rate not specified</div>;

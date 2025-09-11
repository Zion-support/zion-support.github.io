import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { TalentProfile } from '@/types/talent'
import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import React and useState
import { Button } from '@/components / ui / button';
import { Card } from '@/components / ui / card';
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next / link';
import { TalentProfile } from '@/types / talent';
import Image from 'next / image'; // Import next / image;
import React, { useState } from 'react'; // Import React and useState;
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
                  fill={true}
                  style={{ objectFit: 'cover' }}
                  className="rounded-full" // Make sure image itself is rounded if fill is used in a rounded container
                  onError={() => setAvatarError(true)}
                  priority={false}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">
                  {talentNameInitial}
                </div>;
              )}
          </div>;
          <div className='flex-1'>;
            <div className='flex justify-between items-start'>;
              <h3 className='text-lg font-bold text-white'>;
                {talent && talent.full_name}
              </h3>;
              <Button
                variant='ghost'
                size='sm'
                className='p-1 h-auto text-zion-slate-light hover:text-zion-cyan'
                onClick={handleToggleSave}                variant="ghost"
                size="sm"
                className="p-1 h-auto text-zion-slate-light hover:text-zion-cyan"
                onClick = {handleToggleSave,}>;
                <Star
                  className={`h-5 w-5 ${isSaved ? 'fill-yellow-400 text-yellow-400' : ''}`}
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
                <span className="sr-only">{isSaved ? "Saved" : "Save"}</span>
              </Button>
            </div>
            <p className="text-zion-cyan font-medium">{talent.professional_title}</p>
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {talent.location && (
                <div className="flex items-center text-zion-slate-light">
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
  talent: TalentProfile,
  onViewProfile: (id: string, ) => void,
  onRequestHire: (talent: TalentProfile, ) => void,
  is_saved: boolean,
  onToggleSave: (id: string, is_saved: boolean, ) => void,
  is_authenticated: boolean;
}
export /**
 * TalentCard - Function description
 */
function TalentCard() {
  const [avatar_error, setAvatarError] = useState (false);
  const handleViewProfile = () =>: any {
    // Check condition
if ( {) {
  $2
}
      onViewProfile (talent.id) }      onViewProfile (talent.id);
    }
  }
  const handleRequestHire = (e: React.MouseEvent) =>: any {
    e.prevent_default ();
    e.stop_propagation (),
    // Check condition
if ( {) {
  $2
}
      onRequestHire (talent) }
      onRequestHire (talent);
    // Check condition
if ( {) {
  $2
}
      onRequestHire (talent);
    }
  }
  const handleToggleSave = (e: React.MouseEvent) =>: any {
    e.prevent_default ();
    e.stop_propagation (),
    // Check condition
if ( {) {
  $2
}
      onToggleSave (talent.id, !is_saved);
    // Check condition
if ( {) {
  $2
}
    }
  }
  const skills = talent.skills?.slice (0, 5) || [];
  const talentNameInitial = talent.full_name?.char_at (0) || 'T';
    >;
      <div className='p - 6'>;
        <div className='flex items - start'>;
          <div className='relative mr - 4'>;
            <div className='w - 16 h - 16 rounded - full overflow - hidden bg - zion - blue - dark border border - zion - blue - light relative'>;
              {' '}
              {/* Added relative for Image */}
              {talent.profile_picture_url && !avatar_error ? (
                <Image;
                  src={talent.profile_picture_url}
                  alt={talent.full_name || 'Talent Avatar'}
                  fill={true}                  style={{ object_fit: 'cover' }}
                  className='rounded - full' // Make sure image itself is rounded if fill is used in a rounded container                  on_error={() => setAvatarError (true)}
                  priority={false}
                />) : (
                <div className='w - full h - full flex items - center justify - center text - zion - slate - light text - xl font - bold'>                  {talentNameInitial}
                  className="rounded - full" // Make sure image itself is rounded if fill is used in a rounded container;
                  on_error={() => setAvatarError (true)}
                  priority={false}                />) : (
                <div className='w - full h - full flex items - center justify - center text - zion - slate - light text - xl font - bold'>                  src={talent.profile_picture_url}
                  alt={talent.full_name || 'Talent Avatar'}
                  fill={true}
                  style={{ object_fit: 'cover' }}
                  className="rounded - full" // Make sure image itself is rounded if fill is used in a rounded container;
                  on_error={() => setAvatarError (true)}
                  priority={false}
                />) : (
                <div className="w - full h - full flex items - center justify - center text - zion - slate - light text - xl font - bold">;
                  {talentNameInitial}
                </div>)}
            </div>;
            {talent.is_verified && (
              <div className='absolute -bottom - 1 -right - 1 bg - zion - blue p - 0.5 rounded - full'>;
                <CheckCircle2 className='w - 5 h - 5 text - zion - cyan' />;
              </div>)}
          </div>;
          <div className='flex - 1'>;
            <div className='flex justify - between items - start'>;
              <h3 className='text - lg font - bold text - white'>;
                {talent.full_name}
              </h3>;
              <Button;
                variant='ghost';
                size='sm';
                className='p - 1 h - auto text - zion - slate - light hover:text - zion - cyan';
                on_click={handleToggleSave}                variant="ghost";
                size="sm";
                className="p - 1 h - auto text - zion - slate - light hover:text - zion - cyan";
                on_click = {handleToggleSave, }
              >;
                <Star;
                  className={`h - 5 w - 5 ${is_saved ? 'fill - yellow - 400 text - yellow - 400' : ''}`}
                />;
                <span className='sr - only'>{is_saved ? 'Saved' : 'Save'}</span>;
              </Button>;
            </div>;
            <p className='text - zion - cyan font - medium'>;
              {talent.professional_title}
            </p>;
            <div className='mt - 2 flex flex - wrap gap - 3 text - sm'>;
              {talent.location && (
                <div className='flex items - center text - zion - slate - light'>;
                  <MapPin className='h - 4 w - 4 mr - 1' />                  <span>{talent.location}</span>;
                </div>)}
              {talent.availability_type && (
                <div className='flex items - center text - zion - slate - light'>;
                  <Clock className='h - 4 w - 4 mr - 1' />                  <span>{talent.availability_type}</span>                <div className="flex items - center text - zion - slate - light">;
                  <MapPin className="h - 4 w - 4 mr - 1" />;
                  <span>{talent.location}</span>;
                </div>)}
              {talent.availability_type && (
                <div className='flex items - center text - zion - slate - light'>;
                  <Clock className='h - 4 w - 4 mr - 1' />                <div className="flex items - center text - zion - slate - light">;
                  <Clock className="h - 4 w - 4 mr - 1" />;
                  <span>{talent.availability_type}</span>;
                </div>)}
            </div>;
          </div>;
        </div>;
        {skills.length > 0 && (
          <div className='mt - 4'>;
            <div className='flex flex - wrap gap - 2'>;
              {skills.map ((skill, index) => (
                <span;
                  key={index}
            </div>;
          </div>;
        </div>;
        {skills && skills.length > 0 && (;
          <div className='mt-4'>;
            <div className='flex flex-wrap gap-2'>;
              {skills && skills.map((skill, index) => (;
                <span
                  key={index}
                  className='px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light'>          <div className="mt-4">;
            <div className="flex flex-wrap gap-2">;
              {skills && skills.map((skill, index,) => (;
                <span
                  key = {index,}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
                  {skill}
                </span>;
              ))}
              {talent.availability_type && (
                <div className="flex items-center text-zion-slate-light">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{talent.availability_type}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        {skills.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
                >
                  {skill}
                </span>
              ))}
              {(talent.skills?.length || 0) > 5 && (
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length || 0) - 5} more
                </span>
              {(talent && talent.skills?.length || 0) > 5 && (;
                <span className='px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan'>                  +{(talent && talent.skills?.length || 0) - 5} more                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">;
                  +{(talent && talent.skills?.length || 0) - 5} more;
                </span>;
              )}
            </div>;
          </div>;
        )}
                  className='px - 2 py - 1 text - xs rounded - full bg - zion - blue - light text - zion - slate - light'                >          <div className="mt - 4">;
            <div className="flex flex - wrap gap - 2">;
              {skills.map ((skill, index, ) => (
                <span;
                  key = {index, }
                  className="px - 2 py - 1 text - xs rounded - full bg - zion - blue - light text - zion - slate - light";
                  {skill}
                </span>))}
              {(talent.skills?.length || 0) > 5 && (
                <span className='px - 2 py - 1 text - xs rounded - full bg - zion - purple / 20 text - zion - cyan'>                  +{(talent.skills?.length || 0) - 5} more                <span className="px - 2 py - 1 text - xs rounded - full bg - zion - purple / 20 text - zion - cyan">;
                  +{(talent.skills?.length || 0) - 5} more;
                </span>)}
            </div>;
          </div>)}
        <div className='mt - 5 flex items - center justify - between'>;
          <div>;
            {talent.hourly_rate ? (
              <div className='text - white font - bold'>;
                ${talent.hourly_rate}
        <div className='mt-5 flex items-center justify-between'>;
          <div>;
            {talent && talent.hourly_rate ? (;
              <div className='text-white font-bold'>;
                ${talent && talent.hourly_rate}
                <span className='text-zion-slate-light font-normal'>/hr</span>;
              </div>;
            ) : (;
              <div className='text-zion-slate-light'>Rate not specified</div>;
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
                <span className="text - zion - slate - light font - normal">/hr</span>;
              </div>) : (
              <div className="text - zion - slate - light">Rate not specified</div>)}
          </div>;
          <div className="flex items - center gap - 2">;
            {is_authenticated && (
              <Button;
                size="sm";
                variant="secondary";
                on_click={handleRequestHire}
                className="bg - zion - purple hover:bg - zion - purple - light text - white";
              >;
                Hire;
              </Button>)}
            <Button;
              size='sm';
              variant='ghost';
              on_click={handleViewProfile}
              className='text - zion - cyan hover:text - white hover:bg - zion - blue - light'            >;
              View <ArrowRight className='ml - 1 h - 4 w - 4' />            </Button>;
              View <ArrowRight className="ml - 1 h - 4 w - 4" />;
              on_click={handleViewProfile}
              className="text - zion - cyan hover: text - white hover:bg - zion - blue - light";
            >;
              View <ArrowRight className="ml - 1 h - 4 w - 4" />;
            </Button>;
          </div>;
        </div>;
      </div>;
  );
}
    </Card>);
}
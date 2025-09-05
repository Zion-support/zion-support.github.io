<<<<<<< HEAD
import { Button } from "@/components/ui/button",;
import { Card } from "@/components/ui/card",;
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from "next/link",;
import { TalentProfile } from "@/types/talent",;
import Image from 'next/image', // Import next/image;
import React, { useState } from 'react', // Import React and useState;
;
export interface TalentCardProps {;
  talent:TalentProfile,;
  onViewProfile:(id:string) => void,;
  onRequestHire:(talent:TalentProfile) => void,;
  isSaved:boolean,;
  onToggleSave:(id:string, isSaved:boolean) => void,;
  isAuthenticated:boolean;
}
;
export function TalentCard({;
  talent,;
  onViewProfile,;
  onRequestHire,;
  isSaved,;
  onToggleSave,;
  isAuthenticated;
} TalentCardProps) {;
  const [avatarError, setAvatarError] = useState(false),;
;
  const handleViewProfile = () => {;
    if (onViewProfile) {;
      onViewProfile(talent.id),;
=======
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from "next/link",
import { TalentProfile } from "@/types/talent",
import Image from 'next/image', // Import next/image,
import React, { useState } from 'react', // Import React and useState,
export interface TalentCardProps {
  talent: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire: (talent: TalentProfile) => void,
  isSaved: boolean,
  onToggleSave: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean
}

export function TalentCard({
  talent,
  onViewProfile,
  onRequestHire,
  isSaved,
  onToggleSave,
  isAuthenticated
}: TalentCardProps) {
  const [avatarError, setAvatarError] = useState(false),
import Link from "next/link";
import Image from 'next/image'; // Import next/image,
import React, {useState} from 'react'; // Import React and useState,
export interface TalentCardProps {talent: TalentProfile,
  onViewProfile: (id: string) => void;
  onRequestHire: (talent: TalentProfile) => void;
  isSaved: boolean,
  onToggleSave: (id: string, isSaved: boolean) => void;
  isAuthenticated: boolean}

export function TalentCard(_{talent, onViewProfile, onRequestHire, isSaved, onToggleSave, isAuthenticated}: TalentCardProps) {const [avatarError, setAvatarError] = useState(false);

  const handleViewProfile = () => {
    if (onViewProfile) {
      onViewProfile(talent.id)
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    }
  },;
;
  const handleRequestHire = (e:React.MouseEvent) => {;
    e.preventDefault(),;
    e.stopPropagation(),;
    if (onRequestHire) {;
      onRequestHire(talent);
    }
<<<<<<< HEAD
  },;
;
  const handleToggleSave = (e:React.MouseEvent) => {;
    e.preventDefault(),;
    e.stopPropagation(),;
    if (onToggleSave) {;
      onToggleSave(talent.id, !isSaved),;
    }
  },;
;
  const skills = talent.skills?.slice(0, 5) || [],;
  const talentNameInitial = talent.full_name?.charAt(0) || "T",;
;
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
                  style={{ objectFit:'cover' }}
                  className="rounded-full" // Make sure image itself is rounded if fill is used in a rounded container;
                  onError={() => setAvatarError(true)}
=======
  },

  const handleToggleSave = (e: React.MouseEvent) => {
    e.preventDefault(),
    e.stopPropagation(),
    if (onToggleSave) {
      onToggleSave(talent.id, !isSaved)
    }
  },

  const skills = talent.skills?.slice(0, 5) || [],
  const talentNameInitial = talent.fullname?.charAt(0) || "T",
  return (
    <Card className=&quot;overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer&quot; onClick={handleViewProfile}>
      <div className=&quot;p-6&quot;>
        <div className=&quot;flex items-start&quot;>
          <div className=&quot;relative mr-4&quot;>
            <div className=&quot;w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light relative&quot;> {/* Added relative for Image */}
              {talent.profilepicture_url && !avatarError ? (
                <Image,
src={talent.profilepicture_url} 
                  alt={talent.fullname || 'Talent Avatar'}
                  fill={true}
                  style={{ objectFit: 'cover' }}
                  className=&quot;rounded-full&quot; // Make sure image itself is rounded if fill is used in a rounded container,
onError={() => setAvatarError(true)}
                  priority={false}
                />
              ) : (
                <div className=&quot;w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold&quot;>
                  {talentNameInitial}
                </div>
              )}
            </div>
            {talent.isverified && (
              <div className=&quot;absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full&quot;>
                <CheckCircle2 className=&quot;w-5 h-5 text-zion-cyan&quot; />
      onViewProfile(talent.id)}
  };

  const handleRequestHire = (e: React.MouseEvent) => {e.preventDefault();
    e.stopPropagation();
    if (onRequestHire) {
      onRequestHire(talent)}
  };

  const handleToggleSave = (e: React.MouseEvent) => {e.preventDefault();
    e.stopPropagation();
    if (onToggleSave) {
      onToggleSave(talent.id, _!isSaved)}
  };

  const skills = talent.skills?.slice(0, 5) || [];
  const talentNameInitial = talent.fullname?.charAt(0) || "T";

  return (_<Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={handleViewProfile}>
      <div className="p-6">
        <div className="flex items-start">
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light relative"> {_/* Added relative for Image */}
              {talent.profilepicture_url && !avatarError ? (
                <Image,
src={talent.profilepicture_url} 
                  alt={talent.fullname || 'Talent Avatar'}
                  fill={true}
                  style={_{ objectFit: 'cover'}}
                  className="rounded-full" // Make sure image itself is rounded if fill is used in a rounded container,
onError={_() => setAvatarError(true)}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                  priority={false}
                />;
              ) :(;
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">;
                  {talentNameInitial}
                </div>;
              )}
<<<<<<< HEAD
            </div>;
            {talent.is_verified && (;
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">;
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
              </div>;
            )}
          </div>;
          ;
          <div className="flex-1">;
            <div className="flex justify-between items-start">;
              <h3 className="text-lg font-bold text-white">{talent.full_name}</h3>;
              <Button;
                variant="ghost";
                size="sm";
                className="p-1 h-auto text-zion-slate-light hover:text-zion-cyan";
                onClick={handleToggleSave}
              >;
                <Star className={`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" :""}`} />;
                <span className="sr-only">{isSaved ? "Saved" :"Save"}</span>;
              </Button>;
            </div>;
            <p className="text-zion-cyan font-medium">{talent.professional_title}</p>;
            ;
            <div className="mt-2 flex flex-wrap gap-3 text-sm">;
              {talent.location && (;
                <div className="flex items-center text-zion-slate-light">;
                  <MapPin className="h-4 w-4 mr-1" />;
                  <span>{talent.location}</span>;
                </div>;
              )}
              {talent.availability_type && (;
                <div className="flex items-center text-zion-slate-light">;
                  <Clock className="h-4 w-4 mr-1" />;
                  <span>{talent.availability_type}</span>;
                </div>;
              )}
            </div>;
          </div>;
        </div>;
        ;
        {skills.length > 0 && (;
          <div className="mt-4">;
            <div className="flex flex-wrap gap-2">;
              {skills.map((skill, index) => (;
                <span ;
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light";
                >;
=======
            </div>
            {talent.isverified && (
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
              </div>
            )}
          </div>
          
          <div className=&quot;flex-1&quot;>
            <div className=&quot;flex justify-between items-start&quot;>
              <h3 className=&quot;text-lg font-bold text-white&quot;>{talent.fullname}</h3>
              <Button,
variant=&quot;ghost&quot;
                size=&quot;sm&quot;
                className=&quot;p-1 h-auto text-zion-slate-light hover:text-zion-cyan&quot;
                onClick={handleToggleSave}
              >
                <Star className={`h-5 w-5 ${isSaved ? &quot;fill-yellow-400 text-yellow-400&quot; : ""}`} />
                <span className="sr-only&quot;>{isSaved ? &quot;Saved&quot; : &quot;Save"}</span>              </Button>
            </div>
            <p className="text-zion-cyan font-medium">{talent.professionaltitle}</p>
            
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {talent.location && (
                <div className="flex items-center text-zion-slate-light">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{talent.location}</span>
                </div>
              )}
              {talent.availabilitytype && (
                <div className="flex items-center text-zion-slate-light">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{talent.availabilitytype}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {skills.length > 0 && (_<div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span,
key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
                >
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                  {skill}
                </span>;
              ))}
<<<<<<< HEAD
              {(talent.skills?.length || 0) > 5 && (;
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">;
                  +{(talent.skills?.length || 0) - 5} more;
                </span>;
=======
              {_(talent.skills?.length || 0) > 5 && (
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length || 0) - 5} more
                </span>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              )}
            </div>;
          </div>;
        )}
<<<<<<< HEAD
        ;
        <div className="mt-5 flex items-center justify-between">;
          <div>;
            {talent.hourly_rate ? (;
              <div className="text-white font-bold">;
                ${talent.hourly_rate}
                <span className="text-zion-slate-light font-normal">/hr</span>;
              </div>;
            ) :(;
              <div className="text-zion-slate-light">Rate not specified</div>;
            )}
          </div>;
          ;
          <div className="flex items-center gap-2">;
            {isAuthenticated && (;
              <Button;
                size="sm";
                variant="secondary";
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white";
              >;
                Hire;
              </Button>;
            )}
            <Button;
              size="sm";
              variant="ghost";
              onClick={handleViewProfile}
              className="text-zion-cyan hover:text-white hover:bg-zion-blue-light";
            >;
              View <ArrowRight className="ml-1 h-4 w-4" />;
            </Button>;
          </div>;
        </div>;
      </div>;
    </Card>;
  );
=======
        
        <div className="mt-5 flex items-center justify-between">
          <div>
            {talent.hourlyrate ? (
              <div className="text-white font-bold">
                ${talent.hourlyrate}
                <span className="text-zion-slate-light font-normal">/hr</span>
              </div>
            ) : (
              <div className="text-zion-slate-light">Rate not specified</div>
            )}
          </div>
          
          <div className="flex items-center gap-2&quot;>
            {isAuthenticated && (              <Button,
size=&quot;sm&quot;
                variant=&quot;secondary"
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white&quot;
              >
                Hire
              </Button>
            )}
            <Button,
size=&quot;sm&quot;
              variant=&quot;ghost"
              onClick={handleViewProfile}
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light"            >
              View <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}

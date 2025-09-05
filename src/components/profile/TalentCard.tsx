<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from "next/link",
import { TalentProfile } from "@/types/talent",
import Image from 'next/image', // Import next/image
import React, { useState } from 'react', // Import React and useState
=======
import { Button } from &quot;@/components/ui/button&quot;;
import { Card } from &quot;@/components/ui/card&quot;;
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from &quot;next/link&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;
import Image from 'next/image'; // Import next/image
import React, { useState } from 'react'; // Import React and useState
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

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
=======
import Link from "next/link";
import Image from 'next/image'; // Import next/image
import React, {_useState} from 'react'; // Import React and useState

export interface TalentCardProps {_talent: TalentProfile;
  onViewProfile: (_id: string) => void;
  onRequestHire: (_talent: TalentProfile) => void;
  isSaved: boolean;
  onToggleSave: (_id: string, _isSaved: boolean) => void;
  isAuthenticated: boolean;}

export function TalentCard(_{_talent, _onViewProfile, _onRequestHire, _isSaved, _onToggleSave, _isAuthenticated}: TalentCardProps) {_const [avatarError, _setAvatarError] = useState(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleViewProfile = () => {
    if (onViewProfile) {
<<<<<<< HEAD
      onViewProfile(talent.id)
    }
  },

  const handleRequestHire = (e: React.MouseEvent) => {
    e.preventDefault(),
    e.stopPropagation(),
    if (onRequestHire) {
      onRequestHire(talent)
    }
  },

  const handleToggleSave = (e: React.MouseEvent) => {
    e.preventDefault(),
    e.stopPropagation(),
    if (onToggleSave) {
      onToggleSave(talent.id, !isSaved)
    }
  },

<<<<<<< HEAD
  const skills = talent.skills?.slice(0, 5) || [],
  const talentNameInitial = talent.full_name?.charAt(0) || "T",
=======
  const skills = talent.skills?.slice(0, 5) || [];
  const talentNameInitial = talent.full_name?.charAt(0) || &quot;T&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <Card className=&quot;overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer&quot; onClick={handleViewProfile}>
      <div className=&quot;p-6&quot;>
        <div className=&quot;flex items-start&quot;>
          <div className=&quot;relative mr-4&quot;>
            <div className=&quot;w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light relative&quot;> {/* Added relative for Image */}
              {talent.profile_picture_url && !avatarError ? (
                <Image
                  src={talent.profile_picture_url} 
                  alt={talent.full_name || 'Talent Avatar'}
                  fill={true}
                  style={{ objectFit: 'cover' }}
                  className=&quot;rounded-full&quot; // Make sure image itself is rounded if fill is used in a rounded container
                  onError={() => setAvatarError(true)}
                  priority={false}
                />
              ) : (
                <div className=&quot;w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold&quot;>
                  {talentNameInitial}
                </div>
              )}
            </div>
            {talent.is_verified && (
              <div className=&quot;absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full&quot;>
                <CheckCircle2 className=&quot;w-5 h-5 text-zion-cyan&quot; />
=======
      onViewProfile(talent.id);}
  };

  const _handleRequestHire = (_e: React.MouseEvent) => {_e.preventDefault();
    e.stopPropagation();
    if (onRequestHire) {
      onRequestHire(talent);}
  };

  const _handleToggleSave = (_e: React.MouseEvent) => {_e.preventDefault();
    e.stopPropagation();
    if (onToggleSave) {
      onToggleSave(talent.id, _!isSaved);}
  };

  const _skills = talent.skills?.slice(0, 5) || [];
  const _talentNameInitial = talent.full_name?.charAt(0) || "T";

  return (_<Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={_handleViewProfile}>
      <div className="p-6">
        <div className="flex items-start">
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light relative"> {_/* Added relative for Image */}
              {_talent.profile_picture_url && !avatarError ? (
                <Image
                  src={talent.profile_picture_url} 
                  alt={_talent.full_name || 'Talent Avatar'}
                  fill={_true}
                  style={_{ objectFit: 'cover'}}
                  className="rounded-full" // Make sure image itself is rounded if fill is used in a rounded container
                  onError={_() => setAvatarError(true)}
                  priority={_false}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">
                  {_talentNameInitial}
                </div>
              )}
            </div>
            {_talent.is_verified && (
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            )}
          </div>
          
<<<<<<< HEAD
          <div className=&quot;flex-1&quot;>
            <div className=&quot;flex justify-between items-start&quot;>
              <h3 className=&quot;text-lg font-bold text-white&quot;>{talent.full_name}</h3>
              <Button
                variant=&quot;ghost&quot;
                size=&quot;sm&quot;
                className=&quot;p-1 h-auto text-zion-slate-light hover:text-zion-cyan&quot;
                onClick={handleToggleSave}
              >
                <Star className={`h-5 w-5 ${isSaved ? &quot;fill-yellow-400 text-yellow-400&quot; : ""}`} />
                <span className="sr-only&quot;>{isSaved ? &quot;Saved&quot; : &quot;Save"}</span>
=======
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">{_talent.full_name}</h3>
              <Button
                variant="ghost"
                size="sm"
                className="p-1 h-auto text-zion-slate-light hover:text-zion-cyan"
                onClick={_handleToggleSave}
              >
                <Star className={_`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`} />
                <span className="sr-only">{_isSaved ? "Saved" : "Save"}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </Button>
            </div>
            <p className="text-zion-cyan font-medium">{_talent.professional_title}</p>
            
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {_talent.location && (
                <div className="flex items-center text-zion-slate-light">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{talent.location}</span>
                </div>
              )}
              {_talent.availability_type && (
                <div className="flex items-center text-zion-slate-light">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{talent.availability_type}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {_skills.length > 0 && (_<div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, _index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
                >
                  {_skill}
                </span>
              ))}
              {_(talent.skills?.length || 0) > 5 && (
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length || 0) - 5} more
                </span>
              )}
            </div>
          </div>
        )}
        
        <div className="mt-5 flex items-center justify-between">
          <div>
            {_talent.hourly_rate ? (
              <div className="text-white font-bold">
                ${talent.hourly_rate}
                <span className="text-zion-slate-light font-normal">/hr</span>
              </div>
            ) : (
              <div className="text-zion-slate-light">Rate not specified</div>
            )}
          </div>
          
<<<<<<< HEAD
          <div className="flex items-center gap-2&quot;>
            {isAuthenticated && (
=======
          <div className="flex items-center gap-2">
            {_isAuthenticated && (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <Button
                size=&quot;sm&quot;
                variant=&quot;secondary"
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white&quot;
              >
                Hire
              </Button>
            )}
            <Button
<<<<<<< HEAD
              size=&quot;sm&quot;
              variant=&quot;ghost"
              onClick={handleViewProfile}
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light"
=======
              size="sm"
              variant="ghost"
              onClick={_handleViewProfile}
              className="text-zion-cyan hover:text-white hover:bg-zion-blue-light"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              View <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

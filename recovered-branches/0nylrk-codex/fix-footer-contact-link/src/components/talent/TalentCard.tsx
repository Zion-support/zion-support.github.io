
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react",
import { useNavigate } from "react-router-dom";
import { TalentProfile } from "@/types/talent";
export interface TalentCardProps {

  talent: TalentProfile
  onViewProfile: (id: string) => void
  onRequestHire: (talent: TalentProfile) => void
  isSaved: boolean
  onToggleSave: (id: string, isSaved: boolean) => void

  isAuthenticated: boolean
}
export function TalentCard({
=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Star, MapPin, Clock, ArrowRight, CheckCircle2} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {TalentProfile} from "@/types/talent";
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Card } from "@/components/ui/card",
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react",
import { useNavigate } from "react-router-dom",
import { TalentProfile } from "@/types/talent",
export interface TalentCardProps {
  talent: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire: (talent: TalentProfile) => void,
  isSaved: boolean,
  onToggleSave: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean
}

export function TalentCard({;
  talent;
  onViewProfile;
  onRequestHire;
  isSaved;
  onToggleSave;
  isAuthenticated
}: TalentCardProps) {

  const navigate = useNavigate();
  const handleViewProfile = () => {
    // Navigate directly to the talent profile
    navigate(`/talent/${talent.id}`);
    // Also call the onViewProfile callback if provided
    if (onViewProfile) {
      onViewProfile(talent.id)
    }
  }
  const handleRequestHire = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation()
    if (onRequestHire) {
      onRequestHire(talent)
    }
  }
  const handleToggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation()
    if (onToggleSave) {
      onToggleSave(talent.id, !isSaved)
    }
  }
  // Extract skills - limit to 5 for display
  const skills = talent.skills?.slice(0, 5) |[];
import { useNavigate } from "react-router-dom",
import { TalentProfile } from "@/types/talent",
export interface TalentCardProps {
  talent: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire: (talent: TalentProfile) => void,
  isSaved: boolean,
  onToggleSave: (id: string, isSaved: boolean) => void,
  isAuthenticated: boolean
  };
import { Button } from "@/components/ui/button",;
import { Card } from "@/components/ui/card",;
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react",;
import { useNavigate } from "react-router-dom",;
import { TalentProfile } from "@/types/talent",;



=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export interface TalentCardProps {;
  talent: TalentProfile,;
  onViewProfile: (id: string) => void,;
  onRequestHire: (talent: TalentProfile) => void,;
  isSaved: boolean,;
  onToggleSave: (id: string, isSaved: boolean) => void,;
  isAuthenticated: boolean;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

export function TalentCard(): any ({;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

export function TalentCard(): any ({;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  talent;
  onViewProfile;
  onRequestHire;
  isSaved;
  onToggleSave;
<<<<<<< HEAD
<<<<<<< HEAD
  isAuthenticated;
}: TalentCardProps) {;
  const navigate = useNavigate();
  const handleViewProfile = () => {;
    // Navigate directly to the talent profile;
    navigate(`/talent/${talent && talent.id}`);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  isAuthenticated;
}: TalentCardProps) {;
  const navigate = useNavigate();

  const handleViewProfile = () => {;
    // Navigate directly to the talent profile;
    navigate(`/talent/${talent && talent.id}`);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;
      onViewProfile(talent && talent.id);
    }
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleRequestHire = (e: React && React.MouseEvent) => {;
    e && e.preventDefault();
    e && e.stopPropagation(),;
    if (onRequestHire) {;
      onRequestHire(talent);
    }
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleToggleSave = (e: React && React.MouseEvent) => {;
    e && e.preventDefault();
    e && e.stopPropagation(),;
    if (onToggleSave) {;
      onToggleSave(talent && talent.id, !isSaved);
    }
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  // Extract skills - limit to 5 for display;
  const skills = talent && talent.skills?.slice(0, 5) || [];

<<<<<<< HEAD
  // Extract skills - limit to 5 for display;
  const skills = talent && talent.skills?.slice(0, 5) || [];
  return (

import { Button } from "@/components/ui/button",;
import { Card } from "@/components/ui/card",;
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react",;
import { useNavigate } from "react-router-dom",;
import { TalentProfile } from "@/types/talent",;
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
}: TalentCardProps) {;
  const navigate = useNavigate(),;
  const handleViewProfile = () => {;
    // Navigate directly to the talent profile;
    navigate(`/talent/${talent.id}`),;
    // Also call the onViewProfile callback if provided;
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
          <div className="relative mr-4">;
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={handleViewProfile}>;
      <div className="p-6">;
        <div className="flex items-start">;
          {/* Avatar */}

          <div className="relative mr-4">;
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">;
              {talent && talent.profile_picture_url ? (;
                <img
                  src={talent && talent.profile_picture_url} 
                  alt={talent && talent.full_name} 
                  className="w-full h-full object-cover" 
                />;
              ) : (;
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">;
                  {talent && talent.full_name?.charAt(0) || "T"}
                </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              )}
            </div>;
            {talent && talent.is_verified && (;
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
              </div>;
            )}
<<<<<<< HEAD
<<<<<<< HEAD
          </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Main Info */}
          <div className="flex-1">;
            <div className="flex justify-between items-start">;
              <h3 className="text-lg font-bold text-white">{talent && talent.full_name}</h3>;
<<<<<<< HEAD
<<<<<<< HEAD
  const handleToggleSave = (e: React.MouseEvent) => {;
    e.preventDefault(),;
    e.stopPropagation(),;
    if (onToggleSave) {;
      onToggleSave(talent.id, !isSaved);
    }
  },

  // Extract skills - limit to 5 for display
  const skills = talent.skills?.slice(0, 5) || [],

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={handleViewProfile}>
      <div className="p-6">
        <div className="flex items-start">
          {/* Avatar */}
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">
              {talent.profile_picture_url ? (
                <img
                  src={talent.profile_picture_url}
                  alt={talent.full_name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">
                  {talent.full_name?.charAt(0) |"T"}
                </div>
              )}
            </div>
            {talent.is_verified && (
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
              </div>
            )}
          </div>
          {/* Main Info */}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">{talent.full_name}</h3>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Button
                variant="ghost"
                size="sm"
                className="p-1 h-auto text-zion-slate-light hover:text-zion-cyan"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onClick={handleToggleSave}
              >
                <Star className={`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`} />
                <span className="sr-only">{isSaved ? "Saved" : "Save"}</span>
              </Button>
            </div>
            <p className="text-zion-cyan font-medium">{talent.professional_title}</p>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                onClick={handleToggleSave}>;
                <Star className={`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`} />;
                <span className="sr-only">{isSaved ? "Saved" : "Save"}</span>;
              </Button>;
            </div>;
            <p className="text-zion-cyan font-medium">{talent && talent.professional_title}</p>;

<<<<<<< HEAD
            

=======

=======

            

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* Location & Availability */}
            <div className="mt-2 flex flex-wrap gap-3 text-sm">;
              {talent && talent.location && (;
                <div className="flex items-center text-zion-slate-light">;
                  <MapPin className="h-4 w-4 mr-1" />;
                  <span>{talent && talent.location}</span>;
                </div>;
              )}
              {talent && talent.availability_type && (;
                <div className="flex items-center text-zion-slate-light">;
                  <Clock className="h-4 w-4 mr-1" />;
                  <span>{talent && talent.availability_type}</span>;
<<<<<<< HEAD
<<<<<<< HEAD
              {talent.profile_picture_url ? (;
                <img ;
                  src={talent.profile_picture_url} ;
                  alt={talent.full_name} ;
                  className="w-full h-full object-cover" ;
                />;
              ) :(;
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">;
                  {talent.full_name?.charAt(0) || "T"}
                </div>;
              )}
            </div>;
            {talent.is_verified && (;
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">;
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
              </div>;            )}
          </div>;
          ;
          {/* Main Info */}
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
            {/* Location & Availability */}
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

=======
                </div>;
              )}

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
=======

        {/* Skills */}
        {skills && skills.length > 0 && (;
          <div className="mt-4">;
            <div className="flex flex-wrap gap-2">;
              {skills && skills.map((skill, index) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light">;
                  {skill}
                </span>;
              ))}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {(talent && talent.skills?.length || 0) > 5 && (;
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">;
                  +{(talent && talent.skills?.length || 0) - 5} more;
                </span>;
<<<<<<< HEAD
              )}
        ;
            
            {/* Location & Availability */}
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {talent.location && (
                <div className="flex items-center text-zion-slate-light">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{talent.location}</span>
                </div>
              )}
              {talent.availability_type && (
                <div className="flex items-center text-zion-slate-light">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{talent.availability_type}</span>
                </div>
              )}
=======
                </div>;
              )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </div>
        </div>
        {/* Skills */}
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
              {(talent.skills?.length |0) > 5 && (
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length |0) - 5} more
                </span>
              )}
            </div>
          </div>
        )}
        {/* Hourly Rate & Actions */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            {talent.hourly_rate ? (
              <div className="text-white font-bold">
                ${talent.hourly_rate}
                <span className="text-zion-slate-light font-normal">/hr</span>
              </div>
            ) : (
              <div className="text-zion-slate-light">Rate not specified</div>
            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
        {/* Skills */}
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
        ;
        {/* Hourly Rate & Actions */}
        <div className="mt-5 flex items-center justify-between">;
          <div>;
                </span>;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        {/* Skills */}
        {skills && skills.length > 0 && (;
          <div className="mt-4">;
            <div className="flex flex-wrap gap-2">;
              {skills && skills.map((skill, index) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light">;
                  {skill}
                </span>;
              ))}

              {(talent && talent.skills?.length || 0) > 5 && (;
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">;
                  +{(talent && talent.skills?.length || 0) - 5} more;
                </span>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              )}
            </div>;
          </div>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
;
        {/* Hourly Rate & Actions */}
        <div className="mt-5 flex items-center justify-between">;
          <div>;
            {talent.hourly_rate ? (;
              <div className="text-white font-bold">;
                ${talent.hourly_rate}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



        {/* Hourly Rate & Actions */}
        <div className="mt-5 flex items-center justify-between">;
          <div>;
            {talent && talent.hourly_rate ? (;
              <div className="text-white font-bold">;
                ${talent && talent.hourly_rate}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <span className="text-zion-slate-light font-normal">/hr</span>;
              </div>;
            ) : (;
              <div className="text-zion-slate-light">Rate not specified</div>;
<<<<<<< HEAD
<<<<<<< HEAD
          </div>;
          <div className="flex items-center gap-2">;
            {isAuthenticated && (;
            )}
          </div>
          <div className="flex items-center gap-2">
            {isAuthenticated && (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            )}

          </div>;

          <div className="flex items-center gap-2">;
            {isAuthenticated && (;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Button
                size="sm"
                variant="secondary"
                onClick={handleRequestHire}
<<<<<<< HEAD
<<<<<<< HEAD
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
              >
                Hire
              </Button>
=======
                className="bg-zion-purple hover:bg-zion-purple-light text-white">;
                Hire;
              </Button>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                className="bg-zion-purple hover:bg-zion-purple-light text-white">;
                Hire;
              </Button>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            )}
            <Button
              size="sm"
              variant="ghost"
<<<<<<< HEAD

              onClick={(e) => {

                e.stopPropagation(),


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onClick={(e) => {
                e.stopPropagation();

                e.stopPropagation(),
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                handleViewProfile()
              }}
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light"
            >
              View <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onClick={(e) => {;
                e && e.stopPropagation();
                handleViewProfile();
              }}
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light";
            >;
              View <ArrowRight className="ml-1 h-4 w-4" />;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Button } from '@/components / ui / button';
import { Card } from '@/components / ui / card';
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from './lucide-react';
import { use_navigate } from './react-router-dom';
import { TalentProfile } from '@/types / talent';
export interface TalentCardProps {
  talent: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire: (talent: TalentProfile) => void,
  is_saved: boolean,
  onToggleSave: (id: string, is_saved: boolean) => void,
  is_authenticated: boolean;
}
export /**
 * TalentCard - Function description
 */
function TalentCard() {
  const navigate = use_navigate ();
;
  const handleViewProfile = () =>: any {
    // Navigate directly to the talent profile;
    navigate (`/talent/${talent.id}`);
;
    // Also call the onViewProfile callback if provided;
    // Check condition
if ( {) {
  $2
}
      onViewProfile (talent.id);
    }
  }
;
  const handleRequestHire = (e: React.MouseEvent) =>: any {
    e.prevent_default ();
    e.stop_propagation (),
    // Check condition
if ( {) {
  $2
}
      onRequestHire (talent);
    }
  }
;
  const handleToggleSave = (e: React.MouseEvent) =>: any {
    e.prevent_default ();
    e.stop_propagation (),
    // Check condition
if ( {) {
  $2
}
      onToggleSave (talent.id, !is_saved);
    }
  }
;
  // Extract skills - limit to 5 for display;
  const skills = talent.skills?.slice (0, 5) || [];
;
  return (
    <Card className="overflow - hidden transition - all hover:shadow - lg border - zion - blue - light bg - zion - blue cursor - pointer" on_click={handleViewProfile}>;
      <div className="p - 6">;
        <div className="flex items - start">;
          {/* Avatar */}
          <div className="relative mr - 4">;
            <div className="w - 16 h - 16 rounded - full overflow - hidden bg - zion - blue - dark border border - zion - blue - light">;
              {talent.profile_picture_url ? (
                <img;
                  src={talent.profile_picture_url}
                  alt={talent.full_name}
                  className="w - full h - full object - cover";
                />) : (
                <div className="w - full h - full flex items - center justify - center text - zion - slate - light text - xl font - bold">;
                  {talent.full_name?.char_at (0) || "T"}
                </div>)}
            </div>;
            {talent.is_verified && (
              <div className="absolute -bottom - 1 -right - 1 bg - zion - blue p - 0.5 rounded - full">;
                <CheckCircle2 className="w - 5 h - 5 text - zion - cyan" />;
              </div>)}
          </div>;
          {/* Main Info */}
          <div className="flex - 1">;
            <div className="flex justify - between items - start">;
              <h3 className="text - lg font - bold text - white">{talent.full_name}</h3>;
              <Button;
                variant="ghost";
                size="sm";
                className="p - 1 h - auto text - zion - slate - light hover:text - zion - cyan";
                on_click={handleToggleSave}
              >;
                <Star className={`h - 5 w - 5 ${is_saved ? "fill - yellow - 400 text - yellow - 400" : ""}`} />;
                <span className="sr - only">{is_saved ? "Saved" : "Save"}</span>;
              </Button>;
            </div>;
            <p className="text - zion - cyan font - medium">{talent.professional_title}</p>;
            {/* Location & Availability */}
            <div className="mt - 2 flex flex - wrap gap - 3 text - sm">;
              {talent.location && (
                <div className="flex items - center text - zion - slate - light">;
                  <MapPin className="h - 4 w - 4 mr - 1" />;
                  <span>{talent.location}</span>;
                </div>)}
              {talent.availability_type && (
                <div className="flex items - center text - zion - slate - light">;
                  <Clock className="h - 4 w - 4 mr - 1" />;
                  <span>{talent.availability_type}</span>;
                </div>)}
            </div>;
          </div>;
        </div>;
        {/* Skills */}
        {skills.length > 0 && (
          <div className="mt - 4">;
            <div className="flex flex - wrap gap - 2">;
              {skills.map ((skill, index) => (
                <span;
                  key={index}
                  className="px - 2 py - 1 text - xs rounded - full bg - zion - blue - light text - zion - slate - light";
                >;
                  {skill}
                </span>))}
              {(talent.skills?.length || 0) > 5 && (
                <span className="px - 2 py - 1 text - xs rounded - full bg - zion - purple / 20 text - zion - cyan">;
                  +{(talent.skills?.length || 0) - 5} more;
                </span>)}
            </div>;
          </div>)}
        {/* Hourly Rate & Actions */}
        <div className="mt - 5 flex items - center justify - between">;
          <div>;
            {talent.hourly_rate ? (
              <div className="text - white font - bold">;
                ${talent.hourly_rate}
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
              size="sm";
              variant="ghost";
              on_click={(e) => {
                e.stop_propagation ();
                handleViewProfile ();
              }}
              className="text - zion - cyan hover: text - white hover:bg - zion - blue - light";
            >;
              View <ArrowRight className="ml - 1 h - 4 w - 4" />;
<<<<<<< HEAD
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
              onClick={(e) => {;
                e.stopPropagation(),;
                handleViewProfile(),;
              }}
              className="text-zion-cyan hover:text-white hover:bg-zion-blue-light";
            >;
              View <ArrowRight className="ml-1 h-4 w-4" />;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </Button>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
    </Card>;
  );}
 export interface TalentCardProps {
  talent: TalentProfile;
onViewProfile: (id: string) => void;
onRequestHire: (talent: TalentProfile) => void;
isSaved: boolean;
onToggleSave: (id: string, isSaved: boolean) => void;
isAuthenticated: boolean 
}export function TalentCard ({
  talent;
onViewProfile;
onRequestHire;
isSaved;
onToggleSave;
isAuthenticated 
}: TalentCardProps) {
  const navigate = useNavigate ();
//Navigate directly to the talent profile navigate (`/talent/$ {
  talent.id 
}`);
//Also call the onViewProfile callback if provided </div>) 
}</div> </Button> </div> <p className="text-zion-cyan font-medium"> {
  talent.professional title 
}</p> {
  /* Location & Availability */ 
}<div className="mt-2 flex flex-wrap gap-3 text-sm"> {
  talent.location && (<div className="flex items-center text-zion-slate-light"> <MapPin className="h-4 w-4 mr-1" /> <span> {
  talent.location 
}</span> </div>) 
}{
  talent.availability type && (<div className="flex items-center text-zion-slate-light"> <Clock className="h-4 w-4 mr-1" /> <span> {
  talent.availability type 
}</span> </div>) 
}</div> </div> </div> {
  /* Skills */ 
}{
  skills.length > 0 && (<div className="mt-4"> <div className="flex flex-wrap gap-2"> {
  skills.map ( (skill, index) => (<span key= {
  index 
}className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light" > {
  skill 
}</span>) ) 
}{
  (talent.skills?.length || 0) > 5 && (<span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan"> + {
  (talent.skills?.length || 0) - 5 
}more </span>) 
}</div> </div>) 
}{
  /* Hourly Rate & Actions */ 
}<div className="mt-5 flex items-center justify-between"> <div> {
  talent.hourly rate ? (<div className="text-white font-bold"> $ {
  talent.hourly rate 
}<span className="text-zion-slate-light font-normal">/hr</span> </div>) : (<div className="text-zion-slate-light">Rate not specified</div>) 
}</div> <Button size="sm" variant="secondary" onClick= {
  handleRequestHire 
}className="bg-zion-purple hover:bg-zion-purple-light text-white" > Hire </Button>) 
}<Button > View <ArrowRight className="ml-1 h-4 w-4" /> </Button> </div> </div> </div> </Card>) 
}
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    </Card>);
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

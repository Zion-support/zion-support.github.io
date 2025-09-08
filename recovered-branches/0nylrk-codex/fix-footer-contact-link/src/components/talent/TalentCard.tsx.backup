talent: TalentProfile
  onViewProfile: (id: string) => void
  onRequestHire: (talent: TalentProfile) => void
  isSaved: boolean
  onToggleSave: (id: string, isSaved: boolean) => void


<<<<<<< HEAD

=======
  isAuthenticated: boolean
}
export function TalentCard({
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Star, MapPin, Clock, ArrowRight, CheckCircle2} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {TalentProfile} from "@/types/talent";
<<<<<<< HEAD
=======
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

export function TalentCard(): any ({;


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


import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Star, MapPin, Clock, ArrowRight, CheckCircle2} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {TalentProfile} from "@/types/talent";


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
>>>>>>> origin/cursor/delete-old-data-records-6bba


export interface TalentCardProps {;
  talent: TalentProfile,;
  onViewProfile: (id: string) => void,;
  onRequestHire: (talent: TalentProfile) => void,;
  isSaved: boolean,;
  onToggleSave: (id: string, isSaved: boolean) => void,;
  isAuthenticated: boolean;
}
<<<<<<< HEAD


export function TalentCard(): any ({;


=======

export function TalentCard(): any ({;

>>>>>>> origin/cursor/delete-old-data-records-6bba
  talent;
  onViewProfile;
  onRequestHire;
  isSaved;

<<<<<<< HEAD
  onToggleSave;

=======

}

}: TalentCardProps) {;
  const navigate = useNavigate();

  const handleViewProfile = () => {;
    // Navigate directly to the talent profile;`
    navigate(`/talent/${talent && talent.id}`);

>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;
      onViewProfile(talent && talent.id);
    }
  };
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleRequestHire = (e: React && React.MouseEvent) => {;
    e && e.preventDefault();
    e && e.stopPropagation(),;
    if (onRequestHire) {;
      onRequestHire(talent);
    }
  };
<<<<<<< HEAD



  const handleToggleSave = (e: React && React.MouseEvent) => {;
    if (onToggleSave) {;
      onToggleSave(talent && talent.id, !isSaved);

    }
  };



=======
  const handleToggleSave = (e: React && React.MouseEvent) => {;
    if (onToggleSave) {;
      onToggleSave(talent && talent.id, !isSaved);

>>>>>>> origin/cursor/delete-old-data-records-6bba

  // Extract skills - limit to 5 for display;
  const skills = talent && talent.skills?.slice(0, 5) || [];


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (

  return (
"
    <Card className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer" onClick={handleViewProfile}>;"
      <div className="p-6">;"
        <div className="flex items-start">;
          {/* Avatar */}

<<<<<<< HEAD

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



=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
              )}
            </div>;
            {talent && talent.is_verified && (;"
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;"

                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
              </div>;
            )}

<<<<<<< HEAD

=======
          {/* Main Info */}
          <div className="flex-1">;
            <div className="flex justify-between items-start">;
              <h3 className="text-lg font-bold text-white">{talent && talent.full_name}</h3>;
  const handleToggleSave = (e: React.MouseEvent) => {;
    e.preventDefault(),;
    e.stopPropagation(),;
    if (onToggleSave) {;
      onToggleSave(talent.id, !isSaved);
    }
  },
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

                onClick={handleToggleSave}>;
                <Star className={`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`} />;

                <span className="sr-only">{isSaved ? "Saved" : "Save"}</span>;
              </Button>;
            </div>;"
            <p className="text-zion-cyan font-medium">{talent && talent.professional_title}</p>;


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            {/* Location & Availability */}

            <div className="mt-2 flex flex-wrap gap-3 text-sm">;
              {talent && talent.location && (;"
                <div className="flex items-center text-zion-slate-light">;"
                  <MapPin className="h-4 w-4 mr-1" />;
                  <span>{talent && talent.location}</span>;
                </div>;
              )}
              {talent && talent.availability_type && (;"
                <div className="flex items-center text-zion-slate-light">;"
                  <Clock className="h-4 w-4 mr-1" />;
                  <span>{talent && talent.availability_type}</span>;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

            </div>;
          </div>;
        </div>;

<<<<<<< HEAD


=======
              )}
            </div>;
          </div>;
        )}

"
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light">;
                  {skill}
                </span>;
              ))}

>>>>>>> origin/cursor/delete-old-data-records-6bba
              {(talent && talent.skills?.length || 0) > 5 && (;
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">;
                  +{(talent && talent.skills?.length || 0) - 5} more;
                </span>;
<<<<<<< HEAD




=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
              )}
            </div>;
          </div>;
        )}
<<<<<<< HEAD



=======
;
        {/* Hourly Rate & Actions */}
        <div className="mt-5 flex items-center justify-between">;
          <div>;
            {talent.hourly_rate ? (;
              <div className="text-white font-bold">;
                ${talent.hourly_rate}
"
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <span className="text-zion-slate-light font-normal">/hr</span>;
              </div>;
            ) : (;"
              <div className="text-zion-slate-light">Rate not specified</div>;
<<<<<<< HEAD


            )}


=======

            )}

              variant="ghost"

              <Button
                size="sm"
                variant="secondary"
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
              >
                Hire
              </Button>
                className="bg-zion-purple hover:bg-zion-purple-light text-white">;
                Hire;
              </Button>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            )}
            <Button
              size="sm"
              variant="ghost"

              onClick={(e) => {

                e.stopPropagation(),


<<<<<<< HEAD


=======
              onClick={(e) => {
                e.stopPropagation();

                e.stopPropagation(),
              variant="ghost"
>>>>>>> origin/cursor/delete-old-data-records-6bba

                handleViewProfile()
              }}"
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light"
            >"

              View <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )


              onClick={(e) => {;
                e && e.stopPropagation();
                handleViewProfile();
              }}"
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light";
            >;"
              View <ArrowRight className="ml-1 h-4 w-4" />;

<<<<<<< HEAD
import { Button } from '@/components / ui / button';
import { Card } from '@/components / ui / card';
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from './lucide-react';
import { use_navigate } from './react-router-dom';

=======
import { Button } from '@/components / ui / button';'
import { Card } from '@/components / ui / card';'
import { Star, MapPin, Clock, ArrowRight, CheckCircle2 } from './lucide-react';'
import { use_navigate } from './react-router-dom';'
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { TalentProfile } from '@/types / talent';
export interface TalentCardProps {}

  talent: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire: (talent: TalentProfile) => void,
  is_saved: boolean,

}
      onViewProfile (talent.id);
    }
  }
;

}
      onRequestHire (talent);
    }
  }
;

}
      onToggleSave (talent.id, !is_saved);
    }
  }
;
  // Extract skills - limit to 5 for display;
  const skills = talent.skills?.slice (0, 5) || [];
;

            <div className="w - 16 h - 16 rounded - full overflow - hidden bg - zion - blue - dark border border - zion - blue - light">;
              {talent.profile_picture_url ? (

                <img;
                  src={talent && talent.profile_picture_url} 
                  alt={talent && talent.full_name} "
                  className="w-full h-full object-cover""
                />;
</img>"
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">;"
                </div>;
            </div>;"
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;"
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;"
</CheckCircle2>
          <div className="flex-1">;"
            <div className="flex justify-between items-start">;"
              <h3 className="text-lg font-bold text-white">{talent && talent.full_name}</h3>;"
              <Button;"
                variant="ghost"""
                size="sm"""
                className="p-1 h-auto text-zion-slate-light hover:text-zion-cyan""
                onClick={handleToggleSave}>;
"`;
                <Star className={`h-5 w-5 ${isSaved ? "fill-yellow-400 text-yellow-400" : ""}`} />;"
                <span className="sr-only">{isSaved ? "Saved" : "Save"}</span>;"
              ;
            <p className="text-zion-cyan font-medium">{talent && talent.professional_title}</p>;""
            <div className="mt-2 flex flex-wrap gap-3 text-sm">;"
                <div className="flex items-center text-zion-slate-light">;"
                  <MapPin className="h-4 w-4 mr-1" />;"

                  <span>{talent && talent.location}</span>;
                  <Clock className="h-4 w-4 mr-1" />;"

                  <span>{talent && talent.availability_type}</span>;
          <div className="mt-4">;"
            <div className="flex flex-wrap gap-2">;"
                <span;
                  key={index}"
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light">;"
</span>
                </span>;"
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">;"
                </span>;
        <div className="mt-5 flex items-center justify-between">;"
          <div>;
              <div className="text-white font-bold">;"
                <span className="text-zion-slate-light font-normal">/hr</span>;"
              <div className="text-zion-slate-light">Rate not specified</div>;"
          <div className="flex items-center gap-2">;"
          <div className="flex items-center gap-2">"
                variant="secondary""
                onClick={handleRequestHire}"
                className="bg-zion-purple hover:bg-zion-purple-light text-white">;"

              variant="ghost"")
              onClick={(e) => {
              View <ArrowRight className="ml-1 h-4 w-4" />"

              View <ArrowRight className="ml-1 h-4 w-4" />;"
    <Card className="overflow - hidden transition - all hover:shadow - lg border - zion - blue - light bg - zion - blue cursor - pointer" on_click={handleViewProfile}>;"
      <div className="p - 6">;"
        <div className="flex items - start">;"
          <div className="relative mr - 4">;"
            <div className="w - 16 h - 16 rounded - full overflow - hidden bg - zion - blue - dark border border - zion - blue - light">;"
                  src={talent.profile_picture_url}

                />) : (
                <div className="w - full h - full flex items - center justify - center text - zion - slate - light text - xl font - bold">;"
</div>)
                </div>)}
              <div className="absolute -bottom - 1 -right - 1 bg - zion - blue p - 0.5 rounded - full">;"
                <CheckCircle2 className="w - 5 h - 5 text - zion - cyan" />;"
          <div className="flex - 1">;"
            <div className="flex justify - between items - start">;"
              <h3 className="text - lg font - bold text - white">{talent.full_name}</h3>;"
                variant="ghost";""
                size="sm";""
                className="p - 1 h - auto text - zion - slate - light hover:text - zion - cyan";"
                on_click={handleToggleSave}
              >;
                <Star className={`h - 5 w - 5 ${is_saved ? "fill - yellow - 400 text - yellow - 400" : ""}`} />;"
                <span className="sr - only">{is_saved ? "Saved" : "Save"}</span>;"
            <p className="text - zion - cyan font - medium">{talent.professional_title}</p>;""
            <div className="mt - 2 flex flex - wrap gap - 3 text - sm">;"
                <div className="flex items - center text - zion - slate - light">;"
                  <MapPin className="h - 4 w - 4 mr - 1" />;"

                  <span>{talent.location}</span>;

                  className="px - 2 py - 1 text - xs rounded - full bg - zion - blue - light text - zion - slate - light";
                >;
                  {skill}
                </span>))}

                <span className="px - 2 py - 1 text - xs rounded - full bg - zion - purple / 20 text - zion - cyan">;
                  +{(talent.skills?.length || 0) - 5} more;
                </span>)}
            </div>;
          </div>)}

                className="bg - zion - purple hover:bg - zion - purple - light text - white";
              >;
                Hire;
              </Button>)}

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
<<<<<<< HEAD

              View <ArrowRight className="ml - 1 h - 4 w - 4" />;
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

              View <ArrowRight className="ml-1 h-4 w-4" />;

>>>>>>> origin/cursor/delete-old-data-records-6bba
            </Button>;

          </div>;
        </div>;
<<<<<<< HEAD

      </div>;
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


=======

      </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

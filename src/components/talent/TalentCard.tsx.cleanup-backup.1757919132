<<<<<<< HEAD
import React from 'react',
import { useRouter } from 'next/router',
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import { FavoriteButton } from "@/components/FavoriteButton",
import { TalentProfile } from "@/types/talent",
import { RatingStars } from '@/components/RatingStars',
import { useAuth } from '@/context/auth/AuthProvider',
import { useCart } from '@/context/CartContext',

export interface TalentCardProps {
  talent: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire: (talent: TalentProfile) => void,
  isAuthenticated: boolean
=======
import React from 'react';
import { useRouter } from 'next/router';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import { FavoriteButton } from "@/components/FavoriteButton";
import { TalentProfile } from "@/types/talent";
import { RatingStars } from '@/components/RatingStars';
import { useAuth } from '@/context/auth/AuthProvider';
import { useCart } from '@/context/CartContext';

export interface TalentCardProps {
  talent: TalentProfile;
  onViewProfile: (id: string) => void;
  onRequestHire: (talent: TalentProfile) => void;
  isAuthenticated: boolean;
>>>>>>> origin/auto/autonomy-17186719616
}

const TalentCardComponent = ({
  talent,
  onViewProfile,
  onRequestHire,
  isAuthenticated
}: TalentCardProps) => {
<<<<<<< HEAD
  const router = useRouter(),
  
  const handleViewProfile = () => {
    // Navigate directly to the talent profile
    router.push(`/talent/${talent.id}`),
    
    // Also call the onViewProfile callback if provided
    if (onViewProfile) {
      onViewProfile(talent.id),
    }
  },

  const handleRequestHire = (e: React.MouseEvent) => {
    e.preventDefault(),
    e.stopPropagation(),
    if (onRequestHire) {
      onRequestHire(talent)
    }
  },


  // Extract skills - limit to 5 for display
  const skills = talent.skills?.slice(0, 5) || [],
=======
  const router = useRouter();
  
  const handleViewProfile = () => {
    // Navigate directly to the talent profile
    router.push(`/talent/${talent.id}`);
    
    // Also call the onViewProfile callback if provided
    if (onViewProfile) {
      onViewProfile(talent.id);
    }
  };

  const handleRequestHire = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onRequestHire) {
      onRequestHire(talent);
    }
  };


  // Extract skills - limit to 5 for display
  const skills = talent.skills?.slice(0, 5) || [];
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <Card
      className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple"
<<<<<<< HEAD
      onClick = {handleViewProfile,}
      tabIndex = {0,}
      onClick={handleViewProfile}
      tabIndex={0}






=======
      onClick={handleViewProfile}
      tabIndex={0}
>>>>>>> origin/auto/autonomy-17186719616
    >
      <div className="p-6">
        <div className="flex items-start">
          {/* Avatar */}
<<<<<<< HEAD
          <div className="relative mr-4">;
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">;
              {talent && talent.profile_picture_url ? (;
                <img
                  src = {talent.profile_picture_url,}
                  alt = {talent.full_name,}
                  src={talent.profile_picture_url}
                  alt={talent.full_name}



=======
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">
              {talent.profile_picture_url ? (
                <img
                  src={talent.profile_picture_url}
                  alt={talent.full_name}
>>>>>>> origin/auto/autonomy-17186719616
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">
<<<<<<< HEAD
                  {talent.full_name?.charAt(0) |"T"}

                  {talent.full_name?.charAt(0) || "T"}
                </div>
                />;
              ) : (;
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">;
                  {talent && talent.full_name?.charAt(0) || "T"}
                </div>;
              )}

            </div>;
            {talent && talent.is_verified && (;
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
              </div>;
            )}

          </div>;

=======
                  {talent.full_name?.charAt(0) || "T"}
                </div>
              )}
            </div>
            {talent.is_verified && (
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />
              </div>
            )}
          </div>
          
>>>>>>> origin/auto/autonomy-17186719616
          {/* Main Info */}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">{talent.full_name}</h3>
              <FavoriteButton itemId={talent.id} className="-mt-1" />
            </div>
            <p className="text-white font-medium">{talent.professional_title}</p>
            
<<<<<<< HEAD


            </div>;
            {talent && talent.is_verified && (;
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
              </div>;
            )}

          </div>;


          {/* Main Info */}
          <div className="flex-1">;
            <div className="flex justify-between items-start">;
              <h3 className="text-lg font-bold text-white">{talent && talent.full_name}</h3>;
              <FavoriteButton itemId={talent && talent.id} className="-mt-1" />;
            </div>;
            <p className="text-white font-medium">{talent && talent.professional_title}</p>;



            




=======
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
        
>>>>>>> origin/auto/autonomy-17186719616
        {/* Skills */}
        {skills.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
<<<<<<< HEAD

            </div>;
          </div>;
        </div>;
        {/* Skills */}

        {skills && skills.length > 0 && (;
          <div className="mt-4">;
            <div className="flex flex-wrap gap-2">;
              {skills && skills.map((skill, index,) => (;

                <span
                  key = {index,}



                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light">;

              {skills.map((skill, index) => (
                <span 
                  key={index}




                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
                >
                  {skill}
                </span>;
=======
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
                >
                  {skill}
                </span>
>>>>>>> origin/auto/autonomy-17186719616
              ))}
              {(talent.skills?.length || 0) > 5 && (
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length || 0) - 5} more
                </span>
              )}
            </div>
          </div>
        )}
<<<<<<< HEAD




        {/* Hourly Rate & Actions */}
        <div className="mt-5 flex items-center justify-between">;
          <div>;
            {talent && talent.hourly_rate ? (;
              <div className="text-white font-bold">;
                ${talent && talent.hourly_rate}
                <span className="text-zion-slate-light font-normal">/hr</span>;
              </div>;
            ) : (;
              <div className="text-zion-slate-light">Rate not specified</div>;
            )}
          </div>
          




          <div className="flex items-center gap-2">
            {isAuthenticated && (
          </div>;

          <div className="flex items-center gap-2">;
            {isAuthenticated && (;
              <Button
                size="sm"
                variant="secondary"
                onClick = {handleRequestHire,}
                onClick={handleRequestHire}




=======
        
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
            )}
          </div>
          
          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <Button
                size="sm"
                variant="secondary"
                onClick={handleRequestHire}
>>>>>>> origin/auto/autonomy-17186719616
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
              >
                Hire
              </Button>
            )}
            <Button
              size="sm"
              variant="ghost"
<<<<<<< HEAD




              onClick={(e) => {
                e.stopPropagation(),
                handleViewProfile(),
              }}
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light"
=======
              onClick={(e) => {
                e.stopPropagation();
                handleViewProfile();
              }}
              className="text-zion-cyan hover:text-white hover:bg-zion-blue-light"
>>>>>>> origin/auto/autonomy-17186719616
            >
              View <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
<<<<<<< HEAD
  )
},

export const TalentCard = React.memo(TalentCardComponent),
TalentCard.displayName = 'TalentCard',
=======
  );
};

export const TalentCard = React.memo(TalentCardComponent);
TalentCard.displayName = 'TalentCard';
>>>>>>> origin/auto/autonomy-17186719616

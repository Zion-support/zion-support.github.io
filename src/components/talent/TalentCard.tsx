<<<<<<< HEAD
import React from 'react';
import { useRouter  } from 'next/router';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { useRouter  } from 'next/router';
=======

export const TalentCard = React.memo(TalentCardComponent);
TalentCard.displayName = 'TalentCard'; import React from 'react'
import { useRouter } from 'next/router'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import { FavoriteButton } from "@/components/FavoriteButton"
import { TalentProfile } from "@/types/talent"
import { RatingStars } from '@/components/RatingStars'
import { useAuth } from '@/context/auth/AuthProvider'
import { useCart } from '@/context/CartContext'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from 'react',
import { useRouter } from 'next/router',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import { FavoriteButton } from "@/components/FavoriteButton",

export const TalentCard = React && React.memo(TalentCardComponent);
TalentCard && TalentCard.displayName = 'TalentCard';import React from 'react';
import { useRouter } from 'next/router';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FavoriteButton } from "@/components/FavoriteButton";
import { TalentProfile } from "@/types/talent";
import { RatingStars  } from '@/components/RatingStars';
import { useAuth  } from '@/context/auth/AuthProvider';
import { useCart } from '@/context/CartContext';
<<<<<<< HEAD
=======


import { TalentProfile } from "@/types/talent",
import { RatingStars } from '@/components/RatingStars',
import { useAuth } from '@/context/auth/AuthProvider',
import { useCart } from '@/context/CartContext',
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export interface TalentCardProps {

  talent: TalentProfile
  onViewProfile: (id: string,) => void
  onRequestHire: (talent: TalentProfile,) => void
  isAuthenticated: boolean
<<<<<<< HEAD
=======


import React from 'react',;
import { useRouter } from 'next/router',;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FavoriteButton } from "@/components/FavoriteButton",;
import { TalentProfile } from "@/types/talent",;
import { RatingStars } from '@/components/RatingStars',;
import { useAuth } from '@/context/auth/AuthProvider',;
import { useCart } from '@/context/CartContext',;
export interface TalentCardProps {;
  talent: TalentProfile,;
  onViewProfile: (id: string) => void,;
  onRequestHire: (talent: TalentProfile) => void,;
  isAuthenticated: boolean;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}
const TalentCardComponent = ({
  talent
  onViewProfile
  onRequestHire
  isAuthenticated
}: TalentCardProps,) => {
  const router = useRouter()
  const handleViewProfile = () => {
    // Navigate directly to the talent profile
    router.push(`/talent/${talent.id}`)
    // Also call the onViewProfile callback if provided
    if (onViewProfile) {
      onViewProfile(talent.id)
    }
<<<<<<< HEAD
  }
=======
<<<<<<< HEAD
  }
=======
<<<<<<< HEAD
=======
  },;
  const handleRequestHire = (e: React.MouseEvent) => {;
    e.preventDefault(),;
    e.stopPropagation(),;
    if (onRequestHire) {;
      onRequestHire(talent);
    }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  },

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const handleRequestHire = (e: React.MouseEvent,) => {
    e.preventDefault()
    e.stopPropagation()
    if (onRequestHire) {
      onRequestHire(talent)
    }
  }
  // Extract skills - limit to 5 for display
  const skills = talent.skills?.slice(0, 5) |[]
  return (
    <Card
      className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple"
<<<<<<< HEAD
      onClick = {handleViewProfile,}
      tabIndex = {0,}>;
      <div className="p-6">;
        <div className="flex items-start">;
=======


      onClick={handleViewProfile}
      tabIndex={0}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    >
      <div className="p-6">
        <div className="flex items-start">
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          {/* Avatar */}
          <div className="relative mr-4">;
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">;
              {talent && talent.profile_picture_url ? (;
                <img
<<<<<<< HEAD
                  src = {talent && talent.profile_picture_url,}
                  alt = {talent && talent.full_name,}
=======


                  src={talent.profile_picture_url}
                  alt={talent.full_name}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">
                  {talent.full_name?.charAt(0) |"T"}
                </div>
              )}
            </div>;
            {talent && talent.is_verified && (;
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
              </div>;
            )}
          </div>
          {/* Main Info */}
<<<<<<< HEAD
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">{talent.full_name}</h3>
              <FavoriteButton itemId={talent.id} className="-mt-1" />
            </div>
            <p className="text-white font-medium">{talent.professional_title}</p>
=======
          <div className="flex-1">;
            <div className="flex justify-between items-start">;
              <h3 className="text-lg font-bold text-white">{talent && talent.full_name}</h3>;
              <FavoriteButton itemId={talent && talent.id} className="-mt-1" />;
            </div>;
            <p className="text-white font-medium">{talent && talent.professional_title}</p>;


=======

            
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
                </div>;
              )}
<<<<<<< HEAD
            </div>
          </div>
        </div>
=======


            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        {/* Skills */}
        {skills.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index,) => (
                <span
                  key = {index,}
<<<<<<< HEAD
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light">;
=======
<<<<<<< HEAD
=======
=======
              {skills.map((skill, index) => (
                <span 
                  key={index}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
                >
                  {skill}
                </span>
              ))}
              {(talent.skills?.length |0) > 5 && (
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length |0) - 5} more
                </span>
=======
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
                >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                  {skill}
                </span>;
              ))}
              {(talent.skills?.length |0) > 5 && (
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length |0) - 5} more
                </span>
              )}
            </div>;
          </div>;
        )}
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
<<<<<<< HEAD
          </div>
=======


          
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <Button
                size="sm"
                variant="secondary"
<<<<<<< HEAD
                onClick = {handleRequestHire,}
                className="bg-zion-purple hover:bg-zion-purple-light text-white">;
                Hire;
              </Button>;
=======


                onClick={handleRequestHire}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
              >
                Hire
              </Button>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            )}
            <Button
              size="sm"
              variant="ghost"
<<<<<<< HEAD
              onClick={(e,) => {
                e.stopPropagation()
=======
<<<<<<< HEAD
              onClick={(e,) => {
<<<<<<< HEAD
                e.stopPropagation()
=======
              onClick={(e) => {
=======
=======
              onClick={(e) => {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                e.stopPropagation(),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
=======
<<<<<<< HEAD
}
export const TalentCard = React.memo(TalentCardComponent)
TalentCard.displayName = 'TalentCard'
export const TalentCard = React.memo(TalentCardComponent)
TalentCard.displayName = 'TalentCard'

<<<<<<< HEAD
=======
export const TalentCard = React.memo(TalentCardComponent),
TalentCard.displayName = 'TalentCard',
=======
},

export const TalentCard = React.memo(TalentCardComponent),
TalentCard.displayName = 'TalentCard',
<<<<<<< HEAD
;
export const TalentCard = React.memo(TalentCardComponent);
TalentCard.displayName = 'TalentCard';
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div className="mt-5 flex items-center justify-between">;
          <div>;
            {talent.hourly_rate ? (;
              <div className="text-white font-bold">;
                ${talent.hourly_rate}
                <span className="text-zion-slate-light font-normal">/hr</span>;
              </div>;
            ) : (;
              <div className="text-zion-slate-light">Rate not specified</div>;
            )}
          </div>;
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
                handleViewProfile();
              }}
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light";
            >;
              View <ArrowRight className="ml-1 h-4 w-4" />;
=======
export const TalentCard = React.memo (TalentCardComponent);
TalentCard.display_name = 'TalentCard'; import React from 'react';
import { use_router } from 'next / router';
import { Badge  } from '@/components / ui / badge';
import { Button  } from '@/components / ui / button';
import { Card, CardContent, CardFooter  } from '@/components / ui / card';
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FavoriteButton  } from '@/components / FavoriteButton';
import { TalentProfile  } from '@/types / talent';
import { RatingStars } from '@/components / RatingStars';
import { use_auth } from '@/context / auth / AuthProvider';
import { use_cart } from '@/context / CartContext';
export interface TalentCardProps {
  talent: TalentProfile,
  onViewProfile: (id: string, ) => void,
  onRequestHire: (talent: TalentProfile, ) => void,
  is_authenticated: boolean;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}
export const TalentCard = React.memo(TalentCardComponent)
TalentCard.displayName = 'TalentCard'
export const TalentCard = React.memo(TalentCardComponent)
TalentCard.displayName = 'TalentCard'

            </Button>;
          </div>;
        </div>;
      </div>;
    </Card>;
  );
},;
<<<<<<< HEAD

export const TalentCard = React && React.memo(TalentCardComponent),;
TalentCard && TalentCard.displayName = 'TalentCard',;

export const TalentCard = React && React.memo(TalentCardComponent);
TalentCard && TalentCard.displayName = 'TalentCard';
    </Card>);
},
export const TalentCard = React.memo (TalentCardComponent),
TalentCard.display_name = 'TalentCard',
export const TalentCard = React.memo (TalentCardComponent);
TalentCard.display_name = 'TalentCard';
=======
export const TalentCard = React.memo(TalentCardComponent);
TalentCard.displayName = 'TalentCard';
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

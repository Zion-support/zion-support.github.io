<<<<<<< HEAD

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
=======
import React from 'react',
import { useRouter } from 'next/router',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import { FavoriteButton } from "@/components/FavoriteButton",
<<<<<<< HEAD
import { TalentProfile } from "@/types/talent";
import { RatingStars  } from '@/components/RatingStars';
import { useAuth  } from '@/context/auth/AuthProvider';
import { useCart } from '@/context/CartContext';
=======
import { TalentProfile } from "@/types/talent",
import { RatingStars } from '@/components/RatingStars',
import { useAuth } from '@/context/auth/AuthProvider',
import { useCart } from '@/context/CartContext',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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

  const handleRequestHire = (e: React.MouseEvent,) => {
    e.preventDefault()
    e.stopPropagation()
    if (onRequestHire) {
      onRequestHire(talent)
    }
<<<<<<< HEAD
  }
=======
  },


>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Extract skills - limit to 5 for display
  const skills = talent.skills?.slice(0, 5) |[]
  return (
    <Card
      className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple"
<<<<<<< HEAD
      onClick = {handleViewProfile,}
      tabIndex = {0,}
=======
      onClick={handleViewProfile}
      tabIndex={0}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    >
      <div className="p-6">
        <div className="flex items-start">
          {/* Avatar */}
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">
              {talent.profile_picture_url ? (
                <img
<<<<<<< HEAD
                  src = {talent.profile_picture_url,}
                  alt = {talent.full_name,}
=======
                  src={talent.profile_picture_url}
                  alt={talent.full_name}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">
<<<<<<< HEAD
                  {talent.full_name?.charAt(0) |"T"}
=======
                  {talent.full_name?.charAt(0) || "T"}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
              <FavoriteButton itemId={talent.id} className="-mt-1" />
            </div>
            <p className="text-white font-medium">{talent.professional_title}</p>
<<<<<<< HEAD
=======
            
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
<<<<<<< HEAD
            </div>
          </div>
        </div>
=======
            </div>;
          </div>;
        </div>;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        {/* Skills */}
        {skills.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
<<<<<<< HEAD
              {skills.map((skill, index,) => (
                <span
                  key = {index,}
=======
              {skills.map((skill, index) => (
                <span 
                  key={index}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
                >
                  {skill}
                </span>;
              ))}
              {(talent.skills?.length || 0) > 5 && (
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length || 0) - 5} more
                </span>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
            )}
          </div>
<<<<<<< HEAD
=======
          
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <Button
                size="sm"
                variant="secondary"
<<<<<<< HEAD
                onClick = {handleRequestHire,}
=======
                onClick={handleRequestHire}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
              >
                Hire
              </Button>
            )}
            <Button
              size="sm"
              variant="ghost"
<<<<<<< HEAD
              onClick={(e,) => {
=======
              onClick={(e) => {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
                e.stopPropagation(),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
}
export const TalentCard = React.memo(TalentCardComponent)
TalentCard.displayName = 'TalentCard'
export const TalentCard = React.memo(TalentCardComponent)
TalentCard.displayName = 'TalentCard'

<<<<<<< HEAD
=======
export const TalentCard = React.memo(TalentCardComponent),
TalentCard.displayName = 'TalentCard',
<<<<<<< HEAD
;
export const TalentCard = React.memo(TalentCardComponent);
TalentCard.displayName = 'TalentCard';
=======
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
            </Button>;
          </div>;
        </div>;
      </div>;
    </Card>;
  );
},;
export const TalentCard = React.memo(TalentCardComponent);
TalentCard.displayName = 'TalentCard';
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

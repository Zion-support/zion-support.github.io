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
import { TalentProfile } from "@/types/talent",
import { RatingStars } from '@/components/RatingStars',
import { useAuth } from '@/context/auth/AuthProvider',
import { useCart } from '@/context/CartContext',
export interface TalentCardProps {
  talent: TalentProfile
  onViewProfile: (id: string,) => void
  onRequestHire: (talent: TalentProfile,) => void
  isAuthenticated: boolean
}
onst TalentCardComponent = ({
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




  const handleRequestHire = (e: React.MouseEvent,) => {
    e.preventDefault()
    e.stopPropagation()
    if (onRequestHire) {
      onRequestHire(talent)
    }
  }
      <div className="p-6">
        <div className="flex items-start">
          {/* Avatar */}
          <div className="relative mr-4">;
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">;
              {talent && talent.profile_picture_url ? (;
                <img
                  src={talent.profile_picture_url}
                  alt={talent.full_name}


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
          <div className="flex-1">;
            <div className="flex justify-between items-start">;
              <h3 className="text-lg font-bold text-white">{talent && talent.full_name}</h3>;
              <FavoriteButton itemId={talent && talent.id} className="-mt-1" />;
            </div>;
            <p className="text-white font-medium">{talent && talent.professional_title}</p>;



            
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
        {/* Skills */}
        {skills.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
                onClick={handleRequestHire}
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
                onClick = {handleRequestHire,}
              >
                Hire
              </Button>
            )}
            <Button
              size="sm"
              variant="ghost"
                e.stopPropagation(),
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
                handleViewProfile();
              }}
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light";
            >;
              View <ArrowRight className="ml-1 h-4 w-4" />;
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
}

            </Button>;
          </div>;
        </div>;
      </div>;
    </Card>);
},
export const TalentCard = React.memo (TalentCardComponent),
TalentCard.display_name = 'TalentCard',
export const TalentCard = React.memo (TalentCardComponent);
TalentCard.display_name = 'TalentCard';

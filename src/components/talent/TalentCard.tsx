<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD


import React from 'react',
import { useRouter } from 'next/router',

import { Badge } from "@/components/ui/badge",
=======
import React from 'react';
import { useRouter  } from 'next/router';
<<<<<<< HEAD
import React from 'react',
import { useRouter } from 'next/router',
>>>>>>> import { Badge } from "@/components/ui/badge",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
import { Badge } from "@/components/ui/badge",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import { FavoriteButton } from "@/components/FavoriteButton",
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { TalentProfile } from "@/types/talent";
import { RatingStars  } from '@/components/RatingStars';
import { useAuth  } from '@/context/auth/AuthProvider';
import { useCart } from '@/context/CartContext';
<<<<<<< HEAD
xport interface TalentCardProps {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export interface TalentCardProps {
>>>>>>> 
  talent: TalentProfile
  onViewProfile: (id: string,) => void
  onRequestHire: (talent: TalentProfile,) => void
  isAuthenticated: boolean
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> }
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

  },

  const handleRequestHire = (e: React.MouseEvent,) => {
=======
  }
  },

>>>>>>>   const handleRequestHire = (e: React.MouseEvent,) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    e.preventDefault()
    e.stopPropagation()
    if (onRequestHire) {
      onRequestHire(talent)
    }
<<<<<<< HEAD

=======
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  // Extract skills - limit to 5 for display
  const skills = talent.skills?.slice(0, 5) |[]
export interface TalentCardProps {;
  talent: TalentProfile,;
  onViewProfile: (id: string,) => void,;
  onRequestHire: (talent: TalentProfile,) => void,;
  isAuthenticated: boolean;
}

const TalentCardComponent = ({;
  talent,;
  onViewProfile,;
  onRequestHire,;
  isAuthenticated;
}: TalentCardProps,) => {;
  const router = useRouter(),;

  const handleViewProfile = () => {;
    // Navigate directly to the talent profile;
    router && router.push(`/talent/${talent && talent.id}`),;

    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;
      onViewProfile(talent && talent.id);
    }
=======
  }
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
      onClick = {handleViewProfile,}
      tabIndex = {0,}
=======
      onClick={handleViewProfile}
      tabIndex={0}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    >
=======
      onClick = {handleViewProfile,}
      tabIndex = {0,}
>>>>>>>     >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      <div className="p-6">
        <div className="flex items-start">
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* Avatar */}
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">
              {talent.profile_picture_url ? (
                <img
<<<<<<< HEAD
<<<<<<< HEAD

                  className="w-full h-full object-cover"
=======
                  src = {talent.profile_picture_url,}
                  alt = {talent.full_name,}
>>>>>>>                   className="w-full h-full object-cover"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                  src = {talent.profile_picture_url,}
                  alt = {talent.full_name,}
=======
                  src={talent.profile_picture_url}
                  alt={talent.full_name}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  className="w-full h-full object-cover"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">
<<<<<<< HEAD
<<<<<<< HEAD

                </div>
=======
                  {talent.full_name?.charAt(0) |"T"}
ursor/fix-website-loading-errors-and-merge-6662
                  className="w-full h-full object-cover"
                  loading="lazy"


                  {talent.full_name?.charAt(0) || "T"}


>>>>>>>                 </div>
                />;
              ) : (;
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">;
                  {talent && talent.full_name?.charAt(0) || "T"}
                </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              )}
            </div>;
            {talent && talent.is_verified && (;
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
              </div>;
            )}

          </div>;

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* Main Info */}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">{talent.full_name}</h3>
              <FavoriteButton itemId={talent.id} className="-mt-1" />
            </div>
            <p className="text-white font-medium">{talent.professional_title}</p>
<<<<<<< HEAD
<<<<<<< HEAD

            {/* Location & Availability */}
=======
>>>>>>>             {/* Location & Availability */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {talent.location && (
                <div className="flex items-center text-zion-slate-light">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{talent.location}</span>
                </div>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
            {/* Location & Availability */}
            <div className="mt-2 flex flex-wrap gap-3 text-sm">;
              {talent && talent.location && (;
                <div className="flex items-center text-zion-slate-light">;
                  <MapPin className="h-4 w-4 mr-1" />;
                  <span>{talent && talent.location}</span>;
                </div>;
>>>>>>>               )}
              {talent && talent.availability_type && (;
                <div className="flex items-center text-zion-slate-light">;
                  <Clock className="h-4 w-4 mr-1" />;
                  <span>{talent && talent.availability_type}</span>;
                </div>;
              )}
<<<<<<< HEAD
              {talent.availability_type && (
                <div className="flex items-center text-zion-slate-light">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{talent.availability_type}</span>
                </div>
              )}

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">

                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
=======
            </div>
          </div>
        </div>
>>>>>>>         {/* Skills */}
        {skills.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
>>>>>>>                   className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                >
                  {skill}
                </span>
              ))}
              {(talent.skills?.length |0) > 5 && (
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length |0) - 5} more
                </span>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
                >
                  {skill}
                </span>;
              ))}
              {(talent.skills?.length || 0) > 5 && (
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length || 0) - 5} more
                </span>
<<<<<<< HEAD

              )}
=======
=======
            
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>>               )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            </div>
          </div>
ursor/fix-website-loading-errors-and-merge-6662
        {/* Skills */}
        {skills.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">

            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Skills */}
<<<<<<< HEAD
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

>>>>>>>                   className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
                >
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                  {skill}
                </span>;
              ))}

              {(talent && talent.skills?.length || 0) > 5 && (;
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">;
                  +{(talent && talent.skills?.length || 0) - 5} more;
                </span>;

              )}
            </div>;
          </div>;
>>>>>>>         )}



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
<<<<<<< HEAD

=======
>>>>>>>           <div className="flex items-center gap-2">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <div className="flex items-center gap-2">
>>>>>>>             {isAuthenticated && (
          </div>;

          <div className="flex items-center gap-2">;
            {isAuthenticated && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
        {skills.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
<<<<<<< HEAD
              {skills.map((skill, index,) => (
                <span
                  key = {index,}
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
          
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <div className="flex items-center gap-2">
            {isAuthenticated && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Button
                size="sm"
                variant="secondary"
<<<<<<< HEAD
<<<<<<< HEAD

=======
                onClick = {handleRequestHire,}
=======
                onClick={handleRequestHire}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className="bg-zion-purple hover:bg-zion-purple-light text-white"
=======
                onClick = {handleRequestHire,}
>>>>>>>                 className="bg-zion-purple hover:bg-zion-purple-light text-white"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              >
                Hire
              </Button>
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            )}
            <Button
              size="sm"
              variant="ghost"
<<<<<<< HEAD
<<<<<<< HEAD

                e.stopPropagation(),

=======
                e.stopPropagation()
>>>>>>>                 e.stopPropagation(),
>>>>>>>                 handleViewProfile()
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                handleViewProfile()
>>>>>>>               }}
=======
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
                handleViewProfile()
              }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
export const TalentCard = React.memo(TalentCardComponent)
TalentCard.displayName = 'TalentCard'
export const TalentCard = React.memo(TalentCardComponent)
TalentCard.displayName = 'TalentCard'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

<<<<<<< HEAD
=======
<<<<<<< HEAD
;
export const TalentCard = React.memo(TalentCardComponent);
TalentCard.displayName = 'TalentCard';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
export const TalentCard = React.memo(TalentCardComponent),
TalentCard.displayName = 'TalentCard',
},

export const TalentCard = React.memo(TalentCardComponent),
TalentCard.displayName = 'TalentCard',

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

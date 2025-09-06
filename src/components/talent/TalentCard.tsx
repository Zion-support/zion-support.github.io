import React from 'react';
import { useRouter  } from 'next/router';
import React from 'react',
import { useRouter } from 'next/router',
>>>>>>> import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import { FavoriteButton } from "@/components/FavoriteButton",
import { TalentProfile } from "@/types/talent";
import { RatingStars  } from '@/components/RatingStars';
import { useAuth  } from '@/context/auth/AuthProvider';
import { useCart } from '@/context/CartContext';
xport interface TalentCardProps {
ursor/fix-website-loading-errors-and-merge-6662
export interface TalentCardProps {
>>>>>>> 
  talent: TalentProfile
  onViewProfile: (id: string,) => void
  onRequestHire: (talent: TalentProfile,) => void
  isAuthenticated: boolean
>>>>>>> }
ursor/fix-website-loading-errors-and-merge-6662
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
  }
  },

>>>>>>>   const handleRequestHire = (e: React.MouseEvent,) => {
    e.preventDefault()
    e.stopPropagation()
    if (onRequestHire) {
      onRequestHire(talent)
    }
  }
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
  },;

  const handleRequestHire = (e: React && React.MouseEvent,) => {;
    e && e.preventDefault(),;
    e && e.stopPropagation(),;
    if (onRequestHire) {;
      onRequestHire(talent);
    }
  },;

  // Extract skills - limit to 5 for display;
  const skills = talent && talent.skills?.slice(0, 5) || [],;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Card
      className="overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple"
      onClick = {handleViewProfile,}
      tabIndex = {0,}
>>>>>>>     >
      <div className="p-6">
        <div className="flex items-start">
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
          {/* Avatar */}
          <div className="relative mr-4">;
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light">;
              {talent && talent.profile_picture_url ? (;
                <img
                  src = {talent.profile_picture_url,}
                  alt = {talent.full_name,}
>>>>>>>                   className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold">
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
              )}
            </div>;
            {talent && talent.is_verified && (;
              <div className="absolute -bottom-1 -right-1 bg-zion-blue p-0 && 0.5 rounded-full">;
                <CheckCircle2 className="w-5 h-5 text-zion-cyan" />;
              </div>;
            )}

          </div>;

          {/* Main Info */}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-white">{talent.full_name}</h3>
              <FavoriteButton itemId={talent.id} className="-mt-1" />
            </div>
            <p className="text-white font-medium">{talent.professional_title}</p>
>>>>>>>             {/* Location & Availability */}
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
            </div>
          </div>
        </div>
>>>>>>>         {/* Skills */}
        {skills.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
>>>>>>>                   className="px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light"
                >
                  {skill}
                </span>
              ))}
              {(talent.skills?.length |0) > 5 && (
                <span className="px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan">
                  +{(talent.skills?.length |0) - 5} more
                </span>
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
>>>>>>>               )}
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
>>>>>>>           <div className="flex items-center gap-2">
ursor/fix-website-loading-errors-and-merge-6662
          <div className="flex items-center gap-2">
>>>>>>>             {isAuthenticated && (
          </div>;

          <div className="flex items-center gap-2">;
            {isAuthenticated && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Button
                size="sm"
                variant="secondary"
                onClick = {handleRequestHire,}
>>>>>>>                 className="bg-zion-purple hover:bg-zion-purple-light text-white"
              >
                Hire
              </Button>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
            )}
            <Button
              size="sm"
              variant="ghost"
                e.stopPropagation()
>>>>>>>                 e.stopPropagation(),
>>>>>>>                 handleViewProfile()
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                handleViewProfile()
>>>>>>>               }}
              className="text-zion-cyan hover: text-white hover:bg-zion-blue-light"
            >
              View <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
;
export const TalentCard = React.memo(TalentCardComponent);
TalentCard.displayName = 'TalentCard';
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
>>>>>>> 
export const TalentCard = React.memo(TalentCardComponent),
TalentCard.displayName = 'TalentCard',
},

export const TalentCard = React.memo(TalentCardComponent),
TalentCard.displayName = 'TalentCard',

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
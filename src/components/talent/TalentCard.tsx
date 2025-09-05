import React from 'react';
import { useRouter } from 'next/router';
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent, CardFooter } from &quot;@/components/ui/card&quot;;
import { MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import { FavoriteButton } from &quot;@/components/FavoriteButton&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;
import { RatingStars } from '@/components/RatingStars';
import { useAuth } from '@/context/auth/AuthProvider';
import { useCart } from '@/context/CartContext';

export interface TalentCardProps {
  talent: TalentProfile;
  onViewProfile: (id: string) => void;
  onRequestHire: (talent: TalentProfile) => void;
  isAuthenticated: boolean;
}

const TalentCardComponent = ({
  talent,
  onViewProfile,
  onRequestHire,
  isAuthenticated
}: TalentCardProps) => {
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

  return (
    <Card
      className=&quot;overflow-hidden transition-all hover:shadow-lg border-zion-blue-light bg-zion-blue cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zion-purple&quot;
      onClick={handleViewProfile}
      tabIndex={0}
    >
      <div className=&quot;p-6&quot;>
        <div className=&quot;flex items-start&quot;>
          {/* Avatar */}
          <div className=&quot;relative mr-4&quot;>
            <div className=&quot;w-16 h-16 rounded-full overflow-hidden bg-zion-blue-dark border border-zion-blue-light&quot;>
              {talent.profile_picture_url ? (
                <img
                  src={talent.profile_picture_url}
                  alt={talent.full_name}
                  className=&quot;w-full h-full object-cover&quot;
                  loading=&quot;lazy&quot;
                />
              ) : (
                <div className=&quot;w-full h-full flex items-center justify-center text-zion-slate-light text-xl font-bold&quot;>
                  {talent.full_name?.charAt(0) || &quot;T&quot;}
                </div>
              )}
            </div>
            {talent.is_verified && (
              <div className=&quot;absolute -bottom-1 -right-1 bg-zion-blue p-0.5 rounded-full&quot;>
                <CheckCircle2 className=&quot;w-5 h-5 text-zion-cyan&quot; />
              </div>
            )}
          </div>
          
          {/* Main Info */}
          <div className=&quot;flex-1&quot;>
            <div className=&quot;flex justify-between items-start&quot;>
              <h3 className=&quot;text-lg font-bold text-white&quot;>{talent.full_name}</h3>
              <FavoriteButton itemId={talent.id} className=&quot;-mt-1&quot; />
            </div>
            <p className=&quot;text-white font-medium&quot;>{talent.professional_title}</p>
            
            {/* Location & Availability */}
            <div className=&quot;mt-2 flex flex-wrap gap-3 text-sm&quot;>
              {talent.location && (
                <div className=&quot;flex items-center text-zion-slate-light&quot;>
                  <MapPin className=&quot;h-4 w-4 mr-1&quot; />
                  <span>{talent.location}</span>
                </div>
              )}
              {talent.availability_type && (
                <div className=&quot;flex items-center text-zion-slate-light&quot;>
                  <Clock className=&quot;h-4 w-4 mr-1&quot; />
                  <span>{talent.availability_type}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Skills */}
        {skills.length > 0 && (
          <div className=&quot;mt-4&quot;>
            <div className=&quot;flex flex-wrap gap-2&quot;>
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className=&quot;px-2 py-1 text-xs rounded-full bg-zion-blue-light text-zion-slate-light&quot;
                >
                  {skill}
                </span>
              ))}
              {(talent.skills?.length || 0) > 5 && (
                <span className=&quot;px-2 py-1 text-xs rounded-full bg-zion-purple/20 text-zion-cyan&quot;>
                  +{(talent.skills?.length || 0) - 5} more
                </span>
              )}
            </div>
          </div>
        )}
        
        {/* Hourly Rate & Actions */}
        <div className=&quot;mt-5 flex items-center justify-between&quot;>
          <div>
            {talent.hourly_rate ? (
              <div className=&quot;text-white font-bold&quot;>
                ${talent.hourly_rate}
                <span className=&quot;text-zion-slate-light font-normal&quot;>/hr</span>
              </div>
            ) : (
              <div className=&quot;text-zion-slate-light&quot;>Rate not specified</div>
            )}
          </div>
          
          <div className=&quot;flex items-center gap-2&quot;>
            {isAuthenticated && (
              <Button
                size=&quot;sm&quot;
                variant=&quot;secondary&quot;
                onClick={handleRequestHire}
                className=&quot;bg-zion-purple hover:bg-zion-purple-light text-white&quot;
              >
                Hire
              </Button>
            )}
            <Button
              size=&quot;sm&quot;
              variant=&quot;ghost&quot;
              onClick={(e) => {
                e.stopPropagation();
                handleViewProfile();
              }}
              className=&quot;text-zion-cyan hover:text-white hover:bg-zion-blue-light&quot;
            >
              View <ArrowRight className=&quot;ml-1 h-4 w-4&quot; />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export const TalentCard = React.memo(TalentCardComponent);
TalentCard.displayName = 'TalentCard';

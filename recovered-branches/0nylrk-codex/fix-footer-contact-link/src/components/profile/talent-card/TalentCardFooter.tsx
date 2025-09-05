
import React, { useState } from &quot;react&quot;;
import { Star } from &quot;lucide-react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { ExternalLink } from &quot;lucide-react&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;
import { HireRequestModal } from &quot;@/components/profile/hire-request&quot;;
import { useAuthStatus } from &quot;@/hooks/talent&quot;;
import { UserProfile } from &quot;@/types/auth&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;

interface TalentCardFooterProps {
  profile: TalentProfile;
  onViewProfile: (id: string) => void;
  onRequestHire?: (profile: TalentProfile) => void;
}

export function TalentCardFooter({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();
  const navigate = useNavigate();

  // Create a compatible UserProfile from UserDetails
  const userProfile: UserProfile = {
    id: userDetails?.id,
    displayName: userDetails?.name || '',
    email: userDetails?.email || '',
    userType: '',
    profileComplete: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  // Handle request to hire
  const handleRequestHire = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (onRequestHire) {
      onRequestHire(profile);
    } else {
      // Open hire modal directly if no handler provided
      setIsHireModalOpen(true);
    }
  };

  // Handle view profile
  const handleViewProfile = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Navigate to the talent profile page
    navigate(`/talent/${profile.id || ''}`);
    
    // Also call the onViewProfile callback if provided
    if (onViewProfile) {
      onViewProfile(profile.id || '');
    }
  };

  return (
    <>
      <div className=&quot;mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between&quot;>
        {/* Experience or Hourly Rate */}
        <div>
          {profile.hourly_rate ? (
            <div>
              <span className=&quot;text-zion-slate-light text-xs&quot;>Hourly Rate</span>
              <div className=&quot;text-white font-bold&quot;>${profile.hourly_rate}/hr</div>
            </div>
          ) : (
            <div className=&quot;flex items-center gap-1&quot;>
              <Star className=&quot;h-4 w-4 text-zion-purple&quot; />
              <span className=&quot;text-zion-slate-light&quot;>{profile.years_experience} years exp.</span>
            </div>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className=&quot;flex gap-2&quot;>
          <Button 
            variant=&quot;default&quot; 
            size=&quot;sm&quot; 
            onClick={handleRequestHire}
            className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;
          >
            Hire
          </Button>
          
          <Button 
            variant=&quot;outline&quot; 
            size=&quot;sm&quot; 
            onClick={handleViewProfile}
            className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
          >
            View
            <ExternalLink className=&quot;h-3 w-3 ml-1&quot; />
          </Button>
        </div>
      </div>
      
      {/* Hire Request Modal */}
      <HireRequestModal
        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        userDetails={userProfile}
      />
    </>
  );
}

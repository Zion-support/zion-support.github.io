import React, {_useState} from "react";
import type {_UserProfile} from "@/types/auth";

interface TalentCardFooterProps {_profile: TalentProfile;
  onViewProfile: (_id: string) => void;
  onRequestHire?: (_profile: TalentProfile) => void;}

export function TalentCardFooter(_{_profile, _onViewProfile, _onRequestHire}: TalentCardFooterProps) {_const [isHireModalOpen, _setIsHireModalOpen] = useState(false);
  const { userDetails} = useAuthStatus();
  const _router = useRouter();

  // Create a compatible UserProfile from UserDetails
  const userProfile: UserProfile = {_id: userDetails?.id, _name: userDetails?.name || '', _email: userDetails?.email || '', _userType: null, _profileComplete: false, _created_at: new Date().toISOString(), _updated_at: new Date().toISOString(), _role: userDetails?.userType || '', _displayName: userDetails?.name || '', _points: 0, _avatarUrl: userDetails?.avatar || ''};

  // Handle request to hire
  const _handleRequestHire = (_e: React.MouseEvent) => {_e.stopPropagation();
    
    if (onRequestHire) {
      onRequestHire(profile);} else {_// Open hire modal directly if no handler provided
      setIsHireModalOpen(true);}
  };

  // Handle view profile
  const _handleViewProfile = (_e: React.MouseEvent) => {_e.stopPropagation();
    
    // Navigate to the talent profile page
    router.push(`/talent/${profile.id || ''}`);
    
    // Also call the onViewProfile callback if provided
    if (onViewProfile) {_onViewProfile(profile.id || '');}
  };

  return (
    <>
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">
        {_/* Experience or Hourly Rate */}
        <div>
          {_profile.hourly_rate ? (
            <div>
              <span className="text-zion-slate-light text-xs">Hourly Rate</span>
              <div className="text-white font-bold">${profile.hourly_rate}/hr</div>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-zion-purple" />
              <span className="text-zion-slate-light">{_profile.years_experience} years exp.</span>
            </div>
          )}
        </div>
        
        {_/* Action Buttons */}
        <div className="flex gap-2">
          <Button 
            variant="default" 
            size="sm" 
            onClick={_handleRequestHire}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            Hire
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={_handleViewProfile}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
          >
            View
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>
      
      {_/* Hire Request Modal */}
      <HireRequestModal
        talent={_profile}
        isOpen={_isHireModalOpen}
        onClose={_() => setIsHireModalOpen(false)}
        userDetails={_userProfile}
      />
    </>
  );
}

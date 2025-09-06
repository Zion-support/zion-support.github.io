
=======
import React, { useState } from "react",;
import { Star } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { ExternalLink } from "lucide-react",;
import { TalentProfile } from "@/types/talent",;
import { HireRequestModal } from "@/components/profile/hire-request",;
import { useAuthStatus } from "@/hooks/talent",;
import { UserProfile } from "@/types/auth",;
import { useNavigate } from "react-router-dom",;
;
interface TalentCardFooterProps {;
  profile:TalentProfile,;
  onViewProfile:(id:string) => void,;
  onRequestHire?:(profile:TalentProfile) => void;
}
;
export function TalentCardFooter({ profile, onViewProfile, onRequestHire } TalentCardFooterProps) {;
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),;
  const { userDetails } = useAuthStatus(),;
  const navigate = useNavigate(),;
;
  // Create a compatible UserProfile from UserDetails;
  const userProfile:UserProfile = {;
    id:userDetails?.id,;
    displayName:userDetails?.name || '',;
    email:userDetails?.email || '',;
    userType:'',;
    profileComplete:false,;
    createdAt:new Date().toISOString(),;
    updatedAt:new Date().toISOString();
  },;
;
  // Handle request to hire;
  const handleRequestHire = (e:React.MouseEvent) => {;
    e.stopPropagation(),;
    ;
    if (onRequestHire) {;
      onRequestHire(profile);
    } else {;
      // Open hire modal directly if no handler provided;
      setIsHireModalOpen(true),;
    }
  },;
;
  // Handle view profile;
  const handleViewProfile = (e:React.MouseEvent) => {;
    e.stopPropagation(),;
    ;
    // Navigate to the talent profile page;
    navigate(`/talent/${profile.id || ''}`),;
    ;
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;
      onViewProfile(profile.id || ''),;
    }
  },;
;
  return (;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <>;
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">;
        {/* Experience or Hourly Rate */}
        <div>;
<<<<<<< HEAD

            View;
            <ExternalLink className="h-3 w-3 ml-1" />;
          </Button>;
        </div>;
      </div>;

      {/* Hire Request Modal */}
      <HireRequestModal;
        talent={profile}        isOpen={isHireModalOpen}
        onClose={_() => setIsHireModalOpen(false)}
        userDetails={userProfile}
      />;
    </>;

}
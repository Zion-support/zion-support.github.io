<<<<<<< HEAD

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
=======
import React, { useState } from "react",;
import { Star } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { ExternalLink } from 'lucide-react';
import { TalentProfile } from "@/types/talent",;
import { HireRequestModal } from "@/components/profile/hire-request",;
import { useAuthStatus } from "@/hooks/talent",;
import type { UserProfile } from "@/types/auth",;
import { useRouter } from 'next/router',;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
  const navigate = useNavigate(),;
=======
  const router = useRouter(),;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
  // Create a compatible UserProfile from UserDetails;
  const userProfile:UserProfile = {;
    id:userDetails?.id,;
<<<<<<< HEAD
    displayName:userDetails?.name || '',;
    email:userDetails?.email || '',;
    userType:'',;
    profileComplete:false,;
    createdAt:new Date().toISOString(),;
    updatedAt:new Date().toISOString();
=======
    name:userDetails?.name || '',;
    email:userDetails?.email || '',;
    userType:null,;
    profileComplete:false,;
    created_at:new Date().toISOString(),;
    updated_at:new Date().toISOString(),;
    role:userDetails?.userType || '',;
    displayName:userDetails?.name || '',;
    points:0,;
    avatarUrl:userDetails?.avatar || '';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
    navigate(`/talent/${profile.id || ''}`),;
=======
    router.push(`/talent/${profile.id || ''}`),;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    ;
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;
      onViewProfile(profile.id || ''),;
    }
  },;
;
  return (;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <>;
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">;
        {/* Experience or Hourly Rate */}
        <div>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
          {profile.hourly_rate ? (;
            <div>;
              <span className="text-zion-slate-light text-xs">Hourly Rate</span>;
              <div className="text-white font-bold">${profile.hourly_rate}/hr</div>;
            </div>;
          ) :(;
            <div className="flex items-center gap-1">;
              <Star className="h-4 w-4 text-zion-purple" />;
              <span className="text-zion-slate-light">{profile.years_experience} years exp.</span>;
            </div>;          )}
        </div>;
        ;
        {/* Action Buttons */}
        <div className="flex gap-2">;
          <Button ;
            variant="default" ;
            size="sm" ;
            onClick={handleRequestHire}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white";
          >;
            Hire;
          </Button>;
          ;
          <Button ;
            variant="outline" ;
            size="sm" ;
            onClick={handleViewProfile}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
          >;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            View;
            <ExternalLink className="h-3 w-3 ml-1" />;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD

=======
      ;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Hire Request Modal */}
      <HireRequestModal;
        talent={profile}        isOpen={isHireModalOpen}
        onClose={_() => setIsHireModalOpen(false)}
        userDetails={userProfile}
      />;
    </>;
<<<<<<< HEAD

}
=======
  ),; interface TalentCardFooterProps {;
  profile: TalentProfile;
onViewProfile: (id: string) => void;
onRequestHire?: (profile: TalentProfile) => void ;
}export function TalentCardFooter ({;
  profile,  onViewProfile, onRequestHire ;
}: TalentCardFooterProps) {;
  const [isHireModalOpen, setIsHireModalOpen] = useState (false);
const { ;
  userDetails ;
 } = useAuthStatus ();
const router = useRouter ();
//Create a compatible UserProfile from UserDetails const userProfile: UserProfile = {;
  id: userDetails?.id;
name: userDetails?.name || '';';
email: userDetails?.email || '';
userType: null;
profileComplete: false;
created at: new Date () .toISOString ();
updated at: new Date () .toISOString ();';
role: userDetails?.userType || '';';
displayName: userDetails?.name || '';
points: 0;';
avatarUrl: userDetails?.avatar || '' ;
};
//Handle request to hire const handleRequestHire = (e: React.MouseEvent) => {;
  e.stopPropagation ();
if (onRequestHire) {;
  onRequestHire (profile) ;
}else {;
  //Open hire modal directly if no handler provided setIsHireModalOpen (true) ;
}
};
//Handle view profile const handleViewProfile = (e: React.MouseEvent) => {;
  e.stopPropagation ();';
profile.id || '' ;
}`);
//Also call the onViewProfile callback if provided <div> {;
  profile.hourly rate ? (<div> <span className="text-zion-slate-light text-xs" >Hourly Rate</span> <div className="text-white font-bold" >$ {;
  profile.hourly rate ;"}/hr</div> </div>) : (</div>) ";"}</div> > Hire </Button> <Button > View <ExternalLink className="h-3 w-3 ml-1" /> </Button> </div> </div> {;
  /* Hire Request Modal */ ;
}<HireRequestModal talent= {;
  profile ;
}isOpen= {;
  isHireModalOpen ;
}onClose= {;
  () => setIsHireModalOpen (false) ;
}userDetails= {;
  userProfile ;
}/> </>) ;"}'"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

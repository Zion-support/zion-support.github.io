
<<<<<<< HEAD
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
    <>;
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">;
        {/* Experience or Hourly Rate */}
        <div>;
          {profile.hourly_rate ? (;
            <div>;
              <span className="text-zion-slate-light text-xs">Hourly Rate</span>;
              <div className="text-white font-bold">${profile.hourly_rate}/hr</div>;
            </div>;
          ) :(;
            <div className="flex items-center gap-1">;
              <Star className="h-4 w-4 text-zion-purple" />;
              <span className="text-zion-slate-light">{profile.years_experience} years exp.</span>;
            </div>;
=======
import React, { useState } from "react",
import { Star } from "lucide-react",
import { Button } from "@/components/ui/button",
import { ExternalLink } from "lucide-react",
import { TalentProfile } from "@/types/talent",
import { HireRequestModal } from "@/components/profile/hire-request",
import { useAuthStatus } from "@/hooks/talent",
import { UserProfile } from "@/types/auth",
import { useNavigate } from "react-router-dom",interface TalentCardFooterProps {
  profile: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire?: (profile: TalentProfile) => void
}

export function TalentCardFooter({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),
  const { userDetails } = useAuthStatus(),
  const navigate = useNavigate(),

  // Create a compatible UserProfile from UserDetails,
const userProfile: UserProfile = {
    id: userDetails?.id,
    displayName: userDetails?.name || '',
    email: userDetails?.email || '',
    userType: '',
    profileComplete: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Handle request to hire,
const handleRequestHire = (e: React.MouseEvent) => {
    e.stopPropagation(),
    
    if (onRequestHire) {
      onRequestHire(profile)
    } else {
      // Open hire modal directly if no handler provided,
setIsHireModalOpen(true)
    }
  },

  // Handle view profile,
const handleViewProfile = (e: React.MouseEvent) => {
    e.stopPropagation(),
import React, {useState} from "react";

interface TalentCardFooterProps {profile: TalentProfile,
  onViewProfile: (id: string) => void;
  onRequestHire?: (profile: TalentProfile) => void}

export function TalentCardFooter(_{profile, onViewProfile, onRequestHire}: TalentCardFooterProps) {const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const { userDetails} = useAuthStatus();
  const navigate = useNavigate();

  // Create a compatible UserProfile from UserDetails,
const userProfile: UserProfile = {id: userDetails?.id, displayName: userDetails?.name || '', email: userDetails?.email || '', userType: '', profileComplete: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()};

  // Handle request to hire,
const handleRequestHire = (e: React.MouseEvent) => {e.stopPropagation();
    
    if (onRequestHire) {
      onRequestHire(profile)} else {_// Open hire modal directly if no handler provided,
setIsHireModalOpen(true)}
  };

  // Handle view profile,
const handleViewProfile = (e: React.MouseEvent) => {e.stopPropagation();
    
    // Navigate to the talent profile page,
navigate(`/talent/${profile.id || ''}`),
    
    // Also call the onViewProfile callback if provided,
if (onViewProfile) {
      onViewProfile(profile.id || '')
    }
  },

  return (
    <>
      <div className=&quot;mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between&quot;>
        {/* Experience or Hourly Rate */}        <div>
          {profile.hourlyrate ? (
            <div>
              <span className=&quot;text-zion-slate-light text-xs&quot;>Hourly Rate</span>
              <div className=&quot;text-white font-bold&quot;>${profile.hourlyrate}/hr</div>
            </div>
          ) : (
            <div className=&quot;flex items-center gap-1&quot;>
              <Star className=&quot;h-4 w-4 text-zion-purple&quot; />
              <span className=&quot;text-zion-slate-light&quot;>{profile.yearsexperience} years exp.</span>            </div>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          )}
        </div>;
        ;
        {/* Action Buttons */}
<<<<<<< HEAD
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
            View;
            <ExternalLink className="h-3 w-3 ml-1" />;
          </Button>;
        </div>;
      </div>;
      ;
      {/* Hire Request Modal */}
      <HireRequestModal;
        talent={profile}
=======
        <div className=&quot;flex gap-2&quot;>
          <Button,
variant=&quot;default&quot; 
            size=&quot;sm&quot; 
            onClick={handleRequestHire}
            className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;          >
            Hire
          </Button>
          
          <Button,
variant=&quot;outline&quot; 
            size=&quot;sm&quot; 
            onClick={handleViewProfile}
            className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;          >
            View
            <ExternalLink className=&quot;h-3 w-3 ml-1&quot; />
          </Button>
        </div>
      </div>
      
      {_/* Hire Request Modal */}
      <HireRequestModal,
talent={profile}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        isOpen={isHireModalOpen}
        onClose={_() => setIsHireModalOpen(false)}
        userDetails={userProfile}
<<<<<<< HEAD
      />;
    </>;
  ),;
=======
      />
    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}

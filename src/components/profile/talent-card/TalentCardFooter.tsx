<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { ExternalLink } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { HireRequestModal } from "@/components/profile/hire-request",
import { useAuthStatus } from "@/hooks/talent",
import type { UserProfile } from "@/types/auth",
import { useRouter } from 'next/router',
=======
import React, { useState } from &quot;react&quot;;
import { Star } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;;
import { ExternalLink } from 'lucide-react'
import { TalentProfile } from &quot;@/types/talent&quot;;
import { HireRequestModal } from &quot;@/components/profile/hire-request&quot;;
import { useAuthStatus } from &quot;@/hooks/talent&quot;;
import type { UserProfile } from &quot;@/types/auth&quot;;
import { useRouter } from 'next/router';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface TalentCardFooterProps {
  profile: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire?: (profile: TalentProfile) => void
}

export function TalentCardFooter({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),
  const { userDetails } = useAuthStatus(),
  const router = useRouter(),

  // Create a compatible UserProfile from UserDetails
  const userProfile: UserProfile = {
    id: userDetails?.id,
    name: userDetails?.name || '',
    email: userDetails?.email || '',
    userType: null,
    profileComplete: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    role: userDetails?.userType || '',
    displayName: userDetails?.name || '',
    points: 0,
    avatarUrl: userDetails?.avatar || ''
  },

  // Handle request to hire
  const handleRequestHire = (e: React.MouseEvent) => {
    e.stopPropagation(),
    
    if (onRequestHire) {
      onRequestHire(profile)
    } else {
      // Open hire modal directly if no handler provided
      setIsHireModalOpen(true)
    }
  },

  // Handle view profile
  const handleViewProfile = (e: React.MouseEvent) => {
    e.stopPropagation(),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Navigate to the talent profile page
    router.push(`/talent/${profile.id || ''}`),
    
    // Also call the onViewProfile callback if provided
<<<<<<< HEAD
    if (onViewProfile) {
      onViewProfile(profile.id || '')
    }
  },

  return (
    <>
      <div className=&quot;mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between&quot;>
        {/* Experience or Hourly Rate */}
=======
    if (onViewProfile) {_onViewProfile(profile.id || '');}
  };

  return (
    <>
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">
        {_/* Experience or Hourly Rate */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <div>
          {_profile.hourly_rate ? (
            <div>
              <span className=&quot;text-zion-slate-light text-xs&quot;>Hourly Rate</span>
              <div className=&quot;text-white font-bold&quot;>${profile.hourly_rate}/hr</div>
            </div>
          ) : (
<<<<<<< HEAD
            <div className=&quot;flex items-center gap-1&quot;>
              <Star className=&quot;h-4 w-4 text-zion-purple&quot; />
              <span className=&quot;text-zion-slate-light&quot;>{profile.years_experience} years exp.</span>
=======
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-zion-purple" />
              <span className="text-zion-slate-light">{_profile.years_experience} years exp.</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          )}
        </div>
        
<<<<<<< HEAD
        {/* Action Buttons */}
        <div className=&quot;flex gap-2&quot;>
          <Button 
            variant=&quot;default&quot; 
            size=&quot;sm&quot; 
            onClick={handleRequestHire}
            className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;
=======
        {_/* Action Buttons */}
        <div className="flex gap-2">
          <Button 
            variant="default" 
            size="sm" 
            onClick={_handleRequestHire}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            Hire
          </Button>
          
          <Button 
<<<<<<< HEAD
            variant=&quot;outline&quot; 
            size=&quot;sm&quot; 
            onClick={handleViewProfile}
            className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
=======
            variant="outline" 
            size="sm" 
            onClick={_handleViewProfile}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            View
            <ExternalLink className=&quot;h-3 w-3 ml-1&quot; />
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
  )
}

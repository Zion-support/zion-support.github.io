import React, { useState } from "react",
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { ExternalLink } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { HireRequestModal } from "@/components/profile/hire-request",
import { useAuthStatus } from "@/hooks/talent",
import type { UserProfile } from "@/types/auth",
import { useRouter } from 'next/router',interface TalentCardFooterProps {
  profile: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire?: (profile: TalentProfile) => void
}

export function TalentCardFooter({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),
  const { userDetails } = useAuthStatus(),
  const router = useRouter(),

  // Create a compatible UserProfile from UserDetails,
const userProfile: UserProfile = {
    id: userDetails?.id,
    name: userDetails?.name || '',
    email: userDetails?.email || '',
    userType: null,
    profileComplete: false,
    createdat: new Date().toISOString(),
    updatedat: new Date().toISOString(),
    role: userDetails?.userType || '',
    displayName: userDetails?.name || '',
    points: 0,
    avatarUrl: userDetails?.avatar || ''
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
import type {UserProfile} from "@/types/auth";

interface TalentCardFooterProps {profile: TalentProfile,
  onViewProfile: (id: string) => void;
  onRequestHire?: (profile: TalentProfile) => void}

export function TalentCardFooter(_{profile, onViewProfile, onRequestHire}: TalentCardFooterProps) {const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const { userDetails} = useAuthStatus();
  const router = useRouter();

  // Create a compatible UserProfile from UserDetails,
const userProfile: UserProfile = {id: userDetails?.id, name: userDetails?.name || '', email: userDetails?.email || '', userType: null, profileComplete: false, created_at: new Date().toISOString(), updated_at: new Date().toISOString(), role: userDetails?.userType || '', displayName: userDetails?.name || '', points: 0, avatarUrl: userDetails?.avatar || ''};

  // Handle request to hire,
const handleRequestHire = (e: React.MouseEvent) => {e.stopPropagation();
    
    if (onRequestHire) {
      onRequestHire(profile)} else {_// Open hire modal directly if no handler provided,
setIsHireModalOpen(true)}
  };

  // Handle view profile,
const handleViewProfile = (e: React.MouseEvent) => {e.stopPropagation();
    
    // Navigate to the talent profile page,
router.push(`/talent/${profile.id || ''}`),
    
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
          )}
        </div>
        
        {/* Action Buttons */}
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
        isOpen={isHireModalOpen}
        onClose={_() => setIsHireModalOpen(false)}
        userDetails={userProfile}
      />
    </>
  )
}

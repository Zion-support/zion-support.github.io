<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useRouter } from 'next/router'
interface TalentCardFooterProps {
  profile: TalentProfile,
  onViewProfile: (id: string,) => void,
  onRequestHire?: (profile: TalentProfile,) => void
}

export function TalentCardFooter({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false)
  const { userDetails } = useAuthStatus()
  const router = useRouter()
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
  }
  // Handle request to hire
  const handleRequestHire = (e: React.MouseEvent) => {
    e.stopPropagation()
      const handleRequestHire = (e: React.MouseEvent,) => {
    e.stopPropagation(),
    
    if (onRequestHire) {
      onRequestHire(profile)
    } else {
      // Open hire modal directly if no handler provided
      setIsHireModalOpen(true)
    }
  },

  // Handle view profile
  const handleViewProfile = (e: React.MouseEvent,) => {
    e.stopPropagation(),
    
    // Navigate to the talent profile page
    router.push(`/talent/${profile.id || ''}`),
    
    // Also call the onViewProfile callback if provided
    if (onViewProfile) {
      onViewProfile(profile.id || '')
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { useState } from "react",
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { ExternalLink } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { HireRequestModal } from "@/components/profile/hire-request",
<<<<<<< HEAD
import { useAuthStatus } from "@/hooks/talent";
import type { UserProfile } from "@/types/auth";
import { useRouter } from 'next/router';
interface TalentCardFooterProps {

  profile: TalentProfile
  onViewProfile: (id: string,) => void
  onRequestHire?: (profile: TalentProfile,) => void

=======
import { useAuthStatus } from "@/hooks/talent",
import type { UserProfile } from "@/types/auth",
import { useRouter } from 'next/router',
interface TalentCardFooterProps {
  profile: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire?: (profile: TalentProfile) => void
import React, { useState } from "react",;
import { Star } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { ExternalLink } from 'lucide-react';
import { TalentProfile } from "@/types/talent",;
import { HireRequestModal } from "@/components/profile/hire-request",;
import { useAuthStatus } from "@/hooks/talent",;
import type { UserProfile } from "@/types/auth",;
import { useRouter } from 'next/router',;
interface TalentCardFooterProps {;
  profile: TalentProfile,;
  onViewProfile: (id: string) => void,;
  onRequestHire?: (profile: TalentProfile) => void;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
export function TalentCardFooter({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {

  const [isHireModalOpen, setIsHireModalOpen] = useState(false)
  const { userDetails } = useAuthStatus()
  const router = useRouter()
  // Create a compatible UserProfile from UserDetails
  const userProfile: UserProfile = {
    id: userDetails?.id
    name: userDetails?.name |''
    email: userDetails?.email |''
    userType: null
    profileComplete: false
    created_at: new Date().toISOString()
    updated_at: new Date().toISOString()
    role: userDetails?.userType |''
    displayName: userDetails?.name |''
    points: 0
    avatarUrl: userDetails?.avatar |''
  }
  // Handle request to hire
  const handleRequestHire = (e: React.MouseEvent) => {
    e.stopPropagation()
      const handleRequestHire = (e: React.MouseEvent,) => {
    e.stopPropagation()
    if (onRequestHire) {
      onRequestHire(profile)
    } else {
      // Open hire modal directly if no handler provided
      setIsHireModalOpen(true)
    }
<<<<<<< HEAD
  }
  // Handle view profile
  const handleViewProfile = (e: React.MouseEvent,) => {
    e.stopPropagation()
    // Navigate to the talent profile page
    router.push(`/talent/${profile.id |''}`)
    // Also call the onViewProfile callback if provided
    if (onViewProfile) {
      onViewProfile(profile.id |'')
=======
  },;
  // Handle view profile;
  const handleViewProfile = (e: React.MouseEvent) => {;
    e.stopPropagation(),;
    // Navigate to the talent profile page;
    router.push(`/talent/${profile.id || ''}`);
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;
      onViewProfile(profile.id || '');
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  return (
    <>
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">
        {/* Experience or Hourly Rate */}
        <div>
          {profile.hourly_rate ? (
            <div>
              <span className="text-zion-slate-light text-xs">Hourly Rate</span>
              <div className="text-white font-bold">${profile.hourly_rate}/hr</div>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-zion-purple" />
              <span className="text-zion-slate-light">{profile.years_experience} years exp.</span>
            </div>
          )}
<<<<<<< HEAD
        </div>
=======
<<<<<<< HEAD
        </div>
=======
        </div>;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {/* Action Buttons */}
        <div className="flex gap-2">
<<<<<<< HEAD
          <Button
            variant="default"
            size="sm"
            onClick = {handleRequestHire,}
=======
          <Button 
            variant="default" 
            size="sm" 
<<<<<<< HEAD
            onClick={handleRequestHire}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
            onClick = {handleRequestHire,}
=======
            onClick={handleRequestHire}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            Hire
          </Button>
<<<<<<< HEAD
<<<<<<< HEAD
          <Button
            variant="outline"
            size="sm"
=======
          <Button 
            variant="outline" 
            size="sm" 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            onClick = {handleViewProfile,}
=======
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleViewProfile}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
          >
            View
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>
<<<<<<< HEAD
      {/* Hire Request Modal */}
      <HireRequestModal
        talent = {profile,}
        isOpen = {isHireModalOpen,}
        onClose = {() => setIsHireModalOpen(false),}
        userDetails = {userProfile,}
      />
    </>;
  );
};
}
=======
      
      {/* Hire Request Modal */}
      <HireRequestModal;
        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        userDetails={userProfile}
      />;
    </>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

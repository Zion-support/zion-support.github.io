<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useRouter } from 'next/router'
interface TalentCardFooterProps {
  profile: TalentProfile,
  onViewProfile: (id: string,) => void,
  onRequestHire?: (profile: TalentProfile,) => void
}

<<<<<<< HEAD


    }
=======
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },

<<<<<<< HEAD
  // Handle view profile
  const handleViewProfile = (e: React.MouseEvent,) => {
    e.stopPropagation(),
    
    // Navigate to the talent profile page
    router.push(`/talent/${profile.id || ''}`),
    
    // Also call the onViewProfile callback if provided
    if (onViewProfile) {
      onViewProfile(profile.id || '')
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from "react",
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { ExternalLink } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { HireRequestModal } from "@/components/profile/hire-request",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useAuthStatus } from "@/hooks/talent";
import type { UserProfile } from "@/types/auth";
import { useRouter } from 'next/router';
interface TalentCardFooterProps {

  profile: TalentProfile
  onViewProfile: (id: string,) => void
  onRequestHire?: (profile: TalentProfile,) => void

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

    }

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  // Handle view profile
  const handleViewProfile = (e: React.MouseEvent,) => {
    e.stopPropagation()
    // Navigate to the talent profile page
    router.push(`/talent/${profile.id |''}`)
    // Also call the onViewProfile callback if provided
    if (onViewProfile) {
      onViewProfile(profile.id |'')
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>     }
  }
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  },;
  // Handle view profile;
  const handleViewProfile = (e: React.MouseEvent) => {;
    e.stopPropagation(),;
    // Navigate to the talent profile page;
    router.push(`/talent/${profile.id || ''}`);
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;
      onViewProfile(profile.id || '');
    }
  }
  },

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

        {/* Action Buttons */}
        <div className="flex gap-2">

            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            Hire
          </Button>

            onClick = {handleViewProfile,}

=======
        </div>
        </div>
>>>>>>>         {/* Action Buttons */}
        <div className="flex gap-2">
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </div>
        </div>
        </div>;
        {/* Action Buttons */}
        <div className="flex gap-2">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <Button
            variant="default"
            size="sm"
            onClick = {handleRequestHire,}
<<<<<<< HEAD
<<<<<<< HEAD
            onClick={handleRequestHire}
            onClick = {handleRequestHire,}
>>>>>>>             className="bg-zion-purple hover:bg-zion-purple-dark text-white"
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <Button 
            variant="default" 
            size="sm" 
            onClick={handleRequestHire}
            onClick = {handleRequestHire,}
            onClick={handleRequestHire}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          >
            Hire
          </Button>
          <Button
            variant="outline"
            size="sm"
          <Button 
            variant="outline" 
            size="sm" 
            onClick = {handleViewProfile,}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleViewProfile}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>>             className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
>>>>>>>           >
            View
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {/* Hire Request Modal */}
      <HireRequestModal
        talent = {profile,}
        isOpen = {isHireModalOpen,}
        onClose = {() => setIsHireModalOpen(false),}
        userDetails = {userProfile,}
<<<<<<< HEAD
      />
<<<<<<< HEAD
=======
    </>;
  );
};
}
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      
      {/* Hire Request Modal */}
      <HireRequestModal;
        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        userDetails={userProfile}
      />;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </>;
  );
};
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 
;

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======



import { use_router } from 'next / router';
interface TalentCardFooterProps {
  profile: TalentProfile,
  onViewProfile: (id: string, ) => void,
  onRequestHire?: (profile: TalentProfile, ) => void;
}
export /**
 * TalentCardFooter - Function description
 */
function TalentCardFooter() {
  const [isHireModalOpen, setIsHireModalOpen] = useState (false);
  const { user_details } = useAuthStatus ();
  const router = use_router ();
  // Create a compatible UserProfile from UserDetails;
  const user_profile: UserProfile = {
    id: user_details?.id,
    name: user_details?.name || '',
    email: user_details?.email || '',
    user_type: null,
    profile_complete: false,
    created_at: new Date ().toISOString (),
    updated_at: new Date ().toISOString (),
    role: user_details?.user_type || '',
    display_name: user_details?.name || '',
    points: 0,
    avatar_url: user_details?.avatar || '';
  }
  // Handle request to hire;
  const handleRequestHire = (e: React.MouseEvent) =>: any {
    e.stop_propagation ();
      const handleRequestHire = (e: React.MouseEvent, ) =>: any {
    e.stop_propagation (),
    // Check condition
if ( {) {
  $2
}
      onRequestHire (profile);
    } else {
      // Open hire modal directly if no handler provided;
      setIsHireModalOpen (true);
    }
  },
  // Handle view profile;
  const handleViewProfile = (e: React.MouseEvent, ) =>: any {
    e.stop_propagation (),
    // Navigate to the talent profile page;
    router.push (`/talent/${profile.id || ''}`),
    // Also call the onViewProfile callback if provided;
    // Check condition
if ( {) {
  $2
}
      onViewProfile (profile.id || '');
    }
  },
  return (
    <>;
      <div className="mt - 4 pt - 4 border - t border - zion - blue - light flex items - center justify - between">;
        {/* Experience or Hourly Rate */}
        <div>;
          {profile.hourly_rate ? (
            <div>;
              <span className="text - zion - slate - light text - xs">Hourly Rate</span>;
              <div className="text - white font - bold">${profile.hourly_rate}/hr</div>;
            </div>) : (
            <div className="flex items - center gap - 1">;
              <Star className="h - 4 w - 4 text - zion - purple" />;
              <span className="text - zion - slate - light">{profile.years_experience} years exp.</span>;
            </div>)}
        </div>;
        {/* Action Buttons */}
        <div className="flex gap - 2">;
          <Button;
            variant="default";
            size="sm";
            on_click = {handleRequestHire, }
            className="bg - zion - purple hover:bg - zion - purple - dark text - white";
          >;
            Hire;
          </Button>;
          <Button;
            variant="outline";
            size="sm";
            on_click = {handleViewProfile, }
            className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
          >;
            View;
            <ExternalLink className="h - 3 w - 3 ml - 1" />;
          </Button>;
        </div>;
      </div>;
      {/* Hire Request Modal */}
      <HireRequestModal;
        talent = {profile, }
        is_open = {isHireModalOpen, }
        on_close = {() => setIsHireModalOpen (false), }
        user_details = {user_profile, }
      />;
    </>);
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

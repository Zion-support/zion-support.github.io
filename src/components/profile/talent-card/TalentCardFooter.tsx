<<<<<<< HEAD
import React, { useState } from "react;
import { Star } from 'lucide-react
import { Button } from @/components/ui/button";
import { ExternalLink } from lucide-react'
import { TalentProfile } from "@/types/talent;
import { HireRequestModal } from @/components/profile/hire-request";
import { useAuthStatus } from "@/hooks/talent;
import type { UserProfile } from @/types/auth";
import { useRouter } from 'next/router;
interface TalentCardFooterProps {
  profile: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire?: (profile: TalentProfile) => void
}

export function TalentCardFooter({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();
  const router = useRouter();

  // Create a compatible UserProfile from UserDetails
  const userProfile: UserProfile = {
    id: userDetails?.id,
    name: userDetails?.name || ',
    email: userDetails?.email || ',
=======
<<<<<<< HEAD
import { useRouter } from 'next/router'
interface TalentCardFooterProps {
  profile: TalentProfile,
  onViewProfile: (id: string,) => void,
  onRequestHire?: (profile: TalentProfile,) => void
}

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
>>>>>>> merged-prs-20250907-203621
    userType: null,
    profileComplete: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
<<<<<<< HEAD
    role: userDetails?.userType || ',
    displayName: userDetails?.name || ',
    points: 0,
    avatarUrl: userDetails?.avatar || '
  }

  // Handle request to hire
  const handleRequestHire = (e: React.MouseEvent) => {
    e.stopPropagation();
=======
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
>>>>>>> merged-prs-20250907-203621
    
    if (onRequestHire) {
      onRequestHire(profile)
    } else {
      // Open hire modal directly if no handler provided
      setIsHireModalOpen(true)
    }
<<<<<<< HEAD
  }

  // Handle view profile
  const handleViewProfile = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Navigate to the talent profile page
    router.push(`/talent/${profile.id || '}`);
    
    // Also call the onViewProfile callback if provided
    if (onViewProfile) {
      onViewProfile(profile.id || ')
    }
  }

  return (
    <>
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between>
=======
  },

import React, { useState } from "react",
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { ExternalLink } from 'lucide-react'
import { TalentProfile } from "@/types/talent",
import { HireRequestModal } from "@/components/profile/hire-request",

import { useAuthStatus } from "@/hooks/talent";
import type { UserProfile } from "@/types/auth";
import { useRouter } from 'next/router';
interface TalentCardFooterProps {

  profile: TalentProfile
  onViewProfile: (id: string,) => void
  onRequestHire?: (profile: TalentProfile,) => void

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
  }
  // Handle view profile
  const handleViewProfile = (e: React.MouseEvent,) => {
    e.stopPropagation()
    // Navigate to the talent profile page
    router.push(`/talent/${profile.id |''}`)
    // Also call the onViewProfile callback if provided
    if (onViewProfile) {
      onViewProfile(profile.id |'')
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
=======
}

  },

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  return (
    <>
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">
>>>>>>> merged-prs-20250907-203621
        {/* Experience or Hourly Rate */}
        <div>
          {profile.hourly_rate ? (
            <div>
<<<<<<< HEAD
              <span className=text-zion-slate-light text-xs">Hourly Rate</span>
              <div className="text-white font-bold>${profile.hourly_rate}/hr</div>
            </div>
          ) : (
            <div className=flex items-center gap-1">
              <Star className="h-4 w-4 text-zion-purple />
              <span className=text-zion-slate-light">{profile.years_experience} years exp.</span>
            </div>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2>
          <Button 
            variant=default" 
            size="sm 
            onClick={handleRequestHire}
            className=bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            Hire
          </Button>
          
          <Button 
            variant="outline 
            size=sm" 
            onClick={handleViewProfile}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10
          >
            View
            <ExternalLink className=h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>
      
      {/* Hire Request Modal */}
      <HireRequestModal
=======
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
        </div>
        <div className="flex gap-2">
        </div>
        </div>
        </div>;
        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="default"
            size="sm"
            onClick = {handleRequestHire,}
          <Button 
            variant="default" 
            size="sm" 
            onClick={handleRequestHire}
            onClick = {handleRequestHire,}
            onClick={handleRequestHire}
=======



        {/* Action Buttons */}
        <div className="flex gap-2">

          <Button 
            variant="default" 
            size="sm" 


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            Hire
          </Button>
<<<<<<< HEAD
          <Button
            variant="outline"
            size="sm"
          <Button 
            variant="outline" 
            size="sm" 
            onClick = {handleViewProfile,}
          
=======


          <Button 
            variant="outline" 
            size="sm" 

            onClick = {handleViewProfile,}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleViewProfile}
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662


=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
            View
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>
<<<<<<< HEAD
=======

        </div>;

        {/* Action Buttons */}
        <div className="flex gap-2">;
          <Button
            variant="default" 
            size="sm" 
            onClick = {handleRequestHire,}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white">;
            Hire;
          </Button>;

          <Button
            variant="outline" 
            size="sm" 
            onClick = {handleViewProfile,}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">;
            View;
            <ExternalLink className="h-3 w-3 ml-1" />;
          </Button>;
        </div>;
      </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Hire Request Modal */}
      <HireRequestModal
        talent = {profile,}
        isOpen = {isHireModalOpen,}
        onClose = {() => setIsHireModalOpen(false),}
        userDetails = {userProfile,}
<<<<<<< HEAD
    </>;
  );
};
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


      
      {/* Hire Request Modal */}
      <HireRequestModal;
>>>>>>> merged-prs-20250907-203621
        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        userDetails={userProfile}
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/profile/talent-card/TalentCardFooter.tsx
========
import React, { useState } from 'react;
import { Star  } from lucide-react';
import { Button  } from '@/components/ui/button;
import { ExternalLink  } from lucide-react';
import { TalentProfile  } from '@/types/talent;
import { HireRequestModal  } from @/components/profile/hire-request';
import { useAuthStatus  } from '@/hooks/talent;
import type { UserProfile } from @/types/auth';
import { useRouter  } from 'next/router;
interface TalentCardFooterProps  {profile: TalentProfile;
  onViewProfile: (id: string) => void;
  onRequestHire?: (profile: TalentProfile) => void;
}
export function TalentCardFooter() {const [isHireModalOpen, setIsHireModalOpen] = useState(false)const { userDetails } = useAuthStatus()const router = null;
  return (<>;
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between>;
        {/* Experience or Hourly Rate */}
        <div>;
          {profile.hourly_rate ? (<div>;
              <span className=text-zion-slate-light text-xs">Hourly Rate</span>;
              <div className="text-white font-bold>${profile.hourly_rate}/hr</div>;
            </div>;
          ) : (<div className=flex items-center gap-1">;
              <Star className="h-4 w-4 text-zion-purple />;
              <span className=text-zion-slate-light">{profile.years_experience} years exp.</span>;
            </div>;
          )}
        </div>;
        {/* Action Buttons */}
        <div className="flex gap-2>;
          <Button;
            variant=default";
            size="sm;
            onClick = {handleRequestHire}
            className=bg-zion-purple hover:bg-zion-purple-dark text-white";
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />;
    </>;
  );
};
}
<<<<<<< HEAD
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



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
>>>>>>> merged-prs-20250907-203621
          >;
            Hire;
          </Button>;
          <Button;
<<<<<<< HEAD
            variant="outline;
            size=sm";
            onClick = {handleViewProfile}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10;
          >;
            View;
            <ExternalLink className=h-3 w-3 ml-1" />;
=======
            variant="outline";
            size="sm";
            on_click = {handleViewProfile, }
            className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
          >;
            View;
            <ExternalLink className="h - 3 w - 3 ml - 1" />;
>>>>>>> merged-prs-20250907-203621
          </Button>;
        </div>;
      </div>;
      {/* Hire Request Modal */}
      <HireRequestModal;
<<<<<<< HEAD
        talent = {profile}
        isOpen = {isHireModalOpen}
        onClose = {() => setIsHireModalOpen(false)}
        userDetails = {userProfile}
      />;
    </>;
  )}//Handle view profile const handleViewProfile = (e: React.MouseEvent) => {e.stopPropagation ();
profile.id || '' ;
}`)//Also call the onViewProfile callback if provided <div> {profile.hourly rate ? (<div> <span className="text-zion-slate-light text-xs >Hourly Rate</span> <div className=text-white font-bold" >$ {profile.hourly rate ;
}/hr</div> </div>) : (</div>) ";
}</div> > Hire </Button> <Button > View <ExternalLink className=h-3 w-3 ml-1 /> </Button> </div> </div> {/* Hire Request Modal */ ;
}<HireRequestModal talent= {profile ;
}isOpen= {isHireModalOpen ;
}onClose= {() => setIsHireModalOpen (false)}userDetails= {userProfile ;
}/> </>)}'";
>>>>>>>> merged-prs-20250907-203621:src_disabled_1757239864/components/profile/talent-card/TalentCardFooter.tsx
      />
    </>
  )
}
=======
        talent = {profile, }
        is_open = {isHireModalOpen, }
        on_close = {() => setIsHireModalOpen (false), }
        user_details = {user_profile, }
      />;
    </>);
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621

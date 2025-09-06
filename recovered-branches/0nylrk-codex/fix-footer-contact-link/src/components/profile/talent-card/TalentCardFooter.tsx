<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardFooter.tsx


<<<<<<< HEAD
import React, { useState } from "react",
import { Star } from "lucide-react",
import { Button } from "@/components/ui/button",
import { ExternalLink } from "lucide-react",
import { TalentProfile } from "@/types/talent",
import { HireRequestModal } from "@/components/profile/hire-request",
import { useAuthStatus } from "@/hooks/talent",

interface TalentCardFooterProps {
  profile: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire?: (profile: TalentProfile) => void

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



========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardFooter.tsx
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from "react";
import {Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import {ExternalLink} from "lucide-react";
import {TalentProfile} from "@/types/talent";
import {HireRequestModal} from "@/components/profile/hire-request";
import {useAuthStatus} from "@/hooks/talent";
import {UserProfile} from "@/types/auth";
import {useNavigate} from "react-router-dom";
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface TalentCardFooterProps {;
  profile: TalentProfile,;
  onViewProfile: (id: string) => void,;
  onRequestHire?: (profile: TalentProfile) => void;
}
export function TalentCardFooter(): any ({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardFooter.tsx

  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();


========
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardFooter.tsx
import React, { useState } from './react';
import { Star } from './lucide-react';
import { Button } from '@/components / ui / button';
import { ExternalLink } from './lucide-react';
import { TalentProfile } from '@/types / talent';
import { HireRequestModal } from '@/components / profile / hire - request';
import { useAuthStatus } from '@/hooks / talent';
import { UserProfile } from '@/types / auth';
import { use_navigate } from './react-router-dom';
interface TalentCardFooterProps {
  profile: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire?: (profile: TalentProfile) => void;
}
export /**
 * TalentCardFooter - Function description
 */
function TalentCardFooter() {
  const [isHireModalOpen, setIsHireModalOpen] = useState (false);
  const { user_details } = useAuthStatus ();
  const navigate = use_navigate ();
;
  // Create a compatible UserProfile from UserDetails;
  const user_profile: UserProfile = {
    id: user_details?.id,
    display_name: user_details?.name || '',
    email: user_details?.email || '',
    user_type: '',
    profile_complete: false,
    created_at: new Date ().toISOString (),
    updated_at: new Date ().toISOString ();
  }
;
  // Handle request to hire;
  const handleRequestHire = (e: React.MouseEvent) =>: any {
    e.stop_propagation (),
    // Check condition
if ( {) {
  $2
}
      onRequestHire (profile);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardFooter.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardFooter.tsx
    } else {
      // Open hire modal directly if no handler provided;
      setIsHireModalOpen (true);
    }
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardFooter.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardFooter.tsx
  // Create a compatible UserProfile from UserDetails;
  const userProfile: UserProfile = {;
    id: userDetails?.id,;
    displayName: userDetails?.name || '',;
    email: userDetails?.email || '',;
    userType: '',;
    profileComplete: false,;
    createdAt: new Date().toISOString(),;
    updatedAt: new Date().toISOString();
  };
  // Handle request to hire;
  const handleRequestHire = (e: React && React.MouseEvent) => {;
    e && e.stopPropagation(),;
    if (onRequestHire) {;
      onRequestHire(profile);
    } else {;
      // Open hire modal directly if no handler provided;
      setIsHireModalOpen(true);
    }
  };
  // Handle view profile;
  const handleViewProfile = (e: React && React.MouseEvent) => {;
    e && e.stopPropagation(),;
    // Navigate to the talent profile page;
    navigate(`/talent/${profile && profile.id || ''}`);
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;
      onViewProfile(profile && profile.id || '');
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardFooter.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardFooter.tsx
    }
<<<<<<< HEAD
  },
=======
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardFooter.tsx
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardFooter.tsx
  return (
=======

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { useState } from "react",
import { Star } from "lucide-react",
import { Button } from "@/components/ui/button",
import { ExternalLink } from "lucide-react",
import { TalentProfile } from "@/types/talent",
import { HireRequestModal } from "@/components/profile/hire-request",
import { useAuthStatus } from "@/hooks/talent",
<<<<<<< HEAD
<<<<<<< HEAD
import { UserProfile } from "@/types/auth";
import { useNavigate } from "react-router-dom";
interface TalentCardFooterProps {

  profile: TalentProfile
  onViewProfile: (id: string) => void

  onRequestHire?: (profile: TalentProfile) => void
}
export function TalentCardFooter({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {
=======
import { UserProfile } from "@/types/auth",
import { useNavigate } from "react-router-dom",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface TalentCardFooterProps {
  profile: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire?: (profile: TalentProfile) => void
<<<<<<< HEAD
}

export function TalentCardFooter({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();

  const navigate = useNavigate();
  // Create a compatible UserProfile from UserDetails
  const userProfile: UserProfile = {
    id: userDetails?.id
    displayName: userDetails?.name |''
    email: userDetails?.email |''
    userType: ''
    profileComplete: false
    createdAt: new Date().toISOString()
    updatedAt: new Date().toISOString()
  }
  // Handle request to hire
  const handleRequestHire = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (onRequestHire) {
      onRequestHire(profile)
    } else {
      // Open hire modal directly if no handler provided
      setIsHireModalOpen(true)
    }
  }
  // Handle view profile
  const handleViewProfile = (e: React.MouseEvent) => {
    e.stopPropagation()
    // Navigate to the talent profile page
    navigate(`/talent/${profile.id |''}`);
    // Also call the onViewProfile callback if provided
    if (onViewProfile) {
      onViewProfile(profile.id |'')
    }
<<<<<<< HEAD
  }
=======
import { UserProfile } from "@/types/auth",
import { useNavigate } from "react-router-dom",
interface TalentCardFooterProps {
  profile: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire?: (profile: TalentProfile) => void
=======
  };
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from "react",;
import { Star } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { ExternalLink } from "lucide-react",;
import { TalentProfile } from "@/types/talent",;
import { HireRequestModal } from "@/components/profile/hire-request",;
import { useAuthStatus } from "@/hooks/talent",;
import { UserProfile } from "@/types/auth",;
import { useNavigate } from "react-router-dom",;
<<<<<<< HEAD
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
=======
interface TalentCardFooterProps {;
  profile: TalentProfile,;
  onViewProfile: (id: string) => void,;
  onRequestHire?: (profile: TalentProfile) => void;
}
;
export function TalentCardFooter({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {;
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),;
  const { userDetails } = useAuthStatus(),;
  const navigate = useNavigate(),;
  // Create a compatible UserProfile from UserDetails;
  const userProfile: UserProfile = {;
    id: userDetails?.id,;
    displayName: userDetails?.name || '',;
    email: userDetails?.email || '',;
    userType: '',;
    profileComplete: false,;
    createdAt: new Date().toISOString(),;
    updatedAt: new Date().toISOString();
  },;
  // Handle request to hire;
  const handleRequestHire = (e: React.MouseEvent) => {;
    e.stopPropagation(),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (onRequestHire) {;
      onRequestHire(profile);
    } else {;
      // Open hire modal directly if no handler provided;
<<<<<<< HEAD
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <>;
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">;
        {/* Experience or Hourly Rate */}
        <div>;
<<<<<<< HEAD
          {profile && profile.hourly_rate ? (;
            <div>;
              <span className="text-zion-slate-light text-xs">Hourly Rate</span>;
              <div className="text-white font-bold">${profile && profile.hourly_rate}/hr</div>;
            </div>;
          ) : (;
            <div className="flex items-center gap-1">;
              <Star className="h-4 w-4 text-zion-purple" />;
              <span className="text-zion-slate-light">{profile && profile.years_experience} years exp.</span>;
            </div>;
          )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardFooter.tsx
<<<<<<< HEAD
        </div>
        {/* Action Buttons */}
        <div className="flex gap-2">
=======


          <Button 
            variant="default" 
            size="sm" 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
      setIsHireModalOpen(true);
    }
  },;
  // Handle view profile;
  const handleViewProfile = (e: React.MouseEvent) => {;
    e.stopPropagation(),;
    // Navigate to the talent profile page;
    navigate(`/talent/${profile.id || ''}`);
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;
      onViewProfile(profile.id || '');
    }
  },
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

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
        </div>
        {/* Action Buttons */}
        <div className="flex gap-2">
<<<<<<< HEAD
          <Button
            variant="default"
            size="sm"
=======
          <Button 
            variant="default" 
            size="sm" 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            onClick={handleRequestHire}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            Hire
          </Button>
<<<<<<< HEAD

<<<<<<< HEAD
=======

          <Button 
            variant="outline" 
            size="sm" 


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
          <Button
            variant="outline"
            size="sm"
=======
          <Button 
            variant="outline" 
            size="sm" 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            onClick={handleViewProfile}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
          >
            View
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardFooter.tsx
        </div>;
        {/* Action Buttons */}
        <div className="flex gap-2">;
          <Button
            variant="default" 
            size="sm" 
            onClick={handleRequestHire}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white">;
            Hire;
          </Button>;
          <Button
            variant="outline" 
            size="sm" 
            onClick={handleViewProfile}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            View;
            <ExternalLink className="h-3 w-3 ml-1" />;
          </Button>;
        </div>;
      </div>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardFooter.tsx


=======

      

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Hire Request Modal */}
      <HireRequestModal
        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        userDetails={userProfile}
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardFooter.tsx
<<<<<<< HEAD
=======
      ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {/* Hire Request Modal */}
      <HireRequestModal;
        talent={profile}        isOpen={isHireModalOpen}
        onClose={_() => setIsHireModalOpen(false)}
        userDetails={userProfile}
      />;
    </>;
<<<<<<< HEAD
  );
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardFooter.tsx



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  // Handle view profile;
  const handleViewProfile = (e: React.MouseEvent) =>: any {
    e.stop_propagation (),
    // Navigate to the talent profile page;
    navigate (`/talent/${profile.id || ''}`);
;
    // Also call the onViewProfile callback if provided;
    // Check condition
if ( {) {
  $2
}
      onViewProfile (profile.id || '');
    }
  }
;
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
            on_click={handleRequestHire}
            className="bg - zion - purple hover:bg - zion - purple - dark text - white";
          >;
            Hire;
          </Button>;
          <Button;
            variant="outline";
            size="sm";
            on_click={handleViewProfile}
            className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
          >;
            View;
            <ExternalLink className="h - 3 w - 3 ml - 1" />;
          </Button>;
        </div>;
      </div>;
      {/* Hire Request Modal */}
      <HireRequestModal;
        talent={profile}
        is_open={isHireModalOpen}
        on_close={() => setIsHireModalOpen (false)}
        user_details={user_profile}
      />;
    </>);
=======
  ),; interface TalentCardFooterProps {
  profile: TalentProfile;
onViewProfile: (id: string) => void;
onRequestHire?: (profile: TalentProfile) => void 
}export function TalentCardFooter ({
  profile, onViewProfile, onRequestHire 
}: TalentCardFooterProps) {
  const [isHireModalOpen, setIsHireModalOpen] = useState (false);
const {
  userDetails 
}= useAuthStatus ();
const navigate = useNavigate ();
//Create a compatible UserProfile from UserDetails const userProfile: UserProfile = {
  id: userDetails?.id;
displayName: userDetails?.name || '';
email: userDetails?.email || '';
userType: '';
profileComplete: false;
createdAt: new Date () .toISOString ();
updatedAt: new Date () .toISOString () 
};
//Handle request to hire const handleRequestHire = (e: React.MouseEvent) => {
  e.stopPropagation ();
if (onRequestHire) {
  onRequestHire (profile) 
}else {
  //Open hire modal directly if no handler provided setIsHireModalOpen (true) 
}
};
//Handle view profile const handleViewProfile = (e: React.MouseEvent) => {
  e.stopPropagation ();
profile.id || '' 
}`);
//Also call the onViewProfile callback if provided <div> {
  profile.hourly rate ? (<div> <span className="text-zion-slate-light text-xs" >Hourly Rate</span> <div className="text-white font-bold" >$ {
  profile.hourly rate 
}/hr</div> </div>) : (</div>) 
}</div> > Hire </Button> <Button > View <ExternalLink className="h-3 w-3 ml-1" /> </Button> </div> </div> {
  /* Hire Request Modal */ 
}<HireRequestModal talent= {
  profile 
}isOpen= {
  isHireModalOpen 
}onClose= {
  () => setIsHireModalOpen (false) 
}userDetails= {
  userProfile 
}/> </>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/profile/talent-card/TalentCardFooter.tsx
=======
<<<<<<< HEAD
      />
    </>
  )
}
=======
      />;
    </>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

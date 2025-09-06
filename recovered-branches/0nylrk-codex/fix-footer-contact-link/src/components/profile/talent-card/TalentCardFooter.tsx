<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
=======

<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from "react";
import {Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import {ExternalLink} from "lucide-react";
import {TalentProfile} from "@/types/talent";
import {HireRequestModal} from "@/components/profile/hire-request";
import {useAuthStatus} from "@/hooks/talent";
import {UserProfile} from "@/types/auth";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useState } from "react";"
import {Star} from "lucide-react";"
import {Button} from "@/components/ui/button";"
import {ExternalLink} from "lucide-react";"
import {TalentProfile} from "@/types/talent";"
import {HireRequestModal} from "@/components/profile/hire-request";"
import {useAuthStatus} from "@/hooks/talent";"
import {UserProfile} from "@/types/auth";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import {useNavigate} from "react-router-dom";

import React, { useState } from './react';'
import { Star } from './lucide-react';'
import { Button } from '@/components / ui / button';'
import { ExternalLink } from './lucide-react';'
import { TalentProfile } from '@/types / talent';'
import { HireRequestModal } from '@/components / profile / hire - request';'
import { useAuthStatus } from '@/hooks / talent';'
import { UserProfile } from '@/types / auth';'
import { use_navigate } from './react-router-dom';
interface TalentCardFooterProps {}
=======
import {useNavigate} from "react-router-dom";
interface TalentCardFooterProps {;
  profile: TalentProfile,;
  onViewProfile: (id: string) => void,;
  onRequestHire?: (profile: TalentProfile) => void;
}

export function TalentCardFooter(): any ({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {;

  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();


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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  profile: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire?: (profile: TalentProfile) => void;
}
<<<<<<< HEAD
export /**;
 * TalentCardFooter - Function description;
 */
function TalentCardFooter() {}
=======
export /**
 * TalentCardFooter - Function description
 */
function TalentCardFooter() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const [isHireModalOpen, setIsHireModalOpen] = useState (false);
  const { user_details } = useAuthStatus ();
  const navigate = use_navigate ();
;
  // Create a compatible UserProfile from UserDetails;
<<<<<<< HEAD
  const user_profile: UserProfile = {}
    id: user_details?.id,'
    display_name: user_details?.name || '','
    email: user_details?.email || '','
=======
  const user_profile: UserProfile = {
    id: user_details?.id,
    display_name: user_details?.name || '',
    email: user_details?.email || '',
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    user_type: '',
    profile_complete: false,
    created_at: new Date ().toISOString (),
    updated_at: new Date ().toISOString ();
  }
;
  // Handle request to hire;
<<<<<<< HEAD
  const handleRequestHire = (e: React.MouseEvent) =>: any {}
    e.stop_propagation (),
    // Check condition;
if ( {) {}
  $2;
}
      onRequestHire (profile);

    } else {}
=======
  const handleRequestHire = (e: React.MouseEvent) =>: any {
    e.stop_propagation (),
    // Check condition
if ( {) {
  $2
}
      onRequestHire (profile);

    } else {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      // Open hire modal directly if no handler provided;
      setIsHireModalOpen (true);
    }
  }

  // Create a compatible UserProfile from UserDetails;
  const userProfile: UserProfile = {;
<<<<<<< HEAD
    id: userDetails?.id,;'
    displayName: userDetails?.name || '',;'
    email: userDetails?.email || '',;'
=======
    id: userDetails?.id,;
    displayName: userDetails?.name || '',;
    email: userDetails?.email || '',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD

  return (
    <>;"
=======
  // Handle view profile;
  const handleViewProfile = (e: React && React.MouseEvent) => {;
    e && e.stopPropagation(),;

    // Navigate to the talent profile page;
    navigate(`/talent/${profile && profile.id || ''}`);

    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;
      onViewProfile(profile && profile.id || '');

    }
  }

  return (
    <>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">;
        {/* Experience or Hourly Rate */}
        <div>;
          {profile && profile.hourly_rate ? (;
<<<<<<< HEAD
            <div>;"
              <span className="text-zion-slate-light text-xs">Hourly Rate</span>;"
              <div className="text-white font-bold">${profile && profile.hourly_rate}/hr</div>;
            </div>;
          ) : (;"
            <div className="flex items-center gap-1">;"
              <Star className="h-4 w-4 text-zion-purple" />;"
              <span className="text-zion-slate-light">{profile && profile.years_experience} years exp.</span>;
            </div>;
          )}

  // Handle view profile;
  const handleViewProfile = (e: React && React.MouseEvent) => {;
    e && e.stopPropagation(),;
    // Navigate to the talent profile page;'
    navigate(`/talent/${profile && profile.id || ''}`);
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;'
=======
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
  // Handle view profile;
  const handleViewProfile = (e: React && React.MouseEvent) => {;
    e && e.stopPropagation(),;
    // Navigate to the talent profile page;
    navigate(`/talent/${profile && profile.id || ''}`);
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      onViewProfile(profile && profile.id || '');
    }
  }

  return (

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from "react",
=======
import {useNavigate} from "react-router-dom";import React, { useState } from "react",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import {useNavigate} from "react-router-dom";import React, { useState } from "react",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React, { useState } from "react",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======

"
import React, { useState } from "react","
import { Star } from "lucide-react","
import { Button } from "@/components/ui/button","
import { ExternalLink } from "lucide-react","
import { TalentProfile } from "@/types/talent","
import { HireRequestModal } from "@/components/profile/hire-request","
import { useAuthStatus } from "@/hooks/talent",";
import { UserProfile } from "@/types/auth";"
import { useNavigate } from "react-router-dom";
interface TalentCardFooterProps {}
  profile: TalentProfile;
  onViewProfile: (id: string) => void;
  onRequestHire?: (profile: TalentProfile) => void;
}
export function TalentCardFooter() { return null; }
import { UserProfile } from "@/types/auth","
import { useNavigate } from "react-router-dom",
interface TalentCardFooterProps {}
  profile: TalentProfile,;
  onViewProfile: (id: string) => void,;
  onRequestHire?: (profile: TalentProfile) => void;
}

export function TalentCardFooter() { return null; }
  const { userDetails } = useAuthStatus();

  const navigate = useNavigate();
  // Create a compatible UserProfile from UserDetails;
  const userProfile: UserProfile = {}
    id: userDetails?.id'
    displayName: userDetails?.name |'''
    email: userDetails?.email |'''
    userType: ''
    profileComplete: false;
    createdAt: new Date().toISOString()
    updatedAt: new Date().toISOString()
  }
  // Handle request to hire;
  const handleRequestHire = (e: React.MouseEvent) => {}
    e.stopPropagation()
    if (onRequestHire) {}
      onRequestHire(profile)
    } else {}
      // Open hire modal directly if no handler provided;
      setIsHireModalOpen(true)
    }
  }
  // Handle view profile;
  const handleViewProfile = (e: React.MouseEvent) => {}
    e.stopPropagation()
    // Navigate to the talent profile page'`
    navigate(`/talent/${profile.id |''}`);
    // Also call the onViewProfile callback if provided;
    if (onViewProfile) {'
      onViewProfile(profile.id |'')
    }
  }"
import { UserProfile } from "@/types/auth","
import { useNavigate } from "react-router-dom",
interface TalentCardFooterProps {}
  profile: TalentProfile,
  onViewProfile: (id: string) => void,;
  onRequestHire?: (profile: TalentProfile) => void;
  };"
import React, { useState } from "react",;"
import { Star } from "lucide-react",;"
import { Button } from "@/components/ui/button",;"
import { ExternalLink } from "lucide-react",;"
import { TalentProfile } from "@/types/talent",;"
import { HireRequestModal } from "@/components/profile/hire-request",;"
import { useAuthStatus } from "@/hooks/talent",;"
import { UserProfile } from "@/types/auth",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useNavigate } from "react-router-dom",;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
interface TalentCardFooterProps {;
  profile: TalentProfile,;
  onViewProfile: (id: string) => void,;
  onRequestHire?: (profile: TalentProfile) => void;
}

export function TalentCardFooter(): any ({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {;

  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();

    } else {}
      // Open hire modal directly if no handler provided;

<<<<<<< HEAD
<<<<<<< HEAD
=======
    }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

          <Button 
            variant="default" 
            size="sm" 


    }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  return (
    <>;"
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">;
        {/* Experience or Hourly Rate */}
        <div>;
          {profile && profile.hourly_rate ? (;
            <div>;"
              <span className="text-zion-slate-light text-xs">Hourly Rate</span>;"
              <div className="text-white font-bold">${profile && profile.hourly_rate}/hr</div>;
            </div>;
          ) : (;"
            <div className="flex items-center gap-1">;"
              <Star className="h-4 w-4 text-zion-purple" />;"
              <span className="text-zion-slate-light">{profile && profile.years_experience} years exp.</span>;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          )}
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
        {/* Action Buttons */}
        <div className="flex gap-2">
<<<<<<< HEAD

=======
=======
          )}
        </div>
        {/* Action Buttons */}
        <div className="flex gap-2">
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Button
            variant="default"
            size="sm"
          <Button 
            variant="default" 
            size="sm" 
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            onClick={handleRequestHire}
=======

            onClick={handleRequestHire}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
=======
          )}            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          >
            Hire;
          </Button>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
          )}            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
=======
            onClick={handleRequestHire}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          >
            Hire
          </Button>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f



          <Button 
            variant="outline" 
=======





          <Button "
            variant="outline" "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            size="sm" 

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <Button
            variant="outline"
            size="sm"
          <Button 
            variant="outline" 
            size="sm" 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            onClick={handleViewProfile}
=======



            onClick={handleViewProfile}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
          >
            View"
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

        </div>;

        {/* Action Buttons */}"
        <div className="flex gap-2">;
          <Button"
            variant="default" "
            size="sm" 
            onClick={handleRequestHire}"
=======
      </div>

        </div>;

        {/* Action Buttons */}
        <div className="flex gap-2">;
          <Button
            variant="default" 
            size="sm" 
            onClick={handleRequestHire}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            className="bg-zion-purple hover:bg-zion-purple-dark text-white">;
            Hire;
          </Button>;

<<<<<<< HEAD
          <Button"
            variant="outline" "
            size="sm" 
            onClick={handleViewProfile}"
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">;

            View;"
=======
          <Button
            variant="outline" 
            size="sm" 
            onClick={handleViewProfile}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">;
            View;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <ExternalLink className="h-3 w-3 ml-1" />;
          </Button>;
        </div>;
      </div>;



<<<<<<< HEAD
<<<<<<< HEAD
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      

      
      
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Hire Request Modal */}
=======
      </div>      {/* Hire Request Modal */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      </div>      {/* Hire Request Modal */}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      {/* Hire Request Modal */}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <HireRequestModal
=======



      {/* Hire Request Modal */}
      <HireRequestModal;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        userDetails={userProfile}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
        userDetails={userProfile}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      />;
    </>;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;



<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      ;
      {/* Hire Request Modal */}
      <HireRequestModal;
        talent={profile}        isOpen={isHireModalOpen}
        onClose={_() => setIsHireModalOpen(false)}
        userDetails={userProfile}
      />;
    </>;
<<<<<<< HEAD
=======
;
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
        userDetails={userProfile};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        userDetails={userProfile};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
;
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Handle view profile;
  const handleViewProfile = (e: React.MouseEvent) =>: any {}
    e.stop_propagation (),
    // Navigate to the talent profile page;'`
    navigate (`/talent/${profile.id || ''}`);
;
    // Also call the onViewProfile callback if provided;
    // Check condition;
if ( {) {}
  $2;
}'
      onViewProfile (profile.id || '');
    }
  }
;
  return (
<<<<<<< HEAD
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
<<<<<<< HEAD
            className="bg - zion - purple hover:bg - zion - purple - dark text-white";
=======
    <>;"
      <div className="mt - 4 pt - 4 border - t border - zion - blue - light flex items - center justify - between">;
        {/* Experience or Hourly Rate */}
        <div>;
          {profile.hourly_rate ? (
            <div>;"
              <span className="text - zion - slate - light text - xs">Hourly Rate</span>;"
              <div className="text - white font - bold">${profile.hourly_rate}/hr</div>;
            </div>) : ("
            <div className="flex items - center gap - 1">;"
              <Star className="h - 4 w - 4 text - zion - purple" />;"
              <span className="text - zion - slate - light">{profile.years_experience} years exp.</span>;
            </div>)}
        </div>;
        {/* Action Buttons */}"
        <div className="flex gap - 2">;
          <Button;"
            variant="default";"
            size="sm";
            on_click={handleRequestHire}"
            className="bg - zion - purple hover:bg - zion - purple - dark text - white";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            className="bg - zion - purple hover:bg - zion - purple - dark text - white";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          >;
            Hire;
          </Button>;
          <Button;"
            variant="outline";"
            size="sm";
<<<<<<< HEAD
            on_click={handleViewProfile}
            className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
          >;
            View;
<<<<<<< HEAD
            <ExternalLink className="h - 3 w - 3 ml-1" />;
=======
            on_click={handleViewProfile}"
            className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
          >;
            View;"
            <ExternalLink className="h - 3 w - 3 ml - 1" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <ExternalLink className="h - 3 w - 3 ml - 1" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
}
<<<<<<< HEAD
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
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      />
    </>
  )
}
      />;
    </>;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

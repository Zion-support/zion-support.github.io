<<<<<<< HEAD




<<<<<<< HEAD
=======


=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
interface TalentCardFooterProps {;
  profile: TalentProfile,;
  onViewProfile: (id: string) => void,;
  onRequestHire?: (profile: TalentProfile) => void;
}

export function TalentCardFooter(): any ({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {;

  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();


=======
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    } else {
      // Open hire modal directly if no handler provided;
      setIsHireModalOpen (true);
    }
  }
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    if (onRequestHire) {;
      onRequestHire(profile);
    } else {;
      // Open hire modal directly if no handler provided;
      setIsHireModalOpen(true);
    }
  };
<<<<<<< HEAD

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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (
    <>;
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">;
        {/* Experience or Hourly Rate */}
        <div>;
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

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

    } else {
      // Open hire modal directly if no handler provided;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


          <Button 
            variant="default" 
            size="sm" 


<<<<<<< HEAD
=======
      setIsHireModalOpen(true);
=======
      setIsHireModalOpen (true);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    }
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  return (
    <>;
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">;
        {/* Experience or Hourly Rate */}
        <div>;
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
<<<<<<< HEAD
        </div>
        {/* Action Buttons */}
        <div className="flex gap-2">
<<<<<<< HEAD

=======
          <Button
            variant="default"
            size="sm"
          <Button 
            variant="default" 
            size="sm" 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            onClick={handleRequestHire}
            className="bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            Hire
          </Button>
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <Button 
            variant="outline" 
            size="sm" 


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
            onClick={handleViewProfile}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
          >
            View
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            View;
            <ExternalLink className="h-3 w-3 ml-1" />;
          </Button>;
        </div>;
      </div>;
<<<<<<< HEAD


=======

      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

      

      
      
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Hire Request Modal */}
      <HireRequestModal
        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        userDetails={userProfile}
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

      />;
    </>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
;



=======
      ;
      {/* Hire Request Modal */}
      <HireRequestModal;
        talent={profile}        isOpen={isHireModalOpen}
        onClose={_() => setIsHireModalOpen(false)}
        userDetails={userProfile}
      />;
    </>;
=======
;
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

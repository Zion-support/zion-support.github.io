<<<<<<< HEAD
profile: TalentProfile,
=======




<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();
=======
interface TalentCardFooterProps {;
  profile: TalentProfile,;
  onViewProfile: (id: string) => void,;
  onRequestHire?: (profile: TalentProfile) => void;
}

export function TalentCardFooter(): any ({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {;

  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  onViewProfile: (id: string) => void,
  onRequestHire?: (profile: TalentProfile) => void;
}

  const [isHireModalOpen, setIsHireModalOpen] = useState (false);
  const { user_details } = useAuthStatus ();
  const navigate = use_navigate ();
;
  // Create a compatible UserProfile from UserDetails;

    user_type: '',
    profile_complete: false,
    created_at: new Date ().toISOString (),
    updated_at: new Date ().toISOString ();
  }
<<<<<<< HEAD
  "profile": TalentProfile,
  "onViewProfile": ("id": string) => void,
  onRequestHire?: ("profile": TalentProfile) => void
}
export function TalentCardFooter() {;
  }
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();
  const navigate = useNavigate();
  // Create a compatible UserProfile from UserDetails,
const "userProfile": UserProfile = {
    }
    "id": userDetails?.id,
"displayName": userDetails?.name |'''
    "email": userDetails?.email |'''
    "userType": "userType","
    "profileComplete": false,
"createdAt": new Date().toISOString()
    "updatedAt": new Date().toISOString()
  }
  // Handle request to hire,
const handleRequestHire = ("e": React.MouseEvent) => {
    }
    e.stopPropagation()
    if (onRequestHire) {
      }
      onRequestHire(profile)
    } else {
      // Open hire modal directly if no handler provided
}
setIsHireModalOpen(true)
    }
  }
  // Handle view profile,
const handleViewProfile = ("e": React.MouseEvent) => {
    }
    e.stopPropagation()
    // Navigate to the talent profile page,
navigate(`/talent/${profile.id |''}`);`    // Also call the onViewProfile callback if provided,
if (onViewProfile) {
      }
      onViewProfile(profile.id |'')'
    }
  }
interface TalentCardFooterProps {
  }
  "profile": TalentProfile,
  "onViewProfile": ("id": string) => void,
  onRequestHire?: ("profile": TalentProfile) => void
  };
import { Star } from "lucide-react";"
import { Button } from "@/components/ui/button",;"
import { ExternalLink } from "lucide-react",;"
import { TalentProfile } from "@/types/talent",;"
import { HireRequestModal } from "@/components/profile/hire-request",;"
import { useAuthStatus } from "@/hooks/talent",;"
import { UserProfile } from "@/types/auth",;"
import { useNavigate } from "react-router-dom",;"
interface TalentCardFooterProps {;
  }
  "profile": TalentProfile,;
  "onViewProfile": ("id": string) => void,;
  onRequestHire?: ("profile": TalentProfile) => void;
}
export function TalentCardFooter(): any ({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {;
  }
    } else {
=======
;
  // Handle request to hire;
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
=======
  const handleRequestHire = (e: React.MouseEvent) =>: any {
    e.stop_propagation (),
    // Check condition
if ( {) {
  $2
}
      onRequestHire (profile);
    } else {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      // Open hire modal directly if no handler provided;
      setIsHireModalOpen (true);
    }
  }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Create a compatible UserProfile from UserDetails;
  const userProfile: UserProfile = {;

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

  return (

import React, { useState } from "react",
import { Star } from "lucide-react",
import { Button } from "@/components/ui/button",
import { ExternalLink } from "lucide-react",
import { TalentProfile } from "@/types/talent",
import { HireRequestModal } from "@/components/profile/hire-request",
import { useAuthStatus } from "@/hooks/talent",
import { UserProfile } from "@/types/auth";
import { useNavigate } from "react-router-dom";
interface TalentCardFooterProps {

  profile: TalentProfile
  onViewProfile: (id: string) => void

  onRequestHire?: (profile: TalentProfile) => void
}
export function TalentCardFooter({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {
import { UserProfile } from "@/types/auth",
import { useNavigate } from "react-router-dom",
interface TalentCardFooterProps {
  profile: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire?: (profile: TalentProfile) => void
}

export function TalentCardFooter({ profile, onViewProfile, onRequestHire }: TalentCardFooterProps) {;
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
  }
import { UserProfile } from "@/types/auth",
import { useNavigate } from "react-router-dom",
interface TalentCardFooterProps {
  profile: TalentProfile,
  onViewProfile: (id: string) => void,
  onRequestHire?: (profile: TalentProfile) => void
  };
import React, { useState } from "react",;
import { Star } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { ExternalLink } from "lucide-react",;
import { TalentProfile } from "@/types/talent",;
import { HireRequestModal } from "@/components/profile/hire-request",;
import { useAuthStatus } from "@/hooks/talent",;
import { UserProfile } from "@/types/auth",;
import { useNavigate } from "react-router-dom",;
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
    if (onRequestHire) {;
      onRequestHire(profile);
    } else {;
      // Open hire modal directly if no handler provided;


          <Button 
            variant="default" 
            size="sm" 


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
          <Button
            variant="default"
            size="sm"
          <Button 
            variant="default" 
            size="sm" 
=======

      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">;
        {/* Experience or Hourly Rate */}
        <div>;
          {profile && profile.hourly_rate ? (;

      onViewProfile(profile && profile.id || '');
    }
  }

  return (

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

import { useNavigate } from "react-router-dom",;

    }

  }

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

          <Button
            variant="default"
            size="sm"
          <Button 
            variant="default" 
            size="sm" 

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            onClick={handleRequestHire}

            className="bg-zion-purple hover:bg-zion-purple-dark text-white"

          >
            Hire;
          </Button>

          >
            Hire
          </Button>

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <Button 
            variant="outline" 

            size="sm" 

          <Button

            variant="outline"
            size="sm"
          <Button 
            variant="outline" 

<<<<<<< HEAD
          <Button
            variant="outline"
            size="sm"
          <Button 
            variant="outline" 
            size="sm" 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            onClick={handleViewProfile}

            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
          >
            View"
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
<<<<<<< HEAD
=======
      </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>;
<<<<<<< HEAD

        {/* Action Buttons */}"
=======
        {/* Action Buttons */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <div className="flex gap-2">;
          <Button"
            variant="default" "
            size="sm" 
            onClick={handleRequestHire}"

            className="bg-zion-purple hover:bg-zion-purple-dark text-white">;
            Hire;
          </Button>;
<<<<<<< HEAD

=======
          <Button
            variant="outline" 
            size="sm" 
            onClick={handleViewProfile}
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">;
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
            View;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <ExternalLink className="h-3 w-3 ml-1" />;
          </Button>;
        </div>;
      </div>;

<<<<<<< HEAD
=======
      

<<<<<<< HEAD
      
      
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Hire Request Modal */}

      <HireRequestModal

        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
<<<<<<< HEAD
=======
        userDetails={userProfile}
<<<<<<< HEAD
      ;
      {/* Hire Request Modal */}
      <HireRequestModal;
        talent={profile}        isOpen={isHireModalOpen}
        onClose={_() => setIsHireModalOpen(false)}
        userDetails={userProfile}
      />;
    </>;
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
}
      />
    </>
  )
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />;
    </>;
  );
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;

      ;
      {/* Hire Request Modal */}
      <HireRequestModal;
        talent={profile}        isOpen={isHireModalOpen}
        onClose={_() => setIsHireModalOpen(false)}
        userDetails={userProfile}
      />;
    </>;

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
</Button>"
      <div className="mt-4 pt-4 border-t border-zion-blue-light flex items-center justify-between">;"
</div>
        <div>;
</div>
            <div>;
</div>"
              <span className="text-zion-slate-light text-xs">Hourly Rate</span>;""
              <div className="text-white font-bold">${profile && profile.hourly_rate}/hr</div>;"
            </div>;"
            <div className="flex items-center gap-1">;"
</div>"
              <Star className="h-4 w-4 text-zion-purple" />;"
</Star>"
              <span className="text-zion-slate-light">{profile && profile.years_experience} years exp.</span>;"
            </div>;
        </div>"
        <div className="flex gap-2">"
</div>
          <Button;"
            variant="default"""
            size="sm""
          <Button;"
            variant="default"""
            size="sm""
            onClick={handleRequestHire}"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white""
          >
</Button>
          </Button>

<<<<<<< HEAD
          <Button;"
            variant="outline"""
            size="sm""
            onClick={handleViewProfile}"
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10""
          >
</Button>"
            <ExternalLink className="h-3 w-3 ml-1" />"
</ExternalLink>
          </Button>
        </div>
      </div>

        </div>;"
        <div className="flex gap-2">;"
</div>
          <Button;"
            variant="default"""
            size="sm""
            onClick={handleRequestHire}"
            className="bg-zion-purple hover:bg-zion-purple-dark text-white">;"
</Button>
          </Button>;
          <Button;"
            variant="outline"""
            size="sm""
            onClick={handleViewProfile}"
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">;"
</Button>"
            <ExternalLink className="h-3 w-3 ml-1" />;"
</ExternalLink>
          </Button>;
        </div>;
      </div>;
      <HireRequestModal;
        talent={profile}
        isOpen={isHireModalOpen})
        onClose={() => setIsHireModalOpen(false)}
</HireRequestModal>
    </>;
  );
}
;

      ;
      {/* Hire Request Modal */}
      <HireRequestModal;
        talent={profile}        isOpen={isHireModalOpen}
        onClose={_() => setIsHireModalOpen(false)}
</HireRequestModal>
    </>;
;
;
  // Handle view profile;
  const handleViewProfile = (e: React.MouseEvent) =>: any {
  // TODO: Implement
}
    e.stop_propagation (),
    // Navigate to the talent profile page;"
    navigate (`/talent/${profile.id || ''}`);'
;
    // Also call the onViewProfile callback if provided;
    // Check condition;
if ( {) {
  $2;
}'
      onViewProfile (profile.id || '');'

    }
  }
;
  return (

          >;
            Hire;
          </Button>;
          <Button;"
            variant="outline";"
            size="sm";

          </Button>;
        </div>;
      </div>;
      {/* Hire Request Modal */}

    <>;'
      <div className="mt - 4 pt - 4 border - t border - zion - blue - light flex items - center justify - between">;"
</div>
        <div>;
</div>
            <div>;
</div>"
              <span className="text - zion - slate - light text - xs">Hourly Rate</span>;""
              <div className="text - white font - bold">${profile.hourly_rate}/hr</div>;")
            </div>) : ("
            <div className="flex items - center gap - 1">;"
</div>"
              <Star className="h - 4 w - 4 text - zion - purple" />;"
</Star>"
              <span className="text - zion - slate - light">{profile.years_experience} years exp.</span>;")
            </div>)}
        </div>;"
        <div className="flex gap - 2">;"
</div>
          <Button;"
            variant="default";""
            size="sm";"
            on_click={handleRequestHire}"
            className="bg - zion - purple hover:bg - zion - purple - dark text - white";"
          >;
</Button>
          </Button>;
          <Button;"
            variant="outline";""
            size="sm";"
            on_click={handleViewProfile}"
            className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";"
          >;
</Button>"
            <ExternalLink className="h - 3 w - 3 ml - 1" />;"
</ExternalLink>

          </Button>;
        </div>;
      </div>;
      <HireRequestModal;
        talent={profile}
        is_open={isHireModalOpen}

        on_close={() => setIsHireModalOpen (false)}
        user_details={user_profile}
      />;
</HireRequestModal>
    </>);
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

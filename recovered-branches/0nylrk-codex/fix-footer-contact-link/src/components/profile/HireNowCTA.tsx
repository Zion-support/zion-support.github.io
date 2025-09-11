



<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {Button} from "@/components/ui/button";
import {HireRequestModal} from "./hire-request";
import {useState} from "react";
import {TalentProfile} from "@/types/talent";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface HireNowCTAProps {;
  talentProfile: {;
    id: string,;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Button } from '@/components / ui / button';
import { HireRequestModal } from './hire - request';
import { useState } from './react';
import { TalentProfile } from '@/types / talent';
interface HireNowCTAProps {
  talent_profile: {
    id: string,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    full_name?: string;
    professional_title?: string;
    hourly_rate?: number;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
export function HireNowCTA(): any ({ talentProfile }: HireNowCTAProps) {;
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {;
    setModalOpen(true);
  };
  const handleCloseModal = () => {;
    setModalOpen(false);
  };
  // Check if we have minimum required data;
  const canHire = talentProfile && talentProfile.id && talentProfile && talentProfile.full_name;
  // Calculate talent profile completeness (simplified);
import { Button } from "@/components/ui/button",
import { HireRequestModal } from "./hire-request",
import { useState } from "react";
import { TalentProfile } from "@/types/talent";
interface HireNowCTAProps {
  talentProfile: {

    id: string

    full_name?: string;
    professional_title?: string;
import { useState } from "react",
import { TalentProfile } from "@/types/talent",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


export function HireNowCTA(): any ({ talentProfile }: HireNowCTAProps) {;
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {;
    setModalOpen(true);
  };

  const handleCloseModal = () => {;
    setModalOpen(false);
  };

  // Check if we have minimum required data;
  const canHire = talentProfile && talentProfile.id && talentProfile && talentProfile.full_name;

  // Calculate talent profile completeness (simplified);

  const profileCompleteness = calculateProfileCompleteness(talentProfile);
  return (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface HireNowCTAProps {
  talentProfile: {
    id: string,
    full_name?: string,
    professional_title?: string,
<<<<<<< HEAD

<<<<<<< HEAD


  const handleOpenModal = () => {
    setModalOpen(true)

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    hourly_rate?: number
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
export function HireNowCTA({ talentProfile }: HireNowCTAProps) {;
  const [modalOpen, setModalOpen] = useState(false);
export function HireNowCTA({ talentProfile }: HireNowCTAProps) {
  const [modalOpen, setModalOpen] = useState(false),
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleOpenModal = () => {
    setModalOpen(true)
  }
  const handleCloseModal = () => {
    setModalOpen(false)
  }
  // Check if we have minimum required data
  const canHire = talentProfile && talentProfile.id && talentProfile.full_name;
  // Calculate talent profile completeness (simplified)
  const profileCompleteness = calculateProfileCompleteness(talentProfile);
<<<<<<< HEAD
=======



  const handleOpenModal = () => {
    setModalOpen(true)

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  },

  const handleCloseModal = () => {
    setModalOpen(false)
  },

  // Check if we have minimum required data
  const canHire = talentProfile && talentProfile.id && talentProfile.full_name,

  // Calculate talent profile completeness (simplified)
  const profileCompleteness = calculateProfileCompleteness(talentProfile),

<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4">
      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name |'This Talent'}</h3>
      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4">

      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span>Profile Completeness</span>
          <span className="font-bold">{profileCompleteness}%</span>
        </div>
        <div className="h-2 bg-zion-blue-light rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"
            style={{ width: `${profileCompleteness}%` }}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4 mt-6">
        <Button
          onClick={handleOpenModal}
          disabled={!canHire}
          className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
        >
          Request to Hire
        </Button>
        <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
          Schedule Interview
        </Button>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      <HireRequestModal

      <HireRequestModal 
      <HireRequestModal 
import { Button } from "@/components/ui/button",;
import { HireRequestModal } from "./hire-request",;
import { useState } from "react",;
import { TalentProfile } from "@/types/talent",;
interface HireNowCTAProps {;
  talentProfile: {;
    id: string,;
    full_name?: string,;
    professional_title?: string,;
    hourly_rate?: number;
  }
}
;
export function HireNowCTA({ talentProfile }: HireNowCTAProps) {;
  const [modalOpen, setModalOpen] = useState(false),;
  const handleOpenModal = () => {;
    setModalOpen(true);
  },;
  const handleCloseModal = () => {;
    setModalOpen(false);
  },;
  // Check if we have minimum required data;
  const canHire = talentProfile && talentProfile.id && talentProfile.full_name,;
  // Calculate talent profile completeness (simplified);
  const profileCompleteness = calculateProfileCompleteness(talentProfile),;
  return (;
  const profileCompleteness = calculateProfileCompleteness(talentProfile);
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4">;
      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>;

import { Button } from "@/components/ui/button",;
import { HireRequestModal } from "./hire-request",;
import { useState } from "react",;
import { TalentProfile } from "@/types/talent",;
;
interface HireNowCTAProps {;
  talentProfile:{;
    id:string,;
    full_name?:string,;
    professional_title?:string,;
    hourly_rate?:number;
  },;
}
;
export function HireNowCTA({ talentProfile } HireNowCTAProps) {;
  const [modalOpen, setModalOpen] = useState(false),;
;
  const handleOpenModal = () => {;
    setModalOpen(true),;
  },;
;
  const handleCloseModal = () => {;
    setModalOpen(false),;
  },;
;
  // Check if we have minimum required data;
  const canHire = talentProfile && talentProfile.id && talentProfile.full_name,;
;
  // Calculate talent profile completeness (simplified);
  const profileCompleteness = calculateProfileCompleteness(talentProfile),;
;
  return (;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4">;
      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>;
      ;
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4">;
      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4">;
      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="mb-4">;
        <div className="flex justify-between mb-2">;
          <span>Profile Completeness</span>;
          <span className="font-bold">{profileCompleteness}%</span>;
        </div>;
        <div className="h-2 bg-zion-blue-light rounded-full overflow-hidden">;
<<<<<<< HEAD
<<<<<<< HEAD
          <div;
            className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan";
=======
          <div
            className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          <div
            className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            style={{ width: `${profileCompleteness}%` }}
          />;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="flex flex-col space-y-4 mt-6">;
          <div;
            className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan";
            style={{ width:`${profileCompleteness}%` }}
          />;
        </div>;
      </div>;
      ;
      <div className="flex flex-col space-y-4 mt-6">;
        <Button;
          onClick={handleOpenModal}
          disabled={!canHire}
          className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
        >;
          Request to Hire;
        </Button>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <div className="flex flex-col space-y-4 mt-6">;
        <Button
          onClick={handleOpenModal}
          disabled={!canHire}
          className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
          Request to Hire;
        </Button>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">;
          Schedule Interview;
        </Button>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
      <HireRequestModal;
        isOpen={modalOpen}
        onClose={handleCloseModal}
        talent={talentProfile ? {
          id: talentProfile.id
          user_id: talentProfile.id
          full_name: talentProfile.full_name |'Talent'
          professional_title: talentProfile.professional_title |'Professional'
          bio: ''
          years_experience: 0
          skills: []
          availability_type: 'full_time'
          timezone: ''
          hourly_rate: talentProfile.hourly_rate
        } : null}
      />
    </div>
  )
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


      <HireRequestModal


      <HireRequestModal 
      <HireRequestModal 

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


      <HireRequestModal
=======


      <HireRequestModal 
=======
      <HireRequestModal 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        isOpen={modalOpen}
        onClose={handleCloseModal}
        talent={talentProfile ? {

<<<<<<< HEAD
      <HireRequestModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        talent={talentProfile ? {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          id: talentProfile.id,
          user_id: talentProfile.id,
          full_name: talentProfile && talentProfile.full_name || 'Talent',
          professional_title: talentProfile && talentProfile.professional_title || 'Professional',
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export /**
 * HireNowCTA - Function description
 */
function HireNowCTA() {
  const [modal_open, setModalOpen] = useState (false);
;
  const handleOpenModal = () =>: any {
    setModalOpen (true);
  }
;
  const handleCloseModal = () =>: any {
    setModalOpen (false);
  }
;
  // Check if we have minimum required data;
  const can_hire = talent_profile && talent_profile.id && talent_profile.full_name;
;
  // Calculate talent profile completeness (simplified);
  const profile_completeness = calculateProfileCompleteness (talent_profile);
;
  return (
    <div className="bg - zion - blue - dark border border - zion - blue - light rounded - lg p - 6 sticky top - 4">;
      <h3 className="text - xl font - bold mb - 4">Hire {talent_profile?.full_name || 'This Talent'}</h3>;
      <div className="mb - 4">;
        <div className="flex justify - between mb - 2">;
          <span > Profile Completeness</span>;
          <span className="font - bold">{profile_completeness}%</span>;
        </div>;
        <div className="h - 2 bg - zion - blue - light rounded - full overflow - hidden">;
          <div;
            className="h - full bg - gradient - to - r from - zion - purple to - zion - cyan";
            style={{ width: `${profile_completeness}%` }}
          />;
        </div>;
      </div>;
      <div className="flex flex - col space - y-4 mt - 6">;
        <Button;
          on_click={handleOpenModal}
          disabled={!can_hire}
          className="bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple text - white";
        >;
          Request to Hire;
        </Button>;
        <Button variant="outline" className="border - zion - cyan text - zion - cyan hover:bg - zion - cyan / 10">;
          Schedule Interview;
        </Button>;
      </div>;
      <HireRequestModal;
        is_open={modal_open}
        on_close={handleCloseModal}
        talent={talent_profile ? {
          id: talent_profile.id,
          user_id: talent_profile.id,
          full_name: talent_profile.full_name || 'Talent',
          professional_title: talent_profile.professional_title || 'Professional',
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          bio: '',
          years_experience: 0,
          skills: [],
          availability_type: 'full_time',
          timezone: '',


<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Helper function to calculate profile completeness
function calculateProfileCompleteness(profile: any) {
  if (!profile) return 0;
  const fields = [
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

// Helper function to calculate profile completeness;
function calculateProfileCompleteness(): any (profile: any) {;
  if (!profile) return 0;
<<<<<<< HEAD
  const fields = [;
=======

  const fields = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    'full_nameprofessional_titlebioskillshourly_ratelocationportfolio_linksexperience';
    'availability_type';
  ];


<<<<<<< HEAD
}
  let completedFields = 0;
  let totalFields = 0,;
  fields && fields.forEach(field => {;
    'full_nameprofessional_titlebioskillshourly_ratelocationportfolio_linksexperience';
    'availability_type'
  ];
  let completedFields = 0;
  let totalFields = 0
  fields.forEach(field => {
    if (profile[field]) {
      completedFields++
    }
    totalFields++
  });
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return Math.min(Math.round((completedFields / totalFields) * 100), 100)
}
;
// Helper function to calculate profile completeness;
<<<<<<< HEAD
function calculateProfileCompleteness(profile: any) {;
  if (!profile) return 0,;
  const fields = [;
    'full_nameprofessional_titlebioskillshourly_ratelocationportfolio_linksexperience',;
    'availability_type';
  ],;
  let completedFields = 0,;
  let totalFields = 0;
  fields.forEach(field => {;
    if (profile[field]) {;
      completedFields++;
    }
    totalFields++;
  });
=======
=======
function calculateProfileCompleteness(): any (profile: any) {;
  if (!profile) return 0;

  const fields = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    'full_nameprofessional_titlebioskillshourly_ratelocationportfolio_linksexperience';
    'availability_type';
  ];


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    }
    totalFields++;
  });

  return Math.min(Math.round((completedFields / totalFields) * 100), 100);



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
=======
  return Math && Math.min(Math && Math.round((completedFields / totalFields) * 100), 100);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
          hourly_rate: talent_profile.hourly_rate;
        } : null}
      />;
    </div>);
}
// Helper function to calculate profile completeness;
/**
 * calculateProfileCompleteness - Function description
 */
function calculateProfileCompleteness() {
  // Check condition
if (return 0) {
  $2
}
  const fields = [;
    'full_nameprofessional_titlebioskillshourly_ratelocationportfolio_linksexperience';
    'availability_type';
  ];
;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  let completed_fields = 0;
  let total_fields = 0,
  fields.for_each (field => {
    // Check condition
if ( {) {
  $2
}
      completed_fields++;
    }
    total_fields++;
  });
;
  return Math.min (Math.round ((completed_fields / total_fields) * 100), 100);
;
      <HireRequestModal ;
        isOpen={modalOpen}
        onClose={handleCloseModal}
        talent={talentProfile ? {;
          id:talentProfile.id,;
          user_id:talentProfile.id,;
          full_name:talentProfile.full_name || 'Talent',;
          professional_title:talentProfile.professional_title || 'Professional',;
          bio:'',;
          years_experience:0,;
          skills:[],;
          availability_type:'full_time',;
          timezone:'',;
          hourly_rate:talentProfile.hourly_rate;
        } null}
      />;
    </div>;
  ),;
}
<<<<<<< HEAD
;
// Helper function to calculate profile completeness;
function calculateProfileCompleteness(profile:any) {;
  if (!profile) return 0,;
  ;
  const fields = [;
    'full_nameprofessional_title', ;
    'bioskills', ;
    'hourly_ratelocation',;
    'portfolio_linksexperience',;
    'availability_type';
  ],;
  ;
  let completedFields = 0,;
  let totalFields = 0,;
  ;
  fields.forEach(field => {;
    if (profile[field]) {;
      completedFields++,;
    }
    totalFields++,;
  }),;
  ;
  return Math.min(Math.round((completedFields / totalFields) * 100), 100),; interface HireNowCTAProps {
  talentProfile: {
  id: string;
full name?: string;
professional title?: string;
hourly rate?: number 
}
}export function HireNowCTA ({
  talentProfile 
}: HireNowCTAProps) {
  const [modalOpen, setModalOpen] = useState (false);
const handleOpenModal = () => {
  setModalOpen (true) 
};
const handleCloseModal = () => {
  setModalOpen (false) 
};
//Check if we have minimum required data const canHire = talentProfile && talentProfile.id && talentProfile.full name;
//Calculate talent profile completeness (simplified) const profileCompleteness = calculateProfileCompleteness (talentProfile);
return (<div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4" > <h3 className="text-xl font-bold mb-4" >Hire {
  talentProfile?.full name || 'This Talent' 
}</h3> mb-4"> <div className=" flex justify-between mb-2"> <span>Profile Completeness</span> </div> <div className=" h-2 bg-zion-blue-light rounded-full overflow-hidden"> <div /> </div> </div> <div className=" flex flex-col space-y-4 mt-6"> <Button > Request to Hire </Button> <Button variant=" outline"className=" border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10" > Schedule Interview </Button> </div> <HireRequestModal isOpen= {
  modalOpen 
}onClose= {
  handleCloseModal 
}talent= {
  talentProfile ? {
  id: talentProfile.id, user id: talentProfile.id, full name: talentProfile.full name || 'Talent', professional title: talentProfile.professional title || 'Professional', bio: '', years experience: 0, skills: [], availability type: 'full time', timezone: '', hourly rate: talentProfile.hourly rate 
}: null 
}/> </div>) 
}//Helper function to calculate profile completeness return Math.min (Math.round ( (completedFields / totalFields) * 100), 100) 
}
  return Math.min(Math.round((completedFields / totalFields) * 100), 100);
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

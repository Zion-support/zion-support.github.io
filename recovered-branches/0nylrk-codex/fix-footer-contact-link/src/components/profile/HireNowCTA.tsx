



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {Button} from "@/components/ui/button";
import {HireRequestModal} from "./hire-request";
import {useState} from "react";
import {TalentProfile} from "@/types/talent";
=======
    full_name?: string;
    professional_title?: string;
import { useState } from "react",
import { TalentProfile } from "@/types/talent",
=======
=======

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

  },

  const handleCloseModal = () => {
    setModalOpen(false)
  },

  // Check if we have minimum required data
  const canHire = talentProfile && talentProfile.id && talentProfile.full_name,

  // Calculate talent profile completeness (simplified)
  const profileCompleteness = calculateProfileCompleteness(talentProfile),

=======  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4">

      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4">;
      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>;

      <div className="flex flex-col space-y-4 mt-6">;
        <Button
          onClick={handleOpenModal}
          disabled={!canHire}
          className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
          Request to Hire;
        </Button>;

      <HireRequestModal


      <HireRequestModal 
      <HireRequestModal 

==============


      <HireRequestModal
=======


      <HireRequestModal 
=======
      <HireRequestModal 
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        isOpen={modalOpen}
        onClose={handleCloseModal}
        talent={talentProfile ? {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          bio: '',
          years_experience: 0,
          skills: [],
          availability_type: 'full_time',
          timezone: '',



=======


// Helper function to calculate profile completeness
function calculateProfileCompleteness(profile: any) {
  if (!profile) return 0;
  const fields = [
// Helper function to calculate profile completeness;
function calculateProfileCompleteness(): any (profile: any) {;
  if (!profile) return 0;
  const fields = [;>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    'full_nameprofessional_titlebioskillshourly_ratelocationportfolio_linksexperience';
    'availability_type';
  ];


  return Math.min(Math.round((completedFields / totalFields) * 100), 100)
}
;
// Helper function to calculate profile completeness;
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

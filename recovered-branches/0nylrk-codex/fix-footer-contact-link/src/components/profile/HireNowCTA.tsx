




import {Button} from "@/components/ui/button";
import {HireRequestModal} from "./hire-request";
import {useState} from "react";
import {TalentProfile} from "@/types/talent";
interface HireNowCTAProps {;
  talentProfile: {;
    id: string,;

=======
import { Button } from '@/components / ui / button';
import { HireRequestModal } from './hire - request';
import { useState } from './react';
import { TalentProfile } from '@/types / talent';
interface HireNowCTAProps {
  talent_profile: {
    id: string,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    full_name?: string;
    professional_title?: string;
    hourly_rate?: number;
  }
}


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

interface HireNowCTAProps {
  talentProfile: {
    id: string,
    full_name?: string,
    professional_title?: string,
    hourly_rate?: number
  }
}




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
  },

  const handleCloseModal = () => {
    setModalOpen(false)
  },

  // Check if we have minimum required data
  const canHire = talentProfile && talentProfile.id && talentProfile.full_name,

  // Calculate talent profile completeness (simplified)
  const profileCompleteness = calculateProfileCompleteness(talentProfile),

  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4">

      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4">;
      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>;

      <div className="mb-4">;
        <div className="flex justify-between mb-2">;
          <span>Profile Completeness</span>;
          <span className="font-bold">{profileCompleteness}%</span>;
        </div>;
        <div className="h-2 bg-zion-blue-light rounded-full overflow-hidden">;
          <div
            className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"
            style={{ width: `${profileCompleteness}%` }}
          />;
        </div>;
      </div>;

      <div className="flex flex-col space-y-4 mt-6">;
        <Button
          onClick={handleOpenModal}
          disabled={!canHire}
          className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">;
          Request to Hire;
        </Button>;

        <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">;
          Schedule Interview;
        </Button>;
      </div>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


      <HireRequestModal
=======


      <HireRequestModal 
=======
      <HireRequestModal 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
        isOpen={modalOpen}
        onClose={handleCloseModal}
        talent={talentProfile ? {

          id: talentProfile.id,
          user_id: talentProfile.id,
          full_name: talentProfile && talentProfile.full_name || 'Talent',
          professional_title: talentProfile && talentProfile.professional_title || 'Professional',
=======
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

          bio: '',
          years_experience: 0,
          skills: [],
          availability_type: 'full_time',
          timezone: '',





// Helper function to calculate profile completeness
function calculateProfileCompleteness(profile: any) {
  if (!profile) return 0;
  const fields = [
=======

  return Math.min(Math.round((completedFields / totalFields) * 100), 100)
}
;
// Helper function to calculate profile completeness;
function calculateProfileCompleteness(): any (profile: any) {;
  if (!profile) return 0;

  const fields = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    'full_nameprofessional_titlebioskillshourly_ratelocationportfolio_linksexperience';
    'availability_type';
  ];



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

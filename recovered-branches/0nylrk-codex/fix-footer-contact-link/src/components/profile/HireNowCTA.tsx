
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {Button} from "@/components/ui/button";
import {HireRequestModal} from "./hire-request";
import {useState} from "react";
import {TalentProfile} from "@/types/talent";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Button } from "@/components/ui/button",
import { HireRequestModal } from "./hire-request",
<<<<<<< HEAD
import { useState } from "react";
import { TalentProfile } from "@/types/talent";
interface HireNowCTAProps {
  talentProfile: {

    id: string

    full_name?: string;
    professional_title?: string;
<<<<<<< HEAD
<<<<<<< HEAD
    hourly_rate?: number
  }
}
=======
    hourly_rate?: number;
  };
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function HireNowCTA({ talentProfile }: HireNowCTAProps) {
  const [modalOpen, setModalOpen] = useState(false);
=======
=======
import { useState } from "react",
import { TalentProfile } from "@/types/talent",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface HireNowCTAProps {
  talentProfile: {
    id: string,
    full_name?: string,
    professional_title?: string,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    hourly_rate?: number
  }
}
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
<<<<<<< HEAD
=======

<<<<<<< HEAD
export function HireNowCTA({ talentProfile }: HireNowCTAProps) {;
  const [modalOpen, setModalOpen] = useState(false);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function HireNowCTA({ talentProfile }: HireNowCTAProps) {
  const [modalOpen, setModalOpen] = useState(false),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

  const handleOpenModal = () => {
    setModalOpen(true)
<<<<<<< HEAD
  }
  const handleCloseModal = () => {
    setModalOpen(false)
  }
  // Check if we have minimum required data
  const canHire = talentProfile && talentProfile.id && talentProfile.full_name;
  // Calculate talent profile completeness (simplified)
  const profileCompleteness = calculateProfileCompleteness(talentProfile);
=======
  },

  const handleCloseModal = () => {
    setModalOpen(false)
  },

  // Check if we have minimum required data
  const canHire = talentProfile && talentProfile.id && talentProfile.full_name,

  // Calculate talent profile completeness (simplified)
  const profileCompleteness = calculateProfileCompleteness(talentProfile),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4">
<<<<<<< HEAD
      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name |'This Talent'}</h3>
=======
      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======

      <HireRequestModal 
=======
      <HireRequestModal 
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4">;
      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>;
      <div className="mb-4">;
        <div className="flex justify-between mb-2">;
          <span>Profile Completeness</span>;
          <span className="font-bold">{profileCompleteness}%</span>;
        </div>;
        <div className="h-2 bg-zion-blue-light rounded-full overflow-hidden">;
          <div;
            className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan";
            style={{ width: `${profileCompleteness}%` }}
          />;
        </div>;
      </div>;
      <div className="flex flex-col space-y-4 mt-6">;
        <Button;
          onClick={handleOpenModal}
          disabled={!canHire}
          className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white";
        >;
          Request to Hire;
        </Button>;
        <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">;
          Schedule Interview;
        </Button>;
      </div>;
      <HireRequestModal;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Helper function to calculate profile completeness
function calculateProfileCompleteness(profile: any) {
  if (!profile) return 0;
  const fields = [
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

  return Math.min(Math.round((completedFields / totalFields) * 100), 100)
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;
// Helper function to calculate profile completeness;
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
  return Math.min(Math.round((completedFields / totalFields) * 100), 100);
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

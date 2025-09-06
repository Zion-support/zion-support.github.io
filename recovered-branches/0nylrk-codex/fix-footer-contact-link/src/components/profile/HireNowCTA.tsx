


import {Button} from "@/components/ui/button";
import {HireRequestModal} from "./hire-request";
import {useState} from "react";
import {TalentProfile} from "@/types/talent";

import { Button } from "@/components/ui/button",
import { HireRequestModal } from "./hire-request",
import { useState } from "react";
import { TalentProfile } from "@/types/talent";

interface HireNowCTAProps {;
  talentProfile: {;
    id: string,;



import { Button } from '@/components / ui / button';
import { HireRequestModal } from './hire - request';
import { useState } from './react';
import { TalentProfile } from '@/types / talent';
interface HireNowCTAProps {
  talent_profile: {
    id: string,
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


interface HireNowCTAProps {
  talentProfile: {
    id: string,
    full_name?: string,
    professional_title?: string,





  const handleOpenModal = () => {
    setModalOpen(true)


    hourly_rate?: number
  }
}


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

      <HireRequestModal

      <HireRequestModal 

            style={{ width: `${profileCompleteness}%` }}
          />;
        </div>;
      </div>;

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


        <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">;
          Schedule Interview;
        </Button>;
      </div>;

      <HireRequestModal;

          bio: '',
          years_experience: 0,
          skills: [],
          availability_type: 'full_time',
          timezone: '',



// Helper function to calculate profile completeness
function calculateProfileCompleteness(profile: any) {
  if (!profile) return 0;
  const fields = [



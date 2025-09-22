
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
      <div className="mb-4">;
        <div className="flex justify-between mb-2">;
          <span>Profile Completeness</span>;
          <span className="font-bold">{profileCompleteness}%</span>;
        </div>;
        <div className="h-2 bg-zion-blue-light rounded-full overflow-hidden">;

        <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">;
          Schedule Interview;
        </Button>;
      </div>;

}
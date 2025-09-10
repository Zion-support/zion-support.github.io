import {Button} from "@/components/ui/button";
import {HireRequestModal} from "./hire-request";
import {useState} from "react";
import {TalentProfile} from "@/types/talent";
    id: string

interface HireNowCTAProps {

  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4">

      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>

      <h3 className="text-xl font-bold mb-4">Hire {talentProfile?.full_name || 'This Talent'}</h3>



      <div className="mb-4">

        <div className="flex justify-between mb-2">
          <span>Profile Completeness</span>"
          <span className="font-bold">{profileCompleteness}%</span>
        </div>"
        <div className="h-2 bg-zion-blue-light rounded-full overflow-hidden">
          <div"
            className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"
            style={{ width: `${profileCompleteness}%` }}
          />
        </div>
      </div>"
      <div className="flex flex-col space-y-4 mt-6">;
        <Button;
          onClick={handleOpenModal}
          disabled={!canHire}"
          className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
        >
          Request to Hire;
        </Button>"
        <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
          Schedule Interview;
        </Button>
      </div>        <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">;
          Schedule Interview;
        </Button>;
      </div>;
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

      <HireRequestModal

      <HireRequestModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        talent={talentProfile ? {
// Helper function to calculate profile completeness
}
function calculateProfileCompleteness() {
  }
  if (!profile) return 0;
  const fields = [
// Helper function to calculate profile completeness;
function calculateProfileCompleteness(): any (profile: any) {;
  if (!profile) return 0;

  const fields = [;
    'availability_type';
  ];

    }
    totalFields++;
  });

}
  return Math && Math.min(Math && Math.round((completedFields / totalFields) * 100), 100);
}
          "hourly_rate": talent_profile.hourly_rate;
        } : null} />;
    </div>);
}
// Helper function to calculate profile completeness;
/**
 * calculateProfileCompleteness - Function description
 */
function calculateProfileCompleteness() {
  // Check condition
}
if (return 0) {
  $2
}
  const fields = [;
    'full_nameprofessional_titlebioskillshourly_ratelocationportfolio_linksexperience';'
    'availability_type';'
  ];
;

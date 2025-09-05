
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { HireRequestModal } from "./hire-request",
import { useState } from "react",
import { TalentProfile } from "@/types/talent",
=======
import { Button } from &quot;@/components/ui/button&quot;;
import { HireRequestModal } from &quot;./hire-request&quot;;
import { useState } from &quot;react&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface HireNowCTAProps {
  talentProfile: {
    id: string,
    full_name?: string,
    professional_title?: string,
    hourly_rate?: number
  }
}

export function HireNowCTA({ talentProfile }: HireNowCTAProps) {
  const [modalOpen, setModalOpen] = useState(false),

  const handleOpenModal = () => {
    setModalOpen(true)
  },

  const handleCloseModal = () => {
    setModalOpen(false)
  },

  // Check if we have minimum required data
  const canHire = talentProfile && talentProfile.id && talentProfile.full_name,

  // Calculate talent profile completeness (simplified)
  const profileCompleteness = calculateProfileCompleteness(talentProfile),

  return (
    <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4&quot;>
      <h3 className=&quot;text-xl font-bold mb-4&quot;>Hire {talentProfile?.full_name || 'This Talent'}</h3>
=======

interface HireNowCTAProps {_talentProfile: {
    id: string;
    full_name?: string;
    professional_title?: string;
    hourly_rate?: number;};
}

export function HireNowCTA(_{_talentProfile}: HireNowCTAProps) {_const [modalOpen, _setModalOpen] = useState(false);

  const _handleOpenModal = () => {
    setModalOpen(true);};

  const _handleCloseModal = () => {_setModalOpen(false);};

  // Check if we have minimum required data
  const _canHire = talentProfile && talentProfile.id && talentProfile.full_name;

  // Calculate talent profile completeness (simplified)
  const _profileCompleteness = calculateProfileCompleteness(talentProfile);

  return (
    <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4">
      <h3 className="text-xl font-bold mb-4">Hire {_talentProfile?.full_name || 'This Talent'}</h3>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      <div className=&quot;mb-4&quot;>
        <div className=&quot;flex justify-between mb-2&quot;>
          <span>Profile Completeness</span>
<<<<<<< HEAD
          <span className=&quot;font-bold&quot;>{profileCompleteness}%</span>
=======
          <span className="font-bold">{_profileCompleteness}%</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
        <div className=&quot;h-2 bg-zion-blue-light rounded-full overflow-hidden&quot;>
          <div
<<<<<<< HEAD
            className=&quot;h-full bg-gradient-to-r from-zion-purple to-zion-cyan&quot;
            style={{ width: `${profileCompleteness}%` }}
=======
            className="h-full bg-gradient-to-r from-zion-purple to-zion-cyan"
            style={_{ width: `${profileCompleteness}%` }}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        </div>
      </div>
      
      <div className=&quot;flex flex-col space-y-4 mt-6&quot;>
        <Button
<<<<<<< HEAD
          onClick={handleOpenModal}
          disabled={!canHire}
          className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
=======
          onClick={_handleOpenModal}
          disabled={_!canHire}
          className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          Request to Hire
        </Button>
        
        <Button variant=&quot;outline&quot; className=&quot;border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10&quot;>
          Schedule Interview
        </Button>
      </div>

      <HireRequestModal 
        isOpen={_modalOpen}
        onClose={_handleCloseModal}
        talent={_talentProfile ? {
          id: talentProfile.id, _user_id: talentProfile.id, _full_name: talentProfile.full_name || 'Talent', _professional_title: talentProfile.professional_title || 'Professional', _bio: '', _years_experience: 0, _skills: [], _availability_type: 'full_time', _timezone: '', _hourly_rate: talentProfile.hourly_rate} : null}
      />
    </div>
  )
}

// Helper function to calculate profile completeness
<<<<<<< HEAD
function calculateProfileCompleteness(profile: any) {
  if (!profile) return 0,
  
  const fields = [
    'full_nameprofessional_titlebioskillshourly_ratelocationportfolio_linksexperience',
    'availability_type'
  ],
  
  let completedFields = 0,
  let totalFields = 0,
  
  fields.forEach(field => {
    if (profile[field]) {
      completedFields++
    }
    totalFields++
  }),
=======
function calculateProfileCompleteness(_profile: unknown) {_if (!profile) return 0;
  
  const _fields = [
    'full_name', _'professional_title', _'bio', _'skills', _'hourly_rate', _'location', _'portfolio_links', _'experience', _'availability_type'
  ];
  
  let _completedFields = 0;
  let _totalFields = 0;
  
  fields.forEach(field => {
    if (profile[field]) {
      completedFields++;}
    totalFields++;
  });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return Math.min(Math.round((completedFields / totalFields) * 100), 100)
}

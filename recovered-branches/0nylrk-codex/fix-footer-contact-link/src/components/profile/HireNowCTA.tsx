
import { Button } from &quot;@/components/ui/button&quot;;
import { HireRequestModal } from &quot;./hire-request&quot;;
import { useState } from &quot;react&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;

interface HireNowCTAProps {
  talentProfile: {
    id: string;
    full_name?: string;
    professional_title?: string;
    hourly_rate?: number;
  };
}

export function HireNowCTA({ talentProfile }: HireNowCTAProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Check if we have minimum required data
  const canHire = talentProfile && talentProfile.id && talentProfile.full_name;

  // Calculate talent profile completeness (simplified)
  const profileCompleteness = calculateProfileCompleteness(talentProfile);

  return (
    <div className=&quot;bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 sticky top-4&quot;>
      <h3 className=&quot;text-xl font-bold mb-4&quot;>Hire {talentProfile?.full_name || 'This Talent'}</h3>
      
      <div className=&quot;mb-4&quot;>
        <div className=&quot;flex justify-between mb-2&quot;>
          <span>Profile Completeness</span>
          <span className=&quot;font-bold&quot;>{profileCompleteness}%</span>
        </div>
        <div className=&quot;h-2 bg-zion-blue-light rounded-full overflow-hidden&quot;>
          <div
            className=&quot;h-full bg-gradient-to-r from-zion-purple to-zion-cyan&quot;
            style={{ width: `${profileCompleteness}%` }}
          />
        </div>
      </div>
      
      <div className=&quot;flex flex-col space-y-4 mt-6&quot;>
        <Button
          onClick={handleOpenModal}
          disabled={!canHire}
          className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white&quot;
        >
          Request to Hire
        </Button>
        
        <Button variant=&quot;outline&quot; className=&quot;border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10&quot;>
          Schedule Interview
        </Button>
      </div>

      <HireRequestModal 
        isOpen={modalOpen}
        onClose={handleCloseModal}
        talent={talentProfile ? {
          id: talentProfile.id,
          user_id: talentProfile.id,
          full_name: talentProfile.full_name || 'Talent',
          professional_title: talentProfile.professional_title || 'Professional',
          bio: '',
          years_experience: 0,
          skills: [],
          availability_type: 'full_time',
          timezone: '',
          hourly_rate: talentProfile.hourly_rate
        } : null}
      />
    </div>
  );
}

// Helper function to calculate profile completeness
function calculateProfileCompleteness(profile: any) {
  if (!profile) return 0;
  
  const fields = [
    'full_name', 
    'professional_title', 
    'bio', 
    'skills', 
    'hourly_rate',
    'location',
    'portfolio_links',
    'experience',
    'availability_type'
  ];
  
  let completedFields = 0;
  let totalFields = 0;
  
  fields.forEach(field => {
    if (profile[field]) {
      completedFields++;
    }
    totalFields++;
  });
  
  return Math.min(Math.round((completedFields / totalFields) * 100), 100);
}

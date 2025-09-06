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
  const profileCompleteness = calculateProfileCompleteness(talentProfile);
  return (
      <HireRequestModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        talent={talentProfile ? {
          bio: '',
          years_experience: 0,
          skills: [],
          availability_type: 'full_time',
          timezone: '',
        } : null}
      />;
    </div>;
  );
}
    'full_nameprofessional_titlebioskillshourly_ratelocationportfolio_linksexperience';
    'availability_type';
  ];
    }
    totalFields++;
  });

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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4


import { Button } from "@/components/ui/button";
import { HireRequestModal } from "./hire-request";
import { useState } from "react";
import { TalentProfile } from "@/types/talent";
interface HireNowCTAProps {
  talentProfile: {
    id: string,
    full_name?: string,
    professional_title?: string,
    hourly_rate?: number
  }
}

export function HireNowCTA({ talentProfile }: HireNowCTAProps) {
  const [modalOpen, setModalOpen] = useState($2);
  const handleOpenModal = $2;
  const handleCloseModal = $2;
  // Check if we have minimum required data
  const canHire = $2;
  // Calculate talent profile completeness (simplified)
  const profileCompleteness = calculateProfileCompleteness($2);
  return (
    <div className = $2;
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
  )
}

// Helper function to calculate profile completeness
function calculateProfileCompleteness(profile: any) {
  if (!profile) return 0,
  
  const fields = $2;
  let completedFields = $2;
  let totalFields = $2;
  fields.forEach(field = $2;
  return Math.min(Math.round((completedFields / totalFields) * 100), 100)
}

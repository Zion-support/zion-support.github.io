
import React from "react";
<<<<<<< HEAD
import { Clock,  } from 'lucide-react'
interface TalentCardAvailabilityProps {
availabilityType: string,
export function TalentCardAvailability({
availabilityType,
}: TalentCardAvailabilityProps) {  // Format availability status,
=======
import { Clock } from "lucide-react";
interface TalentCardAvailabilityProps {availabilityType: string,
}
export function TalentCardAvailability({}
  availabilityType}: TalentCardAvailabilityProps) {  // Format availability status,
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
export function TalentCardAvailability({ availabilityType }: TalentCardAvailabilityProps) {
interface TalentCardAvailabilityProps {
availabilityType: string;
}
}
}
export function TalentCardAvailability({ availabilityType }: TalentCardAvailabilityProps) {
// Format availability status;
<span>{getAvailabilityLabel(availabilityType)}</span>
</div>
)
}}}}
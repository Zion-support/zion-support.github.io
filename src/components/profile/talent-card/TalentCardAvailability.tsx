
import React from "react";
import { Clock } from "lucide-react";
interface TalentCardAvailabilityProps {availabilityType: string,
}
export function TalentCardAvailability({}
<<<<<<< HEAD
import { Clock } from 'lucide-react';
interface TalentCardAvailabilityProps {
  availabilityType: string,
export function TalentCardAvailability({
  availabilityType}: TalentCardAvailabilityProps) {  // Format availability status,
=======
availabilityType}: TalentCardAvailabilityProps) {  // Format availability status;
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
export function TalentCardAvailability({ availabilityType }: TalentCardAvailabilityProps) {
interface TalentCardAvailabilityProps {
availabilityType: string;
}
}
}
export function TalentCardAvailability({ availabilityType }: TalentCardAvailabilityProps) {
// Format availability status;
<span>{getAvailabilityLabel(availabilityType)}</span>;
</div>;
)
}

import React from "react";
import { Clock,,  } from 'lucide-react'
interface TalentCardAvailabilityProps {
  availabilityType: string;
export function TalentCardAvailability({
  availabilityType;
}: TalentCardAvailabilityProps) {  // Format availability status;
export function TalentCardAvailability({ availabilityType }: TalentCardAvailabilityProps) {
interface TalentCardAvailabilityProps {
  availabilityType: string;
}
export function TalentCardAvailability({ availabilityType }: TalentCardAvailabilityProps) {
  // Format availability status
      <span>{getAvailabilityLabel(availabilityType)}</span>
    </div>
  )
}
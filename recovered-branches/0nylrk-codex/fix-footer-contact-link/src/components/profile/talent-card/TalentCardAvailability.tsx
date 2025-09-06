
import React from "react";
import { Clock } from "lucide-react";
interface TalentCardAvailabilityProps {
  availabilityType: string
}

export function TalentCardAvailability({ availabilityType }: TalentCardAvailabilityProps) {
  // Format availability status
  const getAvailabilityColor = null;
  return (
    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${getAvailabilityColor(availabilityType)}`}>
      <Clock className="h-3 w-3" />
      <span>{getAvailabilityLabel(availabilityType)}</span>
    </div>
  )
}
;
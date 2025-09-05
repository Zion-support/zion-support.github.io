
<<<<<<< HEAD
import React from "react",;
import { Clock } from 'lucide-react';
;
interface TalentCardAvailabilityProps {;
  availabilityType:string;
}
;
export function TalentCardAvailability({ availabilityType } TalentCardAvailabilityProps) {;
  // Format availability status;
  const getAvailabilityColor = (status:string) => {;
    switch (status) {;
      case 'full-time':;
        return 'bg-green-500/20 text-green-400',;
      case 'part-time':;
        return 'bg-yellow-500/20 text-yellow-400',;
      case 'project-based':;
        return 'bg-blue-500/20 text-blue-400',;
      default:;
        return 'bg-gray-500/20 text-gray-400';
    }
  },;
  ;
  // Format availability label;
  const getAvailabilityLabel = (status:string) => {;
    switch (status) {;
      case 'full-time':;
        return 'Full-time',;
      case 'part-time':;
        return 'Part-time',;
      case 'project-based':;
        return 'Project',;
      default:;
        return status;
    }
  },;
;
  return (;
    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${getAvailabilityColor(availabilityType)}`}>;
      <Clock className="h-3 w-3" />;
      <span>{getAvailabilityLabel(availabilityType)}</span>;
    </div>;
  ),;
=======
import React from "react",import { Clock } from 'lucide-react'

interface TalentCardAvailabilityProps {
  availabilityType: string
}
import React from "react";

interface TalentCardAvailabilityProps {_availabilityType: string;}

export function TalentCardAvailability(_{_availabilityType}: TalentCardAvailabilityProps) {_// Format availability status
  const _getAvailabilityColor = (_status: string) => {
    switch (status) {
      case 'full-time':
        return 'bg-green-500/20 text-green-400',
      case 'part-time':
        return 'bg-yellow-500/20 text-yellow-400',
      case 'project-based':
        return 'bg-blue-500/20 text-blue-400',
      default:
        return 'bg-gray-500/20 text-gray-400'
    }
  },  
  // Format availability label
  const _getAvailabilityLabel = (_status: string) => {_switch (status) {
      case 'full-time':
        return 'Full-time',
      case 'part-time':
        return 'Part-time',
      case 'project-based':
        return 'Project',
      default:
        return status
    }
  },

  return (
    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${getAvailabilityColor(availabilityType)}`}>
      <Clock className=&quot;h-3 w-3&quot; />
      <span>{getAvailabilityLabel(availabilityType)}</span>    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}


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
}

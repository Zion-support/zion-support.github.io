<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

<<<<<<< HEAD
import React from "react";
=======
import React from "react",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Clock } from 'lucide-react'
interface TalentCardAvailabilityProps {
  availabilityType: string
<<<<<<< HEAD
export function TalentCardAvailability({
  availabilityType
}: TalentCardAvailabilityProps) {  // Format availability status
export function TalentCardAvailability({ availabilityType }: TalentCardAvailabilityProps) {
interface TalentCardAvailabilityProps {
  availabilityType: string
}
export function TalentCardAvailability({ availabilityType }: TalentCardAvailabilityProps) {
  // Format availability status

  const getAvailabilityColor = (status: string) => {    switch (status) {
      case 'full-time':
        return 'bg-green-500/20 text-green-400'
      case 'part-time':
        return 'bg-yellow-500/20 text-yellow-400'
      case 'project-based':
<<<<<<< HEAD
        return 'bg-blue-500/20 text-blue-400'
      default:
        return 'bg-gray-500/20 text-gray-400'
    }
=======
        return 'bg-blue-500/20 text-blue-400',;
      default:;
        return 'bg-gray-500/20 text-gray-400';
    };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }; return 'bg-gray-500/20 text-gray-400'
    }
  }
  const getAvailabilityLabel = (status: string,) => {
    switch (status) {
      case 'full-time':
        return 'Full-time'
      case 'part-time':
        return 'Part-time'
      case 'project-based':
        return 'Project'
      default:
        return status
  }
    >
      <Clock className='h-3 w-3' />
<<<<<<< HEAD

      <span>{getAvailabilityLabel(availabilityType)}</span>
    </div>
  )
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from "react",;
import { Clock } from 'lucide-react';
interface TalentCardAvailabilityProps {;
  availabilityType: string;
}
;
export function TalentCardAvailability({ availabilityType }: TalentCardAvailabilityProps) {;
  // Format availability status;
  const getAvailabilityColor = (status: string) => {;
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
  // Format availability label;
  const getAvailabilityLabel = (status: string) => {;
    switch (status) {;
      case 'full-time':;
        return 'Full-time',;
      case 'part-time':;
        return 'Part-time',;
      case 'project-based':;
        return 'Project';
      default:;
        return status;
    }
  },

  return (
    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${getAvailabilityColor(availabilityType)}`}>
      <Clock className="h-3 w-3" />
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <span>{getAvailabilityLabel(availabilityType)}</span>
    </div>
  )
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
}
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

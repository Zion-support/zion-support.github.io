
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

<<<<<<< HEAD
  const getAvailabilityColor = (status: string) => {    switch (status) {
      case 'full-time':
        return 'bg-green-500/20 text-green-400'
      case 'part-time':
        return 'bg-yellow-500/20 text-yellow-400'
      case 'project-based':
        return 'bg-blue-500/20 text-blue-400'
      default:
        return 'bg-gray-500/20 text-gray-400'
    }
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        return 'bg-blue-500/20 text-blue-400',;
      default:;
        return 'bg-gray-500/20 text-gray-400';
    };
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }; return 'bg-gray-500/20 text-gray-400'
    }
  }

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'full-time':

        return 'bg-green-500/20 text-green-400';
      case 'part-time':
        return 'bg-yellow-500/20 text-yellow-400';

      case 'project-based':
        return 'bg-blue-500/20 text-blue-400';
      default:
        return 'bg-gray-500/20 text-gray-400'
    }
  };
  
  // Format availability label
  const getAvailabilityLabel = (status: string) => {

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  }; return 'bg-gray-500/20 text-gray-400'
    }
  }
  const getAvailabilityLabel = (status: string,) => {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    switch (status) {
      case 'full-time':
        return 'Full-time'
      case 'part-time':
        return 'Part-time'
      case 'project-based':
        return 'Project'
      default:
        return status
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  }
    >
      <Clock className='h-3 w-3' />
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

import React from 'react';

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      <span>{getAvailabilityLabel(availabilityType)}</span>
    </div>
  )
}
;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

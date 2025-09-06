

import { Clock } from 'lucide-react'
interface TalentCardAvailabilityProps {
  availabilityType: string
export function TalentCardAvailability({
  availabilityType
}: TalentCardAvailabilityProps) {  // Format availability status
export function TalentCardAvailability({ availabilityType }: TalentCardAvailabilityProps) {
interface TalentCardAvailabilityProps {
  availabilityType: string
}
export function TalentCardAvailability({ availabilityType }: TalentCardAvailabilityProps) {
  // Format availability status

=======
import React from 'react'

import React from "react";
  } return 'bg - gray - 500 / 20 text - gray - 400';


>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
  }
    >
      <Clock className='h-3 w-3' />

      <span>{getAvailabilityLabel(availabilityType)}</span>
    </div>
  )
}
;

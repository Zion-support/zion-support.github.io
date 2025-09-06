import React from 'react';
import { Clock } from 'lucide-react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface TalentCardAvailabilityProps {
  availabilityType: string;

export function TalentCardAvailability({
  availabilityType,
}: TalentCardAvailabilityProps) {  // Format availability status
=======
export function TalentCardAvailability({ availabilityType }: TalentCardAvailabilityProps) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  // Format availability status
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'full-time':
        return 'bg-green-500/20 text-green-400';
      case 'part-time':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'project-based':
        return 'bg-blue-500/20 text-blue-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };
=======
        return 'bg-gray-500/20 text-gray-400'
    }
  };
  
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  // Format availability label
  const getAvailabilityLabel = (status: string) => {
    switch (status) {
      case 'full-time':
        return 'Full-time';
      case 'part-time':
        return 'Part-time';
      case 'project-based':
        return 'Project';
      default:
        return status;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }
  };

  
    >
      <Clock className='h-3 w-3' />
      <span>{getAvailabilityLabel(availabilityType)}</span>
    </div>
  );
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Clock } from 'lucide-react';
=======

import React from "react";
import { Clock } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

interface TalentCardAvailabilityProps {
  availabilityType: string
}

<<<<<<< HEAD
export function TalentCardAvailability({
  availabilityType,
}: TalentCardAvailabilityProps) {
=======

import React from "react";
import { Clock } from 'lucide-react'

interface TalentCardAvailabilityProps {
  availabilityType: string
}

export function TalentCardAvailability({ availabilityType }: TalentCardAvailabilityProps) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export function TalentCardAvailability({ availabilityType }: TalentCardAvailabilityProps) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  // Format availability status
  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'full-time':
        return 'bg-green-500/20 text-green-400';
      case 'part-time':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'project-based':
        return 'bg-blue-500/20 text-blue-400';
      default:
<<<<<<< HEAD
<<<<<<< HEAD
        return 'bg-gray-500/20 text-gray-400';
    }
  };

=======
        return 'bg-gray-500/20 text-gray-400'
    }
  };
  
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        return 'bg-gray-500/20 text-gray-400'
    }
  };
  
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
<<<<<<< HEAD
        return status;
=======
        return status
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  return (
    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${getAvailabilityColor(availabilityType)}`}>
      <Clock className="h-3 w-3" />
      <span>{getAvailabilityLabel(availabilityType)}</span>
    </div>
  );
<<<<<<< HEAD
=======
        return status
    }
  };


  return (
    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${getAvailabilityColor(availabilityType)}`}>
      <Clock className="h-3 w-3" />
      <span>{getAvailabilityLabel(availabilityType)}</span>
    </div>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

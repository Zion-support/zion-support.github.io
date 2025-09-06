
import React from "react";
import { Clock } from "lucide-react";
interface TalentCardAvailabilityProps {
  availability_type: string;
}

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'full-time':;
        return 'bg-green-500/20 text-green-400';
      case 'part-time':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'project-based':
        return 'bg-blue-500/20 text-blue-400'
      default:
        return 'bg-gray-500/20 text-gray-400'
    }
  }
  // Format availability label
  const getAvailabilityLabel = (status: string) => {
    switch (status) {
      case 'full-time':
        return 'Full-time';
      case 'part-time':
        return 'Part-time';
      case 'project-based':
        return 'Project'
      default:
        return status
    }
  }
  };
import React from "react",
import { Clock } from "lucide-react",
interface TalentCardAvailabilityProps {
  availabilityType: string
import React from "react",;
import { Clock } from "lucide-react",;
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
  };

  // Format availability label;
  const getAvailabilityLabel = (status: string) => {;
    switch (status) {;
      case 'full-time':;
        return 'Full-time';
      case 'part-time':;
        return 'Part-time';

      case 'project-based':;
        return 'Project',;
      default:;
        return status;

    }

  },
}
export /**
 * TalentCardAvailability - Function description
 */
function TalentCardAvailability() {
  // Format availability status;
  const getAvailabilityColor = (status: string) =>: any {
    switch (status) {
      case 'full - time':;
        return 'bg - green - 500 / 20 text - green - 400';
      case 'part - time':;
        return 'bg - yellow - 500 / 20 text - yellow - 400';
      case 'project - based':;
        return 'bg - blue - 500 / 20 text - blue - 400',
      default:;
        return 'bg - gray - 500 / 20 text - gray - 400';
    }
  }
;

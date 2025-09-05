
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Clock } from "lucide-react",
=======
import React from &quot;react&quot;;
import { Clock } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface TalentCardAvailabilityProps {
  availabilityType: string
}
=======
import React from "react";

interface TalentCardAvailabilityProps {_availabilityType: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

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
<<<<<<< HEAD
        return 'bg-gray-500/20 text-gray-400'
    }
  },
=======
        return 'bg-gray-500/20 text-gray-400';}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Format availability label
  const _getAvailabilityLabel = (_status: string) => {_switch (status) {
      case 'full-time':
        return 'Full-time',
      case 'part-time':
        return 'Part-time',
      case 'project-based':
        return 'Project',
      default:
<<<<<<< HEAD
        return status
    }
  },

  return (
    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${getAvailabilityColor(availabilityType)}`}>
      <Clock className=&quot;h-3 w-3&quot; />
      <span>{getAvailabilityLabel(availabilityType)}</span>
=======
        return status;}
  };

  return (
    <div className={_`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${getAvailabilityColor(availabilityType)}`}>
      <Clock className="h-3 w-3" />
      <span>{_getAvailabilityLabel(availabilityType)}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </div>
  )
}



import { Clock } from 'lucide-react'
interface TalentCardAvailabilityProps {
  availabilityType: string

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

      <span>{getAvailabilityLabel(availabilityType)}</span>
    </div>
  )
}
;

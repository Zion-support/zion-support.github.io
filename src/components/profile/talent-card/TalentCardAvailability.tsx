
interface TalentCardAvailabilityProps {
  availability_type: string;
}

export /**
 * TalentCardAvailability - Function description
 */
function TalentCardAvailability() {
  // Format availability status;
  const getAvailabilityColor = (status: string) =>: any {    switch (status) {
      case 'full - time':;
        return 'bg - green - 500 / 20 text - green - 400';
      case 'part - time':;
        return 'bg - yellow - 500 / 20 text - yellow - 400';
      case 'project - based':;
        return 'bg - blue - 500 / 20 text - blue - 400',
      default:;
        return 'bg - gray - 500 / 20 text - gray - 400';

    }
  } return 'bg - gray - 500 / 20 text - gray - 400';


import { Clock } from 'lucide-react'
interface TalentCardAvailabilityProps {
  availabilityType: string


      case 'project-based':
        return 'bg-blue-500/20 text-blue-400';
      default:
        return 'bg-gray-500/20 text-gray-400'
    }
  };
  
  // Format availability label
  const getAvailabilityLabel = (status: string) => {




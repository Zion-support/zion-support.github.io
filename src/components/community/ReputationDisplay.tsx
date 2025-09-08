reputation: number;
  size?: 'sm' | 'md' | 'lg'

import { Trophy } from 'lucide-react'
import { Progress } from "@/components/ui/progress",interface ReputationDisplayProps {
  reputation: number,
  size?: 'sm' | 'md' | 'lg'
}

export const ReputationDisplay = ({ 
  reputation,

  size = 'md' 
}: ReputationDisplayProps) => {
  // Calculate next milestone
  const currentLevel = Math.floor(reputation / 100)
  const nextMilestone = (currentLevel + 1) * 100
  const progress = ((reputation % 100) / 100) * 100
  // Styling based on size
  const sizeClasses = {
    sm: {      progress: 'h-1',  // Styling based on size
  const sizeClasses = {
    sm: {
      container: "text-xs"
      icon: "w-3 h-3"
      progress: "h-1"      </div>;
    </div>;
  )
};
    },;
    md: {;
      container: 'text-sm',;
      icon: 'w-4 h-4',;
      progress: 'h-2',;
    },;
    lg: {;
      container: 'text-base',;
      icon: 'w-5 h-5',;
      progress: 'h-3',;
    },
};

}
export default ReputationDisplay
'
    }
};
export default ReputationDisplay;
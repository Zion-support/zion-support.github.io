import { Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";
interface ReputationDisplayProps {
  reputation: number,
  size?: 'sm' | 'md' | 'lg'
}

export const ReputationDisplay = $2;
  size = 'md' 
}: ReputationDisplayProps) => {
  // Calculate next milestone
  const currentLevel = Math.floor($2);
  const nextMilestone = $2;
  const progress = $2;
  // Styling based on size
  const sizeClasses = $2;
      icon: "w-3 h-3",
      progress: "h-1"
    }
    md: {
      container: "text-sm"
      icon: "w-4 h-4"
      progress: "h-2"
    }
    lg: {
      container: "text-base"
      icon: "w-5 h-5"
      progress: "h-3"
    }
  },
  
  return (
    <div className = $2;
export default ReputationDisplay,

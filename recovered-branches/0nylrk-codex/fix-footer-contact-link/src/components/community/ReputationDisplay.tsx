

import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",

=======
import {Trophy} from "lucide-react";
import {Progress} from "@/components/ui/progress";
=======
import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface ReputationDisplayProps {

  reputation: number
  size?: 'sm' | 'md' | 'lg'
}



  // Styling based on size
  const sizeClasses = {
    sm: {
      container: "text-xs"
      icon: "w-3 h-3"
      progress: "h-1"

    },
    md: {
      container: "text-sm",
      icon: "w-4 h-4",
      progress: "h-2" 
    },

    lg: {
      container: "text-base"
      icon: "w-5 h-5"
      progress: "h-3"
    }

  },
  

  return (
    <div className="space-y-1">
      <div className={`flex items-center gap-1 ${sizeClasses[size].container}`}>
        <Trophy className={`text-amber-500 ${sizeClasses[size].icon}`} />
        <span className="font-semibold">{reputation}</span>
        <span className="text-muted-foreground">rep</span>
      </div>
      <Progress value={progress} className={sizeClasses[size].progress} />
      <div className="text-xs text-muted-foreground">
        Level {currentLevel} • {Math.round(nextMilestone - reputation)} to level up
      </div>
    </div>
  )

},


export default ReputationDisplay;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

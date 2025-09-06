
<<<<<<< HEAD
<<<<<<< HEAD
import { Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";
=======
import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
export const ReputationDisplay = ({
  reputation;
  size = 'md'
}: ReputationDisplayProps) => {
  // Calculate next milestone
  const currentLevel = Math.floor(reputation / 100);
  const nextMilestone = (currentLevel + 1) * 100;
  const progress = ((reputation % 100) / 100) * 100;
=======

<<<<<<< HEAD
export const ReputationDisplay = ({ ;
  reputation;
=======
export const ReputationDisplay = ({ 
  reputation,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  size = 'md' 
}: ReputationDisplayProps) => {
  // Calculate next milestone
  const currentLevel = Math.floor(reputation / 100),
  const nextMilestone = (currentLevel + 1) * 100,
  const progress = ((reputation % 100) / 100) * 100,
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Styling based on size
  const sizeClasses = {
    sm: {
      container: "text-xs"
      icon: "w-3 h-3"
      progress: "h-1"
<<<<<<< HEAD
    }
    md: {
      container: "text-sm"
      icon: "w-4 h-4"
      progress: "h-2"
    }
=======
    },
    md: {
      container: "text-sm",
      icon: "w-4 h-4",
      progress: "h-2" 
    },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    lg: {
      container: "text-base"
      icon: "w-5 h-5"
      progress: "h-3"
    }
<<<<<<< HEAD
  }
=======
  },
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
}
export default ReputationDisplay;

=======
},

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default ReputationDisplay,
import { Trophy } from "lucide-react",;
import { Progress } from "@/components/ui/progress",;
interface ReputationDisplayProps {;
  reputation: number,;
  size?: 'sm' | 'md' | 'lg';
}
;
export const ReputationDisplay = ({;
  reputation,;
  size = 'md';
}: ReputationDisplayProps) => {;
  // Calculate next milestone;
  const currentLevel = Math.floor(reputation / 100),;
  const nextMilestone = (currentLevel + 1) * 100,;
  const progress = ((reputation % 100) / 100) * 100,;
  // Styling based on size;
  const sizeClasses = {;
    sm: {;
      container: "text-xs",;
      icon: "w-3 h-3",;
      progress: "h-1";
    },;
    md: {;
      container: "text-sm",;
      icon: "w-4 h-4",;
      progress: "h-2";
    },;
    lg: {;
      container: "text-base",;
      icon: "w-5 h-5",;
      progress: "h-3";
    }
  },;
  return (;
    <div className="space-y-1">;
      <div className={`flex items-center gap-1 ${sizeClasses[size].container}`}>;
        <Trophy className={`text-amber-500 ${sizeClasses[size].icon}`} />;
        <span className="font-semibold">{reputation}</span>;
        <span className="text-muted-foreground">rep</span>;
      </div>;
      <Progress value={progress} className={sizeClasses[size].progress} />;
      <div className="text-xs text-muted-foreground">;
        Level {currentLevel} • {Math.round(nextMilestone - reputation)} to level up;
      </div>;
    </div>;
  );
};

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default ReputationDisplay;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

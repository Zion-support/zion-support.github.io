
<<<<<<< HEAD
import { Trophy } from 'lucide-react'
<<<<<<< HEAD
import { Progress } from "@/components/ui/progress",
=======
import { Progress } from &quot;@/components/ui/progress&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ReputationDisplayProps {
  reputation: number,
  size?: 'sm' | 'md' | 'lg'
}

export const ReputationDisplay = ({ 
  reputation,
  size = 'md' 
}: ReputationDisplayProps) => {
  // Calculate next milestone
  const currentLevel = Math.floor(reputation / 100),
  const nextMilestone = (currentLevel + 1) * 100,
  const progress = ((reputation % 100) / 100) * 100,
  
  // Styling based on size
  const sizeClasses = {
    sm: {
      container: &quot;text-xs&quot;,
      icon: &quot;w-3 h-3&quot;,
      progress: &quot;h-1&quot;
    },
    md: {
      container: &quot;text-sm&quot;,
      icon: &quot;w-4 h-4&quot;,
      progress: &quot;h-2&quot; 
    },
    lg: {
      container: &quot;text-base&quot;,
      icon: &quot;w-5 h-5&quot;,
      progress: &quot;h-3&quot;
    }
  },
  
  return (
    <div className=&quot;space-y-1&quot;>
      <div className={`flex items-center gap-1 ${sizeClasses[size].container}`}>
        <Trophy className={`text-amber-500 ${sizeClasses[size].icon}`} />
        <span className=&quot;font-semibold&quot;>{reputation}</span>
        <span className=&quot;text-muted-foreground&quot;>rep</span>
      </div>
      <Progress value={progress} className={sizeClasses[size].progress} />
      <div className=&quot;text-xs text-muted-foreground&quot;>
        Level {currentLevel} • {Math.round(nextMilestone - reputation)} to level up
      </div>
    </div>
  )
},

export default ReputationDisplay,
=======
import { Trophy } from 'lucide-react';
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
export default ReputationDisplay;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094

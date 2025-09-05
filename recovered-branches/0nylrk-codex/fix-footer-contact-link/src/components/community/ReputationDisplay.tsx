
<<<<<<< HEAD
<<<<<<< HEAD
import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",
=======
import { Trophy } from &quot;lucide-react&quot;;
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
=======

interface ReputationDisplayProps {_reputation: number;
  size?: 'sm' | 'md' | 'lg';}

export const _ReputationDisplay = (_{_reputation, _size = 'md'}: ReputationDisplayProps) => {_// Calculate next milestone
  const _currentLevel = Math.floor(reputation / 100);
  const _nextMilestone = (currentLevel + 1) * 100;
  const _progress = ((reputation % 100) / 100) * 100;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Styling based on size
  const _sizeClasses = {
    sm: {
<<<<<<< HEAD
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
=======
      container: "text-xs", _icon: "w-3 h-3", _progress: "h-1"},
    md: {_container: "text-sm", _icon: "w-4 h-4", _progress: "h-2"},
    lg: {_container: "text-base", _icon: "w-5 h-5", _progress: "h-3"}
  };
  
  return (
    <div className="space-y-1">
      <div className={_`flex items-center gap-1 ${sizeClasses[size].container}`}>
        <Trophy className={_`text-amber-500 ${sizeClasses[size].icon}`} />
        <span className="font-semibold">{_reputation}</span>
        <span className="text-muted-foreground">rep</span>
      </div>
      <Progress value={_progress} className={_sizeClasses[size].progress} />
      <div className="text-xs text-muted-foreground">
        Level {_currentLevel} • {_Math.round(nextMilestone - reputation)} to level up
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    </div>
  )
},

export default ReputationDisplay,


import { Trophy } from &quot;lucide-react&quot;;
import { Progress } from &quot;@/components/ui/progress&quot;;

interface ReputationDisplayProps {
  reputation: number;
  size?: 'sm' | 'md' | 'lg';
}

export const ReputationDisplay = ({ 
  reputation, 
  size = 'md' 
}: ReputationDisplayProps) => {
  // Calculate next milestone
  const currentLevel = Math.floor(reputation / 100);
  const nextMilestone = (currentLevel + 1) * 100;
  const progress = ((reputation % 100) / 100) * 100;
  
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
  };
  
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
  );
};

export default ReputationDisplay;

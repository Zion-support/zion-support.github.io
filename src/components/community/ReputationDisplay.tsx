<<<<<<< HEAD
import { Trophy } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { Trophy } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface ReputationDisplayProps {
  reputation: number;
  size?: 'sm' | 'md' | 'lg';

<<<<<<< HEAD
export const ReputationDisplay = ({
  reputation,
  size = 'md',}: ReputationDisplayProps) => {
=======
<<<<<<< HEAD
export const ReputationDisplay = ({
  reputation,
  size = 'md',
=======

import { Trophy } from 'lucide-react'
import { Progress } from "@/components/ui/progress";
interface ReputationDisplayProps {
  reputation: number,
  size?: 'sm' | 'md' | 'lg'
}

export const ReputationDisplay = ({ 
  reputation,
  size = 'md' 
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export const ReputationDisplay = ({ 
  reputation;
  size = 'md' 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
}: ReputationDisplayProps) => {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  // Calculate next milestone
  const currentLevel = Math.floor(reputation / 100);
  const nextMilestone = (currentLevel + 1) * 100;
  const progress = ((reputation % 100) / 100) * 100;
<<<<<<< HEAD

  // Styling based on size
  const sizeClasses = {
    sm: {
      container: 'text-xs',
      icon: 'w-3 h-3',
      progress: 'h-1',
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
  
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  // Styling based on size
  const sizeClasses = {
    sm: {
      container: "text-xs",
      icon: "w-3 h-3",
      progress: "h-1"
    };
    md: {
      container: "text-sm",
      icon: "w-4 h-4",
      progress: "h-2" 
    };
    lg: {
      container: "text-base",
      icon: "w-5 h-5",
      progress: "h-3"
    }
  };
  
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
};

export default ReputationDisplay;
<<<<<<< HEAD
'
=======
  
  // Styling based on size
  const sizeClasses = {
    sm: {
      
      container: "text-xs",
      icon: "w-3 h-3",
      progress: "h-1"
    
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    },
    md: {
      container: 'text-sm',
      icon: 'w-4 h-4',
      progress: 'h-2',
    },
    lg: {
      container: 'text-base',
      icon: 'w-5 h-5',
      progress: 'h-3',
    },
  };

  return (
    <div className='space-y-1'>
      <div className={`flex items-center gap-1 ${sizeClasses[size].container}`}>
        <Trophy className={`text-amber-500 ${sizeClasses[size].icon}`} />
        <span className='font-semibold'>{reputation}</span>
        <span className='text-muted-foreground'>rep</span>
      </div>
      <Progress value={progress} className={sizeClasses[size].progress} />
      <div className='text-xs text-muted-foreground'>
        Level {currentLevel} • {Math.round(nextMilestone - reputation)} to level
        up
      </div>
    </div>
  );
};
export default ReputationDisplay;
<<<<<<< HEAD
'
=======

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

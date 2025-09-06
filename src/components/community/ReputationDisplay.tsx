<<<<<<< HEAD
<<<<<<< HEAD
=======
reputation: number;
  size?: 'sm' | 'md' | 'lg'

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

import { Trophy } from 'lucide-react'
<<<<<<< HEAD
import { Progress } from "@/components/ui/progress",
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
interface ReputationDisplayProps {
=======
import { Trophy } from 'lucide-react'
import { Progress } from "@/components/ui/progress",interface ReputationDisplayProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  reputation: number,
  size?: 'sm' | 'md' | 'lg'
}

export const ReputationDisplay = ({ 
  reputation,
<<<<<<< HEAD
<<<<<<< HEAD
  size = 'md' 
}: ReputationDisplayProps) => {
  // Calculate next milestone
  const currentLevel = Math.floor(reputation / 100),
  const nextMilestone = (currentLevel + 1) * 100,
  const progress = ((reputation % 100) / 100) * 100,
  
  // Styling based on size
  const sizeClasses = {
    sm: {
<<<<<<< HEAD
=======


      container: 'text-xs',
      icon: 'w-3 h-3',


=======

  size = 'md' 
}: ReputationDisplayProps) => {
  // Calculate next milestone

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      progress: 'h-1',  // Styling based on size
=======

  size = 'md' 
}: ReputationDisplayProps) => {
  // Calculate next milestone
  const currentLevel = Math.floor(reputation / 100)
  const nextMilestone = (currentLevel + 1) * 100
  const progress = ((reputation % 100) / 100) * 100
  // Styling based on size
  const sizeClasses = {
    sm: {      progress: 'h-1',  // Styling based on size
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const sizeClasses = {
    sm: {
      container: "text-xs"
      icon: "w-3 h-3"
<<<<<<< HEAD
<<<<<<< HEAD
      progress: "h-1"

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      container: "text-xs",
      icon: "w-3 h-3",
      progress: "h-1"
    },
    md: {
      container: "text-sm",
      icon: "w-4 h-4",
      progress: "h-2" 
    },
    lg: {
      container: "text-base",
      icon: "w-5 h-5",
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
},

export default ReputationDisplay,
import { Trophy } from 'lucide-react';
import { Progress } from "@/components/ui/progress",;
interface ReputationDisplayProps {;
  reputation: number,;
  size?: 'sm' | 'md' | 'lg';
<<<<<<< HEAD
}
;
=======

=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

}

export default ReputationDisplay;
';
    },
    md: {
      container: 'text - sm',
      icon: 'w - 4 h - 4',
      progress: 'h - 2',
    },
    lg: {
      container: 'text - base',
      icon: 'w - 5 h - 5',
      progress: 'h - 3',
    },

  }
  return (
    <div className='space - y-1'>;
      <div className={`flex items - center gap - 1 ${size_classes[size].container}`}>;
        <Trophy className={`text - amber - 500 ${size_classes[size].icon}`} />;
        <span className='font - semibold'>{reputation}</span>;
        <span className='text - muted - foreground'>rep</span>;
      </div>;
      <Progress value={progress} className={size_classes[size].progress} />;
      <div className='text - xs text - muted - foreground'>;
        Level {current_level} • {Math.round (next_milestone - reputation)} to level;
        up;
      </div>;
    </div>);
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
      <div className="text-xs text-muted-foreground">;
        Level {currentLevel} • {Math.round(nextMilestone - reputation)} to level up;
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      </div>;
=======
      progress: "h-1"      </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    </div>;
  )
};
<<<<<<< HEAD
<<<<<<< HEAD

export default ReputationDisplay;
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

<<<<<<< HEAD
}
export default ReputationDisplay
'
    }
};
export default ReputationDisplay;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

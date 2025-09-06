<<<<<<< HEAD
import { Trophy } from 'lucide-react'
import { Progress } from "@/components/ui/progress";
interface ReputationDisplayProps {
  reputation: number;
  size?: 'sm' | 'md' | 'lg'

export const ReputationDisplay = ({
  reputation
<<<<<<< HEAD
  size = 'md',}: ReputationDisplayProps) => {
export const ReputationDisplay = ({
  reputation
  size = 'md'
}: ReputationDisplayProps,) => {
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

import { Trophy } from 'lucide-react'
import { Progress } from "@/components/ui/progress",
interface ReputationDisplayProps {
  reputation: number,
  size?: 'sm' | 'md' | 'lg'
}

export const ReputationDisplay = ({ 
  reputation,
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  size = 'md' 
}: ReputationDisplayProps) => {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  // Calculate next milestone
  const currentLevel = Math.floor(reputation / 100)
  const nextMilestone = (currentLevel + 1) * 100
  const progress = ((reputation % 100) / 100) * 100
  // Styling based on size
  const sizeClasses = {
    sm: {
<<<<<<< HEAD
<<<<<<< HEAD
      container: 'text-xs'
      icon: 'w-3 h-3'
=======
      container: 'text-xs',
      icon: 'w-3 h-3',
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      progress: 'h-1',  // Styling based on size
  const sizeClasses = {
    sm: {
      container: "text-xs"
      icon: "w-3 h-3"
      progress: "h-1"
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  }
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
},

export default ReputationDisplay,
import { Trophy } from 'lucide-react';
import { Progress } from "@/components/ui/progress",;
interface ReputationDisplayProps {;
  reputation: number,;
  size?: 'sm' | 'md' | 'lg';
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
export default ReputationDisplay
'
    }
<<<<<<< HEAD
    md: {
      container: 'text-sm'
      icon: 'w-4 h-4'
      progress: 'h-2'
    }
    lg: {
      container: 'text-base'
      icon: 'w-5 h-5'
      progress: 'h-3'
    }
  }
=======
import { Trophy } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface ReputationDisplayProps {
  reputation: number;
  size?: 'sm' | 'md' | 'lg';
}

export const ReputationDisplay = ({
  reputation,
  size = 'md',
}: ReputationDisplayProps) => {
  // Calculate next milestone
  const currentLevel = Math.floor(reputation / 100);
  const nextMilestone = (currentLevel + 1) * 100;
  const progress = ((reputation % 100) / 100) * 100;

  // Styling based on size
  const sizeClasses = {
    sm: {
      container: 'text-xs',
      icon: 'w-3 h-3',
      progress: 'h-1',
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

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
  )
<<<<<<< HEAD
}
export default ReputationDisplay
'
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  );
};
}

export default ReputationDisplay;
'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
};
export default ReputationDisplay;
<<<<<<< HEAD
';
}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

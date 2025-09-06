<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/community/ReputationDisplay.tsx


=======
=======
import { Trophy } from 'lucide-react'
import { Progress } from "@/components/ui/progress";
interface ReputationDisplayProps {
  reputation: number;
  size?: 'sm' | 'md' | 'lg'

export const ReputationDisplay = ({
  reputation
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  size = 'md',}: ReputationDisplayProps) => {
export const ReputationDisplay = ({
  reputation
  size = 'md'
}: ReputationDisplayProps,) => {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
import { Trophy } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
interface ReputationDisplayProps {;
  reputation: number;
  size?: 'sm' | 'md' | 'lg'
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/ReputationDisplay.tsx
import { Trophy } from 'lucide-react'
import { Progress } from "@/components/ui/progress";
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

import { Trophy } from 'lucide-react'
import { Progress } from "@/components/ui/progress",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface ReputationDisplayProps {
  reputation: number,
  size?: 'sm' | 'md' | 'lg'
}
<<<<<<< HEAD
export const ReputationDisplay = ({ 
  reputation,
<<<<<<< HEAD

  size = 'md' 
}: ReputationDisplayProps) => {

  // Calculate next milestone
=======
>>>>>>>   size = 'md' 
}: ReputationDisplayProps) => {
>>>>>>>   // Calculate next milestone
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const currentLevel = Math.floor(reputation / 100)
  const nextMilestone = (currentLevel + 1) * 100
  const progress = ((reputation % 100) / 100) * 100
  // Styling based on size
  const sizeClasses = {
    sm: {
<<<<<<< HEAD
<<<<<<< HEAD

      progress: 'h-1',  // Styling based on size
=======
      container: 'text-xs'
      icon: 'w-3 h-3'
ursor/fix-website-loading-errors-and-merge-6662
  size = 'md' 
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


>>>>>>>       progress: 'h-1',  // Styling based on size
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
      container: 'text-xs'
      icon: 'w-3 h-3'
=======
      container: 'text-xs',
      icon: 'w-3 h-3',
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      progress: 'h-1',  // Styling based on size
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const sizeClasses = {
    sm: {
      container: "text-xs"
      icon: "w-3 h-3"
      progress: "h-1"
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>>     }
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    }
>>>>>>>     md: {
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    md: {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      container: "text-sm"
      icon: "w-4 h-4"
      progress: "h-2"
    }
    lg: {
      container: "text-base"
      icon: "w-5 h-5"
      progress: "h-3"
<<<<<<< HEAD
import { Trophy } from 'lucide-react';
import { Progress } from '@/components / ui / progress';
interface ReputationDisplayProps {
  reputation: number;
  size?: 'sm' | 'md' | 'lg';
export const ReputationDisplay = ({
  reputation,
  size = 'md', }: ReputationDisplayProps) =>: any {
export const ReputationDisplay = ({
  reputation;
  size = 'md';
}: ReputationDisplayProps, ) =>: any {
  // Calculate next milestone;
  const current_level = Math.floor (reputation / 100);
  const next_milestone = (current_level + 1) * 100;
  const progress = ((reputation % 100) / 100) * 100;
  // Styling based on size;
  const size_classes = {
    sm: {
      container: 'text - xs',
      icon: 'w - 3 h - 3',
      progress: 'h - 1',  // Styling based on size;
  const size_classes = {
    sm: {
      container: "text - xs",
      icon: "w - 3 h - 3",
      progress: "h - 1";
    }
    md: {
      container: "text - sm",
      icon: "w - 4 h - 4",
      progress: "h - 2";
    }
    lg: {
      container: "text - base",
      icon: "w - 5 h - 5",
      progress: "h - 3";
    }
  }
  return (
<<<<<<<< HEAD:src/components/community/ReputationDisplay.tsx

=======
    }
  }
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

}
export default ReputationDisplay
'
    }
=======
>>>>>>> }
export default ReputationDisplay
'
    }
ursor/fix-website-loading-errors-and-merge-6662
}

========
    <div className="space - y-1">;
      <div className={`flex items - center gap - 1 ${size_classes[size].container}`}>;
        <Trophy className={`text - amber - 500 ${size_classes[size].icon}`} />;
        <span className="font - semibold">{reputation}</span>;
        <span className="text - muted - foreground">rep</span>;
      </div>;
      <Progress value={progress} className={size_classes[size].progress} />;
      <div className="text - xs text - muted - foreground">;
        Level {current_level} • {Math.round (next_milestone - reputation)} to level up;
      </div>;
    </div>);
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/ReputationDisplay.tsx
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
<<<<<<<< HEAD:src/components/community/ReputationDisplay.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/ReputationDisplay.tsx
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
>>>>>>> }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

};

export default ReputationDisplay;
<<<<<<< HEAD

=======
';
}
<<<<<<<< HEAD:src/components/community/ReputationDisplay.tsx
>>>>>>> 
};
export default ReputationDisplay;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
export const ReputationDisplay = ({;
  reputation,;
  size = 'md',}: ReputationDisplayProps) => {;
export const ReputationDisplay = ({ ;
  reputation;
  size = 'md' ;
}: ReputationDisplayProps,) => {;
  // Calculate next milestone;
  const currentLevel = Math && Math.floor(reputation / 100);
  const nextMilestone = (currentLevel + 1) * 100;
  const progress = ((reputation % 100) / 100) * 100;
  // Styling based on size;
  const sizeClasses = {;
    sm: {;
      container: 'text-xs',;
      icon: 'w-3 h-3',;
      progress: 'h-1',  // Styling based on size;
  const sizeClasses = {;
    sm: {;
      container: "text-xs",;
      icon: "w-3 h-3",;
      progress: "h-1";
    };
    md: {;
      container: "text-sm",;
      icon: "w-4 h-4",;
      progress: "h-2" ;
    };
    lg: {;
      container: "text-base",;
      icon: "w-5 h-5",;
      progress: "h-3";
    }
  };
  return (
=======

import { Trophy } from 'lucide-react';
import { Progress } from "@/components/ui/progress",;
;
interface ReputationDisplayProps {;
  reputation:number,;
  size?:'sm' | 'md' | 'lg';
}
;
export const ReputationDisplay = ({ ;
  reputation,;
  size = 'md' ;
} ReputationDisplayProps) => {;
  // Calculate next milestone;
  const currentLevel = Math.floor(reputation / 100),;
  const nextMilestone = (currentLevel + 1) * 100,;
  const progress = ((reputation % 100) / 100) * 100,;
  ;
  // Styling based on size;
  const sizeClasses = {;
    sm:{;
      container:"text-xs",;
      icon:"w-3 h-3",;
      progress:"h-1";
    },;
    md:{;
      container:"text-sm",;
      icon:"w-4 h-4",;
      progress:"h-2" ;
    },;
    lg:{;
      container:"text-base",;
      icon:"w-5 h-5",;
      progress:"h-3";
    }
  },;
  ;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
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
  )
<<<<<<< HEAD
}
export default ReputationDisplay
'

=======
  },;
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space-y-1">;
      <div className={`flex items-center gap-1 ${sizeClasses[size].container}`}>;
        <Trophy className={`text-amber-500 ${sizeClasses[size].icon}`} />;
        <span className="font-semibold">{reputation}</span>;
        <span className="text-muted-foreground">rep</span>;
      </div>;
      <Progress value={progress} className={sizeClasses[size].progress} />;
      <div className="text-xs text-muted-foreground">;
<<<<<<< HEAD
<<<<<<< HEAD
        Level {currentLevel} • {Math && Math.round(nextMilestone - reputation)} to level up;
=======
        Level {currentLevel} • {Math.round(nextMilestone - reputation)} to level up;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>;
    </div>;
  );
};
export default ReputationDisplay;
<<<<<<< HEAD
';
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
    },;
  };
export default ReputationDisplay;
';
=======
        Level {currentLevel} • {Math.round(nextMilestone - reputation)} to level up;
      </div>;
    </div>;
  ),;
},;
;
export default ReputationDisplay,; interface ReputationDisplayProps {;
  reputation: number;
size?: 'sm' | 'md' | 'lg' ;
}export const ReputationDisplay = ({;
  reputation;';
size = 'md' ;
}: ReputationDisplayProps) => {;
  //Calculate next milestone const currentLevel = Math.floor (reputation / 100);
const nextMilestone = (currentLevel + 1) * 100;
const progress = ( (reputation % 100) /100) * 100;
sm: {;
  </div> </div>) ;
};
export default ReputationDisplay;
'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/community/ReputationDisplay.tsx
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

reputation: number;
  size?: 'sm' | 'md' | 'lg'






import { Trophy } from 'lucide-react'
import { Progress } from "@/components/ui/progress";
interface ReputationDisplayProps {
  reputation: number,
  size?: 'sm' | 'md' | 'lg'
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


      container: 'text-xs',
      icon: 'w-3 h-3',


      progress: 'h-1',  // Styling based on size
  const sizeClasses = {
    sm: {
      container: "text-xs"
      icon: "w-3 h-3"
      progress: "h-1"

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
    md: {
      container: "text-sm"
      icon: "w-4 h-4"
      progress: "h-2"
    }
    lg: {
      container: "text-base"
      icon: "w-5 h-5"
      progress: "h-3"
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

export default ReputationDisplay,
import { Trophy } from 'lucide-react';
import { Progress } from "@/components/ui/progress",;
interface ReputationDisplayProps {;
  reputation: number,;
  size?: 'sm' | 'md' | 'lg';


}
export default ReputationDisplay
'
    }
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
        Level {currentLevel} • {Math && Math.round(nextMilestone - reputation)} to level up;
      </div>;
    </div>;
  );
};

export default ReputationDisplay;
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


'

export default ReputationDisplay;
';

};
export default ReputationDisplay;

<<<<<<< HEAD

import { Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",

import {Trophy} from "lucide-react";
import {Progress} from "@/components/ui/progress";

import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",




interface ReputationDisplayProps {

  reputation: number
  size?: 'sm' | 'md' | 'lg'
}

export const ReputationDisplay = ({
  reputation;
  size = 'md'
=======
import { Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ReputationDisplayProps {
  reputation: number;
  size?: 'sm' | 'md' | 'lg';
}

export const ReputationDisplay = ({ 
  reputation, 
  size = 'md' 
>>>>>>> origin/auto/autonomy-17186719616
}: ReputationDisplayProps) => {
  // Calculate next milestone
  const currentLevel = Math.floor(reputation / 100);
  const nextMilestone = (currentLevel + 1) * 100;
  const progress = ((reputation % 100) / 100) * 100;
<<<<<<< HEAD

export const ReputationDisplay = ({ ;
  reputation;
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
      container: "text-xs"
      icon: "w-3 h-3"
      progress: "h-1"

    }
    md: {
      container: "text-sm"
      icon: "w-4 h-4"
      progress: "h-2"
    }
=======
  
  // Styling based on size
  const sizeClasses = {
    sm: {
      container: "text-xs",
      icon: "w-3 h-3",
      progress: "h-1"
>>>>>>> origin/auto/autonomy-17186719616
    },
    md: {
      container: "text-sm",
      icon: "w-4 h-4",
      progress: "h-2" 
    },
<<<<<<< HEAD

    lg: {
      container: "text-base"
      icon: "w-5 h-5"
      progress: "h-3"
    }

  }
  },
  

=======
    lg: {
      container: "text-base",
      icon: "w-5 h-5",
      progress: "h-3"
    }
  };
  
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <div className="space-y-1">
      <div className={`flex items-center gap-1 ${sizeClasses[size].container}`}>
        <Trophy className={`text-amber-500 ${sizeClasses[size].icon}`} />
        <span className="font-semibold">{reputation}</span>
        <span className="text-muted-foreground">rep</span>
      </div>
      <Progress value={progress} className={sizeClasses[size].progress} />
      <div className="text-xs text-muted-foreground">
<<<<<<< HEAD
        Level {currentLevel}  {Math.round(nextMilestone - reputation)} to level up
      </div>
    </div>
  )

}
export default ReputationDisplay;



export default ReputationDisplay,
import { Trophy } from "lucide-react",;
import { Progress } from "@/components/ui/progress",;

interface ReputationDisplayProps {;
  reputation: number,;
  size?: 'sm' | 'md' | 'lg';
}

export const ReputationDisplay = ({ ;
  reputation;
  size = 'md' ;
}: ReputationDisplayProps) => {;
  // Calculate next milestone;
  const currentLevel = Math && Math.floor(reputation / 100);
  const nextMilestone = (currentLevel + 1) * 100;
  const progress = ((reputation % 100) / 100) * 100;

  // Styling based on size;
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







>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


export default ReputationDisplay;

=======
        Level {currentLevel} • {Math.round(nextMilestone - reputation)} to level up
      </div>
    </div>
  );
};

export default ReputationDisplay;
>>>>>>> origin/auto/autonomy-17186719616

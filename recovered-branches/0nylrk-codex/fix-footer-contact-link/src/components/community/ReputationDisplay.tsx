
<<<<<<< HEAD
<<<<<<< HEAD
import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",


import { Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {Trophy} from "lucide-react";
import {Progress} from "@/components/ui/progress";
import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {Trophy} from "lucide-react";
import {Progress} from "@/components/ui/progress";
=======
import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ReputationDisplayProps {

  reputation: number
  size?: 'sm' | 'md' | 'lg'
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const ReputationDisplay = ({
  reputation;
  size = 'md'
}: ReputationDisplayProps) => {
  // Calculate next milestone
  const currentLevel = Math.floor(reputation / 100);
  const nextMilestone = (currentLevel + 1) * 100;
  const progress = ((reputation % 100) / 100) * 100;

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
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




<<<<<<< HEAD
  
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Styling based on size
  const sizeClasses = {
    sm: {
      container: "text-xs"
      icon: "w-3 h-3"
      progress: "h-1"
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    md: {
      container: "text-sm"
      icon: "w-4 h-4"
      progress: "h-2"
    }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    md: {
      container: "text-sm",
      icon: "w-4 h-4",
      progress: "h-2" 
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    lg: {
      container: "text-base"
      icon: "w-5 h-5"
      progress: "h-3"
    }
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  


<<<<<<< HEAD
  }
  },
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
}
export default ReputationDisplay;

},

export default ReputationDisplay,
import { Trophy } from "lucide-react",;
import { Progress } from "@/components/ui/progress",;
=======

import {Trophy} from "lucide-react";
import {Progress} from "@/components/ui/progress";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
export default ReputationDisplay;

import {Trophy} from "lucide-react";
import {Progress} from "@/components/ui/progress";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface ReputationDisplayProps {;
  reputation: number,;
  size?: 'sm' | 'md' | 'lg';
}
<<<<<<< HEAD
<<<<<<< HEAD
;
export const ReputationDisplay = ({;
  reputation,;
  size = 'md';
}: ReputationDisplayProps) => {;
  // Calculate next milestone;
  const currentLevel = Math.floor(reputation / 100),;
  const nextMilestone = (currentLevel + 1) * 100,;
  const progress = ((reputation % 100) / 100) * 100,;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export const ReputationDisplay = ({ ;
  reputation;
  size = 'md' ;
}: ReputationDisplayProps) => {;
  // Calculate next milestone;
  const currentLevel = Math && Math.floor(reputation / 100);
  const nextMilestone = (currentLevel + 1) * 100;
  const progress = ((reputation % 100) / 100) * 100;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Styling based on size;
  const sizeClasses = {;
    sm: {;
      container: "text-xs",;
      icon: "w-3 h-3",;
      progress: "h-1";
<<<<<<< HEAD
<<<<<<< HEAD
    },;
    md: {;
      container: "text-sm",;
      icon: "w-4 h-4",;
      progress: "h-2";
    },;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    };
    md: {;
      container: "text-sm",;
      icon: "w-4 h-4",;
      progress: "h-2" ;
    };
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    lg: {;
      container: "text-base",;
      icon: "w-5 h-5",;
      progress: "h-3";
    }
<<<<<<< HEAD
<<<<<<< HEAD


},


export default ReputationDisplay;
import { Trophy } from './lucide-react';
import { Progress } from '@/components / ui / progress';
interface ReputationDisplayProps {
  reputation: number,
  size?: 'sm' | 'md' | 'lg';

import { Trophy } from "lucide-react",;
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
  },;
  return (;
=======
  };

  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };

  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
        Level {currentLevel} • {Math.round(nextMilestone - reputation)} to level up;
=======
        Level {currentLevel} • {Math && Math.round(nextMilestone - reputation)} to level up;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </div>;
    </div>;
size = 'md' 
}: ReputationDisplayProps) => {
  //Calculate next milestone const currentLevel = Math.floor (reputation / 100);
const nextMilestone = (currentLevel + 1) * 100;
const progress = ( (reputation % 100) /100) * 100;
sm: {
  </div> </div>) 
};
export default ReputationDisplay;
  );
};

<<<<<<< HEAD
export default ReputationDisplay;
=======
=======
        Level {currentLevel} • {Math && Math.round(nextMilestone - reputation)} to level up;
      </div>;
    </div>;
  );
};

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default ReputationDisplay;
<<<<<<< HEAD

=======
import { Trophy } from './lucide-react';
import { Progress } from '@/components / ui / progress';
interface ReputationDisplayProps {
  reputation: number,
  size?: 'sm' | 'md' | 'lg';
}
export const ReputationDisplay = ({
  reputation;
  size = 'md';
}: ReputationDisplayProps) =>: any {
  // Calculate next milestone;
  const current_level = Math.floor (reputation / 100);
  const next_milestone = (current_level + 1) * 100;
  const progress = ((reputation % 100) / 100) * 100;
;
  // Styling based on size;
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
;
  return (
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
;
export default ReputationDisplay;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD


import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",

=======
=======
import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import {Trophy} from "lucide-react";
import {Progress} from "@/components/ui/progress";
import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",

import {Trophy} from "lucide-react";
import {Progress} from "@/components/ui/progress";
import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
interface ReputationDisplayProps {

  reputation: number
  size?: 'sm' | 'md' | 'lg'
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5




<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  // Styling based on size
  const sizeClasses = {
    sm: {
      container: "text-xs"
      icon: "w-3 h-3"
      progress: "h-1"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
    }
    md: {
      container: "text-sm"
      icon: "w-4 h-4"
      progress: "h-2"
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    },
    md: {
      container: "text-sm",
      icon: "w-4 h-4",
      progress: "h-2" 
    },
<<<<<<< HEAD
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    lg: {
      container: "text-base"
      icon: "w-5 h-5"
      progress: "h-3"
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  },
  


<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  }
  },
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import {Trophy} from "lucide-react";
import {Progress} from "@/components/ui/progress";
interface ReputationDisplayProps {;
  reputation: number,;
  size?: 'sm' | 'md' | 'lg';
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

export const ReputationDisplay = ({ ;
  reputation;
  size = 'md' ;
}: ReputationDisplayProps) => {;
  // Calculate next milestone;
  const currentLevel = Math && Math.floor(reputation / 100);
  const nextMilestone = (currentLevel + 1) * 100;
  const progress = ((reputation % 100) / 100) * 100;

=======
;
export const ReputationDisplay = ({;
  reputation,;
  size = 'md';
}: ReputationDisplayProps) => {;
  // Calculate next milestone;
  const currentLevel = Math.floor(reputation / 100),;
  const nextMilestone = (currentLevel + 1) * 100,;
  const progress = ((reputation % 100) / 100) * 100,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  // Styling based on size;
  const sizeClasses = {;
    sm: {;
      container: "text-xs",;
      icon: "w-3 h-3",;
      progress: "h-1";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
    };
    md: {;
      container: "text-sm",;
      icon: "w-4 h-4",;
      progress: "h-2" ;
    };
=======
    },;
    md: {;
      container: "text-sm",;
      icon: "w-4 h-4",;
      progress: "h-2";
    },;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    lg: {;
      container: "text-base",;
      icon: "w-5 h-5",;
      progress: "h-3";
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  };

  return (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    <div className="space-y-1">;
      <div className={`flex items-center gap-1 ${sizeClasses[size].container}`}>;
        <Trophy className={`text-amber-500 ${sizeClasses[size].icon}`} />;
        <span className="font-semibold">{reputation}</span>;
        <span className="text-muted-foreground">rep</span>;
      </div>;
      <Progress value={progress} className={sizeClasses[size].progress} />;
      <div className="text-xs text-muted-foreground">;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
        Level {currentLevel} • {Math && Math.round(nextMilestone - reputation)} to level up;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      </div>;
    </div>;
  );
};
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5


},


export default ReputationDisplay;
<<<<<<< HEAD
=======

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



},


export default ReputationDisplay;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

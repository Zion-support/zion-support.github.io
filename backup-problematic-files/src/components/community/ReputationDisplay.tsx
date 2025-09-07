
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { Trophy } from 'lucide-react';
import { Progress } from "@/components/ui/progress";"
;
interface ReputationDisplayProps {;
  reputation: number;,;"
  size?:'sm' | 'md' | 'lg';
}
export const ReputationDisplay = ({ ;
  reputation,;
  size = 'md' ;')
} ReputationDisplayProps) => {;
  // Calculate next milestone;
  const currentLevel = Math.floor(reputation / 100),;
  const nextMilestone = (currentLevel + 1) * 100,;
  const progress = ((reputation % 100) / 100) * 100,;
  // Styling based on size;
  const sizeClasses = {;
    sm: {;,
  container: "text-xs";,;""
      icon: "w-3 h-3";,;""
      progress:"h-1";"
    },;
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <div className="space-y-1">;
=======
    md: {;,"
  container: "text-sm";,;""
      icon: "w-4 h-4";,;""
      progress:"h-2" ;"
    lg: {;,"
  container: "text-base";,;""
      icon: "w-5 h-5";,;""
      progress:"h-3";"
  return (;"
    <div className="space-y-1">;"
</div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <div className={`flex items-center gap-1 ${sizeClasses[size].container}`}>;
</div>`;
        <Trophy className={`text-amber-500 ${sizeClasses[size].icon}`} />;
"
        <span className="font-semibold">{reputation}</span>;""
        <span className="text-muted-foreground">rep</span>;"
      </div>;
      <Progress value={progress} className={sizeClasses[size].progress} />;
      <div className="text-xs text-muted-foreground">;
<<<<<<< HEAD
<<<<<<< HEAD

=======
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
  </div> </div>) 
};
export default ReputationDisplay;
'
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      <div className="text-xs text-muted-foreground">;"
    </div>;)
  </div> </div>) ;"`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

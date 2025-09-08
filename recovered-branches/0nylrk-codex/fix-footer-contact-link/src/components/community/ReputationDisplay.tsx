<<<<<<< HEAD


=======


import { Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",


import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",


import { Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {Trophy} from "lucide-react";
import {Progress} from "@/components/ui/progress";
import { Trophy } from "lucide-react",
import { Progress } from "@/components/ui/progress",
<<<<<<< HEAD






interface ReputationDisplayProps {

  reputation: number

  size?: 'sm' | 'md' | 'lg'
}


=======
interface ReputationDisplayProps {

  reputation: number
  size?: 'sm' | 'md' | 'lg'
}
export const ReputationDisplay = ({
  reputation;
  size = 'md'
}: ReputationDisplayProps) => {
  // Calculate next milestone
  const currentLevel = Math.floor(reputation / 100);
  const nextMilestone = (currentLevel + 1) * 100;
  const progress = ((reputation % 100) / 100) * 100;

}: ReputationDisplayProps) => {
  // Calculate next milestone
  const currentLevel = Math.floor(reputation / 100),
  const nextMilestone = (currentLevel + 1) * 100,
  const progress = ((reputation % 100) / 100) * 100,




  

>>>>>>> origin/cursor/delete-old-data-records-6bba
  // Styling based on size
  const sizeClasses = {
    sm: {
      container: "text-xs"
      icon: "w-3 h-3"

      progress: "h-1"


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    },
    md: {"
      container: "text-sm","
      icon: "w-4 h-4","

      progress: "h-2" 
    },
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    lg: {
      container: "text-base"
      icon: "w-5 h-5"
      progress: "h-3"
    }

<<<<<<< HEAD


  },



=======
import {Progress} from "@/components/ui/progress";import {Trophy} from "lucide-react";"
  },

  }
  },
  
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (

    <div className="space-y-1">
      <div className={`flex items-center gap-1 ${sizeClasses[size].container}`}>`
        <Trophy className={`text-amber-500 ${sizeClasses[size].icon}`} />"
        <span className="font-semibold">{reputation}</span>"
        <span className="text-muted-foreground">rep</span>
      </div>
      <Progress value={progress} className={sizeClasses[size].progress} />"
      <div className="text-xs text-muted-foreground">
        Level {currentLevel} • {Math.round(nextMilestone - reputation)} to level up;

      </div>
    </div>
  )
<<<<<<< HEAD


import {Progress} from "@/components/ui/progress";


=======
}
export default ReputationDisplay;

},

export default ReputationDisplay,
import { Trophy } from "lucide-react",;
import { Progress } from "@/components/ui/progress",;

>>>>>>> origin/cursor/delete-old-data-records-6bba
interface ReputationDisplayProps {;
  reputation: number,;'
  size?: 'sm' | 'md' | 'lg';
}
<<<<<<< HEAD



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
    </div>;
size = 'md''
}: ReputationDisplayProps) => {
  //Calculate next milestone const currentLevel = Math.floor (reputation / 100);
}
const progress = ( (reputation % 100) /100) * 100;
"sm": {
  </div> </div>)
};
export default ReputationDisplay;
  )

  );
>>>>>>> origin/cursor/delete-old-data-records-6bba
};

},

export default ReputationDisplay;

'
import { Trophy } from './lucide-react';'
import { Progress } from '@/components / ui / progress';
interface ReputationDisplayProps {}
  reputation: number,'
  size?: 'sm' | 'md' | 'lg';

      </div>;

      </div>;

    </div>;

size = 'md' 
}: ReputationDisplayProps) => {}
  //Calculate next milestone const currentLevel = Math.floor (reputation / 100);
const nextMilestone = (currentLevel + 1) * 100;
const progress = ( (reputation % 100) /100) * 100;
sm: {}
  </div> </div>) 
};
export default ReputationDisplay;
<<<<<<< HEAD

;




=======

  );
};

},


export default ReputationDisplay;
>>>>>>> origin/cursor/delete-old-data-records-6bba

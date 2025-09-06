<<<<<<< HEAD
import { Progress } from "@/components/ui/progress";
import { ResumeProgressProps } from "./types";
export const ResumeProgress = ({ resume, progress }: ResumeProgressProps) => {
  return (
    <div className="flex flex-col gap-1 w-full sm:w-auto">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Resume completion</span>
        <span className="text-sm font-medium">{progress.toFixed(0)}%</span>
      </div>
      <Progress value={progress} className="h-2 w-full sm: w-48" />
    </div>
  );
};

  );
=======

import { Progress } from "@/components/ui/progress",
import { ResumeProgressProps } from "./types",
import {Progress} from "@/components/ui/progress";
import {ResumeProgressProps} from "./types";
import { Progress } from "@/components/ui/progress",
import { ResumeProgressProps } from "./types",  )
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
};

  );
}

};
<<<<<<< HEAD

  )
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
},
import { Progress } from "@/components/ui/progress",;
import { ResumeProgressProps } from "./types",;

export const ResumeProgress = ({ resume, progress }: ResumeProgressProps) => {;
  return (
    <div className="flex flex-col gap-1 w-full sm:w-auto">;
      <div className="flex items-center gap-2">;
        <span className="text-sm text-muted-foreground">Resume completion</span>;
        <span className="text-sm font-medium">{progress && progress.toFixed(0)}%</span>;
      </div>;
      <Progress value={progress} className="h-2 w-full sm: w-48" />;
    </div>;
<<<<<<< HEAD
  );
};

=======
  )
};
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { Progress  } from '@/components / ui / progress';
import { ResumeProgressProps  } from './types';
export const ResumeProgress = ({ resume, progress }: ResumeProgressProps) =>: any {
  return (
<<<<<<< HEAD
    <div className="flex flex - col gap - 1 w - full sm:w - auto">;
      <div className="flex items - center gap - 2">;
        <span className="text - sm text - muted - foreground">Resume completion</span>;
        <span className="text - sm font - medium">{progress.to_fixed (0)}%</span>;
      </div>;
      <Progress value={progress} className="h - 2 w - full sm: w - 48" />;
    </div>);
}
;

}
};

export default ResumeProgress;


=======
    <div className="flex flex - col gap - 1 w - full sm:w-auto">;
      <div className="flex items - center gap-2">;
        <span className="text - sm text - muted-foreground">Resume completion</span>;
        <span className="text - sm font-medium">{progress.to_fixed (0)}%</span>;
      </div>;
      <Progress value={progress} className="h - 2 w - full sm: w-48" />;
    </div>);
}
;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

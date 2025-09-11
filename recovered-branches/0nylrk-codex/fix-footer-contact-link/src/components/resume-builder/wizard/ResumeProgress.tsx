
import { Progress } from "@/components/ui/progress",
import { ResumeProgressProps } from "./types",

import { Progress } from "@/components/ui/progress";
import { ResumeProgressProps } from "./types";

import { Progress } from "@/components/ui/progress",
import { ResumeProgressProps } from "./types",
import {Progress} from "@/components/ui/progress";
import {ResumeProgressProps} from "./types";
import { Progress } from "@/components/ui/progress",
import { ResumeProgressProps } from "./types",

import { Progress } from "@/components/ui/progress";
import { ResumeProgressProps } from "./types";

=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


import { Progress } from "@/components/ui/progress",
import { ResumeProgressProps } from "./types",

=======
import {Progress} from "@/components/ui/progress";
import {ResumeProgressProps} from "./types";
=======
import { Progress } from "@/components/ui/progress",
import { ResumeProgressProps } from "./types",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
}
=======
import {Progress} from "@/components/ui/progress";
import {ResumeProgressProps} from "./types";
=======
};
=======
import {Progress} from "@/components/ui/progress";
import {ResumeProgressProps} from "./types";
=======

};

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  )
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
  );
};
export default ResumeProgress;


import { Progress } from "@/components/ui/progress",;
import { ResumeProgressProps } from "./types",;
;
export const ResumeProgress = ({ resume, progress } ResumeProgressProps) => {;
  return (;
    <div className="flex flex-col gap-1 w-full sm:w-auto">;
      <div className="flex items-center gap-2">;
        <span className="text-sm text-muted-foreground">Resume completion</span>;
        <span className="text-sm font-medium">{progress.toFixed(0)}%</span>;
      </div>;
      <Progress value={progress} className="h-2 w-full sm:w-48" />;
    </div>;
  );
},; export const ResumeProgress = ({
  resume, progress 
}: ResumeProgressProps) => {
  return (<div className="flex flex-col gap-1 w-full sm:w-auto" > <div className="flex items-center gap-2" > <span className="text-sm text-muted-foreground" >Resume completion</span> <span className="text-sm font-medium" > {
  progress.toFixed (0) 
}%</span> </div> 
};
);

}
};

export default ResumeProgress;
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

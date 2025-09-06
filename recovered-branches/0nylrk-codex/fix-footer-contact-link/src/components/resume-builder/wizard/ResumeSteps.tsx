<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StepProps } from "./types";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { StepProps } from "./types",
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {StepProps} from "./types";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { StepProps } from "./types",
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { StepProps } from "./types",

=======
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {StepProps} from "./types";
=======
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { StepProps } from "./types",
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface ResumeStepsProps {
  steps: StepProps[];
  activeTab: string;
  onChange: (value: string) => void
=======
import { Tabs, TabsList, TabsTrigger  } from '@/components / ui / tabs';
import { StepProps  } from './types';
interface ResumeStepsProps {
  steps: StepProps[];
  active_tab: string;
  on_change: (value: string) => void;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export const ResumeSteps = ({

import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {StepProps} from "./types";
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
=======
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { StepProps } from "./types";
interface ResumeStepsProps {}
  steps: StepProps[];
  activeTab: string;
  onChange: (value: string) => void;
}

export const ResumeSteps = ({}
  steps,
  activeTab,
  onChange,
}: ResumeStepsProps) => {}
  return ("
    <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
      {steps.map((step) => (
        <TabsTrigger key={step.id} value={step.id}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          {step.label}
        </TabsTrigger>
      ))}
    </TabsList>
<<<<<<< HEAD
<<<<<<< HEAD
  );
}

=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",;
=======



";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { StepProps } from "./types",;

interface ResumeStepsProps {;
  steps: StepProps[],;
  activeTab: string,;
  onChange: (value: string) => void;
}

export const ResumeSteps = ({ steps, activeTab, onChange }: ResumeStepsProps) => {;
<<<<<<< HEAD
  return ("
=======
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">;
      {steps && steps.map((step) => (;
        <TabsTrigger key={step && step.id} value={step && step.id}>;
          {step && step.label}
        </TabsTrigger>;
      ))}
    </TabsList>
  );
<<<<<<< HEAD
=======
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};

<<<<<<< HEAD
=======
};

    </TabsList>;
  );
};

  );
};

  steps,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  active_tab,
  on_change,
}: ResumeStepsProps) =>: any {
  return (
<<<<<<< HEAD
    <TabsList className="grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 mb-8">;
=======


    </TabsList>;



  );
};



  );
};


  steps,
  active_tab,
  on_change,
}: ResumeStepsProps) =>: any {}
  return ("
    <TabsList className="grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 mb - 8">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    <TabsList className="grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 mb - 8">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      {steps.map ((step) => (
        <TabsTrigger key={step.id} value={step.id}>;
          {step.label}
        </TabsTrigger>))}
    </TabsList>);
}
;

"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { StepProps } from "./types",;
;
interface ResumeStepsProps {;
  steps:StepProps[],;
  activeTab:string,;
  onChange:(value:string) => void;
}
;
export const ResumeSteps = ({ steps, activeTab, onChange } ResumeStepsProps) => {;
  return (;"
    <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">;
      {steps.map((step) => (;
        <TabsTrigger key={step.id} value={step.id}>;
          {step.label}
        </TabsTrigger>;
      ))}
    </TabsList>;
{step.label}
        </TabsTrigger>
      ))}
    </TabsList>

  );
}

  );
};

  );
};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

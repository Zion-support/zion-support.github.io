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

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { StepProps } from "./types",
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
          {step.label}
        </TabsTrigger>
      ))}
    </TabsList>
);
}
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
return ("
    <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">;
      {steps && steps.map((step) => (;
        <TabsTrigger key={step && step.id} value={step && step.id}>;
          {step && step.label}
        </TabsTrigger>;
      ))}
    </TabsList>
  );

=======
  )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};

  active_tab,
  on_change,
}: ResumeStepsProps) =>: any {
  return (
<TabsList className="grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 mb-8">;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeSteps.tsx


<<<<<<< HEAD
<<<<<<< HEAD
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {StepProps} from "./types";
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { StepProps } from "./types",

<<<<<<< HEAD
=======
=======
=======
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StepProps } from "./types";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { StepProps } from "./types",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {StepProps} from "./types";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { StepProps } from "./types",
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StepProps } from "./types";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface ResumeStepsProps {
  steps: StepProps[];
  activeTab: string;
  onChange: (value: string) => void
<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeSteps.tsx
import { Tabs, TabsList, TabsTrigger  } from '@/components / ui / tabs';
import { StepProps  } from './types';
interface ResumeStepsProps {
  steps: StepProps[];
  active_tab: string;
  on_change: (value: string) => void;
}
export const ResumeSteps = ({
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeSteps.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeSteps.tsx
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {StepProps} from "./types";
=======
=======
}

export const ResumeSteps = ({
  steps
  activeTab
  onChange

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StepProps } from "./types";
interface ResumeStepsProps {
  steps: StepProps[];
  activeTab: string;
  onChange: (value: string) => void;
}

export const ResumeSteps = ({
  steps,
  activeTab,
  onChange,

}: ResumeStepsProps) => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
      {steps.map((step) => (
        <TabsTrigger key={step.id} value={step.id}>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          {step.label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { StepProps } from "./types",;

interface ResumeStepsProps {;
  steps: StepProps[],;
  activeTab: string,;
  onChange: (value: string) => void;
}
export const ResumeSteps = ({ steps, activeTab, onChange }: ResumeStepsProps) => {;
  return (
    <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">;
      {steps && steps.map((step) => (;
        <TabsTrigger key={step && step.id} value={step && step.id}>;
          {step && step.label}
        </TabsTrigger>;
      ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeSteps.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeSteps.tsx
    </TabsList>;
<<<<<<< HEAD

  );
};
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeSteps.tsx

=======
  );
};

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeSteps.tsx
  steps,
  active_tab,
  on_change,
}: ResumeStepsProps) =>: any {
  return (
    <TabsList className="grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 mb - 8">;
      {steps.map ((step) => (
        <TabsTrigger key={step.id} value={step.id}>;
          {step.label}
        </TabsTrigger>))}
    </TabsList>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeSteps.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { StepProps } from "./types",;
;
interface ResumeStepsProps {;
  steps:StepProps[],;
  activeTab:string,;
  onChange:(value:string) => void;
}
;
export const ResumeSteps = ({ steps, activeTab, onChange } ResumeStepsProps) => {;
  return (;
    <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">;
      {steps.map((step) => (;
        <TabsTrigger key={step.id} value={step.id}>;
          {step.label}
        </TabsTrigger>;
      ))}
    </TabsList>;
<<<<<<< HEAD
  ),;
},; interface ResumeStepsProps {
  steps: StepProps[];
activeTab: string;
onChange: (value: string) => void 
}export const ResumeSteps = ({
  steps, activeTab, onChange 
}: ResumeStepsProps) => {
  return (<TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8" > steps.map ( (step) => (<TabsTrigger key= {
  step.id 
}value= {
  step.id 
}> {
  step.label 
}</TabsTrigger>) ) 
}</TabsList>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/wizard/ResumeSteps.tsx
=======
{step.label}
        </TabsTrigger>
      ))}
    </TabsList>

  );
}

  );
};

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  );
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

<<<<<<< HEAD
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { StepProps } from "./types",

=======
<<<<<<< HEAD
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StepProps } from "./types";
interface ResumeStepsProps {
  steps: StepProps[],
  activeTab: string,
  onChange: (value: string) => void
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

=======
<<<<<<< HEAD
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { StepProps } from "./types",

=======

<<<<<<< HEAD
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { StepProps } from "./types",

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StepProps } from "./types";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { StepProps } from "./types",
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {StepProps} from "./types";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { StepProps } from "./types",

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StepProps } from "./types";

=======


import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { StepProps } from "./types",

=======
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {StepProps} from "./types";
=======
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { StepProps } from "./types",

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ResumeStepsProps {
  steps: StepProps[];
  activeTab: string;
  onChange: (value: string) => void
<<<<<<< HEAD
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {StepProps} from "./types";
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

>>>>>>> merged-prs-20250907-203621
export const ResumeSteps = ({
<<<<<<< HEAD

import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {StepProps} from "./types";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { StepProps } from "./types";
interface ResumeStepsProps {}
  steps: StepProps[];
  activeTab: string;
  onChange: (value: string) => void;
}

=======
  steps,
  activeTab,
  onChange,
<<<<<<< HEAD
}: ResumeStepsProps) => {
  return (
    <TabsList className = $2;
=======

}: ResumeStepsProps) => {
=======
=======
import { Tabs, TabsList, TabsTrigger  } from '@/components / ui / tabs';
import { StepProps  } from './types';
interface ResumeStepsProps {
  steps: StepProps[];
  active_tab: string;
  on_change: (value: string) => void;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
export const ResumeSteps = ({

import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {StepProps} from "./types";
<<<<<<< HEAD

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { StepProps } from "./types";
interface ResumeStepsProps {}
  steps: StepProps[];
  activeTab: string;
  onChange: (value: string) => void;
}

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
      {steps.map((step) => (
        <TabsTrigger key={step.id} value={step.id}>

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          {step.label}
        </TabsTrigger>
      ))}
    </TabsList>
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
  );
}

=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",;

import { StepProps } from "./types",;

interface ResumeStepsProps {;
  steps: StepProps[],;
  activeTab: string,;
  onChange: (value: string) => void;
}
<<<<<<< HEAD

export const ResumeSteps = ({ steps, activeTab, onChange }: ResumeStepsProps) => {;

=======
export const ResumeSteps = ({ steps, activeTab, onChange }: ResumeStepsProps) => {;
<<<<<<< HEAD

=======
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">;
      {steps && steps.map((step) => (;
        <TabsTrigger key={step && step.id} value={step && step.id}>;
          {step && step.label}
        </TabsTrigger>;
      ))}
<<<<<<< HEAD
    </TabsList>
=======
<<<<<<< HEAD
    </TabsList>
=======
    </TabsList>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  );

};

<<<<<<< HEAD
=======
  steps,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  active_tab,
  on_change,
}: ResumeStepsProps) =>: any {
  return (

      {steps.map ((step) => (
        <TabsTrigger key={step.id} value={step.id}>;
          {step.label}
        </TabsTrigger>))}
    </TabsList>);
}
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======

"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { StepProps } from "./types",;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { StepProps } from "./types",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
interface ResumeStepsProps {;
  steps:StepProps[],;
  activeTab:string,;
  onChange:(value:string) => void;
}
;
export const ResumeSteps = ({ steps, activeTab, onChange } ResumeStepsProps) => {;
<<<<<<< HEAD
  return (;"
=======
<<<<<<< HEAD
  return (;"
=======
  return (;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
});
};

  );
};
=======
<<<<<<< HEAD
});
};

  );
};
=======
}

  );
};

  );
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

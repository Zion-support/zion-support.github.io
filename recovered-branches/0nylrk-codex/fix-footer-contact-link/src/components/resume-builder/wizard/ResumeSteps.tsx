
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
interface ResumeStepsProps {
  steps: StepProps[];
  activeTab: string;
  onChange: (value: string) => void
import { Tabs, TabsList, TabsTrigger  } from '@/components / ui / tabs';
import { StepProps  } from './types';
interface ResumeStepsProps {
  steps: StepProps[];
  active_tab: string;
  on_change: (value: string) => void;
}
export const ResumeSteps = ({

import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {StepProps} from "./types";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";"
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
          {step.label}
        </TabsTrigger>
      ))}
    </TabsList>
);
}
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",;

";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",;
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

  )
};

  active_tab,
  on_change,
}: ResumeStepsProps) =>: any {
  return (
<TabsList className="grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 mb-8">;
    <TabsList className="grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 mb - 8">;
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


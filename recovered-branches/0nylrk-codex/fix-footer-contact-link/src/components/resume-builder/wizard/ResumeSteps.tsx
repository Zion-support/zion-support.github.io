<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


interface ResumeStepsProps {
  steps: StepProps[];
  activeTab: string;
  onChange: (value: string) => void
<<<<<<< HEAD


}: ResumeStepsProps) => {
=======
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

export const ResumeSteps = ({

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { StepProps } from "./types",
>>>>>>> origin/cursor/delete-old-data-records-6bba

}
export const ResumeSteps = ({

import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {StepProps} from "./types";


import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",;

import { StepProps } from "./types",;

interface ResumeStepsProps {;
  steps: StepProps[],;
  activeTab: string,;
  onChange: (value: string) => void;
}
<<<<<<< HEAD
export const ResumeSteps = ({ steps, activeTab, onChange }: ResumeStepsProps) => {;

  return (
=======

export const ResumeSteps = ({ steps, activeTab, onChange }: ResumeStepsProps) => {;
>>>>>>> origin/cursor/delete-old-data-records-6bba

    <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">;
      {steps && steps.map((step) => (;
        <TabsTrigger key={step && step.id} value={step && step.id}>;
          {step && step.label}
        </TabsTrigger>;
      ))}

<<<<<<< HEAD
    </TabsList>;

=======
    </TabsList>
>>>>>>> origin/cursor/delete-old-data-records-6bba
  );

};


<<<<<<< HEAD
  steps,

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { StepProps } from "./types",;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
interface ResumeStepsProps {;
  steps:StepProps[],;
  activeTab:string,;
  onChange:(value:string) => void;
}
;
export const ResumeSteps = ({ steps, activeTab, onChange } ResumeStepsProps) => {;

<<<<<<< HEAD
  return (;

=======
  return (;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
}

  );
};

  );
};



=======
};
>>>>>>> origin/cursor/delete-old-data-records-6bba

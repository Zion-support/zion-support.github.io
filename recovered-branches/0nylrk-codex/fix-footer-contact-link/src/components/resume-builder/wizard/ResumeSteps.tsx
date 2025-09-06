


import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { StepProps } from "./types",

=======
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {StepProps} from "./types";
=======
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { StepProps } from "./types",

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
  return (
    <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
      {steps.map((step) => (
        <TabsTrigger key={step.id} value={step.id}>


=======
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { StepProps } from "./types",;

interface ResumeStepsProps {;
  steps: StepProps[],;
  activeTab: string,;
  onChange: (value: string) => void;
}

export const ResumeSteps = ({ steps, activeTab, onChange }: ResumeStepsProps) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">;
      {steps && steps.map((step) => (;
        <TabsTrigger key={step && step.id} value={step && step.id}>;
          {step && step.label}
        </TabsTrigger>;
      ))}

    </TabsList>;
  );
};

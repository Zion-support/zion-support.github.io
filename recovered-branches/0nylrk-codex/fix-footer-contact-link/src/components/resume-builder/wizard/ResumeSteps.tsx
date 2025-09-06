
<<<<<<< HEAD
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StepProps } from "./types";
interface ResumeStepsProps {
  steps: StepProps[];
  activeTab: string;
  onChange: (value: string) => void
}

export const ResumeSteps = ({
  steps
  activeTab
  onChange
}: ResumeStepsProps) => {
=======
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {StepProps} from "./types";
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
<<<<<<< HEAD
    </TabsList>
  );
}

=======
    </TabsList>;
  );
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a


<<<<<<< HEAD
<<<<<<< HEAD
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { StepProps } from "./types",
=======
import { Tabs, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { StepProps } from &quot;./types&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ResumeStepsProps {
  steps: StepProps[],
  activeTab: string,
  onChange: (value: string) => void
}

export const ResumeSteps = ({ steps, activeTab, onChange }: ResumeStepsProps) => {
  return (
    <TabsList className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8&quot;>
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
;
export const ResumeSteps = ({ steps, activeTab, onChange }: ResumeStepsProps) => {;
  return (;
    <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">;
      {steps.map((step) => (;
        <TabsTrigger key={step.id} value={step.id}>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          {step.label}
        </TabsTrigger>;
      ))}
    </TabsList>;
  );
};

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StepProps } from "./types";
interface ResumeStepsProps {
  steps: StepProps[];
  activeTab: string;
<<<<<<< HEAD
  onChange: (value: string) => void
}
<<<<<<< HEAD
=======
  onChange: (value: string) => void;
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

export const ResumeSteps = null;
=======
export const ResumeSteps = ({
  steps
  activeTab
  onChange
}: ResumeStepsProps) => {
  return (
    <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
      {steps.map((step) => (
        <TabsTrigger key={step.id} value={step.id}>
          {step.label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5


import { Tabs, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { StepProps } from &quot;./types&quot;;

interface ResumeStepsProps {
  steps: StepProps[];
  activeTab: string;
  onChange: (value: string) => void;
}

export const ResumeSteps = ({ steps, activeTab, onChange }: ResumeStepsProps) => {
  return (
    <TabsList className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8&quot;>
      {steps.map((step) => (
        <TabsTrigger key={step.id} value={step.id}>
          {step.label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

import { Tabs, TabsList, TabsTrigger  } from '@/components / ui / tabs';
import { StepProps  } from './types';
interface ResumeStepsProps {
  steps: StepProps[];
  active_tab: string;
  on_change: (value: string) => void;
}
export const ResumeSteps = ({
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
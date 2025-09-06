<<<<<<< HEAD
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StepProps } from './types';

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
  return (
    <TabsList className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8'>
      {steps.map(step => (
        <TabsTrigger key={step.id} value={step.id}>
          {step.label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
=======
 interface ResumeStepsProps {
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
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
};

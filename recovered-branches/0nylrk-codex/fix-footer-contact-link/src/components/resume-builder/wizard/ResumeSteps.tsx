

interface ResumeStepsProps {_steps: StepProps[];
  activeTab: string;
  onChange: (_value: string) => void;}

export const _ResumeSteps = (_{_steps, _activeTab, _onChange}: ResumeStepsProps) => {_return (_<TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
      {steps.map((step) => (
        <TabsTrigger key={step.id} value={_step.id}>
          {_step.label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

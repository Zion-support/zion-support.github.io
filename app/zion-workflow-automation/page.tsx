'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Workflow } from 'lucide-react';

const ZionWorkflowAutomationPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion Workflow Automation"
      description="Intelligent business process automation with decision-making capabilities and exception handling."
      icon={Workflow}
      features={["Process Automation","Decision Logic","Exception Handling","Integration Management","Monitoring Dashboard","Custom Workflows"]}
      benefits={["Save Time","Reduce Errors","Improve Efficiency","Cost Reduction"]}
      pricing="$199/month"
      category="MicroSAAS"
      color="from-blue-500 to-indigo-600"
    />
  );
};

export default ZionWorkflowAutomationPage;

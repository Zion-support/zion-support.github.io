'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Workflow } from 'lucide-react';

const AiWorkflowAutomationPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Workflow Automation"
      description="Intelligent automation of business processes with decision-making capabilities and exception handling."
      icon={Workflow}
      features={["Process Automation","Decision Making","Exception Handling","Integration Management","Performance Monitoring","Custom Workflows"]}
      benefits={["90% Time Savings","Reduced Errors","Improved Efficiency","Cost Reduction"]}
      pricing="$299/month"
      category="AI"
      color="from-violet-500 to-purple-600"
    />
  );
};

export default AiWorkflowAutomationPage;

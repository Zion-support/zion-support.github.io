'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Workflow } from 'lucide-react';

const WorkflowAutomationPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Workflow Automation"
      description="Professional workflow automation services to help your business grow and succeed."
      icon={Workflow}
      features={["Expert Consultation","Custom Solutions","24/7 Support","Scalable Architecture","Security Implementation","Performance Optimization"]}
      benefits={["Better Performance","Cost Optimization","Expert Support","Scalable Solutions"]}
      pricing="Contact Us"
      category="IT"
      color="from-violet-500 to-purple-600"
    />
  );
};

export default WorkflowAutomationPage;

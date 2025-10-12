'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { CheckSquare } from 'lucide-react';

const ComplianceAutomationPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Compliance Automation"
      description="Professional compliance automation services to help your business grow and succeed."
      icon={CheckSquare}
      features={["Expert Consultation","Custom Solutions","24/7 Support","Scalable Architecture","Security Implementation","Performance Optimization"]}
      benefits={["Better Performance","Cost Optimization","Expert Support","Scalable Solutions"]}
      pricing="Contact Us"
      category="IT"
      color="from-slate-500 to-gray-600"
    />
  );
};

export default ComplianceAutomationPage;

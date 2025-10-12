'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { FileText } from 'lucide-react';

const ZionAiContractAnalyzerPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion AI Contract Analyzer"
      description="AI-powered contract analysis and management platform with risk assessment and compliance checking."
      icon={FileText}
      features={["Contract Analysis","Risk Assessment","Compliance Checking","Clause Extraction","Renewal Tracking","Integration APIs"]}
      benefits={["Better Risk Management","Compliance Assurance","Time Saving","Automated Analysis"]}
      pricing="$299/month"
      category="MicroSAAS"
      color="from-red-500 to-orange-600"
    />
  );
};

export default ZionAiContractAnalyzerPage;

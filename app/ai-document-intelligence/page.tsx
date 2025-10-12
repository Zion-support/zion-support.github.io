'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { FileText } from 'lucide-react';

const AiDocumentIntelligencePage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Document Intelligence"
      description="Smart document processing with AI-powered extraction, analysis, and understanding."
      icon={FileText}
      features={["Smart Extraction","Document Understanding","Form Processing","Contract Analysis","Compliance Checking","Automated Workflows"]}
      benefits={["Faster Processing","Better Accuracy","Reduced Manual Work","Improved Compliance"]}
      pricing="$499/month"
      category="AI"
      color="from-teal-500 to-cyan-600"
    />
  );
};

export default AiDocumentIntelligencePage;

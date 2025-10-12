'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { FileText } from 'lucide-react';

const ZionAiDocumentAiPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion AI Document AI"
      description="Advanced document processing platform with AI-powered extraction and analysis."
      icon={FileText}
      features={["Document OCR","Data Extraction","Form Processing","Content Analysis","Automated Workflows","Integration APIs"]}
      benefits={["Faster Processing","Better Accuracy","Automated Workflows","Cost Reduction"]}
      pricing="$179/month"
      category="MicroSAAS"
      color="from-teal-500 to-cyan-600"
    />
  );
};

export default ZionAiDocumentAiPage;

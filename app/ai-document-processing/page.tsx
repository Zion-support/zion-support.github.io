'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { FileText } from 'lucide-react';

const AiDocumentProcessingPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Document Processing"
      description="Intelligent document analysis, extraction, and processing using advanced AI and machine learning."
      icon={FileText}
      features={["Document OCR","Data Extraction","Form Processing","Document Classification","Content Analysis","Automated Workflows"]}
      benefits={["99% Accuracy","Faster Processing","Reduced Manual Work","Better Organization"]}
      pricing="$149/month"
      category="AI"
      color="from-slate-500 to-gray-600"
    />
  );
};

export default AiDocumentProcessingPage;

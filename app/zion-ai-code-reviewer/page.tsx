'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Code } from 'lucide-react';

const ZionAiCodeReviewerPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion AI Code Reviewer"
      description="Intelligent code review platform with automated analysis and improvement suggestions."
      icon={Code}
      features={["Code Analysis","Bug Detection","Security Scanning","Performance Review","Best Practices","Integration APIs"]}
      benefits={["Better Code Quality","Faster Reviews","Security Improvement","Learning Tool"]}
      pricing="$199/month"
      category="MicroSAAS"
      color="from-indigo-500 to-purple-600"
    />
  );
};

export default ZionAiCodeReviewerPage;

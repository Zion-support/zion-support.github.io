'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { CheckCircle } from 'lucide-react';

const AiAutomatedTestingPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Automated Testing"
      description="Intelligent automated testing solutions that improve software quality and reduce testing time."
      icon={CheckCircle}
      features={["Test Generation","Bug Detection","Performance Testing","UI Testing","API Testing","Regression Testing"]}
      benefits={["Faster Testing","Better Quality","Reduced Costs","Comprehensive Coverage"]}
      pricing="$599/month"
      category="AI"
      color="from-green-500 to-teal-600"
    />
  );
};

export default AiAutomatedTestingPage;

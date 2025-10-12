'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Mail } from 'lucide-react';

const ZionAiEmailAssistantPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion AI Email Assistant"
      description="Intelligent email management with AI-powered responses and organization."
      icon={Mail}
      features={["Smart Responses","Email Organization","Priority Scoring","Scheduling Assistant","Template Suggestions","Analytics Dashboard"]}
      benefits={["Save Time","Better Organization","Improved Responses","Efficient Management"]}
      pricing="$89/month"
      category="MicroSAAS"
      color="from-blue-500 to-cyan-600"
    />
  );
};

export default ZionAiEmailAssistantPage;

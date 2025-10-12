'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Target } from 'lucide-react';

const ZionAiMarketingAutomationPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion AI Marketing Automation"
      description="Intelligent marketing automation platform with AI-powered campaigns and optimization."
      icon={Target}
      features={["Campaign Automation","Personalization","A/B Testing","Lead Scoring","Analytics Dashboard","Integration APIs"]}
      benefits={["Better Campaigns","Higher Conversion","Automated Workflows","Data-Driven Strategy"]}
      pricing="$199/month"
      category="MicroSAAS"
      color="from-purple-500 to-pink-600"
    />
  );
};

export default ZionAiMarketingAutomationPage;

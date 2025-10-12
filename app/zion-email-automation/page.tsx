'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Mail } from 'lucide-react';

const ZionEmailAutomationPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion Email Automation"
      description="Intelligent email marketing automation with AI optimization and personalization."
      icon={Mail}
      features={["Email Campaigns","Personalization","A/B Testing","Analytics Dashboard","List Management","Template Library"]}
      benefits={["Higher Open Rates","Better Engagement","Automated Campaigns","Data-Driven Insights"]}
      pricing="$89/month"
      category="MicroSAAS"
      color="from-pink-500 to-rose-600"
    />
  );
};

export default ZionEmailAutomationPage;

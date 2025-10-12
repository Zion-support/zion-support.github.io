'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Globe } from 'lucide-react';

const ZionSocialSchedulerPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion Social Scheduler"
      description="AI-powered social media management with intelligent scheduling and content optimization."
      icon={Globe}
      features={["Content Scheduling","AI Optimization","Multi-platform Support","Analytics Dashboard","Content Calendar","Engagement Tracking"]}
      benefits={["Better Engagement","Time Saving","Consistent Posting","Data-Driven Strategy"]}
      pricing="$79/month"
      category="MicroSAAS"
      color="from-cyan-500 to-blue-600"
    />
  );
};

export default ZionSocialSchedulerPage;

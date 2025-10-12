'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Shield } from 'lucide-react';

const ZionAiContentModerationPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion AI Content Moderation"
      description="Automated content moderation platform with AI-powered filtering and safety management."
      icon={Shield}
      features={["Content Filtering","Image Analysis","Text Analysis","Real-time Moderation","Custom Rules","Analytics Dashboard"]}
      benefits={["Safer Platforms","Reduced Manual Work","Consistent Moderation","Scalable Solutions"]}
      pricing="$179/month"
      category="MicroSAAS"
      color="from-red-500 to-orange-600"
    />
  );
};

export default ZionAiContentModerationPage;

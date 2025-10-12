'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Shield } from 'lucide-react';

const AiContentModerationPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Content Moderation"
      description="Automated content moderation using AI to filter inappropriate content and maintain platform safety."
      icon={Shield}
      features={["Image Moderation","Text Analysis","Video Content","Real-time Filtering","Custom Rules","Bulk Processing"]}
      benefits={["Safer Platforms","Reduced Manual Work","Consistent Moderation","Scalable Solutions"]}
      pricing="$399/month"
      category="AI"
      color="from-red-500 to-orange-600"
    />
  );
};

export default AiContentModerationPage;

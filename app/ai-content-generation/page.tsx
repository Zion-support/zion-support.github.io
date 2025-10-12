'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { FileText } from 'lucide-react';

const AiContentGenerationPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Content Generation"
      description="Automated content creation using advanced AI for blogs, social media, marketing materials, and more."
      icon={FileText}
      features={["Blog Writing","Social Media Posts","Email Campaigns","Product Descriptions","SEO Content","Multi-language Support"]}
      benefits={["Save 80% Time","Consistent Quality","SEO Optimized","Scalable Content"]}
      pricing="$199/month"
      category="AI"
      color="from-yellow-500 to-orange-600"
    />
  );
};

export default AiContentGenerationPage;

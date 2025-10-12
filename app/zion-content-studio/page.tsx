'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { FileText } from 'lucide-react';

const ZionContentStudioPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion Content Studio"
      description="AI-powered content creation platform for blogs, social media, and marketing materials."
      icon={FileText}
      features={["AI Writing","Content Templates","SEO Optimization","Multi-language Support","Brand Voice Training","Content Calendar"]}
      benefits={["Save Time","Consistent Quality","SEO Optimized","Scalable Content"]}
      pricing="$79/month"
      category="MicroSAAS"
      color="from-purple-500 to-pink-600"
    />
  );
};

export default ZionContentStudioPage;

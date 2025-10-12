'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { FileText } from 'lucide-react';

const AiContentGenerationProPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Content Generation Pro"
      description="Advanced AI content generation platform with enterprise features and custom training capabilities."
      icon={FileText}
      features={["Advanced AI Models","Custom Training","Multi-language Support","Brand Voice Training","Content Optimization","Plagiarism Detection"]}
      benefits={["Higher Quality Content","Brand Consistency","Scalable Production","Competitive Advantage"]}
      pricing="$999/month"
      category="AI"
      color="from-violet-500 to-purple-600"
    />
  );
};

export default AiContentGenerationProPage;

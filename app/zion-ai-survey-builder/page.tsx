'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { CheckSquare } from 'lucide-react';

const ZionAiSurveyBuilderPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion AI Survey Builder"
      description="Intelligent survey creation platform with AI-powered question suggestions and analytics."
      icon={CheckSquare}
      features={["Smart Questions","Response Analysis","Sentiment Analysis","Custom Templates","Integration APIs","Analytics Dashboard"]}
      benefits={["Better Surveys","Higher Response Rates","Automated Analysis","Data-Driven Insights"]}
      pricing="$79/month"
      category="MicroSAAS"
      color="from-purple-500 to-pink-600"
    />
  );
};

export default ZionAiSurveyBuilderPage;

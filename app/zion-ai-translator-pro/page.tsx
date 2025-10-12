'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Globe } from 'lucide-react';

const ZionAiTranslatorProPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion AI Translator Pro"
      description="Advanced AI translation platform with context-aware translations and multiple language support."
      icon={Globe}
      features={["Multi-language Support","Context Awareness","Real-time Translation","Document Translation","API Integration","Quality Scoring"]}
      benefits={["Accurate Translations","Multiple Languages","Real-time Processing","Easy Integration"]}
      pricing="$99/month"
      category="MicroSAAS"
      color="from-teal-500 to-cyan-600"
    />
  );
};

export default ZionAiTranslatorProPage;

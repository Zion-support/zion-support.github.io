'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Mic } from 'lucide-react';

const AiVoiceSolutionsPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Voice Solutions"
      description="Intelligent voice recognition and speech processing solutions for enhanced customer interactions."
      icon={Mic}
      features={["Speech Recognition","Voice Commands","Text-to-Speech","Voice Analytics","Multi-language Support","Voice Biometrics"]}
      benefits={["Better User Experience","Accessibility","Multilingual Support","Voice Analytics"]}
      pricing="$399/month"
      category="AI"
      color="from-orange-500 to-red-600"
    />
  );
};

export default AiVoiceSolutionsPage;

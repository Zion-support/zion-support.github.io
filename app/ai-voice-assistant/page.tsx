'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Mic } from 'lucide-react';

const AiVoiceAssistantPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Voice Assistant Platform"
      description="Enterprise-grade voice assistant platform for hands-free operations and improved productivity."
      icon={Mic}
      features={["Voice Commands","Natural Language Processing","Multi-device Support","Custom Skills","Integration APIs","Analytics Dashboard"]}
      benefits={["Hands-free Operation","Improved Productivity","Better Accessibility","Easy Integration"]}
      pricing="$699/month"
      category="AI"
      color="from-orange-500 to-red-600"
    />
  );
};

export default AiVoiceAssistantPage;

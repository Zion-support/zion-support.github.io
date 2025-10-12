'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Mic } from 'lucide-react';

const AiSpeechSynthesisPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Speech Synthesis"
      description="Natural-sounding text-to-speech conversion with multiple voices and languages."
      icon={Mic}
      features={["Natural Voices","Multiple Languages","Emotion Control","Custom Voices","Real-time Synthesis","API Integration"]}
      benefits={["Better Accessibility","Consistent Quality","Multilingual Support","Easy Integration"]}
      pricing="$199/month"
      category="AI"
      color="from-amber-500 to-yellow-600"
    />
  );
};

export default AiSpeechSynthesisPage;

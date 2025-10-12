import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { Mic } from 'lucide-react';

const AiVoiceAssistantPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Voice Assistant"
      description="Create intelligent voice assistants that understand speech, respond naturally, and integrate seamlessly with your applications."
      icon={Mic}
      color="from-green-500 to-blue-600"
      features={[
        'Speech Recognition',
        'Natural Language Understanding',
        'Voice Synthesis',
        'Multi-language Support',
        'Real-time Processing',
        'Custom Voice Training'
      ]}
      benefits={[
        'Hands-free Operation',
        'Accessibility Improvement',
        'Enhanced User Experience',
        'Voice Command Control',
        'Multi-modal Interaction',
        'Scalable Voice Solutions'
      ]}
    />
  );
};

export default AiVoiceAssistantPage;
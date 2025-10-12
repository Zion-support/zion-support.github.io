'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { MessageCircle } from 'lucide-react';

const AiConversationalAiPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Conversational AI Platform"
      description="Advanced conversational AI platform for creating intelligent chatbots and virtual assistants."
      icon={MessageCircle}
      features={["Natural Conversations","Multi-language Support","Context Awareness","Integration APIs","Analytics Dashboard","Custom Training"]}
      benefits={["Better User Experience","24/7 Availability","Scalable Solutions","Easy Integration"]}
      pricing="$799/month"
      category="AI"
      color="from-purple-500 to-pink-600"
    />
  );
};

export default AiConversationalAiPage;

'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { MessageSquare } from 'lucide-react';

const AiChatbotEnterprisePage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Enterprise Chatbot"
      description="Enterprise-grade chatbot solution with advanced natural language processing and integration capabilities."
      icon={MessageSquare}
      features={["Natural Language Processing","Multi-channel Support","Integration APIs","Analytics Dashboard","Custom Training","24/7 Availability"]}
      benefits={["24/7 Customer Support","Reduced Support Costs","Better Customer Experience","Scalable Solutions"]}
      pricing="$599/month"
      category="AI"
      color="from-blue-500 to-indigo-600"
    />
  );
};

export default AiChatbotEnterprisePage;

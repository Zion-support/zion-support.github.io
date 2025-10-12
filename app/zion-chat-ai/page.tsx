'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { MessageCircle } from 'lucide-react';

const ZionChatAiPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion Chat AI"
      description="Intelligent AI-powered customer support chatbot for 24/7 customer service."
      icon={MessageCircle}
      features={["Natural Language Processing","Multi-channel Support","Custom Training","Analytics Dashboard","Integration APIs","24/7 Availability"]}
      benefits={["24/7 Support","Reduced Costs","Better Experience","Easy Setup"]}
      pricing="$99/month"
      category="MicroSAAS"
      color="from-green-500 to-emerald-600"
    />
  );
};

export default ZionChatAiPage;

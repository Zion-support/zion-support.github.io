import React from 'react';
import GenericServicePage from '../../components/GenericServicePage';
import { MessageCircle } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Chatbot Builder"
      description="Build intelligent, conversational AI chatbots that understand context, learn from interactions, and provide exceptional customer experiences."
      icon={MessageCircle}
      color="from-blue-500 to-purple-600"
      features={[
        'Natural Language Processing',
        'Multi-language Support',
        'Context Awareness',
        'Integration APIs',
        'Analytics Dashboard',
        'Custom Training'
      ]}
      benefits={[
        '24/7 Customer Support',
        'Reduced Response Time',
        'Cost Efficiency',
        'Scalable Solutions',
        'Improved Customer Satisfaction',
        'Data Collection & Insights'
      ]}
    />
  );
};

export default AiChatbotBuilderPage;
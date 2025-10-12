'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { MessageSquare } from 'lucide-react';

const ZionAiCustomerServiceProPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion AI Customer Service Pro"
      description="Advanced AI customer service platform with intelligent routing and response automation."
      icon={MessageSquare}
      features={["Intelligent Routing","Response Automation","Sentiment Analysis","Multi-channel Support","Analytics Dashboard","Integration APIs"]}
      benefits={["Better Service","Faster Response","Higher Satisfaction","Cost Reduction"]}
      pricing="$299/month"
      category="MicroSAAS"
      color="from-blue-500 to-cyan-600"
    />
  );
};

export default ZionAiCustomerServiceProPage;

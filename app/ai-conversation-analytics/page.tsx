'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { MessageCircle } from 'lucide-react';

const AiConversationAnalyticsPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Conversation Analytics"
      description="Advanced analytics for customer conversations to improve service quality and business insights."
      icon={MessageCircle}
      features={["Conversation Analysis","Sentiment Tracking","Topic Extraction","Performance Metrics","Quality Scoring","Trend Analysis"]}
      benefits={["Better Customer Service","Performance Insights","Quality Improvement","Data-Driven Decisions"]}
      pricing="$349/month"
      category="AI"
      color="from-green-500 to-emerald-600"
    />
  );
};

export default AiConversationAnalyticsPage;

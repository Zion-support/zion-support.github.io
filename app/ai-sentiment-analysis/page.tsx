'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Heart } from 'lucide-react';

const AiSentimentAnalysisPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Sentiment Analysis"
      description="Advanced sentiment analysis for social media, reviews, and customer feedback."
      icon={Heart}
      features={["Social Media Monitoring","Review Analysis","Customer Feedback","Brand Monitoring","Competitor Analysis","Real-time Alerts"]}
      benefits={["Better Brand Understanding","Proactive Customer Service","Market Insights","Reputation Management"]}
      pricing="$299/month"
      category="AI"
      color="from-pink-500 to-rose-600"
    />
  );
};

export default AiSentimentAnalysisPage;

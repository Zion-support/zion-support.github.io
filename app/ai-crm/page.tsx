'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Users } from 'lucide-react';

const AiCrmPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI CRM Solutions"
      description="Revolutionary AI-powered customer relationship management that transforms how you engage with customers and drive sales growth."
      icon={Users}
      features={["Intelligent Lead Scoring","Automated Follow-ups","Predictive Analytics","Customer Insights","Sales Forecasting","Automated Workflows"]}
      benefits={["Increase Sales by 40%","Reduce Manual Work by 80%","Improve Customer Satisfaction","Real-time Analytics"]}
      pricing="$299/month"
      category="AI"
      color="from-purple-500 to-pink-600"
    />
  );
};

export default AiCrmPage;

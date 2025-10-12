'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Users } from 'lucide-react';

const ZionCustomerInsightsPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion Customer Insights"
      description="AI-powered customer analytics platform for better understanding and engagement."
      icon={Users}
      features={["Customer Segmentation","Behavior Analysis","Predictive Analytics","Engagement Scoring","Custom Dashboards","Integration APIs"]}
      benefits={["Better Understanding","Personalized Experience","Higher Engagement","Data-Driven Decisions"]}
      pricing="$179/month"
      category="MicroSAAS"
      color="from-pink-500 to-rose-600"
    />
  );
};

export default ZionCustomerInsightsPage;

'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { TrendingUp } from 'lucide-react';

const AiPredictiveAnalyticsPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Predictive Analytics"
      description="Advanced predictive analytics using machine learning to forecast trends and make data-driven decisions."
      icon={TrendingUp}
      features={["Trend Forecasting","Risk Assessment","Demand Prediction","Customer Behavior Analysis","Market Analysis","Scenario Planning"]}
      benefits={["Better Planning","Risk Mitigation","Competitive Advantage","Data-Driven Decisions"]}
      pricing="$599/month"
      category="AI"
      color="from-emerald-500 to-green-600"
    />
  );
};

export default AiPredictiveAnalyticsPage;

'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { BarChart } from 'lucide-react';

const AiPredictiveModelingPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Predictive Modeling"
      description="Advanced machine learning models for accurate predictions and forecasting across various business domains."
      icon={BarChart}
      features={["Machine Learning Models","Time Series Analysis","Regression Analysis","Classification Models","Model Validation","Automated Training"]}
      benefits={["Accurate Predictions","Better Planning","Risk Mitigation","Competitive Advantage"]}
      pricing="$799/month"
      category="AI"
      color="from-indigo-500 to-purple-600"
    />
  );
};

export default AiPredictiveModelingPage;

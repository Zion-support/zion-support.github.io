'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { TrendingUp } from 'lucide-react';

const AiFinancialForecastingPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Financial Forecasting"
      description="Advanced financial forecasting using AI for better investment decisions and risk management."
      icon={TrendingUp}
      features={["Market Analysis","Risk Assessment","Portfolio Optimization","Economic Forecasting","Investment Recommendations","Scenario Planning"]}
      benefits={["Better Investment Decisions","Risk Mitigation","Higher Returns","Data-Driven Strategies"]}
      pricing="$1,799/month"
      category="AI"
      color="from-green-500 to-emerald-600"
    />
  );
};

export default AiFinancialForecastingPage;

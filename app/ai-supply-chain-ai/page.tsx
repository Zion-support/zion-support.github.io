'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Box } from 'lucide-react';

const AiSupplyChainAiPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Supply Chain Intelligence"
      description="Intelligent supply chain optimization using AI for demand forecasting and logistics management."
      icon={Box}
      features={["Demand Forecasting","Inventory Optimization","Route Planning","Risk Assessment","Supplier Analysis","Cost Optimization"]}
      benefits={["Reduced Costs","Better Planning","Risk Mitigation","Improved Efficiency"]}
      pricing="$1,299/month"
      category="AI"
      color="from-orange-500 to-red-600"
    />
  );
};

export default AiSupplyChainAiPage;

'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Box } from 'lucide-react';

const ZionAiSupplyChainOptimizerPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion AI Supply Chain Optimizer"
      description="AI-powered supply chain optimization platform for better logistics and cost management."
      icon={Box}
      features={["Demand Forecasting","Inventory Optimization","Route Planning","Supplier Analysis","Cost Optimization","Risk Assessment"]}
      benefits={["Reduced Costs","Better Planning","Risk Mitigation","Improved Efficiency"]}
      pricing="$499/month"
      category="MicroSAAS"
      color="from-indigo-500 to-purple-600"
    />
  );
};

export default ZionAiSupplyChainOptimizerPage;

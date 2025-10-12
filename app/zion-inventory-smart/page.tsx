'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Package } from 'lucide-react';

const ZionInventorySmartPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion Inventory Smart"
      description="AI-powered inventory management with demand forecasting and optimization."
      icon={Package}
      features={["Inventory Tracking","Demand Forecasting","Reorder Alerts","Analytics Dashboard","Multi-location Support","Integration APIs"]}
      benefits={["Reduced Costs","Better Planning","No Stockouts","Optimized Inventory"]}
      pricing="$159/month"
      category="MicroSAAS"
      color="from-emerald-500 to-green-600"
    />
  );
};

export default ZionInventorySmartPage;

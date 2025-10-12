'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Settings } from 'lucide-react';

const ZionAiPredictiveMaintenancePage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion AI Predictive Maintenance"
      description="AI-powered predictive maintenance platform for equipment monitoring and optimization."
      icon={Settings}
      features={["Equipment Monitoring","Failure Prediction","Maintenance Scheduling","Cost Optimization","Alert System","Analytics Dashboard"]}
      benefits={["Reduced Downtime","Cost Savings","Better Planning","Improved Reliability"]}
      pricing="$399/month"
      category="MicroSAAS"
      color="from-orange-500 to-red-600"
    />
  );
};

export default ZionAiPredictiveMaintenancePage;

'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Users } from 'lucide-react';

const ZionCrmIntelligencePage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion CRM Intelligence"
      description="AI-enhanced customer relationship management with intelligent insights and automation."
      icon={Users}
      features={["Lead Scoring","Automated Follow-ups","Customer Insights","Sales Forecasting","Pipeline Management","Integration APIs"]}
      benefits={["Increase Sales","Better Relationships","Automated Workflows","Data-Driven Insights"]}
      pricing="$199/month"
      category="MicroSAAS"
      color="from-indigo-500 to-purple-600"
    />
  );
};

export default ZionCrmIntelligencePage;

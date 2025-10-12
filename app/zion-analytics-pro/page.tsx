'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { BarChart } from 'lucide-react';

const ZionAnalyticsProPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion Analytics Pro"
      description="Advanced business intelligence platform with AI-powered insights and real-time analytics."
      icon={BarChart}
      features={["Real-time Dashboards","AI Insights","Custom Reports","Data Visualization","Predictive Analytics","Mobile Access"]}
      benefits={["Better Decisions","Real-time Insights","Easy to Use","Scalable Platform"]}
      pricing="$199/month"
      category="MicroSAAS"
      color="from-blue-500 to-cyan-600"
    />
  );
};

export default ZionAnalyticsProPage;

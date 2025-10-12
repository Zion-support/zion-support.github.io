'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { BarChart } from 'lucide-react';

const AiDataAnalyticsPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Data Analytics"
      description="Advanced AI-powered data analytics platform that transforms raw data into actionable business insights and predictive intelligence."
      icon={BarChart}
      features={["Real-time Analytics","Predictive Modeling","Custom Dashboards","Automated Reporting","Data Visualization","Machine Learning Insights"]}
      benefits={["Data-Driven Decisions","Predict Future Trends","Automated Insights","Competitive Advantage"]}
      pricing="$399/month"
      category="AI"
      color="from-blue-500 to-cyan-600"
    />
  );
};

export default AiDataAnalyticsPage;

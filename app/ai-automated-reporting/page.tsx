'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { BarChart } from 'lucide-react';

const AiAutomatedReportingPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Automated Reporting"
      description="Intelligent automated reporting system that generates insights and reports without manual intervention."
      icon={BarChart}
      features={["Automated Reports","Custom Dashboards","Data Visualization","Scheduled Reports","Real-time Updates","Export Options"]}
      benefits={["Save Time","Consistent Reports","Real-time Insights","Better Decision Making"]}
      pricing="$299/month"
      category="AI"
      color="from-indigo-500 to-purple-600"
    />
  );
};

export default AiAutomatedReportingPage;

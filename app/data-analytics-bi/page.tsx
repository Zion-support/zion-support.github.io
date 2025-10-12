'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { BarChart } from 'lucide-react';

const DataAnalyticsBiPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Data Analytics & BI"
      description="Advanced business intelligence and data analytics solutions for better decision making."
      icon={BarChart}
      features={["Data Warehousing","ETL Processes","Dashboard Creation","Report Generation","Data Visualization","Predictive Analytics"]}
      benefits={["Data-Driven Decisions","Better Insights","Improved Performance","Competitive Advantage"]}
      pricing="$1,199/month"
      category="IT"
      color="from-indigo-500 to-purple-600"
    />
  );
};

export default DataAnalyticsBiPage;

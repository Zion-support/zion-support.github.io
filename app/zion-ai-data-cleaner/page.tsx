'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Database } from 'lucide-react';

const ZionAiDataCleanerPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion AI Data Cleaner"
      description="Intelligent data cleaning and validation platform for better data quality."
      icon={Database}
      features={["Data Validation","Duplicate Detection","Format Standardization","Error Correction","Quality Scoring","Automated Cleaning"]}
      benefits={["Better Data Quality","Reduced Errors","Automated Cleaning","Consistent Data"]}
      pricing="$129/month"
      category="MicroSAAS"
      color="from-slate-500 to-gray-600"
    />
  );
};

export default ZionAiDataCleanerPage;

'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { DollarSign } from 'lucide-react';

const ZionAiAccountingAssistantPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion AI Accounting Assistant"
      description="AI-powered accounting platform with automated bookkeeping and financial analysis."
      icon={DollarSign}
      features={["Automated Bookkeeping","Expense Categorization","Financial Reports","Tax Preparation","Compliance Monitoring","Integration APIs"]}
      benefits={["Automated Accounting","Better Accuracy","Time Saving","Compliance Assurance"]}
      pricing="$199/month"
      category="MicroSAAS"
      color="from-green-500 to-emerald-600"
    />
  );
};

export default ZionAiAccountingAssistantPage;

'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { DollarSign } from 'lucide-react';

const AiFinancialServicesPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Financial Services"
      description="Revolutionary AI-powered financial services including trading, fraud detection, and risk management."
      icon={DollarSign}
      features={["Algorithmic Trading","Fraud Detection","Risk Assessment","Credit Scoring","Portfolio Optimization","Regulatory Compliance"]}
      benefits={["Higher Returns","Reduced Risk","Automated Compliance","Real-time Monitoring"]}
      pricing="$1,499/month"
      category="AI"
      color="from-green-500 to-emerald-600"
    />
  );
};

export default AiFinancialServicesPage;

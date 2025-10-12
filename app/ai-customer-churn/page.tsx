'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Users } from 'lucide-react';

const AiCustomerChurnPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Customer Churn Prediction"
      description="Predict and prevent customer churn using AI-powered analytics and proactive retention strategies."
      icon={Users}
      features={["Churn Prediction","Risk Scoring","Retention Strategies","Customer Segmentation","Behavioral Analysis","Automated Alerts"]}
      benefits={["Reduce Churn by 40%","Increase Retention","Better Customer Insights","Proactive Actions"]}
      pricing="$499/month"
      category="AI"
      color="from-red-500 to-orange-600"
    />
  );
};

export default AiCustomerChurnPage;

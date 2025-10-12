'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Users } from 'lucide-react';

const AiHrSolutionsPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI HR Solutions"
      description="Intelligent human resources management with AI-powered recruitment, employee analytics, and workforce optimization."
      icon={Users}
      features={["Resume Screening","Candidate Matching","Employee Analytics","Performance Prediction","Workforce Planning","Bias Detection"]}
      benefits={["Faster Hiring","Better Matches","Reduced Bias","Improved Retention"]}
      pricing="$499/month"
      category="AI"
      color="from-teal-500 to-cyan-600"
    />
  );
};

export default AiHrSolutionsPage;

'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Heart } from 'lucide-react';

const AiHealthcarePage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Healthcare Solutions"
      description="Cutting-edge AI solutions for healthcare including medical imaging, drug discovery, and personalized medicine."
      icon={Heart}
      features={["Medical Imaging Analysis","Drug Discovery","Patient Monitoring","Diagnostic Assistance","Treatment Optimization","Health Predictions"]}
      benefits={["Improved Diagnosis Accuracy","Faster Drug Development","Better Patient Outcomes","Reduced Healthcare Costs"]}
      pricing="$1,999/month"
      category="AI"
      color="from-red-500 to-pink-600"
    />
  );
};

export default AiHealthcarePage;

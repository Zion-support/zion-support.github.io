'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Heart } from 'lucide-react';

const AiHealthcareDiagnosticsPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Healthcare Diagnostics"
      description="AI-powered medical diagnostics for faster and more accurate disease detection and treatment planning."
      icon={Heart}
      features={["Medical Imaging Analysis","Symptom Analysis","Disease Detection","Treatment Recommendations","Risk Assessment","Clinical Decision Support"]}
      benefits={["Faster Diagnosis","Improved Accuracy","Better Patient Outcomes","Reduced Healthcare Costs"]}
      pricing="$2,499/month"
      category="AI"
      color="from-red-500 to-pink-600"
    />
  );
};

export default AiHealthcareDiagnosticsPage;

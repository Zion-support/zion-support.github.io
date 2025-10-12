'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Shield } from 'lucide-react';

const ZionAiFraudDetectorPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion AI Fraud Detector"
      description="Advanced fraud detection platform with AI-powered analysis and real-time monitoring."
      icon={Shield}
      features={["Real-time Detection","Pattern Analysis","Risk Scoring","Alert System","Machine Learning","Integration APIs"]}
      benefits={["Fraud Prevention","Real-time Protection","Reduced Losses","Better Security"]}
      pricing="$349/month"
      category="MicroSAAS"
      color="from-red-500 to-pink-600"
    />
  );
};

export default ZionAiFraudDetectorPage;

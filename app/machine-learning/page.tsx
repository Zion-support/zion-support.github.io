'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Brain } from 'lucide-react';

const MachineLearningPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Machine Learning"
      description="Advanced machine learning solutions for predictive analytics, pattern recognition, and intelligent automation."
      icon={Brain}
      features={["Predictive Models","Pattern Recognition","Deep Learning","Neural Networks","Model Training","Deployment Support"]}
      benefits={["Predictive Insights","Automated Decisions","Pattern Recognition","Competitive Advantage"]}
      pricing="$1,299/month"
      category="Emerging"
      color="from-indigo-500 to-purple-600"
    />
  );
};

export default MachineLearningPage;

'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Settings } from 'lucide-react';

const MachineLearningOpsPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Machine Learning Ops"
      description="Professional machine learning ops services to help your business grow and succeed."
      icon={Settings}
      features={["Expert Consultation","Custom Solutions","24/7 Support","Scalable Architecture","Security Implementation","Performance Optimization"]}
      benefits={["Better Performance","Cost Optimization","Expert Support","Scalable Solutions"]}
      pricing="Contact Us"
      category="IT"
      color="from-blue-500 to-cyan-600"
    />
  );
};

export default MachineLearningOpsPage;

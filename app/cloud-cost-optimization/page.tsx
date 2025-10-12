'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Cloud } from 'lucide-react';

const CloudCostOptimizationPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Cloud Cost Optimization"
      description="Professional cloud cost optimization services to help your business grow and succeed."
      icon={Cloud}
      features={["Expert Consultation","Custom Solutions","24/7 Support","Scalable Architecture","Security Implementation","Performance Optimization"]}
      benefits={["Better Performance","Cost Optimization","Expert Support","Scalable Solutions"]}
      pricing="Contact Us"
      category="IT"
      color="from-blue-500 to-cyan-600"
    />
  );
};

export default CloudCostOptimizationPage;

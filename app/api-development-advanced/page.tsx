'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Code } from 'lucide-react';

const ApiDevelopmentAdvancedPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Api Development Advanced"
      description="Professional api development advanced services to help your business grow and succeed."
      icon={Code}
      features={["Expert Consultation","Custom Solutions","24/7 Support","Scalable Architecture","Security Implementation","Performance Optimization"]}
      benefits={["Better Performance","Cost Optimization","Expert Support","Scalable Solutions"]}
      pricing="Contact Us"
      category="IT"
      color="from-indigo-500 to-purple-600"
    />
  );
};

export default ApiDevelopmentAdvancedPage;

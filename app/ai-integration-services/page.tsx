'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Brain } from 'lucide-react';

const AiIntegrationServicesPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Ai Integration Services"
      description="Professional ai integration services services to help your business grow and succeed."
      icon={Brain}
      features={["Expert Consultation","Custom Solutions","24/7 Support","Scalable Architecture","Security Implementation","Performance Optimization"]}
      benefits={["Better Performance","Cost Optimization","Expert Support","Scalable Solutions"]}
      pricing="Contact Us"
      category="AI"
      color="from-purple-500 to-pink-600"
    />
  );
};

export default AiIntegrationServicesPage;

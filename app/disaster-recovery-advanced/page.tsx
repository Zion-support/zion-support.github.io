'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Shield } from 'lucide-react';

const DisasterRecoveryAdvancedPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Disaster Recovery Advanced"
      description="Professional disaster recovery advanced services to help your business grow and succeed."
      icon={Shield}
      features={["Expert Consultation","Custom Solutions","24/7 Support","Scalable Architecture","Security Implementation","Performance Optimization"]}
      benefits={["Better Performance","Cost Optimization","Expert Support","Scalable Solutions"]}
      pricing="Contact Us"
      category="IT"
      color="from-red-500 to-pink-600"
    />
  );
};

export default DisasterRecoveryAdvancedPage;

'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Shield } from 'lucide-react';

const CloudNativeSecurityPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Cloud Native Security"
      description="Professional cloud native security services to help your business grow and succeed."
      icon={Shield}
      features={["Expert Consultation","Custom Solutions","24/7 Support","Scalable Architecture","Security Implementation","Performance Optimization"]}
      benefits={["Better Performance","Cost Optimization","Expert Support","Scalable Solutions"]}
      pricing="Contact Us"
      category="IT"
      color="from-red-500 to-orange-600"
    />
  );
};

export default CloudNativeSecurityPage;

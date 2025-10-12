'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Settings } from 'lucide-react';

const DevopsAdvancedPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Devops Advanced"
      description="Professional devops advanced services to help your business grow and succeed."
      icon={Settings}
      features={["Expert Consultation","Custom Solutions","24/7 Support","Scalable Architecture","Security Implementation","Performance Optimization"]}
      benefits={["Better Performance","Cost Optimization","Expert Support","Scalable Solutions"]}
      pricing="Contact Us"
      category="IT"
      color="from-purple-500 to-pink-600"
    />
  );
};

export default DevopsAdvancedPage;

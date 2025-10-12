'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Wifi } from 'lucide-react';

const IotDevelopmentPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Iot Development"
      description="Professional iot development services to help your business grow and succeed."
      icon={Wifi}
      features={["Expert Consultation","Custom Solutions","24/7 Support","Scalable Architecture","Security Implementation","Performance Optimization"]}
      benefits={["Better Performance","Cost Optimization","Expert Support","Scalable Solutions"]}
      pricing="Contact Us"
      category="IT"
      color="from-cyan-500 to-blue-600"
    />
  );
};

export default IotDevelopmentPage;

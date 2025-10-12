'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Link } from 'lucide-react';

const BlockchainDevelopmentPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Blockchain Development"
      description="Professional blockchain development services to help your business grow and succeed."
      icon={Link}
      features={["Expert Consultation","Custom Solutions","24/7 Support","Scalable Architecture","Security Implementation","Performance Optimization"]}
      benefits={["Better Performance","Cost Optimization","Expert Support","Scalable Solutions"]}
      pricing="Contact Us"
      category="IT"
      color="from-green-500 to-emerald-600"
    />
  );
};

export default BlockchainDevelopmentPage;

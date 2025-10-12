'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Database } from 'lucide-react';

const DataVisualizationPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Data Visualization"
      description="Professional data visualization services to help your business grow and succeed."
      icon={Database}
      features={["Expert Consultation","Custom Solutions","24/7 Support","Scalable Architecture","Security Implementation","Performance Optimization"]}
      benefits={["Better Performance","Cost Optimization","Expert Support","Scalable Solutions"]}
      pricing="Contact Us"
      category="IT"
      color="from-teal-500 to-cyan-600"
    />
  );
};

export default DataVisualizationPage;

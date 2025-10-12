'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Code } from 'lucide-react';

const CustomSoftwarePage: React.FC = () => {
  return (
    <GenericServicePage
      title="Custom Software Development"
      description="Tailored software solutions designed specifically for your business needs and requirements."
      icon={Code}
      features={["Custom Applications","Web Development","Mobile Apps","System Integration","Quality Assurance","Maintenance"]}
      benefits={["Perfect Fit","Competitive Advantage","Scalable Solutions","Ongoing Support"]}
      pricing="Custom Pricing"
      category="IT"
      color="from-teal-500 to-cyan-600"
    />
  );
};

export default CustomSoftwarePage;

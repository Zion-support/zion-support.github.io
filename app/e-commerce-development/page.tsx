'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { ShoppingCart } from 'lucide-react';

const ECommerceDevelopmentPage: React.FC = () => {
  return (
    <GenericServicePage
      title="E Commerce Development"
      description="Professional e commerce development services to help your business grow and succeed."
      icon={ShoppingCart}
      features={["Expert Consultation","Custom Solutions","24/7 Support","Scalable Architecture","Security Implementation","Performance Optimization"]}
      benefits={["Better Performance","Cost Optimization","Expert Support","Scalable Solutions"]}
      pricing="Contact Us"
      category="IT"
      color="from-pink-500 to-rose-600"
    />
  );
};

export default ECommerceDevelopmentPage;

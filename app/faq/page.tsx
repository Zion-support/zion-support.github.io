'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { HelpCircle } from 'lucide-react';

const FaqPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Frequently Asked Questions"
      description="Find answers to common questions about our AI and IT solutions."
      icon={HelpCircle}
      features={["Common Questions","Technical Support","Service Information","Pricing Details","Implementation Guide","Contact Information"]}
      benefits={["Quick Answers","Self-Service","Better Understanding","Reduced Support Load"]}
      pricing="Free"
      category="Resources"
      color="from-purple-500 to-pink-600"
    />
  );
};

export default FaqPage;

'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Users } from 'lucide-react';

const PartnersPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Partners"
      description="Join our partner network and grow your business with Zion Tech Group solutions."
      icon={Users}
      features={["Partner Program","Technical Support","Marketing Resources","Training Programs","Certification","Revenue Sharing"]}
      benefits={["Business Growth","Technical Expertise","Marketing Support","Revenue Opportunities"]}
      pricing="Contact Us"
      category="Company"
      color="from-blue-500 to-cyan-600"
    />
  );
};

export default PartnersPage;

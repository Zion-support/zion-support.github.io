'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Shield } from 'lucide-react';

const CompliancePage: React.FC = () => {
  return (
    <GenericServicePage
      title="Compliance"
      description="Information about our compliance certifications and security standards."
      icon={Shield}
      features={["Security Certifications","Compliance Reports","Data Protection","Privacy Policy","Terms of Service","Audit Reports"]}
      benefits={["Trust & Security","Regulatory Compliance","Data Protection","Transparency"]}
      pricing="Free"
      category="Resources"
      color="from-red-500 to-orange-600"
    />
  );
};

export default CompliancePage;

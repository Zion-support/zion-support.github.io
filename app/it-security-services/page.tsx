'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Shield } from 'lucide-react';

const ItSecurityServicesPage: React.FC = () => {
  return (
    <GenericServicePage
      title="IT Security Services"
      description="Comprehensive cybersecurity services to protect your business from threats and vulnerabilities."
      icon={Shield}
      features={["Security Assessment","Threat Monitoring","Incident Response","Compliance Management","Security Training","Penetration Testing"]}
      benefits={["Enhanced Security","Risk Mitigation","Compliance","Peace of Mind"]}
      pricing="$1,599/month"
      category="IT"
      color="from-red-500 to-orange-600"
    />
  );
};

export default ItSecurityServicesPage;

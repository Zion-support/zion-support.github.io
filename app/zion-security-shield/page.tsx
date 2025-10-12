'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Shield } from 'lucide-react';

const ZionSecurityShieldPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion Security Shield"
      description="Comprehensive cybersecurity monitoring and threat detection platform."
      icon={Shield}
      features={["Threat Detection","Real-time Monitoring","Security Alerts","Vulnerability Scanning","Compliance Reports","Incident Response"]}
      benefits={["Enhanced Security","Peace of Mind","Compliance","Proactive Protection"]}
      pricing="$299/month"
      category="MicroSAAS"
      color="from-red-500 to-orange-600"
    />
  );
};

export default ZionSecurityShieldPage;

'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { CheckSquare } from 'lucide-react';

const ZionComplianceManagerPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion Compliance Manager"
      description="Automated compliance management platform with regulatory monitoring and reporting."
      icon={CheckSquare}
      features={["Regulatory Monitoring","Compliance Reports","Risk Assessment","Audit Trails","Policy Management","Alert System"]}
      benefits={["Stay Compliant","Reduce Risk","Automated Reporting","Peace of Mind"]}
      pricing="$249/month"
      category="MicroSAAS"
      color="from-slate-500 to-gray-600"
    />
  );
};

export default ZionComplianceManagerPage;

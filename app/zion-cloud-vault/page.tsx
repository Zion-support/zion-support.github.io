'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Cloud } from 'lucide-react';

const ZionCloudVaultPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion Cloud Vault"
      description="Secure cloud backup and disaster recovery solution for business continuity."
      icon={Cloud}
      features={["Automated Backups","Disaster Recovery","Data Encryption","Version Control","Cross-platform Sync","24/7 Monitoring"]}
      benefits={["Data Protection","Business Continuity","Easy Recovery","Secure Storage"]}
      pricing="$149/month"
      category="MicroSAAS"
      color="from-cyan-500 to-blue-600"
    />
  );
};

export default ZionCloudVaultPage;

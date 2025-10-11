'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Database } from 'lucide-react';

const ZionDataSyncPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion Data Sync"
      description="Intelligent data integration platform for seamless data synchronization across systems."
      icon={Database}
      features={["Real-time Sync","Data Transformation","Error Handling","Monitoring Dashboard","API Integration","Custom Mappings"]}
      benefits={["Accurate Data","Real-time Updates","Reduced Errors","Easy Integration"]}
      pricing="$149/month"
      category="MicroSAAS"
      color="from-teal-500 to-cyan-600"
    />
  );
};

export default ZionDataSyncPage;

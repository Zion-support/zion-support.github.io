'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Monitor } from 'lucide-react';

const ItSupportPage: React.FC = () => {
  return (
    <GenericServicePage
      title="IT Support Services"
      description="Comprehensive IT support and maintenance services to keep your systems running smoothly."
      icon={Monitor}
      features={["24/7 Support","Remote Assistance","System Maintenance","Security Updates","Performance Monitoring","Help Desk"]}
      benefits={["Reduced Downtime","Better Performance","Proactive Support","Cost Savings"]}
      pricing="$799/month"
      category="IT"
      color="from-orange-500 to-red-600"
    />
  );
};

export default ItSupportPage;

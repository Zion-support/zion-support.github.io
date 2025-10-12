'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Wifi } from 'lucide-react';

const NetworkInfrastructurePage: React.FC = () => {
  return (
    <GenericServicePage
      title="Network Infrastructure"
      description="Complete network infrastructure design, implementation, and management for optimal performance."
      icon={Wifi}
      features={["Network Design","Security Implementation","Performance Optimization","Monitoring","Disaster Recovery","24/7 Support"]}
      benefits={["Better Performance","Enhanced Security","Reduced Downtime","Scalable Infrastructure"]}
      pricing="$1,399/month"
      category="IT"
      color="from-cyan-500 to-blue-600"
    />
  );
};

export default NetworkInfrastructurePage;

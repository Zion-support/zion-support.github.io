'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Monitor } from 'lucide-react';

const StatusPage: React.FC = () => {
  return (
    <GenericServicePage
      title="System Status"
      description="Real-time status monitoring of all Zion Tech Group services and infrastructure."
      icon={Monitor}
      features={["Service Status","Incident Reports","Maintenance Windows","Performance Metrics","Uptime Monitoring","Real-time Updates"]}
      benefits={["Transparency","Proactive Monitoring","Better Communication","Service Reliability"]}
      pricing="Free"
      category="Company"
      color="from-green-500 to-emerald-600"
    />
  );
};

export default StatusPage;

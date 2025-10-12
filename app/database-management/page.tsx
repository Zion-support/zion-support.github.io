'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Database } from 'lucide-react';

const DatabaseManagementPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Database Management"
      description="Comprehensive database management services including design, optimization, and maintenance."
      icon={Database}
      features={["Database Design","Performance Optimization","Backup & Recovery","Security Management","Monitoring","Migration Services"]}
      benefits={["Better Performance","Data Security","Reduced Downtime","Cost Optimization"]}
      pricing="$899/month"
      category="IT"
      color="from-green-500 to-emerald-600"
    />
  );
};

export default DatabaseManagementPage;

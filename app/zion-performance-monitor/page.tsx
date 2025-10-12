'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Monitor } from 'lucide-react';

const ZionPerformanceMonitorPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion Performance Monitor"
      description="Comprehensive performance monitoring and optimization platform for applications and infrastructure."
      icon={Monitor}
      features={["Real-time Monitoring","Performance Analytics","Alert System","Capacity Planning","Trend Analysis","Custom Dashboards"]}
      benefits={["Better Performance","Proactive Monitoring","Reduced Downtime","Cost Optimization"]}
      pricing="$179/month"
      category="MicroSAAS"
      color="from-orange-500 to-red-600"
    />
  );
};

export default ZionPerformanceMonitorPage;

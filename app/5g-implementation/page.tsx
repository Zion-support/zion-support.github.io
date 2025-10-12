'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Zap } from 'lucide-react';

const 5gImplementationPage: React.FC = () => {
  return (
    <GenericServicePage
      title="5G Implementation"
      description="Next-generation 5G network implementation and optimization for ultra-fast connectivity and IoT applications."
      icon={Zap}
      features={["Ultra-fast Speeds","Low Latency","IoT Connectivity","Network Optimization","Security Implementation","Performance Monitoring"]}
      benefits={["Faster Connectivity","Better IoT Support","Enhanced Security","Future-ready Infrastructure"]}
      pricing="Custom Pricing"
      category="Emerging"
      color="from-cyan-500 to-blue-600"
    />
  );
};

export default 5gImplementationPage;

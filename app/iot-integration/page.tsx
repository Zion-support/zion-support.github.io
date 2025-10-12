'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Wifi } from 'lucide-react';

const IotIntegrationPage: React.FC = () => {
  return (
    <GenericServicePage
      title="IoT Integration"
      description="Comprehensive Internet of Things integration and management for connected devices and smart systems."
      icon={Wifi}
      features={["Device Management","Data Collection","Real-time Monitoring","Analytics Dashboard","Security Implementation","Scalable Architecture"]}
      benefits={["Connected Systems","Real-time Insights","Automated Operations","Cost Optimization"]}
      pricing="$899/month"
      category="Emerging"
      color="from-cyan-500 to-blue-600"
    />
  );
};

export default IotIntegrationPage;

'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Wifi } from 'lucide-react';

const AiIotAnalyticsPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI IoT Analytics"
      description="Intelligent analytics for IoT devices and connected systems for better insights and automation."
      icon={Wifi}
      features={["Device Analytics","Predictive Maintenance","Anomaly Detection","Performance Monitoring","Energy Optimization","Real-time Alerts"]}
      benefits={["Reduced Downtime","Energy Savings","Predictive Maintenance","Better Performance"]}
      pricing="$699/month"
      category="AI"
      color="from-cyan-500 to-blue-600"
    />
  );
};

export default AiIotAnalyticsPage;

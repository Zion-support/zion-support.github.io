'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Calendar } from 'lucide-react';

const ZionProjectMasterPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion Project Master"
      description="AI-powered project management platform with intelligent scheduling and resource optimization."
      icon={Calendar}
      features={["Smart Scheduling","Resource Management","Progress Tracking","Risk Assessment","Team Collaboration","Reporting"]}
      benefits={["Better Planning","On-time Delivery","Resource Optimization","Team Collaboration"]}
      pricing="$129/month"
      category="MicroSAAS"
      color="from-violet-500 to-purple-600"
    />
  );
};

export default ZionProjectMasterPage;

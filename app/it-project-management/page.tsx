'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Calendar } from 'lucide-react';

const ItProjectManagementPage: React.FC = () => {
  return (
    <GenericServicePage
      title="IT Project Management"
      description="Professional IT project management services to ensure successful delivery and implementation."
      icon={Calendar}
      features={["Project Planning","Resource Management","Risk Assessment","Quality Assurance","Timeline Management","Stakeholder Communication"]}
      benefits={["Successful Delivery","On-time Completion","Quality Results","Better Communication"]}
      pricing="$1,099/month"
      category="IT"
      color="from-violet-500 to-purple-600"
    />
  );
};

export default ItProjectManagementPage;

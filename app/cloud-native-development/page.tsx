'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Cloud } from 'lucide-react';

const CloudNativeDevelopmentPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Cloud Native Development"
      description="Modern cloud-native application development using microservices, containers, and serverless architectures."
      icon={Cloud}
      features={['Microservices Architecture', 'Container Orchestration', 'Serverless Functions', 'API Gateway', 'Service Mesh', 'DevOps Integration']}
      benefits={['Scalable Architecture', 'Better Performance', 'Cost Optimization', 'Faster Deployment']}
      pricing="$1,299/month"
      category="IT"
      color="from-blue-500 to-cyan-600"
    />
  );
};

export default CloudNativeDevelopmentPage;
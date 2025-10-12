'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Settings } from 'lucide-react';

const DevopsCicdPage: React.FC = () => {
  return (
    <GenericServicePage
      title="DevOps & CI/CD"
      description="Complete DevOps solutions with continuous integration and deployment for faster, reliable software delivery."
      icon={Settings}
      features={["CI/CD Pipelines","Infrastructure as Code","Monitoring & Logging","Security Scanning","Automated Testing","Deployment Automation"]}
      benefits={["Faster Deployments","Reduced Errors","Better Collaboration","Improved Quality"]}
      pricing="$1,499/month"
      category="IT"
      color="from-purple-500 to-pink-600"
    />
  );
};

export default DevopsCicdPage;

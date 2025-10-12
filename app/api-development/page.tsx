'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Code } from 'lucide-react';

const ApiDevelopmentPage: React.FC = () => {
  return (
    <GenericServicePage
      title="API Development"
      description="Professional API development and management services for seamless integration and scalable solutions."
      icon={Code}
      features={["RESTful APIs","GraphQL APIs","API Documentation","Rate Limiting","Authentication","Monitoring"]}
      benefits={["Better Integration","Scalable Architecture","Developer Friendly","Secure APIs"]}
      pricing="$1,299/month"
      category="IT"
      color="from-blue-500 to-cyan-600"
    />
  );
};

export default ApiDevelopmentPage;

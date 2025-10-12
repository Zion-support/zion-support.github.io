'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Code } from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  return (
    <GenericServicePage
      title="API Reference"
      description="Complete API reference documentation for all our services and endpoints."
      icon={Code}
      features={["API Endpoints","Authentication","Request/Response Examples","Error Codes","Rate Limits","SDK Documentation"]}
      benefits={["Easy Integration","Complete Reference","Code Examples","Developer Friendly"]}
      pricing="Free"
      category="Resources"
      color="from-cyan-500 to-blue-600"
    />
  );
};

export default ApiDocsPage;

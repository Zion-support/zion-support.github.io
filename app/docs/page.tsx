'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { FileText } from 'lucide-react';

const DocsPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Documentation"
      description="Comprehensive documentation for all our AI and IT solutions and APIs."
      icon={FileText}
      features={["API Documentation","Integration Guides","Code Examples","Tutorials","Best Practices","SDK Downloads"]}
      benefits={["Easy Integration","Better Understanding","Faster Development","Comprehensive Resources"]}
      pricing="Free"
      category="Resources"
      color="from-indigo-500 to-purple-600"
    />
  );
};

export default DocsPage;

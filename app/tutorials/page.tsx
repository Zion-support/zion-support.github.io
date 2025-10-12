'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { BookOpen } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Tutorials"
      description="Learn how to use our AI and IT solutions with comprehensive tutorials and guides."
      icon={BookOpen}
      features={["Step-by-step Guides","Video Tutorials","Code Examples","Best Practices","Integration Guides","Troubleshooting"]}
      benefits={["Easy Learning","Better Understanding","Faster Implementation","Self-Service Support"]}
      pricing="Free"
      category="Resources"
      color="from-indigo-500 to-purple-600"
    />
  );
};

export default TutorialsPage;
'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { FileText } from 'lucide-react';

const AiKnowledgeManagementPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Knowledge Management"
      description="Intelligent knowledge management system that organizes and retrieves information efficiently."
      icon={FileText}
      features={["Document Organization","Smart Search","Knowledge Graphs","Content Recommendations","Collaboration Tools","Version Control"]}
      benefits={["Better Organization","Faster Access","Improved Collaboration","Knowledge Retention"]}
      pricing="$399/month"
      category="AI"
      color="from-blue-500 to-indigo-600"
    />
  );
};

export default AiKnowledgeManagementPage;

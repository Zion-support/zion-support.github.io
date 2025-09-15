import React from 'react';
import { useParams } from 'react-router-dom';

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study: {slug}</h1>
          <p className="text-xl text-gray-600">Coming soon - Detailed case study content</p>
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Case Study: {slug || 'Default'}
          </h1>
          <p className="text-xl text-gray-600">
            Detailed case study content coming soon
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600">
            This case study page is under development. Content for "{slug}" will be available soon.
          </p>
>>>>>>> cursor/create-and-deploy-new-content-abae
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
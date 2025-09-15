import React from 'react';
import { useParams } from 'react-router-dom';

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Case Study: {slug}
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600">
              This case study page is under development. Content for {slug} will be available soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
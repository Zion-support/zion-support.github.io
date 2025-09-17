import React from 'react';
import { useParams }  from 'react-router-dom';

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study: {slug}</h1>
          <p className="text-xl text-gray-600">Coming soon - Detailed case study content</p>
        </div>
      </div>
    </div>
  );
  };
export default CaseStudyPage;
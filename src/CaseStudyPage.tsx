import React from 'react';
import { useParams } from 'react-router-dom';

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
>>>>>>> 540f83f81c4de5174546a7b98219a9b6bc908888
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study: {slug}</h1>
          <p className="text-xl text-gray-600">Detailed case study coming soon</p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <div className="text-6xl mb-6">📊</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Case Study Details</h2>
            <p className="text-gray-600 mb-6">
              This case study page is under development. We're working on bringing you detailed insights and success stories.
            </p>
            <a 
              href="/" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
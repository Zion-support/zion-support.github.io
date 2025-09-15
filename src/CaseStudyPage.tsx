import React from 'react';
import { useParams } from 'react-router-dom';

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    <div className="min-h-screen bg-white">
>>>>>>> cursor/create-and-deploy-new-content-c963
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
>>>>>>> 540f83f81c4de5174546a7b98219a9b6bc908888
=======
<<<<<<< HEAD
=======
    <div className="min-h-screen bg-white">
>>>>>>> cursor/create-and-deploy-new-content-f977
>>>>>>> cursor/create-and-deploy-new-content-c963
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
=======
>>>>>>> 1d7fd6d1fb30cd51e67b6fec67ae4df7b2f1c915
>>>>>>> 7f711c4f4b2f4712326da42b282fa5915dbfb56b
>>>>>>> cursor/create-and-deploy-new-content-425b
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study: {slug}</h1>
<<<<<<< HEAD
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
=======
          <p className="text-xl text-gray-600">Coming soon - Detailed case study content</p>
>>>>>>> cursor/create-and-deploy-new-content-425b
        </div>
      </div>
    </div>
  );
};


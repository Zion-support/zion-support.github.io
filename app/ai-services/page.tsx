import React from 'react';
import SEOHead from '../components/SEOHead';

const AIServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Services - Zion Tech Group"
        description="Comprehensive AI services including machine learning, natural language processing, and computer vision solutions."
        keywords="AI services, machine learning, NLP, computer vision, artificial intelligence"
      />
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Services</h1>
          <p className="text-xl text-gray-300 mb-8">
            Comprehensive AI solutions to transform your business with cutting-edge artificial intelligence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
              <p className="text-gray-300">Custom ML models for your specific business needs.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Natural Language Processing</h3>
              <p className="text-gray-300">Advanced text analysis and language understanding.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Computer Vision</h3>
              <p className="text-gray-300">Image and video analysis solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;
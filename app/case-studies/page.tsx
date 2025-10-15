import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies. See how we've helped businesses transform with AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Success Stories</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Discover how we've helped businesses transform with our AI and IT solutions. 
                Real results from real clients.
              </p>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Client Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from our AI and IT implementations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">E-commerce AI Optimization</h3>
                <p className="text-gray-600 mb-4">Increased conversion rates by 40% using AI-powered personalization</p>
                <div className="text-green-600 font-medium">40% increase in conversions</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cloud Migration Success</h3>
                <p className="text-gray-600 mb-4">Reduced infrastructure costs by 60% with cloud optimization</p>
                <div className="text-green-600 font-medium">60% cost reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;
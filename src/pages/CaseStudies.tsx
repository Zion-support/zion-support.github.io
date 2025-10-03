import React from 'react;
import { Helmet } from 'react-helmet-async;
const CaseStudies: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Real-world success stories and case studies showcasing our AI solutions and their impact on businesses." /><link rel="canonical" href="https://ziontechgroup.com/case-studies/>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI solutions have transformed businesses across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">E-commerce Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Increased conversion rates by 40% for a major e-commerce platform using AI-powered personalization.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Retail & E-commerce</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-r from-green-500 to-teal-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Reduced patient readmission rates by 25% through predictive analytics and AI-driven insights.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Healthcare</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-r from-purple-500 to-pink-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Services</h3>
                <p className="text-gray-600 mb-4">
                  Automated fraud detection system that reduced false positives by 60% while maintaining security.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Fintech</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our AI solutions can transform your business
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
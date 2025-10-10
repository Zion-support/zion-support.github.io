import React from 'react';
import { Helmet } from 'react-helmet-async';

const DemoPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and cloud solutions through interactive demos. See how our technology can transform your business." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Interactive Demos</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our AI and cloud solutions through interactive demonstrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Chat Assistant</h2>
              <p className="text-gray-600 mb-6">
                Try our AI-powered chat assistant that can help with customer support and inquiries.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4 h-48 border">
                <p className="text-gray-500 text-center">Demo interface would go here</p>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Try Demo
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cloud Dashboard</h2>
              <p className="text-gray-600 mb-6">
                Explore our cloud management dashboard for monitoring and analytics.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4 h-48 border">
                <p className="text-gray-500 text-center">Dashboard preview would go here</p>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                View Demo
              </button>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to see more?</h2>
            <p className="text-gray-600 mb-6">
              Contact us to schedule a personalized demo of our solutions.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPage;
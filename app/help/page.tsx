import React from 'react';
import { Helmet } from 'react-helmet-async';

const HelpPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Help & Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for our AI and IT solutions. Find answers to common questions and contact our support team." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Help & Support</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">FAQ</h3>
              <p className="text-gray-600">
                Find answers to frequently asked questions about our services and solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Support</h3>
              <p className="text-gray-600">
                Get in touch with our support team for personalized assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpPage;

import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of AI and IT services designed to accelerate your business growth." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Services</h3>
              <p className="text-gray-600">
                Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600">
                Scalable cloud solutions that provide reliability, security, and performance for your business applications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Transformation</h3>
              <p className="text-gray-600">
                Complete digital transformation services to modernize your business processes and systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
import React from 'react';
import SEOHead from '../components/SEOHead';

const ITServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="IT Services - Zion Tech Group"
        description="Complete IT services including web development, cloud infrastructure, and digital transformation."
        keywords="IT services, web development, cloud infrastructure, digital transformation"
      />
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">IT Services</h1>
          <p className="text-xl text-gray-300 mb-8">
            Complete IT solutions to modernize your business infrastructure and operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-300">Modern, responsive web applications built with latest technologies.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300">Scalable cloud solutions for your business needs.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
              <p className="text-gray-300">Complete digital transformation services.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;
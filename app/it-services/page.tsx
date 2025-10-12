import React from 'react';
import { Helmet } from 'react-helmet-async';

const ITServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT infrastructure services including cloud migration, cybersecurity, web development, and mobile applications." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete technology infrastructure solutions for modern businesses
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-300 text-lg">
              Our IT services are coming soon. Contact us to learn more about our IT solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;

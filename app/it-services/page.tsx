import React from 'react';
import { Helmet } from 'react-helmet-async';

const ITServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cybersecurity, cloud migration, and 24/7 support. Expert solutions for modern businesses." />
        <meta name="keywords" content="IT services, infrastructure management, cybersecurity, cloud migration, database administration, network solutions" />
      </Helmet>
      
      <div className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive IT solutions to keep your business running smoothly, securely, and efficiently.
          </p>
          <a 
            href="https://ziontechgroup.com/contact" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;

import React from 'react';
import { Helmet } from 'react-helmet-async';

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team and build the future of technology." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Careers
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Join our team and help build the future of technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
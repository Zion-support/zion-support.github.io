import React from 'react';
import { Helmet } from 'react-helmet-async';

const CloudInfrastructurePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Scalable cloud infrastructure solutions." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Cloud Infrastructure
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Scalable cloud solutions for modern businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CloudInfrastructurePage;
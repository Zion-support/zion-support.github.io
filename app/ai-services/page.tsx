import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions for your business." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white text-center mb-8">AI Services</h1>
          <p className="text-xl text-gray-300 text-center">Coming Soon</p>
        </div>
      </div>
    </>
  );
};

export default AiServicesPage;

import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions including chatbots, content generation, analytics, and more." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">AI Services</h1>
            <p className="text-xl text-gray-300 mb-8">Advanced AI solutions for your business</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;

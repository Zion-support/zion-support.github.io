import React from 'react';
import { Helmet } from 'react-helmet-async';

const CustomDevelopmentPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Custom Development - Zion Tech Group</title>
        <meta name="description" content="Custom software development solutions tailored to your business needs." />
        <meta name="keywords" content="custom development, software development, bespoke solutions, enterprise software" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Development</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bespoke software solutions designed specifically for your business requirements.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-300">Coming Soon - Custom Development Solutions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomDevelopmentPage;
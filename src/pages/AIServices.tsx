import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIServices: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge AI solutions for your business needs." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            AI Services
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Transform your business with cutting-edge artificial intelligence
          </p>
        </div>
      </div>
    </>
  );
};

export default AIServices;
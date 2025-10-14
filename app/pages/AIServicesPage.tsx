import React from 'react';
import { Helmet } from 'react-helmet-async';
const AIServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services from Zion Tech Group including machine learning, automation, and intelligent solutions." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, automation, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI services designed to transform your business with intelligent automation and machine learning solutions.
          </p>
        </div>
      </div>
    </>
  );
};
export default AIServicesPage;
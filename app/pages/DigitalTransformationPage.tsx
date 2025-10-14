import React from 'react';
import { Helmet } from 'react-helmet-async';
const DigitalTransformationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive digital transformation services and solutions." />
        <meta name="keywords" content="digital transformation, business modernization, technology solutions, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Digital Transformation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with our comprehensive digital transformation services and modern technology solutions.
          </p>
        </div>
      </div>
    </>
  );
};
export default DigitalTransformationPage;
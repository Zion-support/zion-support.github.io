import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiFraudDetectionPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Fraud Detection - Advanced Security Solutions | Zion Tech Group</title>
        <meta name="description" content="Protect your business with AI-powered fraud detection. Real-time monitoring, pattern recognition, and automated threat detection." />
      </Helmet>
      <div className="min-h-screen pt-16">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Fraud <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Detection</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your business with intelligent fraud detection systems
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiFraudDetectionPage;
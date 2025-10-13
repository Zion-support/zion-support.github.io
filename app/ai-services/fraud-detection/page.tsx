import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiFraudDetectionPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Fraud Detection - Advanced Security Solutions | Zion Tech Group</title>
        <meta name="description" content="Protect your business with AI-powered fraud detection. Real-time monitoring, pattern recognition, and automated security." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">AI Fraud Detection</h1>
          <p className="text-gray-300">Coming Soon - Advanced fraud detection powered by AI</p>
        </div>
      </div>
    </>
  );
};

export default AiFraudDetectionPage;
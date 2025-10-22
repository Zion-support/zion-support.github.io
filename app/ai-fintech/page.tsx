'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiFintechPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Fintech Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform financial services with AI-powered fraud detection, risk assessment, and automated trading solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Fintech Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionize financial services with AI-powered fraud detection, risk assessment, and automated trading solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Fraud Detection</h3>
              <p className="text-gray-600">Advanced AI algorithms to detect and prevent fraudulent transactions in real-time.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Risk Assessment</h3>
              <p className="text-gray-600">Comprehensive risk analysis using machine learning and predictive modeling.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Algorithmic Trading</h3>
              <p className="text-gray-600">Automated trading systems powered by AI for optimal investment strategies.</p>
            </div>
          </div>
        </div> (Fix merge conflicts in TypeScript files)
      </div>
    </>
  );
};

export default AiFintechPage;
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiHealthcarePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Healthcare Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform healthcare with AI-powered diagnostic tools, patient care, and medical research solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Healthcare Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionize healthcare delivery with AI-powered diagnostic tools, patient monitoring, and medical research solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Medical Diagnostics</h3>
              <p className="text-gray-600">AI-powered diagnostic tools for faster and more accurate medical assessments.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Patient Monitoring</h3>
              <p className="text-gray-600">Continuous patient monitoring with predictive health analytics.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Drug Discovery</h3>
              <p className="text-gray-600">Accelerate drug discovery and development with AI algorithms.</p>
            </div>
          </div>
        </div> (Fix merge conflicts in TypeScript files)
      </div>
    </>
  );
};

export default AiHealthcarePage;
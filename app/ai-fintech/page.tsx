'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiFintechPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Fintech Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionize financial services with AI-powered fraud detection, risk assessment, and automated trading solutions." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">AI Fintech Solutions</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Transform financial services with AI-powered fraud detection, risk assessment, and automated trading solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default AiFintechPage;
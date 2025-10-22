'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiHealthcarePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Healthcare Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionize healthcare with AI-powered diagnostic tools, patient care, and medical research solutions." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">AI Healthcare Solutions</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Transform healthcare delivery with AI-powered diagnostic tools, patient monitoring, and medical research solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default AiHealthcarePage;
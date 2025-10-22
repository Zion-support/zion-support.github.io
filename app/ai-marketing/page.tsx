'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiMarketingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Marketing Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your marketing with AI-powered solutions for better targeting, personalization, and ROI." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">AI Marketing Solutions</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Leverage artificial intelligence to revolutionize your marketing strategies and drive unprecedented growth.
          </p>
        </div>
      </div>
    </>
  );
};

export default AiMarketingPage;
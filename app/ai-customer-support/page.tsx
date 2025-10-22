'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiCustomerSupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Customer Support - Zion Tech Group</title>
        <meta name="description" content="Enhance customer experience with AI-powered support solutions, chatbots, and intelligent ticket routing." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">AI Customer Support</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Enhance customer experience with AI-powered support solutions and intelligent chatbots.
          </p>
        </div>
      </div>
    </>
  );
};

export default AiCustomerSupportPage;
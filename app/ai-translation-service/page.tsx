import React from 'react';
import { Helmet } from 'react-helmet-async';

const AITranslationServicePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Translation Service - Zion Tech Group</title>
        <meta name="description" content="AI-powered translation service for accurate multilingual communication." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">AI Translation Service</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced translation services powered by artificial intelligence
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AITranslationServicePage;
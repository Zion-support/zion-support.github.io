import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIEmailAssistantPage = () => {
  return (
    <>
      <Helmet>
        <title>AI Email Assistant - Zion Tech Group</title>
        <meta name="description" content="AI-powered email assistant for automated email management and responses." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">AI Email Assistant</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered email assistant for automated email management
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIEmailAssistantPage;

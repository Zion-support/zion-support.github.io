'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIEmailAssistantPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Email Assistant - Zion Tech Group</title>
        <meta name="description" content="Intelligent AI email assistant for automated email management and responses." />
        <meta name="keywords" content="AI email assistant, email automation, email management, AI email" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Email Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Intelligent AI email assistant for automated email management and responses.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIEmailAssistantPage;
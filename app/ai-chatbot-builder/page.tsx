'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIChatbotBuilderPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots with our AI chatbot builder. Create conversational AI solutions for your business." />
        <meta name="keywords" content="AI chatbot, chatbot builder, conversational AI, natural language processing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Chatbot Builder
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build intelligent chatbots with our AI chatbot builder. Create conversational AI solutions for your business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChatbotBuilderPage;
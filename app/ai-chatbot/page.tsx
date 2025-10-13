import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIChatbotPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Chatbot - Zion Tech Group</title>
        <meta name="description" content="Intelligent AI chatbot solutions for customer service, support, and automated conversations." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-white mb-6">AI Chatbot</h1>
        <p className="text-xl text-gray-300">Coming Soon - Advanced chatbot solutions</p>
      </div>
    </div>
  );
};

export default AIChatbotPage;
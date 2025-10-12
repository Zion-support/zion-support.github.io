import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AiConversationalAiPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Conversational AI - Zion Tech Group</title>
        <meta name="description" content="AI Conversational AI services by Zion Tech Group. Professional AI and IT solutions for conversational interfaces." />
        <meta name="keywords" content="ai-conversational-ai, AI solutions, IT services, conversational AI, chatbots" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Conversational AI
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional AI conversational AI services by Zion Tech Group. 
              Advanced conversational interfaces and AI-powered chat solutions.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We're working on bringing you comprehensive AI conversational AI solutions. 
              Contact us to learn more about our services.
            </p>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiConversationalAiPage;
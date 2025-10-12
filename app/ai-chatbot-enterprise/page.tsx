'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AiChatbotEnterprisePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Chatbot Enterprise - Zion Tech Group</title>
        <meta name="description" content="Enterprise AI chatbot solutions by Zion Tech Group. Professional AI and IT solutions for large organizations." />
        <meta name="keywords" content="ai-chatbot-enterprise, AI solutions, IT services, enterprise chatbot" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Chatbot Enterprise
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional AI chatbot enterprise services by Zion Tech Group.
            </p>
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're working on bringing you comprehensive AI chatbot enterprise solutions. 
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

export default AiChatbotEnterprisePage;
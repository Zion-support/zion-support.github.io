'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Brain, Users, Zap, BarChart, MessageCircle, Globe, Clock } from 'lucide-react';

const AiChatbotEnterprisePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Chatbot Enterprise - Zion Tech Group</title>
        <meta name="description" content="Enterprise AI chatbot solutions by Zion Tech Group. Professional AI and IT solutions for large organizations." />
        <meta name="keywords" content="AI chatbot enterprise, enterprise AI solutions, business automation, customer service AI" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Chatbot
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {' '}Enterprise
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Enterprise-grade AI chatbot solutions designed for large organizations. 
              Scale your customer engagement with advanced AI capabilities and seamless integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Enterprise Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/demo" 
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiChatbotEnterprisePage;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain } from 'lucide-react';

const ZionAIMarketingAutomationProPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Marketing Automation Pro - Advanced Marketing Automation | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered marketing automation with predictive content generation and multi-channel orchestration." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Marketing Automation Pro
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Advanced AI-powered marketing automation with predictive content generation and multi-channel orchestration.
          </p>
          <Link
            to="/contact"
            className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105 mx-auto w-fit"
          >
            Learn More
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ZionAIMarketingAutomationProPage;
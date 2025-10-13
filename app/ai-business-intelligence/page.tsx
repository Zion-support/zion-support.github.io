import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiBusinessIntelligencePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Business Intelligence - Advanced Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Unlock the power of your data with AI-powered business intelligence solutions. Advanced analytics, predictive insights, and data-driven decision making." />
      </Helmet>
      <div className="min-h-screen pt-16">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your data into actionable insights with AI-powered business intelligence
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiBusinessIntelligencePage;
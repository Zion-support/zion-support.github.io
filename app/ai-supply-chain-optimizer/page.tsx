import React from 'react';
import { Helmet } from 'react-helmet-async';

const AISupplyChainOptimizerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimizer Pro - Zion Tech Group</title>
        <meta name="description" content="AI-powered supply chain optimization platform that improves efficiency, reduces costs, and enhances visibility across the entire supply chain." />
        <meta name="keywords" content="AI supply chain, supply chain optimization, logistics AI, supply chain management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="text-8xl mb-8">🚚</div>
              <h1 className="text-5xl md:text-6xl font-bold">
                AI <span className="gradient-text">Supply Chain Optimizer Pro</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                AI-powered supply chain optimization platform that improves efficiency, reduces costs, and enhances visibility across the entire supply chain.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISupplyChainOptimizerPage;
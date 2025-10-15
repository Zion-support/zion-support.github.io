import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiSupplyChainOptimizationProPage = () => {
  return (
    <>
      <Helmet>
        <title>Ai Supply Chain Optimization Pro - Zion Tech Group</title>
        <meta name="description" content="Professional ai supply chain optimization pro services by Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ai Supply Chain Optimization Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional ai supply chain optimization pro services by Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiSupplyChainOptimizationProPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiSupplyChainPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Supply Chain - Intelligent Supply Chain Management | Zion Tech Group</title>
        <meta name="description" content="Optimize supply chain with AI-powered solutions. Demand forecasting, inventory optimization, and supply chain intelligence." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">AI Supply Chain</h1>
          <p className="text-gray-300">Coming Soon - Intelligent supply chain management powered by AI</p>
        </div>
      </div>
    </>
  );
};

export default AiSupplyChainPage;
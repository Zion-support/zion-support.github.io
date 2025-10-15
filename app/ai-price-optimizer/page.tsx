import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIPriceOptimizerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Price Optimizer - Zion Tech Group</title>
        <meta name="description" content="Dynamic pricing optimization platform using AI to maximize revenue and competitiveness in real-time." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Zion AI Price Optimizer</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimize pricing with AI intelligence to maximize revenue and competitiveness in real-time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Dynamic Pricing Models</li>
                <li>• Competitor Analysis</li>
                <li>• Demand Forecasting</li>
                <li>• Price Elasticity Analysis</li>
                <li>• A/B Testing</li>
                <li>• Revenue Optimization</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">$99 - $999/month</div>
              <p className="text-gray-600">Flexible pricing based on products and pricing changes</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIPriceOptimizerPage;
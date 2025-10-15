import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIRealEstateAnalyzerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Real Estate Analyzer - Zion Tech Group</title>
        <meta name="description" content="AI-powered real estate analysis for property valuation, market trends, investment opportunities, and property insights. Make data-driven real estate decisions." />
        <meta name="keywords" content="AI real estate, property analysis, real estate valuation, market analysis, property investment" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Real Estate Analyzer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Make data-driven real estate decisions with AI-powered property analysis, 
              market insights, and investment recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Intelligent Property Analysis
              </h2>
              <p className="text-gray-300 mb-6">
                Our AI Real Estate Analyzer processes vast amounts of market data, 
                property information, and economic indicators to provide accurate 
                valuations, market trends, and investment insights.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Property valuation analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Market trend prediction
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Investment opportunity scoring
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Neighborhood analysis
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Analyze Property</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter property address..."
                  className="w-full p-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-orange-500 focus:outline-none"
                />
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Analyze Property
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Property Valuation</h3>
              <p className="text-gray-300">
                Accurate property valuations based on comprehensive market data analysis.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Market Insights</h3>
              <p className="text-gray-300">
                Real-time market trends and predictions for informed decision making.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Investment Analysis</h3>
              <p className="text-gray-300">
                ROI calculations and investment opportunity scoring for real estate investments.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Make Smarter Real Estate Decisions
            </h2>
            <p className="text-gray-300 mb-8">
              Join real estate professionals and investors using our AI analyzer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start Analysis
              </button>
              <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                View Sample Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIRealEstateAnalyzerPage;
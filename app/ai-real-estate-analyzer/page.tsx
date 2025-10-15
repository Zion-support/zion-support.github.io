import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIRealEstateAnalyzerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Real Estate Analyzer - Zion Tech Group</title>
        <meta name="description" content="Advanced AI Real Estate Analyzer for property valuation, market analysis, and investment insights. Make informed real estate decisions with AI." />
        <meta name="keywords" content="AI real estate analyzer, property valuation, real estate AI, market analysis, property investment, real estate analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-real-estate-analyzer" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
                AI Real Estate Analyzer
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced AI-powered real estate analysis for property valuation, market insights, and investment optimization
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Property Valuation</h2>
                <p className="text-gray-300 mb-4">
                  AI-powered property valuation using market data, comparable sales, and predictive analytics for accurate pricing.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Automated property valuation</li>
                  <li>• Market trend analysis</li>
                  <li>• Comparable sales analysis</li>
                  <li>• Investment potential assessment</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Market Analysis</h2>
                <p className="text-gray-300 mb-4">
                  Comprehensive market analysis with AI-driven insights on neighborhood trends, price movements, and market conditions.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Neighborhood analysis</li>
                  <li>• Price trend forecasting</li>
                  <li>• Market saturation analysis</li>
                  <li>• Growth potential assessment</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Property Search</h3>
                  <p className="text-gray-300 text-sm">AI-powered property search with intelligent filtering</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Investment Analysis</h3>
                  <p className="text-gray-300 text-sm">ROI calculation and investment opportunity analysis</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Market Trends</h3>
                  <p className="text-gray-300 text-sm">Real-time market trend analysis and predictions</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                Get Started with AI Real Estate Analyzer
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIRealEstateAnalyzerPage;
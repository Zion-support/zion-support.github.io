import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIRealEstateAnalyzerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Real Estate Analyzer - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered real estate analysis tool for property valuation, market trends, and investment insights. Make data-driven real estate decisions." />
        <meta name="keywords" content="AI real estate analyzer, property valuation, real estate AI, market analysis, investment insights" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-real-estate-analyzer" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              AI Real Estate Analyzer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Make smarter real estate investments with our AI-powered analysis platform. 
              Get accurate property valuations, market insights, and investment recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-white mb-4">Property Valuation</h3>
              <p className="text-gray-300">
                Get accurate property valuations using AI analysis of market data, location, and property features.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-4">Market Trends</h3>
              <p className="text-gray-300">
                Analyze market trends, price movements, and neighborhood growth patterns with AI insights.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-white mb-4">Investment Analysis</h3>
              <p className="text-gray-300">
                Evaluate investment potential, ROI projections, and risk assessment for real estate properties.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-4">Property Search</h3>
              <p className="text-gray-300">
                Find properties that match your criteria using intelligent search and recommendation algorithms.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">Comparative Analysis</h3>
              <p className="text-gray-300">
                Compare properties side-by-side with detailed analysis of features, pricing, and potential.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-4">Investment Recommendations</h3>
              <p className="text-gray-300">
                Get personalized investment recommendations based on your goals and risk tolerance.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Make Smart Real Estate Decisions?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 neon-glow"
              >
                Get Started Today
              </a>
              <a 
                href="/pricing" 
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIRealEstateAnalyzerPage;
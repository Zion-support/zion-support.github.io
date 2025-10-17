import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import SEOHead from '../components/SEOHead';
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c

const AIRealEstateAnalyzerPage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
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
=======
      <SEOHead
        title="AI Real Estate Analyzer - Zion Tech Group"
        description="AI-powered real estate analysis tool for property valuation, market trends, investment opportunities, and property insights."
        keywords="AI real estate analyzer, property valuation, real estate investment, market analysis, property insights, real estate tech"
        canonicalUrl="https://ziontechgroup.com/ai-real-estate-analyzer"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              AI Real Estate Analyzer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Make informed real estate decisions with AI-powered property analysis, market insights, and investment recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Property Analysis</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Automated property valuation
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Market price comparison
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Investment potential scoring
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Neighborhood analysis
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Risk assessment
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Market Insights</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Market trend analysis
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Price forecasting
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Supply and demand metrics
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Economic indicators
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Investment recommendations
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-emerald-400">Property Valuation</h3>
                <p className="text-gray-300">Accurate property valuations using AI and market data.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Market Analysis</h3>
                <p className="text-gray-300">Comprehensive market trends and investment insights.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">ROI Calculator</h3>
                <p className="text-gray-300">Calculate potential returns on real estate investments.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/contact?service=ai-real-estate-analyzer"
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300"
            >
              Analyze Properties
            </a>
          </div>
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
        </div>
      </div>
    </>
  );
};

export default AIRealEstateAnalyzerPage;
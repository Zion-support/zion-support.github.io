import React from 'react';
import { SEOHead } from '../components/SEOHead';

const AIAutonomousVentureCapitalist: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Autonomous Venture Capitalist | Zion Tech Group"
        description="Revolutionary AI autonomous venture capitalist. Intelligent investment analysis, portfolio management, and venture excellence powered by artificial intelligence."
        keywords="AI autonomous venture capitalist, AI investment, venture capital automation, autonomous investing, intelligent investment, venture capital AI"
        canonicalUrl="https://ziontechgroup.com/ai-autonomous-venture-capitalist"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              AI Autonomous Venture Capitalist
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform investing with our AI Autonomous Venture Capitalist. 
              Intelligent investment analysis, portfolio management, and venture excellence without human bias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-4">
                Intelligent Investment Revolution
              </h2>
              <p className="text-gray-300 text-lg">
                Our AI Autonomous Venture Capitalist represents the future of investment, 
                combining advanced AI with financial analysis for optimal portfolio performance.
              </p>
              <p className="text-gray-300 text-lg">
                From deal sourcing to portfolio management, our AI operates autonomously, 
                ensuring data-driven decisions and optimal returns around the clock.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Investment Capabilities</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                  Deal Sourcing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Due Diligence
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Portfolio Management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Risk Assessment
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Investment Excellence
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Deal Sourcing</h3>
                <p className="text-gray-400">Intelligent opportunity identification</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Due Diligence</h3>
                <p className="text-gray-400">Comprehensive investment analysis</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Portfolio Management</h3>
                <p className="text-gray-400">Intelligent portfolio optimization</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Start Investing
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAutonomousVentureCapitalist;
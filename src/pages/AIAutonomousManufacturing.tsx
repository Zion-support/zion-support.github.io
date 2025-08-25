import React from 'react';
import { SEOHead } from '../components/SEOHead';

const AIAutonomousManufacturing: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Autonomous Manufacturing | Zion Tech Group"
        description="Revolutionary AI autonomous manufacturing platform. Intelligent production, quality control, and manufacturing excellence powered by artificial intelligence."
        keywords="AI autonomous manufacturing, manufacturing automation, AI production, quality control, autonomous manufacturing, intelligent production"
        canonicalUrl="https://ziontechgroup.com/ai-autonomous-manufacturing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-gray-400 via-slate-400 to-zinc-400 bg-clip-text text-transparent">
              AI Autonomous Manufacturing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your production with AI Autonomous Manufacturing. 
              Intelligent production, quality control, and manufacturing excellence without human intervention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-4">
                Intelligent Production Revolution
              </h2>
              <p className="text-gray-300 text-lg">
                Our AI Autonomous Manufacturing platform revolutionizes production operations, 
                combining advanced AI with intelligent automation for optimal manufacturing efficiency.
              </p>
              <p className="text-gray-300 text-lg">
                From production planning to quality control, our AI operates autonomously, 
                ensuring consistent quality and optimal resource utilization around the clock.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Manufacturing Capabilities</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  Production Planning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                  Quality Control
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></span>
                  Predictive Maintenance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-neutral-400 rounded-full mr-3"></span>
                  Supply Chain Integration
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Production Excellence
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Smart Production</h3>
                <p className="text-gray-400">Intelligent production planning</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quality Assurance</h3>
                <p className="text-gray-400">Automated quality control</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-zinc-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Maintenance</h3>
                <p className="text-gray-400">Predictive maintenance</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Start Production
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAutonomousManufacturing;
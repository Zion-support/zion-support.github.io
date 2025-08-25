import React from 'react';
import { SEOHead } from '../components/SEOHead';

const AIAutonomousCreativeDirector: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Autonomous Creative Director | Zion Tech Group"
        description="Revolutionary AI autonomous creative director. Intelligent design automation, creative strategy, and artistic direction powered by artificial intelligence."
        keywords="AI autonomous creative director, creative automation, AI design, creative strategy, artistic direction, design automation"
        canonicalUrl="https://ziontechgroup.com/ai-autonomous-creative-director"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Autonomous Creative Director
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unleash unlimited creativity with our AI Autonomous Creative Director. 
              Intelligent design automation, creative strategy, and artistic direction reimagined.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-4">
                Creative Intelligence Unleashed
              </h2>
              <p className="text-gray-300 text-lg">
                Our AI Autonomous Creative Director represents the future of creative work, 
                combining artistic vision with intelligent automation to deliver stunning results.
              </p>
              <p className="text-gray-300 text-lg">
                From brand strategy to visual design, our creative AI operates autonomously 
                while maintaining the human touch that makes art truly meaningful.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Creative Capabilities</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Brand Strategy Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Visual Design Creation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Creative Campaign Planning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-violet-400 rounded-full mr-3"></span>
                  Artistic Direction
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Creative Excellence
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Brand Strategy</h3>
                <p className="text-gray-400">Intelligent brand development</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Visual Design</h3>
                <p className="text-gray-400">Automated design creation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Campaign Planning</h3>
                <p className="text-gray-400">Strategic creative campaigns</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Start Creating
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAutonomousCreativeDirector;
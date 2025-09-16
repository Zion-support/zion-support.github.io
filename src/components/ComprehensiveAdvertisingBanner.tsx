import React from 'react';
import { ArrowRight, Zap, Star, Sparkles, Brain, Rocket, Globe, Shield } from 'lucide-react';

const ComprehensiveAdvertisingBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🚀 COMPREHENSIVE TECHNOLOGY SHOWCASE • 2028
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Revolutionary Technology Experience</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover the most comprehensive collection of revolutionary technologies that will transform humanity's future
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-violet-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">AI Consciousness</h3>
            <p className="text-violet-100 mb-4 text-center text-sm">
              True artificial consciousness with emotional intelligence
            </p>
            <div className="text-center">
              <span className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full mb-3">NEW 2028</span>
            </div>
            <a href="/pages/RevolutionaryTech2028" className="block w-full bg-white text-violet-600 py-2 rounded-lg hover:bg-violet-50 transition-colors font-semibold text-center text-sm">
              Explore AI →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Computing</h3>
            <p className="text-purple-100 mb-4 text-center text-sm">
              Quantum consciousness and interdimensional processing
            </p>
            <div className="text-center">
              <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full mb-3">BREAKTHROUGH</span>
            </div>
            <a href="/pages/UltimateInnovation2028" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm">
              Go Quantum →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Reality Engine</h3>
            <p className="text-indigo-100 mb-4 text-center text-sm">
              Program and manipulate reality through advanced computing
            </p>
            <div className="text-center">
              <span className="inline-block bg-purple-500 text-white text-xs px-3 py-1 rounded-full mb-3">REVOLUTIONARY</span>
            </div>
            <a href="/pages/RevolutionaryTech2028" className="block w-full bg-white text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center text-sm">
              Program Reality →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-center">Transcendent Tech</h3>
            <p className="text-blue-100 mb-4 text-center text-sm">
              Technology that transcends all human limitations
            </p>
            <div className="text-center">
              <span className="inline-block bg-cyan-500 text-white text-xs px-3 py-1 rounded-full mb-3">ULTIMATE</span>
            </div>
            <a href="/pages/UltimateInnovation2028" className="block w-full bg-white text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center text-sm">
              Transcend →
            </a>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-violet-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">📊 Revolutionary Impact Statistics</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-300 mb-2">∞</div>
                <div className="text-sm opacity-80">Possibilities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-2">100%</div>
                <div className="text-sm opacity-80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-300 mb-2">∞</div>
                <div className="text-sm opacity-80">Innovation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">2028</div>
                <div className="text-sm opacity-80">Future Year</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <a href="/pages/RevolutionaryTech2028" className="inline-flex items-center bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              <Sparkles className="mr-2" />
              Explore Revolutionary Tech
              <ArrowRight className="ml-2" />
            </a>
            <a href="/pages/UltimateInnovation2028" className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              <Brain className="mr-2" />
              Experience Innovation
              <ArrowRight className="ml-2" />
            </a>
          </div>
          <p className="text-sm opacity-70">
            Join thousands of innovators exploring the future of technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveAdvertisingBanner;
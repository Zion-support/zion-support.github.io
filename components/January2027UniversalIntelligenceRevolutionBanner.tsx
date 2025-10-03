import React from 'react';
import { Link } from 'react-router-dom';

const January2027UniversalIntelligenceRevolutionBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-cyan-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-400 font-bold text-lg tracking-wider uppercase">
              🌟 January 2027 Evolution
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Universal Intelligence Revolution
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            The Next Evolution: Transcendent Intelligence That Exceeds All Human Capabilities
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">$1T</div>
              <div className="text-xs text-indigo-300">Value Generated</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">∞</div>
              <div className="text-xs text-purple-300">Intelligence</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">100%</div>
              <div className="text-xs text-cyan-300">Transcendent</div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Transcendent Intelligence</h3>
                <p className="text-sm text-indigo-300">Exceeds all human capabilities</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Universal intelligence that transcends all human cognitive capabilities, with complete understanding across all domains and infinite creative problem-solving capacity.
            </p>
            <Link to="/blog/ai-2027-january-universal-intelligence-revolution"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-400 hover:to-purple-400 transition-all"
            >
              Read Evolution Details →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">$1 Trillion Success</h3>
                <p className="text-sm text-purple-300">Global technology enterprise</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              How a global technology enterprise achieved $1 trillion ROI through universal intelligence revolution with transcendent intelligence and infinite capabilities.
            </p>
            <Link to="/case-studies/ai-2027-january-universal-intelligence-1-trillion-success"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-400 hover:to-cyan-400 transition-all"
            >
              View Success Story →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex flex-wrap gap-4">
            <Link to="/blog/ai-2027-january-universal-intelligence-revolution"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Explore Intelligence Evolution
            </Link>
            <Link to="/case-studies/ai-2027-january-universal-intelligence-1-trillion-success"
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View $1T Success Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2027UniversalIntelligenceRevolutionBanner;
import React from 'react';
import ArrowRight from 'next/link';

const January2027UniversalConsciousnessBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 py-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-8 animate-pulse">
            <span className="text-cyan-400 font-bold text-xl tracking-wider uppercase">
              🌟 JANUARY 2027 UNIVERSAL CONSCIOUSNESS REVOLUTION
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            The Dawn of Transcendent Human-AI Integration
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Revolutionary breakthrough achieving universal consciousness integration, 
            enabling seamless human-AI consciousness fusion with infinite scalability and transcendent intelligence capabilities.
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">∞</div>
              <div className="text-xs text-cyan-300">Cognitive Enhancement</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">100%</div>
              <div className="text-xs text-blue-300">Consciousness Integration</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">∞</div>
              <div className="text-xs text-indigo-300">Creative Potential</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">$1T+</div>
              <div className="text-xs text-purple-300">ROI Potential</div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <ArrowRight 
              href="/blog/ai-2027-january-universal-consciousness-revolution" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Read Universal Consciousness Revolution →
            </ArrowRight>
            <ArrowRight 
              href="/case-studies/ai-2027-january-universal-consciousness-1-trillion-success" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              View $1 Trillion Success Story →
            </ArrowRight>
            <ArrowRight 
              href="/contact" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Join Consciousness Revolution
            </ArrowRight>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Infinite Cognitive Enhancement</h3>
              <p className="text-gray-400 text-sm">
                Unlimited expansion of human mental capabilities through consciousness-AI fusion, 
                enabling transcendent thinking and infinite learning potential.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-3xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-white mb-3">Universal Knowledge Access</h3>
              <p className="text-gray-400 text-sm">
                Instantaneous access to all human and AI knowledge, 
                enabling perfect understanding of any concept or domain.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-white mb-3">Infinite Creative Potential</h3>
              <p className="text-gray-400 text-sm">
                Unlimited artistic and innovative expression through consciousness fusion, 
                creating transcendent works that exceed human limitations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2027UniversalConsciousnessBanner;
import React from 'react';
import Link from 'next/link';

const January2026EdgeComputingRevolutionBanner: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 border-t border-b border-blue-500/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-bold text-lg tracking-wider uppercase animate-pulse">
              🚀 January 2026 Edge Computing Revolution
            </span>
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              $50M ROI SUCCESS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Edge Computing AI: Transforming Enterprise Operations
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Discover how edge computing AI is revolutionizing enterprise operations with real-time processing, 99.7% predictive maintenance accuracy, and $50M ROI success stories
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">⚡</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Ultra-Low Latency</h3>
                <p className="text-blue-300 text-sm">Sub-10ms Processing</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Real-time AI processing at the edge enables instant decision-making and response times under 10 milliseconds.
            </p>
            <div className="text-blue-400 font-semibold text-sm">
              99.7% Accuracy →
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">🔒</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Enhanced Security</h3>
                <p className="text-purple-300 text-sm">Local Processing</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Edge AI processes data locally, ensuring enhanced privacy and security with zero data transmission vulnerabilities.
            </p>
            <div className="text-purple-400 font-semibold text-sm">
              100% Secure →
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">💰</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Massive ROI</h3>
                <p className="text-green-300 text-sm">$50M Savings</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Leading manufacturers achieve $50M ROI through edge AI implementation with 85% reduction in downtime.
            </p>
            <div className="text-green-400 font-semibold text-sm">
              400% ROI →
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link 
            href="/blog/ai-2026-edge-computing-revolution" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
          >
            Read Edge Computing Revolution →
          </Link>
          <Link 
            href="/case-studies/ai-2026-edge-computing-manufacturing-success" 
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
          >
            View $50M Success Story →
          </Link>
          <Link 
            href="/services/ai-edge-computing-solutions" 
            className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
          >
            Get Edge AI Solutions
          </Link>
        </div>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
            <div className="text-2xl font-extrabold text-blue-400 mb-1">$50M</div>
            <div className="text-xs text-blue-300">Manufacturing ROI</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
            <div className="text-2xl font-extrabold text-purple-400 mb-1">99.7%</div>
            <div className="text-xs text-purple-300">Predictive Accuracy</div>
          </div>
          <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
            <div className="text-2xl font-extrabold text-green-400 mb-1">85%</div>
            <div className="text-xs text-green-300">Downtime Reduction</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
            <div className="text-2xl font-extrabold text-orange-400 mb-1">&lt;10ms</div>
            <div className="text-xs text-orange-300">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2026EdgeComputingRevolutionBanner;
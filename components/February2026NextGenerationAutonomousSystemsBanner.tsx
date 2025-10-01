import React from 'react';

const February2026NextGenerationAutonomousSystemsBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 border border-purple-500/20 rounded-2xl p-8 mb-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">BREAKING: FEBRUARY 2026</span>
          </div>
          <div className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full">
            <span className="text-purple-300 text-sm font-semibold">NEWEST RELEASE</span>
          </div>
        </div>

        {/* Main content */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            🤖 Next-Generation Autonomous Systems Breakthrough
          </h2>
          <p className="text-xl text-blue-200 mb-4 leading-relaxed">
            Revolutionary autonomous systems achieving <span className="text-yellow-400 font-semibold">99.99% uptime</span> and 
            <span className="text-yellow-400 font-semibold"> zero human intervention</span> across enterprise operations.
          </p>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-black/20 border border-purple-500/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-400">99.99%</div>
            <div className="text-sm text-blue-200">Uptime</div>
          </div>
          <div className="bg-black/20 border border-purple-500/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">Zero</div>
            <div className="text-sm text-blue-200">Human Intervention</div>
          </div>
          <div className="bg-black/20 border border-purple-500/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">87%</div>
            <div className="text-sm text-blue-200">Cost Reduction</div>
          </div>
          <div className="bg-black/20 border border-purple-500/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">$2.7B</div>
            <div className="text-sm text-blue-200">Savings</div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">🚀 Revolutionary Capabilities:</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-blue-200">Self-Evolving Neural Networks</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-blue-200">Predictive Maintenance</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-blue-200">Dynamic Resource Allocation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-blue-200">Cross-System Collaboration</span>
            </div>
          </div>
        </div>

        {/* Enterprise applications */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">🏢 Enterprise Applications:</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/20 border border-blue-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-blue-300 mb-2">Manufacturing</h4>
              <p className="text-sm text-blue-200">Self-optimizing production lines with predictive quality control</p>
            </div>
            <div className="bg-black/20 border border-purple-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-purple-300 mb-2">Finance</h4>
              <p className="text-sm text-blue-200">Autonomous trading and risk management systems</p>
            </div>
            <div className="bg-black/20 border border-green-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-green-300 mb-2">Healthcare</h4>
              <p className="text-sm text-blue-200">Self-diagnosing medical systems and predictive care</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center space-x-4">
            <a 
              href="/blog/ai-2026-february-next-generation-autonomous-systems-breakthrough"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              📖 Read Full Article
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a 
              href="/services/autonomous-systems-implementation"
              className="inline-flex items-center px-6 py-3 border border-purple-500/50 hover:border-purple-400 text-purple-300 hover:text-purple-200 font-semibold rounded-lg transition-all duration-200"
            >
              🚀 Get Started
            </a>
          </div>
          <div className="text-sm text-blue-300">
            <span className="font-semibold">Published:</span> February 15, 2026
          </div>
        </div>
      </div>
    </div>
  );
};

export default February2026NextGenerationAutonomousSystemsBanner;
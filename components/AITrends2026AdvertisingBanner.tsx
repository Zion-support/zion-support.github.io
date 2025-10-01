import React from 'react';

export default function AITrends2026AdvertisingBanner() {
  return (
    <section className="py-12 bg-gradient-to-br from-slate-800 via-blue-900 to-purple-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Banner */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-500/50 mb-4">
              <span className="text-cyan-300 font-bold text-lg tracking-wider uppercase">
                🔮 AI Trends 2026
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Future Enterprise Transformation
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              Discover the revolutionary AI trends reshaping enterprise operations in 2026, from 
              <span className="text-cyan-400 font-bold"> conscious quantum intelligence</span> to 
              <span className="text-blue-400 font-bold"> autonomous business systems</span> and 
              <span className="text-purple-400 font-bold"> neuromorphic architectures</span>.
            </p>
            
            {/* Key Trends */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-lg p-3 border border-purple-500/30">
                <div className="text-lg mb-1">🧠</div>
                <div className="text-xs text-purple-300">Conscious AI</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-3 border border-blue-500/30">
                <div className="text-lg mb-1">🤖</div>
                <div className="text-xs text-blue-300">Autonomous Ops</div>
              </div>
              <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-lg p-3 border border-cyan-500/30">
                <div className="text-lg mb-1">⚛️</div>
                <div className="text-xs text-cyan-300">Neuromorphic</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-lg p-3 border border-green-500/30">
                <div className="text-lg mb-1">🔮</div>
                <div className="text-xs text-green-300">Predictive BI</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-lg p-3 border border-orange-500/30">
                <div className="text-lg mb-1">🌐</div>
                <div className="text-xs text-orange-300">Edge AI</div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/blog/ai-trends-2026-future-enterprise-transformation"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
              >
                Read Full Trends Report →
              </a>
              <a 
                href="/blog/ai-2026-may-revolutionary-breakthrough"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Learn About Breakthrough →
              </a>
              <a 
                href="/contact"
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Get Expert Consultation
              </a>
            </div>
          </div>
          
          {/* Industry Applications Preview */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/30">
            <h3 className="text-lg font-bold text-white mb-4">Industry Applications</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl mb-2">🏦</div>
                <div className="text-gray-300">Finance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🏥</div>
                <div className="text-gray-300">Healthcare</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🏭</div>
                <div className="text-gray-300">Manufacturing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">💻</div>
                <div className="text-gray-300">Technology</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🚗</div>
                <div className="text-gray-300">Transportation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🛒</div>
                <div className="text-gray-300">Retail</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
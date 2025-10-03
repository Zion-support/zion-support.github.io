import { Link } from 'react-router-dom';

const January2026QuantumConsciousnessBIBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-violet-900/20 via-cyan-900/20 to-purple-900/20 border border-violet-500/30 rounded-2xl p-8 mb-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-violet-400 rounded-full animate-pulse"></div>
            <span className="text-violet-400 font-bold text-sm uppercase tracking-wider">January 2026</span>
            <div className="w-8 h-px bg-gradient-to-r from-violet-400 to-transparent"></div>
            <span className="text-cyan-400 font-semibold text-sm">Quantum Consciousness BI</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-violet-500/20 rounded-full border border-violet-500/30">
            <span className="text-violet-300 text-xs font-semibold">🧠 BREAKTHROUGH</span>
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-violet-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Quantum Consciousness BI Revolution
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Experience <span className="text-violet-400 font-bold">10,000x faster data processing</span> with our 
              revolutionary quantum consciousness business intelligence. Achieve <span className="text-cyan-400 font-bold">99.99% accuracy</span> 
              and unlock <span className="text-purple-400 font-bold">$8.7B in strategic insights</span> through consciousness-driven analytics.
            </p>

            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-violet-500/10 border border-violet-500/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-violet-400 mb-1">10,000x</div>
                <div className="text-xs text-violet-300">Processing Speed</div>
              </div>
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-cyan-400 mb-1">$8.7B</div>
                <div className="text-xs text-cyan-300">Strategic Insights</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/blog/ai-2026-january-quantum-consciousness-bi-breakthrough"
                className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-violet-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Read Full Article
              </Link>
              <Link to="/services/quantum-consciousness-bi"
                className="border border-violet-500 text-violet-300 px-6 py-3 rounded-lg font-semibold hover:bg-violet-500/10 transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* Feature highlights */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-violet-500/10 to-transparent border border-violet-500/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                  <span className="text-violet-300 font-semibold">Quantum Pattern Recognition</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Identify complex patterns in multi-dimensional datasets</p>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-cyan-300 font-semibold">Consciousness Context Analysis</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">AI that understands business context and market dynamics</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-purple-300 font-semibold">Predictive Intelligence</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Forecast business outcomes with remarkable accuracy</p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-violet-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-purple-400/20 to-emerald-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-8 pt-6 border-t border-gray-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-lg font-bold text-violet-400">99.99%</div>
              <div className="text-xs text-gray-400">Analytical Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-cyan-400">94%</div>
              <div className="text-xs text-gray-400">Decision Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-400">87%</div>
              <div className="text-xs text-gray-400">Analysis Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-emerald-400">76%</div>
              <div className="text-xs text-gray-400">Predictive Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default January2026QuantumConsciousnessBIBanner;
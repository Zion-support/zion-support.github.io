// import React from 'react';

const October2025EdgeIntelligenceRevolutionBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-16 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full mb-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 mr-2"></span>
            <span className="text-sm font-semibold text-emerald-200">NEW OCTOBER 2025</span>
          </div>
          
          {/* Main headline */}
          <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            ⚡ Edge Computing Intelligence
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text">
              Brings AI to the Edge
            </span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Ultra-low latency, 90% cost reduction, enhanced privacy with distributed intelligence
          </p>
        </div>
        
        {/* Key benefits grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-emerald-400 mb-2">&lt;5ms</div>
            <div className="text-sm text-gray-300">Ultra-Low Latency</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-teal-400 mb-2">90%</div>
            <div className="text-sm text-gray-300">Cost Reduction</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-cyan-400 mb-2">78%</div>
            <div className="text-sm text-gray-300">Downtime Reduction</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-sm text-gray-300">Offline Operation</div>
          </div>
        </div>
        
        {/* Use cases */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/5 backdrop-blur-md rounded-lg p-5 border border-white/10 hover:border-emerald-400/50 transition-all">
            <div className="text-3xl mb-2">🏭</div>
            <h4 className="text-lg font-bold mb-2">Manufacturing</h4>
            <p className="text-sm text-gray-300">Predictive maintenance at scale</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-lg p-5 border border-white/10 hover:border-teal-400/50 transition-all">
            <div className="text-3xl mb-2">🛒</div>
            <h4 className="text-lg font-bold mb-2">Smart Retail</h4>
            <p className="text-sm text-gray-300">Checkout-free shopping</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-lg p-5 border border-white/10 hover:border-cyan-400/50 transition-all">
            <div className="text-3xl mb-2">🏥</div>
            <h4 className="text-lg font-bold mb-2">Healthcare</h4>
            <p className="text-sm text-gray-300">Remote patient monitoring</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-lg p-5 border border-white/10 hover:border-blue-400/50 transition-all">
            <div className="text-3xl mb-2">🚗</div>
            <h4 className="text-lg font-bold mb-2">Autonomous Vehicles</h4>
            <p className="text-sm text-gray-300">Real-time perception</p>
          </div>
        </div>
        
        {/* Main content link */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <div className="text-emerald-400 text-sm font-semibold mb-2">📖 COMPREHENSIVE GUIDE</div>
              <h3 className="text-2xl font-bold mb-2">Edge Computing Intelligence Revolution</h3>
              <p className="text-gray-300 mb-4">
                Complete guide to edge AI architecture, hardware platforms, implementation best practices, and real-world use cases
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>✓ Three-tier edge intelligence architecture</li>
                <li>✓ Model optimization techniques (quantization, pruning, distillation)</li>
                <li>✓ 5+ enterprise use cases with proven ROI</li>
                <li>✓ Complete technology stack and implementation roadmap</li>
              </ul>
            </div>
            <a 
              href="/blog/ai-2025-oct-edge-computing-intelligence-revolution"
              className="shrink-0 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full text-white font-bold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all shadow-xl"
            >
              Read Full Guide →
            </a>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Ready to bring AI to the edge?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/services/ai-2025-october-real-time-adaptive-ml-platform"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all"
            >
              View Edge AI Services
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full text-white font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all"
            >
              Schedule Consultation →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025EdgeIntelligenceRevolutionBanner;

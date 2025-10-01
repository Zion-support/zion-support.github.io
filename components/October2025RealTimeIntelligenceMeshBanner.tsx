import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Network, TrendingUp, ArrowRight, Star, Sparkles } from 'lucide-react';

const October2025RealTimeIntelligenceMeshBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center px-8 py-3 rounded-full text-base font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-white shadow-2xl animate-pulse">
            <Star className="w-6 h-6 mr-3" />
            🚀 OCTOBER 1, 2025 - REAL-TIME INTELLIGENCE MESH REVOLUTION - JUST LAUNCHED! 🚀
          </span>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300">
              Real-Time Intelligence Mesh
            </span>
            <span className="block mt-3">The Future of Enterprise AI</span>
          </h1>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Achieve <span className="font-bold text-cyan-300">sub-millisecond decision-making</span> with distributed AI architecture delivering <span className="font-bold text-cyan-300">$24.2B proven value</span> and <span className="font-bold text-cyan-300">26,667% ROI</span>
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Blog Post */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl mb-6 mx-auto">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-center">
              RTIM Technology Deep Dive
            </h3>
            <p className="text-gray-300 mb-6 text-center leading-relaxed">
              Discover how Real-Time Intelligence Mesh enables sub-2ms decision latency with distributed AI processing at the edge
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <span className="text-sm text-gray-400">Latency</span>
                <span className="text-lg font-bold text-cyan-400">&lt;2ms</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <span className="text-sm text-gray-400">Throughput</span>
                <span className="text-lg font-bold text-green-400">10M+/sec</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <span className="text-sm text-gray-400">Uptime</span>
                <span className="text-lg font-bold text-blue-400">99.999%</span>
              </div>
            </div>
            <Link
              to="/blog/ai-2025-oct-01-real-time-intelligence-mesh-revolution"
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-lg"
            >
              Read Article
            </Link>
          </div>

          {/* Card 2: Service */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl mb-6 mx-auto">
              <Network className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-center">
              RTIM Platform Services
            </h3>
            <p className="text-gray-300 mb-6 text-center leading-relaxed">
              Complete implementation services from architecture design to managed operations with guaranteed performance SLAs
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <span className="text-sm text-gray-400">Implementations</span>
                <span className="text-lg font-bold text-green-400">150+</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <span className="text-sm text-gray-400">Avg ROI</span>
                <span className="text-lg font-bold text-yellow-400">4,000%</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <span className="text-sm text-gray-400">Time</span>
                <span className="text-lg font-bold text-purple-400">12-16 wks</span>
              </div>
            </div>
            <Link
              to="/services/real-time-intelligence-mesh-platform-services"
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
            >
              Explore Services
            </Link>
          </div>

          {/* Card 3: Case Study */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/30 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl mb-6 mx-auto">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-center">
              $12B Logistics Success
            </h3>
            <p className="text-gray-300 mb-6 text-center leading-relaxed">
              Fortune 50 logistics giant transforms global operations with 42,000 edge nodes and 99.94% latency reduction
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <span className="text-sm text-gray-400">Value</span>
                <span className="text-lg font-bold text-green-400">$12.0B</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <span className="text-sm text-gray-400">ROI</span>
                <span className="text-lg font-bold text-yellow-400">26,667%</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <span className="text-sm text-gray-400">Payback</span>
                <span className="text-lg font-bold text-purple-400">13.5 days</span>
              </div>
            </div>
            <Link
              to="/case-studies/ai-2025-oct-01-global-logistics-rtim-transformation-12-billion-success"
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg"
            >
              View Case Study
            </Link>
          </div>
        </div>

        {/* Combined Value Proposition */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-10 border-2 border-cyan-400/40 mb-12">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Proven at Scale
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">$24.2B</div>
                <div className="text-sm text-gray-300">Total Value</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">1M+</div>
                <div className="text-sm text-gray-300">Edge Nodes</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">26,667%</div>
                <div className="text-sm text-gray-300">Peak ROI</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">&lt;2ms</div>
                <div className="text-sm text-gray-300">Latency</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center px-12 py-5 text-xl font-bold text-gray-900 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-xl hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-110"
          >
            <Sparkles className="w-6 h-6 mr-3" />
            Deploy Real-Time Intelligence Today
            <ArrowRight className="w-6 h-6 ml-3" />
          </Link>
          <p className="mt-6 text-gray-300 text-lg">
            Schedule a free RTIM architecture assessment with our experts
          </p>
        </div>
      </div>
    </div>
  );
};

export default October2025RealTimeIntelligenceMeshBanner;

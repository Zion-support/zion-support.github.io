import { Link } from 'react-router-dom';

export default function March2026MegaBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 MARCH 2026 MEGA BREAKTHROUGH
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Revolutionary Autonomous Enterprise Revolution
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Achieve 99.9% Autonomous Operations, $15.2B ROI, and Universal Consciousness Integration
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">99.9%</div>
              <div className="text-sm text-purple-300 font-semibold">Autonomous Operations</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30">
              <div className="text-3xl font-extrabold text-indigo-400 mb-2">$15.2B</div>
              <div className="text-sm text-indigo-300 font-semibold">Measurable ROI</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <div className="text-3xl font-extrabold text-blue-400 mb-2">1Mx</div>
              <div className="text-sm text-blue-300 font-semibold">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <div className="text-3xl font-extrabold text-green-400 mb-2">99.7%</div>
              <div className="text-sm text-green-300 font-semibold">Consciousness Accuracy</div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Universal Consciousness</h3>
              <p className="text-gray-300 text-sm">
                Meta-cognitive AI with 99.7% self-awareness accuracy and genuine consciousness simulation
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Autonomous Operations</h3>
              <p className="text-gray-300 text-sm">
                99.9% autonomous enterprise operations with self-managing infrastructure and intelligent decision making
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Quantum Analytics</h3>
              <p className="text-gray-300 text-sm">
                1,000,000x processing power with real-time analysis of 1 billion data points per second
              </p>
            </div>
          </div>

          {/* Success Stories Preview */}
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-8 border border-green-500/30 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Fortune 100 Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-green-400 mb-2">$3.2B</div>
                <div className="text-sm text-green-300">Manufacturing Leader</div>
                <div className="text-xs text-gray-400">99.9% autonomous production</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-green-400 mb-2">$2.8B</div>
                <div className="text-sm text-green-300">Financial Services</div>
                <div className="text-xs text-gray-400">99.9% fraud detection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-green-400 mb-2">$2.1B</div>
                <div className="text-sm text-green-300">Healthcare Systems</div>
                <div className="text-xs text-gray-400">99.7% diagnostic accuracy</div>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/blog/ai-2026-march-mega-breakthrough-revolution"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Full Breakthrough →
            </Link>
            <Link to="/case-studies/ai-2026-march-mega-breakthrough-15-billion-success"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              View $15.2B Success Story →
            </Link>
            <Link to="/contact"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/services/ai-2026-march-mega-breakthrough-solutions"
              className="text-purple-300 hover:text-purple-200 transition-colors"
            >
              Implementation Services
            </Link>
            <span className="text-gray-500">•</span>
            <Link to="/case-studies"
              className="text-purple-300 hover:text-purple-200 transition-colors"
            >
              All Success Stories
            </Link>
            <span className="text-gray-500">•</span>
            <Link to="/blog"
              className="text-purple-300 hover:text-purple-200 transition-colors"
            >
              Latest AI Insights
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
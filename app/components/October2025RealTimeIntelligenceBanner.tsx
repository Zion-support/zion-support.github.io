import Link from 'next/link';

export default function October2025RealTimeIntelligenceBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-indigo-950 to-purple-950 py-16 border-y-4 border-blue-500/30">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* NEW Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white/20 animate-pulse">
            <span className="text-white font-bold text-lg tracking-wider">
              🚀 NEW OCTOBER 2025 BREAKTHROUGH
            </span>
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
              JUST RELEASED
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Real-Time Enterprise Intelligence Platform Revolution
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-center text-blue-200 mb-8 max-w-4xl mx-auto font-semibold">
          Transform Business Decision-Making with AI-Powered Intelligence • 99.97% Accuracy • 3.7ms Response Time • $8.4B ROI Achievement
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-5 border border-blue-400/30 transform hover:scale-105 transition-transform">
            <div className="text-3xl font-extrabold text-blue-300 mb-2">99.97%</div>
            <div className="text-sm text-blue-200">Decision Accuracy</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-5 border border-purple-400/30 transform hover:scale-105 transition-transform">
            <div className="text-3xl font-extrabold text-purple-300 mb-2">3.7ms</div>
            <div className="text-sm text-purple-200">Response Time</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-5 border border-green-400/30 transform hover:scale-105 transition-transform">
            <div className="text-3xl font-extrabold text-green-300 mb-2">$8.4B</div>
            <div className="text-sm text-green-200">Fortune 100 ROI</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-5 border border-orange-400/30 transform hover:scale-105 transition-transform">
            <div className="text-3xl font-extrabold text-orange-300 mb-2">89%</div>
            <div className="text-sm text-orange-200">Decision Automation</div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">Lightning-Fast Intelligence</h3>
            <p className="text-gray-300 text-sm">Real-time insights in 3.7ms average response time. Make critical decisions in milliseconds, not days.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-2">Near-Perfect Accuracy</h3>
            <p className="text-gray-300 text-sm">99.97% decision accuracy powered by advanced AI models and real-time analytics across 10,000+ data sources.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-white mb-2">Massive ROI Generation</h3>
            <p className="text-gray-300 text-sm">Fortune 100 achieved $8.4B ROI in 18 months. 700x return on investment with 4-8 month payback period.</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/blog/ai-2025-oct-01-real-time-enterprise-intelligence-platform-revolution"
            className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
          >
            <span>Read Full Breakthrough Article</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/case-studies/ai-2025-oct-01-global-enterprise-real-time-intelligence-8-4-billion-success"
            className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
          >
            <span>View $8.4B Success Story</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/services/real-time-enterprise-intelligence-platform-2025"
            className="group relative inline-flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-300 hover:bg-purple-500 hover:text-white hover:border-purple-500 font-bold py-4 px-8 rounded-xl transition-all duration-300"
          >
            <span>Explore Platform Services</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-blue-200 text-sm font-semibold mb-2">
            ✨ Featured Technologies: Real-Time Analytics • Cognitive AI • Decision Automation • Unified Data Fabric
          </p>
          <p className="text-gray-400 text-xs">
            Published: October 1, 2025 • Industry: Enterprise AI Solutions • Success Rate: 98% Implementation Success
          </p>
        </div>
      </div>
    </section>
  );
}

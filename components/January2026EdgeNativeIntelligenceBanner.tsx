import { Link } from 'react-router-dom';

export default function January2026EdgeNativeIntelligenceBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🚀 NEW 2026 BREAKTHROUGH
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              50x PERFORMANCE
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI 2026: Edge-Native Intelligence Revolution
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the revolutionary edge-native AI that's delivering 50x performance improvements, 
            sub-10ms latency, and 99.9% uptime across distributed enterprise systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-cyan-300">50x Performance</h3>
            <p className="text-gray-300 mb-4">
              Edge-native AI processes data 50x faster than traditional cloud-based systems, 
              enabling real-time decision making across all enterprise operations.
            </p>
            <div className="text-2xl font-bold text-cyan-400">50x Faster</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-3 text-green-300">99.9% Uptime</h3>
            <p className="text-gray-300 mb-4">
              Unprecedented reliability with offline-first architecture, eliminating network 
              dependencies and ensuring continuous operations.
            </p>
            <div className="text-2xl font-bold text-green-400">99.9% Uptime</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3 text-yellow-300">$3.2B ROI</h3>
            <p className="text-gray-300 mb-4">
              Fortune 500 manufacturing company achieved $3.2B ROI in just 18 months 
              with edge-native AI implementation.
            </p>
            <div className="text-2xl font-bold text-yellow-400">$3.2B ROI</div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/blog/ai-2026-edge-native-intelligence-revolution"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Read Full Article →
            </Link>
            <Link to="/case-studies/ai-2026-edge-native-intelligence-mega-success"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Success Story →
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Join the edge-native AI revolution and transform your enterprise operations
          </p>
        </div>
      </div>
    </section>
  );
}
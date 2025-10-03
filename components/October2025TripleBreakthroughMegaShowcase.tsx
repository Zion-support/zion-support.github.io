import { Link } from 'react-router-dom';

export default function October2025TripleBreakthroughMegaShowcase() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-24 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-fuchsia-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Mega announcement badge */}
        <div className="flex justify-center mb-10">
          <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-gray-900 px-10 py-4 rounded-full text-lg font-black uppercase tracking-wider animate-pulse shadow-2xl border-4 border-white/30">
            🚀 MEGA LAUNCH: OCTOBER 1, 2025 - 3 REVOLUTIONARY AI BREAKTHROUGHS! 🚀
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-center mb-8 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-emerald-300">
            The AI Revolution
          </span>
          <br />
          <span className="text-white">Is Here Now</span>
        </h1>

        {/* Subtitle */}
        <p className="text-3xl md:text-4xl text-center mb-12 text-purple-200 max-w-6xl mx-auto font-light">
          Three groundbreaking technologies transforming enterprise AI with proven $47.4B combined value
        </p>

        {/* Total impact metrics */}
        <div className="bg-gradient-to-r from-yellow-900/40 to-red-900/40 backdrop-blur-sm rounded-3xl p-10 mb-12 border-4 border-yellow-400/40 shadow-2xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-yellow-300">
            Combined Enterprise Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-black text-yellow-300 mb-3">$47.4B</div>
              <div className="text-lg text-yellow-100">Total Annual Value</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-green-300 mb-3">18,080%</div>
              <div className="text-lg text-yellow-100">Combined ROI</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-cyan-300 mb-3">99.95%</div>
              <div className="text-lg text-yellow-100">Avg Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-purple-300 mb-3">3</div>
              <div className="text-lg text-yellow-100">Fortune 100 Wins</div>
            </div>
          </div>
        </div>

        {/* Three breakthrough cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Distributed Intelligence Networks */}
          <div className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-cyan-400/40 hover:border-cyan-400/70 transition transform hover:scale-105">
            <div className="text-5xl mb-4 text-center">🌐</div>
            <h3 className="text-2xl font-bold text-cyan-300 mb-3 text-center">
              Distributed Intelligence Networks
            </h3>
            <p className="text-cyan-100 mb-4 text-center text-sm">
              Real-time AI collaboration across 50,000+ global nodes
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-yellow-300">$9.4B</div>
                <div className="text-xs text-cyan-200">Value</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-300">4,287%</div>
                <div className="text-xs text-cyan-200">ROI</div>
              </div>
            </div>
            <Link
              to="/blog/ai-2025-october-distributed-intelligence-networks"
              className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg text-center transition"
            >
              Learn More
            </Link>
          </div>

          {/* Neurosynaptic Cloud */}
          <div className="bg-gradient-to-br from-violet-800/50 to-fuchsia-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-fuchsia-400/40 hover:border-fuchsia-400/70 transition transform hover:scale-105">
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold text-fuchsia-300 mb-3 text-center">
              Neurosynaptic Cloud Architecture
            </h3>
            <p className="text-fuchsia-100 mb-4 text-center text-sm">
              Brain-inspired computing with 100,000x efficiency
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-yellow-300">$15.7B</div>
                <div className="text-xs text-fuchsia-200">Value</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-300">5,942%</div>
                <div className="text-xs text-fuchsia-200">ROI</div>
              </div>
            </div>
            <Link
              to="/blog/ai-2025-october-neurosynaptic-cloud-architecture"
              className="block w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-4 rounded-lg text-center transition"
            >
              Learn More
            </Link>
          </div>

          {/* Autonomous Enterprise Symphony */}
          <div className="bg-gradient-to-br from-emerald-800/50 to-teal-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-teal-400/40 hover:border-teal-400/70 transition transform hover:scale-105">
            <div className="text-5xl mb-4 text-center">🎭</div>
            <h3 className="text-2xl font-bold text-teal-300 mb-3 text-center">
              Autonomous Enterprise Symphony
            </h3>
            <p className="text-teal-100 mb-4 text-center text-sm">
              Complete business orchestration with 98.7% automation
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-yellow-300">$22.3B</div>
                <div className="text-xs text-teal-200">Value</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-300">7,851%</div>
                <div className="text-xs text-teal-200">ROI</div>
              </div>
            </div>
            <Link
              to="/blog/ai-2025-october-autonomous-enterprise-symphony"
              className="block w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg text-center transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-8">
            Transform Your Enterprise with Next-Generation AI
          </h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 hover:from-yellow-500 hover:via-orange-500 hover:to-red-500 text-gray-900 font-bold py-6 px-12 rounded-xl text-2xl transition transform hover:scale-105 shadow-2xl">
              🚀 Schedule Executive Briefing
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-4 border-white/40 text-white font-bold py-6 px-12 rounded-xl text-2xl transition transform hover:scale-105">
              📊 Download All Whitepapers
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center mb-10">
          <p className="text-purple-300 font-semibold mb-6 text-2xl">
            Join Industry Leaders Already Transforming with These Technologies
          </p>
          <div className="flex justify-center gap-8 flex-wrap text-lg">
            <span className="bg-white/10 px-8 py-4 rounded-xl border-2 border-white/20">🏢 Fortune 10 Enterprises</span>
            <span className="bg-white/10 px-8 py-4 rounded-xl border-2 border-white/20">🏦 Global Financial Services</span>
            <span className="bg-white/10 px-8 py-4 rounded-xl border-2 border-white/20">🏭 Manufacturing Leaders</span>
            <span className="bg-white/10 px-8 py-4 rounded-xl border-2 border-white/20">🚀 Technology Innovators</span>
          </div>
        </div>

        {/* Urgency message */}
        <div className="text-center">
          <div className="inline-block bg-red-900/40 border-4 border-red-400/60 rounded-2xl px-10 py-6">
            <p className="text-red-300 font-bold text-2xl">
              ⚠️ EARLY ADOPTER ADVANTAGE: Organizations implementing now gain 3-5 year competitive lead
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

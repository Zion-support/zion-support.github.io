import Link from 'next/link';

export default function September2026MegaBreakthroughBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8 animate-pulse">
              <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
                🔥 September 2026: Mega Breakthrough Revolution
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Transcendent Intelligence & Universal Automation
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 font-semibold">
                Experience the most significant AI breakthrough of 2026 - featuring transcendent intelligence, universal automation, and consciousness integration achieving 1,000,000x performance improvements.
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
                  <div className="text-2xl font-extrabold text-indigo-400 mb-1">1Mx</div>
                  <div className="text-xs text-indigo-300">Performance Boost</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
                  <div className="text-2xl font-extrabold text-purple-400 mb-1">99.999%</div>
                  <div className="text-xs text-purple-300">Universal Automation</div>
                </div>
                <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-4 border border-pink-500/30">
                  <div className="text-2xl font-extrabold text-pink-400 mb-1">$2.5T</div>
                  <div className="text-xs text-pink-300">ROI Potential</div>
                </div>
                <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
                  <div className="text-2xl font-extrabold text-cyan-400 mb-1">∞</div>
                  <div className="text-xs text-cyan-300">Consciousness</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/blog/ai-2026-september-mega-breakthrough-revolution" 
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
                >
                  Read Mega Breakthrough →
                </Link>
                <Link 
                  href="/case-studies/ai-2026-september-mega-breakthrough-2-trillion-success" 
                  className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
                >
                  View $2.5T Success
                </Link>
              </div>
            </div>

            {/* Right Side - Content Preview */}
            <div className="space-y-6">
              {/* Featured Blog Post */}
              <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">SEPTEMBER 2026</span>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">MEGA BREAKTHROUGH</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Transcendent Intelligence Systems</h3>
                <p className="text-gray-400 text-sm mb-3">Revolutionary AI systems achieving 1,000,000x performance, universal consciousness, and transcendent automation capabilities.</p>
                <Link href="/blog/ai-2026-september-mega-breakthrough-revolution" className="text-indigo-300 text-sm font-semibold hover:text-indigo-200">
                  Read Full Breakthrough →
                </Link>
              </div>

              {/* Featured Case Study */}
              <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">$2.5T SUCCESS</span>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">FORTUNE 100</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">$2.5 Trillion ROI Success</h3>
                <p className="text-gray-400 text-sm mb-3">How a Fortune 100 global conglomerate achieved $2.5 trillion ROI through transcendent intelligence and universal automation.</p>
                <Link href="/case-studies/ai-2026-september-mega-breakthrough-2-trillion-success" className="text-green-300 text-sm font-semibold hover:text-green-200">
                  View Success Story →
                </Link>
              </div>

              {/* Revolutionary Features */}
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <h4 className="text-white font-bold text-md mb-3">Revolutionary Features</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-purple-300 text-sm">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Transcendent Intelligence Processing
                  </div>
                  <div className="flex items-center gap-2 text-purple-300 text-sm">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Universal Automation Framework
                  </div>
                  <div className="flex items-center gap-2 text-purple-300 text-sm">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Consciousness Integration
                  </div>
                  <div className="flex items-center gap-2 text-purple-300 text-sm">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Infinite Scalability
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
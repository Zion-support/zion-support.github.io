import { Link } from 'react-router-dom';

export default function Ultimate2026ContentShowcaseMegaBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'pulse 4s ease-in-out infinite'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-lg font-bold animate-pulse">
              🚀 NEW 2026 CONTENT
            </span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-bold">
              BREAKTHROUGH INSIGHTS
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400">
              Ultimate AI Content Collection
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Discover the most revolutionary AI breakthroughs, success stories, and implementation guides that are 
            <span className="text-yellow-400 font-bold"> transforming businesses worldwide</span> in 2026
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Major Breakthroughs */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black text-lg">⚛️</span>
              Quantum Revolution
            </h3>
            
            <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/60 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">Quantum Machine Learning Revolution</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    1 million times faster AI training with quantum-enhanced neural networks. Fortune 500 companies achieving $100M+ ROI.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      1M TIMES FASTER
                    </span>
                    <Link to="/blog/ai-2027-quantum-machine-learning-revolution"
                      className="text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors"
                    >
                      Read Breakthrough →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 hover:border-green-400/60 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🧬</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">$2.5B Pharmaceutical Breakthrough</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Quantum ML reducing drug discovery from 10 years to 3 months with 47% success rate and three FDA-approved drugs.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      $2.5B VALUE
                    </span>
                    <Link to="/case-studies/ai-2027-quantum-pharmaceutical-breakthrough"
                      className="text-green-400 hover:text-green-300 font-semibold text-sm transition-colors"
                    >
                      View Success →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/60 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">☁️</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">Autonomous Cloud Infrastructure</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    99.9% uptime with zero human intervention. Fortune 500 company achieved $75M ROI through autonomous cloud management.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      99.9% UPTIME
                    </span>
                    <Link to="/blog/ai-2026-autonomous-cloud-infrastructure-breakthrough"
                      className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Success Stories */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-black text-lg">🏆</span>
              Success Stories
            </h3>
            
            <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 backdrop-blur-sm border border-orange-500/30 rounded-xl p-6 hover:border-orange-400/60 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💰</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">$75M Enterprise ROI</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Fortune 500 financial services company achieved 99.97% uptime and massive cost savings with autonomous infrastructure.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-gradient-to-r from-orange-400 to-red-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      $75M ROI
                    </span>
                    <Link to="/case-studies/ai-2026-autonomous-cloud-enterprise-success"
                      className="text-orange-400 hover:text-orange-300 font-semibold text-sm transition-colors"
                    >
                      Read Case Study →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-900/50 to-purple-900/50 backdrop-blur-sm border border-pink-500/30 rounded-xl p-6 hover:border-pink-400/60 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔮</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">Future Enterprise 2026</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Complete transformation blueprint for building AI-powered enterprises with autonomous operations and quantum-enhanced capabilities.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      BLUEPRINT
                    </span>
                    <Link to="/blog/ai-future-enterprise-2026"
                      className="text-pink-400 hover:text-pink-300 font-semibold text-sm transition-colors"
                    >
                      Get Blueprint →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-900/50 to-blue-900/50 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-6 hover:border-indigo-400/60 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">Next-Gen AI Automation</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Achieve 99% automation rates with next-generation AI automation technologies reshaping enterprise operations.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-gradient-to-r from-indigo-400 to-blue-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      99% AUTOMATION
                    </span>
                    <Link to="/blog/ai-next-generation-automation-2026"
                      className="text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors"
                    >
                      Read Guide →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">1M+</div>
            <div className="text-gray-300 text-sm">Times Faster AI Training</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">$2.5B</div>
            <div className="text-gray-300 text-sm">Pharmaceutical Breakthrough Value</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-gray-300 text-sm">Autonomous Infrastructure Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-gray-300 text-sm">Fortune 500 Companies Using Our AI</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link to="/blog"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-10 py-4 rounded-lg font-bold text-xl hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <span>📚</span>
              Explore All AI Content
            </Link>
            <Link to="/case-studies"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-lg font-bold text-xl hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <span>🏆</span>
              View Success Stories
            </Link>
          </div>
          
          <div className="text-gray-400 text-sm max-w-3xl mx-auto">
            <p className="mb-2">
              <span className="text-yellow-400 font-semibold">Join 500+ Fortune 500 companies</span> already using our AI solutions
            </p>
            <p>
              Get exclusive access to breakthrough insights, implementation guides, and ROI analysis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
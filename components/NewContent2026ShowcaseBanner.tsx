import { Link } from 'react-router-dom';

export default function NewContent2026ShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              ✨ NEW 2026 CONTENT SHOWCASE
            </span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Breakthroughs
          </h2>
          
          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-semibold max-w-4xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories that are reshaping businesses in 2026
          </p>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* January Mega Breakthrough */}
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">January Mega Breakthrough</h3>
                  <p className="text-sm text-purple-300">Revolutionary Autonomous Intelligence</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Discover the revolutionary AI breakthrough achieving 99.9% autonomous operation with 50,000x performance improvement and $5.2B+ proven ROI.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-400">45 min read</div>
                <div className="flex gap-2">
                  <span className="bg-purple-500/20 px-2 py-1 rounded-full text-xs text-purple-300">99.9% Autonomous</span>
                  <span className="bg-yellow-500/20 px-2 py-1 rounded-full text-xs text-yellow-300">$5.2B ROI</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Link to="/blog/ai-2026-january-mega-breakthrough-revolution"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-center"
                >
                  Read Report →
                </Link>
                <Link to="/case-studies/ai-2026-january-mega-breakthrough-5-billion-success"
                  className="flex-1 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-center"
                >
                  Success Story
                </Link>
              </div>
            </div>

            {/* Quantum Neural Superintelligence */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Quantum Neural AI</h3>
                  <p className="text-sm text-blue-300">The Next Evolution in AI</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Revolutionary quantum neural superintelligence delivering 10,000x processing power with 99.9% accuracy and $8.5B+ proven ROI across enterprise implementations.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-400">38 min read</div>
                <div className="flex gap-2">
                  <span className="bg-blue-500/20 px-2 py-1 rounded-full text-xs text-blue-300">10,000x Power</span>
                  <span className="bg-green-500/20 px-2 py-1 rounded-full text-xs text-green-300">$8.5B ROI</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Link to="/blog/ai-2026-quantum-neural-superintelligence-breakthrough"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-center"
                >
                  Explore Technology →
                </Link>
                <Link to="/case-studies/ai-2026-quantum-neural-superintelligence-8-billion-success"
                  className="flex-1 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-center"
                >
                  View Results
                </Link>
              </div>
            </div>

            {/* Revolutionary Autonomous Enterprise */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Autonomous Enterprise</h3>
                  <p className="text-sm text-green-300">Complete Business Automation</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Revolutionary autonomous enterprise systems achieving 99.9% automation across all business operations with $2.8B+ ROI and complete operational transformation.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-400">42 min read</div>
                <div className="flex gap-2">
                  <span className="bg-green-500/20 px-2 py-1 rounded-full text-xs text-green-300">99.9% Automation</span>
                  <span className="bg-orange-500/20 px-2 py-1 rounded-full text-xs text-orange-300">$2.8B ROI</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Link to="/blog/ai-2026-revolutionary-autonomous-enterprise-systems"
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-center"
                >
                  Learn More →
                </Link>
                <Link to="/case-studies/ai-2026-revolutionary-autonomous-enterprise-2-billion-success"
                  className="flex-1 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-center"
                >
                  Success Story
                </Link>
              </div>
            </div>
          </div>

          {/* Combined Value Proposition */}
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Combined Revolutionary Value</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-indigo-400 mb-2">$16.5B+</div>
                <div className="text-sm text-gray-300">Total Combined ROI</div>
                <div className="text-xs text-gray-400 mt-1">Across All Breakthroughs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-purple-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-300">Autonomous Operation</div>
                <div className="text-xs text-gray-400 mt-1">Maximum Automation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-blue-400 mb-2">50,000x</div>
                <div className="text-sm text-gray-300">Performance Boost</div>
                <div className="text-xs text-gray-400 mt-1">Revolutionary Speed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-green-400 mb-2">100%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
                <div className="text-xs text-gray-400 mt-1">Proven Results</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/blog" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Explore All AI Content →
            </Link>
            <Link to="/case-studies" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              View All Success Stories →
            </Link>
            <Link to="/contact" 
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>

          {/* Technology Indicators */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-indigo-500/20 px-4 py-2 rounded-full text-indigo-300 border border-indigo-400/30">
              🚀 Revolutionary AI
            </span>
            <span className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300 border border-purple-400/30">
              ⚛️ Quantum Computing
            </span>
            <span className="bg-blue-500/20 px-4 py-2 rounded-full text-blue-300 border border-blue-400/30">
              🧠 Neural Networks
            </span>
            <span className="bg-green-500/20 px-4 py-2 rounded-full text-green-300 border border-green-400/30">
              🤖 Autonomous Systems
            </span>
            <span className="bg-yellow-500/20 px-4 py-2 rounded-full text-yellow-300 border border-yellow-400/30">
              💰 $16.5B+ ROI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
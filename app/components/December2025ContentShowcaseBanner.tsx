import Link from 'next/link';

export default function December2025ContentShowcaseBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              🚀 DECEMBER 2025 BREAKTHROUGH CONTENT
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Breakthroughs
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Discover the Latest Autonomous Systems & Quantum Computing Breakthroughs
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">99.99%</div>
              <div className="text-xs text-blue-300">Automation Rate</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">$500M+</div>
              <div className="text-xs text-purple-300">ROI Potential</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">0.001s</div>
              <div className="text-xs text-green-300">Response Time</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
              <div className="text-2xl font-extrabold text-orange-400 mb-1">∞</div>
              <div className="text-xs text-orange-300">Scalability</div>
            </div>
          </div>
        </div>

        {/* Content showcase grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Autonomous Systems Article */}
          <div className="group bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                🚀 DECEMBER 2025
              </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                AUTONOMOUS SYSTEMS
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
              Advanced Autonomous Systems Revolution
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionary breakthrough in autonomous systems achieving 99.99% automation, universal intelligence 
              integration, and $500B+ enterprise value generation through conscious business transformation.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-lg text-sm font-semibold">99.99% Automation</span>
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-lg text-sm font-semibold">Universal Intelligence</span>
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-lg text-sm font-semibold">$500B+ ROI</span>
            </div>
            
            <Link 
              href="/blog/ai-2025-december-advanced-autonomous-systems" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Read Full Article
              <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Success Story */}
          <div className="group bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                💰 $500M SUCCESS
              </span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                FORTUNE 100
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
              $500M Success Story
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              How a Fortune 100 global conglomerate achieved $500M ROI through December 2025 autonomous systems 
              with 99.99% automation and universal intelligence integration.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-lg text-sm font-semibold">$500M ROI</span>
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-lg text-sm font-semibold">6 Months</span>
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-lg text-sm font-semibold">Fortune 100</span>
            </div>
            
            <Link 
              href="/case-studies/ai-2025-december-autonomous-systems-500-million-success" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50"
            >
              View Success Story
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with December 2025 Breakthroughs?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the Fortune 100 companies already achieving unprecedented success with our revolutionary 
              autonomous systems and quantum computing breakthroughs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
              >
                Get Started Today
              </Link>
              <Link 
                href="/blog" 
                className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Explore All Content
              </Link>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>🔒 Enterprise-grade security</span>
            <span>•</span>
            <span>⚡ Real-time deployment</span>
            <span>•</span>
            <span>🌐 Global scalability</span>
            <span>•</span>
            <span>🎯 Proven ROI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
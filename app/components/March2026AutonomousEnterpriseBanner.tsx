import Link from 'next/link';

export default function March2026AutonomousEnterpriseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8 animate-pulse">
            <span className="text-indigo-400 font-bold text-lg tracking-wider uppercase">
              🚀 March 2026 Revolutionary Breakthrough
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Autonomous Enterprise Revolution
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            99.9% Autonomous Operations • $500B+ ROI Potential • Universal Intelligence Integration
          </p>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-xl font-bold text-indigo-400 mb-2">99.9% Autonomous</h3>
              <p className="text-indigo-200 text-sm">Complete business operations automation with minimal human intervention</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Universal Intelligence</h3>
              <p className="text-purple-200 text-sm">Conscious AI systems with self-awareness and ethical reasoning</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">$500B+ ROI</h3>
              <p className="text-blue-200 text-sm">Unprecedented value generation through autonomous enterprise systems</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-march-autonomous-enterprise-revolution" 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Read Breakthrough Details →
            </Link>
            <Link 
              href="/case-studies/ai-2026-march-autonomous-enterprise-500-billion-success" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              View $500B Success Story →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Transform Your Enterprise
            </Link>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">$500B</div>
              <div className="text-xs text-green-300">ROI Generated</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">99.9%</div>
              <div className="text-xs text-blue-300">Autonomous Operations</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">1000x</div>
              <div className="text-xs text-purple-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
              <div className="text-2xl font-extrabold text-orange-400 mb-1">0.001s</div>
              <div className="text-xs text-orange-300">Decision Time</div>
            </div>
          </div>

          {/* Additional Content Links */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/blog/ai-2026-march-autonomous-enterprise-revolution" className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-500/30 transition-colors">
                Autonomous Enterprise Guide →
              </Link>
              <Link href="/case-studies/ai-2026-march-autonomous-enterprise-500-billion-success" className="inline-flex items-center gap-2 bg-green-500/20 text-green-200 border border-green-400/30 px-4 py-2 rounded-lg font-semibold hover:bg-green-500/30 transition-colors">
                $500B Success Story →
              </Link>
              <Link href="/services/autonomous-enterprise-solutions" className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-200 border border-purple-400/30 px-4 py-2 rounded-lg font-semibold hover:bg-purple-500/30 transition-colors">
                Enterprise Solutions →
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-4 py-2 rounded-lg font-semibold hover:bg-blue-500/30 transition-colors">
                Get Started Today →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
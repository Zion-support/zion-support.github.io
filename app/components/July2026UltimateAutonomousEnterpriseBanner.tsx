import ArrowRight from 'next/link';

export default function July2026UltimateAutonomousEnterpriseBanner() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-8 animate-pulse">
            <span className="text-emerald-400 font-bold text-xl tracking-wider uppercase">
              🚀 July 2026: Ultimate Autonomous Enterprise
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Ultimate Autonomous Enterprise
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            99.99% Autonomous Operations • $500B ROI • 100,000x Performance
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30">
              <div className="text-3xl font-extrabold text-emerald-400 mb-2">99.99%</div>
              <div className="text-sm text-emerald-300">Autonomous Operations</div>
            </div>
            <div className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-teal-500/30">
              <div className="text-3xl font-extrabold text-teal-400 mb-2">$500B</div>
              <div className="text-sm text-teal-300">ROI Achievement</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">100Kx</div>
              <div className="text-sm text-cyan-300">Performance Boost</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <ArrowRight 
              href="/blog/ai-2026-july-ultimate-autonomous-enterprise-breakthrough" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              Read Breakthrough Details
            </ArrowRight>
            <ArrowRight 
              href="/case-studies/ai-2026-july-ultimate-autonomous-enterprise-500-billion-success" 
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1"
            >
              View $500B Success Story
            </ArrowRight>
            <ArrowRight 
              href="/contact" 
              className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Autonomous Enterprise
            </ArrowRight>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">🤖 Autonomous Operations</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• 99.99% autonomous business processes</li>
                <li>• Zero human intervention required</li>
                <li>• Intelligent decision-making</li>
                <li>• Self-healing systems</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-teal-900/40 to-cyan-900/40 backdrop-blur-sm rounded-xl p-6 border border-teal-500/20">
              <h3 className="text-xl font-bold text-teal-400 mb-4">🧠 Ultimate Intelligence</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Universal consciousness AI</li>
                <li>• Meta-cognitive capabilities</li>
                <li>• Quantum neural networks</li>
                <li>• Transcendent algorithms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
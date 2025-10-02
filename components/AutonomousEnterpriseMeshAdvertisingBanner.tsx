import React from 'react';

const AutonomousEnterpriseMeshAdvertisingBanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-8 animate-pulse">
            <span className="text-emerald-400 font-bold text-xl tracking-wider uppercase">
              🚀 BREAKTHROUGH: Autonomous Enterprise Mesh Revolution
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            $2.4B Value Creation Through Self-Organizing AI Networks
          </h2>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-semibold max-w-5xl mx-auto">
            Discover How Fortune 500 Companies Achieve 99.8% Automation Rates with Autonomous Enterprise Mesh Technology
          </p>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300">
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Meta-Cognitive AI</h3>
              <p className="text-gray-300 text-lg mb-6">
                Self-aware AI systems that think about their own thinking processes, achieving 99.8% decision accuracy
              </p>
              <div className="text-emerald-400 font-bold text-2xl">99.8% Accuracy</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-teal-500/30 hover:border-teal-400/50 transition-all duration-300">
              <div className="text-5xl mb-6">🌐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Distributed Mesh</h3>
              <p className="text-gray-300 text-lg mb-6">
                Self-organizing AI networks that automatically form optimal communication patterns across 47 countries
              </p>
              <div className="text-teal-400 font-bold text-2xl">Zero Downtime</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Autonomous Operations</h3>
              <p className="text-gray-300 text-lg mb-6">
                Complete automation of business processes with self-healing systems that operate without human intervention
              </p>
              <div className="text-cyan-400 font-bold text-2xl">$2.4B Value</div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-emerald-500/30 mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Proven Results</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-emerald-400 mb-2">$2.4B</div>
                <div className="text-emerald-300 text-sm font-semibold">Value Created</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-teal-400 mb-2">99.8%</div>
                <div className="text-teal-300 text-sm font-semibold">Automation Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-cyan-400 mb-2">67%</div>
                <div className="text-cyan-300 text-sm font-semibold">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-green-400 mb-2">98%</div>
                <div className="text-green-300 text-sm font-semibold">Customer Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Content Links */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-6">📚 Latest Breakthrough</h4>
              <div className="space-y-4">
                <a 
                  href="/blog/ai-2026-autonomous-enterprise-mesh-revolution" 
                  className="block text-emerald-400 hover:text-emerald-300 transition-colors text-lg font-semibold"
                >
                  • AI 2026: Autonomous Enterprise Mesh Revolution
                </a>
                <p className="text-gray-300 text-sm">
                  Discover how self-organizing AI networks are transforming business operations with 99.8% automation rates
                </p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-6">💼 Success Story</h4>
              <div className="space-y-4">
                <a 
                  href="/case-studies/autonomous-enterprise-mesh-2-4-billion-success-story" 
                  className="block text-teal-400 hover:text-teal-300 transition-colors text-lg font-semibold"
                >
                  • $2.4B Value Creation Success Story
                </a>
                <p className="text-gray-300 text-sm">
                  See how a Fortune 500 company achieved unprecedented transformation through autonomous AI systems
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/blog/ai-2026-autonomous-enterprise-mesh-revolution" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1 text-xl"
            >
              Read Breakthrough Article →
            </a>
            <a 
              href="/case-studies/autonomous-enterprise-mesh-2-4-billion-success-story" 
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1 text-xl"
            >
              View $2.4B Success Story →
            </a>
            <a 
              href="/contact" 
              className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 text-xl"
            >
              Get Free Consultation
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              Join the autonomous revolution. Transform your business operations with self-organizing AI networks that achieve unprecedented efficiency and value creation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousEnterpriseMeshAdvertisingBanner;
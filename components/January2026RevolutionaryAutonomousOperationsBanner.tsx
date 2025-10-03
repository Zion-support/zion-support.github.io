// import React from 'react';

const January2026RevolutionaryAutonomousOperationsBanner: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-emerald-900/60 via-teal-900/60 to-cyan-900/60 border-b border-emerald-500/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Main Banner */}
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6 animate-pulse">
            <span className="text-emerald-400 font-bold text-xl tracking-wider uppercase">
              🚀 January 2026: Revolutionary Autonomous Operations Breakthrough
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Transform Your Business with Autonomous Enterprise Operations
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto font-semibold">
            Experience unprecedented <span className="text-emerald-400 font-bold">1000x performance improvements</span> and 
            <span className="text-teal-400 font-bold"> 98% automation rates</span> with our revolutionary autonomous operations platform
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/30">
              <div className="text-2xl font-extrabold text-emerald-400 mb-1">1000x</div>
              <div className="text-xs text-emerald-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-4 border border-teal-500/30">
              <div className="text-2xl font-extrabold text-teal-400 mb-1">98%</div>
              <div className="text-xs text-teal-300">Automation Rate</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">$2.5B</div>
              <div className="text-xs text-cyan-300">Annual Savings</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">99.9%</div>
              <div className="text-xs text-blue-300">Uptime</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="/content/blog/ai-2026-january-revolutionary-autonomous-enterprise-operations" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              Read Full Article →
            </a>
            <a 
              href="/content/case-studies/ai-2026-january-autonomous-enterprise-operations-2-5-billion-success" 
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1"
            >
              View Success Story →
            </a>
            <a 
              href="/content/services/autonomous-enterprise-operations-2026" 
              className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Learn About Service
            </a>
          </div>

          {/* Success Highlights */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Proven Results Across Industries</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🏭</div>
                <h4 className="font-bold text-emerald-400 mb-2">Manufacturing</h4>
                <p className="text-sm text-gray-300">75% cost reduction, 300% efficiency increase</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏦</div>
                <h4 className="font-bold text-teal-400 mb-2">Financial Services</h4>
                <p className="text-sm text-gray-300">500% faster processing, 95% error reduction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏥</div>
                <h4 className="font-bold text-cyan-400 mb-2">Healthcare</h4>
                <p className="text-sm text-gray-300">90% admin reduction, 400% diagnostic improvement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2026RevolutionaryAutonomousOperationsBanner;
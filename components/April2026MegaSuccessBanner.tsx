// import React from 'react';

export default function April2026MegaSuccessBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-900/50 via-emerald-900/50 to-teal-900/50 border-b border-green-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-4">
            <span className="text-green-400 font-bold text-lg tracking-wider uppercase">
              💰 Fortune 500 Mega Success Story
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            $5.2 Billion in Measurable Value Generated
          </h3>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-6">
            Discover how a Fortune 500 manufacturing giant achieved unprecedented transformation 
            through our Meta-Cognitive Superintelligence Platform, delivering 
            <span className="text-green-400 font-bold"> 99.8% operational efficiency</span> and 
            <span className="text-emerald-400 font-bold"> 500% ROI</span> in just 1.1 months
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">$5.2B</div>
              <div className="text-xs text-green-300">Total Value Generated</div>
            </div>
            <div className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/30">
              <div className="text-2xl font-extrabold text-emerald-400 mb-1">99.8%</div>
              <div className="text-xs text-emerald-300">Operational Efficiency</div>
            </div>
            <div className="bg-teal-500/20 backdrop-blur-sm rounded-xl p-4 border border-teal-500/30">
              <div className="text-2xl font-extrabold text-teal-400 mb-1">1.1</div>
              <div className="text-xs text-teal-300">Month Payback</div>
            </div>
            <div className="bg-cyan-500/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">500%</div>
              <div className="text-xs text-cyan-300">ROI Achieved</div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/case-studies/fortune-500-april-2026-mega-transformation-success"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              Read Full Case Study →
            </a>
            <a
              href="/blog/ai-2026-april-revolutionary-breakthrough"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              Learn About the Technology →
            </a>
            <a
              href="/contact"
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
            >
              Start Your Transformation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
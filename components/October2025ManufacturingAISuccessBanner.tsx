import React from 'react';

export default function October2025ManufacturingAISuccessBanner() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-emerald-950 via-green-950 to-teal-950 overflow-hidden border-y border-emerald-500/30">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Success Story Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/30 to-green-500/30 border-2 border-emerald-400/50 backdrop-blur-sm mb-6 animate-pulse">
            <span className="text-emerald-300 font-bold text-xl tracking-wider uppercase">
              💰 Fortune 500 Success: $1.2B AI Manufacturing Transformation!
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300 bg-clip-text text-transparent leading-tight">
            Manufacturing AI Revolution: $1.2B Value Creation
          </h2>
          <p className="text-2xl text-emerald-200 max-w-4xl mx-auto mb-4 font-semibold">
            How 120 Facilities Achieved 94% Quality Improvement & 15x ROI with AI
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover the complete transformation journey: Computer vision quality control, 
            predictive maintenance, autonomous production planning, and supply chain optimization 
            delivering unprecedented results in just 18 months.
          </p>
        </div>

        {/* Key Results Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur-lg rounded-2xl p-6 border border-emerald-400/30 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-extrabold text-emerald-300 mb-2">$1.2B</div>
            <div className="text-sm text-emerald-200 font-medium">Total Value Created</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-2xl p-6 border border-green-400/30 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-extrabold text-green-300 mb-2">94%</div>
            <div className="text-sm text-green-200 font-medium">Quality Improvement</div>
          </div>
          <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-lg rounded-2xl p-6 border border-teal-400/30 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-extrabold text-teal-300 mb-2">67%</div>
            <div className="text-sm text-teal-200 font-medium">Downtime Reduction</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-extrabold text-cyan-300 mb-2">15x</div>
            <div className="text-sm text-cyan-200 font-medium">ROI in 18 Months</div>
          </div>
        </div>

        {/* Solution Highlights */}
        <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
            <div className="text-4xl mb-3">👁️</div>
            <h3 className="text-lg font-bold text-white mb-2">Computer Vision QC</h3>
            <p className="text-gray-300 text-sm mb-3">
              4,500 cameras, 99.8% accuracy, real-time defect detection
            </p>
            <div className="text-emerald-400 font-bold text-sm">6.2% → 0.4% defects</div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
            <div className="text-4xl mb-3">🔧</div>
            <h3 className="text-lg font-bold text-white mb-2">Predictive Maintenance</h3>
            <p className="text-gray-300 text-sm mb-3">
              125K IoT sensors, 14-day advance warnings, 92% accuracy
            </p>
            <div className="text-green-400 font-bold text-sm">18% → 6% downtime</div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-teal-500/50 transition-all duration-300">
            <div className="text-4xl mb-3">📦</div>
            <h3 className="text-lg font-bold text-white mb-2">Supply Chain AI</h3>
            <p className="text-gray-300 text-sm mb-3">
              3,500+ suppliers, 95% forecast accuracy, real-time visibility
            </p>
            <div className="text-teal-400 font-bold text-sm">52% inventory reduction</div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-bold text-white mb-2">Production Optimization</h3>
            <p className="text-gray-300 text-sm mb-3">
              Autonomous planning, energy management, workforce optimization
            </p>
            <div className="text-cyan-400 font-bold text-sm">65% → 87% OEE</div>
          </div>
        </div>

        {/* Value Breakdown */}
        <div className="bg-gradient-to-r from-emerald-900/30 to-green-900/30 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30 mb-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">$1.2B Value Breakdown (18 Months)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Quality Improvement:</span>
                <span className="text-emerald-300 font-bold">$520M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Downtime Reduction:</span>
                <span className="text-green-300 font-bold">$340M</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Supply Chain Optimization:</span>
                <span className="text-teal-300 font-bold">$240M</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Production Efficiency:</span>
                <span className="text-cyan-300 font-bold">$100M</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/case-studies/manufacturing-ai-optimization-2025-success"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
          >
            <span>Read Complete Success Story</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="/services/manufacturing-ai-optimization-services"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
          >
            <span>Manufacturing AI Services</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 font-bold py-4 px-8 rounded-xl transition-all duration-300"
          >
            <span>Schedule Consultation</span>
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-emerald-500/10 to-green-500/10 backdrop-blur-sm border border-emerald-400/30 rounded-2xl px-8 py-4">
            <p className="text-emerald-200 font-semibold">
              🏭 120 Facilities Transformed • 85,000 Employees Enabled • 50,000+ SKUs Optimized • <span className="text-emerald-300 font-bold">4.2 Month Payback Period</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

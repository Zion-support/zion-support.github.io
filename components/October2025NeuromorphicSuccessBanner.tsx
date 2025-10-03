export default function October2025NeuromorphicSuccessBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-green-900/40 via-emerald-900/40 to-teal-900/40 backdrop-blur-sm border-b border-green-500/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-green-500/15 to-emerald-500/15 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center text-5xl">
                  💰
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-4">
                  <span className="text-green-400 font-semibold text-xs uppercase tracking-wider">
                    🎉 Success Story • October 1, 2025
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight">
                  Fortune 100 Achieves $1.2B Annual Savings with Neuromorphic Edge AI
                </h3>
                
                <p className="text-gray-300 mb-6 text-base leading-relaxed">
                  Global manufacturer deploys neuromorphic processors across 18,000 factories worldwide, 
                  revolutionizing quality control with 97% defect reduction, 10,000x faster AI inference, 
                  and 99.97% energy efficiency improvements. Real-time operations at &lt;100 microsecond latency.
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-extrabold text-green-400">$1.2B</div>
                    <div className="text-xs text-gray-400">Annual Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-emerald-400">18,000</div>
                    <div className="text-xs text-gray-400">Factories Deployed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-teal-400">97%</div>
                    <div className="text-xs text-gray-400">Defect Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-cyan-400">10,000x</div>
                    <div className="text-xs text-gray-400">Faster AI</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/case-studies/neuromorphic-edge-computing-industrial-success-2025"
                    className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 text-center transform hover:-translate-y-1 text-sm"
                  >
                    Read Full Case Study →
                  </a>
                  <a 
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 text-center transform hover:-translate-y-1 text-sm"
                  >
                    Request ROI Assessment →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function October2025GreenAIRevolutionBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900/30 via-green-900/30 to-lime-900/30 backdrop-blur-sm py-12 border-b border-emerald-500/20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30 shadow-2xl">
          <div className="flex items-center justify-between flex-wrap gap-6">
            {/* Left Content */}
            <div className="flex-1 min-w-[300px]">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-4 py-2 rounded-full mb-4 border border-emerald-500/40">
                <span className="text-xl">🌱</span>
                <span className="text-emerald-400 font-bold text-sm uppercase tracking-wide">
                  Featured: Green AI Revolution
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                $155B Manufacturing Success Story
              </h3>
              
              <p className="text-lg text-emerald-100 mb-4">
                89% Energy Reduction • Carbon-Neutral Operations • 99.7% Quality Accuracy
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/20">
                  <div className="text-2xl font-bold text-emerald-400">850+</div>
                  <div className="text-xs text-emerald-300">Facilities Transformed</div>
                </div>
                <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400">2.4M</div>
                  <div className="text-xs text-green-300">Tons CO₂ Avoided</div>
                </div>
              </div>
            </div>

            {/* Right CTA */}
            <div className="flex flex-col gap-3">
              <a
                href="/case-studies/ai-2025-oct-global-manufacturing-sustainable-ai-155-billion-success"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 whitespace-nowrap"
              >
                <span>View Case Study</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a
                href="/services/sustainable-ai-transformation-services"
                className="group inline-flex items-center justify-center gap-2 border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 whitespace-nowrap"
              >
                <span>Get Started</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

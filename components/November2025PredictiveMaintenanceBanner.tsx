export default function November2025PredictiveMaintenanceBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900/50 via-cyan-900/50 to-teal-900/50 border-y border-cyan-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 mb-6 animate-pulse">
            <span className="text-cyan-400 font-bold text-xl tracking-wider uppercase">
              🚨 BREAKING: NOVEMBER 2025 - JUST PUBLISHED!
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
            Predictive Maintenance AI Revolution
          </h2>

          {/* Subheading */}
          <p className="text-2xl text-cyan-200 max-w-4xl mx-auto mb-4 font-semibold">
            Transform Reactive Operations into Predictive Excellence
          </p>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
            Revolutionary AI-powered predictive maintenance achieving 98.7% accuracy, 68% downtime reduction, 
            and $18.4M in proven annual savings. The future of industrial operations is here.
          </p>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-500/20 to-green-600/20 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/30">
              <div className="text-4xl font-black text-emerald-300 mb-2">98.7%</div>
              <div className="text-sm text-emerald-200 font-semibold">Prediction Accuracy</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30">
              <div className="text-4xl font-black text-cyan-300 mb-2">68%</div>
              <div className="text-sm text-cyan-200 font-semibold">Downtime Reduction</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-lg rounded-xl p-6 border border-yellow-500/30">
              <div className="text-4xl font-black text-yellow-300 mb-2">$18.4M</div>
              <div className="text-sm text-yellow-200 font-semibold">Annual Savings</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
              <div className="text-4xl font-black text-purple-300 mb-2">940%</div>
              <div className="text-sm text-purple-200 font-semibold">ROI Year 1</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/blog/ai-2025-november-predictive-maintenance-ai-transformation"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
            >
              <span className="text-2xl">📖</span>
              <span>Read Complete Guide</span>
            </a>
            <a 
              href="/case-studies/ai-2025-november-manufacturing-predictive-maintenance-18-4-million-success"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
            >
              <span className="text-2xl">💎</span>
              <span>View $18.4M Success Story</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

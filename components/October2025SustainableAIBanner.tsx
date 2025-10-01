import React from 'react';

const October2025SustainableAIBanner = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-green-900/40 via-emerald-900/40 to-teal-900/40 backdrop-blur-sm border-b border-green-500/30 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 backdrop-blur-sm">
            <span className="text-3xl animate-bounce">🌱</span>
            <span className="text-green-300 font-bold text-lg tracking-wider uppercase">
              BREAKING: Sustainable AI Revolution - Just Published October 1, 2025
            </span>
            <span className="text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>⚡</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent leading-tight">
            Carbon-Neutral AI: $4.7B Savings + 99.7% Emission Reduction
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-5xl mx-auto leading-relaxed">
            <span className="font-bold text-green-300">Fortune 50 Success Story:</span> Achieve complete carbon neutrality 
            with 89% energy efficiency gains—zero performance trade-offs. The future of sustainable AI is here.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-xl p-6 border border-green-500/40 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-2">💰</div>
            <div className="text-3xl font-extrabold text-green-300 mb-2">$4.7B</div>
            <div className="text-sm text-green-200">Total Cost Savings</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/40 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-2">🌍</div>
            <div className="text-3xl font-extrabold text-emerald-300 mb-2">99.7%</div>
            <div className="text-sm text-emerald-200">Carbon Reduction</div>
          </div>
          <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-lg rounded-xl p-6 border border-teal-500/40 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-3xl font-extrabold text-teal-300 mb-2">89%</div>
            <div className="text-sm text-teal-200">Energy Efficiency</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/40 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-2">🎯</div>
            <div className="text-3xl font-extrabold text-cyan-300 mb-2">100%</div>
            <div className="text-sm text-cyan-200">Renewable Energy</div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-xl font-bold text-white mb-3">Model Optimization</h3>
            <ul className="text-gray-300 space-y-2 text-sm mb-4">
              <li>✅ 84% energy reduction per inference</li>
              <li>✅ 73% model size reduction</li>
              <li>✅ 99.2% accuracy maintained</li>
              <li>✅ 91% training cost savings</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-white mb-3">Green Infrastructure</h3>
            <ul className="text-gray-300 space-y-2 text-sm mb-4">
              <li>✅ 100% renewable energy sources</li>
              <li>✅ Advanced liquid cooling systems</li>
              <li>✅ PUE improvement: 1.67 → 1.09</li>
              <li>✅ 85% water usage reduction</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-teal-500/50 transition-all duration-300">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-white mb-3">Business Impact</h3>
            <ul className="text-gray-300 space-y-2 text-sm mb-4">
              <li>✅ ESG Rating: BBB → AAA</li>
              <li>✅ Market cap impact: +$12.7B</li>
              <li>✅ 847% ROI achieved</li>
              <li>✅ Zero performance degradation</li>
            </ul>
          </div>
        </div>

        {/* Implementation Highlights */}
        <div className="bg-gradient-to-r from-green-900/30 via-emerald-900/30 to-teal-900/30 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-green-500/30 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🚀 Complete Sustainable AI Transformation
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold text-green-300 mb-3">Technical Innovations</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• <span className="text-green-400 font-semibold">Quantization & Pruning:</span> 40% parameter reduction</li>
                <li>• <span className="text-green-400 font-semibold">Knowledge Distillation:</span> 75% smaller models</li>
                <li>• <span className="text-green-400 font-semibold">Carbon-Aware Scheduling:</span> 47% emission cuts</li>
                <li>• <span className="text-green-400 font-semibold">Transfer Learning:</span> 95% less training energy</li>
                <li>• <span className="text-green-400 font-semibold">Federated Learning:</span> 75% data center load reduction</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-emerald-300 mb-3">Environmental Results</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• <span className="text-emerald-400 font-semibold">Carbon Reduction:</span> 85,000 → 250 tons CO2/year</li>
                <li>• <span className="text-emerald-400 font-semibold">Equivalent Impact:</span> 3.8M tree seedlings planted</li>
                <li>• <span className="text-emerald-400 font-semibold">Energy Savings:</span> 1.2 TWh → 0.4 TWh annually</li>
                <li>• <span className="text-emerald-400 font-semibold">Water Conservation:</span> 1.2B gallons saved/year</li>
                <li>• <span className="text-emerald-400 font-semibold">E-Waste Reduction:</span> 43% decrease (127 tons)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/blog/ai-2025-oct-sustainable-green-ai-carbon-neutral-computing"
            className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1 flex items-center gap-2"
          >
            <span className="text-2xl">📖</span>
            <span>Read Complete Technical Guide</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
          
          <a
            href="/case-studies/ai-2025-oct-global-tech-sustainable-ai-transformation-4-7-billion-success"
            className="group bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1 flex items-center gap-2"
          >
            <span className="text-2xl">📊</span>
            <span>View $4.7B Success Story</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
          
          <a
            href="/services/sustainable-green-ai-transformation-services"
            className="group bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1 flex items-center gap-2"
          >
            <span className="text-2xl">🌱</span>
            <span>Explore Our Services</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </div>

        {/* Testimonial/Social Proof */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-green-500/30">
            <p className="text-lg text-gray-300 italic mb-4">
              "This sustainable AI transformation delivered $4.7 billion in savings while achieving 
              99.7% carbon reduction. It's not just good for the planet—it's a massive competitive advantage."
            </p>
            <p className="text-green-400 font-bold">
              — CTO, Fortune 50 Technology Corporation
            </p>
          </div>
        </div>

        {/* Additional Value Props */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-sm text-gray-300">ESG AAA Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-sm text-gray-300">18-Month Timeline</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-sm text-gray-300">Zero Downtime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🚀</div>
            <div className="text-sm text-gray-300">Proven Methodology</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default October2025SustainableAIBanner;

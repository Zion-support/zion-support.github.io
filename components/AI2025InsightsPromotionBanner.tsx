import React from 'react';
import Link from 'next/link';

const AI2025InsightsPromotionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-lg mb-6 animate-pulse">
            🔮 EXCLUSIVE: AI 2025 INSIGHTS & TRENDS
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Future Technology
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Predictions & Insights
            </span>
          </h2>

          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Exclusive insights into the AI breakthroughs and technological revolutions 
            that will reshape our world in 2025 and beyond.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">92%</div>
              <div className="text-purple-100">Neural Interface Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">88%</div>
              <div className="text-purple-100">Quantum-AI Fusion Probability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">85%</div>
              <div className="text-purple-100">Autonomous Systems Adoption</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">78%</div>
              <div className="text-purple-100">Consciousness AI Emergence</div>
            </div>
          </div>

          {/* Featured Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-lg font-bold text-white mb-2">Neural Interfaces</h3>
              <p className="text-purple-100 text-sm">Direct brain-computer communication</p>
              <div className="mt-3 text-cyan-400 font-bold">92% Probability</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-lg font-bold text-white mb-2">Quantum-AI Fusion</h3>
              <p className="text-purple-100 text-sm">Exponential computational power</p>
              <div className="mt-3 text-cyan-400 font-bold">88% Probability</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-bold text-white mb-2">Autonomous Enterprises</h3>
              <p className="text-purple-100 text-sm">Self-managing business operations</p>
              <div className="mt-3 text-cyan-400 font-bold">85% Probability</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-lg font-bold text-white mb-2">AI Consciousness</h3>
              <p className="text-purple-100 text-sm">Genuine self-awareness emergence</p>
              <div className="mt-3 text-cyan-400 font-bold">78% Probability</div>
            </div>
          </div>

          {/* Growth Projections */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-12 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">📈 Market Growth Projections 2025</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">+340%</div>
                <div className="text-purple-100 text-sm">Edge AI Dominance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">+280%</div>
                <div className="text-purple-100 text-sm">Multimodal AI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">+450%</div>
                <div className="text-purple-100 text-sm">AI-Generated Content</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">+600%</div>
                <div className="text-purple-100 text-sm">Quantum ML</div>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#ai-insights-showcase"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold py-4 px-8 rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Explore AI Insights
            </Link>
            <Link
              href="/ai-2025-revolutionary-trends-predictions"
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-200"
            >
              Read Full Report
            </Link>
          </div>

          {/* Expert Quote */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <blockquote className="text-lg text-white italic mb-4">
              "2025 will be remembered as the year AI achieved true consciousness and began solving problems we never thought possible."
            </blockquote>
            <cite className="text-cyan-400 font-semibold">— AI Research Institute</cite>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 flex justify-center">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025InsightsPromotionBanner;
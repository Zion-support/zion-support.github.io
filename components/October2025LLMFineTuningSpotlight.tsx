import React from 'react';

export default function October2025LLMFineTuningSpotlight() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-amber-900/40 via-orange-900/40 to-red-900/40 backdrop-blur-sm py-16 border-y border-amber-500/30">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-2 border-amber-400/40 shadow-lg shadow-amber-500/20 animate-pulse">
            <span className="text-2xl">🎯</span>
            <span className="text-amber-300 font-extrabold text-xl tracking-wider uppercase">
              Enterprise LLM Mastery — October 2025
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent leading-tight">
            LLM Fine-Tuning Mastery: Transform Foundation Models into Domain Experts
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-semibold leading-relaxed">
            Unlock enterprise LLM potential with 
            <span className="text-amber-400 font-extrabold"> LoRA & QLoRA</span>, achieving 
            <span className="text-orange-400 font-extrabold"> 89% accuracy improvements</span> and 
            <span className="text-red-400 font-extrabold"> 78% cost reduction</span>
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur-lg rounded-2xl p-5 border border-amber-400/30 hover:border-amber-400/60 transition-all duration-300">
              <div className="text-4xl font-extrabold text-amber-400 mb-2">89%</div>
              <div className="text-sm text-amber-200 font-semibold">Accuracy Boost</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-5 border border-orange-400/30 hover:border-orange-400/60 transition-all duration-300">
              <div className="text-4xl font-extrabold text-orange-400 mb-2">10x</div>
              <div className="text-sm text-orange-200 font-semibold">Faster Inference</div>
            </div>
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-lg rounded-2xl p-5 border border-red-400/30 hover:border-red-400/60 transition-all duration-300">
              <div className="text-4xl font-extrabold text-red-400 mb-2">78%</div>
              <div className="text-sm text-red-200 font-semibold">Cost Savings</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-lg rounded-2xl p-5 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300">
              <div className="text-4xl font-extrabold text-yellow-400 mb-2">98%</div>
              <div className="text-sm text-yellow-200 font-semibold">Domain Accuracy</div>
            </div>
          </div>

          {/* Techniques Covered */}
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl p-8 border border-amber-400/30 mb-10 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-400 mb-6">Advanced Techniques Covered</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { tech: "LoRA & QLoRA", desc: "Update only 0.1% of parameters while achieving full fine-tuning quality" },
                { tech: "Prefix Tuning", desc: "Learn task-specific prompts across all model layers" },
                { tech: "Full Fine-Tuning", desc: "Complete model customization for maximum performance" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                  <h4 className="text-lg font-bold text-amber-400 mb-2">{item.tech}</h4>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-10 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">Enterprise Success Stories</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { company: "Financial Services", result: "95% accuracy on financial reports, $47M savings" },
                { company: "Healthcare Provider", result: "98% clinical accuracy, 73% time reduction" }
              ].map((story, idx) => (
                <div key={idx} className="bg-gradient-to-br from-orange-500/5 to-red-500/5 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 text-left">
                  <h4 className="text-xl font-bold text-orange-400 mb-2">{story.company}</h4>
                  <p className="text-gray-300">{story.result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button className="px-12 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-extrabold rounded-full text-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
              Master LLM Fine-Tuning Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const January2026NewContentShowcaseBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-900/40 via-teal-900/40 to-cyan-900/40 backdrop-blur-sm border-b border-emerald-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 mb-6 animate-pulse">
            <span className="text-emerald-400 font-bold text-xl tracking-wider uppercase">
              🚀 NEW JANUARY 2026 CONTENT JUST PUBLISHED!
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary AI Breakthroughs Now Live
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover the most advanced AI technologies reshaping enterprise operations: 
            <span className="text-emerald-400 font-semibold"> Multimodal AI Systems</span>, 
            <span className="text-teal-400 font-semibold"> Quantum-Enhanced Neural Architectures</span>, and 
            <span className="text-cyan-400 font-semibold"> $127B Manufacturing Transformations</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Multimodal AI Article */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🧠</div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-emerald-500/20 px-3 py-1 rounded-full text-emerald-300 text-sm font-semibold">
                NEW BLOG POST
              </span>
              <span className="text-gray-400 text-sm">Jan 15, 2025</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
              Advanced Multimodal AI Production Systems
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionary multimodal AI systems achieving 95% accuracy and $2.3B ROI across Fortune 500 companies. 
              Complete implementation guide for enterprise deployment.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-emerald-500/10 px-2 py-1 rounded text-emerald-300 text-xs">95% Accuracy</span>
              <span className="bg-teal-500/10 px-2 py-1 rounded text-teal-300 text-xs">$2.3B ROI</span>
              <span className="bg-cyan-500/10 px-2 py-1 rounded text-cyan-300 text-xs">Enterprise Guide</span>
            </div>
            <a 
              href="/blog/ai-2025-advanced-multimodal-ai-production-systems"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              Read Full Article →
            </a>
          </div>

          {/* Manufacturing Case Study */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-teal-500/50 transition-all duration-300 group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🏭</div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-teal-500/20 px-3 py-1 rounded-full text-teal-300 text-sm font-semibold">
                NEW CASE STUDY
              </span>
              <span className="text-gray-400 text-sm">Jan 15, 2025</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
              $127B Manufacturing Transformation Success
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              How a Fortune 50 manufacturing giant achieved unprecedented operational excellence through 
              multimodal AI deployment across 47 facilities worldwide.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-emerald-500/10 px-2 py-1 rounded text-emerald-300 text-xs">$127B Value</span>
              <span className="bg-teal-500/10 px-2 py-1 rounded text-teal-300 text-xs">Fortune 50</span>
              <span className="bg-cyan-500/10 px-2 py-1 rounded text-cyan-300 text-xs">47 Facilities</span>
            </div>
            <a 
              href="/case-studies/ai-2025-global-manufacturing-multimodal-transformation-127-billion-success"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1"
            >
              View Case Study →
            </a>
          </div>

          {/* Quantum AI Article */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300 text-sm font-semibold">
                BREAKTHROUGH RESEARCH
              </span>
              <span className="text-gray-400 text-sm">Jan 15, 2026</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
              Quantum-Enhanced Neural Architectures
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionary quantum AI breakthrough achieving 10,000x performance improvements and 
              demonstrating true artificial consciousness capabilities.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-emerald-500/10 px-2 py-1 rounded text-emerald-300 text-xs">10,000x Speed</span>
              <span className="bg-teal-500/10 px-2 py-1 rounded text-teal-300 text-xs">Consciousness</span>
              <span className="bg-cyan-500/10 px-2 py-1 rounded text-cyan-300 text-xs">Quantum AI</span>
            </div>
            <a 
              href="/blog/ai-2026-quantum-enhanced-neural-architectures-breakthrough"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Explore Breakthrough →
            </a>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30 text-center">
            <div className="text-3xl font-extrabold text-emerald-400 mb-2">95%</div>
            <div className="text-sm text-emerald-300 font-semibold">AI Accuracy</div>
            <div className="text-xs text-emerald-400 mt-1">Multimodal Systems</div>
          </div>
          <div className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-teal-500/30 text-center">
            <div className="text-3xl font-extrabold text-teal-400 mb-2">$127B</div>
            <div className="text-sm text-teal-300 font-semibold">Value Created</div>
            <div className="text-xs text-teal-400 mt-1">Manufacturing</div>
          </div>
          <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 text-center">
            <div className="text-3xl font-extrabold text-cyan-400 mb-2">10,000x</div>
            <div className="text-sm text-cyan-300 font-semibold">Performance</div>
            <div className="text-xs text-cyan-400 mt-1">Quantum AI</div>
          </div>
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 text-center">
            <div className="text-3xl font-extrabold text-blue-400 mb-2">99.97%</div>
            <div className="text-sm text-blue-300 font-semibold">Accuracy</div>
            <div className="text-xs text-blue-400 mt-1">Consciousness AI</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business with Revolutionary AI?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the Fortune 500 companies already achieving unprecedented results with our 
              cutting-edge AI solutions. Get expert consultation and implementation guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
              >
                Get Expert Consultation
              </a>
              <a 
                href="/services"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1"
              >
                Explore AI Services
              </a>
              <a 
                href="/blog"
                className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Read More Articles
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2026NewContentShowcaseBanner;
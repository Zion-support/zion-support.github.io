import React from 'react';

export default function June2026ContentShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              🎯 June 2026: Latest Content Showcase
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Discover Revolutionary AI Breakthroughs
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore our latest content featuring cutting-edge AI technologies, real-world success stories, 
            and practical insights that can transform your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Quantum Neural Superintelligence Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Neural Superintelligence</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary AI system combining quantum computing with neural networks for superintelligent 
              capabilities that surpass human cognitive performance.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Processing Speed:</span>
                <span className="text-indigo-400 font-bold">1000x Faster</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Problem Solving:</span>
                <span className="text-indigo-400 font-bold">99.9% Accuracy</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Learning Capacity:</span>
                <span className="text-indigo-400 font-bold">Infinite</span>
              </div>
            </div>
            <a 
              href="/blog/quantum-neural-superintelligence-2026"
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              Read Full Article →
            </a>
          </div>

          {/* Consensus Intelligence Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Consensus Intelligence</h3>
            <p className="text-gray-300 mb-6">
              AI agents reach unanimous decisions through quantum-accelerated consensus protocols, 
              ensuring optimal outcomes in complex enterprise scenarios.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Decision Accuracy:</span>
                <span className="text-purple-400 font-bold">99.9%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Decision Speed:</span>
                <span className="text-purple-400 font-bold">95% Faster</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Transparency:</span>
                <span className="text-purple-400 font-bold">100%</span>
              </div>
            </div>
            <a 
              href="/blog/ai-2026-consensus-intelligence-breakthrough"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              Learn More →
            </a>
          </div>

          {/* Fortune 500 Success Story Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💰</div>
            <h3 className="text-2xl font-bold text-white mb-4">$5.2B Success Story</h3>
            <p className="text-gray-300 mb-6">
              Discover how a Fortune 500 company achieved unprecedented results with our AI 2026 
              Superintelligence suite, generating $5.2 billion in measurable value.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Value Generated:</span>
                <span className="text-green-400 font-bold">$5.2B</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Efficiency:</span>
                <span className="text-green-400 font-bold">99.7%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">ROI:</span>
                <span className="text-green-400 font-bold">5,678%</span>
              </div>
            </div>
            <a 
              href="/case-studies/fortune-500-ai-2026-superintelligence-success"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 w-full text-center"
            >
              View Case Study →
            </a>
          </div>
        </div>

        {/* Additional Content Links */}
        <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-2xl p-8 border border-indigo-500/30">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">More Revolutionary Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="/blog/ai-2026-consensus-intelligence-breakthrough"
              className="bg-white/10 hover:bg-white/20 rounded-xl p-4 text-center transition-all duration-300 group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <div className="text-white font-semibold text-sm">Consensus Intelligence</div>
            </a>
            <a 
              href="/blog/quantum-neural-superintelligence-2026"
              className="bg-white/10 hover:bg-white/20 rounded-xl p-4 text-center transition-all duration-300 group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">⚛️</div>
              <div className="text-white font-semibold text-sm">Quantum AI</div>
            </a>
            <a 
              href="/case-studies/fortune-500-ai-2026-superintelligence-success"
              className="bg-white/10 hover:bg-white/20 rounded-xl p-4 text-center transition-all duration-300 group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">📈</div>
              <div className="text-white font-semibold text-sm">Success Stories</div>
            </a>
            <a 
              href="/contact"
              className="bg-white/10 hover:bg-white/20 rounded-xl p-4 text-center transition-all duration-300 group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <div className="text-white font-semibold text-sm">Get Started</div>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Organization?</h3>
            <p className="text-lg text-indigo-100 mb-6">
              Join the AI revolution with our cutting-edge technologies and proven success methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-indigo-600 hover:bg-indigo-50 font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a 
                href="/blog/quantum-neural-superintelligence-2026" 
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                Explore All Content →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
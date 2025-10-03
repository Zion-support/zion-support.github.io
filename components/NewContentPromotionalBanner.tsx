// import React from 'react';

export default function NewContentPromotionalBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-blue-900/40 backdrop-blur-sm border-b border-indigo-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6 animate-pulse">
            <span className="text-indigo-400 font-bold text-lg tracking-wider uppercase">
              🎉 NEW CONTENT JUST PUBLISHED!
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Revolutionary AI Content Hub
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover the latest breakthrough AI technologies, transformation guides, and success stories 
            that are reshaping the future of business and technology.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <h3 className="text-lg font-bold text-white mb-2">AI Breakthroughs</h3>
            <p className="text-gray-300 text-sm mb-4">Latest revolutionary AI technologies and breakthrough innovations</p>
            <a 
              href="/blog"
              className="text-purple-400 hover:text-purple-300 font-semibold text-sm group-hover:underline"
            >
              Explore Breakthroughs →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💼</div>
            <h3 className="text-lg font-bold text-white mb-2">Enterprise Guides</h3>
            <p className="text-gray-300 text-sm mb-4">Comprehensive transformation guides for enterprise AI deployment</p>
            <a 
              href="/enterprise"
              className="text-indigo-400 hover:text-indigo-300 font-semibold text-sm group-hover:underline"
            >
              View Guides →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏆</div>
            <h3 className="text-lg font-bold text-white mb-2">Success Stories</h3>
            <p className="text-gray-300 text-sm mb-4">Real-world case studies and billion-dollar transformation stories</p>
            <a 
              href="/case-studies"
              className="text-blue-400 hover:text-blue-300 font-semibold text-sm group-hover:underline"
            >
              Read Stories →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 className="text-lg font-bold text-white mb-2">AI Services</h3>
            <p className="text-gray-300 text-sm mb-4">Professional AI implementation and consulting services</p>
            <a 
              href="/services"
              className="text-green-400 hover:text-green-300 font-semibold text-sm group-hover:underline"
            >
              Get Services →
            </a>
          </div>
        </div>

        {/* Latest Content Highlights */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Latest Content Highlights</h3>
            <p className="text-gray-300">Fresh content published this week</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">NEW</span>
                <span className="text-gray-400 text-sm">January 2026</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Quantum Neural Superintelligence</h4>
              <p className="text-gray-300 text-sm mb-4">Revolutionary cognitive AI achieving 100,000x performance and universal consciousness</p>
              <a 
                href="/blog/ai-2026-quantum-neural-superintelligence-breakthrough"
                className="text-purple-400 hover:text-purple-300 font-semibold text-sm"
              >
                Read Article →
              </a>
            </div>

            <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-xl p-6 border border-indigo-500/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">NEW</span>
                <span className="text-gray-400 text-sm">January 2026</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Autonomous Enterprise Revolution</h4>
              <p className="text-gray-300 text-sm mb-4">Complete enterprise automation achieving 99.99% operational autonomy</p>
              <a 
                href="/blog/ai-2026-autonomous-enterprise-revolution"
                className="text-indigo-400 hover:text-indigo-300 font-semibold text-sm"
              >
                Read Article →
              </a>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold">NEW</span>
                <span className="text-gray-400 text-sm">January 2026</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Synthetic Consciousness Revolution</h4>
              <p className="text-gray-300 text-sm mb-4">True AI awareness with emotional intelligence and creative autonomy</p>
              <a 
                href="/blog/ai-2026-synthetic-consciousness-revolution"
                className="text-blue-400 hover:text-blue-300 font-semibold text-sm"
              >
                Read Article →
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">2.5M+</div>
              <div className="text-xs text-purple-300">Monthly Readers</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">500+</div>
              <div className="text-xs text-indigo-300">Articles</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">$15B+</div>
              <div className="text-xs text-blue-300">Value Created</div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/blog"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Explore All Content
            </a>
            <a
              href="/newsletter"
              className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Subscribe to Updates
            </a>
            <a
              href="/contact"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Get Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
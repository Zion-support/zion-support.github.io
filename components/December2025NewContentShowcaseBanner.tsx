import React from 'react';

const December2025NewContentShowcaseBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-blue-900/40 backdrop-blur-lg border-b border-purple-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-6 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 NEW DECEMBER 2025 CONTENT JUST PUBLISHED!
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Revolutionary Breakthrough Content
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the latest groundbreaking insights in quantum AI, autonomous systems, and enterprise transformation. 
            Our newest content delivers actionable strategies for achieving unprecedented business results.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Quantum AI Breakthrough */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🌌</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum AI Breakthrough</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary 10,000x computational speedup achieved through quantum AI implementation, 
              enabling real-time optimization and $5.2B value creation.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">10,000x Speedup</span>
              <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300 text-sm">$5.2B Value</span>
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">Real-time</span>
            </div>
            <a 
              href="/blog/ai-2025-december-quantum-ai-breakthrough"
              className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Article →
            </a>
          </div>

          {/* Advanced Autonomous Systems */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">Advanced Autonomous Systems</h3>
            <p className="text-gray-300 mb-6">
              Self-healing infrastructure and predictive maintenance delivering 99.7% uptime, 
              67% cost reduction, and $2.8B in cumulative savings.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">99.7% Uptime</span>
              <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm">67% Cost Reduction</span>
              <span className="bg-orange-500/20 px-3 py-1 rounded-full text-orange-300 text-sm">$2.8B Savings</span>
            </div>
            <a 
              href="/blog/ai-2025-december-advanced-autonomous-systems"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Explore Guide →
            </a>
          </div>

          {/* Fortune 500 Success Story */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💰</div>
            <h3 className="text-2xl font-bold text-white mb-4">Fortune 500 Success Story</h3>
            <p className="text-gray-300 mb-6">
              Comprehensive case study of a Fortune 500 company achieving $5.2B value creation 
              through quantum AI transformation in just 90 days.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm">$5.2B Value</span>
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">90 Days</span>
              <span className="bg-orange-500/20 px-3 py-1 rounded-full text-orange-300 text-sm">Fortune 500</span>
            </div>
            <a 
              href="/case-studies/fortune-500-quantum-ai-5-billion-success"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              View Case Study →
            </a>
          </div>
        </div>

        {/* Additional Content Highlights */}
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">More Revolutionary Content</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl">⚡</div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Quantum Computing Fundamentals</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Master the principles of quantum computing and its enterprise applications
                </p>
                <a href="/blog/quantum-computing-fundamentals" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm">
                  Read More →
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-4xl">🔮</div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Predictive Analytics Mastery</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Advanced techniques for predictive maintenance and optimization
                </p>
                <a href="/blog/predictive-analytics-mastery" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm">
                  Read More →
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-4xl">🛡️</div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Enterprise Security Framework</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Comprehensive security strategies for autonomous systems
                </p>
                <a href="/blog/enterprise-security-framework" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm">
                  Read More →
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-4xl">📊</div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">ROI Optimization Guide</h4>
                <p className="text-gray-300 text-sm mb-3">
                  Maximize returns on your AI and quantum computing investments
                </p>
                <a href="/blog/roi-optimization-guide" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm">
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Enterprise?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join leading enterprises achieving breakthrough results with our proven quantum AI and autonomous systems solutions. 
              Get expert consultation and implementation support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Get Expert Consultation
              </a>
              <a 
                href="/services" 
                className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
              >
                Explore Our Services
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View All Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default December2025NewContentShowcaseBanner;
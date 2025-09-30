import React from 'react';

const NewContent2026ShowcaseBanner: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 border-b border-indigo-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-4">
            <span className="text-indigo-400 font-bold text-lg tracking-wider uppercase">
              📚 New Content 2026
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Latest AI Breakthrough Content
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive collection of February 2026 AI breakthrough content, 
            featuring detailed guides, case studies, and consulting services.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Blog Post */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-bold text-white mb-2">February 2026 AI Mega Breakthrough</h3>
            <p className="text-gray-300 text-sm mb-4">
              Complete guide to Meta-Cognitive AI, Quantum-Neural Fusion, and Autonomous Operations
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-indigo-500/20 px-2 py-1 rounded text-indigo-300 text-xs">12 min read</span>
              <span className="bg-purple-500/20 px-2 py-1 rounded text-purple-300 text-xs">Featured</span>
              <span className="bg-cyan-500/20 px-2 py-1 rounded text-cyan-300 text-xs">New</span>
            </div>
            <a
              href="/blog/ai-2026-february-mega-breakthrough-revolution"
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
            >
              Read Article →
            </a>
          </div>

          {/* Case Study */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-white mb-2">$3.2B Success Story</h3>
            <p className="text-gray-300 text-sm mb-4">
              How a Fortune 100 company achieved $3.2 billion in value with our AI breakthrough technologies
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-500/20 px-2 py-1 rounded text-green-300 text-xs">15 min read</span>
              <span className="bg-emerald-500/20 px-2 py-1 rounded text-emerald-300 text-xs">Case Study</span>
              <span className="bg-yellow-500/20 px-2 py-1 rounded text-yellow-300 text-xs">ROI: 400%</span>
            </div>
            <a
              href="/case-studies/ai-2026-february-mega-breakthrough-3-billion-success"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
            >
              View Case Study →
            </a>
          </div>

          {/* Consulting Services */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-2">AI Breakthrough Consulting</h3>
            <p className="text-gray-300 text-sm mb-4">
              Expert consulting services for implementing Meta-Cognitive AI and Quantum-Neural Fusion
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-cyan-500/20 px-2 py-1 rounded text-cyan-300 text-xs">8 min read</span>
              <span className="bg-blue-500/20 px-2 py-1 rounded text-blue-300 text-xs">Services</span>
              <span className="bg-teal-500/20 px-2 py-1 rounded text-teal-300 text-xs">Expert</span>
            </div>
            <a
              href="/services/ai-2026-february-breakthrough-consulting"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
            >
              Get Consulting →
            </a>
          </div>
        </div>

        {/* Additional Content Links */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-4">More February 2026 Content</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/blog"
              className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 text-purple-300 hover:text-white px-4 py-2 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
            >
              All Blog Posts
            </a>
            <a
              href="/case-studies"
              className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 text-green-300 hover:text-white px-4 py-2 rounded-lg border border-green-500/30 hover:border-green-500/50 transition-all duration-300"
            >
              All Case Studies
            </a>
            <a
              href="/services"
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-cyan-300 hover:text-white px-4 py-2 rounded-lg border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300"
            >
              All Services
            </a>
            <a
              href="/contact"
              className="bg-gradient-to-r from-orange-500/20 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30 text-orange-300 hover:text-white px-4 py-2 rounded-lg border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026ShowcaseBanner;
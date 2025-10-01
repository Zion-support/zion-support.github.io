import * as React from 'react';

const NewContentShowcase2026Banner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-violet-900/30 via-purple-900/30 to-indigo-900/30 backdrop-blur-sm border-b border-violet-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 mb-6">
            <span className="text-violet-400 font-bold text-xl tracking-wider uppercase">
              🌟 NEW: 2026 Content Showcase
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Explore Our Latest AI Innovation Content
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover cutting-edge insights, breakthrough technologies, and proven strategies from our latest research and enterprise implementations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-violet-500/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <div className="inline-block bg-violet-500/20 px-3 py-1 rounded-full text-violet-300 text-sm font-semibold mb-3">
              Featured Article
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum AI Revolution in Enterprise</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Discover how quantum-enhanced AI is transforming enterprise operations with 10,000x faster processing and unprecedented accuracy.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-xs">Published: Jan 15, 2026</span>
              <span className="text-violet-400 text-xs font-semibold">5 min read</span>
            </div>
            <a 
              href="/blog/quantum-ai-enterprise-revolution-2026"
              className="inline-block bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              Read Article →
            </a>
          </div>

          {/* Case Study */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💰</div>
            <div className="inline-block bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm font-semibold mb-3">
              Case Study
            </div>
            <h3 className="text-xl font-bold text-white mb-3">$2.4B Manufacturing Success</h3>
            <p className="text-gray-300 mb-4 text-sm">
              How a Fortune 500 manufacturer achieved 85% cost reduction and 300% productivity gains through AI-driven autonomous operations.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-xs">Client: Fortune 500</span>
              <span className="text-purple-400 text-xs font-semibold">$2.4B Value</span>
            </div>
            <a 
              href="/case-studies/fortune-500-manufacturing-ai-success"
              className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              View Case Study →
            </a>
          </div>

          {/* Technical Guide */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚙️</div>
            <div className="inline-block bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-300 text-sm font-semibold mb-3">
              Technical Guide
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI Implementation Best Practices</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Complete guide to implementing AI systems in production environments with proven strategies and real-world examples.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-xs">Guide Series</span>
              <span className="text-indigo-400 text-xs font-semibold">12 chapters</span>
            </div>
            <a 
              href="/guides/ai-implementation-best-practices-2026"
              className="inline-block bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              Read Guide →
            </a>
          </div>

          {/* Interactive Demo */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
            <div className="inline-block bg-pink-500/20 px-3 py-1 rounded-full text-pink-300 text-sm font-semibold mb-3">
              Interactive Demo
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI ROI Calculator</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Calculate your potential AI transformation ROI with our interactive tool. Get personalized insights for your industry.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-xs">Interactive Tool</span>
              <span className="text-pink-400 text-xs font-semibold">Free to Use</span>
            </div>
            <a 
              href="/demo/ai-roi-calculator"
              className="inline-block bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              Try Calculator →
            </a>
          </div>

          {/* Webinar */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎥</div>
            <div className="inline-block bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300 text-sm font-semibold mb-3">
              Live Webinar
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI Trends 2026: What's Next</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Join our experts for an exclusive look at emerging AI technologies and their impact on enterprise operations.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-xs">Jan 25, 2026</span>
              <span className="text-cyan-400 text-xs font-semibold">60 min</span>
            </div>
            <a 
              href="/webinars/ai-trends-2026-whats-next"
              className="inline-block bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              Register Free →
            </a>
          </div>

          {/* Whitepaper */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
            <div className="inline-block bg-emerald-500/20 px-3 py-1 rounded-full text-emerald-300 text-sm font-semibold mb-3">
              Research Report
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI Adoption Survey 2026</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Comprehensive research on AI adoption trends, challenges, and success factors across 500+ enterprises.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-xs">500+ Companies</span>
              <span className="text-emerald-400 text-xs font-semibold">40 pages</span>
            </div>
            <a 
              href="/research/ai-adoption-survey-2026"
              className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
            >
              Download Report →
            </a>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 mb-6">
            <span className="text-violet-400 font-bold text-lg">📚 50+ Articles</span>
            <span className="text-gray-400">|</span>
            <span className="text-purple-400 font-bold text-lg">25+ Case Studies</span>
            <span className="text-gray-400">|</span>
            <span className="text-indigo-400 font-bold text-lg">15+ Guides</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/blog"
              className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-violet-500/50 transform hover:-translate-y-1"
            >
              Explore All Content
            </a>
            <a 
              href="/newsletter"
              className="border-2 border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Subscribe to Updates →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2026Banner;
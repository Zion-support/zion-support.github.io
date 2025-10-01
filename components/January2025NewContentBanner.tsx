import React from 'react';

const January2025NewContentBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8">
            <span className="text-blue-400 font-bold text-lg tracking-wider uppercase">
              🚀 NEW: January 2025 Content
            </span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Implementation Guides & Success Stories
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 font-semibold max-w-4xl mx-auto">
            Master enterprise AI implementation with proven strategies, real-world case studies, and actionable insights that deliver measurable results
          </p>
          
          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Blog Post 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise AI Implementation Guide</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Complete roadmap for enterprise AI deployment with proven strategies, implementation phases, and ROI frameworks.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-blue-400 font-semibold">GUIDE</span>
                <span className="text-xs text-gray-400">15 min read</span>
              </div>
              <a 
                href="/blog/ai-2025-enterprise-ai-implementation-guide"
                className="inline-block w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 text-center"
              >
                Read Guide →
              </a>
            </div>
            
            {/* Blog Post 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
              <h3 className="text-xl font-bold text-white mb-3">Generative AI Business Applications</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Discover practical generative AI applications transforming industries with real-world examples and implementation strategies.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-purple-400 font-semibold">APPLICATIONS</span>
                <span className="text-xs text-gray-400">12 min read</span>
              </div>
              <a 
                href="/blog/ai-2025-generative-ai-business-applications"
                className="inline-block w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 text-center"
              >
                Explore Applications →
              </a>
            </div>
            
            {/* Case Study */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💎</div>
              <h3 className="text-xl font-bold text-white mb-3">$50B Enterprise Transformation</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Real case study: How a Fortune 100 company achieved $50 billion in value creation through comprehensive AI transformation.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-green-400 font-semibold">CASE STUDY</span>
                <span className="text-xs text-gray-400">18 min read</span>
              </div>
              <a 
                href="/case-studies/ai-2025-global-enterprise-transformation-50-billion-success"
                className="inline-block w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 text-center"
              >
                View Success Story →
              </a>
            </div>
          </div>
          
          {/* Key Benefits */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">300-500%</div>
              <div className="text-xs text-blue-300">ROI Target</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">40-60%</div>
              <div className="text-xs text-purple-300">Efficiency Gain</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">$50B</div>
              <div className="text-xs text-green-300">Value Created</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
              <div className="text-2xl font-extrabold text-orange-400 mb-1">18</div>
              <div className="text-xs text-orange-300">Months Timeline</div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/blog"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Explore All Content →
            </a>
            <a 
              href="/case-studies"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              View Success Stories →
            </a>
            <a 
              href="/contact"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2025NewContentBanner;
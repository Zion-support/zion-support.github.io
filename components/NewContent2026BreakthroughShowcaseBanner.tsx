import React from 'react';

const NewContent2026BreakthroughShowcaseBanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-7xl mx-auto">
          {/* Main heading */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 mb-8 animate-pulse">
            <span className="text-blue-400 font-bold text-2xl tracking-wider uppercase">
              🚀 NEW: 2026 AI Breakthrough Content Now Live!
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Content Showcase
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-semibold max-w-5xl mx-auto">
            Explore cutting-edge AI innovations, proven success stories, and transformative technologies 
            that are reshaping enterprise operations worldwide.
          </p>
          
          {/* Content grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Meta-Cognitive AI */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">Meta-Cognitive AI Revolution</h3>
              <p className="text-gray-300 mb-6">
                Self-aware AI systems that understand their own thinking processes, adapt strategies in real-time, 
                and collaborate seamlessly with human teams.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Self-healing operations
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Dynamic strategy adaptation
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Human-AI collaboration
                </div>
              </div>
              <div className="flex items-center justify-between">
                <a 
                  href="/blog/ai-2026-meta-cognitive-enterprise-revolution"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Read Article →
                </a>
                <span className="text-blue-400 text-sm font-bold">NEW</span>
              </div>
            </div>
            
            {/* Neural Optimization */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Neural Optimization Breakthrough</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary techniques delivering 1000x performance improvements, 95% accuracy gains, 
                and 88% memory reduction across enterprise applications.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                  1000x faster processing
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                  95% accuracy improvement
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                  88% memory reduction
                </div>
              </div>
              <div className="flex items-center justify-between">
                <a 
                  href="/blog/ai-2026-neural-optimization-breakthrough"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Learn More →
                </a>
                <span className="text-indigo-400 text-sm font-bold">BREAKTHROUGH</span>
              </div>
            </div>
            
            {/* Autonomous Operations */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">Autonomous Operations Mastery</h3>
              <p className="text-gray-300 mb-6">
                Achieve 99% operational autonomy with self-managing systems that optimize themselves, 
                heal themselves, and evolve themselves continuously.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  99% operational autonomy
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Self-healing infrastructure
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Predictive intelligence
                </div>
              </div>
              <div className="flex items-center justify-between">
                <a 
                  href="/blog/ai-2026-autonomous-operations-mastery"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Explore Now →
                </a>
                <span className="text-purple-400 text-sm font-bold">MASTERY</span>
              </div>
            </div>
          </div>
          
          {/* Success stories section */}
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 mb-12">
            <h3 className="text-3xl font-bold text-white mb-6">💰 Proven Success Stories</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-green-500/30">
                <h4 className="text-xl font-bold text-green-400 mb-3">Meta-Cognitive Transformation</h4>
                <p className="text-gray-300 mb-4">
                  Fortune 500 manufacturing giant achieved $1.8B in value with 99% operational efficiency 
                  through meta-cognitive AI implementation.
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href="/case-studies/ai-2026-meta-cognitive-transformation-mega-success"
                    className="text-green-400 hover:text-green-300 font-bold"
                  >
                    Read Full Case Study →
                  </a>
                  <span className="text-green-400 font-bold">$1.8B Value</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/30">
                <h4 className="text-xl font-bold text-emerald-400 mb-3">Neural Optimization Success</h4>
                <p className="text-gray-300 mb-4">
                  Global tech leader achieved 1000x performance improvements and $1.2B in value 
                  through revolutionary neural optimization techniques.
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href="/case-studies/ai-2026-neural-optimization-mega-success"
                    className="text-emerald-400 hover:text-emerald-300 font-bold"
                  >
                    View Success Story →
                  </a>
                  <span className="text-emerald-400 font-bold">$1.2B Value</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Get Free AI Assessment
            </a>
            <a 
              href="/blog" 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Browse All Content →
            </a>
            <a 
              href="/case-studies" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View All Success Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026BreakthroughShowcaseBanner;
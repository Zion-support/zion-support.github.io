import React from 'react';

export default function May2026ContentShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              ✨ May 2026 Content Showcase
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Content Collection
          </h2>
          
          <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore our comprehensive collection of AI 2026 breakthrough content, featuring 
            cutting-edge research, implementation guides, and real-world success stories.
          </p>
        </div>
        
        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Meta-Cognitive Quantum Fusion */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/30 hover:border-indigo-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Meta-Cognitive Quantum Fusion</h3>
            <p className="text-gray-300 mb-6">
              The ultimate AI breakthrough combining meta-cognitive intelligence with quantum computing 
              for unprecedented performance and capabilities.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-indigo-400">2000x</div>
                <div className="text-indigo-300 text-sm">Speed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-purple-400">99.9%</div>
                <div className="text-purple-300 text-sm">Accuracy</div>
              </div>
            </div>
            <a 
              href="/blog/ai-2026-may-revolutionary-breakthrough"
              className="inline-block w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
            >
              Read Article →
            </a>
          </div>
          
          {/* Enterprise Operations Guide */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📚</div>
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise Operations Guide</h3>
            <p className="text-gray-300 mb-6">
              Complete implementation blueprint for autonomous operations with 98% automation rates 
              and comprehensive deployment strategies.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-purple-400">98%</div>
                <div className="text-purple-300 text-sm">Automation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-pink-400">$3B+</div>
                <div className="text-pink-300 text-sm">Value</div>
              </div>
            </div>
            <a 
              href="/blog/ai-2026-enterprise-autonomous-operations-mega-guide"
              className="inline-block w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
            >
              Get Guide →
            </a>
          </div>
          
          {/* Success Story */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/30 hover:border-pink-500/50 transition-all duration-300 group">
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💰</div>
            <h3 className="text-2xl font-bold text-white mb-4">$5B Success Story</h3>
            <p className="text-gray-300 mb-6">
              Real-world Fortune 500 transformation case study achieving $5B in measurable value 
              with 99.8% operational efficiency.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-pink-400">$5B</div>
                <div className="text-pink-300 text-sm">Value</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-rose-400">99.8%</div>
                <div className="text-rose-300 text-sm">Efficiency</div>
              </div>
            </div>
            <a 
              href="/case-studies/ai-2026-mega-enterprise-transformation-success"
              className="inline-block w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
            >
              View Case Study →
            </a>
          </div>
        </div>
        
        {/* Additional Content Links */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-indigo-500/30 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">More Revolutionary Content</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="/blog/ai-2026-quantum-neural-breakthrough"
              className="group bg-gradient-to-r from-indigo-500/10 to-purple-500/10 hover:from-indigo-500/20 hover:to-purple-500/20 rounded-xl p-6 border border-indigo-500/30 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧠</div>
              <h4 className="text-lg font-bold text-white mb-2">Quantum Neural Networks</h4>
              <p className="text-gray-400 text-sm">Advanced neural architecture breakthrough</p>
            </a>
            
            <a 
              href="/blog/ai-2026-autonomous-enterprise-operations"
              className="group bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
              <h4 className="text-lg font-bold text-white mb-2">Autonomous Operations</h4>
              <p className="text-gray-400 text-sm">Complete enterprise automation guide</p>
            </a>
            
            <a 
              href="/case-studies/fortune-500-ai-2026-breakthrough-mega-success"
              className="group bg-gradient-to-r from-pink-500/10 to-rose-500/10 hover:from-pink-500/20 hover:to-rose-500/20 rounded-xl p-6 border border-pink-500/30 hover:border-pink-500/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏆</div>
              <h4 className="text-lg font-bold text-white mb-2">Fortune 500 Success</h4>
              <p className="text-gray-400 text-sm">$2.3B transformation case study</p>
            </a>
            
            <a 
              href="/blog/ai-2026-revolutionary-trends"
              className="group bg-gradient-to-r from-rose-500/10 to-orange-500/10 hover:from-rose-500/20 hover:to-orange-500/20 rounded-xl p-6 border border-rose-500/30 hover:border-rose-500/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📈</div>
              <h4 className="text-lg font-bold text-white mb-2">AI Trends 2026</h4>
              <p className="text-gray-400 text-sm">Latest industry trends and insights</p>
            </a>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-12 border border-indigo-500/30">
            <h3 className="text-4xl font-bold text-white mb-6">
              🚀 Ready to Explore the Future of AI?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Dive deep into our comprehensive collection of AI 2026 breakthrough content and 
              discover how to transform your enterprise with revolutionary technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
              >
                Get Free AI Consultation
              </a>
              <a 
                href="/blog" 
                className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Browse All Content →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
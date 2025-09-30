import React from 'react';

export default function NewContent2026AdvertisingMegaBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-pink-900/50 border-y border-indigo-500/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          {/* New Content Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-400 font-bold text-lg tracking-wider uppercase">
              ✨ NEW CONTENT ALERT
            </span>
            <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Revolutionary 2026 Content
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            🚀 Discover our latest breakthrough content: Meta-Cognitive AI guides, Quantum-Neural Network tutorials, 
            Autonomous Operations case studies, and enterprise transformation success stories.
          </p>
        </div>
        
        {/* Featured New Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              title: 'Meta-Cognitive AI Mastery',
              type: '📚 Complete Guide',
              description: 'Master the art of AI that thinks about thinking',
              href: '/blog/meta-cognitive-ai-mastery-2026',
              badge: 'NEW',
              color: 'from-purple-500 to-pink-500'
            },
            {
              title: 'Quantum-Neural Networks',
              type: '⚛️ Technical Deep Dive',
              description: 'Revolutionary processing power explained',
              href: '/blog/quantum-neural-networks-deep-dive-2026',
              badge: 'HOT',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              title: 'Autonomous Operations',
              type: '🤖 Case Study',
              description: '98% automation rates achieved',
              href: '/blog/autonomous-operations-case-study-2026',
              badge: 'BREAKTHROUGH',
              color: 'from-green-500 to-emerald-500'
            },
            {
              title: 'Enterprise Transformation',
              type: '💰 Success Story',
              description: '$50M savings with AI transformation',
              href: '/blog/enterprise-transformation-2026',
              badge: 'PROVEN',
              color: 'from-orange-500 to-red-500'
            }
          ].map((content, index) => (
            <a
              key={index}
              href={content.href}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20"
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${content.color} text-white font-bold`}>
                  {content.badge}
                </span>
                <span className="text-xs text-gray-400">{content.type}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                {content.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {content.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-indigo-400 font-semibold text-sm group-hover:text-indigo-300 transition-colors duration-300">
                  Read Now →
                </span>
                <div className={`w-6 h-6 bg-gradient-to-r ${content.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white text-xs">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Interactive Content Discovery */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-white mb-2">🔍 Discover Your Perfect Content</h3>
            <p className="text-gray-300">Use our AI-powered content discovery to find exactly what you need</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-lg font-bold text-white mb-2">Role-Based Content</h4>
              <p className="text-gray-400 text-sm mb-4">Content tailored for your role and industry</p>
              <a href="/content-discovery" className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold">
                Explore by Role →
              </a>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-lg font-bold text-white mb-2">Trending Topics</h4>
              <p className="text-gray-400 text-sm mb-4">Latest AI trends and breakthrough technologies</p>
              <a href="/trending-topics" className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold">
                View Trends →
              </a>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="text-lg font-bold text-white mb-2">Success Stories</h4>
              <p className="text-gray-400 text-sm mb-4">Real-world implementations and results</p>
              <a href="/success-stories" className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold">
                Read Stories →
              </a>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/content-hub" 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              📚 Explore All Content
            </a>
            <a 
              href="/newsletter" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              📧 Get Content Updates
            </a>
            <a 
              href="/contact" 
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-10 rounded-xl transition-all duration-300"
            >
              💬 Request Custom Content
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
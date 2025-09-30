import React from 'react';

export default function NewContentAdvertisingBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-red-900/40 border-b border-purple-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Main Banner */}
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400/50 mb-6">
              <span className="text-purple-300 font-bold text-lg tracking-wider uppercase animate-pulse">
                🚀 NEW CONTENT ALERT
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Revolutionary 2026 AI Breakthroughs
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our latest content featuring <span className="text-purple-400 font-bold">Meta-Cognitive AI</span>, 
              <span className="text-pink-400 font-bold"> Quantum-Neural Networks</span>, and 
              <span className="text-red-400 font-bold"> Autonomous Operations</span> that are transforming industries worldwide.
            </p>

            {/* Content Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { 
                  title: 'Meta-Cognitive AI Deep Dive',
                  description: 'AI that thinks about thinking',
                  icon: '🧠',
                  href: '/blog/meta-cognitive-ai-deep-dive-2026',
                  color: 'from-purple-500 to-indigo-500'
                },
                { 
                  title: 'Quantum-Neural Networks Guide',
                  description: '1000x processing speed achieved',
                  icon: '⚛️',
                  href: '/blog/quantum-neural-networks-guide-2026',
                  color: 'from-pink-500 to-purple-500'
                },
                { 
                  title: 'Autonomous Operations Case Study',
                  description: '98% automation rates realized',
                  icon: '🤖',
                  href: '/blog/autonomous-operations-case-study-2026',
                  color: 'from-red-500 to-pink-500'
                }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  <div className={`w-full h-1 bg-gradient-to-r ${item.color} rounded-full group-hover:scale-x-110 transition-transform duration-300`}></div>
                </a>
              ))}
            </div>

            {/* Stats Banner */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 rounded-2xl p-6 mb-8">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                {[
                  { value: '25+', label: 'New Articles', icon: '📝' },
                  { value: '500K+', label: 'Monthly Readers', icon: '👥' },
                  { value: '95%', label: 'Engagement Rate', icon: '⭐' },
                  { value: '24/7', label: 'Content Updates', icon: '🔄' }
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/blog" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Explore All New Content →
              </a>
              <a 
                href="/newsletter" 
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Subscribe for Updates
              </a>
              <a 
                href="/content-hub" 
                className="border-2 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Visit Content Hub
              </a>
            </div>
          </div>

          {/* Featured Content Preview */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">🔥 Most Popular This Week</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'The Complete Guide to Meta-Cognitive AI Implementation',
                  excerpt: 'Learn how to implement AI that thinks about thinking in your organization...',
                  readTime: '12 min read',
                  views: '45K views',
                  href: '/blog/meta-cognitive-ai-implementation-guide-2026'
                },
                {
                  title: 'Quantum-Neural Networks: Breaking the Speed Barrier',
                  excerpt: 'Discover how quantum principles are revolutionizing neural network processing...',
                  readTime: '15 min read',
                  views: '38K views',
                  href: '/blog/quantum-neural-networks-speed-breakthrough-2026'
                },
                {
                  title: 'Autonomous Operations: Achieving 98% Automation',
                  excerpt: 'Real-world case studies of organizations achieving near-complete automation...',
                  readTime: '18 min read',
                  views: '52K views',
                  href: '/blog/autonomous-operations-98-percent-automation-2026'
                }
              ].map((article, index) => (
                <a
                  key={index}
                  href={article.href}
                  className="group bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {article.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{article.readTime}</span>
                    <span className="text-purple-400 font-semibold">{article.views}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
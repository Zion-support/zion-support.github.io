// import React from 'react';

export default function UltimateContentAdvertisingBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-900/40 via-orange-900/40 to-red-900/40 border-b border-yellow-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Main Banner */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/30 mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/30 to-orange-500/30 border border-yellow-400/50 mb-6 animate-pulse">
              <span className="text-yellow-300 font-bold text-lg tracking-wider uppercase">
                ⭐ ULTIMATE CONTENT EXPERIENCE
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              The Most Comprehensive AI Content Hub
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Access our complete library of <span className="text-yellow-400 font-bold">revolutionary AI insights</span>, 
              <span className="text-orange-400 font-bold"> cutting-edge research</span>, and 
              <span className="text-red-400 font-bold"> enterprise transformation guides</span> - all in one place.
            </p>

            {/* Content Statistics */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { 
                  number: '500+',
                  label: 'Expert Articles',
                  description: 'In-depth analysis and insights',
                  icon: '📚',
                  color: 'from-yellow-500 to-orange-500'
                },
                { 
                  number: '100+',
                  label: 'Research Papers',
                  description: 'Peer-reviewed studies',
                  icon: '🔬',
                  color: 'from-orange-500 to-red-500'
                },
                { 
                  number: '50+',
                  label: 'Case Studies',
                  description: 'Real-world implementations',
                  icon: '📊',
                  color: 'from-red-500 to-pink-500'
                },
                { 
                  number: '25+',
                  label: 'Whitepapers',
                  description: 'Technical deep-dives',
                  icon: '📄',
                  color: 'from-pink-500 to-purple-500'
                }
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-white font-bold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>

            {/* Featured Content Categories */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { 
                  title: 'Meta-Cognitive AI',
                  description: 'AI that thinks about thinking',
                  articles: '45 articles',
                  latest: 'Latest: Implementation Guide',
                  icon: '🧠',
                  href: '/content-hub/meta-cognitive-ai',
                  color: 'from-purple-500 to-indigo-500'
                },
                { 
                  title: 'Quantum-Neural Networks',
                  description: 'Revolutionary processing architecture',
                  articles: '32 articles',
                  latest: 'Latest: Speed Breakthrough',
                  icon: '⚛️',
                  href: '/content-hub/quantum-neural-networks',
                  color: 'from-blue-500 to-cyan-500'
                },
                { 
                  title: 'Autonomous Operations',
                  description: '98% automation achieved',
                  articles: '28 articles',
                  latest: 'Latest: Case Study',
                  icon: '🤖',
                  href: '/content-hub/autonomous-operations',
                  color: 'from-green-500 to-emerald-500'
                }
              ].map((category, index) => (
                <a
                  key={index}
                  href={category.href}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{category.description}</p>
                  <div className="space-y-1 text-xs">
                    <div className="text-yellow-400 font-semibold">{category.articles}</div>
                    <div className="text-gray-500">{category.latest}</div>
                  </div>
                  <div className={`w-full h-1 bg-gradient-to-r ${category.color} rounded-full mt-4 group-hover:scale-x-110 transition-transform duration-300`}></div>
                </a>
              ))}
            </div>

            {/* Premium Content Access */}
            <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-400/30 rounded-2xl p-6 mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">🌟 Premium Content Access</h3>
                <p className="text-gray-300 mb-6">
                  Unlock exclusive content, early access to research, and priority support from our AI experts.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-yellow-400 font-bold mb-1">Exclusive Articles</div>
                    <div className="text-gray-400">Premium-only content</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-orange-400 font-bold mb-1">Early Access</div>
                    <div className="text-gray-400">Research before public release</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-red-400 font-bold mb-1">Expert Support</div>
                    <div className="text-gray-400">Direct access to AI specialists</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/content-hub" 
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 transform hover:-translate-y-1"
              >
                Explore Content Hub →
              </a>
              <a 
                href="/premium-access" 
                className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Get Premium Access
              </a>
              <a 
                href="/content-library" 
                className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Browse Library
              </a>
            </div>
          </div>

          {/* Content Preview */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🔥 Most Popular This Month</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'The Complete Meta-Cognitive AI Implementation Guide',
                  excerpt: 'Step-by-step guide to implementing AI that thinks about thinking in enterprise environments...',
                  readTime: '25 min read',
                  views: '125K views',
                  rating: '4.9/5',
                  href: '/blog/meta-cognitive-ai-implementation-complete-guide-2026'
                },
                {
                  title: 'Quantum-Neural Networks: Technical Deep Dive',
                  excerpt: 'Comprehensive technical analysis of quantum-neural architectures and their applications...',
                  readTime: '30 min read',
                  views: '98K views',
                  rating: '4.8/5',
                  href: '/blog/quantum-neural-networks-technical-deep-dive-2026'
                },
                {
                  title: 'Autonomous Operations: Enterprise Case Studies',
                  excerpt: 'Real-world implementations of autonomous operations achieving 98% automation rates...',
                  readTime: '35 min read',
                  views: '156K views',
                  rating: '4.9/5',
                  href: '/blog/autonomous-operations-enterprise-case-studies-2026'
                }
              ].map((article, index) => (
                <a
                  key={index}
                  href={article.href}
                  className="group bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <span>{article.readTime}</span>
                      <span className="text-yellow-400 font-semibold">{article.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span>{article.rating}</span>
                    </div>
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
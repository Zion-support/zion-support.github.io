import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Star, TrendingUp, Users } from 'lucide-react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const featuredContent = [
    {
      id: 'neural-interface-breakthrough',
      title: 'AI 2026: Neural Interface Breakthrough',
      excerpt: 'Revolutionary neural interface technology enabling direct brain-to-AI communication with unprecedented cognitive enhancement capabilities.',
      category: 'AI Innovation',
      type: 'blog',
      featured: true,
      icon: Brain,
      color: 'from-purple-500 to-indigo-600',
      href: '/blog/ai-2026-neural-interface-breakthrough',
      stats: {
        views: '2.4K',
        engagement: '98%',
        trending: true
      }
    },
    {
      id: 'quantum-ai-superintelligence',
      title: 'Quantum AI Superintelligence: The 2026 Breakthrough',
      excerpt: 'Explore the revolutionary convergence of quantum computing and AI creating the first true quantum AI superintelligence systems.',
      category: 'Quantum Computing',
      type: 'blog',
      featured: true,
      icon: Zap,
      color: 'from-blue-500 to-cyan-600',
      href: '/blog/quantum-ai-superintelligence-2026',
      stats: {
        views: '3.1K',
        engagement: '99%',
        trending: true
      }
    },
    {
      id: 'quantum-ai-implementation-guide',
      title: 'Quantum AI Superintelligence Implementation Guide 2026',
      excerpt: 'Complete roadmap for deploying quantum AI superintelligence systems in enterprise environments with technical architecture and best practices.',
      category: 'Implementation Guide',
      type: 'resource',
      featured: true,
      icon: Star,
      color: 'from-emerald-500 to-teal-600',
      href: '/resources/quantum-ai-superintelligence-implementation-guide-2026',
      stats: {
        downloads: '1.8K',
        rating: '5.0',
        trending: true
      }
    }
  ];

  const upcomingContent = [
    {
      title: 'Neural Consensus Networks: The Future of Collective Intelligence',
      releaseDate: 'January 20, 2025',
      category: 'AI Research',
      icon: Users
    },
    {
      title: 'Quantum Neural Architecture: Building the Next Generation of AI',
      releaseDate: 'January 25, 2025',
      category: 'Quantum AI',
      icon: TrendingUp
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-blue-200 text-sm font-medium">Revolutionary 2026 Content</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary AI Content
            </span>
            <br />
            <span className="text-white">That Changes Everything</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover groundbreaking research, implementation guides, and insights into the most advanced AI technologies 
            that are reshaping the future of human-computer interaction.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content, index) => {
            const IconComponent = content.icon;
            return (
              <div
                key={content.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                {/* Trending Badge */}
                {content.stats.trending && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    🔥 Trending
                  </div>
                )}

                {/* Content Type Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${content.color} flex items-center justify-center`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">{content.type}</span>
                    <div className="text-sm font-medium text-gray-200">{content.category}</div>
                  </div>
                </div>

                {/* Title and Excerpt */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {content.excerpt}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-6 text-xs text-gray-400">
                  {content.stats.views && (
                    <div className="flex items-center gap-1">
                      <span>👁️</span>
                      <span>{content.stats.views} views</span>
                    </div>
                  )}
                  {content.stats.downloads && (
                    <div className="flex items-center gap-1">
                      <span>📥</span>
                      <span>{content.stats.downloads} downloads</span>
                    </div>
                  )}
                  {content.stats.engagement && (
                    <div className="flex items-center gap-1">
                      <span>💯</span>
                      <span>{content.stats.engagement} engagement</span>
                    </div>
                  )}
                  {content.stats.rating && (
                    <div className="flex items-center gap-1">
                      <span>⭐</span>
                      <span>{content.stats.rating} rating</span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Link
                  href={content.href}
                  className={`inline-flex items-center gap-2 w-full justify-center py-3 px-6 rounded-lg bg-gradient-to-r ${content.color} text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105`}
                >
                  {content.type === 'blog' ? 'Read Article' : 'Download Guide'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Upcoming Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-green-400" />
            <h3 className="text-2xl font-bold text-white">Coming Soon</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingContent.map((content, index) => {
              const IconComponent = content.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">{content.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{content.category}</span>
                      <span>•</span>
                      <span>{content.releaseDate}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              <Brain className="w-5 h-5" />
              Explore All Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 bg-white/10 border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
            >
              <Star className="w-5 h-5" />
              Browse Resources
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead of the AI Revolution
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive access to the latest AI breakthroughs, implementation guides, and cutting-edge research 
              delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
            
            <p className="text-xs text-gray-400 mt-3">
              Join 10,000+ AI professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;
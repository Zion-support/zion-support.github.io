import React from 'react';
import Link from 'next/link';
import { Sparkles, TrendingUp, Rocket, Shield, Target, ArrowRight, Zap } from 'lucide-react';

const NewContentPromotionalBanner2026: React.FC = () => {
  const featuredContent = [
    {
      id: 1,
      title: 'AI Autonomous Workflows 2026',
      slug: 'ai-autonomous-workflows-2026',
      excerpt: 'Transform operations with 95% automation, 400% ROI, and seamless multi-system orchestration',
      category: 'Enterprise Automation',
      icon: '🤖',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-50 to-blue-50',
      badge: 'NEW',
      badgeColor: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Enterprise AI Transformation Roadmap 2026',
      slug: 'enterprise-ai-transformation-roadmap-2026',
      excerpt: 'Complete implementation guide delivering 300% ROI, 85% automation, and digital transformation',
      category: 'Strategic Guide',
      icon: '🎯',
      color: 'from-purple-500 to-fuchsia-600',
      bgColor: 'from-purple-50 to-fuchsia-50',
      badge: 'STRATEGIC',
      badgeColor: 'from-purple-500 to-fuchsia-600'
    },
    {
      id: 3,
      title: 'AI-Powered Security Operations Center 2026',
      slug: 'ai-security-operations-center-2026',
      excerpt: '99.9% threat detection, 95% faster response, and autonomous security operations',
      category: 'Cybersecurity',
      icon: '🛡️',
      color: 'from-red-500 to-orange-600',
      bgColor: 'from-red-50 to-orange-50',
      badge: 'CRITICAL',
      badgeColor: 'from-red-500 to-orange-600'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-lg">
              🚀 JUST PUBLISHED • SEPTEMBER 2026
            </span>
            <Sparkles className="w-5 h-5 text-cyan-400" />
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Latest AI Innovations
            </span>
            <br />
            <span className="text-white">
              That Transform Business
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore cutting-edge AI strategies, implementation roadmaps, and security innovations 
            that are delivering <span className="text-cyan-400 font-bold">300%+ ROI</span> for enterprises worldwide
          </p>

          <div className="flex items-center justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span>10,000+ Readers</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>3 New Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-red-400" />
              <span>Proven Results</span>
            </div>
          </div>
        </div>

        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content, index) => (
            <div 
              key={content.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${content.color} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{content.icon}</div>
                  <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${content.badgeColor} text-white text-sm font-bold shadow-lg`}>
                    {content.badge}
                  </div>
                </div>

                {/* Category */}
                <div className="mb-4">
                  <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${content.bgColor} text-gray-900 text-sm font-semibold border border-white/20`}>
                    {content.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-3xl font-extrabold text-white mb-4 group-hover:bg-gradient-to-r group-hover:${content.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight`}>
                  {content.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {content.excerpt}
                </p>

                {/* CTA Button */}
                <Link
                  href={`/blog/${content.slug}`}
                  className={`group/btn flex items-center justify-center gap-3 w-full bg-gradient-to-r ${content.color} hover:shadow-2xl text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${content.color} opacity-10 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Rocket className="w-8 h-8 text-cyan-400" />
            <h3 className="text-3xl font-bold text-white">
              Ready to Transform Your Enterprise?
            </h3>
            <Shield className="w-8 h-8 text-cyan-400" />
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 500+ enterprises achieving <span className="text-cyan-400 font-bold">300% ROI</span>, 
            <span className="text-green-400 font-bold"> 85% automation</span>, and 
            <span className="text-purple-400 font-bold"> complete digital transformation</span> with Zion Tech Group's AI solutions
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <Sparkles className="w-5 h-5" />
              <span>Start Your AI Journey</span>
            </Link>
            
            <Link
              href="/blog"
              className="group flex items-center gap-3 border-2 border-white/20 hover:border-white/40 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Explore All Content</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
              <div className="text-gray-300">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionalBanner2026;
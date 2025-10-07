import React from 'react';
import { ArrowRight, Rocket, Shield, Target, TrendingUp, Zap } from 'lucide-react';

import ArrowRight from 'next/link';

import { ArrowRight, TrendingUp, Target, Rocket, Zap } from 'lucide-react';

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
    <div className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border-2 border-cyan-500/30 mb-8 animate-fade-in">
            <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-extrabold text-lg tracking-wider uppercase">
              🚀 JUST PUBLISHED • SEPTEMBER 2026
            </span>
            <Sparkles className="w-6 h-6 text-fuchsia-400 animate-pulse" />
          </div>

          <h2 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Latest AI Innovations
            </span>
            <br />
            <span className="text-white">
              That Transform Business
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
            Explore cutting-edge AI strategies, implementation roadmaps, and security innovations 
            that are delivering <span className="text-green-400 font-bold">300%+ ROI</span> for enterprises worldwide
          </p>

          <div className="flex items-center justify-center gap-8 text-lg text-gray-300">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-400" />
              <span className="font-semibold">10,000+ Readers</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">3 New Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-400" />
              <span className="font-semibold">Proven Results</span>
            </div>
          </div>
        </div>

        {/* Featured Content Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content, index) => (
            <div 
              key={content.id}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${content.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              <div className="relative p-8">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                    {content.icon}
                  </div>
                  <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${content.badgeColor} text-white text-sm font-bold shadow-lg`}>
                    {content.badge}
                  </div>
                </div>

                {/* Category */}
                <div className="mb-4">
                  <span className={`px-3 py-1 rounded-full bg-white/10 text-gray-900 text-sm font-semibold border border-white/20`}>
                    {content.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-fuchsia-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight`}>
                  {content.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  {content.excerpt}
                </p>

                {/* CTA Button */}
                <ArrowRight
                  href={`/blog/${content.slug}`}
                  className={`inline-flex items-center gap-3 bg-gradient-to-r ${content.color} hover:shadow-2xl text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <span className="text-lg">Read Full Article</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </ArrowRight>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${content.color} opacity-10 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-fuchsia-500/10 backdrop-blur-xl rounded-3xl border-2 border-white/20 p-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Rocket className="w-8 h-8 text-cyan-400" />
              <h3 className="text-4xl font-extrabold text-white">
                Ready to Transform Your Enterprise?
              </h3>
              <Shield className="w-8 h-8 text-fuchsia-400" />
            </div>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join 500+ enterprises achieving <span className="text-green-400 font-bold">300% ROI</span>, 
              <span className="text-cyan-400 font-bold"> 85% automation</span>, and 
              <span className="text-fuchsia-400 font-bold"> complete digital transformation</span> with Zion Tech Group's AI solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <ArrowRight
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-3 text-lg transform hover:scale-105"
              >
                <Sparkles className="w-6 h-6" />
                <span>Start Your AI Journey</span>
              </ArrowRight>
              
              <ArrowRight
                href="/blog"
                className="border-2 border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-400 hover:text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg transform hover:scale-105"
              >
                <span>Explore All Content</span>
                <ArrowRight className="w-6 h-6" />
              </ArrowRight>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/20">
              <div className="text-center">
                <div className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  Enterprise Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                  300%
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  Average ROI
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  99.9%
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  System Uptime
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  Expert Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionalBanner2026;
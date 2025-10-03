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
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-600/20 to-blue-600/20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
              🚀 JUST PUBLISHED • SEPTEMBER 2026
            </span>
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Latest AI Innovations
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              That Transform Business
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore cutting-edge AI strategies, implementation roadmaps, and security innovations 
            that are delivering <span className="text-yellow-400 font-semibold">300%+ ROI</span> for enterprises worldwide
          </p>

          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-gray-300">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-sm">10,000+ Readers</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">3 New Articles</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Target className="w-5 h-5 text-blue-400" />
              <span className="text-sm">Proven Results</span>
            </div>
          </div>
        </div>

        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <div 
              key={content.id}
              className="relative group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{content.icon}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${content.badgeColor} text-white`}>
                  {content.badge}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                {content.title}
              </h3>
              
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {content.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 uppercase tracking-wider">
                  {content.category}
                </span>
                <Link 
                  href={`/blog/${content.slug}`}
                  className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-semibold"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Enterprise?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already implementing these breakthrough AI strategies. 
              Get exclusive access to our complete implementation guides and expert consultations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Get Implementation Guide
              </Link>
              <Link 
                href="/services"
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Shield className="w-5 h-5" />
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionalBanner2026;
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
    <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-purple-600 font-semibold">
              🚀 JUST PUBLISHED • SEPTEMBER 2026
            </span>
            <Sparkles className="w-5 h-5 text-purple-600" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="block">Latest AI Innovations</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              That Transform Business
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore cutting-edge AI strategies, implementation roadmaps, and security innovations 
            that are delivering <span className="font-semibold text-purple-600">300%+ ROI</span> for enterprises worldwide
          </p>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>10,000+ Readers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>3 New Articles</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span>Proven Results</span>
            </div>
          </div>
        </div>

        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredContent.map((content, index) => (
            <Link 
              key={content.id}
              href={`/blog/${content.slug}`}
              className="group block"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 h-full">
                {/* Card glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${content.bgColor} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  {/* Icon & Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${content.color} rounded-lg flex items-center justify-center text-2xl`}>
                      {content.icon}
                    </div>
                    <div className={`px-3 py-1 bg-gradient-to-r ${content.badgeColor} text-white text-xs font-bold rounded-full`}>
                      {content.badge}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {content.excerpt}
                  </p>

                  {/* Category & CTA */}
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium bg-gradient-to-r ${content.color} bg-clip-text text-transparent`}>
                      {content.category}
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of enterprises already implementing these breakthrough strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                href="/blog"
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Explore All Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionalBanner2026;
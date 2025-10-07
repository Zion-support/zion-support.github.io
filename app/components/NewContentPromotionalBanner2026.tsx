import { Zap, ArrowRight, Target } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Star } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Rocket,
  Shield,
  Target,
  ArrowRight,
} from 'lucide-react';

const NewContentPromotionalBanner2026: React.FC = () => {
  const featuredContent = [
    {
      id: 1,
      title: 'AI Autonomous Workflows 2026',
      slug: 'ai-autonomous-workflows-2026',
      excerpt:
        'Transform operations with 95% automation, 400% ROI, and seamless multi-system orchestration',
      category: 'Enterprise Automation',
      icon: '🤖',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-50 to-blue-50',
      badge: 'NEW',
      badgeColor: 'from-cyan-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Quantum-Enhanced AI Processing',
      slug: 'quantum-enhanced-ai-processing',
      excerpt:
        'Revolutionary quantum algorithms delivering 1000x faster AI computations and breakthrough insights',
      category: 'Quantum Computing',
      icon: '⚡',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50',
      badge: 'BREAKTHROUGH',
      badgeColor: 'from-purple-500 to-pink-600',
    },
    {
      id: 3,
      title: 'Neural Network Optimization 2026',
      slug: 'neural-network-optimization-2026',
      excerpt:
        'Advanced neural architectures achieving 99.9% accuracy with 90% reduced computational overhead',
      category: 'Machine Learning',
      icon: '🧠',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      badge: 'OPTIMIZED',
      badgeColor: 'from-green-500 to-emerald-600',
    },
    {
      id: 4,
      title: 'Edge AI Deployment Strategies',
      slug: 'edge-ai-deployment-strategies',
      excerpt:
        'Deploy AI models at the edge with 50ms latency, 99.9% uptime, and seamless cloud integration',
      category: 'Edge Computing',
      icon: '🌐',
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50',
      badge: 'EDGE',
      badgeColor: 'from-orange-500 to-red-600',
    },
    {
      id: 5,
      title: 'AI-Powered Business Intelligence',
      slug: 'ai-powered-business-intelligence',
      excerpt:
        'Real-time insights, predictive analytics, and automated decision-making for enterprise growth',
      category: 'Business Intelligence',
      icon: '📊',
      color: 'from-indigo-500 to-violet-600',
      bgColor: 'from-indigo-50 to-violet-50',
      badge: 'INSIGHTS',
      badgeColor: 'from-indigo-500 to-violet-600',
    },
    {
      id: 6,
      title: 'Autonomous System Integration',
      slug: 'autonomous-system-integration',
      excerpt:
        'Seamlessly integrate AI across all business systems with zero downtime and maximum efficiency',
      category: 'System Integration',
      icon: '🔗',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'from-teal-50 to-cyan-50',
      badge: 'INTEGRATED',
      badgeColor: 'from-teal-500 to-cyan-600',
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-lg">
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-white">
              Revolutionary AI Content 2026
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI technology that are transforming enterprises worldwide
          </p>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-sm font-bold text-yellow-400 flex items-center gap-2">
              🚀 JUST PUBLISHED • SEPTEMBER 2026
            </span>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Latest AI Innovations
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              That Transform Business
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore cutting-edge AI strategies, implementation roadmaps, and security innovations 
            that are delivering <span className="text-yellow-400 font-bold">300%+ ROI</span> for enterprises worldwide
          </p>

          <div className="flex items-center justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="font-semibold">10,000+ Readers</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">3 New Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-400" />
              <span className="font-semibold">Proven Results</span>
            </div>
          </div>
        </div>

        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content, index) => (
            <div 
              key={content.id}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105"
              className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${content.color} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{item.icon}</div>
                  <span className={`px-3 py-1 bg-gradient-to-r ${item.badgeColor} text-white text-xs font-bold rounded-full`}>
                    {item.badge}
                  </span>
                </div>
                {/* Category */}
                <div className="mb-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${item.color} text-white text-xs font-semibold rounded-full`}>
                    {item.category}
                    {content.badge}
                  </span>
                </div>
                {/* Category */}
                <div className='mb-4'>
                  <span
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${content.bgColor} text-gray-900 text-sm font-semibold border border-white/20`}
                  >
                    {content.category}
                  </span>
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {content.title}
                </h3>
                {/* Excerpt */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {content.excerpt}
                </p>
                {/* CTA Button */}
                <Link 
                  href={`/blog/${content.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href={`/blog/${item.slug}`}
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${item.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 group-hover:shadow-lg`}
                >
                  Explore Content
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of enterprises already implementing these AI strategies 
              and achieving remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Rocket className="w-5 h-5" />
                Get Started Today
              </Link>
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <Shield className="w-5 h-5" />
                Explore All Articles
              </Link>
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Enterprise?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of organizations already leveraging these breakthrough AI technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services/ai-services"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Explore AI Services
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800/50 transition-all duration-300"
              >
                Get Started
              </Link>
        <div className="text-center bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Rocket className="w-8 h-8 text-cyan-400" />
            <h3 className="text-3xl font-bold text-white">
              Ready to Transform Your Enterprise?
            </h3>
            <Shield className="w-8 h-8 text-purple-400" />
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Join 500+ enterprises achieving <span className="text-cyan-400 font-bold">300% ROI</span>, 
            <span className="text-purple-400 font-bold"> 85% automation</span>, and 
            <span className="text-pink-400 font-bold"> complete digital transformation</span> with Zion Tech Group's AI solutions
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
              className="group flex items-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
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
              <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentPromotionalBanner2026;

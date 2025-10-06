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
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Rocket className="w-8 h-8 text-cyan-400" />
            <h1 className="text-5xl font-extrabold text-white">
              Revolutionary AI Content 2026
            </h1>
            <Shield className="w-8 h-8 text-cyan-400" />
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI technology, enterprise automation, and digital transformation that are reshaping the future of business.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content, index) => (
            <div
              key={content.id}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${content.color} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl`}
              />
              
              <div className="relative z-10 p-8">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
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
                <h3
                  className={`text-3xl font-extrabold text-white mb-4 group-hover:bg-gradient-to-r group-hover:${content.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight`}
                >
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

                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${content.color} opacity-10 rounded-bl-full`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Rocket className="w-8 h-8 text-blue-400" />
            <h3 className="text-3xl font-bold text-white">
              Ready to Transform Your Enterprise?
            </h3>
            <Shield className="w-8 h-8 text-green-400" />
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 500+ enterprises achieving <span className="text-yellow-400 font-bold">300% ROI</span>, 
            <span className="text-green-400 font-bold"> 85% automation</span>, and 
            <span className="text-blue-400 font-bold"> complete digital transformation</span> with Zion Tech Group's AI solutions
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <Sparkles className="w-5 h-5" />
              <span>Start Your AI Journey</span>
            </Link>
            
            <Link
              href="/blog"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20"
            >
              <Target className="w-5 h-5" />
              <span>Explore All Content</span>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
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
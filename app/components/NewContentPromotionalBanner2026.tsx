import React from 'react';
import Link from 'next/link';
import { Rocket, Shield, ArrowRight } from 'lucide-react';

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
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-lg mb-6 animate-pulse">
            💎 NEW 2026 CONTENT
          </div>
          <h2 className="text-5xl font-extrabold text-white mb-6">
            Revolutionary AI Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge AI technologies that will transform your business operations
          </p>
        </div>

        {/* Featured Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content) => (
            <div key={content.id} className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
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
              <h3 className={`text-3xl font-extrabold text-white mb-4 group-hover:bg-gradient-to-r group-hover:${content.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight`}>
                {content.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {content.excerpt}
              </p>

              {/* CTA Button */}
              <Link 
                to={`/blog/${content.slug}`}
                className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${content.color} text-white font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
              >
                Read More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              {/* Corner accent */}
              <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-r ${content.color} rounded-full opacity-20`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
          <div className="flex justify-center mb-6">
            <Shield className="w-8 h-8 text-cyan-400" />
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of enterprises already using our AI solutions to achieve unprecedented growth and efficiency.
          </p>
          
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Get Started Today
            <Rocket className="ml-2 w-5 h-5" />
          </Link>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">$50M+</div>
              <div className="text-gray-300">Cost Savings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionalBanner2026;
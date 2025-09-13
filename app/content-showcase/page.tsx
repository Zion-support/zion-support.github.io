import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Video, Download, ArrowRight, Star, Clock, Users, TrendingUp, CheckCircle, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Content Showcase - Zion Tech Group Resources & Guides',
  description: 'Explore our comprehensive collection of AI guides, implementation toolkits, case studies, and resources for business transformation.',
  keywords: 'AI resources, business guides, implementation toolkits, automation guides, technology resources',
};

const ContentShowcasePage = () => {
  const featuredContent = [
    {
      id: 1,
      type: 'guide',
      title: 'AI 2025: Ultimate Business Automation Mastery',
      description: 'Comprehensive guide to transforming your business operations with cutting-edge AI solutions. Learn proven strategies, implementation frameworks, and real-world case studies.',
      category: 'Automation',
      readTime: '15 min read',
      rating: 4.9,
      downloads: '2.3k',
      icon: BookOpen,
      link: '/blog/ai-2025-ultimate-business-automation-mastery',
      color: 'from-cyan-500 to-blue-500',
      featured: true,
      tags: ['AI', 'Automation', 'Business Transformation', 'ROI']
    },
    {
      id: 2,
      type: 'toolkit',
      title: 'AI 2025 Automation Implementation Toolkit',
      description: 'Complete toolkit with templates, guides, checklists, and best practices for successful automation implementation.',
      category: 'Resources',
      readTime: '50+ resources',
      rating: 4.8,
      downloads: '1.8k',
      icon: Download,
      link: '/resources/ai-2025-automation-implementation-toolkit',
      color: 'from-purple-500 to-pink-500',
      featured: true,
      tags: ['Templates', 'Implementation', 'Best Practices', 'Toolkit']
    },
    {
      id: 3,
      type: 'tutorial',
      title: 'Quantum Computing Solutions for Enterprise',
      description: 'Advanced quantum computing implementations for business optimization and problem-solving in enterprise environments.',
      category: 'Quantum',
      readTime: '12 min read',
      rating: 4.7,
      downloads: '1.5k',
      icon: Video,
      link: '/tutorials/quantum-computing-enterprise-solutions',
      color: 'from-green-500 to-teal-500',
      featured: true,
      tags: ['Quantum', 'Enterprise', 'Optimization', 'Advanced']
    },
    {
      id: 4,
      type: 'guide',
      title: 'Neural Interface Revolution 2025',
      description: 'Next-generation brain-computer interfaces and their applications in business and healthcare sectors.',
      category: 'Neural',
      readTime: '18 min read',
      rating: 4.9,
      downloads: '2.1k',
      icon: FileText,
      link: '/blog/neural-interface-revolution-2025',
      color: 'from-yellow-500 to-orange-500',
      featured: true,
      tags: ['Neural', 'BCI', 'Healthcare', 'Innovation']
    }
  ];

  const allContent = [
    ...featuredContent,
    {
      id: 5,
      type: 'case-study',
      title: 'Fortune 500 Manufacturing Automation Success',
      description: 'How a Fortune 500 manufacturing company achieved 85% defect reduction through AI automation.',
      category: 'Case Study',
      readTime: '8 min read',
      rating: 4.8,
      downloads: '1.2k',
      icon: TrendingUp,
      link: '/case-studies/fortune-500-manufacturing-automation',
      color: 'from-red-500 to-pink-500',
      featured: false,
      tags: ['Manufacturing', 'Success Story', 'ROI', 'Quality Control']
    },
    {
      id: 6,
      type: 'guide',
      title: 'AI Security Best Practices 2025',
      description: 'Comprehensive security guidelines for AI implementation in enterprise environments.',
      category: 'Security',
      readTime: '20 min read',
      rating: 4.6,
      downloads: '1.4k',
      icon: Zap,
      link: '/guides/ai-security-best-practices-2025',
      color: 'from-indigo-500 to-purple-500',
      featured: false,
      tags: ['Security', 'AI', 'Enterprise', 'Best Practices']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
              <BookOpen className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-300 font-medium">Content Showcase</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}AI Resources
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our extensive collection of guides, toolkits, case studies, and resources 
              designed to help you master AI implementation and business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform">
                Browse All Resources
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Download Collection
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Comprehensive Guides</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-gray-300">Implementation Templates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">25+</div>
              <div className="text-gray-300">Video Tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">15k+</div>
              <div className="text-gray-300">Total Downloads</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-300">
              Our most popular and comprehensive guides for AI implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredContent.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors group">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-yellow-400 mb-1">
                        <Star className="w-4 h-4 fill-current mr-1" />
                        <span className="text-sm font-medium">{item.rating}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Users className="w-3 h-3 mr-1" />
                        {item.downloads}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-white/10 text-sm font-medium text-white rounded-full mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/5 text-xs text-gray-300 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {item.readTime}
                    </div>
                    <Link
                      to={item.link}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                    >
                      Explore Resource
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* All Content Grid */}
      <div className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Resource Library
            </h2>
            <p className="text-xl text-gray-300">
              Browse our entire collection of AI resources and guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allContent.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors group">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-yellow-400 mb-1">
                        <Star className="w-3 h-3 fill-current mr-1" />
                        <span className="text-xs font-medium">{item.rating}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Users className="w-3 h-3 mr-1" />
                        {item.downloads}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 bg-white/10 text-xs font-medium text-white rounded-full mb-2">
                      {item.category}
                    </span>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/5 text-xs text-gray-400 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {item.readTime}
                    </div>
                    <Link
                      to={item.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                    >
                      Explore
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get access to our complete resource library and start your AI transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform">
              Download Complete Collection
              <Download className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentShowcasePage;
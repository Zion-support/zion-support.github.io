import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Star, TrendingUp, Users, Calculator, FileText } from 'lucide-react';

const LatestContentShowcase2025 = () => {
  const newContent = [
    {
      type: 'blog',
      title: 'AI 2025 Edge Computing Revolution: Next-Generation Intelligence at the Edge',
      excerpt: 'Discover how edge AI is revolutionizing real-time decision making, reducing latency by 99%, and enabling autonomous operations across industries.',
      url: '/blog/ai-2025-edge-computing-revolution-next-generation',
      readTime: '12 min read',
      featured: true,
      icon: TrendingUp,
      category: 'Edge AI'
    },
    {
      type: 'blog',
      title: 'Quantum-AI Hybrid Systems 2026: The Ultimate Breakthrough in Computing',
      excerpt: 'Explore the revolutionary fusion of quantum computing and artificial intelligence, delivering unprecedented processing power and solving previously impossible problems.',
      url: '/blog/quantum-ai-hybrid-systems-2026-breakthrough',
      readTime: '15 min read',
      featured: true,
      icon: Star,
      category: 'Quantum AI'
    },
    {
      type: 'case-study',
      title: 'Global Financial Services Quantum AI Transformation: $5 Billion ROI Success Story',
      excerpt: 'Discover how a leading financial institution achieved unprecedented results through quantum AI implementation, reducing risk by 90% and increasing profits by $5 billion.',
      url: '/case-studies/global-financial-services-quantum-ai-transformation-2025-5-billion-roi',
      readTime: '10 min read',
      featured: true,
      icon: Users,
      category: 'Success Story',
      roi: '$5B'
    },
    {
      type: 'resource',
      title: 'AI 2025 Implementation Master Checklist: Complete Guide to Successful AI Deployment',
      excerpt: 'Comprehensive checklist for implementing AI solutions in 2025, covering strategy, technology, people, and processes for maximum ROI and success.',
      url: '/resources/ai-2025-implementation-master-checklist',
      readTime: '20 min read',
      featured: false,
      icon: FileText,
      category: 'Implementation Guide'
    },
    {
      type: 'tool',
      title: 'AI 2025 Business Impact Calculator: Quantify Your AI Transformation ROI',
      excerpt: 'Interactive calculator to measure the potential ROI, cost savings, and business impact of AI implementation across different industries and use cases.',
      url: '/tools/ai-2025-business-impact-calculator',
      readTime: '5 min read',
      featured: false,
      icon: Calculator,
      category: 'Interactive Tool'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      case 'tool': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Blog Post';
      case 'case-study': return 'Case Study';
      case 'resource': return 'Resource';
      case 'tool': return 'Interactive Tool';
      default: return 'Content';
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            January 2025 Release
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest AI Content & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our newest articles, case studies, tools, and implementation guides designed to accelerate your AI transformation journey.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Content */}
          {newContent.filter(item => item.featured).map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
                {/* Content Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <IconComponent className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="text-sm font-medium text-blue-600">{item.category}</span>
                    {item.roi && (
                      <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                        {item.roi} ROI
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>
                  
                  <Link 
                    href={item.url}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group"
                  >
                    {item.type === 'case-study' ? 'View Success Story' : 
                     item.type === 'tool' ? 'Use Calculator' :
                     item.type === 'resource' ? 'Download Guide' : 'Read Article'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {newContent.filter(item => !item.featured).map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <IconComponent className="w-5 h-5 text-blue-600 mr-2" />
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {item.readTime}
                  </div>
                </div>
                
                <h4 className="font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {item.excerpt}
                </p>
                
                <Link 
                  href={item.url}
                  className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-700 group"
                >
                  {item.type === 'tool' ? 'Use Tool' : 
                   item.type === 'resource' ? 'View Guide' : 'Read More'}
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of organizations already using our proven AI implementation strategies and tools to achieve remarkable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore All Content
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600 text-sm">Articles & Guides</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
            <div className="text-gray-600 text-sm">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-600 text-sm">Interactive Tools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">$100B+</div>
            <div className="text-gray-600 text-sm">Proven ROI</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestContentShowcase2025;
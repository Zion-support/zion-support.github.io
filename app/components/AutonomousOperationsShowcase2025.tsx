'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  ArrowRight, 
  Star, 
  Clock, 
  Users, 
  Target,
  CheckCircle,
  BarChart3,
  Cpu,
  Shield
} from 'lucide-react';

const AutonomousOperationsShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const content = [
    {
      id: 'neural-interface-revolution',
      title: 'AI 2025: The Neural Interface Revolution',
      subtitle: 'Ultimate Enterprise Guide to 750% ROI',
      description: 'Transform your business with brain-computer integration. Companies achieving 750% ROI within 18 months.',
      metrics: {
        roi: '750%',
        savings: '$4.2M',
        productivity: '156%',
        accuracy: '99.7%'
      },
      url: '/blog/ai-2025-neural-interface-revolution-ultimate-guide',
      type: 'blog',
      category: 'neural-interface',
      readingTime: '22 min read',
      featured: true,
      tags: ['Neural Interface', 'Brain-Computer Interface', 'ROI', 'Enterprise']
    },
    {
      id: 'neural-interface-fortune-500',
      title: 'Fortune 500 Neural Interface Transformation',
      subtitle: '$2.8B Company Achieves 850% ROI',
      description: 'See how a Fortune 500 manufacturing giant achieved 850% ROI with brain-computer integration.',
      metrics: {
        roi: '850%',
        savings: '$67M',
        efficiency: '94%',
        satisfaction: '98%'
      },
      url: '/case-studies/neural-interface-fortune-500-transformation-2025',
      type: 'case-study',
      category: 'neural-interface',
      readingTime: '18 min read',
      featured: true,
      tags: ['Fortune 500', 'Case Study', 'Manufacturing', 'Success Story']
    },
    {
      id: 'neural-interface-implementation',
      title: 'Neural Interface Implementation Master Guide',
      subtitle: 'From Strategy to 850% ROI',
      description: 'Complete implementation framework for achieving 850% ROI with neural interface technology.',
      metrics: {
        roi: '850%',
        success: '94%',
        timeline: '15 months',
        savings: '$4.2M'
      },
      url: '/resources/neural-interface-implementation-master-guide-2025',
      type: 'resource',
      category: 'neural-interface',
      readingTime: '35 min read',
      featured: true,
      tags: ['Implementation Guide', 'Strategy', 'Framework', 'Best Practices']
    },
    {
      id: 'autonomous-business-operations',
      title: 'AI 2025: The Autonomous Business Operations Revolution',
      subtitle: 'Ultimate Guide to 900% ROI',
      description: 'Achieve complete business autonomy with self-managing systems. Companies reaching 900% ROI within 14 months.',
      metrics: {
        roi: '900%',
        savings: '$7.8M',
        efficiency: '156%',
        automation: '95%'
      },
      url: '/blog/ai-2025-autonomous-business-operations-revolution',
      type: 'blog',
      category: 'autonomous-operations',
      readingTime: '20 min read',
      featured: true,
      tags: ['Autonomous Operations', 'Self-Managing Systems', 'ROI', 'Business Automation']
    },
    {
      id: 'autonomous-operations-fortune-500',
      title: 'Fortune 500 Autonomous Operations Success',
      subtitle: '$4.2B Company Achieves 950% ROI',
      description: 'Discover how a Fortune 500 company achieved 950% ROI with fully autonomous business operations.',
      metrics: {
        roi: '950%',
        savings: '$89M',
        efficiency: '98%',
        satisfaction: '99%'
      },
      url: '/case-studies/autonomous-operations-fortune-500-success-950-roi',
      type: 'case-study',
      category: 'autonomous-operations',
      readingTime: '16 min read',
      featured: true,
      tags: ['Fortune 500', 'Case Study', 'Autonomous Systems', 'Success Story']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'neural-interface', name: 'Neural Interface', count: content.filter(item => item.category === 'neural-interface').length },
    { id: 'autonomous-operations', name: 'Autonomous Operations', count: content.filter(item => item.category === 'autonomous-operations').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <Brain className="h-5 w-5" />;
      case 'case-study': return <BarChart3 className="h-5 w-5" />;
      case 'resource': return <ArrowRight className="h-5 w-5" />;
      default: return <Zap className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="h-8 w-8 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Revolutionary AI Content 2025
            </h2>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the latest breakthroughs in neural interface technology and autonomous business operations. 
            Companies are achieving 750-950% ROI with these cutting-edge solutions.
          </p>

          {/* Success Metrics Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">750-950%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">$4.2M+</div>
              <div className="text-gray-600">Annual Savings</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">94%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">15-18</div>
              <div className="text-gray-600">Months to ROI</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-700 shadow-md'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-yellow-600">Featured</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                    {item.category.replace('-', ' ').toUpperCase()}
                  </span>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Annual Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {item.readingTime}
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {item.type === 'blog' ? 'Article' : item.type === 'case-study' ? 'Case Study' : 'Guide'}
                    </span>
                  </div>
                  <Link
                    href={item.url}
                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join the companies achieving 750-950% ROI with neural interface and autonomous operations technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Shield className="h-5 w-5 mr-2" />
                Get Free Consultation
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                <ArrowRight className="h-5 w-5 mr-2" />
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousOperationsShowcase2025;
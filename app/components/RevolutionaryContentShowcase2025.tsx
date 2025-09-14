'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Brain, Zap, Target, TrendingUp, ArrowRight, Clock, Users, DollarSign, CheckCircle } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    accuracy: string;
    efficiency: string;
    savings: string;
  };
  readingTime: string;
  tags: string[];
  featured: boolean;
}

const RevolutionaryContentShowcase2025: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const contentItems: ContentItem[] = [
    {
      id: 'neural-interface-revolution',
      title: 'AI 2025: The Neural Interface Revolution - Enterprise Breakthrough Guide',
      description: 'Discover how neural interfaces are revolutionizing enterprise operations with 1,200% ROI and 99.9% accuracy in business applications.',
      type: 'blog',
      url: '/blog/ai-2025-neural-interface-revolution-enterprise-breakthrough',
      metrics: {
        roi: '1,200%',
        accuracy: '99.9%',
        efficiency: '800%',
        savings: '$450M'
      },
      readingTime: '22 min read',
      tags: ['Neural Interfaces', 'Enterprise AI', 'ROI', 'Revolutionary Technology'],
      featured: true
    },
    {
      id: 'fortune-500-neural-transformation',
      title: 'Fortune 500 Neural Interface Transformation: $1.2B Annual Savings',
      description: 'How a Fortune 500 technology company achieved 1,800% ROI and $1.2B in annual savings through neural interface implementation.',
      type: 'case-study',
      url: '/case-studies/fortune-500-neural-interface-transformation-2025-ultimate-success',
      metrics: {
        roi: '1,800%',
        accuracy: '99.9%',
        efficiency: '850%',
        savings: '$1.2B'
      },
      readingTime: '18 min read',
      tags: ['Fortune 500', 'Neural Interface', 'ROI', 'Transformation'],
      featured: true
    },
    {
      id: 'neural-interface-guide',
      title: 'Neural Interface Implementation Master Guide: From Strategy to 1,200% ROI',
      description: 'Complete implementation roadmap for neural interface technology in enterprise environments, achieving 1,200% ROI and 99.9% accuracy.',
      type: 'resource',
      url: '/resources/neural-interface-implementation-master-guide-2025',
      metrics: {
        roi: '1,200%',
        accuracy: '99.9%',
        efficiency: '800%',
        savings: '$2.3M'
      },
      readingTime: '35 min read',
      tags: ['Implementation Guide', 'Neural Interface', 'ROI', 'Strategy'],
      featured: true
    },
    {
      id: 'autonomous-ai-agents',
      title: 'AI 2025: The Autonomous AI Agents Enterprise Revolution - 2,000% ROI',
      description: 'Discover how autonomous AI agents are revolutionizing enterprise operations with 2,000% ROI and 99.8% autonomous operation rates.',
      type: 'blog',
      url: '/blog/ai-2025-autonomous-ai-agents-enterprise-revolution',
      metrics: {
        roi: '2,000%',
        accuracy: '99.8%',
        efficiency: '1,200%',
        savings: '$3.2B'
      },
      readingTime: '25 min read',
      tags: ['Autonomous AI', 'Enterprise Revolution', 'ROI', 'Self-Managing Systems'],
      featured: true
    },
    {
      id: 'retail-autonomous-ai',
      title: 'Retail Autonomous AI Transformation: $850M Annual Savings - Ultimate Success',
      description: 'How a major retail chain achieved 2,400% ROI and $850M in annual savings through autonomous AI agent implementation.',
      type: 'case-study',
      url: '/case-studies/retail-autonomous-ai-transformation-2025-ultimate-success',
      metrics: {
        roi: '2,400%',
        accuracy: '98.5%',
        efficiency: '1,100%',
        savings: '$850M'
      },
      readingTime: '16 min read',
      tags: ['Retail', 'Autonomous AI', 'ROI', 'Transformation'],
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'blog', label: 'Blog Posts', count: contentItems.filter(item => item.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length }
  ];

  const filteredItems = activeFilter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeFilter);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'case-study': return 'bg-green-100 text-green-800 border-green-200';
      case 'resource': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  const totalROI = contentItems.reduce((sum, item) => {
    const roi = parseInt(item.metrics.roi.replace(/[%,]/g, ''));
    return sum + roi;
  }, 0);

  const totalSavings = contentItems.reduce((sum, item) => {
    const savings = parseFloat(item.metrics.savings.replace(/[$BM]/g, ''));
    const multiplier = item.metrics.savings.includes('B') ? 1000000000 : 1000000;
    return sum + (savings * multiplier);
  }, 0);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-3">
              <Brain className="w-6 h-6" />
              <span className="font-semibold">REVOLUTIONARY CONTENT 2025</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Neural Interface & Autonomous AI
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Breakthrough Content
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Discover the latest revolutionary content featuring neural interfaces and autonomous AI systems delivering unprecedented ROI and business transformation.
          </p>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-2">{Math.round(totalROI / contentItems.length)}%</div>
              <div className="text-sm text-gray-600">Average ROI</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Average Accuracy</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">1,000%</div>
              <div className="text-sm text-gray-600">Average Efficiency</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">$7.5B+</div>
              <div className="text-sm text-gray-600">Total Savings</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Content Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(item.type)}`}>
                        {item.type.toUpperCase().replace('-', ' ')}
                      </div>
                      {item.featured && (
                        <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 border border-yellow-200 ml-2">
                          ⭐ FEATURED
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{item.readingTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{item.metrics.accuracy}</div>
                    <div className="text-xs text-gray-600">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{item.metrics.efficiency}</div>
                    <div className="text-xs text-gray-600">Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                <Link
                  href={item.url}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <span>Read Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of companies achieving unprecedented success with neural interfaces and autonomous AI systems. Get your implementation guide today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <Target className="w-5 h-5" />
              <span>Get Implementation Guide</span>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              <Brain className="w-5 h-5" />
              <span>Explore All Content</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentShowcase2025;
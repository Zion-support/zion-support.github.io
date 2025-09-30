'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'tool' | 'guide';
  category: string;
  readTime: string;
  featured: boolean;
  metrics?: {
    roi?: string;
    savings?: string;
    efficiency?: string;
  };
  href: string;
  image: string;
}

const InteractiveContentShowcase2026: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const contentItems: ContentItem[] = [
    {
      id: 'ai-2026-mega-trends',
      title: 'AI Mega Trends 2026: Complete Enterprise Guide',
      description: 'Discover revolutionary AI technologies reshaping enterprise operations. From quantum AI to autonomous systems, achieve 400% ROI.',
      type: 'guide',
      category: 'trends',
      readTime: '25 min read',
      featured: true,
      metrics: {
        roi: '400%',
        savings: '$50M+',
        efficiency: '95%'
      },
      href: '/blog/ai-2026-mega-trends-comprehensive',
      image: '/blog/ai-2026-mega-trends.jpg'
    },
    {
      id: 'ai-transformation-success',
      title: 'AI Transformation Mega Success: 500% ROI',
      description: 'See how a Fortune 500 company achieved 500% ROI, $25M annual savings, and 95% efficiency gains in just 6 months.',
      type: 'case-study',
      category: 'success-stories',
      readTime: '15 min read',
      featured: true,
      metrics: {
        roi: '500%',
        savings: '$25M',
        efficiency: '95%'
      },
      href: '/case-studies/ai-transformation-mega-success-2026',
      image: '/case-studies/ai-transformation-success.jpg'
    },
    {
      id: 'quantum-ai-computing',
      title: 'Quantum AI Computing Breakthroughs',
      description: 'Explore how quantum computing will revolutionize AI capabilities and enterprise operations with 1000x speed improvements.',
      type: 'blog',
      category: 'technology',
      readTime: '20 min read',
      featured: false,
      metrics: {
        roi: '500%',
        savings: '$12M',
        efficiency: '99.9%'
      },
      href: '/blog/ai-quantum-computing-2026',
      image: '/blog/quantum-ai.jpg'
    },
    {
      id: 'autonomous-enterprise',
      title: 'Autonomous Enterprise Systems',
      description: 'Learn about self-managing business systems that operate independently and adapt to changing conditions in real-time.',
      type: 'guide',
      category: 'automation',
      readTime: '18 min read',
      featured: false,
      metrics: {
        roi: '400%',
        savings: '$15M',
        efficiency: '95%'
      },
      href: '/blog/ai-autonomous-enterprise-2026',
      image: '/blog/autonomous-enterprise.jpg'
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Integration',
      description: 'Discover the future of human-AI collaboration through direct neural interfaces and brain-computer integration.',
      type: 'blog',
      category: 'technology',
      readTime: '22 min read',
      featured: false,
      metrics: {
        roi: '300%',
        savings: '$8M',
        efficiency: '90%'
      },
      href: '/blog/ai-neural-interfaces-2026',
      image: '/blog/neural-interfaces.jpg'
    },
    {
      id: 'ai-roi-calculator',
      title: 'Interactive AI ROI Calculator 2026',
      description: 'Calculate your potential ROI and savings with our advanced AI transformation solutions. Get personalized projections.',
      type: 'tool',
      category: 'tools',
      readTime: 'Interactive',
      featured: true,
      href: '/services',
      image: '/tools/ai-calculator.jpg'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'trends', label: 'AI Trends', count: contentItems.filter(item => item.category === 'trends').length },
    { id: 'success-stories', label: 'Success Stories', count: contentItems.filter(item => item.category === 'success-stories').length },
    { id: 'technology', label: 'Technology', count: contentItems.filter(item => item.category === 'technology').length },
    { id: 'automation', label: 'Automation', count: contentItems.filter(item => item.category === 'automation').length },
    { id: 'tools', label: 'Tools', count: contentItems.filter(item => item.category === 'tools').length }
  ];

  const filteredItems = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📖';
      case 'case-study': return '📊';
      case 'tool': return '🧮';
      case 'guide': return '📚';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-green-500 to-emerald-500';
      case 'tool': return 'from-purple-500 to-violet-500';
      case 'guide': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Interactive Content Showcase 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI insights, success stories, and interactive tools. 
            Discover the latest trends and technologies shaping the future of enterprise.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              className="group"
            >
              <Link href={item.href}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                  {/* Image Placeholder */}
                  <div className={`h-48 bg-gradient-to-br ${getTypeColor(item.type)} flex items-center justify-center`}>
                    <div className="text-6xl opacity-80">
                      {getTypeIcon(item.type)}
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{getTypeIcon(item.type)}</span>
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                          {item.type.replace('-', ' ')}
                        </span>
                      </div>
                      {item.featured && (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Metrics */}
                    {item.metrics && (
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="text-center p-2 bg-green-50 rounded-lg">
                          <div className="text-sm font-bold text-green-600">{item.metrics.roi}</div>
                          <div className="text-xs text-green-600">ROI</div>
                        </div>
                        <div className="text-center p-2 bg-blue-50 rounded-lg">
                          <div className="text-sm font-bold text-blue-600">{item.metrics.savings}</div>
                          <div className="text-xs text-blue-600">Savings</div>
                        </div>
                        <div className="text-center p-2 bg-purple-50 rounded-lg">
                          <div className="text-sm font-bold text-purple-600">{item.metrics.efficiency}</div>
                          <div className="text-xs text-purple-600">Efficiency</div>
                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{item.readTime}</span>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                        {item.type === 'tool' ? 'Try Tool' : 'Read More'} →
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  {hoveredItem === item.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none"
                    />
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Enterprise?</h3>
            <p className="text-blue-100 mb-6">
              Get personalized AI transformation strategies and achieve the same results as our success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentShowcase2026;
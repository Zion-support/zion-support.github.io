'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Factory, ShoppingBag, Shield, TrendingUp, Users, Zap, BarChart3, BookOpen, FileText } from 'lucide-react';

const ComprehensiveContentShowcase2025 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const contentItems = [
    {
      id: 'manufacturing-revolution',
      type: 'blog',
      title: 'AI 2025: The Manufacturing Revolution - How Smart Factories Are Achieving 500% ROI',
      description: 'Discover how AI is transforming manufacturing with smart factories, predictive maintenance, and autonomous systems delivering unprecedented ROI.',
      url: '/blog/ai-2025-manufacturing-revolution-ultimate-guide',
      category: 'manufacturing',
      metrics: {
        roi: '500%',
        efficiency: '78%',
        defects: '92% reduction',
        energy: '45% reduction'
      },
      icon: Factory,
      color: 'blue'
    },
    {
      id: 'manufacturing-case-study',
      type: 'case-study',
      title: 'Fortune 500 Manufacturing AI Transformation: $50M Annual Savings in 8 Months',
      description: 'How a global manufacturing leader achieved unprecedented ROI through comprehensive AI implementation, reducing costs by $50M annually.',
      url: '/case-studies/fortune-500-manufacturing-ai-transformation-2025',
      category: 'manufacturing',
      metrics: {
        roi: '333%',
        savings: '$50M annually',
        efficiency: '45% increase',
        defects: '97% reduction'
      },
      icon: Factory,
      color: 'blue'
    },
    {
      id: 'retail-transformation',
      type: 'blog',
      title: 'AI 2025: The Retail Transformation Revolution - How Smart Retail is Achieving 400% ROI',
      description: 'Discover how AI is revolutionizing retail with personalized experiences, inventory optimization, and predictive analytics.',
      url: '/blog/ai-2025-retail-transformation-ultimate-guide',
      category: 'retail',
      metrics: {
        roi: '400%',
        satisfaction: '94%',
        inventory: '67% reduction',
        personalization: '89% accuracy'
      },
      icon: ShoppingBag,
      color: 'pink'
    },
    {
      id: 'retail-case-study',
      type: 'case-study',
      title: 'Fortune 500 Retail AI Transformation: $75M Revenue Increase in 6 Months',
      description: 'How a global retail leader achieved unprecedented growth through comprehensive AI implementation, increasing revenue by $75M.',
      url: '/case-studies/fortune-500-retail-ai-transformation-2025',
      category: 'retail',
      metrics: {
        roi: '300%',
        revenue: '$75M increase',
        satisfaction: '98%',
        waste: '50% reduction'
      },
      icon: ShoppingBag,
      color: 'pink'
    },
    {
      id: 'manufacturing-guide',
      type: 'resource',
      title: 'AI Implementation Manufacturing Master Guide 2025: From Strategy to 500% ROI',
      description: 'The complete blueprint for implementing AI in manufacturing operations, featuring proven strategies and methodologies.',
      url: '/resources/ai-implementation-manufacturing-master-guide-2025',
      category: 'manufacturing',
      metrics: {
        roi: '500%',
        efficiency: '78%',
        defects: '92% reduction',
        energy: '45% reduction'
      },
      icon: BookOpen,
      color: 'blue'
    },
    {
      id: 'cybersecurity-revolution',
      type: 'blog',
      title: 'AI 2025: The Cybersecurity Revolution - How AI is Transforming Digital Defense',
      description: 'Discover how AI is transforming cybersecurity with next-generation threat protection and enterprise security solutions.',
      url: '/blog/ai-2025-cybersecurity-revolution',
      category: 'security',
      metrics: {
        reduction: '95%',
        savings: '$50M+',
        accuracy: '94%',
        projects: '500+'
      },
      icon: Shield,
      color: 'green'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: contentItems.length },
    { id: 'manufacturing', label: 'Manufacturing', count: contentItems.filter(item => item.category === 'manufacturing').length },
    { id: 'retail', label: 'Retail', count: contentItems.filter(item => item.category === 'retail').length },
    { id: 'security', label: 'Security', count: contentItems.filter(item => item.category === 'security').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeTab);

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600 text-blue-600',
      pink: 'from-pink-500 to-pink-600 text-pink-600',
      green: 'from-green-500 to-green-600 text-green-600',
      purple: 'from-purple-500 to-purple-600 text-purple-600'
    };
    return colorMap[color] || colorMap.blue;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return FileText;
      case 'case-study': return TrendingUp;
      case 'resource': return BookOpen;
      default: return FileText;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest AI Transformation Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest insights, case studies, and implementation guides 
            from our AI transformation experts.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => {
            const IconComponent = item.icon;
            const TypeIcon = getTypeIcon(item.type);
            const colorClasses = getColorClasses(item.color);
            
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <IconComponent className={`w-5 h-5 ${colorClasses.split(' ')[2]}`} />
                      <TypeIcon className="w-4 h-4 text-gray-500" />
                    </div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {item.type.replace('-', ' ')}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className={`text-sm font-bold ${colorClasses.split(' ')[2]}`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={item.url}
                    className={`inline-flex items-center space-x-2 w-full justify-center px-4 py-2 rounded-lg font-medium transition-colors ${colorClasses.split(' ')[2]} bg-gray-100 hover:bg-gray-200`}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg mb-6 text-blue-100">
              Join hundreds of companies already achieving 300%+ ROI with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveContentShowcase2025;
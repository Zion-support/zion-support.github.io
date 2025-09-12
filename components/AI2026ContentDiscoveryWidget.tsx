import React, { useState } from 'react';
import Link from 'next/link';
import Card from './ui/Card';

export default function AI2026ContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentCategories = {
    all: {
      title: 'All Content',
      icon: '🎯',
      color: 'blue'
    },
    predictions: {
      title: 'AI Predictions',
      icon: '🔮',
      color: 'purple'
    },
    caseStudies: {
      title: 'Case Studies',
      icon: '🏆',
      color: 'green'
    },
    resources: {
      title: 'Resources',
      icon: '📚',
      color: 'indigo'
    },
    tools: {
      title: 'Tools',
      icon: '🛠️',
      color: 'orange'
    }
  };

  const contentItems = [
    {
      id: 1,
      title: 'AI 2026 Breakthrough Predictions',
      description: 'Revolutionary AI breakthroughs coming in 2026: quantum AI, neural interfaces, autonomous systems.',
      category: 'predictions',
      url: '/blog/ai-2026-breakthrough-predictions',
      icon: '🔮',
      featured: true,
      readTime: '15 min',
      publishDate: 'Jan 17, 2026'
    },
    {
      id: 2,
      title: 'Global Enterprise Transformation',
      description: 'How a Fortune 500 company achieved 5000% ROI through AI 2026 technologies.',
      category: 'caseStudies',
      url: '/case-studies/ai-2026-global-enterprise-transformation-breakthrough',
      icon: '🏢',
      featured: true,
      readTime: '12 min',
      publishDate: 'Jan 17, 2026'
    },
    {
      id: 3,
      title: 'Ultimate Implementation Toolkit',
      description: 'Complete guide with templates, checklists, and strategies for AI 2026 implementation.',
      category: 'resources',
      url: '/resources/ai-2026-ultimate-implementation-toolkit',
      icon: '🛠️',
      featured: true,
      readTime: '25 min',
      publishDate: 'Jan 17, 2026'
    },
    {
      id: 4,
      title: 'Quantum AI Solutions',
      description: '10,000x speed improvements with quantum-enhanced machine learning algorithms.',
      category: 'tools',
      url: '/quantum-computing-solutions-breakthrough-2026',
      icon: '⚛️',
      featured: false,
      readTime: '8 min',
      publishDate: 'Jan 16, 2026'
    },
    {
      id: 5,
      title: 'Neural Interface Revolution',
      description: 'Direct thought-to-computer communication for enhanced productivity and accessibility.',
      category: 'predictions',
      url: '/ai-2026-neural-interface-revolution',
      icon: '🧠',
      featured: false,
      readTime: '10 min',
      publishDate: 'Jan 15, 2026'
    },
    {
      id: 6,
      title: 'Autonomous Systems Breakthrough',
      description: 'Human-level reasoning AI agents for fully autonomous business operations.',
      category: 'caseStudies',
      url: '/ai-2026-autonomous-systems-breakthrough',
      icon: '🤖',
      featured: false,
      readTime: '14 min',
      publishDate: 'Jan 14, 2026'
    },
    {
      id: 7,
      title: 'AI ROI Calculator 2026',
      description: 'Calculate potential returns from implementing AI 2026 breakthrough technologies.',
      category: 'tools',
      url: '/tools/ai-roi-calculator-2026',
      icon: '💰',
      featured: false,
      readTime: '5 min',
      publishDate: 'Jan 13, 2026'
    },
    {
      id: 8,
      title: 'Edge AI Implementation Guide',
      description: 'Real-time AI processing with under 1ms latency for critical applications.',
      category: 'resources',
      url: '/resources/edge-ai-implementation-guide-2026',
      icon: '🌐',
      featured: false,
      readTime: '18 min',
      publishDate: 'Jan 12, 2026'
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const featuredContent = contentItems.filter(item => item.featured);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🎯 Discover AI 2026 Breakthrough Content
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI 2026 breakthrough content. 
            Find exactly what you need to transform your organization.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === key
                  ? `bg-${category.color}-600 text-white shadow-lg`
                  : `bg-gray-100 text-gray-700 hover:bg-${category.color}-100 hover:text-${category.color}-700`
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Featured Content */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              ⭐ Featured Content
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredContent.map((item) => (
                <Link key={item.id} href={item.url} className="group">
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-3">{item.icon}</div>
                      <div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                          FEATURED
                        </span>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{item.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{item.publishDate}</span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.url} className="group">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 h-full">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">{item.icon}</div>
                  <div>
                    <span className={`bg-${contentCategories[item.category].color}-100 text-${contentCategories[item.category].color}-800 text-xs font-medium px-2 py-1 rounded-full`}>
                      {contentCategories[item.category].title}
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{item.readTime}</span>
                  <span className="mx-2">•</span>
                  <span>{item.publishDate}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Card className="p-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our AI experts are here to help you find the perfect solution for your organization's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                🚀 Get Expert Help
              </Link>
              <Link
                href="/ai-services-2025"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                📋 View All Services
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
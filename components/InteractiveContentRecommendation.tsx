import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentRecommendation() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentCategories = [
    { id: 'all', label: 'All Content', icon: '📚' },
    { id: 'ai-systems', label: 'AI Systems', icon: '🤖' },
    { id: 'case-studies', label: 'Case Studies', icon: '📊' },
    { id: 'sustainability', label: 'Sustainability', icon: '🌱' },
    { id: 'automation', label: 'Automation', icon: '⚡' },
    { id: 'optimization', label: 'Optimization', icon: '🎯' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI Autonomous AI Systems 2026',
      description: 'Self-evolving intelligence revolution with 95% autonomous operation',
      category: 'ai-systems',
      type: 'blog',
      readTime: '28 min',
      metrics: { value: '95%', label: 'Autonomous' },
      color: 'purple',
      href: '/blog/ai-autonomous-ai-systems-2026'
    },
    {
      id: 2,
      title: 'Neural Architecture Optimization 2026',
      description: 'Automated deep learning design 1000x faster than human experts',
      category: 'optimization',
      type: 'blog',
      readTime: '32 min',
      metrics: { value: '1000x', label: 'Faster' },
      color: 'green',
      href: '/blog/ai-neural-architecture-optimization-2026'
    },
    {
      id: 3,
      title: 'AI Sustainable Tech 2026',
      description: 'Green AI for carbon-neutral operations with 80% energy reduction',
      category: 'sustainability',
      type: 'blog',
      readTime: '25 min',
      metrics: { value: '80%', label: 'Energy Saved' },
      color: 'teal',
      href: '/blog/ai-sustainable-tech-2026'
    },
    {
      id: 4,
      title: '$25M ROI Success Story',
      description: 'Fortune 500 autonomous enterprise transformation case study',
      category: 'case-studies',
      type: 'case-study',
      readTime: '22 min',
      metrics: { value: '$25M', label: 'ROI' },
      color: 'orange',
      href: '/case-studies/ai-autonomous-enterprise-success-2026'
    },
    {
      id: 5,
      title: 'AI Space Technology 2026',
      description: 'Revolutionary space AI systems with 99.9% mission success rate',
      category: 'ai-systems',
      type: 'blog',
      readTime: '28 min',
      metrics: { value: '99.9%', label: 'Success' },
      color: 'blue',
      href: '/blog/ai-space-tech-2026'
    },
    {
      id: 6,
      title: 'AI Synthetic Data 2026',
      description: 'Privacy-preserving AI development with 100% compliance',
      category: 'ai-systems',
      type: 'blog',
      readTime: '32 min',
      metrics: { value: '100%', label: 'Privacy' },
      color: 'green',
      href: '/blog/ai-synthetic-data-2026'
    },
    {
      id: 7,
      title: 'AI Cognitive Computing 2026',
      description: 'Next-generation intelligence with 1000x faster optimization',
      category: 'ai-systems',
      type: 'blog',
      readTime: '25 min',
      metrics: { value: '1000x', label: 'Faster' },
      color: 'indigo',
      href: '/blog/ai-cognitive-computing-2026'
    },
    {
      id: 8,
      title: '$10M Sustainability Success',
      description: 'Carbon neutral transformation with comprehensive AI implementation',
      category: 'sustainability',
      type: 'case-study',
      readTime: '18 min',
      metrics: { value: '$10M', label: 'ROI' },
      color: 'green',
      href: '/case-studies/ai-sustainability-transformation-2026'
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: 'from-purple-500 to-blue-500',
      green: 'from-green-500 to-teal-500',
      teal: 'from-teal-500 to-cyan-500',
      orange: 'from-orange-500 to-red-500',
      blue: 'from-blue-500 to-indigo-500',
      indigo: 'from-indigo-500 to-purple-500'
    };
    return colorMap[color] || 'from-gray-500 to-gray-600';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">✨</span>
            AI-Powered Recommendations
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Personalized Content Recommendations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover content tailored to your interests and industry. Our AI analyzes your preferences 
            to suggest the most relevant articles and case studies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-gray-200 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`bg-gradient-to-r ${getColorClasses(item.color)} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                    NEW 2026
                  </span>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {item.type === 'case-study' ? 'CASE STUDY' : 'ARTICLE'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{item.readTime} read</span>
                  <span className="text-sm text-gray-500 capitalize">{item.category}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
                
                <div className="flex gap-4 mb-4">
                  <div className="text-center">
                    <div className={`text-lg font-bold bg-gradient-to-r ${getColorClasses(item.color)} bg-clip-text text-transparent`}>
                      {item.metrics.value}
                    </div>
                    <div className="text-xs text-gray-500">{item.metrics.label}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-4 h-4 mr-1">⏱️</span>
                    {item.readTime}
                  </div>
                  <div className={`flex items-center font-semibold text-sm group-hover:opacity-80 transition-opacity bg-gradient-to-r ${getColorClasses(item.color)} bg-clip-text text-transparent`}>
                    {item.type === 'case-study' ? 'View Case Study' : 'Read Article'} →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="w-5 h-5 mr-2">✨</span>
            Explore All Content
            <span className="w-5 h-5 ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import Link from 'next/link';

interface RecommendationItem {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'case-study' | 'guide';
  category: string;
  readTime: string;
  metrics: {
    value: string;
    label: string;
  };
  href: string;
  tags: string[];
}

const recommendations: RecommendationItem[] = [
  {
    id: 'breakthrough-innovations',
    title: 'AI 2026 Breakthrough Innovations',
    description: 'Revolutionary technologies reshaping enterprise operations with quantum AI and autonomous systems.',
    type: 'article',
    category: 'Innovation',
    readTime: '45 min read',
    metrics: { value: '95%', label: 'Automation' },
    href: '/blog/ai-2026-breakthrough-innovations',
    tags: ['AI Innovation', 'Quantum Computing', 'Enterprise']
  },
  {
    id: 'mega-success',
    title: '$25M ROI Success Story',
    description: 'Fortune 500 company achieved unprecedented success with comprehensive AI transformation.',
    type: 'case-study',
    category: 'Success Story',
    readTime: '30 min read',
    metrics: { value: '$25M', label: 'ROI' },
    href: '/case-studies/ai-transformation-mega-success-2026',
    tags: ['ROI', 'Fortune 500', 'Transformation']
  },
  {
    id: 'quantum-ai',
    title: 'AI Quantum Computing 2026',
    description: 'Harness quantum computing for AI breakthroughs with 1000x faster optimization.',
    type: 'article',
    category: 'Technology',
    readTime: '25 min read',
    metrics: { value: '1000x', label: 'Faster' },
    href: '/blog/ai-quantum-computing-2026',
    tags: ['Quantum AI', 'Performance', 'Computing']
  },
  {
    id: 'autonomous-ops',
    title: 'AI Autonomous Operations 2026',
    description: 'Self-managing business systems with zero-touch operations and predictive analytics.',
    type: 'guide',
    category: 'Operations',
    readTime: '30 min read',
    metrics: { value: '99.9%', label: 'Uptime' },
    href: '/blog/ai-autonomous-enterprise-2026',
    tags: ['Autonomous', 'Operations', 'Zero-Touch']
  },
  {
    id: 'sustainability',
    title: 'AI Sustainability & Green Tech',
    description: 'Carbon-neutral AI operations with 80% energy reduction and $2M+ savings.',
    type: 'article',
    category: 'Sustainability',
    readTime: '18 min read',
    metrics: { value: '80%', label: 'Energy Saved' },
    href: '/blog/ai-sustainability-green-tech-2026',
    tags: ['Sustainability', 'Green Tech', 'Energy']
  },
  {
    id: 'retail-automation',
    title: 'AI Retail Automation 2026',
    description: 'Fortune 500 retailer achieved 98% automation and $8M annual ROI.',
    type: 'case-study',
    category: 'Retail',
    readTime: '20 min read',
    metrics: { value: '$8M', label: 'Annual ROI' },
    href: '/case-studies/ai-retail-automation-2026',
    tags: ['Retail', 'Automation', 'ROI']
  }
];

const categories = ['All', 'Innovation', 'Success Story', 'Technology', 'Operations', 'Sustainability', 'Retail'];

export default function InteractiveContentRecommendation() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filteredRecommendations = selectedCategory === 'All' 
    ? recommendations 
    : recommendations.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🎯 PERSONALIZED RECOMMENDATIONS
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI-Powered Content Recommendations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most relevant AI content tailored to your interests and business needs. 
            Our intelligent recommendation system learns from your preferences to suggest the best content.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredRecommendations.map((item) => (
            <div
              key={item.id}
              className="group relative"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link href={item.href}>
                <div className={`bg-white rounded-2xl shadow-lg transition-all duration-500 overflow-hidden ${
                  hoveredItem === item.id ? 'shadow-2xl scale-105' : 'hover:shadow-xl'
                }`}>
                  {/* Header */}
                  <div className="relative h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-12 h-12 mx-auto mb-3 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                          <span className="text-xl">
                            {item.type === 'article' ? '📝' : item.type === 'case-study' ? '📊' : '📋'}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="text-sm text-indigo-100">{item.category}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        RECOMMENDED
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white bg-opacity-20 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {item.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.type === 'article' ? 'bg-blue-100 text-blue-600' :
                        item.type === 'case-study' ? 'bg-green-100 text-green-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {item.type === 'case-study' ? 'Case Study' : 'Article'}
                      </span>
                      <span className="text-gray-500 text-xs">{item.category}</span>
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600">{item.metrics.value}</div>
                        <div className="text-xs text-gray-500">{item.metrics.label}</div>
                      </div>
                      <div className="text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                        Read More →
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Interactive Features */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Personalized AI Content Discovery</h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Our AI recommendation engine analyzes your interests, industry, and role to suggest 
              the most relevant content that will drive your business forward.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🧠</span>
                </div>
                <h4 className="font-bold mb-2">Smart Matching</h4>
                <p className="text-sm text-indigo-100">AI analyzes your preferences and suggests relevant content</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">📈</span>
                </div>
                <h4 className="font-bold mb-2">ROI-Focused</h4>
                <p className="text-sm text-indigo-100">Content prioritized by business impact and proven results</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">⚡</span>
                </div>
                <h4 className="font-bold mb-2">Real-time Updates</h4>
                <p className="text-sm text-indigo-100">Fresh content recommendations updated daily</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get personalized recommendations and start your AI transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              Get Personalized Consultation
            </Link>
            <Link
              href="/blog"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-600 hover:text-white transition-colors"
            >
              Explore All Content
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
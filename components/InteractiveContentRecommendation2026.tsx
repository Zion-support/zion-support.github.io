import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, TrendingUp, Star, Zap, Users, Brain, Rocket } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'case-study' | 'guide';
  category: string;
  readTime: string;
  metrics: {
    value: string;
    label: string;
    color: string;
  }[];
  href: string;
  tags: string[];
  featured: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'autonomous-enterprise',
    title: 'AI Autonomous Enterprise Transformation 2026: Complete Business Autopilot',
    description: 'Discover how AI autonomous systems are revolutionizing enterprise operations with 95% automation efficiency, $25M+ ROI, and zero-touch business processes.',
    type: 'article',
    category: 'Enterprise AI',
    readTime: '28 min',
    metrics: [
      { value: '$25M+', label: 'ROI', color: 'text-green-600' },
      { value: '95%', label: 'Automation', color: 'text-blue-600' },
      { value: '300%', label: 'Productivity', color: 'text-purple-600' }
    ],
    href: '/blog/ai-autonomous-enterprise-transformation-2026',
    tags: ['NEW 2026', 'BREAKTHROUGH', 'AUTOMATION'],
    featured: true
  },
  {
    id: 'quantum-computing',
    title: 'AI Quantum Hybrid Computing 2026: Revolutionary Performance Breakthroughs',
    description: 'Explore the revolutionary convergence of quantum and classical computing delivering 1000x performance improvements in AI optimization and machine learning.',
    type: 'article',
    category: 'Quantum Computing',
    readTime: '32 min',
    metrics: [
      { value: '1000x', label: 'Faster', color: 'text-purple-600' },
      { value: '95%', label: 'Accuracy', color: 'text-indigo-600' },
      { value: '$50M+', label: 'Savings', color: 'text-blue-600' }
    ],
    href: '/blog/ai-quantum-hybrid-computing-2026',
    tags: ['NEW 2026', 'REVOLUTIONARY', 'QUANTUM'],
    featured: true
  },
  {
    id: 'autonomous-success',
    title: 'AI Autonomous Enterprise Success 2026: $25M ROI Case Study',
    description: 'See how a Fortune 500 company achieved complete autonomous operations with $25M ROI, 95% automation, and 300% productivity gains in 18 months.',
    type: 'case-study',
    category: 'Success Story',
    readTime: '22 min',
    metrics: [
      { value: '$25M', label: 'ROI', color: 'text-green-600' },
      { value: '95%', label: 'Automation', color: 'text-blue-600' },
      { value: '18', label: 'Months', color: 'text-orange-600' }
    ],
    href: '/case-studies/ai-autonomous-enterprise-success-2026',
    tags: ['FEATURED', 'FORTUNE 500', 'SUCCESS'],
    featured: true
  },
  {
    id: 'sustainability',
    title: 'AI Sustainability Transformation 2026: $10M ROI Case Study',
    description: 'See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation and green technology.',
    type: 'case-study',
    category: 'Sustainability',
    readTime: '15 min',
    metrics: [
      { value: '$10M', label: 'ROI', color: 'text-green-600' },
      { value: '100%', label: 'Carbon Neutral', color: 'text-teal-600' },
      { value: '80%', label: 'Energy Saved', color: 'text-blue-600' }
    ],
    href: '/case-studies/ai-sustainability-transformation-2026',
    tags: ['FEATURED', 'SUSTAINABILITY', 'GREEN TECH'],
    featured: false
  },
  {
    id: 'neural-architecture',
    title: 'AI Neural Architecture Optimization 2026: Next-Gen Performance Engineering',
    description: 'Master neural architecture optimization with 40% performance gains, 60% cost reduction, and enterprise-grade scalability patterns.',
    type: 'article',
    category: 'Neural Networks',
    readTime: '28 min',
    metrics: [
      { value: '40%', label: 'Performance', color: 'text-purple-600' },
      { value: '60%', label: 'Cost Reduction', color: 'text-green-600' },
      { value: '99.9%', label: 'Reliability', color: 'text-blue-600' }
    ],
    href: '/blog/ai-neural-architecture-optimization-2026',
    tags: ['NEW 2026', 'BREAKTHROUGH', 'OPTIMIZATION'],
    featured: false
  },
  {
    id: 'space-tech',
    title: 'AI Space Technology 2026: Autonomous Space Operations & Deep Space Intelligence',
    description: 'Revolutionary AI space technology for autonomous missions, deep space exploration, and orbital operations with 99.9% reliability.',
    type: 'article',
    category: 'Space Technology',
    readTime: '32 min',
    metrics: [
      { value: '99.9%', label: 'Reliability', color: 'text-blue-600' },
      { value: '$500M+', label: 'Savings', color: 'text-green-600' },
      { value: '24/7', label: 'Operations', color: 'text-purple-600' }
    ],
    href: '/blog/ai-space-tech-2026',
    tags: ['NEW 2026', 'REVOLUTIONARY', 'SPACE TECH'],
    featured: false
  }
];

const categories = ['All', 'Enterprise AI', 'Quantum Computing', 'Success Story', 'Sustainability', 'Neural Networks', 'Space Technology'];

export default function InteractiveContentRecommendation2026() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filteredContent = selectedCategory === 'All' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Enterprise AI': return <Brain className="w-4 h-4" />;
      case 'Quantum Computing': return <Zap className="w-4 h-4" />;
      case 'Success Story': return <TrendingUp className="w-4 h-4" />;
      case 'Sustainability': return <Star className="w-4 h-4" />;
      case 'Neural Networks': return <Brain className="w-4 h-4" />;
      case 'Space Technology': return <Rocket className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article': return 'bg-blue-100 text-blue-600';
      case 'case-study': return 'bg-green-100 text-green-600';
      case 'guide': return 'bg-purple-100 text-purple-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">🎯</span>
            AI-Powered Content Recommendations
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Discover Your Perfect AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI analyzes your interests and industry to recommend the most relevant articles, case studies, 
            and guides tailored to your business needs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {filteredContent.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-purple-200 ${
                hoveredItem === item.id ? 'scale-105' : ''
              }`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                      {item.type === 'case-study' ? '📊 Case Study' : '📝 Article'}
                    </span>
                    {item.featured && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        ⭐ FEATURED
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime} read
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        tag.includes('NEW') || tag.includes('BREAKTHROUGH')
                          ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                          : tag.includes('FEATURED')
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="flex gap-4 mb-6">
                  {item.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold ${metric.color}`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-500">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    {getCategoryIcon(item.category)}
                    {item.category}
                  </div>
                  <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Personalized Recommendations?</h3>
            <p className="text-purple-100 mb-6">
              Our AI can analyze your specific industry and requirements to provide custom content recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                ✉️ Get Custom Recommendations
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
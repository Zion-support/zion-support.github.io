import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, TrendingUp, Star, Zap, Brain, Rocket } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'article' | 'case-study';
  category: string;
  readTime: string;
  description: string;
  metrics: {
    value: string;
    label: string;
  }[];
  tags: string[];
  href: string;
  icon: React.ReactNode;
  gradient: string;
  hoverColor: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'cognitive-enterprise',
    title: 'AI Cognitive Enterprise 2026: The Future of Intelligent Business Operations',
    type: 'article',
    category: 'Cognitive AI',
    readTime: '28 min read',
    description: 'Discover how cognitive AI is revolutionizing enterprise operations with 95% automation efficiency and $15M+ ROI.',
    metrics: [
      { value: '95%', label: 'Automation' },
      { value: '$15M+', label: 'ROI' }
    ],
    tags: ['NEW 2026', 'BREAKTHROUGH'],
    href: '/blog/ai-cognitive-enterprise-2026',
    icon: <Brain className="w-5 h-5" />,
    gradient: 'from-purple-500 to-indigo-500',
    hoverColor: 'hover:border-purple-200'
  },
  {
    id: 'space-missions',
    title: 'AI Space Missions 2026: Autonomous Space Operations & Deep Space Intelligence',
    type: 'article',
    category: 'Space Technology',
    readTime: '32 min read',
    description: 'Revolutionary AI space technology for autonomous missions with 99.9% reliability and $500M+ savings.',
    metrics: [
      { value: '99.9%', label: 'Reliability' },
      { value: '$500M+', label: 'Savings' }
    ],
    tags: ['NEW 2026', 'REVOLUTIONARY'],
    href: '/blog/ai-space-missions-2026',
    icon: <Rocket className="w-5 h-5" />,
    gradient: 'from-blue-500 to-purple-500',
    hoverColor: 'hover:border-blue-200'
  },
  {
    id: 'cognitive-success',
    title: 'AI Cognitive Enterprise Success 2026: $15M ROI Case Study',
    type: 'case-study',
    category: 'Fortune 500',
    readTime: '15 min read',
    description: 'See how a Fortune 500 company achieved $15.2M ROI and 95% automation efficiency with cognitive AI.',
    metrics: [
      { value: '$15.2M', label: 'ROI' },
      { value: '95%', label: 'Automation' }
    ],
    tags: ['NEW 2026', 'FEATURED'],
    href: '/case-studies/ai-cognitive-enterprise-success-2026',
    icon: <TrendingUp className="w-5 h-5" />,
    gradient: 'from-indigo-500 to-purple-500',
    hoverColor: 'hover:border-indigo-200'
  },
  {
    id: 'neural-architecture',
    title: 'AI Neural Architecture Optimization 2026: Next-Gen Performance Engineering',
    type: 'article',
    category: 'Neural Architecture',
    readTime: '28 min read',
    description: 'Master neural architecture optimization with 40% performance gains, 60% cost reduction, and enterprise-grade scalability.',
    metrics: [
      { value: '40%', label: 'Performance' },
      { value: '60%', label: 'Cost Savings' }
    ],
    tags: ['NEW 2026', 'BREAKTHROUGH'],
    href: '/blog/ai-neural-architecture-optimization-2026',
    icon: <Zap className="w-5 h-5" />,
    gradient: 'from-purple-500 to-indigo-500',
    hoverColor: 'hover:border-purple-200'
  },
  {
    id: 'quantum-computing',
    title: 'AI Quantum Computing 2026: Next-Generation Intelligence',
    type: 'article',
    category: 'Quantum Computing',
    readTime: '25 min read',
    description: 'Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.',
    metrics: [
      { value: '1000x', label: 'Faster' },
      { value: '95%', label: 'Accuracy' }
    ],
    tags: ['NEW 2026', 'REVOLUTIONARY'],
    href: '/blog/ai-quantum-computing-2026',
    icon: <Star className="w-5 h-5" />,
    gradient: 'from-indigo-500 to-purple-500',
    hoverColor: 'hover:border-indigo-200'
  },
  {
    id: 'sustainability-success',
    title: 'AI Sustainability Transformation 2026: $10M ROI Case Study',
    type: 'case-study',
    category: 'Sustainability',
    readTime: '15 min read',
    description: 'See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation.',
    metrics: [
      { value: '$10M', label: 'ROI' },
      { value: '100%', label: 'Carbon Neutral' }
    ],
    tags: ['NEW 2026', 'FEATURED'],
    href: '/case-studies/ai-sustainability-transformation-2026',
    icon: <TrendingUp className="w-5 h-5" />,
    gradient: 'from-green-500 to-teal-500',
    hoverColor: 'hover:border-green-200'
  }
];

export default function InteractiveContentRecommendation2026() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>(contentItems);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const categories = ['all', 'Cognitive AI', 'Space Technology', 'Quantum Computing', 'Neural Architecture', 'Sustainability'];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredContent(contentItems);
    } else {
      setFilteredContent(contentItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">✨</span>
            AI-Powered Content Recommendations
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Personalized Content Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most relevant AI content tailored to your interests. Our intelligent recommendation system analyzes your preferences to suggest the best articles and case studies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category === 'all' ? 'All Content' : category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 ${item.hoverColor} hover:scale-105 relative overflow-hidden`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Tags */}
                <div className="flex items-center gap-2 mb-4 relative z-10">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`bg-gradient-to-r ${
                        index === 0 
                          ? 'from-green-500 to-blue-500' 
                          : 'from-yellow-400 to-orange-500'
                      } text-white px-2 py-1 rounded-full text-xs font-semibold`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Content Type and Category */}
                <div className="flex items-center justify-between mb-3 relative z-10">
                  <span className="text-sm text-blue-600 font-medium flex items-center gap-2">
                    {item.icon}
                    {item.type === 'article' ? '📝 Article' : '📊 Case Study'}
                  </span>
                  <span className="text-sm text-gray-500">{item.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors relative z-10">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 relative z-10">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="flex gap-4 mb-4 relative z-10">
                  {item.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-lg font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime}
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                    Read More →
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                {hoveredItem === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl transition-opacity duration-300"></div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="w-5 h-5 mr-2">✨</span>
            Explore All Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
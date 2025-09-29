import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'article' | 'case-study' | 'guide';
  category: string;
  readTime: number;
  metrics: {
    primary: { value: string; label: string; color: string };
    secondary: { value: string; label: string; color: string };
  };
  description: string;
  href: string;
  tags: string[];
  featured?: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-agent-orchestration',
    title: 'AI Agent Orchestration 2026: Multi-Agent System Architecture',
    type: 'article',
    category: 'AI Architecture',
    readTime: 22,
    metrics: {
      primary: { value: '95%', label: 'Automation', color: 'blue' },
      secondary: { value: '$5M+', label: 'ROI', color: 'green' }
    },
    description: 'Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced orchestration patterns.',
    href: '/blog/ai-agent-orchestration-2026',
    tags: ['AI', 'Automation', 'Enterprise', '2026'],
    featured: true
  },
  {
    id: 'ai-sustainability',
    title: 'AI Sustainability & Green Tech 2026: Carbon-Neutral Operations',
    type: 'article',
    category: 'Sustainability',
    readTime: 18,
    metrics: {
      primary: { value: '80%', label: 'Energy Saved', color: 'green' },
      secondary: { value: '$2M+', label: 'Savings', color: 'blue' }
    },
    description: 'Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.',
    href: '/blog/ai-sustainability-green-tech-2026',
    tags: ['Sustainability', 'Green Tech', 'AI', '2026'],
    featured: true
  },
  {
    id: 'sustainability-case-study',
    title: 'AI Sustainability Transformation: $10M ROI Case Study',
    type: 'case-study',
    category: 'Case Study',
    readTime: 15,
    metrics: {
      primary: { value: '$10M', label: 'ROI', color: 'green' },
      secondary: { value: '100%', label: 'Carbon Neutral', color: 'purple' }
    },
    description: 'See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation.',
    href: '/case-studies/ai-sustainability-transformation-2026',
    tags: ['Case Study', 'Fortune 500', 'Sustainability', 'ROI'],
    featured: true
  },
  {
    id: 'ai-quantum-computing',
    title: 'AI Quantum Computing 2026: Next-Generation Intelligence',
    type: 'article',
    category: 'Quantum Computing',
    readTime: 25,
    metrics: {
      primary: { value: '1000x', label: 'Faster', color: 'purple' },
      secondary: { value: '95%', label: 'Accuracy', color: 'blue' }
    },
    description: 'Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.',
    href: '/blog/ai-quantum-computing-2026',
    tags: ['Quantum Computing', 'AI', 'Performance', '2026']
  },
  {
    id: 'neural-architecture',
    title: 'AI Neural Architecture Optimization 2026: Next-Gen Performance Engineering',
    type: 'article',
    category: 'AI Architecture',
    readTime: 28,
    metrics: {
      primary: { value: '40%', label: 'Performance', color: 'purple' },
      secondary: { value: '60%', label: 'Cost Savings', color: 'green' }
    },
    description: 'Master neural architecture optimization with 40% performance gains, 60% cost reduction, and enterprise-grade scalability patterns.',
    href: '/blog/ai-neural-architecture-optimization-2026',
    tags: ['Neural Networks', 'Performance', 'Optimization', '2026']
  },
  {
    id: 'space-tech',
    title: 'AI Space Technology 2026: Autonomous Space Operations & Deep Space Intelligence',
    type: 'article',
    category: 'Space Technology',
    readTime: 32,
    metrics: {
      primary: { value: '99.9%', label: 'Reliability', color: 'blue' },
      secondary: { value: '$500M+', label: 'Savings', color: 'green' }
    },
    description: 'Revolutionary AI space technology for autonomous missions, deep space exploration, and orbital operations with 99.9% reliability.',
    href: '/blog/ai-space-tech-2026',
    tags: ['Space Technology', 'Autonomous Systems', 'AI', '2026']
  }
];

const categories = ['All', 'AI Architecture', 'Sustainability', 'Quantum Computing', 'Space Technology', 'Case Study'];

export default function InteractiveContentRecommendation() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [recommendations, setRecommendations] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    generateRecommendations();
  }, [selectedCategory]);

  const generateRecommendations = async () => {
    setIsLoading(true);
    
    // Simulate AI-powered recommendation delay
    setTimeout(() => {
      let filtered = contentItems;
      
      if (selectedCategory !== 'All') {
        filtered = contentItems.filter(item => item.category === selectedCategory);
      }
      
      // Simulate personalized recommendations based on "user behavior"
      const personalized = filtered
        .sort(() => Math.random() - 0.5) // Shuffle for variety
        .slice(0, 6);
      
      setRecommendations(personalized);
      setIsLoading(false);
    }, 800);
  };

  const getMetricColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600',
      red: 'text-red-600'
    };
    return colors[color as keyof typeof colors] || 'text-gray-600';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return '📝';
      case 'case-study':
        return '📊';
      case 'guide':
        return '📖';
      default:
        return '📄';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
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
            Discover content tailored to your interests and industry. Our AI analyzes your preferences to suggest the most relevant articles and case studies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
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
              {category}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="text-lg text-gray-600">Generating personalized recommendations...</span>
            </div>
          </div>
        )}

        {/* Recommendations Grid */}
        {!isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:scale-105">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-4">
                    {item.featured && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        FEATURED
                      </span>
                    )}
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {item.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Type and Read Time */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{getTypeIcon(item.type)}</span>
                      <span className="text-sm text-gray-600 font-medium capitalize">
                        {item.type.replace('-', ' ')}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime} min read</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex gap-4 mb-4">
                    <div className="text-center">
                      <div className={`text-lg font-bold ${getMetricColor(item.metrics.primary.color)}`}>
                        {item.metrics.primary.value}
                      </div>
                      <div className="text-xs text-gray-500">{item.metrics.primary.label}</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-lg font-bold ${getMetricColor(item.metrics.secondary.color)}`}>
                        {item.metrics.secondary.value}
                      </div>
                      <div className="text-xs text-gray-500">{item.metrics.secondary.label}</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                      {item.type === 'case-study' ? 'View Case Study' : 'Read More'} →
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Star className="w-4 h-4" />
                      <span>4.8</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want More Personalized Recommendations?
            </h3>
            <p className="text-gray-600 mb-6">
              Sign up for our newsletter to get AI-powered content recommendations delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="w-5 h-5 mr-2">✨</span>
                Explore All Content
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
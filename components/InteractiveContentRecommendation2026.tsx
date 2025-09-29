import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Users, Star, TrendingUp, BookOpen, BarChart3, Zap } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'guide';
  category: string;
  readTime: string;
  views: string;
  rating: number;
  href: string;
  featured: boolean;
  tags: string[];
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI 2026 Mega Breakthrough',
    description: 'Revolutionary AI technologies reshaping enterprise operations with $100M+ ROI strategies.',
    type: 'blog',
    category: 'Innovation',
    readTime: '45 min',
    views: '2.3k',
    rating: 4.9,
    href: '/blog/ai-2026-mega-breakthrough',
    featured: true,
    tags: ['AI', 'Enterprise', 'ROI', 'Breakthrough']
  },
  {
    id: '2',
    title: '$150M ROI Success Story',
    description: 'Fortune 500 manufacturing giant achieves $150M ROI in 18 months through AI transformation.',
    type: 'case-study',
    category: 'Success Story',
    readTime: '35 min',
    views: '1.8k',
    rating: 4.8,
    href: '/case-studies/ai-mega-transformation-success-2026',
    featured: true,
    tags: ['ROI', 'Manufacturing', 'Transformation', 'Success']
  },
  {
    id: '3',
    title: 'Autonomous Enterprise 2026',
    description: 'Complete guide to self-managing business operations with 99.7% automation.',
    type: 'guide',
    category: 'Implementation',
    readTime: '30 min',
    views: '3.1k',
    rating: 4.9,
    href: '/blog/ai-autonomous-enterprise-2026',
    featured: false,
    tags: ['Autonomous', 'Enterprise', 'Automation', 'Guide']
  },
  {
    id: '4',
    title: 'Quantum AI Optimization',
    description: 'Harness quantum computing for 1000x faster AI optimization and revolutionary capabilities.',
    type: 'blog',
    category: 'Technology',
    readTime: '25 min',
    views: '1.2k',
    rating: 4.7,
    href: '/blog/ai-quantum-optimization-2026',
    featured: false,
    tags: ['Quantum', 'AI', 'Optimization', 'Computing']
  },
  {
    id: '5',
    title: 'AI Agent Orchestration',
    description: 'Master the art of coordinating multiple AI agents for complex business workflows.',
    type: 'guide',
    category: 'Implementation',
    readTime: '32 min',
    views: '1.8k',
    rating: 4.6,
    href: '/blog/ai-agent-orchestration-2026',
    featured: false,
    tags: ['Agents', 'Orchestration', 'Workflows', 'AI']
  },
  {
    id: '6',
    title: 'Autonomous Manufacturing Success',
    description: 'Complete factory automation achieving 99.9% efficiency and $75M cost savings.',
    type: 'case-study',
    category: 'Success Story',
    readTime: '28 min',
    views: '2.1k',
    rating: 4.8,
    href: '/case-studies/ai-autonomous-manufacturing-success-2026',
    featured: false,
    tags: ['Manufacturing', 'Automation', 'Efficiency', 'Success']
  }
];

const categories = ['All', 'Innovation', 'Success Story', 'Implementation', 'Technology'];

export default function InteractiveContentRecommendation2026() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredContent = contentItems.filter(item => {
    const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
    const tagMatch = selectedTags.length === 0 || selectedTags.some(tag => item.tags.includes(tag));
    return categoryMatch && tagMatch;
  });

  const allTags = Array.from(new Set(contentItems.flatMap(item => item.tags)));

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-5 h-5" />;
      case 'case-study':
        return <BarChart3 className="w-5 h-5" />;
      case 'guide':
        return <Zap className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'text-blue-600 bg-blue-100';
      case 'case-study':
        return 'text-green-600 bg-green-100';
      case 'guide':
        return 'text-purple-600 bg-purple-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🎯 PERSONALIZED RECOMMENDATIONS
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Discover Your Perfect AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized content recommendations based on your interests, role, and business needs. 
            Filter by category, tags, and content type to find exactly what you need.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Filter Content</h3>
            
            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Category</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Tag Filter */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      selectedTags.includes(tag)
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 group"
            >
              {item.featured && (
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⭐ FEATURED
                  </span>
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getTypeColor(item.type)}`}>
                  {getTypeIcon(item.type)}
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{item.category}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-600">{item.type}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {item.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {item.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {item.views}
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {item.tags.slice(0, 3).map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {item.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    +{item.tags.length - 3}
                  </span>
                )}
              </div>

              <Link
                href={item.href}
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group-hover:gap-3"
              >
                {item.type === 'case-study' ? 'View Case Study' : 'Read Article'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our AI experts can create custom content tailored to your specific needs and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/content-hub"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse All Content
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Request Custom Content
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
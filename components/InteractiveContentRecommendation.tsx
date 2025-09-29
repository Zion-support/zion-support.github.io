import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, TrendingUp, Star, Heart, Zap, Users, Target } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study';
  category: string;
  readTime: string;
  icon: React.ReactNode;
  color: string;
  href: string;
  featured?: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-business-transformation',
    title: 'AI Business Transformation 2026',
    description: 'Master AI business transformation with comprehensive strategies for 400% ROI and complete enterprise automation.',
    type: 'blog',
    category: 'Business Strategy',
    readTime: '25 min',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-500',
    href: '/blog/ai-business-transformation-2026',
    featured: true
  },
  {
    id: 'ai-customer-experience',
    title: 'AI Customer Experience Revolution',
    description: 'Revolutionize customer experience with AI-powered solutions achieving 300% satisfaction improvement.',
    type: 'blog',
    category: 'Customer Experience',
    readTime: '22 min',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-pink-500 to-purple-500',
    href: '/blog/ai-customer-experience-revolution-2026',
    featured: true
  },
  {
    id: 'ai-autonomous-enterprise',
    title: 'Autonomous Enterprise 2026',
    description: 'Complete guide to building self-managing business operations with 99% automation and $25M ROI.',
    type: 'blog',
    category: 'Enterprise AI',
    readTime: '30 min',
    icon: <Zap className="w-6 h-6" />,
    color: 'from-green-500 to-blue-500',
    href: '/blog/ai-autonomous-enterprise-2026',
    featured: true
  },
  {
    id: 'ai-quantum-optimization',
    title: 'Quantum AI Optimization',
    description: 'Harness quantum computing for AI breakthroughs with 1000x faster optimization and $12M+ returns.',
    type: 'blog',
    category: 'Quantum AI',
    readTime: '25 min',
    icon: <Target className="w-6 h-6" />,
    color: 'from-purple-500 to-indigo-500',
    href: '/blog/ai-quantum-optimization-2026',
    featured: true
  },
  {
    id: 'business-transformation-success',
    title: '$50M Transformation Success',
    description: 'Fortune 500 case study showing how AI business transformation achieved $50M ROI and 95% automation.',
    type: 'case-study',
    category: 'Success Stories',
    readTime: '20 min',
    icon: <Star className="w-6 h-6" />,
    color: 'from-green-500 to-teal-500',
    href: '/case-studies/ai-business-transformation-success-2026',
    featured: true
  },
  {
    id: 'autonomous-enterprise-success',
    title: 'Autonomous Enterprise Success',
    description: '$25M ROI achieved through autonomous business operations and 99% automation in Fortune 500 company.',
    type: 'case-study',
    category: 'Success Stories',
    readTime: '15 min',
    icon: <Users className="w-6 h-6" />,
    color: 'from-blue-500 to-green-500',
    href: '/case-studies/ai-autonomous-enterprise-success-2026',
    featured: true
  }
];

export default function InteractiveContentRecommendation() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const categories = ['all', 'Business Strategy', 'Customer Experience', 'Enterprise AI', 'Quantum AI', 'Success Stories'];
  const types = ['all', 'blog', 'case-study'];

  const filteredContent = contentItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const typeMatch = selectedType === 'all' || item.type === selectedType;
    return categoryMatch && typeMatch;
  });

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🎯 INTELLIGENT CONTENT RECOMMENDATIONS
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Discover Your Perfect AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized content recommendations based on your interests and goals. 
            Explore our comprehensive library of AI guides, case studies, and success stories.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedType === type
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600 border border-gray-200'
                }`}
              >
                {type === 'all' ? 'All Types' : type === 'blog' ? 'Blog Posts' : 'Case Studies'}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredContent.map(item => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        item.type === 'blog' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {item.type === 'blog' ? 'Blog' : 'Case Study'}
                      </span>
                      {item.featured && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.readTime}</span>
                    </div>
                    <div className="text-gray-400">•</div>
                    <div>{item.category}</div>
                  </div>
                  <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
          >
            Explore All AI Content
          </Link>
        </div>
      </div>
    </div>
  );
}
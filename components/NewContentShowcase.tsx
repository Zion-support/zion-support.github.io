import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Star, TrendingUp, Zap } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'case-study' | 'guide';
  category: string;
  readTime: string;
  metrics: {
    primary: string;
    secondary: string;
    value: string;
  };
  link: string;
  featured: boolean;
  tags: string[];
}

const newContent: ContentItem[] = [
  {
    id: 'neural-interfaces-breakthrough',
    title: 'AI Neural Interfaces 2026: Direct Brain-Computer Integration Revolution',
    description: 'Revolutionary neural interface technology enabling direct brain-computer communication with 10x productivity gains and 95% accuracy.',
    type: 'article',
    category: 'Neural Interfaces',
    readTime: '32 min',
    metrics: {
      primary: '10x',
      secondary: '95%',
      value: 'Productivity'
    },
    link: '/blog/ai-2026-advanced-neural-interfaces-breakthrough',
    featured: true,
    tags: ['breakthrough', 'neural interfaces', 'productivity']
  },
  {
    id: 'quantum-ai-optimization',
    title: 'AI Quantum Computing 2026: Next-Generation Intelligence Revolution',
    description: 'Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.',
    type: 'article',
    category: 'Quantum AI',
    readTime: '25 min',
    metrics: {
      primary: '1000x',
      secondary: '95%',
      value: 'Faster'
    },
    link: '/blog/ai-2026-quantum-ai-optimization-revolution',
    featured: true,
    tags: ['quantum', 'optimization', 'revolution']
  },
  {
    id: 'neural-interfaces-success',
    title: 'AI Neural Interfaces Enterprise Transformation: $15B Success Story',
    description: 'See how Global Tech Corporation achieved $15B in value creation through neural interface implementation.',
    type: 'case-study',
    category: 'Enterprise Transformation',
    readTime: '18 min',
    metrics: {
      primary: '$15B',
      secondary: '10x',
      value: 'Value Created'
    },
    link: '/case-studies/ai-2026-neural-interfaces-enterprise-transformation-15-billion-success',
    featured: true,
    tags: ['success story', 'enterprise', 'neural interfaces']
  },
  {
    id: 'quantum-finance-success',
    title: 'AI Quantum Financial Optimization: $12B Success Story',
    description: 'See how Quantum Finance Corp achieved $12B in additional returns through quantum AI optimization.',
    type: 'case-study',
    category: 'Financial Services',
    readTime: '15 min',
    metrics: {
      primary: '$12B',
      secondary: '1000x',
      value: 'Additional Returns'
    },
    link: '/case-studies/ai-2026-quantum-ai-financial-optimization-12-billion-success',
    featured: true,
    tags: ['quantum', 'finance', 'optimization']
  }
];

export default function NewContentShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [filteredContent, setFilteredContent] = useState(newContent);

  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredContent(newContent);
    } else {
      setFilteredContent(newContent.filter(item => item.type === activeTab));
    }
  }, [activeTab]);

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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article':
        return 'text-blue-600 bg-blue-100';
      case 'case-study':
        return 'text-green-600 bg-green-100';
      case 'guide':
        return 'text-purple-600 bg-purple-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Neural Interfaces':
        return 'from-purple-500 to-indigo-500';
      case 'Quantum AI':
        return 'from-cyan-500 to-blue-500';
      case 'Enterprise Transformation':
        return 'from-green-500 to-teal-500';
      case 'Financial Services':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            NEW 2026 BREAKTHROUGHS
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest breakthrough content featuring neural interfaces, quantum AI, and enterprise transformation success stories that are reshaping the future of technology.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Content
            </button>
            <button
              onClick={() => setActiveTab('article')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'article'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Articles
            </button>
            <button
              onClick={() => setActiveTab('case-study')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'case-study'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Case Studies
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {filteredContent.map((item, index) => (
            <Link key={item.id} href={item.link} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200">
                {/* Header */}
                <div className={`h-32 bg-gradient-to-br ${getCategoryColor(item.category)} relative`}>
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-2 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">{getTypeIcon(item.type)}</span>
                      </div>
                      <h3 className="text-lg font-bold">{item.category}</h3>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      NEW 2026
                    </span>
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                        <Star className="w-3 h-3 mr-1" />
                        FEATURED
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`${getTypeColor(item.type)} px-3 py-1 rounded-full text-sm font-medium`}>
                      {item.type === 'case-study' ? 'Case Study' : 'Article'}
                    </span>
                    <span className="text-gray-500 text-sm">{item.readTime} read</span>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{item.metrics.primary}</div>
                      <div className="text-xs text-gray-500">{item.metrics.value}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{item.metrics.secondary}</div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime} read
                    </div>
                    <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2026 Content Impact</h3>
            <p className="text-gray-600">Our latest content is already making waves across industries</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$27B+</div>
              <div className="text-gray-600">Total Value Created</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1000x</div>
              <div className="text-gray-600">Performance Improvement</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Average Accuracy</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10x</div>
              <div className="text-gray-600">Productivity Gains</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Zap className="w-5 h-5 mr-2" />
            Explore All 2026 Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
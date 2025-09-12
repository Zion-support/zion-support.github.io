import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';
import InteractiveContentDiscovery2026 from '../../../components/InteractiveContentDiscovery2026';

const MegaContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const contentCategories = {
    'all': 'All Content',
    'ai-trends': 'AI Trends 2026',
    'case-studies': 'Success Stories',
    'resources': 'Implementation Guides',
    'tools': 'Interactive Tools'
  };

  const featuredContent = [
    {
      id: '1',
      title: 'AI 2026: Advanced Automation Revolution',
      description: 'Discover how AI automation will transform industries with neural networks, quantum computing, and autonomous systems.',
      type: 'blog',
      category: 'ai-trends',
      tags: ['AI', 'Automation', 'Neural Networks', 'Quantum Computing'],
      readTime: '15 min',
      difficulty: 'advanced',
      popularity: 95,
      link: '/blog/ai-2026-advanced-automation-revolution',
      featured: true,
      image: '/api/placeholder/400/250'
    },
    {
      id: '2',
      title: 'Global Manufacturing Transformation: 600% ROI Success',
      description: 'Real-world case study of how a Fortune 500 company achieved unprecedented success through AI automation.',
      type: 'case-study',
      category: 'case-studies',
      tags: ['Manufacturing', 'ROI', 'Transformation', 'Success Story'],
      readTime: '12 min',
      difficulty: 'intermediate',
      popularity: 92,
      link: '/case-studies/ai-2026-global-manufacturing-transformation-success',
      featured: true,
      image: '/api/placeholder/400/250'
    },
    {
      id: '3',
      title: 'AI 2026 Implementation Toolkit',
      description: 'Complete guide with 50+ templates, checklists, and frameworks for successful AI transformation.',
      type: 'resource',
      category: 'resources',
      tags: ['Implementation', 'Toolkit', 'Templates', 'Guide'],
      readTime: '25 min',
      difficulty: 'beginner',
      popularity: 88,
      link: '/resources/ai-2026-implementation-toolkit',
      featured: true,
      image: '/api/placeholder/400/250'
    },
    {
      id: '4',
      title: 'AI ROI Calculator 2026',
      description: 'Interactive tool to calculate potential ROI from AI investments and transformations.',
      type: 'tool',
      category: 'tools',
      tags: ['ROI', 'Calculator', 'Investment', 'Planning'],
      readTime: '5 min',
      difficulty: 'beginner',
      popularity: 82,
      link: '/tools/ai-roi-calculator-2026',
      featured: true,
      image: '/api/placeholder/400/250'
    }
  ];

  const getTypeIcon = (type: string) => {
    const icons = {
      blog: '📝',
      'case-study': '📊',
      resource: '📚',
      tool: '🛠️'
    };
    return icons[type as keyof typeof icons] || '📄';
  };

  const getTypeColor = (type: string) => {
    const colors = {
      blog: 'bg-blue-100 text-blue-800',
      'case-study': 'bg-green-100 text-green-800',
      resource: 'bg-purple-100 text-purple-800',
      tool: 'bg-orange-100 text-orange-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      beginner: 'bg-green-100 text-green-800',
      intermediate: 'bg-yellow-100 text-yellow-800',
      advanced: 'bg-red-100 text-red-800'
    };
    return colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const filteredContent = activeTab === 'all' 
    ? featuredContent 
    : featuredContent.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Mega Content Showcase 2026: AI Resources, Case Studies & Tools - Zion Tech Group"
        description="Explore our comprehensive library of AI resources, success stories, implementation guides, and interactive tools for 2026."
        keywords="AI content 2026, AI resources, AI case studies, AI implementation guides, AI tools, AI success stories"
        url="/mega-content-showcase-2026"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Mega Content Showcase 2026
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive library of AI resources, success stories, implementation guides, 
              and interactive tools designed to accelerate your AI transformation journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Resources</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm">Case Studies</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Interactive Tools</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Free Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Discovery Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <InteractiveContentDiscovery2026 />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(contentCategories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Content Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Content
            </h2>
            <p className="text-lg text-gray-600">
              Hand-picked resources to accelerate your AI transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-blue-500 to-purple-600">
                  <div className="flex items-center justify-center text-white text-6xl">
                    {getTypeIcon(item.type)}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {item.type.replace('-', ' ').toUpperCase()}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                        {item.difficulty.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-500">{item.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${item.popularity}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-700">{item.popularity}%</span>
                    </div>
                    {item.featured && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                        FEATURED
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={item.link}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center block"
                  >
                    Explore Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Access
            </h2>
            <p className="text-lg text-gray-600">
              Jump directly to the resources you need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-xl font-semibold mb-2">AI Blog</h3>
              <p className="text-blue-100 text-sm">Latest insights and trends</p>
            </Link>

            <Link
              href="/case-studies"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-semibold mb-2">Case Studies</h3>
              <p className="text-green-100 text-sm">Real success stories</p>
            </Link>

            <Link
              href="/resources"
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-xl font-semibold mb-2">Resources</h3>
              <p className="text-purple-100 text-sm">Implementation guides</p>
            </Link>

            <Link
              href="/tools"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
            >
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-xl font-semibold mb-2">Tools</h3>
              <p className="text-orange-100 text-sm">Interactive calculators</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with AI 2026
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest AI insights, case studies, and resources delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaContentShowcase2026;
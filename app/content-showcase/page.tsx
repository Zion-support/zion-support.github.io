import React, { useState } from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource' | 'webinar';
  category: string;
  readTime: string;
  publishDate: string;
  featured: boolean;
  trending: boolean;
  new: boolean;
  icon: string;
  href: string;
  tags: string[];
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI 2025 Breakthrough Innovations: Revolutionary Technologies Reshaping Industries',
    description: 'Discover the most groundbreaking AI innovations of 2025 that are transforming industries. From quantum-enhanced AI to neural interfaces, explore the technologies that will define the future.',
    type: 'blog',
    category: 'AI & Technology',
    readTime: '25 min read',
    publishDate: 'January 15, 2025',
    featured: true,
    trending: true,
    new: true,
    icon: '🚀',
    href: '/blog/ai-2025-breakthrough-innovations',
    tags: ['AI innovations', 'breakthrough technologies', 'quantum AI', 'neural interfaces']
  },
  {
    id: '2',
    title: 'AI Sustainability & Green Tech 2025: Building Eco-Friendly AI Systems for the Future',
    description: 'Discover how AI is driving sustainability initiatives and reducing carbon footprints. Learn about smart energy management, intelligent waste management, and climate risk assessment solutions.',
    type: 'blog',
    category: 'Sustainability',
    readTime: '20 min read',
    publishDate: 'January 20, 2025',
    featured: true,
    trending: false,
    new: true,
    icon: '🌱',
    href: '/blog/ai-sustainability-green-tech-2025',
    tags: ['AI sustainability', 'green tech', 'climate change', 'energy efficiency']
  },
  {
    id: '3',
    title: '$200M Manufacturing Success: Autonomous AI Systems Case Study 2025',
    description: 'Discover how Fortune 500 companies are achieving unprecedented results with autonomous AI systems. Real case study showing $200M savings and implementation guide with ROI calculators.',
    type: 'case-study',
    category: 'Case Studies',
    readTime: 'Case Study',
    publishDate: 'January 18, 2025',
    featured: true,
    trending: true,
    new: true,
    icon: '💰',
    href: '/case-studies/ai-autonomous-manufacturing-success-2025',
    tags: ['AI manufacturing', 'autonomous systems', 'Fortune 500', 'ROI']
  },
  {
    id: '4',
    title: 'AI Implementation Master Guide 2026: Complete Framework for Success',
    description: 'Comprehensive 200+ page guide covering everything from strategy to implementation. Includes frameworks, templates, checklists, and real-world case studies.',
    type: 'resource',
    category: 'Resources',
    readTime: '200+ pages',
    publishDate: 'January 10, 2025',
    featured: true,
    trending: false,
    new: true,
    icon: '📖',
    href: '/resources/ai-implementation-master-guide-2026',
    tags: ['implementation guide', 'framework', 'templates', 'checklists']
  },
  {
    id: '5',
    title: 'AI Cybersecurity Checklist 2025: 150+ Security Items for Secure AI Implementation',
    description: 'Comprehensive security checklist covering all aspects of AI implementation. Essential for any organization deploying AI systems in production environments.',
    type: 'resource',
    category: 'Security',
    readTime: '150+ items',
    publishDate: 'January 12, 2025',
    featured: false,
    trending: true,
    new: true,
    icon: '🛡️',
    href: '/resources/ai-cybersecurity-checklist-2025',
    tags: ['cybersecurity', 'AI security', 'checklist', 'compliance']
  },
  {
    id: '6',
    title: 'AI Workforce Transformation Playbook 2025: Complete Reskilling Strategies',
    description: 'Complete guide to transforming your workforce for the AI era. Includes reskilling strategies, change management, and implementation frameworks.',
    type: 'resource',
    category: 'Workforce',
    readTime: '150+ pages',
    publishDate: 'January 14, 2025',
    featured: false,
    trending: false,
    new: true,
    icon: '👥',
    href: '/resources/ai-workforce-transformation-playbook-2025',
    tags: ['workforce transformation', 'reskilling', 'change management', 'AI adoption']
  },
  {
    id: '7',
    title: 'AI 2025 Implementation Masterclass: From Strategy to Production',
    description: 'Comprehensive masterclass covering AI strategy, implementation, and scaling. Includes hands-on workshops and expert guidance.',
    type: 'webinar',
    category: 'Education',
    readTime: '2 hours',
    publishDate: 'January 25, 2025',
    featured: true,
    trending: true,
    new: true,
    icon: '🎓',
    href: '/webinars/ai-2025-implementation-masterclass',
    tags: ['masterclass', 'implementation', 'strategy', 'workshop']
  },
  {
    id: '8',
    title: 'AI Robotics & Automation 2025: The Future of Intelligent Machines',
    description: 'Explore the latest developments in AI-powered robotics and automation. Learn about autonomous systems, human-robot collaboration, and future applications.',
    type: 'blog',
    category: 'Robotics',
    readTime: '22 min read',
    publishDate: 'January 22, 2025',
    featured: false,
    trending: true,
    new: true,
    icon: '🤖',
    href: '/blog/ai-robotics-automation-2025',
    tags: ['robotics', 'automation', 'intelligent machines', 'future tech']
  }
];

const categories = ['All', 'AI & Technology', 'Sustainability', 'Case Studies', 'Resources', 'Security', 'Workforce', 'Education', 'Robotics'];
const types = ['All', 'blog', 'case-study', 'resource', 'webinar'];

export default function ContentShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const filteredContent = contentItems
    .filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesType = selectedType === 'All' || item.type === selectedType;
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesType && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
        case 'oldest':
          return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
        case 'trending':
          return b.trending ? 1 : -1;
        case 'featured':
          return b.featured ? 1 : -1;
        default:
          return 0;
      }
    });

  const featuredContent = contentItems.filter(item => item.featured);
  const trendingContent = contentItems.filter(item => item.trending);
  const newContent = contentItems.filter(item => item.new);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase: AI & Technology Resources 2025"
        description="Explore our comprehensive collection of AI resources, case studies, implementation guides, and expert insights. Everything you need to succeed with AI in 2025."
        keywords="AI resources, case studies, implementation guides, AI insights, technology resources, AI education"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📚 CONTENT SHOWCASE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI & Technology Resources 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive collection of AI resources, case studies, implementation guides, 
            and expert insights. Everything you need to succeed with AI in 2025 and beyond.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search content, topics, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 pr-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{contentItems.length}</div>
            <div className="text-gray-600">Total Resources</div>
          </div>
          <div className="bg-green-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{featuredContent.length}</div>
            <div className="text-gray-600">Featured Content</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{trendingContent.length}</div>
            <div className="text-gray-600">Trending Now</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{newContent.length}</div>
            <div className="text-gray-600">New This Week</div>
          </div>
        </div>

        {/* Featured Content Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">⭐ Featured Content</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.slice(0, 3).map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{item.readTime}</span>
                    <span>{item.publishDate}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Filters and Sorting */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="trending">Trending</option>
                  <option value="featured">Featured</option>
                </select>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              Showing {filteredContent.length} of {contentItems.length} resources
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                      {item.featured && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                      {item.trending && (
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                          Trending
                        </span>
                      )}
                      {item.new && (
                        <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{item.readTime}</span>
                  <span>{item.publishDate}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get expert guidance and implementation support for your AI transformation journey. 
            Our team of AI specialists is ready to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Expert Consultation
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Download All Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
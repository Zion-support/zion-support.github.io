import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'article' | 'case-study' | 'resource' | 'webinar';
  category: string;
  readTime: string;
  publishDate: string;
  isNew?: boolean;
  isTrending?: boolean;
  isFeatured?: boolean;
  icon: string;
  gradient: string;
  tags: string[];
}

const allContent: ContentItem[] = [
  {
    id: '1',
    title: "AI 2025 Advanced Architecture Patterns",
    description: "Master advanced AI architecture patterns for scalable, production-ready systems with real-world examples and implementation guides.",
    href: "/blog/ai-2025-advanced-ai-architecture",
    type: "article",
    category: "AI Architecture",
    readTime: "25 min read",
    publishDate: "2025-01-28",
    isNew: true,
    isFeatured: true,
    icon: "🏗️",
    gradient: "from-blue-500 to-purple-600",
    tags: ["AI Architecture", "Microservices", "MLOps", "Scalability"]
  },
  {
    id: '2',
    title: "AI Automation Trends 2025",
    description: "Discover the revolutionary AI automation trends that are transforming businesses and achieving 40%+ efficiency gains.",
    href: "/blog/ai-2025-automation-trends",
    type: "article",
    category: "AI Automation",
    readTime: "22 min read",
    publishDate: "2025-01-28",
    isTrending: true,
    isFeatured: true,
    icon: "🤖",
    gradient: "from-green-500 to-blue-600",
    tags: ["Automation", "Efficiency", "Business Process", "ROI"]
  },
  {
    id: '3',
    title: "$200M Manufacturing Success Case Study",
    description: "How a Fortune 500 manufacturer achieved unprecedented results with autonomous AI systems, saving $200M annually.",
    href: "/case-studies/ai-autonomous-manufacturing-success-2025",
    type: "case-study",
    category: "Case Study",
    readTime: "18 min read",
    publishDate: "2025-01-28",
    isNew: true,
    isFeatured: true,
    icon: "💰",
    gradient: "from-yellow-500 to-orange-600",
    tags: ["Manufacturing", "Autonomous Systems", "ROI", "Fortune 500"]
  },
  {
    id: '4',
    title: "AI Implementation Master Guide 2026",
    description: "200+ page comprehensive guide with frameworks, templates, and step-by-step implementation strategies.",
    href: "/resources/ai-implementation-master-guide-2026",
    type: "resource",
    category: "Implementation Guide",
    readTime: "200+ pages",
    publishDate: "2025-01-28",
    isNew: true,
    isFeatured: true,
    icon: "📖",
    gradient: "from-purple-500 to-pink-600",
    tags: ["Implementation", "Guide", "Templates", "Frameworks"]
  },
  {
    id: '5',
    title: "AI Sustainability & Green Tech 2025",
    description: "Building eco-friendly AI systems for a sustainable future with 40% energy reduction strategies.",
    href: "/blog/ai-sustainability-green-tech-2025",
    type: "article",
    category: "Sustainability",
    readTime: "20 min read",
    publishDate: "2025-01-27",
    isNew: true,
    icon: "🌱",
    gradient: "from-emerald-500 to-teal-600",
    tags: ["Sustainability", "Green Tech", "Energy Efficiency", "Environment"]
  },
  {
    id: '6',
    title: "AI Robotics & Automation Revolution",
    description: "The future of intelligent machines and how they're reshaping manufacturing and service industries.",
    href: "/blog/ai-robotics-automation-2025",
    type: "article",
    category: "Robotics",
    readTime: "22 min read",
    publishDate: "2025-01-26",
    isTrending: true,
    icon: "🤖",
    gradient: "from-cyan-500 to-blue-600",
    tags: ["Robotics", "Automation", "Manufacturing", "Future Tech"]
  },
  {
    id: '7',
    title: "AI Cybersecurity Checklist 2025",
    description: "150+ security items for secure AI implementation with compliance frameworks and best practices.",
    href: "/resources/ai-cybersecurity-checklist-2025",
    type: "resource",
    category: "Security",
    readTime: "150+ items",
    publishDate: "2025-01-25",
    isNew: true,
    icon: "🛡️",
    gradient: "from-red-500 to-pink-600",
    tags: ["Cybersecurity", "Security", "Compliance", "Best Practices"]
  },
  {
    id: '8',
    title: "AI Workforce Transformation Playbook",
    description: "Complete reskilling strategies and implementation guides for the AI era workforce transformation.",
    href: "/resources/ai-workforce-transformation-playbook-2025",
    type: "resource",
    category: "Workforce",
    readTime: "150+ pages",
    publishDate: "2025-01-24",
    isNew: true,
    icon: "👥",
    gradient: "from-indigo-500 to-purple-600",
    tags: ["Workforce", "Transformation", "Reskilling", "Human Resources"]
  },
  {
    id: '9',
    title: "AI Data Privacy & Compliance 2025",
    description: "Complete guide to AI privacy regulations and compliance frameworks for enterprise implementation.",
    href: "/blog/ai-data-privacy-compliance-2025",
    type: "article",
    category: "Privacy",
    readTime: "22 min read",
    publishDate: "2025-01-23",
    isNew: true,
    icon: "🔒",
    gradient: "from-gray-500 to-blue-600",
    tags: ["Privacy", "Compliance", "Regulations", "Data Protection"]
  },
  {
    id: '10',
    title: "AI Go-To-Market Strategy 2025",
    description: "From zero to traction playbook for AI products with positioning, pricing, and distribution strategies.",
    href: "/blog/ai-go-to-market-2025",
    type: "article",
    category: "Strategy",
    readTime: "12 min read",
    publishDate: "2025-01-22",
    isTrending: true,
    icon: "📈",
    gradient: "from-orange-500 to-red-600",
    tags: ["Go-to-Market", "Strategy", "Product", "Marketing"]
  }
];

const categories = ['All', 'AI Architecture', 'AI Automation', 'Case Study', 'Implementation Guide', 'Sustainability', 'Robotics', 'Security', 'Workforce', 'Privacy', 'Strategy'];

const types = ['All', 'Article', 'Case Study', 'Resource', 'Webinar'];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'article':
      return 'bg-blue-100 text-blue-800';
    case 'case-study':
      return 'bg-green-100 text-green-800';
    case 'resource':
      return 'bg-purple-100 text-purple-800';
    case 'webinar':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'article':
      return 'Article';
    case 'case-study':
      return 'Case Study';
    case 'resource':
      return 'Resource';
    case 'webinar':
      return 'Webinar';
    default:
      return 'Content';
  }
};

export default function ContentShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const filteredContent = useMemo(() => {
    let filtered = allContent;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by type
    if (selectedType !== 'All') {
      const typeMap: { [key: string]: string } = {
        'Article': 'article',
        'Case Study': 'case-study',
        'Resource': 'resource',
        'Webinar': 'webinar'
      };
      filtered = filtered.filter(item => item.type === typeMap[selectedType]);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort content
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
        case 'oldest':
          return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'readTime':
          return a.readTime.localeCompare(b.readTime);
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, selectedType, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - AI Articles, Case Studies & Resources | Zion Tech Group"
        description="Explore our comprehensive collection of AI articles, case studies, and implementation resources. 100+ pieces of content covering every aspect of AI implementation and strategy."
        keywords="AI content, AI articles, AI case studies, AI resources, AI implementation, AI strategy, AI insights"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Content Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of AI articles, case studies, and implementation 
            resources. 100+ pieces of content covering every aspect of AI implementation and strategy.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-gray-50 rounded-xl p-6 mb-12">
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {/* Search */}
            <div className="md:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search Content
              </label>
              <input
                type="text"
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, case studies, resources..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                Type
              </label>
              <select
                id="type"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title A-Z</option>
                <option value="readTime">Read Time</option>
              </select>
            </div>
            <div className="text-sm text-gray-600">
              Showing {filteredContent.length} of {allContent.length} items
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${item.gradient} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        {item.isNew && (
                          <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                        {item.isTrending && (
                          <span className="bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                            TRENDING
                          </span>
                        )}
                        {item.isFeatured && (
                          <span className="bg-yellow-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                            FEATURED
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(item.type)}`}>
                        {getTypeLabel(item.type)}
                      </span>
                      <span className="text-xs opacity-75">{item.category}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{item.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{item.readTime}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or browse all content.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedType('All');
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated with New Content</h2>
          <p className="text-lg opacity-90 mb-6">
            Get notified when we publish new articles, case studies, and resources. 
            Join 10,000+ AI professionals in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe to Updates
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Browse All Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
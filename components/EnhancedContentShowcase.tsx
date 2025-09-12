import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  category: string;
  type: 'article' | 'case-study' | 'resource' | 'webinar';
  readTime: string;
  date: string;
  badge: string;
  featured: boolean;
  tags: string[];
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-advanced-automation',
    title: "AI Advanced Automation 2025: Complete Implementation Guide",
    description: "Master advanced AI automation with comprehensive strategies, best practices, and real-world case studies for enterprise success.",
    href: "/blog/ai-2025-advanced-automation",
    icon: "🤖",
    category: "AI Automation",
    type: "article",
    readTime: "25 min read",
    date: "Jan 30, 2025",
    badge: "NEW",
    featured: true,
    tags: ["automation", "implementation", "enterprise", "AI"]
  },
  {
    id: 'ai-cybersecurity-threats',
    title: "AI Cybersecurity Threats 2025: Complete Defense Guide",
    description: "Protect your organization from emerging AI cybersecurity threats with advanced defense strategies and security best practices.",
    href: "/blog/ai-2025-cybersecurity-threats",
    icon: "🛡️",
    category: "Cybersecurity",
    type: "article",
    readTime: "22 min read",
    date: "Jan 30, 2025",
    badge: "NEW",
    featured: true,
    tags: ["security", "cybersecurity", "AI threats", "defense"]
  },
  {
    id: 'manufacturing-success',
    title: "$200M Manufacturing Success: Autonomous AI Systems Case Study",
    description: "How a Fortune 500 manufacturing company achieved $200M savings, 60% faster processing, and 99.7% uptime with autonomous AI.",
    href: "/case-studies/ai-autonomous-manufacturing-success-2025",
    icon: "💰",
    category: "Case Study",
    type: "case-study",
    readTime: "18 min read",
    date: "Jan 28, 2025",
    badge: "SUCCESS",
    featured: true,
    tags: ["manufacturing", "autonomous systems", "ROI", "case study"]
  },
  {
    id: 'implementation-checklist',
    title: "AI Implementation Checklist 2025: 150+ Actionable Items",
    description: "Complete checklist covering every aspect of AI implementation with 150+ actionable items across 7 key categories.",
    href: "/resources/ai-implementation-checklist-2025",
    icon: "📋",
    category: "Free Resource",
    type: "resource",
    readTime: "35 min read",
    date: "Feb 8, 2025",
    badge: "FREE",
    featured: true,
    tags: ["checklist", "implementation", "guide", "free"]
  },
  {
    id: 'breakthrough-innovations',
    title: "AI Breakthrough Innovations 2025: Revolutionary Technologies",
    description: "Discover the most groundbreaking AI innovations reshaping industries and creating unprecedented opportunities.",
    href: "/blog/ai-2025-breakthrough-innovations",
    icon: "🚀",
    category: "AI Innovations",
    type: "article",
    readTime: "25 min read",
    date: "Jan 28, 2025",
    badge: "TRENDING",
    featured: false,
    tags: ["innovation", "technology", "future", "trends"]
  },
  {
    id: 'sustainability-green-tech',
    title: "AI Sustainability & Green Tech 2025: Building Eco-Friendly Systems",
    description: "Learn how AI is driving sustainability initiatives and reducing carbon footprints across industries.",
    href: "/blog/ai-sustainability-green-tech-2025",
    icon: "🌱",
    category: "Sustainability",
    type: "article",
    readTime: "20 min read",
    date: "Jan 28, 2025",
    badge: "NEW",
    featured: false,
    tags: ["sustainability", "green tech", "environment", "AI"]
  },
  {
    id: 'workforce-transformation',
    title: "AI Workforce Transformation 2025: Complete Reskilling Guide",
    description: "Comprehensive guide to workforce transformation strategies for the AI era, including reskilling programs and change management.",
    href: "/blog/ai-workforce-transformation-2025",
    icon: "👥",
    category: "Workforce",
    type: "article",
    readTime: "18 min read",
    date: "Jan 25, 2025",
    badge: "POPULAR",
    featured: false,
    tags: ["workforce", "transformation", "reskilling", "change management"]
  },
  {
    id: 'ai-master-guide',
    title: "AI Implementation Master Guide 2026: 200+ Page Resource",
    description: "Download our comprehensive AI Implementation Master Guide with proven frameworks, templates, and strategies for successful AI adoption.",
    href: "/resources/ai-implementation-master-guide-2026",
    icon: "📚",
    category: "Master Guide",
    type: "resource",
    readTime: "200+ pages",
    date: "Jan 28, 2025",
    badge: "FREE",
    featured: false,
    tags: ["guide", "implementation", "framework", "template"]
  }
];

const categories = [
  { id: 'all', label: 'All Content', count: contentItems.length },
  { id: 'article', label: 'Articles', count: contentItems.filter(item => item.type === 'article').length },
  { id: 'case-study', label: 'Case Studies', count: contentItems.filter(item => item.type === 'case-study').length },
  { id: 'resource', label: 'Resources', count: contentItems.filter(item => item.type === 'resource').length },
  { id: 'webinar', label: 'Webinars', count: contentItems.filter(item => item.type === 'webinar').length }
];

const badges = {
  'NEW': 'bg-green-500 text-white',
  'FREE': 'bg-blue-500 text-white',
  'SUCCESS': 'bg-yellow-500 text-white',
  'TRENDING': 'bg-red-500 text-white',
  'POPULAR': 'bg-purple-500 text-white'
};

export default function EnhancedContentShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.type === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredContent = contentItems.filter(item => item.featured);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📚 CONTENT LIBRARY</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Our Latest AI & Tech Content
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our comprehensive collection of expert insights, success stories, and actionable resources 
            to accelerate your AI transformation journey.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">🔍</span>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Content Section */}
        {selectedCategory === 'all' && searchTerm === '' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">⭐ Featured Content</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredContent.map((item) => (
                <Link key={item.id} href={item.href} className="group">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${badges[item.badge as keyof typeof badges]}`}>
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{item.category}</span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Content Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Content' : categories.find(c => c.id === selectedCategory)?.label}
            </h3>
            <span className="text-gray-500">{filteredContent.length} items</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <article className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {item.type.replace('-', ' ')}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${badges[item.badge as keyof typeof badges]}`}>
                          {item.badge}
                        </span>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{item.category}</span>
                      <span>{item.readTime}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="text-xs text-gray-500">+{item.tags.length - 3} more</span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{item.date}</span>
                      <span className="text-blue-600 font-medium group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-lg opacity-90 mb-6">
            We're constantly adding new content. Get notified when we publish new articles, 
            case studies, and resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Content
            </Link>
            <Link
              href="/newsletter"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Subscribe to Updates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
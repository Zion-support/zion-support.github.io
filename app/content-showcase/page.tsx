'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { Search, Filter, Calendar, Clock, User, TrendingUp, Star, Download, BookOpen, Play } from 'lucide-react';

export default function ContentShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    { id: 'all', name: 'All Content', count: 25 },
    { id: 'ai-automation', name: 'AI Automation', count: 8 },
    { id: 'case-studies', name: 'Case Studies', count: 6 },
    { id: 'resources', name: 'Resources', count: 4 },
    { id: 'trends', name: 'Trends & Insights', count: 7 }
  ];

  const content = [
    {
      id: 1,
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover groundbreaking AI innovations transforming industries worldwide with quantum AI, autonomous systems, and generative AI revolution.",
      category: "trends",
      type: "Article",
      readTime: "25 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🚀",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      tags: ["AI Breakthroughs", "Innovation", "Technology", "Future"]
    },
    {
      id: 2,
      title: "AI Space Exploration Breakthrough",
      description: "$2.1B mission success with 99.9% autonomous operation. Learn how NASA's AI systems revolutionized space exploration.",
      category: "case-studies",
      type: "Case Study",
      readTime: "18 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🚀",
      href: "/case-studies/ai-space-exploration-breakthrough-2025",
      tags: ["Space Exploration", "NASA", "Autonomous AI", "Breakthrough"]
    },
    {
      id: 3,
      title: "AI Implementation Master Guide 2026",
      description: "Complete 200+ page resource with proven strategies, templates, and step-by-step frameworks for successful AI transformation.",
      category: "resources",
      type: "Free Download",
      readTime: "200+ pages",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "📚",
      href: "/resources/ai-implementation-master-guide-2026",
      tags: ["Master Guide", "Implementation", "Templates", "Free Download"]
    },
    {
      id: 4,
      title: "Generative AI Revolution 2025",
      description: "10x productivity gains in content creation and business automation. Explore how generative AI is transforming business operations.",
      category: "ai-automation",
      type: "Article",
      readTime: "22 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🎨",
      href: "/blog/ai-2025-generative-ai-revolution",
      tags: ["Generative AI", "Productivity", "Automation", "Content Creation"]
    },
    {
      id: 5,
      title: "AI Healthcare Diagnosis Success",
      description: "95% accuracy and 80% faster processing in medical diagnosis. Complete case study with implementation details and results.",
      category: "case-studies",
      type: "Case Study",
      readTime: "15 min read",
      publishDate: "2025-01-10",
      author: "Zion Tech Group",
      featured: true,
      trending: false,
      icon: "🏥",
      href: "/case-studies/ai-healthcare-diagnosis-success-2025",
      tags: ["Healthcare", "AI Success", "Case Study", "Medical AI"]
    },
    {
      id: 6,
      title: "AI Workforce Transformation Playbook",
      description: "150+ pages of workforce strategies and training programs for successful AI adoption in your organization.",
      category: "resources",
      type: "Free Download",
      readTime: "150+ pages",
      publishDate: "2025-01-15",
      author: "Zion Tech Group",
      featured: false,
      trending: true,
      icon: "👥",
      href: "/resources/ai-workforce-transformation-playbook-2025",
      tags: ["Workforce", "Transformation", "Training", "Free Download"]
    },
    {
      id: 7,
      title: "AI Cybersecurity Revolution 2025",
      description: "Discover the AI cybersecurity revolution transforming enterprise security in 2025. Learn about advanced threat detection and zero-trust AI architectures.",
      category: "ai-automation",
      type: "Article",
      readTime: "22 min read",
      publishDate: "2025-01-20",
      author: "Zion Tech Group",
      featured: false,
      trending: true,
      icon: "🛡️",
      href: "/blog/ai-2025-cybersecurity-revolution",
      tags: ["AI Cybersecurity", "Threat Detection", "Zero Trust", "Security"]
    },
    {
      id: 8,
      title: "Quantum Computing Breakthrough 2025",
      description: "Discover the quantum computing breakthroughs revolutionizing AI in 2025. Learn about quantum machine learning and quantum advantage.",
      category: "trends",
      type: "Article",
      readTime: "28 min read",
      publishDate: "2025-01-25",
      author: "Zion Tech Group",
      featured: false,
      trending: true,
      icon: "⚛️",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      tags: ["Quantum Computing", "Quantum AI", "Machine Learning", "Innovation"]
    },
    {
      id: 9,
      title: "AI Manufacturing Success: $200M Case Study",
      description: "Discover how a Fortune 500 manufacturer achieved $200M in savings using AI autonomous systems. Complete case study with implementation details.",
      category: "case-studies",
      type: "Case Study",
      readTime: "18 min read",
      publishDate: "2025-01-22",
      author: "Zion Tech Group",
      featured: false,
      trending: true,
      icon: "💰",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      tags: ["Manufacturing", "Autonomous AI", "Case Study", "ROI"]
    },
    {
      id: 10,
      title: "AI Financial Services Transformation",
      description: "Complete case study: How a major bank achieved 300% ROI through strategic AI implementation. Learn the strategies, challenges, and results.",
      category: "case-studies",
      type: "Case Study",
      readTime: "15 min read",
      publishDate: "2025-01-18",
      author: "Zion Tech Group",
      featured: false,
      trending: false,
      icon: "💰",
      href: "/case-studies/ai-financial-services-transformation-2025",
      tags: ["Financial Services", "Case Study", "ROI", "Transformation"]
    },
    {
      id: 11,
      title: "Green AI Implementation Guide",
      description: "Build sustainable AI systems with environmental consciousness. Complete guide to green AI practices and eco-friendly implementation.",
      category: "resources",
      type: "Free Download",
      readTime: "120+ pages",
      publishDate: "2025-01-12",
      author: "Zion Tech Group",
      featured: false,
      trending: false,
      icon: "🌱",
      href: "/resources/green-ai-implementation-guide-2025",
      tags: ["Sustainability", "Green Tech", "Environment", "Eco-Friendly"]
    },
    {
      id: 12,
      title: "AI Ethics and Governance Framework",
      description: "Navigate the complex landscape of AI ethics and governance. Learn how to implement responsible AI practices and build trustworthy AI systems.",
      category: "trends",
      type: "Article",
      readTime: "25 min read",
      publishDate: "2025-01-08",
      author: "Zion Tech Group",
      featured: false,
      trending: false,
      icon: "⚖️",
      href: "/blog/ai-2025-ethical-ai-governance",
      tags: ["AI Ethics", "Governance", "Responsible AI", "Trust"]
    },
    {
      id: 13,
      title: "Edge AI Deployment Strategies",
      description: "Learn how to deploy AI models at the edge for real-time processing, reduced latency, and improved privacy in IoT applications.",
      category: "ai-automation",
      type: "Article",
      readTime: "20 min read",
      publishDate: "2025-01-05",
      author: "Zion Tech Group",
      featured: false,
      trending: false,
      icon: "📱",
      href: "/blog/ai-2025-edge-computing-revolution",
      tags: ["Edge Computing", "IoT", "Real-time", "Privacy"]
    },
    {
      id: 14,
      title: "AI Data Privacy & Compliance Guide",
      description: "Navigate the complex landscape of AI data privacy regulations. Learn about GDPR, CCPA, and emerging AI-specific compliance requirements.",
      category: "ai-automation",
      type: "Article",
      readTime: "22 min read",
      publishDate: "2025-01-03",
      author: "Zion Tech Group",
      featured: false,
      trending: false,
      icon: "🔒",
      href: "/blog/ai-data-privacy-compliance-2025",
      tags: ["Privacy", "Compliance", "GDPR", "Data Protection"]
    },
    {
      id: 15,
      title: "AI Customer Support Automation",
      description: "Case study: How agentic workflows reduce cost and improve customer experience. 60% deflection rate and +22 NPS improvement in 6 months.",
      category: "case-studies",
      type: "Case Study",
      readTime: "14 min read",
      publishDate: "2025-01-01",
      author: "Zion Tech Group",
      featured: false,
      trending: true,
      icon: "🤝",
      href: "/case-studies/ai-2025-customer-support-automation-success",
      tags: ["Support", "Agents", "Deflection", "NPS"]
    }
  ];

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Content Showcase - AI & Technology Resources"
        description="Explore our comprehensive library of AI articles, case studies, and resources. Expert insights on AI automation, cybersecurity, and implementation strategies."
        keywords="AI content, technology resources, AI articles, case studies, implementation guides, AI automation"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🚀 Content Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive library of AI articles, case studies, and resources. 
            Expert insights to accelerate your success in 2025 and beyond.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
            <div className="text-gray-600">Total Articles</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">6</div>
            <div className="text-gray-600">Case Studies</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
            <div className="text-gray-600">Free Resources</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">15K+</div>
            <div className="text-gray-600">Downloads</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, case studies, and resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="trending">Trending</option>
                <option value="featured">Featured</option>
              </select>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">⭐ Featured Content</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.filter(item => item.featured).map(item => (
                <Link key={item.id} href={item.href} className="group">
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{item.icon}</div>
                      <div className="flex items-center gap-2">
                        {item.trending && <TrendingUp className="w-4 h-4 text-orange-500" />}
                        {item.featured && <Star className="w-4 h-4 text-yellow-500" />}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(item.publishDate).toLocaleDateString()}
                        </span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {item.type}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Content */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory === 'all' ? 'All Content' : categories.find(c => c.id === selectedCategory)?.name}
            <span className="text-gray-500 font-normal ml-2">({sortedContent.length})</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedContent.map(item => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div className="flex items-center gap-2">
                      {item.trending && <TrendingUp className="w-4 h-4 text-orange-500" />}
                      {item.featured && <Star className="w-4 h-4 text-yellow-500" />}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {item.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(item.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.type === 'Case Study' ? 'bg-green-100 text-green-800' :
                      item.type === 'Free Download' ? 'bg-purple-100 text-purple-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {sortedContent.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated with Latest Content</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Get weekly updates on new articles, case studies, and resources. Join 10,000+ 
            professionals who trust our content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
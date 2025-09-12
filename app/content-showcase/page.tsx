<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function ContentShowcase() {
  return (
    <>
=======
import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { Search, Filter, Calendar, Clock, User, TrendingUp, Star, Download, BookOpen, Play } from 'lucide-react';

export default function ContentShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    { id: 'all', name: 'All Content', count: 50 },
    { id: 'ai-automation', name: 'AI Automation', count: 12 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 8 },
    { id: 'case-studies', name: 'Case Studies', count: 16 },
    { id: 'resources', name: 'Resources', count: 8 },
    { id: 'trends', name: 'Trends & Insights', count: 5 }
  ];

  const content = [
    {
      id: 1,
      title: "Advanced AI Architecture Patterns for 2025: Building Scalable, Resilient Systems",
      description: "Master advanced AI architecture patterns for 2025. Learn microservices, event-driven design, and distributed AI systems with real-world examples and implementation guides.",
      category: "ai-automation",
      type: "Article",
      readTime: "25 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🏗️",
      href: "/blog/ai-2025-advanced-ai-architecture",
      tags: ["AI Architecture", "Microservices", "Scalability", "Implementation"]
    },
    {
      id: 2,
      title: "AI Cybersecurity Revolution 2025: Protecting Against Next-Gen Threats",
      description: "Discover the AI cybersecurity revolution transforming enterprise security in 2025. Learn about advanced threat detection, automated response, and zero-trust AI architectures.",
      category: "cybersecurity",
      type: "Article",
      readTime: "22 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🛡️",
      href: "/blog/ai-2025-cybersecurity-revolution",
      tags: ["AI Cybersecurity", "Threat Detection", "Zero Trust", "Security"]
    },
    {
      id: 3,
      title: "Quantum Computing Breakthrough 2025: The AI Revolution Accelerates",
      description: "Discover the quantum computing breakthroughs revolutionizing AI in 2025. Learn about quantum machine learning, quantum advantage, and the future of computational intelligence.",
      category: "trends",
      type: "Article",
      readTime: "28 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "⚛️",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      tags: ["Quantum Computing", "Quantum AI", "Machine Learning", "Innovation"]
    },
    {
      id: 3,
      title: "AI Healthcare Diagnosis Success 2025: 95% Accuracy Case Study",
      description: "Discover how a leading healthcare system achieved 95% diagnostic accuracy and 60% faster diagnosis times with AI-powered medical imaging.",
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
      id: 4,
      title: "$200M Manufacturing Success: AI Autonomous Systems Case Study 2025",
      description: "Discover how a Fortune 500 manufacturer achieved $200M in savings using AI autonomous systems. Complete case study with implementation details, ROI analysis, and lessons learned.",
      category: "case-studies",
      type: "Case Study",
      readTime: "18 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "💰",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      tags: ["Manufacturing", "Autonomous AI", "Case Study", "ROI"]
    },
    {
      id: 5,
      title: "AI Implementation Master Guide 2026: Complete 200+ Page Resource",
      description: "Download our comprehensive AI Implementation Master Guide 2026. 200+ pages of step-by-step instructions, templates, checklists, and best practices.",
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
      id: 5,
      title: "AI 2025 Breakthrough Innovations: Revolutionary Technologies",
      description: "Discover the groundbreaking AI innovations transforming 2025: autonomous systems, quantum AI, edge intelligence, and sustainable AI solutions.",
      category: "trends",
      type: "Article",
      readTime: "25 min read",
      publishDate: "2025-01-05",
      author: "Zion Tech Group",
      featured: false,
      trending: true,
      icon: "🚀",
      href: "/blog/ai-2025-breakthrough-innovations",
      tags: ["AI Innovations", "Technology", "Future", "Breakthrough"]
    },
    {
      id: 6,
      title: "AI Workforce Transformation 2025: Complete Reskilling Guide",
      description: "Learn how to transform your workforce for the AI era. Complete reskilling strategies, implementation guides, and real-world success stories.",
      category: "ai-automation",
      type: "Article",
      readTime: "18 min read",
      publishDate: "2025-01-03",
      author: "Zion Tech Group",
      featured: false,
      trending: false,
      icon: "👥",
      href: "/blog/ai-workforce-transformation-2025",
      tags: ["Workforce", "Reskilling", "AI Training", "Transformation"]
    },
    {
      id: 7,
      title: "AI Data Privacy & Compliance 2025: Complete Guide",
      description: "Navigate the complex landscape of AI data privacy regulations. Learn about GDPR, CCPA, and emerging AI-specific compliance requirements.",
      category: "cybersecurity",
      type: "Article",
      readTime: "22 min read",
      publishDate: "2025-01-01",
      author: "Zion Tech Group",
      featured: false,
      trending: false,
      icon: "🔒",
      href: "/blog/ai-data-privacy-compliance-2025",
      tags: ["Privacy", "Compliance", "GDPR", "Data Protection"]
    },
    {
      id: 8,
      title: "AI Sustainability & Green Tech 2025: Building Eco-Friendly AI",
      description: "Learn how to build sustainable AI systems that reduce environmental impact while maintaining performance. Complete guide to green AI practices.",
      category: "trends",
      type: "Article",
      readTime: "20 min read",
      publishDate: "2024-12-28",
      author: "Zion Tech Group",
      featured: false,
      trending: false,
      icon: "🌱",
      href: "/blog/ai-sustainability-green-tech-2025",
      tags: ["Sustainability", "Green Tech", "Environment", "Eco-Friendly"]
    },
    {
      id: 9,
      title: "AI Autonomous Manufacturing Success: $200M Case Study",
      description: "Discover how a Fortune 500 manufacturing company achieved $200M in savings through autonomous AI systems. Complete implementation details and lessons learned.",
      category: "case-studies",
      type: "Case Study",
      readTime: "18 min read",
      publishDate: "2024-12-25",
      author: "Zion Tech Group",
      featured: false,
      trending: true,
      icon: "💰",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      tags: ["Manufacturing", "Autonomous AI", "Case Study", "ROI"]
    },
    {
      id: 10,
      title: "AI Cybersecurity Checklist 2025: 150+ Security Items",
      description: "Download our comprehensive AI cybersecurity checklist with 150+ security items to ensure your AI systems are protected against emerging threats.",
      category: "resources",
      type: "Free Download",
      readTime: "150+ items",
      publishDate: "2024-12-22",
      author: "Zion Tech Group",
      featured: false,
      trending: false,
      icon: "📋",
      href: "/resources/ai-cybersecurity-checklist-2025",
      tags: ["Checklist", "Security", "AI Safety", "Free Download"]
    },
    {
      id: 11,
      title: "AI Implementation Master Guide 2026: Complete 200+ Page Resource",
      description: "Download our comprehensive AI Implementation Master Guide 2026. 200+ pages of step-by-step instructions, templates, checklists, and best practices.",
      category: "resources",
      type: "Free Download",
      readTime: "200+ pages",
      publishDate: "2025-01-08",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "📚",
      href: "/resources/ai-implementation-master-guide-2026",
      tags: ["Master Guide", "Implementation", "Templates", "Free Download"]
    },
    {
      id: 12,
      title: "AI Financial Services Transformation Success 2025: 300% ROI Case Study",
      description: "Complete case study: How a major bank achieved 300% ROI through strategic AI implementation. Learn the strategies, challenges, and results of this transformation.",
      category: "case-studies",
      type: "Case Study",
      readTime: "15 min read",
      publishDate: "2025-01-10",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "💰",
      href: "/case-studies/ai-financial-services-transformation-2025",
      tags: ["Financial Services", "Case Study", "ROI", "Transformation"]
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
>>>>>>> 5fabaa3cc47e5546458c55a46baa6ab5d50bae79
      <SEO
        title="Content Showcase - AI & Technology Resources | Zion Tech Group"
        description="Explore our comprehensive library of AI and technology resources. Discover breakthrough innovations, case studies, implementation guides, and expert insights for 2025."
        keywords="AI resources, technology guides, case studies, implementation guides, AI innovations, business transformation"
        url="/content-showcase"
      />
      
<<<<<<< HEAD
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">🎯 COMPREHENSIVE RESOURCE LIBRARY</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI & Technology Content Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover our extensive collection of breakthrough AI insights, implementation guides, 
                case studies, and expert resources designed to accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  📚 Browse All Articles
                </Link>
                <Link
                  href="/case-studies"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
                >
                  📊 View Case Studies
                </Link>
              </div>
            </div>
=======
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
            <div className="text-3xl font-bold text-blue-600 mb-2">50</div>
            <div className="text-gray-600">Total Articles</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">16</div>
            <div className="text-gray-600">Case Studies</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
            <div className="text-gray-600">Free Resources</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">30K+</div>
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
>>>>>>> 5fabaa3cc47e5546458c55a46baa6ab5d50bae79
          </div>
        </section>

        {/* Featured Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🔥 Featured Content - January 2025
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our most popular and impactful resources that are transforming businesses worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* AI Breakthrough Innovations */}
              <Link href="/blog/ai-2025-breakthrough-innovations" className="group">
                <article className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🚀</div>
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium mb-4">
                    NEW
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI 2025 Breakthrough Innovations
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Revolutionary AI technologies that are reshaping industries and creating unprecedented opportunities for businesses worldwide.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>25 min read</span>
                    <span className="group-hover:text-blue-600 transition-colors">Read Article →</span>
                  </div>
                </article>
              </Link>

              {/* Sustainability & Green Tech */}
              <Link href="/blog/ai-sustainability-green-tech-2025" className="group">
                <article className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-green-100">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🌱</div>
                  <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium mb-4">
                    NEW
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Sustainability & Green Tech 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How artificial intelligence is revolutionizing sustainability efforts and building a greener future for businesses and communities.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>20 min read</span>
                    <span className="group-hover:text-green-600 transition-colors">Read Article →</span>
                  </div>
                </article>
              </Link>

              {/* Robotics & Automation */}
              <Link href="/blog/ai-robotics-automation-2025" className="group">
                <article className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🤖</div>
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium mb-4">
                    NEW
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Robotics & Automation 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    The future of intelligent machines and how advanced robotics are revolutionizing industries and creating unprecedented opportunities.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>22 min read</span>
                    <span className="group-hover:text-blue-600 transition-colors">Read Article →</span>
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                📚 Content Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our organized collection of resources by topic and industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI & Machine Learning */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-6">🧠</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI & Machine Learning</h3>
                <p className="text-gray-600 mb-6">
                  Cutting-edge AI technologies, implementation guides, and breakthrough innovations
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Articles</span>
                    <span className="font-medium">12+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Case Studies</span>
                    <span className="font-medium">8+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Guides</span>
                    <span className="font-medium">15+</span>
                  </div>
                </div>
                <Link
                  href="/blog"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Explore AI Content
                </Link>
              </div>

              {/* Sustainability & Green Tech */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-6">🌱</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability & Green Tech</h3>
                <p className="text-gray-600 mb-6">
                  Eco-friendly AI solutions and sustainable technology implementations
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Articles</span>
                    <span className="font-medium">8+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Case Studies</span>
                    <span className="font-medium">5+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Guides</span>
                    <span className="font-medium">10+</span>
                  </div>
                </div>
                <Link
                  href="/blog"
                  className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Explore Green Tech
                </Link>
              </div>

              {/* Robotics & Automation */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-6">🤖</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Robotics & Automation</h3>
                <p className="text-gray-600 mb-6">
                  Intelligent machines and automated systems transforming industries
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Articles</span>
                    <span className="font-medium">10+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Case Studies</span>
                    <span className="font-medium">6+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Guides</span>
                    <span className="font-medium">12+</span>
                  </div>
                </div>
                <Link
                  href="/blog"
                  className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Explore Robotics
                </Link>
              </div>

              {/* Case Studies */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-6">📊</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories</h3>
                <p className="text-gray-600 mb-6">
                  Real-world implementations and measurable business results
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Manufacturing</span>
                    <span className="font-medium">8+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Healthcare</span>
                    <span className="font-medium">5+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Finance</span>
                    <span className="font-medium">6+</span>
                  </div>
                </div>
                <Link
                  href="/case-studies"
                  className="block w-full bg-orange-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  View Case Studies
                </Link>
              </div>

              {/* Implementation Guides */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-6">📋</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Guides</h3>
                <p className="text-gray-600 mb-6">
                  Step-by-step guides for successful technology adoption
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">AI Implementation</span>
                    <span className="font-medium">15+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">ROI Calculators</span>
                    <span className="font-medium">8+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Templates</span>
                    <span className="font-medium">20+</span>
                  </div>
                </div>
                <Link
                  href="/resources"
                  className="block w-full bg-indigo-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Download Guides
                </Link>
              </div>

              {/* Industry Solutions */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-6">🏭</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Tailored solutions for specific industries and use cases
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Manufacturing</span>
                    <span className="font-medium">12+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Healthcare</span>
                    <span className="font-medium">8+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Finance</span>
                    <span className="font-medium">10+</span>
                  </div>
                </div>
                <Link
                  href="/services"
                  className="block w-full bg-teal-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                📈 Latest Resources & Downloads
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fresh content and downloadable resources added weekly
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/resources/ai-implementation-master-guide-2026" className="group">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-blue-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📖</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI Implementation Master Guide 2026
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    200+ page comprehensive guide with frameworks and templates
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Free Download</span>
                    <span>200+ pages</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-cybersecurity-checklist-2025" className="group">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-green-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    AI Cybersecurity Checklist 2025
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    150+ security items for secure AI implementation
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Free Download</span>
                    <span>150+ items</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-workforce-transformation-playbook-2025" className="group">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-purple-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👥</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    AI Workforce Transformation Playbook
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Complete reskilling strategies and implementation guides
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Free Download</span>
                    <span>150+ pages</span>
                  </div>
                </div>
              </Link>

              <Link href="/tools/ai-roi-calculator" className="group">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-orange-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💰</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    AI ROI Calculator
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Calculate potential return on AI investments
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Interactive Tool</span>
                    <span>Free</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
<<<<<<< HEAD
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              📧 Stay Updated with Latest Content
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Get weekly updates on new articles, case studies, and resources delivered 
              straight to your inbox. Join 10,000+ professionals who trust our content.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
=======
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
>>>>>>> 5fabaa3cc47e5546458c55a46baa6ab5d50bae79
          </div>
        </section>
      </div>
    </>
  );
}
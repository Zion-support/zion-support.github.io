import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { ArrowLeft, Calendar, Clock, User, Download, Star, TrendingUp, BookOpen, Award, Zap, Brain, Rocket, Shield, Users } from 'lucide-react';

export default function ContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover groundbreaking AI innovations transforming industries worldwide",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      icon: Rocket,
      category: "Article",
      readTime: "25 min read",
      featured: true,
      gradient: "from-purple-500 to-pink-500",
      stats: "500K+ views",
      badge: "Trending",
      type: "blog"
    },
    {
      title: "AI Workforce Transformation 2025",
      description: "Complete guide to reskilling strategies for the AI era",
      href: "/blog/ai-workforce-transformation-2025",
      icon: Users,
      category: "Strategy Guide",
      readTime: "18 min read",
      featured: true,
      gradient: "from-blue-500 to-cyan-500",
      stats: "300K+ downloads",
      badge: "Popular",
      type: "blog"
    },
    {
      title: "AI Sustainability Success Story",
      description: "60% energy reduction and carbon neutrality achieved",
      href: "/case-studies/ai-sustainability-transformation-2025",
      icon: Award,
      category: "Case Study",
      readTime: "15 min read",
      featured: true,
      gradient: "from-green-500 to-teal-500",
      stats: "200K+ reads",
      badge: "New",
      type: "case-study"
    },
    {
      title: "AI Implementation Master Guide 2026",
      description: "Complete 200+ page resource with proven strategies and templates",
      href: "/resources/ai-implementation-master-guide-2026",
      icon: BookOpen,
      category: "Free Download",
      readTime: "200+ pages",
      featured: true,
      gradient: "from-orange-500 to-red-500",
      stats: "1M+ downloads",
      badge: "Hot",
      type: "resource"
    },
    {
      title: "AI Space Exploration Breakthrough",
      description: "$2.1B mission success with 99.9% autonomous operation",
      href: "/case-studies/ai-space-exploration-breakthrough-2025",
      icon: Zap,
      category: "Case Study",
      readTime: "20 min read",
      featured: true,
      gradient: "from-indigo-500 to-purple-500",
      stats: "150K+ views",
      badge: "Featured",
      type: "case-study"
    },
    {
      title: "AI Healthcare Diagnosis Success",
      description: "95% accuracy and 60% faster diagnosis times",
      href: "/case-studies/ai-healthcare-diagnosis-success-2025",
      icon: TrendingUp,
      category: "Case Study",
      readTime: "12 min read",
      featured: true,
      gradient: "from-pink-500 to-rose-500",
      stats: "180K+ reads",
      badge: "New",
      type: "case-study"
    },
    {
      title: "AI Cybersecurity Checklist 2025",
      description: "150+ security items for secure AI implementation",
      href: "/resources/ai-cybersecurity-checklist-2025",
      icon: Shield,
      category: "Free Download",
      readTime: "150+ items",
      featured: true,
      gradient: "from-red-500 to-pink-500",
      stats: "250K+ downloads",
      badge: "Essential",
      type: "resource"
    },
    {
      title: "AI Data Privacy & Compliance 2025",
      description: "Complete guide to AI privacy regulations and best practices",
      href: "/blog/ai-data-privacy-compliance-2025",
      icon: Brain,
      category: "Article",
      readTime: "22 min read",
      featured: true,
      gradient: "from-teal-500 to-cyan-500",
      stats: "120K+ views",
      badge: "Important",
      type: "blog"
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Trending':
        return 'bg-red-500 text-white';
      case 'Popular':
        return 'bg-blue-500 text-white';
      case 'New':
        return 'bg-green-500 text-white';
      case 'Hot':
        return 'bg-orange-500 text-white';
      case 'Featured':
        return 'bg-purple-500 text-white';
      case 'Essential':
        return 'bg-yellow-500 text-black';
      case 'Important':
        return 'bg-pink-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI Articles, Case Studies & Resources"
        description="Explore our comprehensive collection of AI articles, case studies, and resources. Stay updated with the latest insights, strategies, and implementation guides."
        keywords="AI content, AI articles, AI case studies, AI resources, AI insights, AI strategies, AI implementation"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              🚀 Content Showcase
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our latest AI insights, success stories, and implementation guides. 
              Everything you need to stay ahead in the AI revolution.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-blue-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-blue-800 text-sm">Articles Published</div>
            </div>
            <div className="text-center bg-green-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-green-800 text-sm">Case Studies</div>
            </div>
            <div className="text-center bg-purple-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-purple-800 text-sm">Free Resources</div>
            </div>
            <div className="text-center bg-orange-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">2M+</div>
              <div className="text-orange-800 text-sm">Total Downloads</div>
            </div>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🌟 Featured Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredContent.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
              >
                <div className={`h-32 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                  <item.icon className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${getBadgeColor(item.badge)}`}>
                      {item.badge}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(item.type)}`}>
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>{item.stats}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            📚 Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/blog" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 border border-blue-200">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Articles</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  In-depth articles covering AI trends, strategies, and insights from industry experts.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800">
                  <span>Explore Articles</span>
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </div>
              </div>
            </Link>

            <Link href="/case-studies" className="group">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl hover:from-green-100 hover:to-teal-100 transition-all duration-300 border border-green-200">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Case Studies</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Real-world success stories and detailed analysis of AI implementations across industries.
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:text-green-800">
                  <span>View Case Studies</span>
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </div>
              </div>
            </Link>

            <Link href="/resources" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300 border border-purple-200">
                <div className="flex items-center mb-4">
                  <Download className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Resources</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Free templates, checklists, guides, and tools to accelerate your AI implementation.
                </p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-800">
                  <span>Download Resources</span>
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Latest Updates */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🔥 Latest Updates
          </h2>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">This Week's Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-gray-700">AI 2025 Revolutionary Breakthroughs published</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-gray-700">AI Implementation Master Guide 2026 released</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-gray-700">New sustainability case study added</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-gray-700">AI workforce transformation guide updated</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Coming Soon</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">AI Ethics & Governance Framework</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Edge AI Implementation Guide</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">AI ROI Calculator Tool</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">Quantum AI Research Report</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-indigo-100 mb-6 max-w-2xl mx-auto">
            Get the latest AI insights, case studies, and resources delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
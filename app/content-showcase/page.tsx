import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import TrendingContentWidget from '../../components/TrendingContentWidget';

export default function ContentShowcase() {
  const allContent = [
    // Articles
    {
      id: 1,
      title: "AI 2025 Breakthrough Innovations",
      type: "Article",
      category: "AI & Technology",
      readTime: "25 min",
      status: "New",
      href: "/blog/ai-2025-breakthrough-innovations",
      icon: "🚀",
      description: "Discover the revolutionary AI breakthroughs shaping 2025: Multimodal AI, Quantum AI, Neural Interfaces, and Advanced Robotics.",
      views: "12.5K",
      trending: true,
      publishDate: "2025-01-28"
    },
    {
      id: 2,
      title: "AI Productivity Automation 2025",
      type: "Article",
      category: "AI & Automation",
      readTime: "15 min",
      status: "Trending",
      href: "/blog/ai-productivity-automation-2025",
      icon: "⚡",
      description: "Transform your business with 300% productivity gains and 40% cost reduction through strategic AI automation.",
      views: "15.7K",
      trending: true,
      publishDate: "2025-01-25"
    },
    {
      id: 3,
      title: "AI Enterprise Transformation 2025",
      type: "Article",
      category: "Enterprise AI",
      readTime: "20 min",
      status: "New",
      href: "/blog/ai-enterprise-transformation-2025",
      icon: "🏢",
      description: "Complete guide to enterprise-wide AI transformation with real case studies and implementation frameworks.",
      views: "9.8K",
      trending: true,
      publishDate: "2025-01-22"
    },
    {
      id: 4,
      title: "AI Trends 2025 Predictions",
      type: "Article",
      category: "AI & Technology",
      readTime: "28 min",
      status: "Popular",
      href: "/blog/ai-trends-2025-predictions",
      icon: "🔮",
      description: "15 predictions that will shape the future of AI and technology in 2025 and beyond.",
      views: "18.2K",
      trending: false,
      publishDate: "2025-01-20"
    },
    {
      id: 5,
      title: "AI Security Comprehensive Guide",
      type: "Article",
      category: "AI Security",
      readTime: "45 min",
      status: "Essential",
      href: "/blog/ai-security-2025-comprehensive-guide",
      icon: "🛡️",
      description: "Complete framework for protecting AI systems from threats and ensuring compliance.",
      views: "11.3K",
      trending: false,
      publishDate: "2025-01-18"
    },
    // Case Studies
    {
      id: 6,
      title: "Fortune 500 AI Success Story",
      type: "Case Study",
      category: "Success Stories",
      readTime: "18 min",
      status: "Hot",
      href: "/case-studies/ai-transformation-fortune-500-success-2025",
      icon: "🏆",
      description: "How a Fortune 500 company achieved $50M in savings and 300% ROI through comprehensive AI transformation.",
      views: "8.2K",
      trending: true,
      publishDate: "2025-01-26"
    },
    {
      id: 7,
      title: "AI Manufacturing Automation Success",
      type: "Case Study",
      category: "Manufacturing",
      readTime: "12 min",
      status: "Rising",
      href: "/case-studies/ai-manufacturing-automation-success-2025",
      icon: "🏭",
      description: "40% cost reduction and 60% faster processing through AI automation in manufacturing.",
      views: "6.4K",
      trending: false,
      publishDate: "2025-01-24"
    },
    {
      id: 8,
      title: "Financial Services AI Transformation",
      type: "Case Study",
      category: "Financial Services",
      readTime: "16 min",
      status: "New",
      href: "/case-studies/ai-financial-services-transformation-success-2025",
      icon: "🏦",
      description: "Complete transformation of financial services operations with AI achieving 95% accuracy.",
      views: "7.1K",
      trending: true,
      publishDate: "2025-01-23"
    },
    {
      id: 9,
      title: "Healthcare AI Diagnosis Breakthrough",
      type: "Case Study",
      category: "Healthcare",
      readTime: "14 min",
      status: "Popular",
      href: "/case-studies/ai-healthcare-diagnosis-breakthrough-2025",
      icon: "🏥",
      description: "95% accuracy in medical diagnosis with 80% faster processing times using AI.",
      views: "9.5K",
      trending: false,
      publishDate: "2025-01-21"
    },
    // Resources
    {
      id: 10,
      title: "AI Implementation Master Guide",
      type: "Resource",
      category: "Free Resources",
      readTime: "150+ pages",
      status: "Popular",
      href: "/resources/ai-implementation-master-guide-2025",
      icon: "📚",
      description: "150+ pages of templates, checklists, frameworks, and step-by-step implementation guides.",
      views: "22.3K",
      trending: false,
      publishDate: "2025-01-27"
    },
    {
      id: 11,
      title: "AI Automation Implementation Playbook",
      type: "Resource",
      category: "Free Resources",
      readTime: "120+ pages",
      status: "New",
      href: "/resources/ai-automation-implementation-playbook-2025",
      icon: "📋",
      description: "Complete playbook for implementing AI automation across your organization.",
      views: "13.7K",
      trending: true,
      publishDate: "2025-01-25"
    },
    {
      id: 12,
      title: "AI Implementation Checklist",
      type: "Resource",
      category: "Free Resources",
      readTime: "Checklist",
      status: "Essential",
      href: "/resources/ai-implementation-checklist-2025",
      icon: "✅",
      description: "Comprehensive checklist covering all aspects of AI project implementation.",
      views: "16.8K",
      trending: false,
      publishDate: "2025-01-24"
    }
  ];

  const categories = [
    "All",
    "AI & Technology",
    "AI & Automation", 
    "Enterprise AI",
    "AI Security",
    "Success Stories",
    "Manufacturing",
    "Financial Services",
    "Healthcare",
    "Free Resources"
  ];

  const contentTypes = ["All", "Article", "Case Study", "Resource"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-green-100 text-green-800';
      case 'Hot':
        return 'bg-red-100 text-red-800';
      case 'Trending':
        return 'bg-blue-100 text-blue-800';
      case 'Popular':
        return 'bg-purple-100 text-purple-800';
      case 'Rising':
        return 'bg-orange-100 text-orange-800';
      case 'Essential':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Content Showcase - AI Articles, Case Studies & Resources"
        description="Explore our comprehensive collection of AI articles, case studies, and free resources. 25+ new articles, 15+ case studies, and 10+ implementation guides."
        keywords="AI content, AI articles, AI case studies, AI resources, AI implementation, AI guides, AI trends"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            📚 Content Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover our comprehensive collection of AI articles, case studies, and free resources. 
            Everything you need to succeed with AI in 2025.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Trending Widget */}
              <TrendingContentWidget />
              
              {/* Categories */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Types */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Content Types</h3>
                <div className="space-y-2">
                  {contentTypes.map((type) => (
                    <button
                      key={type}
                      className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">Content Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Total Articles</span>
                    <span className="font-bold">25+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Case Studies</span>
                    <span className="font-bold">15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Free Resources</span>
                    <span className="font-bold">10+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Pages</span>
                    <span className="font-bold">500+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search articles, case studies, and resources..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>All Categories</option>
                    <option>AI & Technology</option>
                    <option>Case Studies</option>
                    <option>Resources</option>
                  </select>
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>All Types</option>
                    <option>Articles</option>
                    <option>Case Studies</option>
                    <option>Resources</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {allContent.map((item) => (
                <Link key={item.id} href={item.href} className="group">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-3xl group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(item.status)}`}>
                              {item.status}
                            </span>
                            <span className="text-xs text-gray-500">{item.type}</span>
                            {item.trending && (
                              <span className="text-xs text-orange-600 font-medium">🔥 Trending</span>
                            )}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-4">
                          <span>{item.category}</span>
                          <span>•</span>
                          <span>{item.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{item.views} views</span>
                          <span>•</span>
                          <span>{item.publishDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Load More Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
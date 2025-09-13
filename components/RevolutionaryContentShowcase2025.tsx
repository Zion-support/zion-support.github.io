import React from 'react';
import Link from 'next/link';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

export default function RevolutionaryContentShowcase2025() {
  const featuredContent = [
    {
      title: "AI 2025 Ultimate Breakthrough Trends",
      description: "Discover the revolutionary AI trends that will reshape industries in 2025. From quantum computing to neural interfaces.",
      href: "/blog/ai-2025-ultimate-breakthrough-trends",
      category: "Blog",
      type: "Trends",
      icon: "🔮",
      badge: "NEW",
      badgeColor: "bg-yellow-500",
      stats: "50K+ views"
    },
    {
      title: "Global Finance Transformation: 1500% ROI",
      description: "How a global financial services company achieved unprecedented success with comprehensive AI transformation.",
      href: "/case-studies/ai-2025-global-finance-transformation-breakthrough",
      category: "Case Study",
      type: "Finance",
      icon: "💰",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-green-500",
      stats: "1500% ROI"
    },
    {
      title: "Enterprise Transformation Master Guide",
      description: "The complete blueprint for enterprise AI transformation. Everything you need to achieve 1000%+ ROI.",
      href: "/resources/ai-2025-enterprise-transformation-master-guide",
      category: "Resource",
      type: "Guide",
      icon: "📚",
      badge: "ESSENTIAL",
      badgeColor: "bg-blue-500",
      stats: "500+ companies"
    },
    {
      title: "Quantum Machine Learning Revolution",
      description: "Explore how quantum computing is revolutionizing machine learning with 1000x faster processing capabilities.",
      href: "/blog/ai-2025-quantum-machine-learning-breakthrough",
      category: "Blog",
      type: "Technology",
      icon: "⚛️",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-purple-500",
      stats: "1000x faster"
    },
    {
      title: "Neural Interface Breakthroughs 2025",
      description: "The convergence of neuroscience and AI is creating unprecedented opportunities for human-AI collaboration.",
      href: "/blog/ai-2025-neural-interface-revolution",
      category: "Blog",
      type: "Innovation",
      icon: "🧠",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-pink-500",
      stats: "95% accuracy"
    },
    {
      title: "Manufacturing AI Success Story",
      description: "How AI automation transformed manufacturing operations, achieving 40% efficiency gains and 60% cost reduction.",
      href: "/case-studies/ai-2025-manufacturing-transformation-breakthrough",
      category: "Case Study",
      type: "Manufacturing",
      icon: "🏭",
      badge: "SUCCESS",
      badgeColor: "bg-orange-500",
      stats: "40% efficiency"
    }
  ];

  const categories = [
    { name: "All Content", count: "50+", active: true },
    { name: "Blog Posts", count: "25+", active: false },
    { name: "Case Studies", count: "15+", active: false },
    { name: "Resources", count: "10+", active: false }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY CONTENT SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover the Future of AI
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive collection of breakthrough AI content, featuring cutting-edge research, 
            proven case studies, and practical implementation guides that will transform your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                category.active
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <Card className="p-6 h-full hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{content.icon}</div>
                  <Badge className={`${content.badgeColor} text-white text-xs font-semibold`}>
                    {content.badge}
                  </Badge>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {content.category}
                    </span>
                    <span className="text-xs font-medium text-gray-500">
                      {content.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {content.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-green-600">
                    {content.stats}
                  </span>
                  <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Content Impact by the Numbers</h3>
            <p className="opacity-90">Real results from our comprehensive AI content library</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">2M+</div>
              <div className="text-sm opacity-90">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">500+</div>
              <div className="text-sm opacity-90">Companies Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">1500%</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">95%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of companies that have already achieved breakthrough results with our 
            proven AI transformation methodologies and comprehensive content library.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content-showcase"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🎯 Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              💬 Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
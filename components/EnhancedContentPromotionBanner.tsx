import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  category: string;
  readTime: string;
  isNew?: boolean;
  icon: string;
  featured?: boolean;
}

const featuredContent: ContentItem[] = [
  {
    title: "Advanced AI Architecture Patterns for 2025",
    description: "Building scalable, cost-effective systems with 300%+ ROI",
    href: "/blog/ai-2025-advanced-ai-architecture",
    category: "AI Architecture",
    readTime: "25 min read",
    isNew: true,
    icon: "🏗️",
    featured: true
  },
  {
    title: "AI Automation Trends 2025",
    description: "Complete guide to enterprise transformation with 400%+ ROI",
    href: "/blog/ai-2025-automation-trends",
    category: "AI Automation",
    readTime: "22 min read",
    isNew: true,
    icon: "🤖",
    featured: true
  },
  {
    title: "$200M Manufacturing Success Case Study",
    description: "How Fortune 500 achieved 60% efficiency gains with autonomous AI",
    href: "/case-studies/ai-autonomous-manufacturing-success-2025",
    category: "Case Study",
    readTime: "15 min read",
    isNew: true,
    icon: "💰",
    featured: true
  },
  {
    title: "AI Implementation Master Guide 2026",
    description: "200+ page comprehensive guide with frameworks and templates",
    href: "/resources/ai-implementation-master-guide-2026",
    category: "Free Resource",
    readTime: "200+ pages",
    isNew: true,
    icon: "📚",
    featured: true
  }
];

const trendingContent: ContentItem[] = [
  {
    title: "AI Workforce Transformation 2025",
    description: "Reskilling strategies for the AI era",
    href: "/blog/ai-workforce-transformation-2025",
    category: "Workforce",
    readTime: "18 min read",
    icon: "👥"
  },
  {
    title: "AI Sustainability & Green Tech",
    description: "Building eco-friendly AI systems",
    href: "/blog/ai-sustainability-green-tech-2025",
    category: "Sustainability",
    readTime: "20 min read",
    icon: "🌱"
  },
  {
    title: "AI Cybersecurity Checklist 2025",
    description: "150+ security items for secure AI implementation",
    href: "/resources/ai-cybersecurity-checklist-2025",
    category: "Security",
    readTime: "Free Download",
    icon: "🛡️"
  },
  {
    title: "Edge AI: Privacy by Design",
    description: "On-device intelligence for instant, compliant CX",
    href: "/blog/edge-ai-privacy-by-design-2025",
    category: "Edge Computing",
    readTime: "8 min read",
    icon: "🔐"
  }
];

const EnhancedContentPromotionBanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY CONTENT DROP</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Fresh AI & Business Insights
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our latest breakthrough content: Advanced AI Architecture, Automation Trends, 
            $200M Success Case Study, and comprehensive implementation guides. Expert insights 
            to accelerate your success in 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-showcase"
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              🎯 Explore All Content
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              📖 Read Latest Articles
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredContent.map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    {item.isNew && (
                      <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:underline">
                    {item.title}
                  </h4>
                  <p className="text-sm opacity-90 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs opacity-75">
                    <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Trending Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Trending This Week</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingContent.map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white bg-opacity-5 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-15 transition-all duration-300 border border-white border-opacity-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm group-hover:underline">
                        {item.title}
                      </h4>
                      <p className="text-xs opacity-90 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs opacity-75">
                    <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Content Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">25K+</div>
              <div className="text-sm opacity-90">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">340%</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Success Stories</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📋 Download Free Resources
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              💬 Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContentPromotionBanner;
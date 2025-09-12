import React from 'react';
import Link from 'next/link';

export default function ContentShowcase2026() {
  const featuredContent = [
    {
      title: "AI Implementation Master Guide 2026",
      description: "Complete blueprint for implementing AI in your organization with quantum-enhanced strategies and autonomous systems.",
      category: "Implementation Guide",
      readTime: "45 min read",
      difficulty: "Advanced",
      href: "/resources/ai-implementation-master-guide-2026",
      badge: "NEW 2026",
      badgeColor: "bg-purple-100 text-purple-800"
    },
    {
      title: "AI Tools Showcase 2026",
      description: "Discover next-generation AI development tools, platforms, and frameworks that will transform your workflow.",
      category: "Tools & Platforms",
      readTime: "30 min read",
      difficulty: "Intermediate",
      href: "/ai-tools-showcase-2026",
      badge: "HOT",
      badgeColor: "bg-red-100 text-red-800"
    },
    {
      title: "Global Retail Giant AI Transformation",
      description: "Case study showing how a Fortune 500 company achieved 400% ROI through comprehensive AI transformation.",
      category: "Case Study",
      readTime: "20 min read",
      difficulty: "All Levels",
      href: "/case-studies/ai-transformation-global-retail-giant-2026",
      badge: "SUCCESS STORY",
      badgeColor: "bg-green-100 text-green-800"
    },
    {
      title: "AI 2026: Revolutionary Breakthroughs",
      description: "Explore the groundbreaking AI innovations coming in 2026 that will reshape our world.",
      category: "Trends & Insights",
      readTime: "15 min read",
      difficulty: "All Levels",
      href: "/blog/ai-2026-revolutionary-breakthroughs",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-blue-100 text-blue-800"
    }
  ];

  const categories = [
    { name: "Implementation Guides", count: 8, href: "/resources" },
    { name: "Case Studies", count: 12, href: "/case-studies" },
    { name: "AI Tools", count: 15, href: "/ai-tools-showcase-2026" },
    { name: "Blog Posts", count: 25, href: "/blog" }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🚀 2026 CONTENT COLLECTION
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content for 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of AI resources, tools, and insights 
            designed to prepare you for the future of artificial intelligence.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900">{category.name}</span>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </Link>
          ))}
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <Link
              key={index}
              href={content.href}
              className="group bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${content.badgeColor}`}>
                    {content.badge}
                  </span>
                  <span className="text-sm text-gray-500">{content.category}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>{content.readTime}</span>
                  <span>•</span>
                  <span>{content.difficulty}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {content.title}
              </h3>
              
              <p className="text-gray-600 mb-6 line-clamp-3">
                {content.description}
              </p>
              
              <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700">
                <span>Read More</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white text-center mb-12">
          <h3 className="text-2xl font-bold mb-8">2026 Content Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-90">New Resources</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">400%</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-sm opacity-90">Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your AI Strategy?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get personalized recommendations and implementation support for your AI transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Get Expert Consultation
            </Link>
            <Link
              href="/content-showcase"
              className="border border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Browse All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
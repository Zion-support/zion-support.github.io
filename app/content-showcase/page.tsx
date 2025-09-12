import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  const featuredContent = [
    {
      title: "Advanced AI Architecture Patterns for 2025",
      description: "Master advanced AI architecture patterns including microservices, event-driven design, and distributed AI systems.",
      type: "Blog Article",
      category: "AI Architecture",
      readTime: "25 min read",
      status: "New",
      href: "/blog/ai-2025-advanced-ai-architecture",
      icon: "🏗️",
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      title: "AI Automation Trends 2025: The Future of Intelligent Business Operations",
      description: "Discover the revolutionary AI automation trends that are transforming how businesses operate in 2025.",
      type: "Blog Article",
      category: "AI Automation",
      readTime: "22 min read",
      status: "New",
      href: "/blog/ai-2025-automation-trends",
      icon: "🤖",
      gradient: "from-purple-50 to-pink-50"
    },
    {
      title: "$200M Manufacturing Success: Autonomous AI Systems Case Study",
      description: "How a Fortune 500 manufacturing company achieved $200M in savings and 60% efficiency gains through autonomous AI systems.",
      type: "Case Study",
      category: "Manufacturing",
      readTime: "15 min read",
      status: "New",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      icon: "💰",
      gradient: "from-green-50 to-teal-50"
    },
    {
      title: "AI Implementation Master Guide 2026: Complete Framework for Success",
      description: "The definitive guide to AI implementation in 2026. 200+ page comprehensive framework with templates and checklists.",
      type: "Resource Guide",
      category: "Implementation",
      readTime: "200+ pages",
      status: "Free Download",
      href: "/resources/ai-implementation-master-guide-2026",
      icon: "📚",
      gradient: "from-orange-50 to-red-50"
    }
  ];

  const allContent = [
    ...featuredContent,
    {
      title: "AI 2025 Breakthrough Innovations",
      description: "Discover the most groundbreaking AI innovations of 2025 that are transforming industries.",
      type: "Blog Article",
      category: "AI Innovation",
      readTime: "25 min read",
      status: "Trending",
      href: "/blog/ai-2025-breakthrough-innovations",
      icon: "🚀",
      gradient: "from-cyan-50 to-blue-50"
    },
    {
      title: "AI Sustainability & Green Tech 2025",
      description: "Building eco-friendly AI systems for the future with 60% energy reduction achieved.",
      type: "Blog Article",
      category: "Sustainability",
      readTime: "20 min read",
      status: "New",
      href: "/blog/ai-sustainability-green-tech-2025",
      icon: "🌱",
      gradient: "from-green-50 to-emerald-50"
    },
    {
      title: "AI Workforce Transformation 2025",
      description: "Complete guide to reskilling strategies for the AI era with real-world implementation examples.",
      type: "Blog Article",
      category: "Workforce",
      readTime: "18 min read",
      status: "Popular",
      href: "/blog/ai-workforce-transformation-2025",
      icon: "👥",
      gradient: "from-indigo-50 to-purple-50"
    },
    {
      title: "AI Cybersecurity Checklist 2025",
      description: "150+ security items for secure AI implementation with compliance frameworks.",
      type: "Resource Guide",
      category: "Security",
      readTime: "150+ items",
      status: "Free Download",
      href: "/resources/ai-cybersecurity-checklist-2025",
      icon: "🛡️",
      gradient: "from-red-50 to-pink-50"
    }
  ];

  const categories = ["All", "AI Architecture", "AI Automation", "Manufacturing", "Implementation", "AI Innovation", "Sustainability", "Workforce", "Security"];
  const types = ["All", "Blog Article", "Case Study", "Resource Guide"];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase: Latest AI Insights, Case Studies & Resources 2025"
        description="Explore our comprehensive collection of AI content including blog articles, case studies, and implementation guides. 200+ pages of expert insights to accelerate your AI success."
        keywords="AI content, AI blog, AI case studies, AI resources, AI implementation, AI insights, AI trends 2025"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🔥 CONTENT SHOWCASE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🚀 Revolutionary AI Content: 200+ Pages of Expert Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our latest breakthrough content covering AI architecture, automation trends, 
            real-world case studies, and comprehensive implementation guides. Everything you need 
            to succeed with AI in 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              📚 View All Articles
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
            >
              💼 View Case Studies
            </Link>
            <Link
              href="/resources"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
            >
              📋 View Resources
            </Link>
          </div>
        </header>

        {/* Featured Content Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">✨ Featured Content</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredContent.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className={`bg-gradient-to-br ${content.gradient} rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200`}>
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{content.icon}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-white bg-opacity-60 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                      {content.type}
                    </span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      content.status === 'New' ? 'bg-green-100 text-green-800' :
                      content.status === 'Trending' ? 'bg-orange-100 text-orange-800' :
                      content.status === 'Popular' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {content.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {content.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{content.category}</span>
                    <span>{content.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Filter Section */}
        <section className="mb-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Content</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-full hover:bg-indigo-50 hover:border-indigo-300 transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <button
                      key={type}
                      className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-full hover:bg-indigo-50 hover:border-indigo-300 transition-colors"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Content Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">📚 All Content</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allContent.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{content.icon}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                      {content.type}
                    </span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      content.status === 'New' ? 'bg-green-100 text-green-800' :
                      content.status === 'Trending' ? 'bg-orange-100 text-orange-800' :
                      content.status === 'Popular' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {content.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {content.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{content.category}</span>
                    <span>{content.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">📊 Content Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-sm opacity-90">Pages of Content</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Ready-to-Use Templates</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-sm opacity-90">Real-World Case Studies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-sm opacity-90">Monthly Downloads</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your AI Journey?</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Get started with our comprehensive AI content library and accelerate your success with 
              proven frameworks, real-world examples, and expert insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/ai-implementation-master-guide-2026"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                📚 Download Master Guide
              </Link>
              <Link
                href="/contact"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
              >
                💬 Get Expert Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
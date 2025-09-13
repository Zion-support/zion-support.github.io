import React from 'react';
import Link from 'next/link';

export default function ContentDiscovery2026() {
  const featuredContent = [
    {
      title: "AI 2026: Revolutionary Breakthroughs That Will Transform Everything",
      description: "Discover the groundbreaking AI innovations coming in 2026 that will revolutionize industries, from quantum AI to neural interfaces and autonomous systems.",
      type: "Blog Post",
      category: "AI Innovation",
      readTime: "15 min read",
      image: "🚀",
      href: "/blog/ai-2026-revolutionary-breakthroughs",
      featured: true
    },
    {
      title: "Fortune 500 Company Achieves 400% ROI with Revolutionary AI Transformation",
      description: "How a global manufacturing giant transformed operations using cutting-edge AI technologies, achieving unprecedented efficiency gains and cost savings.",
      type: "Case Study",
      category: "Success Story",
      readTime: "12 min read",
      image: "💼",
      href: "/case-studies/ai-2026-fortune-500-transformation-success",
      featured: true
    },
    {
      title: "AI 2026 Implementation Toolkit: Complete Guide to Enterprise AI Transformation",
      description: "Everything you need to successfully implement cutting-edge AI technologies in your organization. Includes checklists, templates, frameworks, and proven methodologies.",
      type: "Resource",
      category: "Implementation",
      readTime: "47 pages",
      image: "🛠️",
      href: "/resources/ai-2026-implementation-toolkit",
      featured: true
    }
  ];

  const trendingContent = [
    {
      title: "Quantum AI: The Next Frontier in Machine Learning",
      description: "Explore how quantum computing is revolutionizing AI capabilities and what it means for your business.",
      type: "Blog Post",
      category: "Quantum AI",
      readTime: "8 min read",
      image: "⚛️",
      href: "/blog/ai-2026-quantum-machine-learning-revolution"
    },
    {
      title: "Neural Interfaces: Direct Brain-Computer Communication",
      description: "The most revolutionary development of 2026 - neural interfaces enabling direct communication between human brain and AI systems.",
      type: "Blog Post",
      category: "Neural Interfaces",
      readTime: "10 min read",
      image: "🧠",
      href: "/blog/ai-2026-neural-interface-revolution"
    },
    {
      title: "Autonomous Systems: The Age of True Autonomy",
      description: "How autonomous systems achieved true autonomy in 2026, operating independently with human-level intelligence.",
      type: "Blog Post",
      category: "Autonomous Systems",
      readTime: "9 min read",
      image: "🤖",
      href: "/blog/ai-2026-advanced-autonomous-systems"
    },
    {
      title: "Global Retail Transformation: 600% ROI Success Story",
      description: "How a global retail chain achieved 600% ROI through AI-powered transformation and automation.",
      type: "Case Study",
      category: "Retail AI",
      readTime: "11 min read",
      image: "🏪",
      href: "/case-studies/ai-2026-global-retail-transformation-success"
    }
  ];

  const resources = [
    {
      title: "AI 2026 Enterprise Implementation Master Guide",
      description: "Comprehensive guide for large-scale AI implementations in enterprise environments.",
      type: "Guide",
      category: "Enterprise",
      readTime: "52 pages",
      image: "📖",
      href: "/resources/ai-2026-enterprise-implementation-master-guide"
    },
    {
      title: "AI Security Hardening Checklist 2026",
      description: "Complete security checklist for AI implementations using 2026 technologies.",
      type: "Checklist",
      category: "Security",
      readTime: "15 pages",
      image: "🔒",
      href: "/resources/ai-security-hardening-checklist"
    },
    {
      title: "AI ROI Calculator 2026",
      description: "Interactive tool to calculate potential ROI for your AI transformation project.",
      type: "Tool",
      category: "ROI",
      readTime: "Interactive",
      image: "💰",
      href: "/tools/ai-roi-calculator-2026"
    }
  ];

  const ContentCard = ({ content, featured = false }) => (
    <Link 
      href={content.href}
      className={`block p-6 rounded-lg border transition-all hover:shadow-lg hover:border-blue-500 ${
        featured ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200' : 'bg-white border-gray-200'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="text-4xl">{content.image}</div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
              content.type === 'Blog Post' ? 'bg-blue-100 text-blue-800' :
              content.type === 'Case Study' ? 'bg-green-100 text-green-800' :
              content.type === 'Resource' ? 'bg-purple-100 text-purple-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {content.type}
            </span>
            <span className="text-xs text-gray-500">{content.category}</span>
            {featured && (
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                Featured
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
            {content.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {content.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">{content.readTime}</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Discover AI 2026 Content
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our comprehensive collection of AI 2026 content, including breakthrough technologies, 
          success stories, and implementation guides.
        </p>
      </div>

      {/* Featured Content */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">⭐ Featured Content</h3>
          <Link 
            href="/content-showcase" 
            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredContent.map((content, index) => (
            <ContentCard key={index} content={content} featured={true} />
          ))}
        </div>
      </section>

      {/* Trending Content */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">🔥 Trending Now</h3>
          <Link 
            href="/blog" 
            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
          >
            View All Blog Posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingContent.map((content, index) => (
            <ContentCard key={index} content={content} />
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">🛠️ Implementation Resources</h3>
          <Link 
            href="/resources" 
            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
          >
            View All Resources
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((content, index) => (
            <ContentCard key={index} content={content} />
          ))}
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">🧮 Interactive Tools</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">💰</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">AI ROI Calculator</h4>
                <p className="text-gray-600 text-sm">Calculate potential ROI for your AI transformation</p>
              </div>
            </div>
            <Link 
              href="/tools/ai-roi-calculator-2026"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Try Calculator
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">📊</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">AI Readiness Assessment</h4>
                <p className="text-gray-600 text-sm">Evaluate your organization's AI readiness</p>
              </div>
            </div>
            <Link 
              href="/tools/ai-readiness-assessment"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Take Assessment
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Stay Updated with AI 2026</h3>
        <p className="text-lg mb-6 opacity-90">
          Get the latest AI breakthroughs, case studies, and implementation guides delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
        <p className="text-sm opacity-75 mt-4">
          Join 10,000+ AI professionals getting weekly insights
        </p>
      </section>
    </div>
  );
}
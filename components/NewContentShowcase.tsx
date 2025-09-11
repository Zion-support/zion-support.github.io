import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource';
  readTime?: string;
  isNew?: boolean;
  icon: string;
  category: string;
}

const contentItems: ContentItem[] = [
  {
    title: "AI Enterprise Transformation 2025",
    description: "Complete implementation guide with 340% ROI and real case studies",
    href: "/blog/ai-enterprise-transformation-2025",
    type: "blog",
    readTime: "18 min read",
    isNew: true,
    icon: "🏢",
    category: "AI & Enterprise"
  },
  {
    title: "AI Startup Funding Guide 2025",
    description: "From seed to Series A with $47B market insights and pitch templates",
    href: "/blog/ai-startup-funding-guide-2025",
    type: "blog",
    readTime: "22 min read",
    isNew: true,
    icon: "💰",
    category: "Startup Strategy"
  },
  {
    title: "Financial Services AI Success",
    description: "$50M cost savings, 300% efficiency gains - complete case study",
    href: "/case-studies/ai-financial-services-transformation-2025",
    type: "case-study",
    isNew: true,
    icon: "🏦",
    category: "Case Study"
  },
  {
    title: "AI Implementation Checklist",
    description: "150+ actionable items for successful AI implementation",
    href: "/resources/ai-implementation-checklist-2025",
    type: "resource",
    isNew: true,
    icon: "📋",
    category: "Free Resource"
  },
  {
    title: "AI Customer Support Automation",
    description: "Resolve faster, cut costs with intelligent automation",
    href: "/blog/ai-customer-support-automation-2025",
    type: "blog",
    readTime: "9 min read",
    isNew: true,
    icon: "🎧",
    category: "AI & Automation"
  },
  {
    title: "LLM Guardrails in Production",
    description: "Safety without blocking delivery in production systems",
    href: "/blog/llm-guardrails-in-production-2025",
    type: "blog",
    readTime: "8 min read",
    isNew: true,
    icon: "🛡️",
    category: "AI Engineering"
  }
];

export default function NewContentShowcase() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ JUST PUBLISHED - JANUARY 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            🚀 Fresh AI & Business Insights
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            New this week: AI Enterprise Transformation Guide, Startup Funding Playbook, Financial Services Case Study, 
            and our comprehensive 150-page AI Implementation Checklist. Expert insights to accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              📚 Read Latest Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg" 
            >
              📋 Download Free Resources
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentItems.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</div>
                  {item.isNew && (
                    <span className="bg-white bg-opacity-20 text-white text-xs font-medium px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90 mb-3">{item.description}</p>
                <div className="flex items-center justify-between text-xs opacity-75">
                  <span className="bg-white bg-opacity-20 px-2 py-1 rounded text-white">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {item.readTime && <span>{item.readTime}</span>}
                    {item.type === 'resource' && <span>Free Download</span>}
                    {item.type === 'case-study' && <span>Case Study</span>}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Get Weekly AI Insights</h3>
            <p className="text-lg opacity-90 mb-6">
              Join 10,000+ professionals who get our weekly AI insights, case studies, and free resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
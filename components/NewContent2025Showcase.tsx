import React from 'react';
import Link from 'next/link';

export default function NewContent2025Showcase() {
  const featuredContent = [
    {
      title: "AI 2025 Enterprise Transformation Mastery",
      description: "Complete guide to transforming your enterprise with AI. Learn proven strategies, implementation frameworks, and optimization techniques that deliver measurable results.",
      href: "/blog/ai-2025-enterprise-ai-transformation-mastery",
      category: "Enterprise Guide",
      readTime: "25 min read",
      icon: "🏢",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      stats: "300-500% ROI"
    },
    {
      title: "Fortune 500 Manufacturing AI Transformation",
      description: "Real success story: How a Fortune 500 company achieved 2000% ROI through comprehensive AI implementation across 25 facilities worldwide.",
      href: "/case-studies/ai-2025-fortune-500-manufacturing-transformation",
      category: "Case Study",
      readTime: "20 min read",
      icon: "🏭",
      badge: "2000% ROI",
      badgeColor: "bg-green-500",
      stats: "$50M Annual Savings"
    },
    {
      title: "AI 2025 Complete Implementation Master Guide",
      description: "The most comprehensive AI implementation resource available. 200+ pages with frameworks, templates, checklists, and step-by-step instructions.",
      href: "/resources/ai-2025-complete-implementation-master-guide",
      category: "Master Guide",
      readTime: "45 min read",
      icon: "📚",
      badge: "ULTIMATE",
      badgeColor: "bg-purple-500",
      stats: "50+ Templates"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-4">
            🚀 NEW CONTENT SHOWCASE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our latest and most comprehensive AI resources. From enterprise transformation 
            guides to real-world success stories, everything you need to succeed with AI.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden">
                {/* Header with Badge */}
                <div className="relative p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{content.icon}</div>
                    <span className={`${content.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {content.badge}
                    </span>
                  </div>
                  
                  <div className="mb-2">
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                      {content.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {content.description}
                  </p>
                </div>

                {/* Stats and Meta */}
                <div className="px-6 pb-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>{content.readTime}</span>
                    <span className="font-semibold text-green-600">{content.stats}</span>
                  </div>
                  
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
                    Read More
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/blog/ai-2025-advanced-ai-architecture" className="group">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                Advanced AI Architecture
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Master scalable, resilient AI systems with microservices and edge computing
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>15 min read</span>
                <span className="mx-2">•</span>
                <span className="text-green-600 font-medium">NEW</span>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-2025-automation-revolution" className="group">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                AI Automation Revolution
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Discover how AI automation is transforming industries and creating opportunities
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>12 min read</span>
                <span className="mx-2">•</span>
                <span className="text-green-600 font-medium">NEW</span>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough" className="group">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                Global Enterprise Success
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                1200% ROI achieved through comprehensive AI transformation
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>18 min read</span>
                <span className="mx-2">•</span>
                <span className="text-green-600 font-medium">NEW</span>
              </div>
            </div>
          </Link>

          <Link href="/tools/ai-roi-calculator-2026" className="group">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                AI ROI Calculator
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Calculate potential ROI for your AI initiatives with our advanced calculator
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>Interactive Tool</span>
                <span className="mx-2">•</span>
                <span className="text-green-600 font-medium">NEW</span>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of organizations that have already started their AI transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                🚀 Get Started Today
              </Link>
              <Link
                href="/webinars"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                📅 Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
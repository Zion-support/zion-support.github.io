import React from 'react';
import Link from 'next/link';

export default function NewContentShowcase2025() {
  const newContent = [
    {
      title: "AI 2025 Advanced Automation Mastery",
      description: "Complete guide to implementing revolutionary AI automation systems that deliver 2000%+ ROI",
      href: "/blog/ai-2025-advanced-automation-mastery",
      category: "Implementation Guide",
      icon: "🤖",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Enterprise Transformation Breakthrough",
      description: "How a Fortune 500 company achieved 3000% ROI through revolutionary AI implementation",
      href: "/case-studies/ai-2025-enterprise-transformation-breakthrough",
      category: "Success Story",
      icon: "🏆",
      badge: "NEW",
      badgeColor: "bg-green-100 text-green-800"
    },
    {
      title: "Quantum Computing Solutions 2025",
      description: "Next-generation quantum computing implementations delivering unprecedented processing power",
      href: "/quantum-computing-solutions-2025",
      category: "Technology",
      icon: "⚛️",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-purple-100 text-purple-800"
    },
    {
      title: "Neural Interface Revolution",
      description: "Breakthrough neural interface technologies transforming human-computer interaction",
      href: "/blog/neural-interface-revolution-2025",
      category: "Innovation",
      icon: "🧠",
      badge: "FUTURE",
      badgeColor: "bg-pink-100 text-pink-800"
    },
    {
      title: "Autonomous Systems Mastery",
      description: "Complete framework for implementing self-managing AI systems in enterprise environments",
      href: "/resources/autonomous-systems-mastery-guide",
      category: "Framework",
      icon: "🚀",
      badge: "ESSENTIAL",
      badgeColor: "bg-orange-100 text-orange-800"
    },
    {
      title: "AI-Powered Predictive Analytics",
      description: "Advanced predictive models delivering 99.7% accuracy in business forecasting and optimization",
      href: "/tools/ai-predictive-analytics-2025",
      category: "Tool",
      icon: "📊",
      badge: "ACCURATE",
      badgeColor: "bg-cyan-100 text-cyan-800"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-bold text-blue-800">🚀 NEW CONTENT SHOWCASE 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content Just Released
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest breakthrough content, case studies, and implementation guides 
            that are transforming businesses worldwide with unprecedented AI solutions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newContent.map((content, index) => (
            <Link
              key={index}
              href={content.href}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="p-6">
                {/* Icon and Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{content.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${content.badgeColor}`}>
                    {content.badge}
                  </span>
                </div>

                {/* Content Info */}
                <div className="mb-4">
                  <span className="text-sm text-blue-600 font-semibold">{content.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Read More */}
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                  <span>Read More</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Join thousands of companies already achieving breakthrough results with our proven AI frameworks. 
              Get access to all our content and start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/content-showcase"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore All Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">New Articles</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
            <div className="text-gray-600">Case Studies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-600">Implementation Guides</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">100K+</div>
            <div className="text-gray-600">Monthly Readers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Link from 'next/link';

export default function MegaContentShowcase2025() {
  const featuredContent = [
    {
      title: "Advanced AI Architecture for 2025",
      description: "Comprehensive guide to building scalable AI systems for enterprise applications",
      href: "/blog/ai-2025-advanced-ai-architecture",
      category: "AI Architecture",
      readTime: "15 min read",
      badge: "🔥 HOT",
      badgeColor: "bg-red-500"
    },
    {
      title: "Cybersecurity Defense Strategies",
      description: "Protecting AI systems against emerging threats and attack vectors",
      href: "/blog/cybersecurity-defense-2025",
      category: "Cybersecurity",
      readTime: "12 min read",
      badge: "NEW",
      badgeColor: "bg-green-500"
    },
    {
      title: "Enterprise AI Transformation",
      description: "Fortune 500 manufacturing company achieves 40% efficiency gains",
      href: "/case-studies/enterprise-ai-transformation",
      category: "Case Study",
      readTime: "8 min read",
      badge: "SUCCESS",
      badgeColor: "bg-blue-500"
    }
  ];

  const additionalContent = [
    {
      title: "Quantum Computing Breakthroughs",
      description: "Latest developments in quantum computing and their business applications",
      href: "/resources/quantum-computing-guide",
      category: "Emerging Tech"
    },
    {
      title: "AI Implementation Master Guide",
      description: "Complete roadmap for implementing AI in your organization",
      href: "/resources/ai-implementation-master-guide-2026",
      category: "Implementation"
    },
    {
      title: "Manufacturing Success Stories",
      description: "Real-world examples of AI transforming manufacturing operations",
      href: "/case-studies/manufacturing-ai-success",
      category: "Case Study"
    },
    {
      title: "Edge Computing Architecture",
      description: "Building distributed AI systems for real-time processing",
      href: "/blog/edge-computing-architecture-2025",
      category: "Infrastructure"
    },
    {
      title: "AI Ethics and Governance",
      description: "Establishing responsible AI practices in enterprise environments",
      href: "/resources/ai-ethics-governance",
      category: "Governance"
    },
    {
      title: "Machine Learning Operations (MLOps)",
      description: "Best practices for deploying and managing ML models at scale",
      href: "/blog/mlops-best-practices-2025",
      category: "Operations"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 MEGA CONTENT DROP - JANUARY 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Latest AI Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover cutting-edge insights, implementation guides, and success stories from our comprehensive 
            AI and technology content library. Everything you need to stay ahead in 2025.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            ⭐ Featured Content
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {content.category}
                      </span>
                      <span className={`${content.badgeColor} text-white text-xs font-semibold px-2 py-1 rounded-full`}>
                        {content.badge}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {content.title}
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {content.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{content.readTime}</span>
                      <span className="text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            📚 Complete Content Library
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalContent.map((content, index) => (
              <Link key={index} href={content.href} className="group">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {content.category}
                    </span>
                    <span className="text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                      →
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {content.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already leveraging our AI solutions and expertise. 
              Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
            <div className="text-gray-600">New Resources</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
            <div className="text-gray-600">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">$2B+</div>
            <div className="text-gray-600">Value Created</div>
          </div>
        </div>
      </div>
    </section>
  );
}
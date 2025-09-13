import React from 'react';
import Link from 'next/link';

const NewContentShowcase2026 = () => {
  const featuredContent = [
    {
      title: "AI Implementation Master Guide 2026",
      description: "Complete toolkit with 50+ templates, frameworks, and proven strategies for enterprise AI success.",
      type: "Resource",
      href: "/resources/ai-implementation-master-guide-2026",
      image: "📚",
      badge: "NEW",
      badgeColor: "bg-purple-500",
      stats: "50+ Templates"
    },
    {
      title: "Enterprise AI Implementation Masterclass",
      description: "7-Phase framework for successful AI transformation with real-world case studies and proven methodologies.",
      type: "Blog Post",
      href: "/blog/ai-2025-enterprise-implementation-masterclass",
      image: "🎯",
      badge: "MASTERCLASS",
      badgeColor: "bg-green-500",
      stats: "15 min read"
    },
    {
      title: "Global Retail Giant AI Transformation",
      description: "How a Fortune 100 retail company achieved $2.8B revenue growth and 40% operational efficiency gains.",
      type: "Case Study",
      href: "/case-studies/ai-transformation-global-retail-giant-2026",
      image: "🏆",
      badge: "SUCCESS STORY",
      badgeColor: "bg-orange-500",
      stats: "$2.8B Growth"
    }
  ];

  const additionalContent = [
    {
      title: "AI Cybersecurity Defense Blueprint",
      description: "Comprehensive security framework for AI systems in enterprise environments.",
      type: "Guide",
      href: "/blog/ai-2025-ai-security-hardening-blueprint",
      image: "🛡️",
      badge: "POPULAR",
      badgeColor: "bg-blue-500"
    },
    {
      title: "Quantum AI Breakthrough 2025",
      description: "Latest developments in quantum computing and AI integration for enterprise applications.",
      type: "Research",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      image: "⚛️",
      badge: "TRENDING",
      badgeColor: "bg-indigo-500"
    },
    {
      title: "Manufacturing AI Automation Success",
      description: "How AI transformed manufacturing operations with 50% efficiency gains and $1.2M savings.",
      type: "Case Study",
      href: "/case-studies/ai-manufacturing-automation-breakthrough-2025",
      image: "🏭",
      badge: "HOT",
      badgeColor: "bg-red-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
            🔥 JANUARY 2026 CONTENT DROP
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest AI Resources & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our newest content featuring cutting-edge AI strategies, real-world success stories, 
            and practical implementation guides for enterprise transformation.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">🌟 Featured Content</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{item.image}</div>
                    <span className={`${item.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.type}</span>
                    <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                      {item.stats}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">📚 More Recent Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalContent.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl flex-shrink-0">{item.image}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`${item.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {item.description}
                    </p>
                    <span className="text-xs text-gray-500 mt-2 block">{item.type}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
            <p className="text-lg mb-6 opacity-90">
              Get personalized guidance from our AI experts and access to our complete resource library.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/content-showcase"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore All Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2026;
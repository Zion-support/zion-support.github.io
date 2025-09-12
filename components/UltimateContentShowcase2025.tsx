import React from 'react';
import Link from 'next/link';

export default function UltimateContentShowcase2025() {
  const featuredContent = [
    {
      title: "AI 2025: Ultimate Breakthrough Trends That Will Reshape Everything",
      description: "Discover the revolutionary AI trends of 2025 that are transforming industries, creating unprecedented opportunities, and reshaping the future of work and technology.",
      href: "/blog/ai-2025-ultimate-breakthrough-trends",
      category: "Trends & Predictions",
      readTime: "15 min read",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      icon: "🔮",
      stats: "500+ companies using these trends"
    },
    {
      title: "AI 2025 Mega Enterprise Transformation: 2000% ROI Breakthrough",
      description: "How a Fortune 100 company achieved unprecedented 2000% ROI through comprehensive AI transformation, revolutionizing operations, customer experience, and revenue generation.",
      href: "/case-studies/ai-2025-mega-enterprise-transformation-breakthrough",
      category: "Case Study",
      readTime: "12 min read",
      badge: "MEGA SUCCESS",
      badgeColor: "bg-green-500",
      icon: "🏆",
      stats: "Verified $2.4B additional revenue"
    },
    {
      title: "AI 2025 Ultimate Implementation Master Guide: Complete Blueprint for Success",
      description: "The most comprehensive AI implementation guide for 2025. Step-by-step blueprint, best practices, templates, and proven strategies to achieve 1000%+ ROI with AI transformation.",
      href: "/resources/ai-2025-ultimate-implementation-master-guide",
      category: "Implementation Guide",
      readTime: "45 min read",
      badge: "ULTIMATE",
      badgeColor: "bg-purple-500",
      icon: "📚",
      stats: "Proven 1000%+ ROI methodology"
    }
  ];

  const additionalContent = [
    {
      title: "AI 2025: Advanced AI Architecture Revolution",
      description: "Next-generation AI architectures that are transforming enterprise capabilities",
      href: "/blog/ai-2025-advanced-ai-architecture",
      category: "Technical Deep Dive",
      readTime: "20 min read",
      icon: "🏗️"
    },
    {
      title: "AI 2025: Cybersecurity Defense Strategies",
      description: "Advanced AI-powered cybersecurity solutions for enterprise protection",
      href: "/blog/ai-2025-cybersecurity-defense",
      category: "Security",
      readTime: "18 min read",
      icon: "🛡️"
    },
    {
      title: "AI 2025: Quantum Computing Breakthroughs",
      description: "How quantum computing is enhancing AI capabilities and creating new opportunities",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      category: "Emerging Tech",
      readTime: "22 min read",
      icon: "⚛️"
    },
    {
      title: "AI 2025: Manufacturing Success Stories",
      description: "Real-world examples of AI transformation in manufacturing operations",
      href: "/case-studies/ai-2025-manufacturing-automation-breakthrough",
      category: "Case Study",
      readTime: "14 min read",
      icon: "🏭"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
            🚀 ULTIMATE CONTENT SHOWCASE 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That's
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Transforming Industries
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover our most comprehensive collection of AI resources, featuring breakthrough trends, 
            mega success stories, and proven implementation strategies that are already helping companies 
            achieve unprecedented results.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">🌟 Featured Content</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Content Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {content.category}
                    </span>
                    <span className={`text-xs font-bold text-white px-3 py-1 rounded-full ${content.badgeColor}`}>
                      {content.badge}
                    </span>
                  </div>
                  <div className="text-4xl mb-3">{content.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {content.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {content.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{content.readTime}</span>
                    <span className="text-green-600 font-semibold">{content.stats}</span>
                  </div>
                </div>
                
                {/* Content Footer */}
                <div className="p-6 bg-gray-50">
                  <Link
                    href={content.href}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center block"
                  >
                    Explore Content →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">📚 More Revolutionary Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalContent.map((content, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 p-6">
                <div className="text-3xl mb-3">{content.icon}</div>
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full mb-3 inline-block">
                  {content.category}
                </span>
                <h4 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {content.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {content.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{content.readTime}</span>
                  <Link
                    href={content.href}
                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">📊 Content Impact Metrics</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-200">Companies Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2000%</div>
              <div className="text-purple-200">Average ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$2.4B</div>
              <div className="text-purple-200">Additional Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-purple-200">Success Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Organization?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies already achieving unprecedented results with our AI solutions. 
            Get started with our comprehensive resources and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content-showcase"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              🎯 Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              💬 Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
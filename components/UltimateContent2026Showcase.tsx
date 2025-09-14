import React from 'react';
import Link from 'next/link';
import Card from './ui/Card';

const UltimateContent2026Showcase = () => {
  const featuredContent = [
    {
      title: "AI 2025: The Ultimate Breakthrough Guide",
      description: "Discover the revolutionary AI breakthroughs of 2025 that are transforming businesses worldwide. Learn how to implement cutting-edge AI solutions for maximum ROI.",
      category: "AI Innovation",
      readTime: "12 min read",
      featured: true,
      href: "/blog/ai-2025-ultimate-breakthrough-guide",
      image: "🤖",
      stats: "340% ROI"
    },
    {
      title: "Quantum Computing Business Applications 2025",
      description: "Explore how quantum computing is revolutionizing business operations in 2025. Discover practical applications and implementation strategies for your organization.",
      category: "Quantum Computing",
      readTime: "15 min read",
      featured: true,
      href: "/blog/quantum-computing-business-applications-2025",
      image: "⚛️",
      stats: "1000x Speedup"
    },
    {
      title: "Autonomous Business Systems 2026",
      description: "Discover how autonomous business systems are revolutionizing enterprise operations in 2026. Learn about implementation strategies and real-world success stories.",
      category: "Business Automation",
      readTime: "18 min read",
      featured: true,
      href: "/blog/autonomous-business-systems-2026",
      image: "🔄",
      stats: "60% Efficiency"
    },
    {
      title: "Fortune 500 AI Transformation Case Study",
      description: "Discover how a Fortune 500 company achieved 340% ROI through comprehensive AI transformation. Learn about their implementation strategy and results.",
      category: "Case Study",
      readTime: "10 min read",
      featured: true,
      href: "/case-studies/fortune-500-ai-transformation",
      image: "📊",
      stats: "340% ROI"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">🌟 FEATURED CONTENT 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate Content Showcase
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              2026 Edition
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our most comprehensive collection of AI, quantum computing, and autonomous systems content. 
            Transform your business with cutting-edge insights and proven strategies.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                {/* Category and Stats */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    {content.category}
                  </span>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">{content.readTime}</span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {content.stats}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{content.image}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {content.description}
                </p>

                {/* CTA */}
                <Link
                  href={content.href}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group-hover:translate-x-2 transform duration-300"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Content Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Guides</h3>
            <p className="text-gray-600 mb-4">In-depth guides covering AI implementation, quantum computing, and autonomous systems.</p>
            <Link href="/resources" className="text-purple-600 font-semibold hover:text-purple-800">
              Explore Guides →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Case Studies</h3>
            <p className="text-gray-600 mb-4">Real-world success stories from Fortune 500 companies and innovative startups.</p>
            <Link href="/case-studies" className="text-purple-600 font-semibold hover:text-purple-800">
              View Case Studies →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation Tools</h3>
            <p className="text-gray-600 mb-4">Practical tools, templates, and frameworks to accelerate your implementation.</p>
            <Link href="/tools" className="text-purple-600 font-semibold hover:text-purple-800">
              Access Tools →
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our content to achieve breakthrough results. 
            Get started with our comprehensive implementation guides today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Browse All Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContent2026Showcase;
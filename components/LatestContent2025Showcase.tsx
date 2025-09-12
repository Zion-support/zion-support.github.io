import React from 'react';
import Link from 'next/link';

export default function LatestContent2025Showcase() {
  const latestContent = [
    {
<<<<<<< HEAD
      id: 1,
      title: "Advanced Neural Networks: The Future of AI Architecture",
      description: "Discover cutting-edge neural network architectures, transformer innovations, and advanced AI systems that are revolutionizing industries in 2025.",
      title: "Advanced Neural Networks: The Future of AI Architecture",
      description: "Master cutting-edge neural network architectures and transformer innovations that are revolutionizing AI in 2025.",
      href: "/blog/ai-2025-advanced-neural-networks",
      category: "AI Architecture",
      readTime: "15 min read",
      icon: "🧠",
<<<<<<< HEAD
      badge: "BREAKTHROUGH",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      title: "AI 2025 Financial Services Revolution: 2000% ROI Success Story",
      description: "How a leading financial institution achieved 2000% ROI through AI implementation, transforming fraud detection, risk assessment, and customer experience.",
      href: "/case-studies/ai-2025-financial-services-revolution",
      category: "Case Study",
      readTime: "12 min read",
      icon: "💰",
      badge: "SUCCESS STORY",
      badgeColor: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      title: "AI 2025 Ultimate Implementation Toolkit",
      description: "Complete toolkit for AI implementation in 2025. Includes frameworks, templates, checklists, and step-by-step guides for successful AI deployment.",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      category: "Resource",
      readTime: "25 min read",
      icon: "🛠️",
      badge: "ESSENTIAL",
      badgeColor: "bg-purple-100 text-purple-800"
      featured: true,
      metrics: {
        accuracy: "99%+",
        efficiency: "10x faster",
        applications: "50+ industries"
      }
    },
    {
      title: "Global Enterprise AI Transformation: 1200% ROI Success Story",
      description: "How a Fortune 500 manufacturing company achieved unprecedented results through comprehensive AI transformation.",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      category: "Case Study",
      readTime: "12 min read",
      icon: "🏆",
      featured: true,
      metrics: {
        roi: "1200%",
        costReduction: "60%",
        efficiency: "400%"
      }
    },
    {
      title: "AI 2025 Ultimate Implementation Toolkit",
      description: "Complete toolkit with 50+ templates, frameworks, and step-by-step guides for successful AI implementation.",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      category: "Resource Guide",
      readTime: "25 min read",
      icon: "🛠️",
      featured: true,
      metrics: {
        templates: "50+",
        frameworks: "15",
        checklists: "100+"
      }
    }
  ];

  return (
<<<<<<< HEAD
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🔥 LATEST CONTENT - JANUARY 2025</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ✨ Revolutionary AI Content Just Released
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our latest breakthrough content featuring advanced neural networks, 
            real-world success stories, and comprehensive implementation tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {latestContent.map((content) => (
            <Link key={content.id} href={content.href} className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{content.icon}</div>
                  <div className="flex-1">
                    <span className={`${content.badgeColor} text-xs font-medium px-2 py-1 rounded-full`}>
                      {content.badge}
                    </span>
                    <div className="text-sm text-gray-500 mt-1">{content.readTime}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                    Read More →
                  </span>
                  <span className="text-xs text-gray-500">{content.category}</span>
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🔥 BREAKTHROUGH CONTENT - JANUARY 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🚀 Latest AI Breakthroughs & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our newest content releases featuring cutting-edge research, real-world success stories, 
            and practical implementation guides that are transforming industries.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {latestContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-indigo-200 transform hover:-translate-y-2">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl">{content.icon}</div>
                  <div className="flex flex-col items-end">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full mb-2">
                      {content.category}
                    </span>
                    <span className="text-sm text-gray-500">{content.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(content.metrics).map(([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700">
                  Read Full Article
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
<<<<<<< HEAD
        
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg"
          >
            🎯 View All Latest Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

        {/* Additional Content Preview */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            📚 More Fresh Content Coming Soon
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
              <div className="text-3xl mb-2">🤖</div>
              <h4 className="font-semibold text-gray-900 mb-1">AI Automation</h4>
              <p className="text-sm text-gray-600">Revolutionary automation strategies</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
              <div className="text-3xl mb-2">🏭</div>
              <h4 className="font-semibold text-gray-900 mb-1">Manufacturing</h4>
              <p className="text-sm text-gray-600">Industry transformation stories</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              <div className="text-3xl mb-2">🔮</div>
              <h4 className="font-semibold text-gray-900 mb-1">Future Trends</h4>
              <p className="text-sm text-gray-600">2025 predictions & insights</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-semibold text-gray-900 mb-1">Performance</h4>
              <p className="text-sm text-gray-600">Optimization techniques</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">🚀 Stay Ahead of the AI Revolution</h3>
            <p className="text-lg mb-6 opacity-90">
              Get exclusive access to our latest content, case studies, and implementation guides. 
              Join thousands of professionals transforming their businesses with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/content-showcase"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Explore All Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Link from 'next/link';

const AI2025ContentShowcase: React.FC = () => {
  const contentItems = [
    {
      title: "AI 2025: Enterprise Automation Revolution",
      description: "Discover how AI automation is transforming enterprise operations with real-world case studies and implementation strategies.",
      category: "Blog Post",
      readTime: "12 min read",
      image: "🤖",
      href: "/blog/ai-2025-enterprise-automation-revolution",
      featured: true
    },
    {
      title: "Fortune 500 AI Transformation Success",
      description: "How a Fortune 500 company achieved 340% ROI and $50M+ in annual savings through comprehensive AI transformation.",
      category: "Case Study",
      readTime: "15 min read",
      image: "🏆",
      href: "/case-studies/fortune-500-ai-transformation-2025-ultimate-success",
      featured: true
    },
    {
      title: "AI Implementation Master Guide 2025",
      description: "The complete guide to implementing AI in your enterprise, with step-by-step strategies and real-world examples.",
      category: "Resource",
      readTime: "45 min read",
      image: "📚",
      href: "/resources/ai-implementation-master-guide-2025-comprehensive",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest AI Content & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with our comprehensive collection of AI content, featuring the latest trends, success stories, and implementation guides.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-2xl flex items-center justify-center">
                <div className="text-6xl">{item.image}</div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  {item.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                  <Link
                    href={item.href}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content Preview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              More AI Content Coming Soon
            </h3>
            <p className="text-gray-600">
              We're constantly creating new content to help you stay ahead in the AI revolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl mb-3">🔮</div>
              <h4 className="font-semibold text-gray-900 mb-2">AI Predictions 2026</h4>
              <p className="text-sm text-gray-600">Coming Soon</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="font-semibold text-gray-900 mb-2">AI Security Guide</h4>
              <p className="text-sm text-gray-600">Coming Soon</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold text-gray-900 mb-2">Edge AI Solutions</h4>
              <p className="text-sm text-gray-600">Coming Soon</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-semibold text-gray-900 mb-2">AI ROI Calculator</h4>
              <p className="text-sm text-gray-600">Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using our AI solutions to drive growth, efficiency, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025ContentShowcase;
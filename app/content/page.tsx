import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'AI Content Library - Zion Tech Group',
  description: 'Comprehensive library of AI content, guides, case studies, and implementation resources for business transformation.',
  keywords: ['AI content', 'business transformation', 'case studies', 'implementation guides', 'AI resources'],
};

export default function ContentPage() {
  const contentCategories = [
    {
      title: "AI Business Transformation",
      description: "Complete guides for implementing AI across your organization",
      count: 25,
      featured: [
        {
          title: "AI 2025 Ultimate Business Transformation: Complete Implementation Guide",
          description: "Transform your business with cutting-edge AI technologies. Complete guide to AI implementation, automation, and digital transformation for 2025.",
          readTime: "15 min read",
          link: "/blog/ai-2025-ultimate-business-transformation-complete-guide",
          new: true
        }
      ]
    },
    {
      title: "Quantum Computing & AI",
      description: "Revolutionary quantum AI technologies and applications",
      count: 15,
      featured: [
        {
          title: "Quantum AI 2025: Revolutionary Breakthrough for Enterprise Success",
          description: "Discover how quantum computing and AI integration is revolutionizing enterprise operations. Complete guide to quantum AI implementation.",
          readTime: "12 min read",
          link: "/blog/quantum-ai-2025-revolutionary-breakthrough-enterprise-guide",
          new: true
        }
      ]
    },
    {
      title: "Case Studies & Success Stories",
      description: "Real-world AI implementation success stories and ROI achievements",
      count: 30,
      featured: [
        {
          title: "Fortune 500 AI Transformation: 500% ROI Success Story",
          description: "How a Fortune 500 company achieved 500% ROI through comprehensive AI transformation. Complete case study with implementation details.",
          readTime: "10 min read",
          link: "/case-studies/fortune-500-ai-transformation-success-story",
          new: true
        }
      ]
    },
    {
      title: "Neural Interfaces & Brain-Computer Interfaces",
      description: "Next-generation human-machine interaction technologies",
      count: 12,
      featured: []
    },
    {
      title: "Autonomous Systems & Automation",
      description: "Self-managing business systems and intelligent automation",
      count: 20,
      featured: []
    },
    {
      title: "Edge Computing & IoT",
      description: "Real-time AI processing at the network edge",
      count: 18,
      featured: []
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="AI Content Library - Zion Tech Group"
        description="Comprehensive library of AI content, guides, case studies, and implementation resources for business transformation."
        keywords="AI content, business transformation, case studies, implementation guides, AI resources"
        url="/content"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Content Library
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
              Discover comprehensive AI content, implementation guides, case studies, and resources 
              to transform your business with cutting-edge artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#content-categories"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Custom Strategy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section id="content-categories" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Content Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our organized collection of AI content across different categories and expertise levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {category.count} articles
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {category.description}
                  </p>

                  {category.featured.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Featured Content</h4>
                      {category.featured.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-gray-50 rounded-lg p-4 mb-3">
                          <div className="flex items-center space-x-2 mb-2">
                            {item.new && (
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                                NEW
                              </span>
                            )}
                            <span className="text-sm text-gray-500">{item.readTime}</span>
                          </div>
                          <h5 className="font-semibold text-gray-900 mb-2">{item.title}</h5>
                          <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                          <Link
                            href={item.link}
                            className="text-purple-600 font-semibold hover:text-purple-800 transition-colors text-sm"
                          >
                            Read Full Article →
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link
                    href={`/content/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block"
                  >
                    View All {category.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Latest Featured Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay up-to-date with our latest AI content, featuring cutting-edge insights and practical implementation guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-200">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                  NEW
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">
                  FEATURED
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI 2025 Ultimate Business Transformation
              </h3>
              <p className="text-gray-600 mb-4">
                Complete implementation guide for enterprise AI transformation with proven ROI strategies and real-world case studies.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">15 min read</span>
                <Link
                  href="/blog/ai-2025-ultimate-business-transformation-complete-guide"
                  className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                  NEW
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">
                  FEATURED
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quantum AI 2025 Revolutionary Breakthrough
              </h3>
              <p className="text-gray-600 mb-4">
                Discover how quantum computing and AI integration is revolutionizing enterprise operations and creating new opportunities.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">12 min read</span>
                <Link
                  href="/blog/quantum-ai-2025-revolutionary-breakthrough-enterprise-guide"
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                  NEW
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">
                  FEATURED
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fortune 500 AI Transformation Success
              </h3>
              <p className="text-gray-600 mb-4">
                Real case study showing how a Fortune 500 company achieved 500% ROI through comprehensive AI transformation.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">10 min read</span>
                <Link
                  href="/case-studies/fortune-500-ai-transformation-success-story"
                  className="text-green-600 font-semibold hover:text-green-800 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Get personalized AI implementation guidance and access to our complete content library.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Custom Strategy
            </Link>
            <Link
              href="/newsletter"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Subscribe to Updates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
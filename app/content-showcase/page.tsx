import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export const metadata = {
  title: 'Content Showcase - AI & Technology Insights | Zion Tech Group',
  description: 'Explore our comprehensive collection of AI insights, case studies, and technology guides. Discover the latest in quantum AI, autonomous systems, and business transformation.',
  keywords: ['AI content', 'technology insights', 'case studies', 'quantum AI', 'business transformation', 'AI guides'],
};

export default function ContentShowcasePage() {
  const featuredContent = [
    {
      title: "AI 2025: Next-Generation Autonomous Enterprise Systems",
      description: "Discover how next-generation autonomous enterprise systems are revolutionizing business operations with unprecedented efficiency and intelligence.",
      category: "Blog Post",
      readTime: "12 min read",
      date: "Jan 15, 2025",
      href: "/blog/ai-2025-next-generation-autonomous-enterprise-systems-ultimate-breakthrough",
      icon: "🧠",
      featured: true
    },
    {
      title: "Quantum AI 2025: Business Transformation Revolutionary Guide",
      description: "Complete guide to revolutionizing business operations with quantum AI technologies and achieving unprecedented competitive advantages.",
      category: "Comprehensive Guide",
      readTime: "15 min read",
      date: "Jan 15, 2025",
      href: "/blog/quantum-ai-2025-business-transformation-revolutionary-guide",
      icon: "⚛️",
      featured: true
    },
    {
      title: "Fortune 500 Quantum AI Transformation: 5000% ROI Success",
      description: "How a Fortune 500 company achieved unprecedented 5000% ROI through comprehensive quantum AI transformation.",
      category: "Case Study",
      readTime: "18 min read",
      date: "Jan 15, 2025",
      href: "/case-studies/fortune-500-quantum-ai-transformation-5000-roi-ultimate-success",
      icon: "🏆",
      featured: true
    }
  ];

  const contentCategories = [
    {
      title: "AI & Machine Learning",
      count: "45+ articles",
      description: "Latest insights on AI technologies and applications",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantum Computing",
      count: "25+ articles",
      description: "Quantum computing breakthroughs and business applications",
      icon: "⚛️",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Business Transformation",
      count: "35+ articles",
      description: "Digital transformation strategies and success stories",
      icon: "🚀",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Case Studies",
      count: "75+ studies",
      description: "Real-world implementations and ROI achievements",
      icon: "📊",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Content Showcase - AI & Technology Insights | Zion Tech Group"
        description="Explore our comprehensive collection of AI insights, case studies, and technology guides."
        keywords="AI content, technology insights, case studies, quantum AI, business transformation"
        url="/content-showcase"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Content Showcase
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Discover cutting-edge insights, revolutionary case studies, and comprehensive guides on AI, quantum computing, and business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#featured-content"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Featured Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Content Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-3">{category.description}</p>
                <div className="text-lg font-semibold text-purple-600">{category.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section id="featured-content" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Content</h2>
            <p className="text-lg text-gray-600">Our latest and most impactful content pieces</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{content.icon}</div>
                  <div>
                    <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                      {content.category}
                    </span>
                    <div className="text-xs text-gray-500 mt-1">{content.readTime}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{content.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{content.description}</p>
                
                <div className="flex items-center justify-between">
                  <Link
                    href={content.href}
                    className="text-purple-600 hover:text-purple-800 font-semibold flex items-center"
                  >
                    Read More →
                  </Link>
                  <div className="text-xs text-gray-500">{content.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Content Impact</h2>
            <p className="text-lg text-gray-600">Our content has helped thousands of businesses transform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">5000%</div>
              <div className="text-gray-600">Maximum ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000x</div>
              <div className="text-gray-600">Performance Improvements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Accuracy Achievements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">$50B+</div>
              <div className="text-gray-600">Value Created for Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of companies that have revolutionized their operations with our AI and quantum computing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
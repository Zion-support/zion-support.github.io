import React from 'react';
import Link from 'next/link';

const UltimateContentShowcase2026 = () => {
  const featuredContent = [
    {
      title: "Quantum Machine Learning Breakthrough",
      description: "Discover how quantum computing is revolutionizing machine learning with 10,000x speed improvements and 5000% ROI success stories.",
      category: "Quantum AI",
      readTime: "8 min read",
      featured: true,
      href: "/blog/ai-2025-2026-quantum-machine-learning-breakthrough"
    },
    {
      title: "Ultimate Business Intelligence Revolution",
      description: "Transform your decision-making with AI-powered BI that delivers 340% ROI and 95%+ accuracy in predictions.",
      category: "Business Intelligence",
      readTime: "6 min read",
      featured: true,
      href: "/blog/ai-2025-2026-ultimate-business-intelligence-revolution"
    },
    {
      title: "Fortune 500 Quantum ML Success",
      description: "How a Fortune 500 pharmaceutical company achieved 5000% ROI through quantum machine learning implementation.",
      category: "Case Study",
      readTime: "10 min read",
      featured: true,
      href: "/case-studies/ai-2025-2026-quantum-ml-fortune-500-5000-roi-success"
    },
    {
      title: "Quantum ML Implementation Guide",
      description: "The complete guide to implementing quantum machine learning in your organization, from assessment to production deployment.",
      category: "Implementation",
      readTime: "15 min read",
      featured: true,
      href: "/resources/ai-2025-2026-quantum-ml-implementation-ultimate-guide"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            <span className="mr-2">🚀</span>
            ULTIMATE CONTENT SHOWCASE 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> 2025-2026</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge AI insights, proven success stories, and comprehensive implementation guides 
            that are transforming industries worldwide.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredContent.map((content, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                content.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Featured Badge */}
              {content.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                  FEATURED
                </div>
              )}

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {content.category}
                  </span>
                  <span className="ml-3 text-gray-500 text-sm">{content.readTime}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {content.description}
                </p>

                <Link
                  href={content.href}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Content Impact Metrics</h3>
            <p className="text-purple-200">Our revolutionary AI content is driving real business results</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">5000%</div>
              <div className="text-sm text-purple-200">Maximum ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-sm text-purple-200">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">10,000x</div>
              <div className="text-sm text-purple-200">Speed Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">340%</div>
              <div className="text-sm text-purple-200">Average ROI</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations already leveraging our revolutionary AI content 
            to achieve unprecedented success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All Resources
            </Link>
            <Link
              href="/contact"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2026;
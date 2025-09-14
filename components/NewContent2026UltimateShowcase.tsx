import React from 'react';
import Link from 'next/link';

const NewContent2026UltimateShowcase = () => {
  const contentItems = [
    {
      title: "AI 2025 Enterprise Automation Mastery",
      description: "Complete guide to implementing AI automation that delivers 500%+ ROI and transforms business operations.",
      category: "AI Automation",
      readTime: "15 min read",
      featured: true,
      href: "/blog/ai-2025-enterprise-automation-mastery-ultimate-guide"
    },
    {
      title: "Quantum AI 2026 Business Revolution",
      description: "Discover how quantum AI will revolutionize business operations with 1000x faster processing and unprecedented capabilities.",
      category: "Quantum AI",
      readTime: "20 min read",
      featured: true,
      href: "/blog/quantum-ai-2026-business-revolution-complete-guide"
    },
    {
      title: "Fortune 500 Quantum AI Success Story",
      description: "How a Fortune 500 company achieved 1000% ROI through quantum AI implementation, revolutionizing their operations.",
      category: "Case Study",
      readTime: "12 min read",
      featured: true,
      href: "/case-studies/fortune-500-quantum-ai-transformation-2026-ultimate-success"
    },
    {
      title: "AI 2025 Cybersecurity Revolution",
      description: "Next-generation AI-powered cybersecurity solutions that protect against quantum threats and advanced attacks.",
      category: "Cybersecurity",
      readTime: "18 min read",
      featured: false,
      href: "/blog/ai-2025-cybersecurity-revolution-ultimate-guide"
    },
    {
      title: "Quantum Computing Implementation Guide",
      description: "Complete roadmap for implementing quantum computing solutions in enterprise environments.",
      category: "Quantum Computing",
      readTime: "25 min read",
      featured: false,
      href: "/resources/quantum-computing-implementation-guide-2026"
    },
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with advanced AI-powered business intelligence solutions.",
      category: "Business Intelligence",
      readTime: "14 min read",
      featured: false,
      href: "/blog/ai-powered-business-intelligence-2025"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold text-white">🔥 NEW CONTENT 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">AI Content</span> That Transforms Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge AI insights, implementation guides, and success stories that deliver measurable results for your business.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                  FEATURED
                </div>
              )}
              
              <div className="p-8">
                {/* Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                {/* CTA */}
                <Link
                  href={item.href}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group-hover:translate-x-2 transform duration-300"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6 opacity-90">
              Get exclusive access to our complete library of AI implementation guides, case studies, and expert insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources"
                className="bg-white text-purple-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
              >
                Explore All Resources
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-colors"
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

export default NewContent2026UltimateShowcase;
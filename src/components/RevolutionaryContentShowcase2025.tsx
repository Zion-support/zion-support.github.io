import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const RevolutionaryContentShowcase2025: React.FC = () => {
  const contentItems = [
    {
      title: "AI 2025 Ultimate Automation Revolution",
      description: "Transform your business with 50,000% ROI through intelligent automation",
      category: "AI Automation",
      readTime: "8 min read",
      featured: true,
      href: "/ai-2025-ultimate-automation-revolution"
    },
    {
      title: "Quantum Computing 2026 Breakthrough",
      description: "Discover how quantum computing will revolutionize business operations",
      category: "Quantum Computing",
      readTime: "12 min read",
      featured: true,
      href: "/quantum-computing-2026-breakthrough"
    },
    {
      title: "Fortune 500 AI Transformation Case Study",
      description: "Real-world success story: 800% ROI in 6 months",
      category: "Case Study",
      readTime: "15 min read",
      featured: true,
      href: "/fortune-500-ai-transformation"
    },
    {
      title: "Neural Interface Revolution 2025",
      description: "Direct brain-computer interfaces for enhanced productivity",
      category: "Neural Interfaces",
      readTime: "10 min read",
      featured: false,
      href: "/neural-interface-revolution-2025"
    },
    {
      title: "Autonomous Business Systems 2026",
      description: "Self-managing business operations with AI oversight",
      category: "Autonomous Systems",
      readTime: "9 min read",
      featured: false,
      href: "/autonomous-business-systems-2026"
    },
    {
      title: "Synthetic Intelligence Breakthrough",
      description: "Next-generation AI that thinks and learns like humans",
      category: "Synthetic Intelligence",
      readTime: "11 min read",
      featured: false,
      href: "/synthetic-intelligence-breakthrough"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            🎯 REVOLUTIONARY CONTENT 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Most Comprehensive AI Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge insights, real-world case studies, and breakthrough technologies 
            that are transforming businesses worldwide.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  FEATURED
                </div>
              )}
              
              <div className="p-6">
                {/* Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">{item.readTime}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {item.description}
                </p>
                
                {/* CTA */}
                <a
                  href={item.href}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of businesses already benefiting from our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentShowcase2025;
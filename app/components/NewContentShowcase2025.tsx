import React from 'react';
import Link from 'next/link';

const NewContentShowcase2025: React.FC = () => {
  const newContent = [
    {
      title: "Neural Interface Revolution 2025",
      description: "Discover how neural interfaces are revolutionizing enterprise operations with 1000% faster decisions and thought-based collaboration.",
      category: "AI Revolution",
      readingTime: "12 min read",
      href: "/blog/ai-2025-neural-interface-revolution-enterprise-breakthrough",
      featured: true,
      badge: "NEW BREAKTHROUGH"
    },
    {
      title: "Quantum Neural Superintelligence",
      description: "The most significant advancement in human technological capability. Achieve transcendent business success through quantum-powered superintelligence.",
      category: "Quantum AI",
      readingTime: "15 min read",
      href: "/blog/ai-2025-quantum-neural-superintelligence-breakthrough",
      featured: true,
      badge: "REVOLUTIONARY"
    },
    {
      title: "Fortune 500 Quantum Transformation",
      description: "Complete case study of a Fortune 500 company achieving 15,000% ROI through quantum neural superintelligence implementation.",
      category: "Case Study",
      readingTime: "10 min read",
      href: "/case-studies/quantum-neural-superintelligence-fortune-500-transformation-ultimate-success",
      featured: true,
      badge: "SUCCESS STORY"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-bold text-white">🔥 LATEST CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Content
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Just Released
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest breakthrough content covering the most advanced AI technologies 
            and revolutionary business transformations of 2025.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newContent.map((content, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${
                content.featured ? 'ring-2 ring-purple-500/20' : ''
              }`}
            >
              {/* Content Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-blue-600 rounded-t-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {content.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                    {content.readingTime}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-30">
                    {index === 0 ? '🧠' : index === 1 ? '🚀' : '📊'}
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {content.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>📖 {content.readingTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {content.description}
                </p>

                <Link
                  href={content.href}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors group/link"
                >
                  Read Full Article
                  <svg
                    className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore All Content
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
            <div className="text-gray-600">Expert Articles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
            <div className="text-gray-600">Monthly Readers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">99%</div>
            <div className="text-gray-600">Reader Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;
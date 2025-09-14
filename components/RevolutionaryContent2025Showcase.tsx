import React from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Showcase = () => {
  const contentItems = [
    {
      title: "AI 2025 Revolutionary Breakthrough",
      description: "Ultimate content showcase featuring cutting-edge AI technologies and implementation strategies.",
      link: "/blog/ai-2025-revolutionary-breakthrough-ultimate-content-showcase",
      category: "AI Revolution",
      readTime: "15 min read",
      featured: true
    },
    {
      title: "Quantum AI 2026 Business Transformation",
      description: "The definitive guide to quantum computing in business operations and competitive advantage.",
      link: "/blog/quantum-ai-2026-business-transformation-ultimate-guide",
      category: "Quantum Computing",
      readTime: "20 min read",
      featured: true
    },
    {
      title: "Fortune 500 AI Success Story",
      description: "How a Fortune 500 company achieved $2.3B in cost savings through AI transformation.",
      link: "/case-studies/fortune-500-ai-transformation-success",
      category: "Case Study",
      readTime: "10 min read",
      featured: true
    },
    {
      title: "Neural Interface Revolution 2025",
      description: "Exploring the future of human-AI collaboration through neural interface technologies.",
      link: "/blog/neural-interface-revolution-2025",
      category: "Neural Interfaces",
      readTime: "12 min read",
      featured: false
    },
    {
      title: "Autonomous Business Operations",
      description: "Complete guide to implementing autonomous business systems for maximum efficiency.",
      link: "/blog/autonomous-business-operations-2025",
      category: "Automation",
      readTime: "18 min read",
      featured: false
    },
    {
      title: "Quantum Computing Breakthroughs",
      description: "Latest quantum computing applications transforming business operations worldwide.",
      link: "/blog/quantum-computing-breakthroughs-2025",
      category: "Quantum Computing",
      readTime: "14 min read",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🔥 REVOLUTIONARY CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI insights, breakthrough technologies, 
            and real-world success stories that are reshaping the future of business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contentItems.map((item, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-t-xl">
                  <span className="text-sm font-bold">⭐ FEATURED</span>
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">{item.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Latest Content</h3>
            <p className="text-xl opacity-90 mb-6">
              Get exclusive access to our latest AI insights, breakthrough technologies, and success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025Showcase;
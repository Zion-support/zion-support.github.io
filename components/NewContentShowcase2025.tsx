import React from 'react';
import Link from 'next/link';

const NewContentShowcase2025 = () => {
  const featuredContent = [
    {
      title: "AI 2025-2026 Ultimate Business Transformation Guide",
      description: "Complete guide to achieving 10,000% ROI through AI transformation with proven strategies and real-world success stories.",
      category: "Blog Post",
      readTime: "15 min read",
      link: "/blog/ai-2025-2026-ultimate-business-transformation-revolution-ultimate-guide",
      featured: true,
      new: true
    },
    {
      title: "5,000% ROI Success Story: Fortune 100 Case Study",
      description: "Discover how a Fortune 100 company achieved unprecedented success with comprehensive AI transformation in just 18 months.",
      category: "Case Study",
      readTime: "12 min read",
      link: "/case-studies/ai-2025-2026-ultimate-transformation-5000-roi-success-story",
      featured: true,
      new: true
    },
    {
      title: "10,000% ROI Implementation Master Guide",
      description: "Step-by-step framework for implementing AI transformation initiatives that consistently deliver 10,000% ROI or higher.",
      category: "Implementation Guide",
      readTime: "20 min read",
      link: "/resources/ai-2025-2026-implementation-ultimate-master-guide-10000-roi",
      featured: true,
      new: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6 font-bold text-sm">
            🆕 NEW CONTENT 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest AI Transformation Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our newest content featuring proven strategies, real-world success stories, 
            and comprehensive implementation guides for AI transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {content.category}
                  </span>
                  {content.new && (
                    <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      NEW
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{content.readTime}</span>
                  <Link
                    href={content.link}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            View All Content →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;
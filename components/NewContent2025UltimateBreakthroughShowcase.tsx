import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBreakthroughShowcase = () => {
  const newContent = [
    {
      title: "AI 2025: The Ultimate Business Automation Revolution",
      description: "Complete implementation guide covering revolutionary AI solutions, industry transformations, and proven strategies for 2500% ROI.",
      type: "Blog Post",
      readTime: "15 min read",
      category: "AI Revolution",
      href: "/blog/ai-2025-ultimate-business-automation-revolution-complete-guide",
      featured: true
    },
    {
      title: "Fortune 500 AI Transformation: 2500% ROI Success Story",
      description: "Real-world case study showing how a Fortune 500 manufacturing company achieved 2500% ROI through comprehensive AI transformation.",
      type: "Case Study",
      readTime: "12 min read",
      category: "Success Stories",
      href: "/case-studies/fortune-500-ai-transformation-2500-roi-ultimate-success-story",
      featured: true
    },
    {
      title: "AI 2025 Implementation: Ultimate Master Guide",
      description: "Step-by-step implementation guide covering strategy, technology architecture, change management, and post-implementation optimization.",
      type: "Resource",
      readTime: "20 min read",
      category: "Implementation Guides",
      href: "/resources/ai-2025-implementation-guide",
      featured: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ NEW ULTIMATE BREAKTHROUGH CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our latest breakthrough content featuring comprehensive guides, 
            real-world success stories, and proven implementation strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {newContent.map((content, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                content.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {content.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-semibold">
                  ⭐ FEATURED CONTENT
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {content.type}
                  </span>
                  <span className="text-gray-500 text-sm">{content.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{content.category}</span>
                  <Link
                    href={content.href}
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Unlock the Power of AI Transformation
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Join thousands of companies already achieving breakthrough results with our comprehensive AI solutions, 
              implementation guides, and proven methodologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">2500%</div>
                <div className="text-gray-600">Average ROI Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Successful Implementations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction Rate</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Start Your AI Journey
              </Link>
              <Link
                href="/resources"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
              >
                Explore All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBreakthroughShowcase;
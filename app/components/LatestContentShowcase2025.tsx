import React from 'react';
import Link from 'next/link';

export default function LatestContentShowcase2025() {
  const contentItems = [
    {
      id: 1,
      title: "Quantum Neural Superintelligence",
      description: "The next evolution in AI: quantum-enhanced neural networks creating superintelligent systems that surpass human cognitive capabilities.",
      category: "Quantum AI Innovation",
      readingTime: "15 min read",
      badge: "🚀 NEW BREAKTHROUGH",
      link: "/blog/ai-2025-quantum-neural-superintelligence-breakthrough",
      featured: true
    },
    {
      id: 2,
      title: "Fortune 500 AI Transformation Success",
      description: "How a Fortune 500 manufacturing giant achieved $12.5 billion ROI in just 10 months through comprehensive AI transformation.",
      category: "Success Story",
      readingTime: "18 min read",
      badge: "💰 $12.5B ROI",
      link: "/case-studies/fortune-500-ai-transformation-2025-ultimate-success-story",
      featured: true
    },
    {
      id: 3,
      title: "Autonomous Business Revolution Guide",
      description: "Complete implementation guide to autonomous business operations. Master AI-powered business transformation with real case studies.",
      category: "Implementation Guide",
      readingTime: "22 min read",
      badge: "📚 COMPLETE GUIDE",
      link: "/blog/ai-2025-autonomous-business-revolution-complete-guide",
      featured: false
    },
    {
      id: 4,
      title: "AI Transformation ROI Calculator",
      description: "Calculate your potential ROI from AI transformation. Get personalized projections based on your industry and implementation approach.",
      category: "Business Tool",
      readingTime: "8 min read",
      badge: "📊 INTERACTIVE TOOL",
      link: "/tools/ai-transformation-roi-calculator-2025",
      featured: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">🌟 LATEST REVOLUTIONARY CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Our Newest Breakthrough Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest content featuring quantum superintelligence, autonomous business transformation, 
            and proven ROI success stories from leading enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {contentItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="p-8">
                {item.badge && (
                  <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {item.badge}
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <span>{item.readingTime}</span>
                  </div>
                </div>
                
                <Link
                  href={item.link}
                  className={`inline-block px-6 py-3 rounded-lg font-semibold transition-colors ${
                    item.featured
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {item.category === 'Business Tool' ? 'Use Tool' : 
                   item.category === 'Success Story' ? 'Read Case Study' :
                   item.category === 'Implementation Guide' ? 'Get Guide' : 'Read More'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content Promotion */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🔥 More Revolutionary Content Available
          </h3>
          <p className="text-gray-600 mb-6">
            Explore our complete library of AI breakthroughs, case studies, and implementation resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              All Blog Posts
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              All Case Studies
            </Link>
            <Link
              href="/tools"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              All Tools
            </Link>
            <Link
              href="/resources"
              className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
            >
              All Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Link from 'next/link';

export default function AI2026BreakthroughContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2026 Breakthrough Innovations",
      description: "Discover the revolutionary AI innovations that will reshape industries in 2026. From quantum-enhanced neural networks to autonomous enterprise systems.",
      href: "/blog/ai-2026-breakthrough-innovations",
      type: "Blog Post",
      readTime: "15 min read",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-100 text-red-800"
    },
    {
      title: "Global Enterprise Transformation: 5,000% ROI",
      description: "Learn how a Fortune 500 company achieved unprecedented 5,000% ROI through AI 2026 breakthrough technologies in just 6 months.",
      href: "/case-studies/ai-2026-global-enterprise-transformation-breakthrough",
      type: "Case Study",
      readTime: "12 min read",
      badge: "CASE STUDY",
      badgeColor: "bg-green-100 text-green-800"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 AI 2026 Breakthrough Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the revolutionary AI innovations and real-world success stories that are 
            transforming industries with unprecedented ROI improvements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${content.badgeColor}`}>
                    {content.badge}
                  </span>
                  <span className="text-sm text-gray-500">{content.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600">{content.type}</span>
                  <Link 
                    href={content.href}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Organization?</h3>
            <p className="text-lg mb-6 opacity-90">
              Don't get left behind in the AI revolution. Our expert team can help you implement 
              these breakthrough technologies and achieve unprecedented ROI improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/resources/ai-2026-implementation-guide"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Download Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
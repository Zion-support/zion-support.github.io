import React from 'react';
import Link from 'next/link';

export default function NewContent2026Showcase() {
  const newContent = [
    {
      title: "AI 2026: Revolutionary Trends & Predictions",
      description: "Discover the groundbreaking AI trends and predictions for 2026 that will revolutionize industries, from quantum AI breakthroughs to neural interfaces and autonomous systems.",
      type: "Blog Post",
      readTime: "15 min read",
      href: "/blog/ai-2026-revolutionary-trends-predictions",
      featured: true,
      metrics: {
        views: "12.5K",
        engagement: "94%",
        category: "AI Trends"
      }
    },
    {
      title: "AI 2026 Global Enterprise Transformation: 800% ROI Success Story",
      description: "How a Fortune 500 company achieved unprecedented success through comprehensive AI transformation, revolutionizing operations across 47 countries and generating $2.3B in additional revenue.",
      type: "Case Study",
      readTime: "12 min read",
      href: "/case-studies/ai-2026-global-enterprise-transformation-success",
      featured: true,
      metrics: {
        views: "8.7K",
        engagement: "89%",
        category: "Success Story"
      }
    },
    {
      title: "AI 2026 Complete Implementation Master Guide",
      description: "Your comprehensive blueprint for implementing AI 2026 trends in your organization. Complete roadmap, tools, templates, and expert strategies for quantum AI, neural interfaces, and autonomous systems.",
      type: "Resource Guide",
      readTime: "25 min read",
      href: "/resources/ai-2026-complete-implementation-master-guide",
      featured: true,
      metrics: {
        views: "15.2K",
        engagement: "96%",
        category: "Implementation"
      }
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-4">
            🚀 NEW CONTENT 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content for 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest comprehensive guides, case studies, and predictions that will shape the future of AI in 2026 and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newContent.map((content, index) => (
            <div key={index} className="group">
              <Link href={content.href} className="block">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  {/* Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        content.type === 'Blog Post' ? 'bg-blue-100 text-blue-800' :
                        content.type === 'Case Study' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {content.type}
                      </span>
                      {content.featured && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                      {content.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {content.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{content.metrics.views}</div>
                        <div className="text-xs text-gray-500">Views</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{content.metrics.engagement}</div>
                        <div className="text-xs text-gray-500">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{content.readTime}</div>
                        <div className="text-xs text-gray-500">Read Time</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{content.metrics.category}</span>
                      <span className="text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI 2026?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Get started with our comprehensive implementation guides and expert consulting services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/resources/ai-2026-complete-implementation-master-guide"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Get Master Guide
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/blog"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                View All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
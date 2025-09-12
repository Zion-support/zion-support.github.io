import React from 'react';
import Link from 'next/link';

export default function AI2025NewContentShowcase() {
  const newContent = [
    {
      id: 1,
      title: "AI 2025: Comprehensive Trends Analysis & Future Predictions",
      description: "Discover the most comprehensive analysis of AI trends for 2025. From enterprise automation to quantum computing breakthroughs, explore what's driving the AI revolution.",
      type: "Blog Post",
      category: "Trends Analysis",
      readTime: "15 min read",
      featured: true,
      url: "/blog/ai-2025-comprehensive-trends-analysis",
      image: "🔮",
      metrics: {
        trends: "15 Critical Trends",
        industries: "8 Industries Covered",
        predictions: "Q1-Q4 2025 Roadmap"
      }
    },
    {
      id: 2,
      title: "AI 2025 Global Tech Transformation: 900% ROI Breakthrough",
      description: "How a Fortune 500 technology company achieved 900% ROI through comprehensive AI transformation. Learn the strategies, challenges, and results of this breakthrough implementation.",
      type: "Case Study",
      category: "Success Story",
      readTime: "12 min read",
      featured: true,
      url: "/case-studies/ai-2025-global-tech-transformation-breakthrough",
      image: "🏆",
      metrics: {
        roi: "900% ROI",
        savings: "$2.3B Saved",
        efficiency: "65% Efficiency Gain"
      }
    },
    {
      id: 3,
      title: "AI 2025 Comprehensive Implementation Master Guide",
      description: "The ultimate guide to implementing AI in your organization in 2025. Complete blueprint with strategies, frameworks, checklists, and real-world examples for AI transformation success.",
      type: "Resource Guide",
      category: "Implementation",
      readTime: "25 min read",
      featured: true,
      url: "/resources/ai-2025-comprehensive-implementation-master-guide",
      image: "📚",
      metrics: {
        phases: "4 Implementation Phases",
        checklist: "50+ Action Items",
        frameworks: "Complete Blueprint"
      }
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-6 py-2 text-sm font-medium mb-4">
            🚀 NEW CONTENT SHOWCASE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI 2025 Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most comprehensive AI content release yet. Everything you need to understand, implement, and succeed with AI in 2025.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {newContent.map((content) => (
            <div key={content.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              {/* Content Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl">{content.image}</span>
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {content.type}
                      </span>
                      <span className="ml-2 inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {content.category}
                      </span>
                    </div>
                  </div>
                  {content.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>⏱️ {content.readTime}</span>
                  <span>📅 January 17, 2025</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="p-6 bg-gray-50">
                <h4 className="font-semibold text-gray-800 mb-3">Key Highlights</h4>
                <div className="grid grid-cols-1 gap-2">
                  {Object.entries(content.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center text-sm">
                      <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="font-semibold text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-6">
                <Link
                  href={content.url}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors text-center block group-hover:shadow-lg transform group-hover:-translate-y-1 transition-all duration-200"
                >
                  {content.type === 'Blog Post' && '📖 Read Analysis'}
                  {content.type === 'Case Study' && '🏆 View Case Study'}
                  {content.type === 'Resource Guide' && '📚 Get Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content Links */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">More AI 2025 Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/ai-2025-ultimate-trends-predictions" className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">🔮</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">Ultimate Trends</h4>
                <p className="text-sm text-gray-600 mt-1">AI predictions for 2025</p>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">🏢</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Enterprise Success</h4>
                <p className="text-sm text-gray-600 mt-1">1200% ROI transformation</p>
              </div>
            </Link>
            
            <Link href="/resources/ai-2025-ultimate-implementation-toolkit" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">🛠️</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">Implementation Toolkit</h4>
                <p className="text-sm text-gray-600 mt-1">Complete AI toolkit</p>
              </div>
            </Link>
            
            <Link href="/webinars/ai-2025-revolutionary-breakthroughs" className="group">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">🎥</div>
                <h4 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">Revolutionary Webinar</h4>
                <p className="text-sm text-gray-600 mt-1">Live AI breakthroughs</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Organization with AI?</h3>
            <p className="text-lg text-gray-200 mb-6">
              Get expert guidance and support for your AI implementation journey. Our team of AI specialists is ready to help you achieve breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                🤝 Get Expert Consultation
              </Link>
              <Link
                href="/content-showcase"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                📚 Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
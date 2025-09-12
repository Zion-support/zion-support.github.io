import React from 'react';
import Link from 'next/link';

export default function AI2026ContentShowcase() {
  const featuredContent = [
    {
      title: "Next-Generation AI Systems",
      description: "Discover revolutionary AI architectures that will power the future of artificial intelligence.",
      href: "/blog/ai-2026-next-generation-ai-systems",
      category: "Blog Post",
      icon: "🧠",
      readTime: "15 min read",
      isNew: true
    },
    {
      title: "Enterprise Transformation: 2000% ROI",
      description: "How a Fortune 500 company achieved unprecedented results through AI 2026 implementation.",
      href: "/case-studies/ai-2026-enterprise-transformation-breakthrough",
      category: "Case Study",
      icon: "🏢",
      readTime: "12 min read",
      isNew: true
    },
    {
      title: "AI 2026 Readiness Assessment",
      description: "Evaluate your organization's readiness for next-generation AI systems with our comprehensive tool.",
      href: "/tools/ai-2026-readiness-assessment",
      category: "AI Tool",
      icon: "🎯",
      readTime: "5 min assessment",
      isNew: true
    },
    {
      title: "Revolutionary Breakthroughs Webinar",
      description: "Join our exclusive webinar on AI 2026 breakthroughs and get insights from industry experts.",
      href: "/webinars/ai-2026-revolutionary-breakthroughs",
      category: "Webinar",
      icon: "🔥",
      readTime: "60 min webinar",
      isNew: true
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🚀 AI 2026 Content Showcase
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our latest AI 2026 content featuring next-generation systems, real-world success stories, 
            assessment tools, and exclusive webinars. Stay ahead of the AI revolution.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{content.icon}</div>
                  <div className="flex-1">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      content.category === 'Blog Post' ? 'bg-blue-100 text-blue-800' :
                      content.category === 'Case Study' ? 'bg-green-100 text-green-800' :
                      content.category === 'AI Tool' ? 'bg-purple-100 text-purple-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {content.category}
                    </span>
                    {content.isNew && (
                      <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{content.readTime}</span>
                  <span className="group-hover:text-blue-600 transition-colors">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg"
          >
            🎯 View All AI 2026 Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
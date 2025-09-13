import React from 'react';
import Link from 'next/link';

const newContent = [
  {
    id: 1,
    title: "AI 2025: Generative AI Enterprise Revolution",
    description: "Discover how generative AI is revolutionizing enterprise operations with 340% ROI and 75% productivity gains.",
    type: "Blog Post",
    category: "Enterprise AI",
    readTime: "25 min read",
    image: "🤖",
    href: "/blog/ai-2025-generative-ai-enterprise-revolution",
    featured: true,
    stats: {
      roi: "340%",
      productivity: "75%",
      savings: "$2.3M"
    }
  },
  {
    id: 2,
    title: "AI 2025: Autonomous Vehicles Revolution",
    description: "Complete analysis of self-driving technology, market trends, and business opportunities in 2025.",
    type: "Blog Post",
    category: "Mobility Tech",
    readTime: "22 min read",
    image: "🚗",
    href: "/blog/ai-2025-autonomous-vehicles-transportation",
    featured: true,
    stats: {
      market: "$127B",
      vehicles: "2.3M",
      safety: "95%"
    }
  },
  {
    id: 3,
    title: "AI 2025 Comprehensive Implementation Playbook",
    description: "300-page complete guide with frameworks, templates, and actionable strategies for AI success.",
    type: "Resource Guide",
    category: "Implementation",
    readTime: "300 pages",
    image: "📚",
    href: "/resources/ai-2025-comprehensive-implementation-playbook",
    featured: true,
    stats: {
      pages: "300+",
      templates: "30+",
      enterprises: "500+"
    }
  },
  {
    id: 4,
    title: "AI Transformation: Global Retail Giant Success",
    description: "How a Fortune 100 retailer achieved 400% ROI and 60% cost reduction in just 8 months.",
    type: "Case Study",
    category: "Retail AI",
    readTime: "15 min read",
    image: "🏪",
    href: "/case-studies/ai-transformation-global-retail-giant-2025",
    featured: true,
    stats: {
      roi: "400%",
      savings: "60%",
      satisfaction: "85%"
    }
  }
];

export default function NewContentShowcase() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🆕 Fresh AI Content Just Released
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the AI revolution with our latest insights, guides, and success stories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newContent.map((content) => (
            <Link key={content.id} href={content.href} className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{content.image}</div>
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        {content.type}
                      </span>
                      {content.featured && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2 line-clamp-2">
                    {content.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="bg-gray-100 px-2 py-1 rounded">{content.category}</span>
                    <span>{content.readTime}</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {Object.entries(content.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="font-bold text-blue-600">{value}</div>
                        <div className="text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/content-showcase" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View All New Content
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
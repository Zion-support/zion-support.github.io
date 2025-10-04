import React from "react";
import Link from "next/link";

const ContentShowcase: React.FC = () => {
  const featuredContent = [
    {
      id: 1,
      title: "AI Enterprise Transformation Guide 2026",
      description: "Complete roadmap for implementing AI in enterprise environments with proven ROI strategies.",
      link: "/blog/ai-enterprise-transformation-guide-2026",
      category: "Guide",
      readTime: "15 min read",
      featured: true
    },
    {
      id: 2,
      title: "Autonomous AI Systems Implementation",
      description: "Step-by-step guide to deploying autonomous AI systems that work 24/7 without human intervention.",
      link: "/blog/autonomous-ai-systems-implementation",
      category: "Technical",
      readTime: "12 min read",
      featured: true
    },
    {
      id: 3,
      title: "AI Cost Optimization Strategies",
      description: "Reduce AI implementation costs by 70% with these proven optimization techniques.",
      link: "/blog/ai-cost-optimization-strategies",
      category: "Strategy",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 4,
      title: "Quantum AI Computing Breakthroughs",
      description: "Latest developments in quantum AI computing and their enterprise applications.",
      link: "/blog/quantum-ai-computing-breakthroughs",
      category: "Research",
      readTime: "20 min read",
      featured: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured AI Content & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest insights, guides, and case studies on AI enterprise transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredContent.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`group block p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                item.featured 
                  ? 'border-blue-500 bg-blue-50 hover:bg-blue-100' 
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  item.featured 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {item.category}
                </span>
                {item.featured && (
                  <span className="ml-2 inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{item.readTime}</span>
                <span className="text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;
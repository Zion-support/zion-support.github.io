import React from 'react';
import Link from 'next/link';

const featuredContent = [
  {
    id: 1,
    title: "AI 2026: Revolutionary Breakthroughs That Will Transform Everything",
    description: "Discover the groundbreaking AI innovations coming in 2026 that will revolutionize industries, from quantum AI to neural interfaces and autonomous systems.",
    type: "Blog Post",
    category: "AI Innovation",
    readTime: "15 min read",
    image: "/images/ai-2026-breakthroughs.jpg",
    href: "/blog/ai-2026-revolutionary-breakthroughs",
    featured: true,
    stats: {
      views: "2.3K",
      shares: "156",
      comments: "89"
    }
  },
  {
    id: 2,
    title: "Quantum AI Financial Optimization: $2.3B Breakthrough Case Study",
    description: "How a Fortune 500 financial services company achieved $2.3B in cost savings using quantum AI optimization, reducing processing time by 99.7%.",
    type: "Case Study",
    category: "Quantum AI",
    readTime: "12 min read",
    image: "/images/quantum-ai-case-study.jpg",
    href: "/case-studies/quantum-ai-financial-optimization-breakthrough-2026",
    featured: true,
    stats: {
      views: "1.8K",
      shares: "234",
      comments: "67"
    }
  },
  {
    id: 3,
    title: "AI 2026 Implementation Toolkit: Complete Guide to Next-Gen AI",
    description: "The ultimate toolkit for implementing AI 2026 technologies including quantum AI, neural interfaces, and autonomous systems.",
    type: "Resource Guide",
    category: "Implementation",
    readTime: "25 min read",
    image: "/images/ai-2026-toolkit.jpg",
    href: "/resources/ai-2026-implementation-toolkit",
    featured: true,
    stats: {
      views: "3.1K",
      shares: "189",
      comments: "45"
    }
  }
];

export default function FeaturedContent2026Showcase() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              NEW
            </span>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
              2026
            </span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured AI 2026 Content
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest breakthrough content covering quantum AI, neural interfaces, 
            and autonomous systems that are transforming industries worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content) => (
            <div key={content.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-6xl text-white opacity-80">
                    {content.type === 'Blog Post' && '📝'}
                    {content.type === 'Case Study' && '📊'}
                    {content.type === 'Resource Guide' && '🛠️'}
                  </div>
                </div>
                
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {content.type}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                    {content.category}
                  </span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">{content.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {content.stats.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                      {content.stats.shares}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {content.stats.comments}
                    </span>
                  </div>
                </div>
                
                <Link 
                  href={content.href}
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/mega-content-showcase-2026"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            <span>View All AI 2026 Content</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
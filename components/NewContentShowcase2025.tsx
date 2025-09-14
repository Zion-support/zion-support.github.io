import React from 'react';
import Link from 'next/link';

const NewContentShowcase2025: React.FC = () => {
  const featuredContent = [
    {
      title: "AI 2025 Enterprise Transformation: The Ultimate Guide",
      excerpt: "Discover how AI is revolutionizing enterprise operations in 2025. Learn from real-world case studies and implement strategies that deliver 500%+ ROI.",
      category: "AI & Automation",
      readingTime: "12 min read",
      image: "/images/ai-enterprise-transformation-2025.jpg",
      href: "/blog/ai-2025-enterprise-transformation-ultimate-guide",
      featured: true,
      tags: ["AI", "Enterprise", "Transformation", "ROI"]
    },
    {
      title: "Global Enterprise 50,000% ROI Success Story",
      excerpt: "How a Fortune 100 company achieved unprecedented success through comprehensive AI transformation. Real results, proven strategies, and actionable insights.",
      category: "Case Study",
      readingTime: "15 min read",
      image: "/images/global-enterprise-ai-success.jpg",
      href: "/case-studies/ai-2025-global-enterprise-50000-roi-success-story",
      featured: true,
      tags: ["Success Story", "ROI", "Fortune 100", "AI"]
    },
    {
      title: "Quantum AI 2026 Business Revolution",
      excerpt: "Explore the next frontier of AI with quantum computing integration. Learn how quantum-enhanced AI is transforming business operations and creating new opportunities.",
      category: "Future Tech",
      readingTime: "10 min read",
      image: "/images/quantum-ai-2026.jpg",
      href: "/blog/quantum-ai-2026-business-revolution",
      featured: false,
      tags: ["Quantum AI", "2026", "Future", "Innovation"]
    },
    {
      title: "Neural Interface Revolution in Enterprise",
      excerpt: "Discover how neural interfaces are enabling direct human-AI collaboration, revolutionizing decision-making and operational efficiency in modern enterprises.",
      category: "Innovation",
      readingTime: "8 min read",
      image: "/images/neural-interface-enterprise.jpg",
      href: "/blog/neural-interface-revolution-enterprise",
      featured: false,
      tags: ["Neural Interface", "Collaboration", "Innovation", "Enterprise"]
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">📚 NEW CONTENT</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Latest AI Insights & Success Stories
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest research, case studies, and implementation guides. 
            Real-world insights from industry leaders and cutting-edge AI transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <div key={index} className="group">
              <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 ${content.featured ? 'ring-2 ring-purple-500' : ''}`}>
                {content.featured && (
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-medium text-center">
                    ⭐ FEATURED
                  </div>
                )}
                
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-100 to-blue-100">
                  <div className="flex items-center justify-center text-6xl">
                    {index === 0 && '🤖'}
                    {index === 1 && '📊'}
                    {index === 2 && '⚛️'}
                    {index === 3 && '🧠'}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {content.category}
                    </span>
                    <span className="text-xs text-gray-500">{content.readingTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {content.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {content.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={content.href}
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold text-sm transition-colors"
                  >
                    Read More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              📈 Content Performance Highlights
            </h3>
            <p className="text-gray-600 mb-8">
              Our content has helped thousands of businesses achieve AI transformation success
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">2.3M+</div>
                <div className="text-sm text-gray-600">Content Views</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">45K+</div>
                <div className="text-sm text-gray-600">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              📚 View All Articles
            </Link>
            
            <Link
              href="/case-studies"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              📊 Browse Case Studies
            </Link>
            
            <Link
              href="/resources"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              📋 Download Resources
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              🎯 Get Personalized Content Recommendations
            </h4>
            <p className="text-gray-600 mb-4">
              Tell us about your business challenges and we'll recommend the most relevant content for your AI transformation journey.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Personalized Recommendations
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;
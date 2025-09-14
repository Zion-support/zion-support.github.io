import React from 'react';
import Link from 'next/link';

const FeaturedContentShowcase2026 = () => {
  const featuredContent = [
    {
      title: "AI 2026 Enterprise Transformation",
      description: "Complete guide to transforming your enterprise with cutting-edge AI technologies",
      category: "AI Implementation",
      readTime: "15 min read",
      image: "/images/ai-enterprise-transformation.jpg",
      href: "/blog/ai-2026-enterprise-transformation-ultimate-guide",
      featured: true,
      tags: ["Enterprise AI", "Transformation", "2026", "Implementation"]
    },
    {
      title: "Quantum AI 2026 Business Revolution",
      description: "Discover how quantum AI is revolutionizing business operations with exponential improvements",
      category: "Quantum AI",
      readTime: "12 min read",
      image: "/images/quantum-ai-revolution.jpg",
      href: "/blog/quantum-ai-2026-business-revolution-complete-guide",
      featured: true,
      tags: ["Quantum AI", "Business Revolution", "ROI", "Case Studies"]
    },
    {
      title: "AI Transformation Success Story",
      description: "How TechCorp achieved 400% ROI in 12 months through strategic AI implementation",
      category: "Case Study",
      readTime: "8 min read",
      image: "/images/ai-success-story.jpg",
      href: "/case-studies/ai-transformation-success-story-2026",
      featured: true,
      tags: ["Success Story", "400% ROI", "Fortune 500", "Implementation"]
    },
    {
      title: "AI Implementation Ultimate Guide 2026",
      description: "The most comprehensive AI implementation guide with complete roadmap to success",
      category: "Resource",
      readTime: "20 min read",
      image: "/images/ai-implementation-guide.jpg",
      href: "/resources/ai-implementation-ultimate-guide-2026",
      featured: true,
      tags: ["Implementation", "Guide", "2026", "Best Practices"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">✨ FEATURED 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest AI transformation guides, quantum computing breakthroughs, 
            and proven success stories that will revolutionize your business in 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredContent.map((content, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-500 to-blue-600">
                  <div className="flex items-center justify-center text-6xl text-white">
                    {index === 0 && "🤖"}
                    {index === 1 && "⚛️"}
                    {index === 2 && "📈"}
                    {index === 3 && "📚"}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white bg-opacity-90 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {content.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {content.readTime}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {content.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {content.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={content.href}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group-hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join thousands of organizations already transforming their operations with our proven AI strategies, 
              implementation guides, and real-world success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center text-purple-600 bg-white hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105"
              >
                Get Started Today →
              </Link>
              <Link 
                href="/blog"
                className="inline-flex items-center text-white border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContentShowcase2026;
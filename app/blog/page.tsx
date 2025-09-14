import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'AI & Technology Blog - Zion Tech Group',
  description: 'Expert insights on AI, quantum computing, autonomous systems, and cutting-edge technology trends for 2026 and beyond.',
  keywords: ['AI blog', 'technology insights', 'quantum computing', 'autonomous systems', 'business transformation'],
};

const blogPosts = [
  {
    title: "AI 2026: Revolutionary Breakthroughs That Will Transform Business",
    excerpt: "Discover the groundbreaking AI technologies that will revolutionize business operations in 2026 and beyond.",
    date: "2025-01-14",
    category: "AI Innovation",
    tags: ["AI 2026", "Machine Learning", "Business Transformation", "Quantum Computing"],
    featured: true,
    slug: "ai-2026-revolutionary-breakthroughs"
  },
  {
    title: "Quantum Computing Business Applications: The 2026 Revolution",
    excerpt: "Explore how quantum computing is revolutionizing business operations and creating new opportunities for competitive advantage.",
    date: "2025-01-14",
    category: "Quantum Computing",
    tags: ["Quantum Computing", "Business Applications", "2026", "Optimization", "Cryptography"],
    featured: true,
    slug: "quantum-computing-business-applications-2026"
  },
  {
    title: "Autonomous Enterprise Systems: The Future of Business Operations",
    excerpt: "Discover how autonomous enterprise systems are revolutionizing business operations and creating self-managing organizations.",
    date: "2025-01-14",
    category: "Enterprise Automation",
    tags: ["Autonomous Systems", "Enterprise Automation", "AI", "2026", "Business Operations"],
    featured: true,
    slug: "autonomous-enterprise-systems-2026"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI & Technology Blog - Zion Tech Group"
        description="Expert insights on AI, quantum computing, autonomous systems, and cutting-edge technology trends for 2026 and beyond."
        keywords="AI blog, technology insights, quantum computing, autonomous systems, business transformation"
        url="/blog"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">📚 EXPERT INSIGHTS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI & Technology Blog
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert insights on AI, quantum computing, autonomous systems, and cutting-edge technology trends for 2026 and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the latest insights and breakthroughs in AI and technology that will shape the future of business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you implement these revolutionary technologies and achieve extraordinary results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
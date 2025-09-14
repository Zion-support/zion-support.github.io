import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'AI & Technology Blog - Zion Tech Group',
  description: 'Discover the latest insights on AI, quantum computing, autonomous systems, and business transformation from industry experts.',
  keywords: ['AI blog', 'technology insights', 'quantum computing', 'autonomous systems', 'business transformation'],
};

export default function BlogPage() {
  const featuredPosts = [
    {
      title: "AI 2025: The Synthetic Intelligence Revolution - Ultimate Breakthrough Guide",
      description: "Discover how synthetic intelligence is revolutionizing business operations in 2025, delivering unprecedented automation and decision-making capabilities.",
      href: "/blog/ai-2025-synthetic-intelligence-revolution-ultimate-breakthrough",
      image: "/images/synthetic-intelligence-2025.jpg",
      date: "2025-01-15",
      tags: ["AI", "Synthetic Intelligence", "Automation", "Business Transformation"],
      featured: true
    },
    {
      title: "Quantum Computing 2025: Business Transformation Ultimate Guide",
      description: "Explore how quantum computing is revolutionizing business operations in 2025, delivering breakthrough performance and unprecedented competitive advantages.",
      href: "/blog/quantum-computing-2025-business-transformation-ultimate-guide",
      image: "/images/quantum-computing-2025.jpg",
      date: "2025-01-15",
      tags: ["Quantum Computing", "Business Transformation", "AI", "Optimization"],
      featured: true
    },
    {
      title: "AI 2025: Autonomous Business Ecosystems Revolution",
      description: "Discover how autonomous business ecosystems are transforming enterprise operations in 2025, delivering unprecedented efficiency and self-managing capabilities.",
      href: "/blog/ai-2025-autonomous-business-ecosystems-revolution",
      image: "/images/autonomous-business-ecosystems-2025.jpg",
      date: "2025-01-15",
      tags: ["AI", "Autonomous Systems", "Business Ecosystems", "Automation"],
      featured: true
    }
  ];

  return (
    <div>
      <SEO
        title="AI & Technology Blog - Zion Tech Group"
        description="Discover the latest insights on AI, quantum computing, autonomous systems, and business transformation from industry experts."
        keywords="AI blog, technology insights, quantum computing, autonomous systems, business transformation"
        url="/blog"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">📚 AI & TECHNOLOGY BLOG</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Latest Insights & Breakthroughs
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Stay ahead with cutting-edge content on AI, quantum computing, autonomous systems, 
                and business transformation from industry experts.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Link
                        href={post.href}
                        className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
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
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get personalized insights and strategies tailored to your organization's unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
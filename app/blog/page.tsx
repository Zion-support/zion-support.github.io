import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'AI & Technology Blog - Zion Tech Group',
  description: 'Stay ahead with the latest insights on AI, quantum computing, and technology trends that are transforming businesses in 2025.',
  keywords: ['AI blog', 'technology insights', 'quantum computing', 'enterprise AI', 'business transformation'],
};

const BlogPage = () => {
  const blogPosts = [
    {
      title: "AI 2025: The Enterprise Transformation Revolution",
      excerpt: "Discover how AI is revolutionizing enterprise operations in 2025 with unprecedented automation, efficiency, and ROI gains.",
      date: "2025-01-15",
      category: "AI Innovation",
      readTime: "5 min read",
      featured: true,
      stats: "340% ROI",
      slug: "ai-2025-enterprise-transformation"
    },
    {
      title: "Quantum Computing Business Applications: The 2025 Breakthrough",
      excerpt: "Explore how quantum computing is revolutionizing business applications in 2025, delivering solutions to previously impossible problems.",
      date: "2025-01-14",
      category: "Quantum Computing",
      readTime: "7 min read",
      featured: true,
      stats: "10^15x Speed",
      slug: "quantum-computing-business-applications-2025"
    },
    {
      title: "Neural Interfaces: The Future of Human-Computer Interaction",
      excerpt: "Learn how neural interfaces are revolutionizing how humans interact with technology and AI systems.",
      date: "2025-01-12",
      category: "Emerging Tech",
      readTime: "6 min read",
      featured: false,
      stats: "89% Efficiency",
      slug: "neural-interfaces-future"
    },
    {
      title: "Autonomous Vehicles: Transforming Transportation in 2025",
      excerpt: "Discover how autonomous vehicles are reshaping transportation and creating new business opportunities.",
      date: "2025-01-10",
      category: "Autonomous Systems",
      readTime: "8 min read",
      featured: false,
      stats: "67% Safety",
      slug: "autonomous-vehicles-2025"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI & Technology Blog - Zion Tech Group"
        description="Stay ahead with the latest insights on AI, quantum computing, and technology trends that are transforming businesses in 2025."
        keywords="AI blog, technology insights, quantum computing, enterprise AI, business transformation"
        url="/blog"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">📚 AI & TECHNOLOGY BLOG</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Latest Insights & Trends
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with our comprehensive coverage of AI, quantum computing, 
              and emerging technologies that are reshaping the business landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600">Our most popular and impactful content</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        Featured
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="font-semibold text-purple-600">{post.stats}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Articles</h2>
            <p className="text-xl text-gray-600">Complete collection of our insights and analysis</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="font-semibold text-purple-600">{post.stats}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated with Our Latest Insights</h2>
          <p className="text-xl opacity-90 mb-8">
            Get exclusive access to our content library and never miss an important update.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe to Updates
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
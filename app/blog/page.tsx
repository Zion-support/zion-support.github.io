import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI & Tech Blog | Zion Tech Group - Latest Insights & Success Stories',
  description: 'Stay ahead with our latest AI insights, implementation guides, and success stories. Discover cutting-edge technologies and proven strategies for enterprise transformation.',
  keywords: 'AI blog, tech insights, AI implementation, enterprise AI, digital transformation, AI success stories, AI trends',
  openGraph: {
    title: 'AI & Tech Blog | Zion Tech Group',
    description: 'Latest AI insights, implementation guides, and success stories for enterprise transformation.',
    type: 'website',
    url: 'https://ziontechgroup.com/blog',
    images: [
      {
        url: '/blog/blog-index.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group AI Blog',
      },
    ],
  },
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'AI Enterprise Transformation 2026: Complete Implementation Guide',
      excerpt: 'Master AI enterprise transformation with proven strategies achieving 300% ROI, 70% cost reduction, and 90% efficiency gains.',
      href: '/blog/ai-enterprise-transformation-2026',
      category: 'Featured Article',
      readTime: '25 min read',
      publishDate: 'January 20, 2026',
      image: '/blog/ai-enterprise-transformation-2026.jpg',
      featured: true,
    },
    {
      title: 'AI Edge Computing 2025: Real-time Intelligence at the Edge',
      excerpt: 'Achieve sub-50ms response times with AI processing at the edge. Perfect for autonomous vehicles, IoT devices, and real-time applications.',
      href: '/blog/ai-edge-computing-2025',
      category: 'New Technology',
      readTime: '18 min read',
      publishDate: 'January 20, 2025',
      image: '/blog/ai-edge-computing-2025.jpg',
      featured: false,
    },
    {
      title: 'AI Trends 2025: Top 10 Predictions & Industry Insights',
      excerpt: 'Discover the top AI trends shaping 2025. From autonomous agents to edge computing, explore transformative technologies.',
      href: '/blog/ai-trends-2025-predictions',
      category: 'Featured Article',
      readTime: '15 min read',
      publishDate: 'January 20, 2025',
      image: '/blog/ai-trends-2025.jpg',
      featured: false,
    },
    {
      title: 'Multimodal AI Integration: 250% Efficiency Gains',
      excerpt: 'Learn how to integrate text, voice, and video AI for unprecedented efficiency gains and enhanced user experiences.',
      href: '/blog/multimodal-ai-integration-2025',
      category: 'Technology Guide',
      readTime: '20 min read',
      publishDate: 'January 20, 2025',
      image: '/blog/multimodal-ai-integration.jpg',
      featured: false,
    },
    {
      title: 'AI Cybersecurity: Next-Gen Protection Strategies',
      excerpt: 'Revolutionary threat detection with 99.7% accuracy. Autonomous incident response and zero-trust architecture for enterprise-grade security.',
      href: '/blog/ai-cybersecurity-2025',
      category: 'Security',
      readTime: '22 min read',
      publishDate: 'January 20, 2025',
      image: '/blog/ai-cybersecurity-2025.jpg',
      featured: false,
    },
    {
      title: 'Finance Automation: $3M+ Savings Achieved',
      excerpt: 'See how AI automation achieved 95% process reduction and $3M annual savings for a leading financial services company.',
      href: '/blog/ai-finance-automation-2025',
      category: 'Success Story',
      readTime: '16 min read',
      publishDate: 'January 20, 2025',
      image: '/blog/ai-finance-automation.jpg',
      featured: false,
    },
  ];

  const categories = [
    'All Articles',
    'Featured Article',
    'New Technology',
    'Success Story',
    'Security',
    'Technology Guide',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI & Tech Blog
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Stay ahead with our latest AI insights, implementation guides, and success stories. Discover cutting-edge technologies and proven strategies for enterprise transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
            <p className="text-lg text-gray-600">Our most popular and impactful content</p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured Article
                  </span>
                  <span className="text-gray-600 text-sm">25 min read</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  AI Enterprise Transformation 2026: Complete Implementation Guide
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Master AI enterprise transformation with proven strategies achieving 300% ROI, 70% cost reduction, and 90% efficiency gains. This comprehensive guide reveals the critical success factors that separate industry leaders from laggards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/blog/ai-enterprise-transformation-2026"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                  >
                    Read Full Guide
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
                  >
                    Get Consultation
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Key Takeaways</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Achieve 300% ROI within 12 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Reduce operational costs by 70%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Increase efficiency by 90%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Implement zero-trust AI security</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Articles</h2>
            <p className="text-lg text-gray-600">Explore our comprehensive collection of AI insights and success stories</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  category === 'All Articles'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} href={post.href} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        post.category === 'Featured Article' ? 'bg-blue-100 text-blue-800' :
                        post.category === 'New Technology' ? 'bg-cyan-100 text-cyan-800' :
                        post.category === 'Success Story' ? 'bg-green-100 text-green-800' :
                        post.category === 'Security' ? 'bg-red-100 text-red-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.publishDate}</span>
                      <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest AI Insights</h2>
          <p className="text-xl opacity-90 mb-8">
            Get weekly updates on AI trends, tech innovations, and exclusive service offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            Join 10,000+ professionals. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
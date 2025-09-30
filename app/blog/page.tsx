import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Blog - Latest Insights & Trends | Zion Tech Group',
  description: 'Stay ahead with the latest AI insights, trends, and breakthrough technologies. Explore our comprehensive collection of AI articles and resources.',
  keywords: 'AI blog, AI insights, AI trends, artificial intelligence articles, AI technology, enterprise AI',
};

const blogPosts = [
  {
    title: 'AI Revolution 2026: The Next Frontier of Enterprise Intelligence',
    slug: 'ai-revolution-2026-next-frontier',
    excerpt: 'Discover autonomous AI agents, neural interfaces, and predictive intelligence systems achieving 300% productivity gains and revolutionizing enterprise operations.',
    category: 'Featured Article',
    publishedAt: 'January 20, 2025',
    readTime: '25 min read',
    image: '🚀',
    color: 'red'
  },
  {
    title: 'Quantum AI Breakthrough 2026: Solving Impossible Problems in Seconds',
    slug: 'quantum-ai-breakthrough-2026',
    excerpt: 'Explore quantum-enhanced AI delivering 500x faster results and revolutionizing computational capabilities across enterprise operations.',
    category: 'Breakthrough',
    publishedAt: 'January 20, 2025',
    readTime: '25 min read',
    image: '⚛️',
    color: 'purple'
  },
  {
    title: 'AI Trends 2026: Comprehensive Guide to Enterprise Transformation',
    slug: 'ai-trends-2026-predictions',
    excerpt: 'Discover the top AI trends shaping 2026. From autonomous agents to edge computing, explore transformative technologies.',
    category: 'Trends',
    publishedAt: 'January 18, 2025',
    readTime: '20 min read',
    image: '📈',
    color: 'blue'
  },
  {
    title: 'AI Enterprise Automation 2026: Complete Implementation Guide',
    slug: 'ai-enterprise-automation-2026',
    excerpt: 'Master autonomous AI systems with 300% ROI strategies and enterprise-ready deployment patterns. Achieve 80% automation and 90% efficiency gains.',
    category: 'Implementation',
    publishedAt: 'January 15, 2025',
    readTime: '18 min read',
    image: '🤖',
    color: 'green'
  },
  {
    title: 'AI Multimodal Integration 2026: The Future of Enterprise AI',
    slug: 'ai-multimodal-integration-2026',
    excerpt: 'Discover how multimodal AI is revolutionizing enterprise operations with text, image, voice, and video integration. Achieve 300% efficiency gains.',
    category: 'Technology',
    publishedAt: 'January 12, 2025',
    readTime: '15 min read',
    image: '🎯',
    color: 'indigo'
  },
  {
    title: 'AI Neural Interfaces 2026: Direct Human-AI Collaboration',
    slug: 'ai-neural-interfaces-2026',
    excerpt: 'Explore the breakthrough in neural interface technology enabling unprecedented levels of human-AI collaboration and seamless integration.',
    category: 'Breakthrough',
    publishedAt: 'January 10, 2025',
    readTime: '22 min read',
    image: '🧠',
    color: 'purple'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Blog: Your Gateway to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}Enterprise Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay ahead with the latest AI insights, trends, and breakthrough technologies. 
              Explore our comprehensive collection of AI articles and resources.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-200">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      post.color === 'red' ? 'bg-red-100 text-red-800' :
                      post.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                      post.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                      post.color === 'green' ? 'bg-green-100 text-green-800' :
                      post.color === 'indigo' ? 'bg-indigo-100 text-indigo-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <div className="text-4xl mb-4">{post.image}</div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.publishedAt}</span>
                    <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Read Article →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated with AI Insights</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest AI trends, case studies, and insights delivered to your inbox weekly
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

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our AI solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Explore Our Services
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import Link from 'next/link';

export default function ContentShowcase() {
  const featuredContent = [
    {
      id: 'ai-trends-2026',
      title: 'AI Trends 2026: The Future of Enterprise AI',
      excerpt: 'Discover the latest AI trends shaping enterprise transformation in 2026. From autonomous operations to edge intelligence and quantum AI.',
      type: 'Blog Post',
      readTime: '8 min read',
      href: '/blog/ai-trends-2026',
      featured: true,
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 Manufacturing: $12M AI Transformation',
      excerpt: 'How a leading manufacturer achieved 90% process automation and $12M annual savings with autonomous AI operations.',
      type: 'Case Study',
      readTime: '6 min read',
      href: '/case-studies/fortune-500-ai-transformation',
      featured: true,
    },
    {
      id: 'autonomous-operations',
      title: 'Autonomous AI Operations: The Next Frontier',
      excerpt: 'Learn how self-managing AI systems are revolutionizing business operations with 95% automation and $8M+ annual savings.',
      type: 'Blog Post',
      readTime: '6 min read',
      href: '/blog/ai-autonomous-operations',
      featured: false,
    },
    {
      id: 'edge-ai-implementation',
      title: 'Edge AI Implementation: Real-Time Intelligence',
      excerpt: 'Master edge AI deployment with sub-50ms latency and distributed intelligence for instant decision-making.',
      type: 'Blog Post',
      readTime: '7 min read',
      href: '/blog/edge-ai-implementation',
      featured: false,
    },
  ];

  const featuredItems = featuredContent.filter(item => item.featured);
  const regularItems = featuredContent.filter(item => !item.featured);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest AI Insights & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights, real-world case studies, and cutting-edge AI trends 
            from our team of industry experts.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredItems.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-2">{item.type}</div>
                      <div className="text-sm opacity-90">Featured</div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {item.type}
                      </span>
                      <span className="text-gray-500 text-sm">{item.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Insights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {regularItems.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                        {item.type}
                      </span>
                      <span className="text-gray-500 text-xs">{item.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with AI Trends</h3>
            <p className="text-lg mb-6 opacity-90">
              Get the latest AI insights, trends, and enterprise solutions delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
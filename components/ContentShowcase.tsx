import React from 'react';
import Link from 'next/link';

<<<<<<< HEAD
interface ContentItem {
  id: string;
  title: string;
  excerpt: string;
  type: 'blog' | 'case-study' | 'service';
  category: string;
  readTime?: string;
  image?: string;
}

const featuredContent: ContentItem[] = [
  {
    id: 'ai-2026-mega-breakthrough',
    title: 'AI 2026: The Mega Breakthrough Revolution',
    excerpt: 'Discover the 5 revolutionary AI breakthroughs that are transforming every industry in 2026.',
    type: 'blog',
    category: 'AI Innovation',
    readTime: '8 min read'
  },
  {
    id: 'quantum-ai-enterprise',
    title: 'Quantum AI: The Next Frontier for Enterprise',
    excerpt: 'Explore how quantum computing is revolutionizing AI capabilities and what it means for your business.',
    type: 'blog',
    category: 'Quantum Computing',
    readTime: '6 min read'
  },
  {
    id: 'autonomous-enterprise-success',
    title: 'Fortune 500 Autonomous Transformation Success',
    excerpt: 'How a Fortune 500 company achieved 40% cost reduction with autonomous AI systems.',
    type: 'case-study',
    category: 'Success Story',
    readTime: '5 min read'
  },
  {
    id: 'ai-cost-optimization',
    title: 'AI Cost Optimization Solutions',
    excerpt: 'Maximize your AI ROI with our proven cost optimization strategies and tools.',
    type: 'service',
    category: 'AI Services'
  }
];

export default function ContentShowcase() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        );
      case 'case-study':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2 2a1 1 0 000 2h6a1 1 0 100-2H5z" clipRule="evenodd" />
          </svg>
        );
      case 'service':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'service':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getHref = (item: ContentItem) => {
    switch (item.type) {
      case 'blog':
        return `/blog/${item.id}`;
      case 'case-study':
        return `/case-studies/${item.id}`;
      case 'service':
        return `/services/${item.id}`;
      default:
        return '#';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Content & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our latest AI breakthroughs, success stories, and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredContent.map((item, index) => (
            <Link
              key={item.id}
              href={getHref(item)}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    {getTypeIcon(item.type)}
                  </div>
                  <p className="text-sm font-medium capitalize">{item.type.replace('-', ' ')}</p>
                </div>
                {index === 0 && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                      NEW
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                    {item.category}
                  </span>
                  {item.readTime && (
                    <span className="text-gray-500 text-xs">{item.readTime}</span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                  <span>Read More</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Content
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
=======
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
>>>>>>> origin/cursor/create-and-deploy-new-content-30ea
  );
}
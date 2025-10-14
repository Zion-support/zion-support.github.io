import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'AI Innovation Labs: Product Development 2025',
      excerpt: 'Exploring the latest developments in AI technology and product innovation.',
      author: 'Zion Tech Group',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'AI Innovation',
      href: '/blog/ai-innovation-labs-product-development-2025'
    },
    {
      id: 2,
      title: 'AI Enterprise Transformation 2025',
      excerpt: 'How AI is transforming enterprise operations and business processes.',
      author: 'Zion Tech Group',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'Enterprise AI',
      href: '/blog/ai-enterprise-transformation-2025'
    },
    {
      id: 3,
      title: 'AI 2025-2026 Mega Trends Breakthrough',
      excerpt: 'The biggest AI trends and breakthroughs expected in 2025-2026.',
      author: 'Zion Tech Group',
      date: '2025-01-05',
      readTime: '8 min read',
      category: 'AI Trends',
      href: '/blog/ai-2025-2026-mega-trends-breakthrough'
    },
    {
      id: 4,
      title: 'Operational Trust Scorecards V3',
      excerpt: 'Advanced trust scoring systems for operational excellence.',
      author: 'Zion Tech Group',
      date: '2024-12-30',
      readTime: '6 min read',
      category: 'Operations',
      href: '/blog/ai-2025-sept-30-operational-trust-scorecards-v3'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights, trends, and innovations in AI, technology, and digital transformation from Zion Tech Group." />
        <meta name="keywords" content="AI blog, technology insights, digital transformation, innovation, tech trends" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tech Insights & Innovation
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with the latest trends, insights, and innovations in AI, 
                technology, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 group">
                  <div className="mb-4">
                    <span className="inline-block bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Link
                    to={post.href}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest tech insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 border border-slate-600 focus:border-purple-500 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const page = React.lazy(() => import('./page'));
export default page;
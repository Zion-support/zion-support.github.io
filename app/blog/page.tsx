import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest trends in artificial intelligence and how they\'re transforming enterprise operations.',
      author: 'Zion Tech Group',
      date: '2024-01-15',
      category: 'AI',
      readTime: '5 min read',
      image: '/images/blog/ai-trends-2024.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Barriers',
      excerpt: 'Understanding quantum computing and its potential impact on business and technology.',
      author: 'Zion Tech Group',
      date: '2024-01-10',
      category: 'Technology',
      readTime: '7 min read',
      image: '/images/blog/quantum-computing.jpg'
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Modern Businesses',
      excerpt: 'Essential cybersecurity strategies to protect your business in an increasingly digital world.',
      author: 'Zion Tech Group',
      date: '2024-01-05',
      category: 'Security',
      readTime: '6 min read',
      image: '/images/blog/cybersecurity.jpg'
    },
    {
      id: 4,
      title: 'Micro SaaS: The Future of Software Development',
      excerpt: 'How micro SaaS solutions are revolutionizing the software industry and creating new opportunities.',
      author: 'Zion Tech Group',
      date: '2024-01-01',
      category: 'SaaS',
      readTime: '4 min read',
      image: '/images/blog/micro-saas.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in AI, IT, and technology.
          </p>
        </section>

        {/* Featured Post */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                    Featured
                  </span>
                  <span className="text-gray-400 text-sm">{blogPosts[0].category}</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-300 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center text-sm text-gray-400 mb-6">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{blogPosts[0].author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link
                  to={`/blog/${blogPosts[0].id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Tag className="w-8 h-8 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">Featured Article</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg h-48 mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-cyan-500/30 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Tag className="w-6 h-6 text-cyan-400" />
                    </div>
                    <p className="text-gray-300 text-sm">{post.category}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs font-medium mr-3">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights, trends, and updates delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
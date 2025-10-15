import React from 'react';
import SEOHead from '../components/SEOHead';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they\'re transforming business operations across industries.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      category: 'AI & Technology',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Micro-SaaS Development: Building Scalable Solutions',
      excerpt: 'Learn how to build and scale micro-SaaS applications that solve specific business problems.',
      author: 'Zion Tech Team',
      date: '2024-01-10',
      category: 'Development',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Essential cybersecurity measures every small business should implement to protect their data.',
      author: 'Zion Tech Team',
      date: '2024-01-05',
      category: 'Security',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Cloud Migration Strategies: A Complete Guide',
      excerpt: 'Step-by-step guide to migrating your business to the cloud safely and efficiently.',
      author: 'Zion Tech Team',
      date: '2023-12-28',
      category: 'Cloud Computing',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Digital Transformation: Where to Start',
      excerpt: 'Practical advice on beginning your digital transformation journey and avoiding common pitfalls.',
      author: 'Zion Tech Team',
      date: '2023-12-20',
      category: 'Digital Transformation',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'IT Infrastructure Optimization: Cost-Saving Strategies',
      excerpt: 'Learn how to optimize your IT infrastructure to reduce costs while improving performance.',
      author: 'Zion Tech Team',
      date: '2023-12-15',
      category: 'IT Services',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Technology',
    'Development',
    'Security',
    'Cloud Computing',
    'Digital Transformation',
    'IT Services'
  ];

  return (
    <>
      <SEOHead
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, technology, cybersecurity, and digital transformation from our expert team."
      />
      <div className="min-h-screen bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, trends, and expert advice on AI, technology, and digital transformation.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-colors ${
                  index === 0 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition-colors duration-300">
                <div className="h-48 bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Featured Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 hover:text-purple-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-slate-800 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights on AI, technology, and digital transformation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;

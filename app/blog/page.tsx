import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital age.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI Insights',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'How to Choose the Right Micro SaaS Solution for Your Business',
      excerpt: 'A comprehensive guide to selecting and implementing micro SaaS tools that align with your business goals.',
      author: 'Emily Johnson',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Micro SaaS',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Best Practices for Scalable Applications',
      excerpt: 'Learn how to design and implement cloud infrastructure that can grow with your business needs.',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Cloud Computing',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'AI-Powered Customer Support: Reducing Costs While Improving Experience',
      excerpt: 'Discover how AI can transform your customer support operations and deliver better results at lower costs.',
      author: 'Lisa Wang',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Customer Success',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Data Analytics: Turning Raw Data into Business Intelligence',
      excerpt: 'Learn how to extract meaningful insights from your data to drive better business decisions.',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Data Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'The Complete Guide to Workflow Automation in 2024',
      excerpt: 'Everything you need to know about automating your business processes for maximum efficiency.',
      author: 'Kleber Santos',
      date: '2024-01-03',
      readTime: '12 min read',
      category: 'Automation',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop'
    }
  ];

  const categories = ['All', 'AI Insights', 'Micro SaaS', 'Cloud Computing', 'Customer Success', 'Data Analytics', 'Automation'];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends from our expert team." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tips, and trends from our team of AI and IT experts. Stay ahead of the curve with our latest articles.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}>
                      <div className="h-full bg-gradient-to-r from-black/50 to-transparent flex items-end">
                        <div className="p-6 text-white">
                          <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <span>By {post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Read Full Article
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}>
                  <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>By {post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-blue-600 rounded-lg p-12 text-center text-white mb-16">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get the latest AI and IT insights delivered to your inbox weekly.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg hover:bg-gray-100 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-blue-100 mt-2">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Popular Topics */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">AI & Machine Learning</h3>
                <p className="text-sm text-gray-600">15 articles</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Cloud Computing</h3>
                <p className="text-sm text-gray-600">12 articles</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Data Analytics</h3>
                <p className="text-sm text-gray-600">10 articles</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Automation</h3>
                <p className="text-sm text-gray-600">8 articles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
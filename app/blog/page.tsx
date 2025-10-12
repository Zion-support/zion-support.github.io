import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they will shape the future of business operations and customer experiences.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration projects.',
      author: 'Michael Chen',
      date: '2024-01-10',
      category: 'Cloud Computing',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: '5G Implementation: Transforming Industries with Ultra-Fast Connectivity',
      excerpt: 'Discover how 5G technology is revolutionizing various industries and creating new opportunities.',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      category: '5G Technology',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Digital Transformation: A Step-by-Step Guide for Small Businesses',
      excerpt: 'Practical advice for small businesses looking to modernize their operations and processes.',
      author: 'David Kim',
      date: '2024-01-01',
      category: 'Digital Transformation',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Cybersecurity in the Cloud: Protecting Your Digital Assets',
      excerpt: 'Essential security measures and best practices for cloud-based applications and data.',
      author: 'Dr. Sarah Johnson',
      date: '2023-12-28',
      category: 'Cybersecurity',
      readTime: '9 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Micro SAAS Solutions: Empowering Small Businesses',
      excerpt: 'How specialized software solutions are helping small businesses compete with larger enterprises.',
      author: 'Michael Chen',
      date: '2023-12-25',
      category: 'Micro SAAS',
      readTime: '4 min read',
      image: '/api/placeholder/400/250'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Cloud Computing',
    '5G Technology',
    'Digital Transformation',
    'Cybersecurity',
    'Micro SAAS'
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, 5G technology, and digital transformation from Zion Tech Group experts." />
        <meta name="keywords" content="blog, AI insights, cloud computing, 5G technology, digital transformation, tech news" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Blog
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Insights, trends, and expert advice on AI, cloud computing, 5G technology, 
                and digital transformation from our team of experts.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    index === 0
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Tag className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-purple-400 font-semibold">{blogPosts[0].category}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center text-gray-400 mb-6">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{blogPosts[0].author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Link 
                    to={`/blog/${blogPosts[0].title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl h-64 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Featured Article</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Latest Articles
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Stay updated with our latest insights and expert advice
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <article key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 h-48 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Article Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Tag className="w-4 h-4 text-purple-400 mr-2" />
                      <span className="text-purple-400 font-semibold text-sm">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Subscribe to our newsletter for the latest insights and updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let our experts help you implement the solutions discussed in our blog
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Get Consultation
              </Link>
              <Link 
                to="/about" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
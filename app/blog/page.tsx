import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CalendarIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business: Trends to Watch in 2024',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Sarah Johnson',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Cloud Security Best Practices for Enterprise',
      excerpt: 'Learn essential security measures to protect your cloud infrastructure and sensitive data.',
      author: 'Mike Chen',
      date: 'December 10, 2024',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/400'
    },
    {
      title: '5G Technology: Transforming Industries',
      excerpt: 'Discover how 5G is revolutionizing various industries and creating new opportunities.',
      author: 'Alex Rodriguez',
      date: 'December 5, 2024',
      readTime: '6 min read',
      category: '5G & Connectivity',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Digital Transformation: A Complete Guide',
      excerpt: 'Everything you need to know about digital transformation and how to implement it successfully.',
      author: 'Emily Davis',
      date: 'November 28, 2024',
      readTime: '8 min read',
      category: 'Digital Transformation',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'AI-Powered Analytics: Making Data Work for You',
      excerpt: 'How artificial intelligence is revolutionizing data analytics and business intelligence.',
      author: 'David Kim',
      date: 'November 20, 2024',
      readTime: '4 min read',
      category: 'Data Analytics',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Cybersecurity in the Age of Remote Work',
      excerpt: 'Essential security considerations for protecting remote teams and distributed organizations.',
      author: 'Lisa Wang',
      date: 'November 15, 2024',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/400'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Cybersecurity',
    '5G & Connectivity',
    'Digital Transformation',
    'Data Analytics',
    'Cloud Computing'
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends from our expert team." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tech
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Insights
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead of the curve with expert insights on AI, cybersecurity, cloud computing, 
                and the latest technology trends shaping the future of business.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    index === 0
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-6xl text-blue-400">📝</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-400">{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <UserIcon className="h-4 w-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        {post.date}
                      </div>
                    </div>

                    <Link
                      to="#"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
                    >
                      Read More
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-white/5">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest tech insights and industry updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Expert Advice?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team of experts is ready to help you navigate the complex world of technology.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Expert Consultation
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
import React from 'react';
import { ArrowRight, Calendar, User, Clock, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: Trends and Predictions for 2024',
      excerpt: 'Explore the latest trends in enterprise AI adoption and how businesses are leveraging artificial intelligence to drive innovation and growth.',
      content: 'Artificial intelligence is rapidly transforming the enterprise landscape, with companies across industries adopting AI solutions to streamline operations, enhance customer experiences, and drive innovation. In 2024, we expect to see significant advancements in AI technology, including more sophisticated natural language processing, improved computer vision capabilities, and enhanced machine learning algorithms that can process and analyze vast amounts of data in real-time.',
      author: 'Zion Tech Group',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      tags: ['AI', 'Enterprise', 'Technology', 'Innovation'],
      image: '/api/placeholder/800/400'
    },
    {
      id: 2,
      title: '5G Implementation: Revolutionizing Business Connectivity',
      excerpt: 'Discover how 5G technology is transforming business operations and enabling new possibilities for remote work, IoT, and real-time applications.',
      content: '5G technology represents a quantum leap in wireless connectivity, offering unprecedented speed, low latency, and massive device connectivity. For businesses, this means the ability to support more connected devices, enable real-time applications, and create new opportunities for innovation. From smart manufacturing to autonomous vehicles, 5G is paving the way for a more connected and efficient future.',
      author: 'Zion Tech Group',
      date: '2024-01-10',
      readTime: '7 min read',
      category: '5G & Connectivity',
      tags: ['5G', 'Connectivity', 'IoT', 'Business'],
      image: '/api/placeholder/800/400'
    },
    {
      id: 3,
      title: 'Cloud Security Best Practices for Modern Businesses',
      excerpt: 'Learn essential cloud security strategies to protect your business data and ensure compliance with industry regulations.',
      content: 'As businesses increasingly migrate to cloud-based solutions, ensuring robust security measures becomes paramount. This comprehensive guide covers essential cloud security best practices, including data encryption, access management, regular security audits, and compliance with industry standards. Implementing these strategies will help protect your business from cyber threats and ensure data integrity.',
      author: 'Zion Tech Group',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Security',
      tags: ['Cloud Security', 'Data Protection', 'Compliance', 'Cybersecurity'],
      image: '/api/placeholder/800/400'
    },
    {
      id: 4,
      title: 'Digital Transformation: A Complete Guide for Small Businesses',
      excerpt: 'A step-by-step guide to digital transformation for small businesses, covering technology adoption, process optimization, and change management.',
      content: 'Digital transformation is no longer optional for small businesses looking to remain competitive in today\'s digital economy. This guide provides a comprehensive roadmap for small business owners to navigate the digital transformation journey, from identifying opportunities for improvement to implementing new technologies and training staff. Learn how to leverage digital tools to streamline operations, improve customer experiences, and drive growth.',
      author: 'Zion Tech Group',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Digital Transformation',
      tags: ['Digital Transformation', 'Small Business', 'Technology', 'Growth'],
      image: '/api/placeholder/800/400'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and digital transformation from Zion Tech Group's expert team." />
        <meta name="keywords" content="technology blog, AI insights, digital transformation, 5G, cloud security, business technology" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Insights & 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with our expert insights on AI, technology, and digital transformation.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="flex items-center gap-1 text-xs text-gray-400">
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-semibold"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
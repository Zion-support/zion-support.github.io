'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Explore how artificial intelligence is transforming modern business operations and creating new opportunities.',
      author: 'John Doe',
      date: '2024-01-15',
      category: 'AI & Machine Learning'
    },
    {
      id: 2,
      title: 'Cloud Security Best Practices',
      excerpt: 'Learn essential security measures to protect your cloud infrastructure and data from cyber threats.',
      author: 'Jane Smith',
      date: '2024-01-10',
      category: 'Cybersecurity'
    },
    {
      id: 3,
      title: 'Digital Transformation Strategies',
      excerpt: 'Discover how to successfully navigate digital transformation and modernize your business processes.',
      author: 'Mike Johnson',
      date: '2024-01-05',
      category: 'Digital Transformation'
    },
    {
      id: 4,
      title: 'The Rise of Edge Computing',
      excerpt: 'Understanding how edge computing is revolutionizing data processing and improving performance.',
      author: 'Sarah Wilson',
      date: '2024-01-01',
      category: 'Technology'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog | Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Read our latest insights on AI, cloud computing, cybersecurity, and digital transformation. Stay updated with technology trends and best practices." />
        <meta name="keywords" content="blog, AI insights, cloud computing, cybersecurity, digital transformation, technology trends" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Blog
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest insights on AI, cloud computing, cybersecurity, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <button className="flex items-center text-cyan-600 hover:text-cyan-700 font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest insights and updates on technology trends.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-r-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogPage;
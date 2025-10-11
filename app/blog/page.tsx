import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends shaping enterprise technology and how businesses can leverage these innovations for competitive advantage.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Hype vs Reality',
      excerpt: 'A deep dive into quantum computing capabilities, current limitations, and practical applications for businesses today.',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Quantum Computing',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Understanding how AI is both creating new security challenges and providing innovative solutions to protect your business.',
      author: 'Alex Thompson',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Cybersecurity',
      featured: false
    },
    {
      id: 4,
      title: 'Building Scalable Cloud Infrastructure with AI',
      excerpt: 'Learn how to design and implement cloud solutions that can scale with your business using AI-powered optimization.',
      author: 'Jennifer Liu',
      date: '2024-01-01',
      readTime: '6 min read',
      category: 'Cloud Computing',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, quantum computing, cybersecurity, cloud computing, enterprise technology" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, quantum computing, cybersecurity, and the latest technology trends.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
          {blogPosts.filter(post => post.featured).map((post) => (
            <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">{post.title}</h3>
              <p className="text-gray-300 text-lg mb-6">{post.excerpt}</p>
              
              <div className="flex items-center space-x-6 text-gray-400 mb-6">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Read More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest technology insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
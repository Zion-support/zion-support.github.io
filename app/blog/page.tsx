'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: Trends and Predictions for 2024',
      excerpt: 'Explore the latest trends in enterprise AI adoption and what to expect in the coming year.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '/images/blog/ai-enterprise-trends.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Modern Businesses',
      excerpt: 'Essential security measures every business should implement to protect their digital assets.',
      author: 'James Wilson',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/images/blog/cybersecurity-best-practices.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies: A Complete Guide',
      excerpt: 'Step-by-step guide to successfully migrating your infrastructure to the cloud.',
      author: 'Michael Chen',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Cloud Computing',
      image: '/images/blog/cloud-migration-guide.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'How to leverage data analytics to drive business decisions and growth.',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-01',
      readTime: '7 min read',
      category: 'Data Analytics',
      image: '/images/blog/data-analytics-insights.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'The Rise of Quantum Computing in Business Applications',
      excerpt: 'Understanding quantum computing and its potential impact on business operations.',
      author: 'Dr. Sarah Johnson',
      date: '2023-12-28',
      readTime: '9 min read',
      category: 'Quantum Computing',
      image: '/images/blog/quantum-computing-business.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Automation: Streamlining Business Processes with AI',
      excerpt: 'How AI-powered automation can transform your business operations and increase efficiency.',
      author: 'Michael Chen',
      date: '2023-12-25',
      readTime: '5 min read',
      category: 'Automation',
      image: '/images/blog/ai-automation-business.jpg',
      featured: false
    }
  ];

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud Computing',
    'Data Analytics',
    'Quantum Computing',
    'Automation'
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, cybersecurity tips, cloud computing, data analytics, quantum computing, automation" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Tech <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Insights</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Stay ahead of the curve with expert insights on AI, cybersecurity, cloud computing, 
                and the latest technology trends shaping the future of business.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-gray-400 mb-6">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center p-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-gray-300 hover:bg-cyan-500/10 hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 h-48 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg font-bold">
                        {post.category.charAt(0)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <Tag className="w-4 h-4 text-cyan-400 mr-2" />
                      <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest insights and updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Subscribe
                </button>
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
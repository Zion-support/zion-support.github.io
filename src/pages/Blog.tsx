
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, ArrowRight, Search, Filter } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest developments in artificial intelligence and how they\'re reshaping enterprise technology landscapes.',
      author: 'Kleber Santos',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Enterprise', 'Trends', '2024'],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Hype vs. Reality',
      excerpt: 'A comprehensive look at where quantum computing stands today and what businesses can realistically expect.',
      author: 'AI Research Team',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Quantum Technology',
      tags: ['Quantum Computing', 'Technology', 'Innovation'],
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'How artificial intelligence is both creating new security challenges and providing innovative defense mechanisms.',
      author: 'Security Team',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Cybersecurity',
      tags: ['Cybersecurity', 'AI', 'Security', 'Threats'],
      featured: false
    },
    {
      id: 4,
      title: 'Building Autonomous Business Operations: A Practical Guide',
      excerpt: 'Step-by-step approach to implementing autonomous systems that can transform your business operations.',
      author: 'Operations Team',
      date: '2023-12-28',
      readTime: '15 min read',
      category: 'Business Automation',
      tags: ['Automation', 'Business', 'Operations', 'AI'],
      featured: false
    },
    {
      id: 5,
      title: 'Cloud-Native Development: Best Practices for 2024',
      excerpt: 'Essential strategies and tools for building scalable, resilient applications in the cloud.',
      author: 'Engineering Team',
      date: '2023-12-20',
      readTime: '11 min read',
      category: 'Cloud & DevOps',
      tags: ['Cloud', 'DevOps', 'Development', 'Best Practices'],
      featured: false
    },
    {
      id: 6,
      title: 'Data Analytics: Turning Information into Actionable Insights',
      excerpt: 'How modern analytics platforms are helping businesses make data-driven decisions faster than ever.',
      author: 'Data Team',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'Data Analytics',
      tags: ['Analytics', 'Data', 'Business Intelligence', 'Insights'],
      featured: false
    }
  ];

  const categories = [
    'All',
    'AI & Machine Learning',
    'Quantum Technology',
    'Cybersecurity',
    'Business Automation',
    'Cloud & DevOps',
    'Data Analytics'
  ];

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-blue/20 border border-zion-blue/30 text-zion-cyan mb-6">
              <Tag className="w-4 h-4 mr-2" />
              Insights & Analysis
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Latest Insights on
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {' '}Technology & Innovation
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert analysis, industry trends, and deep dives into 
              the technologies that are shaping the future of business.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/50 border border-zion-blue/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 transition-all duration-300"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-zion-cyan text-black'
                      : 'bg-zion-slate-dark/30 border border-zion-blue/30 text-zion-slate-light hover:border-zion-cyan/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured Article</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-zion-cyan text-black text-sm font-medium rounded-full">
                  Featured
                </span>
                <span className="px-3 py-1 bg-zion-blue/20 border border-zion-blue/30 text-zion-cyan text-sm rounded-full">
                  {featuredPost.category}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>
              <p className="text-xl text-zion-slate-light mb-6">{featuredPost.excerpt}</p>
              
              <div className="flex flex-wrap items-center gap-6 text-zion-slate-light mb-6">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-zion-slate-dark/30 border border-zion-blue/20 text-zion-slate-light text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Read Full Article
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </button>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Discover insights, tutorials, and thought leadership from our technology experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-zion-blue/20 border border-zion-blue/30 text-zion-cyan text-xs rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-zion-slate-light mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-zion-slate-light text-sm mb-4">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-zion-slate-dark/30 border border-zion-blue/20 text-zion-slate-light text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full px-4 py-2 border border-zion-blue text-zion-cyan font-medium rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get the latest insights delivered to your inbox. No spam, just valuable content.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-zion-slate-dark/50 border border-zion-blue/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;


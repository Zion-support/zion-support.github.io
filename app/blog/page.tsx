'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Enterprise: 2025 Predictions',
      excerpt: 'Explore the latest trends and predictions for AI adoption in enterprise environments, including emerging technologies and implementation strategies.',
      author: 'Kleber J. Santos',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '🧠',
      slug: 'future-ai-enterprise-2025'
    },
    {
      title: 'Quantum Computing: Breaking Through Traditional Barriers',
      excerpt: 'Discover how quantum computing is revolutionizing data processing and what it means for businesses looking to stay ahead of the curve.',
      author: 'AI Research Team',
      date: 'January 12, 2025',
      readTime: '12 min read',
      category: 'Quantum Computing',
      image: '⚛️',
      slug: 'quantum-computing-breakthrough'
    },
    {
      title: 'Micro SAAS: The New Era of Business Applications',
      excerpt: 'Learn how Micro SAAS applications are changing the way businesses approach software solutions and digital transformation.',
      author: 'Product Team',
      date: 'January 10, 2025',
      readTime: '6 min read',
      category: 'Technology Trends',
      image: '⚡',
      slug: 'micro-saas-new-era'
    },
    {
      title: 'Cybersecurity in the Age of AI: Best Practices',
      excerpt: 'Essential cybersecurity strategies for businesses leveraging AI technologies, including threat detection and prevention methods.',
      author: 'Security Team',
      date: 'January 8, 2025',
      readTime: '10 min read',
      category: 'Cybersecurity',
      image: '🔒',
      slug: 'cybersecurity-ai-best-practices'
    },
    {
      title: 'Digital Transformation: A Complete Guide for 2025',
      excerpt: 'Comprehensive guide to digital transformation strategies, including technology selection, implementation, and change management.',
      author: 'Consulting Team',
      date: 'January 5, 2025',
      readTime: '15 min read',
      category: 'Digital Transformation',
      image: '🚀',
      slug: 'digital-transformation-guide-2025'
    },
    {
      title: 'The Rise of Autonomous Systems in Business',
      excerpt: 'How autonomous systems are reshaping industries and what businesses need to know about implementation and integration.',
      author: 'Innovation Team',
      date: 'January 3, 2025',
      readTime: '9 min read',
      category: 'Autonomous Systems',
      image: '🤖',
      slug: 'autonomous-systems-business'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Quantum Computing',
    'Cybersecurity',
    'Digital Transformation',
    'Technology Trends',
    'Autonomous Systems',
    'IT Infrastructure'
  ];

  return (
    <>
      <SEOOptimizer
        title="Blog - AI, Technology & Innovation Insights | Zion Tech Group"
        description="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and digital transformation from our expert team at Zion Tech Group."
        keywords={['AI blog', 'technology insights', 'quantum computing', 'cybersecurity', 'digital transformation', 'tech trends']}
        canonicalUrl="https://ziontechgroup.com/blog"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Insights, trends, and expert analysis on AI, quantum computing, cybersecurity, 
                  and the technologies shaping the future of business.
                </p>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="py-8 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      index === 0
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Post */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="cyber-card p-8 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm">AI & Machine Learning</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      The Future of AI in Enterprise: 2025 Predictions
                    </h2>
                    <p className="text-lg text-gray-300 mb-6">
                      Explore the latest trends and predictions for AI adoption in enterprise environments, 
                      including emerging technologies and implementation strategies that will shape the future of business.
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                      <span>By Kleber J. Santos</span>
                      <span>January 15, 2025</span>
                      <span>8 min read</span>
                    </div>
                    <a
                      href="/blog/future-ai-enterprise-2025"
                      className="cyber-button inline-flex items-center"
                    >
                      Read Full Article
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className="text-8xl text-center">🧠</div>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Latest Articles</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Stay informed with our latest insights on technology trends, AI developments, and business innovation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(1).map((post, index) => (
                  <article key={index} className="cyber-card p-8 group hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-4">{post.image}</div>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <div>{post.author}</div>
                        <div>{post.date}</div>
                      </div>
                      <a
                        href={`/blog/${post.slug}`}
                        className="text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="cyber-card p-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Stay Updated
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Get the latest insights on AI, technology trends, and business innovation delivered to your inbox.
                </p>
                
                <div className="max-w-md mx-auto">
                  <div className="flex space-x-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                    <button className="cyber-button px-6 py-3">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    No spam, unsubscribe at any time. We respect your privacy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI and technology solutions can drive your success. 
                Get a free consultation and discover the possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
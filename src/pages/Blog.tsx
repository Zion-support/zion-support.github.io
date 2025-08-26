
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2025 and Beyond",
      excerpt: "Explore how artificial intelligence is reshaping business operations and what to expect in the coming years.",
      category: "AI & Technology",
      date: "January 15, 2025",
      readTime: "5 min read",
      image: "🤖",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Trends: Protecting Your Digital Assets",
      excerpt: "Discover the latest cybersecurity threats and best practices to safeguard your business in an increasingly digital world.",
      category: "Cybersecurity",
      date: "January 12, 2025",
      readTime: "4 min read",
      image: "🔒"
    },
    {
      id: 3,
      title: "Cloud Migration Strategies for Enterprise Success",
      excerpt: "Learn proven strategies for migrating your business to the cloud while minimizing risks and maximizing benefits.",
      category: "Cloud Computing",
      date: "January 10, 2025",
      readTime: "6 min read",
      image: "☁️"
    },
    {
      id: 4,
      title: "Quantum Computing: The Next Frontier in Technology",
      excerpt: "Understand how quantum computing is revolutionizing industries and what it means for the future of technology.",
      category: "Emerging Tech",
      date: "January 8, 2025",
      readTime: "7 min read",
      image: "⚛️"
    },
    {
      id: 5,
      title: "DevOps Best Practices for Modern Development Teams",
      excerpt: "Implement effective DevOps practices to streamline your development process and improve team collaboration.",
      category: "DevOps",
      date: "January 5, 2025",
      readTime: "5 min read",
      image: "⚡"
    },
    {
      id: 6,
      title: "Blockchain Applications Beyond Cryptocurrency",
      excerpt: "Explore innovative blockchain use cases in supply chain, healthcare, and other industries.",
      category: "Blockchain",
      date: "January 3, 2025",
      readTime: "6 min read",
      image: "🔗"
    }
  ];

  const categories = [
    "All",
    "AI & Technology",
    "Cybersecurity",
    "Cloud Computing",
    "Emerging Tech",
    "DevOps",
    "Blockchain"
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & Updates</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, cybersecurity updates, and industry news from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity news, cloud computing, emerging technology, Zion Tech Group blog" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Latest technology insights and updates from our experts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest technology trends, AI insights, and industry news 
              from our team of experts and thought leaders.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <div className="text-6xl mb-4">{post.image}</div>
                    <div className="inline-block bg-blue-500/20 text-blue-400 text-sm px-3 py-1 rounded-full mb-4">
                      {post.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{post.title}</h3>
                    <p className="text-gray-300 mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-400 mb-6">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Read Full Article
                    </Link>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-8 text-center">
                    <div className="text-8xl mb-4">{post.image}</div>
                    <p className="text-blue-400 font-medium">Featured Content</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Browse by Category</h2>
              <p className="text-xl text-gray-300">Find content that matters to you</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Latest Articles</h2>
              <p className="text-xl text-gray-300">Discover insights and trends in technology</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article
                  key={post.id}
                  className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="p-6">
                    <div className="text-4xl mb-4 text-center">{post.image}</div>
                    <div className="inline-block bg-blue-500/20 text-blue-400 text-sm px-3 py-1 rounded-full mb-4">
                      {post.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Never Miss an Update
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest technology insights, 
              AI trends, and industry updates delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our technology solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;

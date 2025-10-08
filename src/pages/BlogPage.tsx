import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest trends in enterprise AI adoption and what to expect in 2024.',
      author: 'Kleber',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI Trends',
      image: '🤖'
    },
    {
      id: 2,
      title: 'How Quantum Computing is Revolutionizing Data Processing',
      excerpt: 'Discover how quantum computing is changing the landscape of data processing and analysis.',
      author: 'Sarah Chen',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Quantum Computing',
      image: '⚛️'
    },
    {
      id: 3,
      title: 'AI Automation: Reducing Costs by 70% in Manufacturing',
      excerpt: 'Learn how our AI automation solutions helped a manufacturing client reduce operational costs.',
      author: 'Michael Rodriguez',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Case Study',
      image: '⚙️'
    },
    {
      id: 4,
      title: 'Machine Learning in Healthcare: Improving Patient Outcomes',
      excerpt: 'See how AI is transforming healthcare through improved diagnostics and treatment planning.',
      author: 'Dr. Emily Watson',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Healthcare AI',
      image: '🏥'
    },
    {
      id: 5,
      title: 'Digital Transformation: A Complete Guide for Enterprises',
      excerpt: 'Everything you need to know about digital transformation and how to get started.',
      author: 'Kleber',
      date: '2023-12-28',
      readTime: '10 min read',
      category: 'Digital Transformation',
      image: '🔄'
    },
    {
      id: 6,
      title: 'AI in Financial Services: Risk Management and Fraud Detection',
      excerpt: 'How AI is revolutionizing financial services through advanced risk management.',
      author: 'Sarah Chen',
      date: '2023-12-20',
      readTime: '6 min read',
      category: 'Fintech AI',
      image: '💰'
    }
  ];

  const categories = [
    'All',
    'AI Trends',
    'Quantum Computing',
    'Case Study',
    'Healthcare AI',
    'Digital Transformation',
    'Fintech AI'
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on AI, quantum computing, digital transformation, and enterprise technology from Zion Tech Group experts."
        />
        <meta
          name="keywords"
          content="AI blog, quantum computing blog, digital transformation, enterprise technology, machine learning insights"
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Insights, trends, and expert analysis on AI and technology
              </p>
            </div>
          </section>

          {/* Blog Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              {/* Categories Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      category === 'All'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Featured Post */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="text-6xl mb-4">{blogPosts[0].image}</div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                          {blogPosts[0].category}
                        </span>
                        <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {blogPosts[0].title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        {blogPosts[0].excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">
                              {blogPosts[0].author.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{blogPosts[0].author}</div>
                            <div className="text-sm text-gray-500">{blogPosts[0].date}</div>
                          </div>
                        </div>
                        <a
                          href={`/blog/${blogPosts[0].id}`}
                          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="hidden lg:block">
                      <div className="bg-white rounded-xl p-8 shadow-lg">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Subscribe to our newsletter</h4>
                        <p className="text-gray-600 mb-6">
                          Get the latest AI insights and industry updates delivered to your inbox.
                        </p>
                        <div className="space-y-4">
                          <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          />
                          <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.slice(1).map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div className="text-4xl mb-4">{post.image}</div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">
                              {post.author.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm">{post.author}</div>
                            <div className="text-xs text-gray-500">{post.date}</div>
                          </div>
                        </div>
                        <a
                          href={`/blog/${post.id}`}
                          className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                        >
                          Read More →
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-indigo-600 text-white rounded-2xl p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  Get the latest AI insights, case studies, and industry updates delivered to your inbox.
                </p>
                <div className="max-w-md mx-auto">
                  <div className="flex space-x-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                    />
                    <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-indigo-200 text-sm mt-4">
                    No spam, unsubscribe at any time.
                  </p>
                </div>
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
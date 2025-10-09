import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2025 Predictions',
      excerpt: 'Explore how artificial intelligence will transform enterprise operations in 2025, from automation to decision-making.',
      date: 'January 15, 2025',
      category: 'AI & Machine Learning',
      readTime: '5 min read',
      image: '🤖'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Through Traditional Barriers',
      excerpt: 'Discover how quantum computing is revolutionizing problem-solving and what it means for your business.',
      date: 'January 10, 2025',
      category: 'Quantum Computing',
      readTime: '7 min read',
      image: '⚛️'
    },
    {
      id: 3,
      title: 'Digital Transformation: A Complete Guide for 2025',
      excerpt: 'Learn the essential steps to successfully transform your business digitally and stay competitive.',
      date: 'January 5, 2025',
      category: 'Digital Transformation',
      readTime: '6 min read',
      image: '🔄'
    },
    {
      id: 4,
      title: 'Cybersecurity Trends: Protecting Your Business in 2025',
      excerpt: 'Stay ahead of cyber threats with the latest security trends and best practices for enterprise protection.',
      date: 'December 28, 2024',
      category: 'Cybersecurity',
      readTime: '4 min read',
      image: '🔒'
    },
    {
      id: 5,
      title: 'Cloud Migration Strategies: Maximizing ROI',
      excerpt: 'Optimize your cloud migration with proven strategies that deliver maximum return on investment.',
      date: 'December 20, 2024',
      category: 'Cloud Computing',
      readTime: '8 min read',
      image: '☁️'
    },
    {
      id: 6,
      title: 'Business Intelligence: Data-Driven Decision Making',
      excerpt: 'Transform your data into actionable insights with advanced business intelligence solutions.',
      date: 'December 15, 2024',
      category: 'Business Intelligence',
      readTime: '5 min read',
      image: '📊'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI & Technology Blog | Zion Tech Group</title>
        <meta
          name="description"
          content="Latest insights on AI, enterprise automation, and digital transformation from Zion Tech Group experts."
        />
        <meta
          name="keywords"
          content="AI blog, enterprise technology, automation insights, digital transformation"
        />
        <meta property="og:title" content="AI & Technology Blog | Zion Tech Group" />
        <meta
          property="og:description"
          content="Latest insights on AI, enterprise automation, and digital transformation from Zion Tech Group experts."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">AI & Technology Blog</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Latest insights on AI, enterprise automation, and digital transformation from our experts
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-8">
                    <div className="text-4xl mb-4">{post.image}</div>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-semibold mr-3">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <button className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on AI, technology, and digital transformation.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
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

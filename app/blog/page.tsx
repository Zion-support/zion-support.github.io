'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '5 min read'
    },
    {
      title: 'Cloud Migration Best Practices',
      excerpt: 'Essential strategies for successful cloud migration and optimization.',
      author: 'Zion Tech Team',
      date: '2024-01-10',
      readTime: '7 min read'
    },
    {
      title: 'Cybersecurity Trends 2024',
      excerpt: 'Latest trends and threats in cybersecurity and how to protect your business.',
      author: 'Zion Tech Team',
      date: '2024-01-05',
      readTime: '6 min read'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI and Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business transformation from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, business transformation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Blog
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Insights, trends, and expert perspectives on AI, technology, and business transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="cyber-card p-6">
                  <h2 className="text-xl font-semibold text-white mb-3">{post.title}</h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
'use client';

import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are reshaping industries and discover how businesses can leverage these technologies for competitive advantage.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Remote Work Environments',
      excerpt: 'Learn essential security measures to protect your remote workforce and maintain data integrity in distributed work environments.',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/300',
      featured: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and technology trends from Zion Tech Group experts." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Technology
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, cybersecurity, cloud computing, and emerging technologies.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;

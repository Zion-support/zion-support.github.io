'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { User, Calendar } from 'lucide-react';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      excerpt: 'Essential strategies for successful cloud migration and optimization.',
      author: 'Zion Tech Team',
      date: '2024-01-10',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Cybersecurity Trends 2024',
      excerpt: 'Latest cybersecurity trends and how to protect your business.',
      author: 'Zion Tech Team',
      date: '2024-01-05',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    }
  ];

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
  );
  );
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, IT solutions, and technology trends from Zion Tech Group." />
        <meta name="keywords" content="tech blog, AI insights, IT solutions, technology trends, Zion Tech Group" />
      </Helmet>;
      {/* Hero Section */};
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Tech Blog
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest insights on AI, IT solutions, and technology trends.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

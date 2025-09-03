import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogIndex: NextPage = () => {
  const blogPosts = [
    {
      title: '5G Technology and Its Impact on IoT',
      excerpt: 'Exploring how 5G networks are revolutionizing IoT applications and enabling new possibilities for connected devices.',
      date: '2024-01-15',
      author: 'Tech Team',
      href: '/blog/5g-technology-and-its-impact-on-iot-chat',
      category: 'Technology'
    },
    {
      title: 'AI-Powered Marketplaces: The Future of Digital Commerce',
      excerpt: 'How artificial intelligence is transforming e-commerce platforms and creating more personalized shopping experiences.',
      date: '2024-01-10',
      author: 'AI Team',
      href: '/blog/ai-powered-marketplaces-the-future-of-digital-commerce-chat',
      category: 'AI'
    },
    {
      title: 'API-First Development: Building Scalable Systems',
      excerpt: 'Best practices for designing and implementing API-first architectures that can scale with your business.',
      date: '2024-01-05',
      author: 'Engineering Team',
      href: '/blog/api-first-development-building-scalable-systems-chat',
      category: 'Development'
    },
    {
      title: 'Augmented Reality in Enterprise Applications',
      excerpt: 'Real-world applications of AR technology in business environments and how it\'s changing the way we work.',
      date: '2024-01-01',
      author: 'Innovation Team',
      href: '/blog/augmented-reality-in-enterprise-applications-chat',
      category: 'Innovation'
    },
    {
      title: 'Blockchain Technology in Modern Business Solutions',
      excerpt: 'Understanding how blockchain is being integrated into business processes and the benefits it brings.',
      date: '2023-12-28',
      author: 'Blockchain Team',
      href: '/blog/blockchain-technology-in-modern-business-solutions-chat',
      category: 'Blockchain'
    },
    {
      title: 'Cloud-Native Architecture Best Practices',
      excerpt: 'Essential principles and practices for building applications that are designed for the cloud from the ground up.',
      date: '2023-12-25',
      author: 'Cloud Team',
      href: '/blog/cloud-native-architecture-best-practices-chat',
      category: 'Cloud'
    }
  ];

  const categories = ['All', 'Technology', 'AI', 'Development', 'Innovation', 'Blockchain', 'Cloud'];

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights, trends, and innovations in technology from Zion Tech Group's expert team." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Blog</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Stay updated with the latest insights, trends, and innovations in technology
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                    <User className="h-4 w-4 ml-4" />
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <Link
                      href={post.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogIndex;
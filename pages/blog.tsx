import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2025',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate, from automation to predictive analytics.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      category: 'AI & Machine Learning',
      readTime: '8 min read',
      image: '/blog/ai-future-business.jpg',
      slug: 'future-ai-business-2025'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Next Frontier',
      excerpt: 'Understanding quantum computing fundamentals and how it will revolutionize industries from finance to healthcare.',
      author: 'Michael Rodriguez',
      date: '2025-01-12',
      category: 'Quantum Computing',
      readTime: '12 min read',
      image: '/blog/quantum-computing-frontier.jpg',
      slug: 'quantum-computing-next-frontier'
    },
    {
      id: 3,
      title: 'Micro SaaS Success Stories: Building Profitable Niche Applications',
      excerpt: 'Learn from successful micro SaaS entrepreneurs and discover strategies for building profitable niche applications.',
      author: 'Emily Watson',
      date: '2025-01-10',
      category: 'Micro SaaS',
      readTime: '6 min read',
      image: '/blog/micro-saas-success.jpg',
      slug: 'micro-saas-success-stories'
    },
    {
      id: 4,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Comprehensive guide to migrating your infrastructure to the cloud with minimal downtime and maximum efficiency.',
      author: 'David Kim',
      date: '2025-01-08',
      category: 'Cloud Computing',
      readTime: '10 min read',
      image: '/blog/cloud-migration-guide.jpg',
      slug: 'cloud-migration-best-practices'
    },
    {
      id: 5,
      title: 'Blockchain Infrastructure: Building the Foundation for Web3',
      excerpt: 'Understanding blockchain infrastructure requirements and how to build scalable, secure decentralized applications.',
      author: 'Alex Thompson',
      date: '2025-01-05',
      category: 'Blockchain',
      readTime: '9 min read',
      image: '/blog/blockchain-infrastructure.jpg',
      slug: 'blockchain-infrastructure-web3'
    },
    {
      id: 6,
      title: 'Cybersecurity in the Age of AI: Protecting Your Digital Assets',
      excerpt: 'How AI is both enhancing cybersecurity capabilities and creating new attack vectors that businesses must prepare for.',
      author: 'Lisa Park',
      date: '2025-01-03',
      category: 'Cybersecurity',
      readTime: '7 min read',
      image: '/blog/ai-cybersecurity.jpg',
      slug: 'cybersecurity-age-ai'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Quantum Computing',
    'Micro SaaS',
    'Cloud Computing',
    'Blockchain',
    'Cybersecurity'
  ];

  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and innovations in technology from Zion Tech Group's expert team."
      keywords="technology blog, AI insights, quantum computing, micro SaaS, cloud computing, blockchain, cybersecurity"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Technology Insights & Innovation
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay ahead of the curve with expert insights, industry trends, and cutting-edge innovations 
            from our team of technology leaders.
          </motion.p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category}>
                        <button className="text-gray-600 hover:text-blue-600 transition-colors text-left w-full">
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
                  <p className="text-blue-100 mb-4">
                    Get the latest technology insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-4xl font-bold mb-2">{post.category.split(' ')[0]}</div>
                        <div className="text-sm opacity-80">Featured Image</div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <Tag className="w-3 h-3 mr-1" />
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      
                      <h2 className="text-xl font-semibold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-800">{post.author}</div>
                            <div className="flex items-center text-xs text-gray-500">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Load More Posts
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;
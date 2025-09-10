import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';

const blogPosts = [
  {
    id: 'ai-transformation-business',
    title: 'How AI is Transforming Business Operations in 2024',
    excerpt: 'Discover the latest AI technologies that are revolutionizing how businesses operate and compete in the digital age.',
    author: 'Zion Tech Team',
    date: '2024-01-15',
    category: 'AI & Technology',
    readTime: '5 min read',
    image: '/images/blog/ai-transformation.jpg',
    featured: true
  },
  {
    id: 'micro-saas-trends',
    title: 'The Rise of Micro SaaS: Small Solutions, Big Impact',
    excerpt: 'Explore how micro SaaS applications are changing the software landscape and creating new opportunities for businesses.',
    author: 'Sarah Johnson',
    date: '2024-01-10',
    category: 'Micro SaaS',
    readTime: '4 min read',
    image: '/images/blog/micro-saas.jpg'
  },
  {
    id: 'cybersecurity-best-practices',
    title: 'Essential Cybersecurity Best Practices for 2024',
    excerpt: 'Learn the critical security measures every business should implement to protect against evolving cyber threats.',
    author: 'Mike Chen',
    date: '2024-01-05',
    category: 'Cybersecurity',
    readTime: '6 min read',
    image: '/images/blog/cybersecurity.jpg'
  },
  {
    id: 'cloud-migration-guide',
    title: 'Complete Guide to Cloud Migration: Planning to Execution',
    excerpt: 'A comprehensive guide to successfully migrating your business infrastructure to the cloud.',
    author: 'Alex Rodriguez',
    date: '2024-01-01',
    category: 'Cloud Computing',
    readTime: '8 min read',
    image: '/images/blog/cloud-migration.jpg'
  },
  {
    id: 'data-analytics-insights',
    title: 'Turning Data into Business Insights: A Practical Approach',
    excerpt: 'Learn how to leverage data analytics to make informed business decisions and drive growth.',
    author: 'Emily Davis',
    date: '2023-12-28',
    category: 'Data Analytics',
    readTime: '7 min read',
    image: '/images/blog/data-analytics.jpg'
  },
  {
    id: 'digital-transformation-strategy',
    title: 'Building a Successful Digital Transformation Strategy',
    excerpt: 'Key considerations and steps for creating an effective digital transformation roadmap for your organization.',
    author: 'David Kim',
    date: '2023-12-20',
    category: 'Digital Transformation',
    readTime: '9 min read',
    image: '/images/blog/digital-transformation.jpg'
  }
];

const categories = [
  'All Posts',
  'AI & Technology',
  'Micro SaaS',
  'Cybersecurity',
  'Cloud Computing',
  'Data Analytics',
  'Digital Transformation'
];

export default function BlogPage() {
  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Latest insights, trends, and best practices in AI, technology, and digital transformation from Zion Tech Group experts."
      keywords="technology blog, AI insights, digital transformation, cybersecurity, cloud computing"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Technology Insights & Trends
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Stay ahead with the latest insights, best practices, and industry trends from our technology experts.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Categories Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={`px-6 py-2 rounded-full transition-colors ${
                      index === 0
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Post */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-6xl mb-4">🤖</div>
                        <p className="text-lg">AI Technology</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <Tag className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-blue-600 font-semibold">
                        {blogPosts[0].category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {blogPosts[0].title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-2" />
                        <span>{blogPosts[0].author}</span>
                        <Calendar className="w-4 h-4 ml-4 mr-2" />
                        <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                      </div>
                      <span className="text-sm text-gray-500">{blogPosts[0].readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${blogPosts[0].id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            </div>

            {/* Blog Grid */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(1).map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-4xl mb-2">📊</div>
                        <p className="text-sm">{post.category}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <Tag className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-blue-600 text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-2" />
                          <span>{post.author}</span>
                        </div>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <Link
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-6">
                Get the latest technology insights delivered to your inbox.
              </p>
              <div className="max-w-md mx-auto flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="px-6 py-3 bg-white text-blue-600 rounded-r-lg hover:bg-gray-100 transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
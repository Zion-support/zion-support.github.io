import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 'ai-trends-2024',
      title: 'AI Trends to Watch in 2024',
      excerpt: 'Explore the latest artificial intelligence trends that will shape the future of technology and business.',
      date: 'January 15, 2024',
      readTime: '5 min read',
      tags: ['AI', 'Technology', 'Trends'],
      author: 'Zion Tech Team'
    },
    {
      id: 'cloud-security-best-practices',
      title: 'Cloud Security Best Practices',
      excerpt: 'Learn essential security measures to protect your cloud infrastructure and data.',
      date: 'January 10, 2024',
      readTime: '7 min read',
      tags: ['Security', 'Cloud', 'Best Practices'],
      author: 'Security Team'
    },
    {
      id: 'micro-saas-development',
      title: 'Building Successful Micro SaaS Products',
      excerpt: 'A comprehensive guide to developing and launching micro SaaS applications.',
      date: 'January 5, 2024',
      readTime: '6 min read',
      tags: ['SaaS', 'Development', 'Business'],
      author: 'Product Team'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Insights, trends, and best practices in AI, cloud computing, cybersecurity, and technology solutions." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing, cybersecurity, SaaS development, digital transformation" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology Insights & Trends
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Stay updated with the latest insights, trends, and best practices in technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <Link
                          href={`/blog/${post.id}`}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex space-x-2">
                  <button className="px-3 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-2 bg-blue-600 text-white rounded-md">
                    1
                  </button>
                  <button className="px-3 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  <Link href="/blog?category=ai" className="block text-gray-600 hover:text-blue-600">
                    Artificial Intelligence
                  </Link>
                  <Link href="/blog?category=cloud" className="block text-gray-600 hover:text-blue-600">
                    Cloud Computing
                  </Link>
                  <Link href="/blog?category=security" className="block text-gray-600 hover:text-blue-600">
                    Cybersecurity
                  </Link>
                  <Link href="/blog?category=saas" className="block text-gray-600 hover:text-blue-600">
                    SaaS Development
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2"
                      >
                        {post.title}
                      </Link>
                      <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
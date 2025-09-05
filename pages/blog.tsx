import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Layout from '../components/Layout';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: Trends and Predictions for 2024",
    excerpt: "Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["AI", "Business", "Technology"],
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Micro SaaS: Building Scalable Solutions for Modern Businesses",
    excerpt: "Learn how micro SaaS applications are revolutionizing software delivery and what it takes to build successful solutions.",
    author: "Michael Chen",
    date: "2024-01-10",
    readTime: "7 min read",
    tags: ["SaaS", "Development", "Scalability"],
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for Small and Medium Businesses",
    excerpt: "Essential security measures every SMB should implement to protect their digital assets and customer data.",
    author: "Emily Rodriguez",
    date: "2024-01-05",
    readTime: "6 min read",
    tags: ["Security", "SMB", "Best Practices"],
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Cloud Migration Strategies: A Complete Guide",
    excerpt: "Step-by-step guide to successfully migrating your infrastructure to the cloud while minimizing risks and downtime.",
    author: "David Kim",
    date: "2023-12-28",
    readTime: "8 min read",
    tags: ["Cloud", "Migration", "Infrastructure"],
    image: "/api/placeholder/400/250"
  },
  {
    id: 5,
    title: "The Role of Data Analytics in Digital Transformation",
    excerpt: "How data analytics is driving digital transformation and helping businesses make data-driven decisions.",
    author: "Lisa Wang",
    date: "2023-12-20",
    readTime: "6 min read",
    tags: ["Analytics", "Digital Transformation", "Data"],
    image: "/api/placeholder/400/250"
  },
  {
    id: 6,
    title: "Building Resilient IT Infrastructure for Remote Work",
    excerpt: "Key strategies for creating robust IT infrastructure that supports remote work and ensures business continuity.",
    author: "Alex Thompson",
    date: "2023-12-15",
    readTime: "7 min read",
    tags: ["Infrastructure", "Remote Work", "Resilience"],
    image: "/api/placeholder/400/250"
  }
];

const categories = [
  { name: "AI & Machine Learning", count: 12 },
  { name: "Cloud Computing", count: 8 },
  { name: "Cybersecurity", count: 15 },
  { name: "Development", count: 20 },
  { name: "Business Strategy", count: 10 },
  { name: "Data Analytics", count: 6 }
];

export default function BlogPage() {
  return (
    <Layout title="Blog - Zion Tech Group">
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights, trends, and best practices in technology from our expert team." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing, cybersecurity, development, business strategy" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
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
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{post.readTime}</span>
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
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
                      3
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
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <span>{category.name}</span>
                          <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Newsletter</h3>
                  <p className="text-gray-600 mb-4">
                    Subscribe to get the latest technology insights delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
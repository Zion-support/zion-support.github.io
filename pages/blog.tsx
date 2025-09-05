import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';


const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: 2025 Trends",
    excerpt: "Explore the latest AI trends that are transforming businesses across industries.",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    category: "AI & Technology",
    readTime: "5 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 2,
    title: "Cloud Migration Best Practices",
    excerpt: "Learn how to successfully migrate your infrastructure to the cloud with minimal downtime.",
    author: "Michael Rodriguez",
    date: "2024-01-10",
    category: "Cloud Computing",
    readTime: "7 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 3,
    title: "Cybersecurity in the Age of AI",
    excerpt: "Understanding the evolving threat landscape and how AI can help protect your business.",
    author: "Alex Thompson",
    date: "2024-01-05",
    category: "Cybersecurity",
    readTime: "6 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 4,
    title: "Micro SaaS: Building Scalable Solutions",
    excerpt: "Discover how micro SaaS solutions can drive business growth and innovation.",
    author: "Jennifer Lee",
    date: "2024-01-01",
    category: "SaaS",
    readTime: "8 min read",
    image: "/api/placeholder/600/300"
  }
];

const categories = [
  "All Posts",
  "AI & Technology",
  "Cloud Computing",
  "Cybersecurity",
  "SaaS",
  "Digital Transformation"
];

export default function BlogPage() {
  return (
    <Layout
      title="Blog - Zion Tech Group"
      description="Latest insights on AI, technology, and business innovation from Zion Tech Group experts."
      keywords="blog, AI insights, technology news, business innovation, tech trends">
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights, trends, and technology news from Zion Tech Group experts." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Technology Insights & News
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Stay updated with the latest trends, insights, and innovations in technology
            </p>

          </div>
      </section>


      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Categories */}
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>

                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
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
                </motion.article>
              ))}
            </div>


            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Load More Posts
              </button>

            </div>
      </section>
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

              {/* Sidebar */}
              <div className="lg: col-span-1">
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
        </section>
      </div>
    </Layout>
  )
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
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
                </motion.article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Load More Posts
              </button>
            </div>
      </section>
    </div>
  );
}
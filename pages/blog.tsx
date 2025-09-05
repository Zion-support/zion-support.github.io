import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

<<<<<<< HEAD
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
=======
const blogPosts = [{
    id: 1,
    title: "The Future of AI in Business: Trends and Predictions for 2024",
    excerpt: "Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    "readTime": "5 min read",
    tags: ["AI", "Business", "Technology"],
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Micro SaaS: Building Scalable Solutions for Modern Businesses",
    excerpt: "Learn how micro SaaS applications are revolutionizing software delivery and what it takes to build successful solutions.",
    author: "Michael Chen",
    date: "2024-01-10",
    "readTime": "7 min read",
    tags: ["SaaS", "Development", "Scalability"],
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for Small and Medium Businesses",
    excerpt: "Essential security measures every SMB should implement to protect their digital assets and customer data.",
    author: "Emily Rodriguez",
    date: "2024-01-05",
    "readTime": "6 min read",
    tags: ["Security", "SMB", "Best Practices"],
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Cloud Migration Strategies: A Complete Guide",
    excerpt: "Step-by-step guide to successfully migrating your infrastructure to the cloud while minimizing risks and downtime.",
    author: "David Kim",
    date: "2023-12-28",
    "readTime": "8 min read",
    tags: ["Cloud", "Migration", "Infrastructure"],
    image: "/api/placeholder/400/250"
  },
  {
    id: 5,
    title: "The Role of Data Analytics in Digital Transformation",
    excerpt: "How data analytics is driving digital transformation and helping businesses make data-driven decisions.",
    author: "Sarah Johnson",
    date: "2023-12-20",
    "readTime": "6 min read",
    tags: ["Analytics", "Digital Transformation", "Data"],
    image: "/api/placeholder/400/250"
  },
  {
    id: 6,
    title: "Building Resilient IT Infrastructure for Remote Work",
    excerpt: "Key considerations for creating IT infrastructure that supports remote and hybrid work environments.",
    author: "Michael Chen",
    date: "2023-12-15",
    "readTime": "5 min read",
    tags: ["IT Infrastructure", "Remote Work", "Resilience"],
    image: "/api/placeholder/400/250"
  }
];

const categories = [{ name: "AI & Machine Learning", count: 12 },
  { name: "Cloud Computing", count: 8 },
  { name: "Cybersecurity", count: 6 },
  { name: "SaaS Development", count: 10 },
  { name: "Digital Transformation", count: 7 },
  { name: "IT Infrastructure", count: 5 }
>>>>>>> cursor/automate-test-improve-and-merge-code-7050
];

export default function BlogPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
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
=======
    <MainLayout 
      title="Blog - Zion Tech Group"
      description="Insights, trends, and best practices in AI, cloud computing, cybersecurity, and technology solutions."
      keywords="technology blog, AI insights, cloud computing, cybersecurity, SaaS development, digital transformation"
    >
      <div className="min-h-screen bg-gray-50">
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
>>>>>>> cursor/automate-test-improve-and-merge-code-7050
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-7050
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

<<<<<<< HEAD
            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Load More Posts
              </button>
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-7050
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
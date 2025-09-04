import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  ArrowRight,
  Clock,
  Eye
} from 'lucide-react';

const blogPosts = [
  {
    title: "The Future of AI in Enterprise Applications",
    excerpt: "Exploring how artificial intelligence is transforming business operations and creating new opportunities for growth.",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    views: "1.2k",
    category: "AI & Machine Learning",
    image: "/blog/ai-enterprise.jpg",
    slug: "future-ai-enterprise"
  },
  {
    title: "Cloud Migration Best Practices for 2024",
    excerpt: "A comprehensive guide to successfully migrating your infrastructure to the cloud while minimizing risks.",
    author: "Michael Chen",
    date: "2024-01-10",
    readTime: "8 min read",
    views: "950",
    category: "Cloud Computing",
    image: "/blog/cloud-migration.jpg",
    slug: "cloud-migration-best-practices"
  },
  {
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "Learn how to create high-performance web applications that can handle millions of users.",
    author: "Emily Rodriguez",
    date: "2024-01-05",
    readTime: "6 min read",
    views: "1.5k",
    category: "Web Development",
    image: "/blog/nextjs-scalable.jpg",
    slug: "scalable-web-apps-nextjs"
  },
  {
    title: "Cybersecurity Trends to Watch in 2024",
    excerpt: "Stay ahead of emerging threats with our analysis of the latest cybersecurity trends and recommendations.",
    author: "David Kim",
    date: "2024-01-01",
    readTime: "7 min read",
    views: "800",
    category: "Cybersecurity",
    image: "/blog/cybersecurity-trends.jpg",
    slug: "cybersecurity-trends-2024"
  },
  {
    title: "The Rise of Micro SaaS: Opportunities and Challenges",
    excerpt: "Understanding the micro SaaS business model and how to build successful niche software products.",
    author: "Sarah Johnson",
    date: "2023-12-28",
    readTime: "9 min read",
    views: "1.1k",
    category: "Business Strategy",
    image: "/blog/micro-saas.jpg",
    slug: "rise-micro-saas-opportunities"
  },
  {
    title: "Data Analytics: Turning Information into Insights",
    excerpt: "How modern businesses can leverage data analytics to make better decisions and drive growth.",
    author: "Michael Chen",
    date: "2023-12-20",
    readTime: "6 min read",
    views: "750",
    category: "Data Analytics",
    image: "/blog/data-analytics.jpg",
    slug: "data-analytics-insights"
  }
];

const categories = [
  "All Posts",
  "AI & Machine Learning",
  "Cloud Computing",
  "Web Development",
  "Cybersecurity",
  "Business Strategy",
  "Data Analytics"
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Insights, tutorials, and industry news from the Zion Tech Group team." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing, web development, cybersecurity" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Insights, tutorials, and industry news from our team of technology experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">
                    {post.title.charAt(0)}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, tutorials, and industry news.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
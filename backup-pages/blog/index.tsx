import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Blog: NextPage = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Enterprise Applications",
      excerpt: "Exploring how artificial intelligence is transforming business operations and creating new opportunities for innovation.",
      author: "Zion Tech Team",
      date: "December 15, 2024",
      category: "AI & Machine Learning",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      slug: "ai-enterprise-applications"
    },
    {
      title: "Cybersecurity Trends for 2024 and Beyond",
      excerpt: "Stay ahead of emerging threats with our analysis of the latest cybersecurity trends and best practices.",
      author: "Security Team",
      date: "December 12, 2024",
      category: "Cybersecurity",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      slug: "cybersecurity-trends-2024"
    },
    {
      title: "Cloud-Native Architecture Best Practices",
      excerpt: "Learn the essential principles and practices for building scalable, resilient cloud-native applications.",
      author: "Cloud Team",
      date: "December 10, 2024",
      category: "Cloud Computing",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      slug: "cloud-native-architecture"
    },
    {
      title: "Blockchain Technology in Modern Business Solutions",
      excerpt: "Discover how blockchain is revolutionizing industries beyond cryptocurrency and creating new business models.",
      author: "Blockchain Team",
      date: "December 8, 2024",
      category: "Blockchain",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      slug: "blockchain-business-solutions"
    },
    {
      title: "Data Analytics in Digital Transformation",
      excerpt: "How data-driven insights are powering successful digital transformation initiatives across industries.",
      author: "Analytics Team",
      date: "December 5, 2024",
      category: "Data Analytics",
      readTime: "4 min read",
      image: "/api/placeholder/400/250",
      slug: "data-analytics-transformation"
    },
    {
      title: "DevOps Automation Strategies for Modern Teams",
      excerpt: "Streamline your development workflow with proven DevOps automation strategies and tools.",
      author: "DevOps Team",
      date: "December 3, 2024",
      category: "DevOps",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      slug: "devops-automation-strategies"
    },
    {
      title: "The Rise of Edge Computing in IoT Applications",
      excerpt: "Exploring how edge computing is enabling real-time processing and reducing latency in IoT deployments.",
      author: "IoT Team",
      date: "November 30, 2024",
      category: "IoT",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      slug: "edge-computing-iot"
    },
    {
      title: "Machine Learning Applications in Enterprise Software",
      excerpt: "Real-world applications of machine learning that are transforming enterprise software and business processes.",
      author: "ML Team",
      date: "November 28, 2024",
      category: "AI & Machine Learning",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      slug: "ml-enterprise-applications"
    },
    {
      title: "Microservices Architecture: Benefits and Challenges",
      excerpt: "Understanding the advantages and potential pitfalls of microservices architecture for modern applications.",
      author: "Architecture Team",
      date: "November 25, 2024",
      category: "Software Architecture",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      slug: "microservices-architecture"
    }
  ];

  const categories = [
    "All",
    "AI & Machine Learning",
    "Cybersecurity",
    "Cloud Computing",
    "Blockchain",
    "Data Analytics",
    "DevOps",
    "IoT",
    "Software Architecture"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Insights, trends, and expert analysis on technology topics including AI, cybersecurity, cloud computing, blockchain, and more. Stay updated with the latest in tech." />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Technology Blog</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Insights, trends, and expert analysis on the latest technology developments 
            and their impact on business and society.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="bg-gray-200 h-64 md:h-full flex items-center justify-center">
                  <span className="text-gray-500">Featured Image</span>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Featured
                  </span>
                  <span className="text-gray-500 text-sm ml-4">5 min read</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The Future of AI in Enterprise Applications
                </h2>
                <p className="text-gray-600 mb-6">
                  Exploring how artificial intelligence is transforming business operations and creating new opportunities for innovation across industries.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      ZT
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Zion Tech Team</p>
                      <p className="text-sm text-gray-500">December 15, 2024</p>
                    </div>
                  </div>
                  <Link href="/blog/ai-enterprise-applications" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <div className="flex gap-2">
              {categories.slice(0, 5).map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Blog Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-2">
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog/archive" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest technology insights, trends, and expert analysis.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
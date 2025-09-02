import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import PageTransition from '../src/components/PageTransition';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore how artificial intelligence is transforming business operations and what to expect in the coming year.",
      author: "Zion Tech Team",
      date: "2024-01-15",
      category: "AI & Machine Learning",
      readTime: "5 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 2,
      title: "Cloud Migration Best Practices: A Complete Guide",
      excerpt: "Learn the essential steps and strategies for successfully migrating your business to the cloud.",
      author: "Zion Tech Team",
      date: "2024-01-10",
      category: "Cloud Solutions",
      readTime: "8 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "Building Scalable Micro SaaS Applications",
      excerpt: "Discover the key principles and technologies for creating successful micro SaaS products.",
      author: "Zion Tech Team",
      date: "2024-01-05",
      category: "Development",
      readTime: "6 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 4,
      title: "Cybersecurity in 2024: Protecting Your Digital Assets",
      excerpt: "Stay ahead of cyber threats with our comprehensive guide to modern security practices.",
      author: "Zion Tech Team",
      date: "2024-01-01",
      category: "Security",
      readTime: "7 min read",
      image: "/api/placeholder/600/300"
    }
  ];

  const categories = ["All", "AI & Machine Learning", "Cloud Solutions", "Development", "Security", "Business"];

  return (
    <PageTransition>
      <Head>
        <title>Blog — Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on technology, AI, cloud solutions, and business innovation from Zion Tech Group." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technology Insights & Innovation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stay ahead of the curve with our latest articles on AI, cloud computing, 
              cybersecurity, and emerging technologies that are shaping the future.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      <Tag className="h-3 w-3 mr-1" />
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
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
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for weekly technology insights and industry updates.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
"use client"

import React from 'react';
import Head from "next/head";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "AI 2025-2026 Mega Trends Breakthrough",
      excerpt: "Discover the revolutionary AI trends that will shape 2025-2026 and beyond.",
      date: "October 8, 2025",
      readTime: "8 min read",
      category: "AI Innovation",
      href: "/blog/ai-2025-2026-mega-trends-breakthrough"
    },
    {
      id: 2,
      title: "AI 2026 February Mega Breakthrough Revolution",
      excerpt: "The ultimate AI breakthrough that will revolutionize everything in February 2026.",
      date: "October 8, 2025",
      readTime: "10 min read",
      category: "AI Revolution",
      href: "/blog/ai-2026-february-mega-breakthrough-revolution"
    },
    {
      id: 3,
      title: "AI Enterprise Transformation 2025",
      excerpt: "How AI is transforming enterprise operations and business processes.",
      date: "October 8, 2025",
      readTime: "6 min read",
      category: "Enterprise AI",
      href: "/blog/ai-enterprise-transformation-2025"
    }
  ];

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Insights and updates on AI, IT, and technology trends from Zion Tech Group." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">Our Blog</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Insights and updates on AI, IT, and technology trends. Stay ahead with our expert analysis and industry insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <Link 
                  href={post.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
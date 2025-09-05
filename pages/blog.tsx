import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const blogPosts = [
  { id: 1, title: 'The Future of AI in Business: 2025 Trends', excerpt: 'Explore AI trends transforming businesses.', author: 'Dr. Sarah Chen', date: '2024-01-15', readTime: '5 min read' },
  { id: 2, title: 'Micro SaaS: Building Scalable Solutions', excerpt: 'Build and scale micro SaaS apps.', author: 'Michael Rodriguez', date: '2024-01-12', readTime: '7 min read' }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, technology, and business innovation." />
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map(post => (
            <article key={post.id} className="border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="text-sm text-gray-500 mb-4">
                <span className="mr-4">{post.author}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.readTime}</span>
                <Link href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-700 font-medium">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Tag, ExternalLink } from 'lucide-react'

const newsArticles = [
  {
    id: 1,
    title: "Zion Tech Group Launches Revolutionary AI Platform",
    excerpt: "Our new AI platform revolutionizes how businesses approach artificial intelligence, offering unprecedented capabilities and ease of use.",
    author: "Dr. Sarah Chen",
    date: "2024-01-20",
    category: "Product Launch",
    readTime: "3 min read",
    image: "/api/placeholder/600/300",
    featured: true
  },
  {
    id: 2,
    title: "Partnership with Leading Cloud Provider Announced",
    excerpt: "We're excited to announce our strategic partnership with a leading cloud provider to enhance our services.",
    author: "John Smith",
    date: "2024-01-15",
    category: "Partnership",
    readTime: "2 min read",
    image: "/api/placeholder/600/300",
    featured: false
  },
  {
    id: 3,
    title: "New Office Opening in Silicon Valley",
    excerpt: "Zion Tech Group expands its presence with a new office in the heart of Silicon Valley.",
    author: "Jane Doe",
    date: "2024-01-10",
    category: "Company News",
    readTime: "2 min read",
    image: "/api/placeholder/600/300",
    featured: false
  }
]

export default function News() {
  return (
    <>
      <Head>
        <title>News - Zion Tech Group</title>
        <meta name="description" content="Latest news and updates from Zion Tech Group." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h1>
            <p className="text-xl text-gray-600">Stay updated with our latest news and announcements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  {article.featured && (
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Tag className="text-blue-600 mr-2" size={16} />
                    <span className="text-sm text-blue-600 font-medium">{article.category}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{article.title}</h2>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="mr-1" size={16} />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1" size={16} />
                      {article.date}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <Link href={`/news/${article.id}`}>
                      <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                        Read More
                        <ArrowRight size={16} className="ml-1" />
                      </a>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
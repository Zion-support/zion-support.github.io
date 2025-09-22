import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends for 2025",
      excerpt: "Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.",
      author: "Zion Tech Team",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "AI & Machine Learning",
      image: "🧠",
      featured: true
    },
    {
      id: 2,
      title: "Cloud Migration Best Practices: A Complete Guide",
      excerpt: "Learn the essential strategies and considerations for successfully migrating your infrastructure to the cloud.",
      author: "Cloud Engineering Team",
      date: "January 12, 2025",
      readTime: "8 min read",
      category: "Cloud Infrastructure",
      image: "☁️",
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity Threats in 2025: What to Watch For",
      excerpt: "Stay ahead of emerging cybersecurity threats and learn how to protect your organization effectively.",
      author: "Security Team",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "🔒",
      featured: false
    },
    {
      id: 4,
      title: "DevOps Automation: Streamlining Your Development Pipeline",
      excerpt: "Discover how automation can transform your DevOps practices and accelerate your development cycles.",
      author: "DevOps Team",
      date: "January 8, 2025",
      readTime: "7 min read",
      category: "DevOps & Automation",
      image: "⚡",
      featured: false
    },
    {
      id: 5,
      title: "Data Analytics: Turning Information into Insights",
      excerpt: "Learn how to leverage data analytics to drive better business decisions and improve operational efficiency.",
      author: "Data Team",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Data Analytics",
      image: "📊",
      featured: false
    },
    {
      id: 6,
      title: "Digital Transformation: A Strategic Approach",
      excerpt: "Understand the key principles of successful digital transformation and how to navigate the journey.",
      author: "Strategy Team",
      date: "January 3, 2025",
      readTime: "9 min read",
      category: "Technology Consulting",
      image: "💡",
      featured: false
    }
  ]

  const categories = ["All", "AI & Machine Learning", "Cloud Infrastructure", "Cybersecurity", "DevOps & Automation", "Data Analytics", "Technology Consulting"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Blog & Insights — Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights, trends, and best practices in IT, AI, and technology from Zion Tech Group experts." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-white">Zion Tech Group</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-white hover:text-purple-300 transition-colors">About</Link>
              <Link href="/services" className="text-white hover:text-purple-300 transition-colors">Services</Link>
              <Link href="/blog" className="text-purple-300 font-semibold">Blog</Link>
              <Link href="/contact" className="text-white hover:text-purple-300 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blog & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights, industry trends, and best practices from our technology experts.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  category === "All" 
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" 
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                      <span className="ml-4 text-gray-400 text-sm">{post.category}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{post.title}</h2>
                    <p className="text-gray-300 text-lg mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-sm">
                        <span>By {post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
                        Read More
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-8xl mb-4">{post.image}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{post.image}</div>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>By {post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="text-gray-400 text-sm mb-4">{post.date}</div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
                  Read Article
                </button>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss the latest insights, trends, and updates from the world of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
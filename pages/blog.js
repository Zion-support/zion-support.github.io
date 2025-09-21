import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Blog() {
  const [isLoading, setIsLoading] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise: 2025 Predictions",
      excerpt: "Explore how artificial intelligence is transforming enterprise operations and what to expect in 2025.",
      author: "Zion Tech Group",
      date: "2025-01-15",
      category: "AI & Machine Learning",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Micro SaaS Development: Building Scalable Solutions",
      excerpt: "Learn how to build and scale micro SaaS applications that deliver maximum value with minimal overhead.",
      author: "Zion Tech Group",
      date: "2025-01-12",
      category: "Micro SaaS",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 3,
      title: "Enterprise IT Security Best Practices for 2025",
      excerpt: "Essential cybersecurity strategies to protect your organization from emerging threats.",
      author: "Zion Tech Group",
      date: "2025-01-10",
      category: "Cybersecurity",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "Cloud Infrastructure Optimization: Cost vs Performance",
      excerpt: "Balancing cloud costs with performance requirements for optimal business outcomes.",
      author: "Zion Tech Group",
      date: "2025-01-08",
      category: "Cloud Solutions",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "DevOps Automation: Streamlining Development Workflows",
      excerpt: "How automation can accelerate your development process and improve deployment reliability.",
      author: "Zion Tech Group",
      date: "2025-01-05",
      category: "DevOps",
      readTime: "9 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 6,
      title: "Blockchain Technology in Business Applications",
      excerpt: "Exploring practical blockchain implementations for modern business challenges.",
      author: "Zion Tech Group",
      date: "2025-01-03",
      category: "Blockchain",
      readTime: "10 min read",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  const categories = ["All", "AI & Machine Learning", "Micro SaaS", "Cybersecurity", "Cloud Solutions", "DevOps", "Blockchain"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <LoadingSpinner size="xl" text="Loading Blog..." />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Head>
          <title>Blog - Zion Tech Group | Technology Insights & Best Practices</title>
          <meta name="description" content="Stay updated with the latest technology trends, AI insights, and best practices from Zion Tech Group experts." />
        </Head>

        <SEO 
          title="Blog - Zion Tech Group | Technology Insights & Best Practices"
          description="Stay updated with the latest technology trends, AI insights, and best practices from Zion Tech Group experts."
          keywords="technology blog, AI insights, enterprise IT, micro SaaS, cybersecurity, cloud solutions"
        />

        {/* Navigation */}
        <nav className="bg-black/50 backdrop-blur-lg fixed w-full z-50 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </Link>
              <div className="hidden md:flex space-x-8 items-center">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
                <Link href="/blog" className="text-white font-semibold">Blog</Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </div>
              <div className="flex items-center space-x-4">
                <a href="tel:+13024640950" className="bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-32">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Technology <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Insights</span> & Best Practices
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Stay ahead with expert insights on AI, enterprise IT, micro SaaS, and emerging technologies.
              </p>
            </div>
          </section>

          {/* Featured Post */}
          {featuredPost && (
            <section className="py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Article</h2>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center mb-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {featuredPost.category}
                        </span>
                        <span className="ml-4 text-gray-400 text-sm">{featuredPost.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                      <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-400">
                          By {featuredPost.author} • {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Category Filter */}
          <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.filter(post => !post.featured).map((post) => (
                  <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                        <span className="ml-3 text-gray-400 text-xs">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-400">
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <button className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-700 to-purple-800">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Stay Updated with Tech Insights
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest technology trends and insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <button className="bg-white text-cyan-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-black/50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}
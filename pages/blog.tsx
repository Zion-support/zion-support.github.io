import React from 'react';
<<<<<<< HEAD
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, User, ArrowRight, Search, Tag, Clock } from 'lucide-react';
import Link from 'next/link';

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2025",
      excerpt: "Explore the latest AI trends that are reshaping industries and discover how businesses can leverage artificial intelligence for competitive advantage.",
      author: "Dr. Sarah Chen",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Artificial Intelligence",
      image: "/blog/ai-future-2025.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Cloud Migration Best Practices: A Complete Guide",
      excerpt: "Learn the essential steps and strategies for successful cloud migration, including planning, execution, and optimization techniques.",
      author: "Michael Rodriguez",
      date: "January 12, 2025",
      readTime: "12 min read",
      category: "Cloud Computing",
      image: "/blog/cloud-migration-guide.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of Remote Work",
      excerpt: "Discover the latest cybersecurity challenges and solutions for protecting remote teams and distributed organizations.",
      author: "Alex Thompson",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "/blog/cybersecurity-remote.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Building Scalable Microservices Architecture",
      excerpt: "A comprehensive guide to designing and implementing microservices that can scale with your business growth.",
      author: "Jennifer Liu",
      date: "January 8, 2025",
      readTime: "10 min read",
      category: "Software Development",
      image: "/blog/microservices-architecture.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Quantum Computing: The Next Frontier in Technology",
      excerpt: "Explore the potential of quantum computing and how it's set to revolutionize industries from finance to healthcare.",
      author: "Dr. Robert Kim",
      date: "January 5, 2025",
      readTime: "15 min read",
      category: "Emerging Technologies",
      image: "/blog/quantum-computing.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Digital Transformation Success Stories",
      excerpt: "Real-world case studies of companies that successfully transformed their operations using cutting-edge technology.",
      author: "Maria Garcia",
      date: "January 3, 2025",
      readTime: "7 min read",
      category: "Digital Transformation",
      image: "/blog/digital-transformation.jpg",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "Artificial Intelligence",
    "Cloud Computing", 
    "Cybersecurity",
    "Software Development",
    "Emerging Technologies",
    "Digital Transformation"
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
=======
>>>>>>> main

export default function BlogPage() {
  return (
<<<<<<< HEAD
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights on technology, AI, cloud computing, cybersecurity, and digital transformation from Zion Tech Group experts."
      keywords="technology blog, AI insights, cloud computing, cybersecurity, software development, digital transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Technology Blog</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
                Insights, trends, and expert perspectives on the latest in technology, 
                AI, cloud computing, and digital transformation.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="lg:w-2/3">
              
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">Featured Image</span>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          {featuredPost.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                      <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            {featuredPost.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {featuredPost.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {featuredPost.readTime}
                          </div>
                        </div>
                        <Link
                          href={`/blog/${featuredPost.id}`}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
                        >
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Regular Posts */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
                <div className="space-y-8">
                  {regularPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center">
                        <span className="text-white font-semibold">Article Image</span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-2" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              {post.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              {post.readTime}
                            </div>
                          </div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                          >
                            Read More
                            <ArrowRight className="ml-1 w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-8 space-y-8">
                
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Tag className="w-5 h-5 mr-2" />
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className={`block py-2 px-3 rounded-lg transition-colors ${
                            index === 0 
                              ? 'bg-blue-100 text-blue-800 font-medium' 
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                  <p className="mb-4 text-blue-100">
                    Get the latest technology insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['AI', 'Cloud', 'Security', 'DevOps', 'Machine Learning', 'Blockchain', 'IoT', 'Quantum'].map((tag, index) => (
                      <a
                        key={index}
                        href="#"
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
=======
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="text-gray-700">Insights and updates coming soon.</p>
    </main>
>>>>>>> main
  );
}


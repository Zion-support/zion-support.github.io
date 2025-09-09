import React from 'react';'
import MainLayout from '../components/layout/MainLayout';'

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends shaping the business landscape and how organizations can leverage artificial intelligence for competitive advantage.',
      author: 'Zion Tech Group Team',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/blog/ai-future.jpg',
      featured: true
    }, {
      id: 2,
      title: 'Digital Transformation: A Complete Guide for Modern Businesses',
      excerpt: 'Learn how to successfully navigate digital transformation and modernize your business operations for the digital age.',
      author: 'Sarah Johnson',
      date: 'December 10, 2024',
      readTime: '8 min read',
      category: 'Digital Transformation',
      image: '/blog/digital-transformation.jpg',
      featured: false
    }, {
      id: 3,
      title: 'Micro SaaS Development: Building Scalable Solutions',
      excerpt: 'Discover the key principles and best practices for developing successful micro SaaS applications that scale.',
      author: 'Mike Chen',
      date: 'December 5, 2024',
      readTime: '6 min read',
      category: 'Development',
      image: '/blog/micro-saas.jpg',
      featured: false
    }, {
      id: 4,
      title: 'Cloud Migration Strategies: Best Practices and Common Pitfalls',
      excerpt: 'Navigate the complexities of cloud migration with proven strategies and avoid common mistakes that can derail your project.',
      author: 'Alex Rodriguez',
      date: 'November 28, 2024',
      readTime: '7 min read',
      category: 'Cloud Computing',
      image: '/blog/cloud-migration.jpg',
      featured: false
    }, {
      id: 5,
      title: 'Cybersecurity in 2024: Protecting Your Digital Assets',
      excerpt: 'Stay ahead of evolving cyber threats with the latest security strategies and technologies for modern businesses.',
      author: 'Emily Watson',
      date: 'November 20, 2024',
      readTime: '6 min read',
      category: 'Security',
      image: '/blog/cybersecurity.jpg',
      featured: false
    }, {
      id: 6,
      title: 'The Rise of Quantum Computing: Implications for Business',
      excerpt: 'Understand how quantum computing is revolutionizing industries and what it means for your business strategy.',
      author: 'Dr. James Park',
      date: 'November 15, 2024',
      readTime: '9 min read',
      category: 'Emerging Tech',
      image: '/blog/quantum-computing.jpg',
      featured: false
    }
  ];

  const categories = [
    'All Posts',
    'AI & Technology',
    'Digital Transformation',
    'Development',
    'Cloud Computing',
    'Security',
    'Emerging Tech'
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and best practices in technology, AI, and digital transformation from Zion Tech Group experts."
      keywords="technology blog, AI insights, digital transformation, software development, cloud computing, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Stay informed with the latest insights, trends, and best practices in technology, 
              AI, and digital transformation from our expert team.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
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
          </div>
        </section>

        {/* Featured Post */}, {featuredPost && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
                <div className="w-20 h-1 bg-blue-600"></div>
              </div>
              
              <motion.article
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Tag className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-lg font-semibold">Featured Article</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-500 text-sm">Featured</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Link href={`/blog/${featuredPost.id}`} className="group">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            </div>
          </section>
        )}, {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Articles</h2>
              <div className="w-20 h-1 bg-blue-600"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Tag className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">{post.category}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      {post.date}
                    </div>
                    
                    <Link href={`/blog/${post.id}`} className="group">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights and updates from our team.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )};

export default Page;

export default function BlogPage() {
}
return (;
		<Layout>
			<Head>
				<title>Blog | Zion Tech Group</title>
				<link rel="canonical" href=""https"://ziontechgroup.com/blog" />"
			</Head>
			<section className="container mx-auto px-4 py-24">"
				<h1 className="text-4xl "md":text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Blog & News</h1>"
				<p className="text-gray-300">Insights, guides, and announcements. New content coming soon.</p>"
			</section>
		</Layout>
	)

		<Layout>
			<Head>
				<title>Blog | Zion Tech Group</title>
				<link rel="canonical" href=""https"://ziontechgroup.com/blog" />
			</Head>
			<section className="container mx-auto px-4 py-24">
				<h1 className="text-4xl "md":text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Blog & News</h1>
				<p className="text-gray-300">Insights, guides, and announcements. New content coming soon.</p>
			</section>
		</Layout>
	)

import React, { useState } from 'react';'

import Head from 'next/head';'
import Layout from '../components/layout/Layout';'
import React, { useState } from 'react',;'
import Head from 'next/head',;'
import Layout from '../components/layout/Layout',;'
import React, { useState } from 'react','
import Head from 'next/head''
import Layout from '../components/layout/Layout''

export default function BlogPage() {
}
return (;
		<Layout>
			<Head>
				<title>Blog | Zion Tech Group</title>
				<link rel="canonical" href=""https"://ziontechgroup.com/blog" />"
			</Head>
			<section className="container mx-auto px-4 py-24">"
				<h1 className="text-4xl "md":text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Blog & News</h1>"
				<p className="text-gray-300">Insights, guides, and announcements. New content coming soon.</p>"
			</section>
		</Layout>
	)

  } catch (error) {
    }
    console.error(""Error":", error);"
    return res.status(500).json({ "error": "Internal server error" });"

;


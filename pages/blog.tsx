import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { blogPosts } from '../src/data/blogPosts';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = ['All', 'Technology', 'AI', 'Cloud Computing', 'Digital Transformation'];

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Solutions</title>
        <meta name="description" content="Stay updated with the latest insights on technology, AI, cloud computing, and digital transformation from our expert team." />
        <meta name="keywords" content="Technology Blog, AI Insights, Cloud Computing, Digital Transformation, Tech Trends" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Tech Insights & Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest trends, insights, and best practices in technology from our expert team.
            </p>
          </header>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category.toLowerCase() || (category === 'All' && selectedCategory === 'all')
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Blog Posts */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">{post.category}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    <button
                      onClick={() => handleReadMore(post)}
                      className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-600 mb-6">
                Get the latest insights and updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => console.log('Newsletter signup')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Modal for reading full post */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedPost.title}</h2>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{selectedPost.author}</span>
                    <span className="mx-2">•</span>
                    <span>{selectedPost.date}</span>
                    <span className="mx-2">•</span>
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{selectedPost.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
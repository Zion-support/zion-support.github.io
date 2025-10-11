'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'tech', name: 'Technology' },
    { id: 'business', name: 'Business' },
    { id: 'tutorials', name: 'Tutorials' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest trends in artificial intelligence and how they\'re transforming modern businesses.',
      category: 'ai',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Infrastructure: Best Practices',
      excerpt: 'Learn how to design and implement cloud infrastructure that can grow with your business.',
      category: 'tech',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '7 min read',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 3,
      title: 'Micro SAAS Development: From Idea to Launch',
      excerpt: 'A comprehensive guide to building and launching successful micro SAAS applications.',
      category: 'business',
      author: 'Mike Chen',
      date: '2024-01-10',
      readTime: '8 min read',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices for Small Businesses',
      excerpt: 'Essential security measures every small business should implement to protect their data.',
      category: 'tech',
      author: 'Alex Rodriguez',
      date: '2024-01-08',
      readTime: '6 min read',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 5,
      title: 'Getting Started with React: A Beginner\'s Guide',
      excerpt: 'Learn the fundamentals of React development with practical examples and exercises.',
      category: 'tutorials',
      author: 'Emma Wilson',
      date: '2024-01-05',
      readTime: '10 min read',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 6,
      title: 'Digital Transformation: A Strategic Approach',
      excerpt: 'How to successfully navigate digital transformation in your organization.',
      category: 'business',
      author: 'David Kim',
      date: '2024-01-03',
      readTime: '9 min read',
      image: '/api/placeholder/600/300',
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Read our latest insights on AI, technology, and business innovation." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Our Blog</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay updated with the latest insights, tutorials, and trends in AI, technology, and business innovation.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className={`bg-slate-800/50 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                    post.featured ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    {post.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <a
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-white mb-4">No posts found</h3>
                <p className="text-gray-300">Try selecting a different category.</p>
              </div>
            )}

            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest insights and updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-purple-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogPage;

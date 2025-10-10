'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'Artificial Intelligence' },
    { id: 'technology', name: 'Technology' },
    { id: 'business', name: 'Business' },
    { id: 'innovation', name: 'Innovation' }
  ];

  useEffect(() => {
    // Simulate loading blog posts
    const timer = setTimeout(() => {
      setPosts([
        {
          id: 1,
          title: 'The Future of AI in Business',
          excerpt: 'How artificial intelligence is transforming modern business operations and what it means for your company.',
          content: 'Full article content here...',
          author: 'Zion Tech Group',
          date: '2024-01-15',
          category: 'ai',
          readTime: '5 min read',
          image: '/api/placeholder/400/250',
          tags: ['AI', 'Business', 'Technology']
        },
        {
          id: 2,
          title: 'Quantum Computing: The Next Frontier',
          excerpt: 'Exploring the potential of quantum computing and its applications in solving complex problems.',
          content: 'Full article content here...',
          author: 'Zion Tech Group',
          date: '2024-01-10',
          category: 'technology',
          readTime: '7 min read',
          image: '/api/placeholder/400/250',
          tags: ['Quantum Computing', 'Technology', 'Innovation']
        },
        {
          id: 3,
          title: 'Digital Transformation Strategies',
          excerpt: 'Best practices for implementing digital transformation in your organization.',
          content: 'Full article content here...',
          author: 'Zion Tech Group',
          date: '2024-01-05',
          category: 'business',
          readTime: '6 min read',
          image: '/api/placeholder/400/250',
          tags: ['Digital Transformation', 'Business', 'Strategy']
        }
      ]);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-64 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(item => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business innovation from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, business innovation, artificial intelligence, tech trends" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-slate-900 to-purple-900 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Technology Insights & Innovation
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Stay ahead with the latest insights on AI, technology trends, and business innovation from our expert team.
                </p>
              </div>
            </div>
          </section>

          {/* Blog Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">Blog Post</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-indigo-600 font-medium uppercase tracking-wide">
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
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                            <span className="text-indigo-600 font-semibold text-sm">
                              {post.author.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{post.author}</p>
                            <p className="text-xs text-gray-500">{post.date}</p>
                          </div>
                        </div>
                        <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                          Read More →
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No posts found in this category.</p>
                </div>
              )}
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
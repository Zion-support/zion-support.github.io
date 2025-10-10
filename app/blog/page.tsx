'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, User, Tag, ArrowRight, Search } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'Artificial Intelligence' },
    { id: 'technology', name: 'Technology' },
    { id: 'business', name: 'Business' },
    { id: 'innovation', name: 'Innovation' }
  ];

  const posts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions',
      excerpt: 'Explore the latest trends in artificial intelligence and how they\'re transforming modern businesses.',
      content: 'Artificial intelligence is revolutionizing the way businesses operate...',
      author: 'John Smith',
      date: '2024-01-15',
      category: 'ai',
      image: '/api/placeholder/600/400',
      readTime: '5 min read',
      tags: ['AI', 'Business', 'Technology']
    },
    {
      id: 2,
      title: 'Building Scalable Web Applications with Modern Frameworks',
      excerpt: 'Learn best practices for creating scalable and maintainable web applications.',
      content: 'Modern web development requires careful consideration of scalability...',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      category: 'technology',
      image: '/api/placeholder/600/400',
      readTime: '7 min read',
      tags: ['Web Development', 'Scalability', 'Frameworks']
    },
    {
      id: 3,
      title: 'Digital Transformation: A Complete Guide',
      excerpt: 'Everything you need to know about digital transformation and its impact on businesses.',
      content: 'Digital transformation is more than just adopting new technologies...',
      author: 'Mike Chen',
      date: '2024-01-10',
      category: 'business',
      image: '/api/placeholder/600/400',
      readTime: '8 min read',
      tags: ['Digital Transformation', 'Business Strategy', 'Innovation']
    },
    {
      id: 4,
      title: 'Machine Learning in Healthcare: Current Applications',
      excerpt: 'Discover how machine learning is being used to improve healthcare outcomes.',
      content: 'Machine learning is transforming healthcare in unprecedented ways...',
      author: 'Dr. Emily Davis',
      date: '2024-01-08',
      category: 'ai',
      image: '/api/placeholder/600/400',
      readTime: '6 min read',
      tags: ['Machine Learning', 'Healthcare', 'AI Applications']
    },
    {
      id: 5,
      title: 'Cloud Computing Security: Best Practices',
      excerpt: 'Essential security practices for protecting your cloud infrastructure.',
      content: 'Cloud security is a critical concern for organizations of all sizes...',
      author: 'Alex Rodriguez',
      date: '2024-01-05',
      category: 'technology',
      image: '/api/placeholder/600/400',
      readTime: '9 min read',
      tags: ['Cloud Security', 'Best Practices', 'Infrastructure']
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing: What You Need to Know',
      excerpt: 'Understanding edge computing and its implications for the future of technology.',
      content: 'Edge computing is bringing computation closer to data sources...',
      author: 'Lisa Wang',
      date: '2024-01-03',
      category: 'innovation',
      image: '/api/placeholder/600/400',
      readTime: '4 min read',
      tags: ['Edge Computing', 'Innovation', 'Technology Trends']
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const searchedPosts = searchTerm 
    ? filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : filteredPosts;

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
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
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
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and business innovation from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, business innovation, tech trends, artificial intelligence" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Insights, trends, and expert perspectives on AI, technology, and business innovation
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {searchedPosts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">No posts found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchedPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">Featured Image</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <Tag className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-sm text-blue-600 font-medium">{post.category.toUpperCase()}</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-2" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');

  const blogPosts: BlogPost[] = useMemo(() => [
    {
      id: '1',
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations and creating new opportunities.',
      content: 'Full article content here...',
      author: 'John Smith',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      tags: ['artificial intelligence', 'business', 'technology'],
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: '2',
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successfully migrating your applications to the cloud.',
      content: 'Full article content here...',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Cloud',
      tags: ['cloud computing', 'migration', 'devops'],
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: '3',
      title: 'Cybersecurity Trends 2024',
      excerpt: 'The latest cybersecurity trends and how to protect your business from emerging threats.',
      content: 'Full article content here...',
      author: 'Mike Chen',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Security',
      tags: ['cybersecurity', 'security', 'threats'],
      featured: true,
      image: '/api/placeholder/600/400'
    }
  ], []);

  const categories = ['All', 'AI', 'Cloud', 'Security', 'Development'];
  const allTags = ['All', 'artificial intelligence', 'business', 'technology', 'cloud computing', 'migration', 'devops', 'cybersecurity', 'security', 'threats'];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
      
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [blogPosts, searchTerm, selectedCategory, selectedTag]);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends." />
        <meta name="keywords" content="blog, AI insights, cloud computing, cybersecurity, technology trends, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends.
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="text-white font-semibold">Categories:</span>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-white font-semibold">Tags:</span>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedTag === tag
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    {post.featured && (
                      <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3">{post.title}</h2>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                      <button className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss the latest insights and updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
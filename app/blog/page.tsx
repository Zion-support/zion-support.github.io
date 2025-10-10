'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, Tag, ArrowRight, Search, Filter } from 'lucide-react';
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
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'all',
    'AI & Machine Learning',
    'Web Development',
    'Mobile Development',
    'Cloud Computing',
    'Cybersecurity',
    'Business Strategy',
    'Technology Trends'
  ];

  useEffect(() => {
    // Simulate loading blog posts
    const timer = setTimeout(() => {
      setPosts([
        {
          id: 1,
          title: 'The Future of AI in Business: Trends and Predictions for 2024',
          excerpt: 'Explore how artificial intelligence is transforming business operations and what to expect in the coming year.',
          content: 'Full article content...',
          author: 'Zion Tech Team',
          date: '2024-01-15',
          category: 'AI & Machine Learning',
          readTime: '5 min read',
          image: '/api/placeholder/600/400',
          tags: ['AI', 'Business', 'Technology', 'Future']
        },
        {
          id: 2,
          title: 'Building Scalable Web Applications with Modern Technologies',
          excerpt: 'Learn the best practices for creating web applications that can handle millions of users.',
          content: 'Full article content...',
          author: 'Zion Tech Team',
          date: '2024-01-12',
          category: 'Web Development',
          readTime: '7 min read',
          image: '/api/placeholder/600/400',
          tags: ['Web Development', 'Scalability', 'Performance', 'Architecture']
        },
        {
          id: 3,
          title: 'Cybersecurity Best Practices for Small Businesses',
          excerpt: 'Protect your business from cyber threats with these essential security measures.',
          content: 'Full article content...',
          author: 'Zion Tech Team',
          date: '2024-01-10',
          category: 'Cybersecurity',
          readTime: '6 min read',
          image: '/api/placeholder/600/400',
          tags: ['Cybersecurity', 'Small Business', 'Security', 'Best Practices']
        },
        {
          id: 4,
          title: 'Cloud Migration Strategies: A Complete Guide',
          excerpt: 'Everything you need to know about moving your infrastructure to the cloud.',
          content: 'Full article content...',
          author: 'Zion Tech Team',
          date: '2024-01-08',
          category: 'Cloud Computing',
          readTime: '8 min read',
          image: '/api/placeholder/600/400',
          tags: ['Cloud', 'Migration', 'AWS', 'Azure', 'Strategy']
        },
        {
          id: 5,
          title: 'Mobile App Development: Native vs Cross-Platform',
          excerpt: 'Compare the pros and cons of different mobile development approaches.',
          content: 'Full article content...',
          author: 'Zion Tech Team',
          date: '2024-01-05',
          category: 'Mobile Development',
          readTime: '6 min read',
          image: '/api/placeholder/600/400',
          tags: ['Mobile', 'React Native', 'Flutter', 'Native', 'Cross-Platform']
        },
        {
          id: 6,
          title: 'Digital Transformation: How to Get Started',
          excerpt: 'A step-by-step guide to transforming your business with technology.',
          content: 'Full article content...',
          author: 'Zion Tech Team',
          date: '2024-01-03',
          category: 'Business Strategy',
          readTime: '9 min read',
          image: '/api/placeholder/600/400',
          tags: ['Digital Transformation', 'Business', 'Strategy', 'Technology']
        }
      ]);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const searchFilteredPosts = searchTerm
    ? filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : filteredPosts;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <div className="h-12 bg-white/20 rounded w-96 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-white/20 rounded w-64 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(item => (
              <div key={item} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 animate-pulse">
                <div className="h-48 bg-white/20 rounded-lg mb-4"></div>
                <div className="h-6 bg-white/20 rounded mb-2"></div>
                <div className="h-4 bg-white/20 rounded mb-4"></div>
                <div className="h-4 bg-white/20 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group | Latest Technology Insights</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, and business strategies from Zion Tech Group experts." />
        <meta name="keywords" content="technology blog, AI insights, web development, cybersecurity, cloud computing, business strategy" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Technology
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with our latest insights on AI, web development, 
            cybersecurity, and business technology trends.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchFilteredPosts.map((post) => (
              <article key={post.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-4xl">📝</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          {searchFilteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest technology insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;

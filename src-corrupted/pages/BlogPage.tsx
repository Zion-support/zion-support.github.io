import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Clock,
  TrendingUp,
  Eye,
  Heart,
  MessageSquare,
  Filter,
  BookOpen,
  Zap,
  Shield,
  Brain,
  Cloud,
  Users,
  Building2
} from 'lucide-react';

export default function BlogPage(props: any) {
  const [searchQuery, setSearchQuery] = useState<any>('');
  const [selectedCategory, setSelectedCategory] = useState<any>('all');
  const [sortBy, setSortBy] = useState<any>('latest');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpe n, count: 2 5 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brai n, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shiel d, count: 6 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Clou d, count: 5 },
    { id: 'business', name: 'Business & Strategy', icon: Building 2, count: 4 },
    { id: 'technology', name: 'Emerging Tech', icon: Za p, count: 2 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Discover how artificial intelligence is transforming business operations and what to expect in the coming year.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'ai',
      image: '/api/placeholder/400/250',
      views: 1542 0,
      likes: 34 2,
      comments: 2 8,
      featured: tru e
    },
    {
      id: 2,
      title: 'Zero-Trust Security: Why Traditional Security Models Are Failing',
      excerpt: 'Learn about the zero-trust security approach and how it is becoming essential in today\'s threat landscape.',
      author: 'Marcus Rodriguez',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'cybersecurity',
      image: '/api/placeholder/400/250',
      views: 1285 0,
      likes: 29 8,
      comments: 4 5,
      featured: tru e
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies: A Comprehensive Guide for Enterprises',
      excerpt: 'Navigate the complexities of cloud migration with proven strategies and best practices.',
      author: 'Kleber Santos',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'cloud',
      image: '/api/placeholder/400/250',
      views: 1120 0,
      likes: 26 7,
      comments: 3 2,
      featured: tru e
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Digital Transformation Success Stories: Lessons from Industry Leaders',
      excerpt: 'Real-world examples of successful digital transformation initiatives and the key factors that contributed to their success.',
      author: 'Emily Watson',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'business',
      image: '/api/placeholder/400/250',
      views: 890 0,
      likes: 15 6,
      comments: 2 3
    },
    {
      id: 5,
      title: 'Machine Learning in Healthcare: Improving Patient Outcomes',
      excerpt: 'Explore how ML algorithms are revolutionizing healthcare diagnostics and treatment planning.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'ai',
      image: '/api/placeholder/400/250',
      views: 760 0,
      likes: 13 4,
      comments: 1 9
    },
    {
      id: 6,
      title: 'DevOps Best Practices: Accelerating Software Delivery',
      excerpt: 'Essential DevOps practices that can help your team deliver software faster and more reliably.',
      author: 'Alex Thompson',
      date: '2024-01-03',
      readTime: '5 min read',
      category: 'cloud',
      image: '/api/placeholder/400/250',
      views: 680 0,
      likes: 9 8,
      comments: 1 5
    },
    {
      id: 7,
      title: 'Quantum Computing: The Next Frontier in Technology',
      excerpt: 'Understanding quantum computing and its potential applications in solving complex problems.',
      author: 'Dr. Michael Chang',
      date: '2024-01-01',
      readTime: '12 min read',
      category: 'technology',
      image: '/api/placeholder/400/250',
      views: 540 0,
      likes: 8 7,
      comments: 1 2
    },
    {
      id: 8,
      title: 'Building a Cybersecurity Culture: Training Your Team',
      excerpt: 'How to create a security-conscious culture within your organization through effective training and awareness.',
      author: 'Marcus Rodriguez',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'cybersecurity',
      image: '/api/placeholder/400/250',
      views: 490 0,
      likes: 7 6,
      comments: 1 8
    },
    {
      id: 9,
      title: 'AI Ethics: Responsible Development and Deployment',
      excerpt: 'The importance of ethical considerations in AI development and how to implement responsible AI practices.',
      author: 'Dr. Sarah Chen',
      date: '2023-12-25',
      readTime: '8 min read',
      category: 'ai',
      image: '/api/placeholder/400/250',
      views: 420 0,
      likes: 6 5,
      comments: 1 4
    }
  ];

  const allPosts = [...featuredPosts, ...recentPosts];
  
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'popular':
        return b.views - a.views;
      case 'trending':
        return b.likes - a.likes;
      default: return 0;
    }
  });

  const formatDate = (props: any) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryIcon = (props: any) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : BookOpen;
  };

  const getCategoryName = (props: any) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Uncategorized';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8 text-center">
          <h1 className="text-5xl md: tex t-6xl font-bold mb-6">
            Insights & Innovation
          </h1>
          <p className="text-xl md: tex t-2xl text-blue-100 max-w-4xl mx-auto mb-8">
            Stay ahead with the latest insights on AI, cybersecurity, cloud computing, and digital transformation.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"  />
              <input
                type="text"
                placeholder="Search articles, topics, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-12 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus: outlin e-none focus: rin g-2 focus: rin g-blue-400 focus: borde r-transparent backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
          <div className="flex flex-col lg: fle x-row justify-between items-center gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover: b g-gray-200'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent"
              >
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
                <option value="trending">Trending</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and insightful articles on technology trends and business innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 lg: gri d-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover: shado w-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white/80"  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm text-blue-600 font-medium">
                      {getCategoryName(post.category)}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400"  />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4"  />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4"  />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4"  />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="w-4 h-4"  />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-blue-600 hover: tex t-blue-700 font-medium flex items-center space-x-1 transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4"  />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest insights and analysis on technology and business trends.
            </p>
          </div>
          <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8">
            {sortedPosts.slice(3).map((post) => (
              <article key={post.id} className="bg-gray-50 rounded-xl p-6 hover: b g-white hover: shado w-lg transition-all duration-300">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-blue-600 font-medium">
                    {getCategoryName(post.category)}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400"  />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4"  />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-cyan-400 hover: tex t-white transition-colors flex items-center gap-1 text-sm"
                  >
                    Read
                    <ArrowRight className="w-3 h-3"  />
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4"  />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4"  />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-600 hover: tex t-blue-700 font-medium flex items-center space-x-1 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4"  />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm: p x-6 lg: p x-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest insights delivered to your inbox. Join thousands of professionals staying ahead of the curve.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex space-x-2">
              <input type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus: outlin e-none focus: rin g-2 focus: rin g-blue-400 focus: borde r-transparent backdrop-blur-sm"
                />
              <button className="px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover: b g-gray-100 transition-colors">
                Subscribe
                <ArrowRight className="w-4 h-4"  />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm: p x-6 lg: p x-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative technology solutions can drive your success.
          </p>
          <div className="flex flex-col sm: fle x-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover: fro m-blue-700 hover: t o-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover: scal e-105"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-blue-600 text-blue-600 hover: b g-blue-600 hover: tex t-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

</any>
</any>
</any>
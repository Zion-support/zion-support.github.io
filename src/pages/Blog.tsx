
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Code,
  Shield,
  Cloud,
  Brain,
  Cpu,
  Zap,
  Building,
  Users,
  Globe,
  Star,
  Eye,
  Heart,
  Share2
} from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 25 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'quantum', name: 'Quantum Technology', icon: Cpu, count: 4 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 5 },
    { id: 'business', name: 'Business & Strategy', icon: Building, count: 7 },
    { id: 'innovation', name: 'Innovation & Trends', icon: Lightbulb, count: 6 },
    { id: 'development', name: 'Development', icon: Code, count: 4 }
  ];

  const tags = [
    'AI', 'Machine Learning', 'Quantum Computing', 'Cybersecurity', 'Cloud Migration',
    'Digital Transformation', 'Business Intelligence', 'Automation', 'Innovation',
    'Technology Trends', 'Enterprise Solutions', 'Startups', 'Healthcare', 'Finance'
  ];
=======
import React from 'react';
import { 
  FileText, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
<<<<<<< HEAD
      title: 'The Future of AI: Autonomous Business Systems in 2024',
      excerpt: 'Discover how autonomous AI systems are revolutionizing business operations and what this means for the future of work.',
      content: 'Artificial Intelligence has evolved from simple automation to complex autonomous systems that can make decisions, learn from experience, and operate independently...',
      author: 'Dr. Sarah Chen',
      authorTitle: 'AI Research Director',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'ai-ml',
      tags: ['AI', 'Autonomous Systems', 'Business Intelligence'],
      featured: true,
      views: 15420,
      likes: 892,
      image: '/images/blog/ai-future.jpg'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Through Classical Limitations',
      excerpt: 'Explore how quantum computing is solving problems that were previously impossible for classical computers.',
      content: 'Quantum computing represents a paradigm shift in computational power, leveraging quantum mechanical phenomena to process information...',
      author: 'Prof. Michael Rodriguez',
      authorTitle: 'Quantum Technology Lead',
      publishDate: '2024-01-12',
      readTime: '12 min read',
      category: 'quantum',
      tags: ['Quantum Computing', 'Technology', 'Innovation'],
      featured: true,
      views: 12850,
      likes: 756,
      image: '/images/blog/quantum-computing.jpg'
=======
      title: 'The Future of AI: Autonomous Business Systems in 2025',
      excerpt: 'Explore how autonomous AI systems are revolutionizing business operations and what to expect in the coming year.',
      author: 'Kleber',
      date: '2025-01-15',
      category: 'AI & Technology',
      readTime: '5 min read',
      image: '🤖'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Barriers',
      excerpt: 'Understanding the fundamentals of quantum computing and its potential applications in enterprise environments.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-10',
      category: 'Quantum Technology',
      readTime: '7 min read',
      image: '⚛️'
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
<<<<<<< HEAD
      excerpt: 'Learn about emerging cybersecurity challenges and how AI is being used to both attack and defend digital systems.',
      content: 'As AI systems become more sophisticated, they present both new security challenges and innovative defense mechanisms...',
      author: 'Alex Thompson',
      authorTitle: 'Cybersecurity Expert',
      publishDate: '2024-01-10',
      readTime: '10 min read',
      category: 'cybersecurity',
      tags: ['Cybersecurity', 'AI', 'Threat Detection'],
      featured: false,
      views: 9870,
      likes: 634,
      image: '/images/blog/cybersecurity-ai.jpg'
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies for Enterprise Success',
      excerpt: 'A comprehensive guide to planning and executing successful cloud migration projects for large organizations.',
      content: 'Cloud migration is more than just moving data and applications—it\'s a strategic transformation that requires careful planning...',
      author: 'Jennifer Park',
      authorTitle: 'Cloud Solutions Architect',
      publishDate: '2024-01-08',
      readTime: '15 min read',
      category: 'cloud',
      tags: ['Cloud Migration', 'Enterprise', 'Digital Transformation'],
      featured: false,
      views: 8760,
      likes: 521,
      image: '/images/blog/cloud-migration.jpg'
    },
    {
      id: 5,
      title: 'Digital Transformation: Beyond Technology Implementation',
      excerpt: 'Understanding the human and organizational aspects of successful digital transformation initiatives.',
      content: 'While technology is crucial for digital transformation, the human element—change management, culture, and leadership—is equally important...',
      author: 'David Kim',
      authorTitle: 'Digital Transformation Consultant',
      publishDate: '2024-01-05',
      readTime: '11 min read',
      category: 'business',
      tags: ['Digital Transformation', 'Change Management', 'Leadership'],
      featured: false,
      views: 7650,
      likes: 445,
      image: '/images/blog/digital-transformation.jpg'
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing in IoT Applications',
      excerpt: 'How edge computing is enabling real-time processing and reducing latency in IoT deployments.',
      content: 'Edge computing brings computation and data storage closer to the data source, enabling faster processing and real-time insights...',
      author: 'Lisa Wang',
      authorTitle: 'IoT Solutions Engineer',
      publishDate: '2024-01-03',
      readTime: '9 min read',
      category: 'innovation',
      tags: ['Edge Computing', 'IoT', 'Real-time Processing'],
      featured: false,
      views: 6540,
      likes: 398,
      image: '/images/blog/edge-computing.jpg'
    },
    {
      id: 7,
      title: 'Machine Learning in Healthcare: Improving Patient Outcomes',
      excerpt: 'Exploring how ML algorithms are transforming healthcare delivery and improving patient care.',
      content: 'Machine learning is revolutionizing healthcare by enabling early disease detection, personalized treatment plans, and predictive analytics...',
      author: 'Dr. Robert Johnson',
      authorTitle: 'Healthcare Technology Specialist',
      publishDate: '2024-01-01',
      readTime: '14 min read',
      category: 'ai-ml',
      tags: ['Machine Learning', 'Healthcare', 'Patient Care'],
      featured: false,
      views: 5980,
      likes: 367,
      image: '/images/blog/ml-healthcare.jpg'
    },
    {
      id: 8,
      title: 'Building Scalable Microservices Architecture',
      excerpt: 'Best practices for designing and implementing microservices that can scale with your business.',
      content: 'Microservices architecture offers flexibility and scalability, but requires careful design and implementation to avoid common pitfalls...',
      author: 'Mark Davis',
      authorTitle: 'Senior Software Architect',
      publishDate: '2023-12-30',
      readTime: '13 min read',
      category: 'development',
      tags: ['Microservices', 'Architecture', 'Scalability'],
      featured: false,
      views: 5430,
      likes: 312,
      image: '/images/blog/microservices.jpg'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
    const tagMatch = selectedTag === 'all' || post.tags.includes(selectedTag);
    
    return searchMatch && categoryMatch && tagMatch;
  });
=======
      excerpt: 'How artificial intelligence is both creating new security challenges and providing innovative solutions.',
      author: 'Marcus Rodriguez',
      date: '2025-01-05',
      category: 'Cybersecurity',
      readTime: '6 min read',
      image: '🔒'
    },
    {
      id: 4,
      title: 'Digital Transformation: A Guide for Small Businesses',
      excerpt: 'Practical steps for small and medium businesses to embrace digital transformation and stay competitive.',
      author: 'Lisa Park',
      date: '2024-12-28',
      category: 'Digital Transformation',
      readTime: '8 min read',
      image: '🚀'
    },
    {
      id: 5,
      title: 'The Rise of Micro SAAS: Democratizing Technology',
      excerpt: 'How micro SAAS solutions are making enterprise-grade technology accessible to businesses of all sizes.',
      author: 'Alex Thompson',
      date: '2024-12-20',
      category: 'Micro SAAS',
      readTime: '4 min read',
      image: '💻'
    },
    {
      id: 6,
      title: 'Cloud Infrastructure: Building for Scale and Security',
      excerpt: 'Best practices for designing and implementing scalable, secure cloud infrastructure solutions.',
      author: 'David Wilson',
      date: '2024-12-15',
      category: 'Cloud & Infrastructure',
      readTime: '9 min read',
      image: '☁️'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Technology',
    'Quantum Technology',
    'Cybersecurity',
    'Digital Transformation',
    'Micro SAAS',
    'Cloud & Infrastructure'
  ];
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : BookOpen;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Insights & Innovation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Stay ahead of the curve with expert insights on AI, quantum technology, cybersecurity, 
              and the latest trends shaping the future of business and technology.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 border-cyan-500 text-white'
                      : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
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

            {/* Tag Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedTag('all')}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                  selectedTag === 'all'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                }`}
              >
                All Tags
              </button>
              {tags.slice(0, 8).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                    selectedTag === tag
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                  }`}
                >
                  {tag}
                </button>
              ))}
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Insights, updates, and thought leadership on AI, quantum computing, 
            cybersecurity, and digital transformation.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Featured Articles
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => {
                const CategoryIcon = getCategoryIcon(post.category);
                return (
                  <article key={post.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                    <div className="p-8">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30">
                          Featured
                        </span>
                        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600">
                          {getCategoryName(post.category)}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.publishDate)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center mt-6 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">
              Latest Articles
            </h2>
            <div className="text-gray-400">
              {filteredPosts.length} of {blogPosts.length} articles
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or browse all categories.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                const CategoryIcon = getCategoryIcon(post.category);
                return (
                  <article key={post.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600">
                          {getCategoryName(post.category)}
                        </span>
                        {post.featured && (
                          <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.publishDate)}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex space-x-2">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-1 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
=======
      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
              >
                {/* Post Image */}
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {post.image}
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Category and Read Time */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group-hover:scale-105">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
        </div>
      </section>

      {/* Newsletter Signup */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-400 mb-8">
<<<<<<< HEAD
            Get the latest insights delivered to your inbox. No spam, just valuable content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
=======
            Get the latest insights and updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
<<<<<<< HEAD
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
=======
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
              Subscribe
            </button>
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Discover how our AI and technology solutions can drive innovation and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Get Started
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Explore Services
            </Link>
          </div>
        </div>
      </section>
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
    </div>
  );
}


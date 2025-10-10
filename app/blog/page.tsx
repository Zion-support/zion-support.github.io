'use client';
<<<<<<< HEAD
import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Filter, TrendingUp, Star, Eye, MessageCircle, BookOpen, Brain, Cloud, Shield, Code } from 'lucide-react';

export default function BlogPage() {}
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'all', label: 'All Posts', count: 24 },
    { name: 'ai', label: 'Artificial Intelligence', count: 8 },
    { name: 'cloud', label: 'Cloud Computing', count: 6 },
    { name: 'security', label: 'Cybersecurity', count: 4 },
    { name: 'business', label: 'Business', count: 3 },
    { name: 'technology', label: 'Technology', count: 3 }
  ];

  const featuredPost = {
    id: 1;
  const featuredPost = {}
    id: 1,
    title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
    excerpt: 'Explore the latest trends in enterprise AI adoption, from quantum computing integration to autonomous systems, and discover how businesses are leveraging AI for competitive advantage.',
    author: 'Dr. Sarah Chen'
    authorRole: 'Head of AI Research'
    authorImage: '/images/authors/sarah-chen.webp',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'ai',
    image: '/images/blog/ai-enterprise-future.webp',
    tags: ['AI', 'Enterprise', 'Future Tech', 'Innovation'],
    views: 1250;
    likes: 89;
    comments: 23;
    featured: true;
  };
=======
>>>>>>> origin/resolve-merge-conflicts
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
<<<<<<< HEAD
  const blogPosts = [
    {
      id: 2;
    {}
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration, including planning, execution, and optimization techniques.',
      author: 'Michael Rodriguez'
      authorRole: 'Head of Engineering'
      authorImage: '/images/authors/michael-rodriguez.webp',
      publishDate: '2024-01-12',
      readTime: '6 min read',
      category: 'cloud',
      image: '/images/blog/cloud-migration-guide.webp',
      tags: ['Cloud', 'Migration', 'Best Practices', 'Infrastructure'],
      views: 890;
      likes: 67;
      comments: 15;
    },
    {
      id: 3;
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions'
      excerpt: 'Discover how AI is both creating new security challenges and providing innovative solutions to protect enterprise data and systems.'
      author: 'Dr. Emily Watson'
      authorRole: 'Head of AI Research'
      authorImage: '/images/authors/emily-watson.webp'
      publishDate: '2024-01-10'
    {}
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Discover how AI is both creating new security challenges and providing innovative solutions to protect enterprise data and systems.',
      author: 'Dr. Emily Watson',
      authorRole: 'Head of AI Research',
      authorImage: '/images/authors/emily-watson.webp',
      publishDate: '2024-01-10',
      readTime: '7 min read',
      category: 'security',
      image: '/images/blog/ai-cybersecurity.webp',
      tags: ['Cybersecurity', 'AI', 'Threats', 'Solutions'],
      views: 1100;
      likes: 78;
      comments: 19;
    },
    {
      id: 4;
    {}
      id: 4,
      title: 'Digital Transformation: How to Lead Change in Your Organization',
      excerpt: 'A comprehensive guide to leading successful digital transformation initiatives, from strategy development to implementation.',
      author: 'Kleber Santos'
      authorRole: 'CEO & Founder'
      authorImage: '/images/authors/kleber-santos.webp',
      publishDate: '2024-01-08',
      readTime: '9 min read',
      category: 'business',
      image: '/images/blog/digital-transformation.webp',
      tags: ['Digital Transformation', 'Leadership', 'Change Management', 'Strategy'],
      views: 950;
      likes: 72;
      comments: 21;
    },
    {
      id: 5;
      title: 'The Rise of Edge Computing: Bringing AI Closer to Data'
      excerpt: 'Explore how edge computing is revolutionizing AI deployment and enabling real-time processing at the network edge.'
      author: 'Michael Rodriguez'
      authorRole: 'Head of Engineering'
      authorImage: '/images/authors/michael-rodriguez.webp'
      publishDate: '2024-01-05'
    {}
      id: 5,
      title: 'The Rise of Edge Computing: Bringing AI Closer to Data',
      excerpt: 'Explore how edge computing is revolutionizing AI deployment and enabling real-time processing at the network edge.',
      author: 'Michael Rodriguez',
      authorRole: 'Head of Engineering',
      authorImage: '/images/authors/michael-rodriguez.webp',
      publishDate: '2024-01-05',
      readTime: '5 min read',
      category: 'technology',
      image: '/images/blog/edge-computing.webp',
      tags: ['Edge Computing', 'AI', 'Real-time', 'Infrastructure'],
      views: 720;
      likes: 54;
      comments: 12;
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital age.',
      author: 'John Doe',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6;
      title: 'AI Ethics: Building Responsible AI Systems'
      excerpt: 'Learn about the importance of AI ethics and how to implement responsible AI practices in your organization.'
      author: 'Dr. Sarah Chen'
      authorRole: 'Head of AI Research'
      authorImage: '/images/authors/sarah-chen.webp'
      publishDate: '2024-01-03'
    {}
      id: 6,
      title: 'AI Ethics: Building Responsible AI Systems',
      excerpt: 'Learn about the importance of AI ethics and how to implement responsible AI practices in your organization.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Head of AI Research',
      authorImage: '/images/authors/sarah-chen.webp',
      publishDate: '2024-01-03',
      readTime: '6 min read',
      category: 'ai',
      image: '/images/blog/ai-ethics.webp',
      tags: ['AI Ethics', 'Responsible AI', 'Governance', 'Compliance'],
      views: 680;
      likes: 61;
      comments: 18;
    }
  ];

  const filteredPosts = blogPosts.filter(post => {)
  const filteredPosts = blogPosts.filter(post => {)}
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

<<<<<<< HEAD
  const getCategoryIcon = (category: string) => {
    const icons = {
      ai: Brain;
      cloud: Cloud;
      security: Shield;
      business: TrendingUp;
      technology: Code;
  const getCategoryIcon = (category: string) => {}
    const icons = {}
      ai: Brain,
      cloud: Cloud,
      security: Shield,
      business: TrendingUp,
      technology: Code
    };
    return icons[category as keyof typeof icons] || BookOpen;
  };

  const getCategoryColor = (category: string) => {}
    const colors = {}
      ai: 'text-purple-400',
      cloud: 'text-blue-400',
      security: 'text-red-400',
      business: 'text-green-400',
      technology: 'text-cyan-400'};
    return colors[category as keyof typeof colors] || 'text-gray-400';
  };
      title: 'Cybersecurity Best Practices for Enterprise AI Systems',
      excerpt: 'Learn how to secure your AI implementations with enterprise-grade security measures and best practices.',
      author: 'Jane Smith',
      date: '2024-01-10',
      category: 'Cybersecurity',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Quantum Computing: The Next Frontier in Business Technology',
      excerpt: 'Discover how quantum computing is revolutionizing problem-solving and what it means for your business.',
      author: 'Mike Johnson',
      date: '2024-01-05',
      category: 'Emerging Tech',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Automating Business Processes with AI: A Complete Guide',
      excerpt: 'Step-by-step guide to implementing AI automation in your business processes for maximum efficiency.',
      author: 'Sarah Wilson',
      date: '2024-01-01',
      category: 'Automation',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Cloud Infrastructure: Building Scalable AI Solutions',
      excerpt: 'Learn how to design and implement cloud infrastructure that can scale with your AI applications.',
      author: 'David Chen',
      date: '2023-12-28',
      category: 'Cloud Computing',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'ROI of AI Implementation: Measuring Success in Business',
      excerpt: 'How to measure and maximize the return on investment from your AI implementations.',
      author: 'Emily Davis',
      date: '2023-12-25',
      category: 'Business Strategy',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Cybersecurity',
    'Emerging Tech',
    'Automation',
    'Cloud Computing',
    'Business Strategy'
  ];
=======
    return () => clearTimeout(timer);
  }, []);const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-64 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(item => (
              <div key={item} className="bg-gray-100 rounded-lg p-6 animate-pulse">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
>>>>>>> origin/resolve-merge-conflicts-1759965566

=======
>>>>>>> origin/resolve-merge-conflicts
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div>
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></section><div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">Blog & Insights</h1><p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">Stay updated with the latest trends in AI, cloud computing, cybersecurity,</p>
              and digital transformation. Expert insights from our team of specialists.</p>
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg: py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">)
          <div className="max-w-4xl mx-auto text-center">)
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">)
              Blog & Insights;)
            </h1>),
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">),
              Stay updated with the latest trends in AI, cloud computing, cybersecurity)
              and digital transformation. Expert insights from our team of specialists.
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Expert Insights</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Latest Trends</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
                <Star className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Industry Leaders</span>
              </div>
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Read our latest insights on AI, technology, and business solutions. Stay updated with industry trends and best practices." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our Blog
              </h1>
<<<<<<< HEAD
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Stay ahead of the curve with insights, trends, and expert advice on AI, IT solutions, 
                and emerging technologies that are shaping the future of business.
              </p>
            </div>
          </section>

      {/* Search and Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md: flex-row gap-4 mb-8">
              <div className="flex-1 relative">
        <div className="container mx-auto px-4"></section>
          <div className="max-w-4xl mx-auto"></div>
            <div className="flex flex-col md:flex-row gap-4 mb-8"></div>
              <div className="flex-1 relative"></div>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input;
                  type="text",
                  placeholder="Search articles...",
                  value={searchTerm}
                  onChange={(e) =>setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"</input>
                /><div className="flex gap-2 overflow-x-auto">{categories.map((category) => (<button
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400 transition-colors"
                />,
              </div>,
              <div className="flex gap-2 overflow-x-auto">,
                {categories.map((category) => (,
                  <button;
                /><div className="flex gap-2 overflow-x-auto">{categories.map((category) => (</div><button
                    key={category.name}
                    onClick={() =>setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                      selectedCategory === category.name;
                        ? 'bg-cyan-500 text-white'}
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {categories.map((category) => (}
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${}
                      selectedCategory === category.name
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  ></button>
                    {category.label} ({category.count})</button>
                  </button>
                ))}
              </div>
          {/* Categories */}
          <section className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full transition-all ${
                    index === 0
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-cyan-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4"></section>
          <div className="max-w-6xl mx-auto"></div>
            <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
            <div className="bg-slate-800/50 rounded-lg overflow-hidden hover: bg-slate-700/50 transition-all duration-300">,
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">,
                <div className="relative">,
                  <img;
            <div className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-700/50 transition-all duration-300"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>
                <div className="relative"></div>
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg: h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                  <div className="absolute top-4 left-4"></div>
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className={`w-8 h-8 ${getCategoryColor(featuredPost.category)}`}>{React.createElement(getCategoryIcon(featuredPost.category), { className: 'w-8 h-8' })}<span className="text-cyan-400 font-medium capitalize">{featuredPost.category}<h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}<div className="flex flex-wrap gap-2 mb-6">{featuredPost.tags.map((tag, index) => (<span key={index} className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">{tag}</span>
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured;
                    </span>
                  </div>
                </div>,
                <div className="p-8">,
                  <div className="flex items-center space-x-2 mb-4">,
                    <div className={`w-8 h-8 ${getCategoryColor(featuredPost.category)}`}>
                      {React.createElement(getCategoryIcon(featuredPost.category), { className: 'w-8 h-8' })}
                    </div>
                    <span className="text-cyan-400 font-medium capitalize">{featuredPost.category}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (}
                      <span key={index} className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <img;
                <div className="p-8"></div>
                  <div className="flex items-center space-x-2 mb-4"></div>
                    <div className={`w-8 h-8 ${getCategoryColor(featuredPost.category)}`}>{React.createElement(getCategoryIcon(featuredPost.category), { className: 'w-8 h-8' })}</div><span className="text-cyan-400 font-medium capitalize">{featuredPost.category}</span><h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p><div className="flex flex-wrap gap-2 mb-6">{featuredPost.tags.map((tag, index) => (</div><span key={index} className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">{tag}</span>
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-6"></div>
                    <div className="flex items-center space-x-4"></div>
                      <div className="flex items-center space-x-2"></div>
                        <img
                          src={featuredPost.authorImage}
                          alt={featuredPost.author}
                          className="w-10 h-10 rounded-full"
                        />
                        <div></div>
                          <div className="text-white font-medium">{featuredPost.author}</div><div className="text-gray-400 text-sm">{featuredPost.authorRole}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm"></div>
                      <div className="flex items-center space-x-1"></div>
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1"></div>
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between"></div>
                    <div className="flex items-center space-x-6 text-gray-400 text-sm"></div>
                      <div className="flex items-center space-x-1"></div>
                        <Eye className="w-4 h-4" />
                        <span>{featuredPost.views}</span>
                      </div>
                      <div className="flex items-center space-x-1"></div>
                        <MessageCircle className="w-4 h-4" />
                        <span>{featuredPost.comments}<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all flex items-center">Read More</button>
                        <span>{featuredPost.comments}</span>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover: from-cyan-600 hover:to-purple-700 transition-all flex items-center">
                      Read More;
                        <span>{featuredPost.comments}</span><button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all flex items-center">Read More</button>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      </section>,
,
      {/* Blog Posts */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Latest Articles<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{filteredPosts.map((post) => (</div>
        <div className="container mx-auto px-4"></section>
          <div className="max-w-6xl mx-auto"></div>
            <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{filteredPosts.map((post) => (</div>
            <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (}
                <article key={post.id} className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-700/50 transition-all duration-300">
                  <div className="relative"></div>
                    <img
            <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
              {filteredPosts.map((post) => (,
                <article key={post.id} className="bg-slate-800/50 rounded-lg overflow-hidden hover: bg-slate-700/50 transition-all duration-300">,
                  <div className="relative">,
                    <img;
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4"></div>
                      <div className={`w-8 h-8 ${getCategoryColor(post.category)}`}>{React.createElement(getCategoryIcon(post.category), { className: 'w-8 h-8' })}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6"></div>
                    <div className="flex items-center space-x-2 mb-3"></div>
                      <span className="text-cyan-400 font-medium text-sm capitalize">{post.category}</span><span className="text-gray-400">•</span><span className="text-gray-400 text-sm">{post.readTime}</span><h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p><div className="flex flex-wrap gap-1 mb-4">{post.tags.slice(0, 3).map((tag, index) => (</div><span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">{tag}</span>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-cyan-400 font-medium text-sm capitalize">{post.category}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (}
                        <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img;
                    <div className="flex items-center justify-between"></div>
                      <div className="flex items-center space-x-2"></div>
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-8 h-8 rounded-full"
                        />
                        <div></div>
                          <div className="text-white font-medium text-sm">{post.author}</div><div className="text-gray-400 text-xs">{post.authorRole}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-400 text-xs"></div>
                        <div className="flex items-center space-x-1"></div>
                          <Eye className="w-3 h-3" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1"></div>
                          <MessageCircle className="w-3 h-3" />
                          <span>{post.comments}</span>
                        </div>
          {/* Blog Posts */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="cyber-card hologram-card group hover:scale-105 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-700 rounded-t-lg mb-6 flex items-center justify-center">
                    <div className="text-gray-400 text-sm">Featured Image</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div>{post.readTime}</div>
                    </div>

                    <div className="mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <a
                      href="#"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-700 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Our Latest Insights<p className="text-xl text-gray-200 mb-8">Get the latest articles, industry insights, and expert opinions delivered to your inbox.</p>
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Our Latest Insights;
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Get the latest articles, industry insights, and expert opinions delivered to your inbox.
          {/* Newsletter Signup */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card text-center p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest blog posts, insights, and technology trends delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 max-w-md mx-auto">
                <input;
        <div className="container mx-auto px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-cyan-600 to-purple-700 rounded-lg p-8"></div>
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Our Latest Insights</h2><p className="text-xl text-gray-200 mb-8">Get the latest articles, industry insights, and expert opinions delivered to your inbox.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"></div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                />
                <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">Subscribe<p className="text-sm text-gray-300 mt-4">No spam, unsubscribe at any time.</p>
                <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                  Subscribe;
                </button>,
              </div>,
              <p className="text-sm text-gray-300 mt-4">,
                No spam, unsubscribe at any time.
              </p>
                <button className="cyber-button px-6 py-3">
                  Subscribe
                </button>
=======
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">
                  Insights, trends, and best practices in AI and technology.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Coming soon - stay tuned for our latest articles and insights!
                </p>
>>>>>>> origin/resolve-merge-conflicts
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
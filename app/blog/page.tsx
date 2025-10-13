<<<<<<< HEAD
import React, { useState } from "react";
import { ArrowRight, Search, Calendar, Clock, User, BookOpen, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ai", name: "Artificial Intelligence", count: 5 },
    { id: "technology", name: "Technology", count: 4 },
    { id: "business", name: "Business", count: 3 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends and Predictions",
      excerpt: "Discover how artificial intelligence is revolutionizing business operations and what to expect in 2024.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "ai",
      featured: true,
      image: "/images/blog/ai-business.jpg",
      readTime: "8 min read",
      tags: ["AI", "Business", "Technology", "Innovation"]
    },
    {
      id: 2,
      title: "Cloud Computing Best Practices for Enterprise",
      excerpt: "Essential strategies for successful cloud migration and management in large organizations.",
      author: "Michael Chen",
      date: "2024-01-12",
      category: "technology",
      featured: false,
      image: "/images/blog/cloud-computing.jpg",
      readTime: "6 min read",
      tags: ["Cloud", "Enterprise", "Infrastructure"]
    },
    {
      id: 3,
      title: "Cybersecurity Trends: Protecting Your Digital Assets",
      excerpt: "Latest trends and threats in cybersecurity landscape and how to protect your organization.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      category: "technology",
      featured: false,
      image: "/images/blog/cybersecurity.jpg",
      readTime: "7 min read",
      tags: ["Security", "Cybersecurity", "Protection"]
    },
    {
      id: 4,
      title: "Digital Transformation: A Complete Guide",
      excerpt: "How to successfully navigate digital transformation in your organization.",
      author: "David Kim",
      date: "2024-01-08",
      category: "business",
      featured: false,
      image: "/images/blog/digital-transformation.jpg",
      readTime: "9 min read",
      tags: ["Digital Transformation", "Strategy", "Business", "Technology"]
    }
  ];

=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  featured: boolean;
  image: string;
  readTime: string;
}

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how artificial intelligence is transforming business operations and decision-making processes.',
      content: 'Full article content...',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      category: 'AI',
      featured: true,
      image: '/images/blog/ai-enterprise.jpg',
      readTime: '5 min read'
    },
    {
      id: '2',
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud.',
      content: 'Full article content...',
      author: 'Cloud Team',
      date: '2024-01-10',
      category: 'Cloud',
      featured: false,
      image: '/images/blog/cloud-migration.jpg',
      readTime: '8 min read'
    },
    {
      id: '3',
      title: 'Cybersecurity Trends for 2024',
      excerpt: 'Stay ahead of the latest cybersecurity threats and protection strategies.',
      content: 'Full article content...',
      author: 'Security Team',
      date: '2024-01-05',
      category: 'Security',
      featured: false,
      image: '/images/blog/cybersecurity.jpg',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'AI', 'Cloud', 'Security'];

>>>>>>> cursor/fix-errors-and-merge-to-main-f25b
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

<<<<<<< HEAD
  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta
          name="description"
          content="Stay updated with the latest insights on AI, technology, and business innovation. Expert articles, case studies, and industry trends from Zion Tech Group."
        />
        <meta
          name="keywords"
          content="AI blog, technology insights, business innovation, artificial intelligence articles, tech trends, digital transformation, cybersecurity, cloud computing"
        />
=======
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Technology Insights & News</title>
        <meta name="description" content="Stay updated with the latest technology insights, AI trends, and industry news from Zion Tech Group." />
>>>>>>> cursor/fix-errors-and-merge-to-main-f25b
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Blog
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Insights, Innovation, and Industry Trends
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-white dark:bg-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
=======
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-6">Technology Blog</h1>
              <p className="text-xl text-gray-300 mb-8">
                Insights, trends, and innovations in AI, cloud computing, and cybersecurity
              </p>
              
              {/* Search and Filter */}
              <div className="max-w-2xl mx-auto">
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-f25b
                </div>
              </div>
            </div>

<<<<<<< HEAD
        {/* Blog Posts Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Latest Articles
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Stay informed with our latest insights on technology, AI, and business innovation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{post.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
=======
            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 transition-colors">
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded">
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-medium rounded">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
>>>>>>> cursor/fix-errors-and-merge-to-main-f25b
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
<<<<<<< HEAD
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 group-hover:translate-x-1 transition-transform"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
=======
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
>>>>>>> cursor/fix-errors-and-merge-to-main-f25b
                    </Link>
                  </div>
                </article>
              ))}
<<<<<<< HEAD
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get the latest insights delivered to your inbox
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                  Subscribe
                  <Zap className="w-4 h-4 ml-2" />
                </button>
              </div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-f25b
            </div>
          </div>
        </section>
      </div>
    </>
  );
<<<<<<< HEAD
};
=======
};

export default BlogPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-f25b

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Tag, 
  Clock, 
  Eye, 
  Heart, 
  Share2,
  BookOpen,
  TrendingUp,
  Star,
  ArrowRight,
  Grid,
  List
} from 'lucide-react';
import { 
  blogPosts, 
  getBlogCategories, 
  getBlogTags, 
  searchBlogPosts 
} from '../data/blog-posts';
const ComprehensiveContentShowcase2026: React.FC = () => {
  const [posts, setPosts] = useState(blogPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('date');
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    setCategories(getBlogCategories());
    setTags(getBlogTags());
  }, []);
  useEffect(() => {
    let filteredPosts = [...blogPosts];
    // Search filter
    if (searchQuery) {
      filteredPosts = searchBlogPosts(searchQuery);
    }
    // Category filter
    if (selectedCategory !== 'All') {
      filteredPosts = filteredPosts.filter(post => post.category === selectedCategory);
    }
    // Tag filter
    if (selectedTag !== 'All') {
      filteredPosts = filteredPosts.filter(post => 
        post.tags.some(tag => tag === selectedTag)
      );
};
    }
    // Sort
    switch (sortBy) {
      case 'date':
        filteredPosts.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
        break;
      case 'title':
        filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'author':
        filteredPosts.sort((a, b) => a.author.localeCompare(b.author));
        break;
      case 'readTime':
        filteredPosts.sort((a, b) => parseInt(a.readTime) - parseInt(b.readTime));
        break;
    }
    setPosts(filteredPosts);
  }, [searchQuery, selectedCategory, selectedTag, sortBy]);
  const handleShare = (post) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.origin + `/blog/${post.slug}`
      });
    } else {
      navigator.clipboard.writeText(window.location.origin + `/blog/${post.slug}`);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-cyan-500/20 rounded-full animate-ping"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Content
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {' '}Showcase
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
            Explore our comprehensive collection of cutting-edge technology insights, 
            breakthrough research, and revolutionary innovations
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <BookOpen className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white font-semibold">{posts.length} Articles</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-white font-semibold">{categories.length} Categories</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Tag className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-white font-semibold">{tags.length} Tags</span>
            </div>
          </div>
        </div>
      </div>
      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Categories</option>
              {categories.map(category => (
                <option key={category.name} value={category.name}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
            {/* Tag Filter */}
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Tags</option>
              {tags.slice(0, 20).map(tag => (
                <option key={tag.name} value={tag.name}>
                  {tag.name} ({tag.count})
                </option>
              ))}
            </select>
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="date">Sort by Date</option>
              <option value="title">Sort by Title</option>
              <option value="author">Sort by Author</option>
              <option value="readTime">Sort by Read Time</option>
            </select>
          </div>
          {/* View Mode Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white/20 text-gray-300'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white/20 text-gray-300'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
            <div className="text-white">
              Showing {posts.length} articles
            </div>
          </div>
        </div>
      </div>
      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Post Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  {post.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-yellow-500 text-black text-sm font-bold rounded-full flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <div className="flex items-center text-white/80 text-sm">
                      <Eye className="w-4 h-4 mr-1" />
                      {Math.floor(Math.random() * 1000) + 500}
                    </div>
                    <div className="flex items-center text-white/80 text-sm">
                      <Heart className="w-4 h-4 mr-1" />
                      {Math.floor(Math.random() * 100) + 50}
                    </div>
                  </div>
                </div>
                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm ml-auto">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-blue-200 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/20 text-white text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Author and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-3">
                        <div className="text-white text-sm font-semibold">{post.author}</div>
                        <div className="text-gray-400 text-xs">{post.authorRole}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleShare(post)}
                        className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Post Image */}
                  <div className="md:w-48 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-black/20"></div>
                    {post.featured && (
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Post Content */}
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm ml-4">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm ml-4">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-blue-200 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/20 text-white text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Author and Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-3">
                          <div className="text-white font-semibold">{post.author}</div>
                          <div className="text-gray-400 text-sm">{post.authorRole}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleShare(post)}
                          className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <Share2 className="w-5 h-5" />
                        </button>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                        >
                          Read More
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
        {posts.length === 0 && (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
            <p className="text-blue-200">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );

export default ComprehensiveContentShowcase2026;
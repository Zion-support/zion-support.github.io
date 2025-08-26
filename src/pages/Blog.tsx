
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, ChevronLeft, ChevronRight } from 'lucide-react';
import { BlogCard } from '../components/BlogCard';
import { SEO } from '../components/SEO';

// Mock blog data - in a real app, this would come from an API
const mockBlogPosts = [
  {
    id: '1',
    title: 'The Future of AI in Enterprise: 2026 Trends and Predictions',
    excerpt: 'Explore the cutting-edge AI technologies that will transform enterprise operations in 2026, from quantum machine learning to autonomous decision-making systems.',
    content: 'Full content here...',
    author: {
      name: 'Dr. Sarah Chen',
      avatar: '/images/team/sarah-chen.jpg',
      role: 'Chief Technology Officer'
    },
    publishedAt: '2026-01-15',
    readTime: 8,
    tags: ['AI', 'Enterprise', 'Technology Trends', 'Machine Learning'],
    image: '/images/blog/ai-enterprise-2026.jpg',
    slug: 'future-of-ai-enterprise-2026'
  },
  {
    id: '2',
    title: 'Cybersecurity in the Age of Quantum Computing',
    excerpt: 'How quantum computing is reshaping cybersecurity strategies and what organizations need to know to stay protected.',
    content: 'Full content here...',
    author: {
      name: 'Marcus Rodriguez',
      avatar: '/images/team/marcus-rodriguez.jpg',
      role: 'Head of Cybersecurity'
    },
    publishedAt: '2026-01-10',
    readTime: 6,
    tags: ['Cybersecurity', 'Quantum Computing', 'Security', 'Technology'],
    image: '/images/blog/quantum-cybersecurity.jpg',
    slug: 'cybersecurity-quantum-computing'
  },
  {
    id: '3',
    title: 'Building Scalable Cloud Infrastructure for Modern Applications',
    excerpt: 'Best practices and architectural patterns for designing cloud-native applications that can scale to millions of users.',
    content: 'Full content here...',
    author: {
      name: 'Elena Petrov',
      avatar: '/images/team/elena-petrov.jpg',
      role: 'Cloud Architecture Lead'
    },
    publishedAt: '2026-01-05',
    readTime: 10,
    tags: ['Cloud Computing', 'DevOps', 'Scalability', 'Architecture'],
    image: '/images/blog/cloud-infrastructure.jpg',
    slug: 'scalable-cloud-infrastructure'
  },
  {
    id: '4',
    title: 'The Rise of Edge Computing: Bringing Intelligence Closer to Users',
    excerpt: 'Understanding edge computing and its impact on IoT, mobile applications, and real-time data processing.',
    content: 'Full content here...',
    author: {
      name: 'Dr. Sarah Chen',
      avatar: '/images/team/sarah-chen.jpg',
      role: 'Chief Technology Officer'
    },
    publishedAt: '2025-12-28',
    readTime: 7,
    tags: ['Edge Computing', 'IoT', 'Mobile', 'Real-time Processing'],
    image: '/images/blog/edge-computing.jpg',
    slug: 'rise-of-edge-computing'
  },
  {
    id: '5',
    title: 'Digital Transformation Success Stories: Lessons from Industry Leaders',
    excerpt: 'Real-world examples of successful digital transformations and the key factors that contributed to their success.',
    content: 'Full content here...',
    author: {
      name: 'Marcus Rodriguez',
      avatar: '/images/team/marcus-rodriguez.jpg',
      role: 'Head of Cybersecurity'
    },
    publishedAt: '2025-12-20',
    readTime: 9,
    tags: ['Digital Transformation', 'Case Studies', 'Leadership', 'Strategy'],
    image: '/images/blog/digital-transformation.jpg',
    slug: 'digital-transformation-success-stories'
  },
  {
    id: '6',
    title: 'The Future of Work: How AI is Reshaping Professional Roles',
    excerpt: 'Exploring the evolving landscape of work and how AI is creating new opportunities while transforming existing roles.',
    content: 'Full content here...',
    author: {
      name: 'Elena Petrov',
      avatar: '/images/team/elena-petrov.jpg',
      role: 'Cloud Architecture Lead'
    },
    publishedAt: '2025-12-15',
    readTime: 6,
    tags: ['AI', 'Future of Work', 'Automation', 'Human Resources'],
    image: '/images/blog/future-of-work.jpg',
    slug: 'future-of-work-ai-reshaping-roles'
  }
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Get unique tags from all posts
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    mockBlogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter posts based on search and tags
  const filteredPosts = useMemo(() => {
    return mockBlogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => post.tags.includes(tag));
      
      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Blog"
        description="Insights, trends, and expert analysis on AI, technology, and digital transformation from Zion Tech Group."
        keywords={['blog', 'AI', 'technology', 'digital transformation', 'cybersecurity', 'cloud computing']}
        type="website"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Zion Tech Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Insights, trends, and expert analysis on the future of technology
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-cyan-500 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
                aria-label="Grid view"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-cyan-500 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
                aria-label="List view"
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Clear Filters */}
            {(searchQuery || selectedTags.length > 0) && (
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Tags Filter */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-300 mb-4">No articles found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              {/* Posts Grid/List */}
              <div className={`${
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-8'
              }`}>
                {paginatedPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <BlogCard post={post} featured={index === 0} />
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center mt-12 space-x-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded-lg transition-colors ${
                        currentPage === page
                          ? 'bg-cyan-500 text-white'
                          : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label="Next page"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}

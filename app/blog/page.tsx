'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Search, Filter, Clock, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  image: string;
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'AI & Machine Learning',
    'Cloud Computing',
    'Cybersecurity',
    'Web Development',
    'Mobile Development',
    'Data Analytics',
    'IT Consulting'
  ];

  const samplePosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they\'re transforming business operations across industries.',
      content: 'Full article content...',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Business', 'Technology', 'Future'],
      readTime: '5 min read',
      image: '/images/blog/ai-future.jpg'
    },
    {
      id: '2',
      title: 'Cloud Security Best Practices: Protecting Your Data in 2024',
      excerpt: 'Learn essential cloud security strategies to protect your business data and maintain compliance.',
      content: 'Full article content...',
      author: 'Security Team',
      date: '2024-01-10',
      category: 'Cybersecurity',
      tags: ['Security', 'Cloud', 'Compliance', 'Data Protection'],
      readTime: '7 min read',
      image: '/images/blog/cloud-security.jpg'
    },
    {
      id: '3',
      title: 'Building Scalable Web Applications with Modern Technologies',
      excerpt: 'Discover the latest web development technologies and frameworks for building scalable applications.',
      content: 'Full article content...',
      author: 'Development Team',
      date: '2024-01-05',
      category: 'Web Development',
      tags: ['Web Development', 'React', 'Node.js', 'Scalability'],
      readTime: '6 min read',
      image: '/images/blog/web-development.jpg'
    }
  ];

  useEffect(() => {
    setPosts(samplePosts);
    setFilteredPosts(samplePosts);
  }, []);

  useEffect(() => {
    let filtered = posts;

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, posts]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog | Zion Tech Group - AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, machine learning, cloud computing, cybersecurity" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Tech <span className="text-cyan-400">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay ahead with the latest insights on AI, IT solutions, and technology trends from our expert team.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-slate-800">
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 group">
                <div className="aspect-video bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-gray-400 text-sm">Featured Image</div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>
                  <a
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
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
    </div>
  );
};

export default BlogPage;
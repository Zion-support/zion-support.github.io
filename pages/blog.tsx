import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  Search,
  Filter,
  Tag,
  BookOpen
} from 'lucide-react';
import Layout from './components/Layout';

const blogPosts = [
  {
    id: 1,
    title: 'Cloud Security Best Practices for Enterprise Applications',
    excerpt: 'Essential security measures every enterprise should implement in their cloud infrastructure.',
    content: 'Cloud security is paramount in today\'s digital landscape...',
    author: 'Michael Chen',
    date: '2024-01-05',
    category: 'Security',
    tags: ['Cloud', 'Security', 'Enterprise'],
    readTime: '5 min read',
    image: '/blog/cloud-security.jpg'
  },
  {
    id: 2,
    title: 'AI-Powered Automation: Transforming Business Operations',
    excerpt: 'How artificial intelligence is revolutionizing business processes and increasing efficiency.',
    content: 'Artificial intelligence is no longer a futuristic concept...',
    author: 'Sarah Johnson',
    date: '2024-01-03',
    category: 'AI',
    tags: ['AI', 'Automation', 'Business'],
    readTime: '7 min read',
    image: '/blog/ai-automation.jpg'
  },
  {
    id: 3,
    title: 'Microservices Architecture: Building Scalable Applications',
    excerpt: 'A comprehensive guide to designing and implementing microservices for modern applications.',
    content: 'Microservices architecture has become the standard...',
    author: 'David Rodriguez',
    date: '2024-01-01',
    category: 'Architecture',
    tags: ['Microservices', 'Architecture', 'Scalability'],
    readTime: '6 min read',
    image: '/blog/microservices.jpg'
  }
];

const categories = [
  'All',
  'AI',
  'Security',
  'Architecture',
  'Cloud',
  'Development',
  'DevOps'
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and best practices in technology, AI, and digital transformation."
      keywords="blog, technology insights, AI trends, cloud computing, security, development"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technology{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Insights
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Stay ahead with expert insights, industry trends, and practical guides
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
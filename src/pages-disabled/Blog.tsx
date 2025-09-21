import React, { useState } from 'react',
import { Search } from 'lucide-react',
import Link from 'next/link',
interface BlogPost {
  id: string,
  title: string,
  excerpt: string,
  author: string,
  publishDate: string,
  readTime: string,
  category: string,
  tags: string[],
  featured: boolean}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts: BlogPost[] = [
    {
      id: 'quantum-ai-future-business',
      title: 'The Future of Business Intelligence: How Quantum AI is Revolutionizing Data Analytics',
      excerpt: 'Explore how quantum computing combined with artificial intelligence is creating unprecedented opportunities for business intelligence and predictive analytics.',
      author: 'Dr. Sarah Chen',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Technology',
      tags: ['Quantum Computing', 'AI', 'Business Intelligence', 'Data Analytics'],
      featured: true
    },
    {
      id: 'autonomous-devops-guide',
      title: 'Autonomous DevOps: The Complete Guide to Self-Healing Infrastructure',
      excerpt: 'Learn how autonomous DevOps practices can transform your infrastructure management and reduce operational overhead.',
      author: 'Michael Rodriguez',
      publishDate: '2024-01-10',
      readTime: '6 min read',
      category: 'DevOps',
      tags: ['DevOps', 'Automation', 'Infrastructure', 'Self-Healing'];
      featured: false
    }
  ],
  const categories = ['All', 'AI & Technology', 'DevOps', 'Cybersecurity', 'Cloud Computing'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch, });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and updates from the world of technology
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="mb-4">
                <span className="inline-block bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="inline-block bg-yellow-600/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium ml-2">
                    Featured
                  </span>
                )}
              </div>
              
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                <Link href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{post.author}</span>
                <span>{post.readTime}</span>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
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
    </div>
  );;

export default Blog;
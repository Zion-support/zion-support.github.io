'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  tags: string[]
  readTime: string
  image: string
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'AI & Machine Learning', 'Cybersecurity', 'Cloud Computing', 'DevOps', 'Web Development', 'Mobile Development']

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends shaping the business landscape and how companies are leveraging artificial intelligence for competitive advantage.',
      content: 'Full article content...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Business', 'Technology', 'Future'],
      readTime: '8 min read',
      image: '/api/placeholder/600/400'
    },
    {
      id: '2',
      title: 'Cybersecurity Best Practices for Remote Work Environments',
      excerpt: 'Essential security measures to protect your organization while maintaining productivity in remote work settings.',
      content: 'Full article content...',
      author: 'Mike Chen',
      date: '2024-01-12',
      category: 'Cybersecurity',
      tags: ['Security', 'Remote Work', 'Best Practices'],
      readTime: '6 min read',
      image: '/api/placeholder/600/400'
    },
    {
      id: '3',
      title: 'Cloud Migration Strategies: A Complete Guide',
      excerpt: 'Comprehensive guide to planning and executing successful cloud migration projects for enterprises.',
      content: 'Full article content...',
      author: 'Alex Rodriguez',
      date: '2024-01-10',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Migration', 'Strategy', 'Enterprise'],
      readTime: '12 min read',
      image: '/api/placeholder/600/400'
    },
    {
      id: '4',
      title: 'DevOps Culture: Building High-Performance Teams',
      excerpt: 'How to foster a DevOps culture that drives innovation and accelerates software delivery.',
      content: 'Full article content...',
      author: 'Emma Wilson',
      date: '2024-01-08',
      category: 'DevOps',
      tags: ['DevOps', 'Culture', 'Teams', 'Performance'],
      readTime: '7 min read',
      image: '/api/placeholder/600/400'
    },
    {
      id: '5',
      title: 'Modern Web Development: React vs Vue vs Angular',
      excerpt: 'Comparing the top JavaScript frameworks for building modern web applications.',
      content: 'Full article content...',
      author: 'David Kim',
      date: '2024-01-05',
      category: 'Web Development',
      tags: ['React', 'Vue', 'Angular', 'JavaScript', 'Web Development'],
      readTime: '10 min read',
      image: '/api/placeholder/600/400'
    },
    {
      id: '6',
      title: 'Mobile App Security: Protecting User Data',
      excerpt: 'Critical security considerations for mobile app development and user data protection.',
      content: 'Full article content...',
      author: 'Lisa Zhang',
      date: '2024-01-03',
      category: 'Mobile Development',
      tags: ['Mobile', 'Security', 'Data Protection', 'Apps'],
      readTime: '9 min read',
      image: '/api/placeholder/600/400'
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cybersecurity, cloud computing, and emerging technologies from our expert team." />
        <meta name="keywords" content="technology blog, AI insights, cybersecurity, cloud computing, DevOps, web development, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
              Stay ahead with expert insights on AI, cybersecurity, cloud computing, and emerging technologies
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-2">{post.category.charAt(0)}</div>
                      <div className="text-sm opacity-90">{post.category}</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-purple-500/20 text-purple-300 text-xs font-semibold px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full">
                          <Tag size={12} className="inline mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                      Read More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-gray-300">Try adjusting your search terms or category filter</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest technology insights and industry updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default BlogPage
'use client';

import React, { useState } from 'react';

import { Helmet } from 'react-helmet-async';

import { Search, Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react;

interface BlogPost {
  id: number;  title: string;

  excerpt: string';

  content: string';

  author: string';

  date: string';

  category: string';

  readTime: string';

  tags: string[]';

  featured: boolean';

}

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState(');

  const [selectedCategory, setSelectedCategory] = useState('all);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions,
      excerpt: 'Explore the latest trends in enterprise AI adoption and how businesses are leveraging artificial intelligence to drive innovation and growth.,
      content: 'Full article content...,
      author: 'Dr. Sarah Chen,
      date: '2024-01-15,
      category: 'AI,
      readTime: '8 min read,
      tags: ['AI', 'Enterprise', 'Technology', 'Innovation],
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Through Traditional Barriers,
      excerpt: 'Discover how quantum computing is revolutionizing problem-solving and what it means for the future of technology.,
      content: 'Full article content...,
      author: 'Michael Rodriguez,
      date: '2024-01-12,
      category: 'Quantum,
      readTime: '12 min read,
      tags: ['Quantum Computing', 'Technology', 'Research],
      featured: true
    },
    {
      id: 3,
      title: 'Building Scalable AI Infrastructure: Best Practices,
      excerpt: 'Learn the essential strategies for building robust, scalable AI infrastructure that can grow with your business needs.,
      content: 'Full article content...,
      author: 'Alex Thompson,
      date: '2024-01-10,
      category: 'Infrastructure,
      readTime: '10 min read,
      tags: ['AI Infrastructure', 'Scalability', 'Best Practices],
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of AI: New Challenges and Solutions,
      excerpt: 'Understanding the evolving cybersecurity landscape and how AI is both creating new challenges and providing innovative solutions.,
      content: 'Full article content...,
      author: 'Jennifer Liu,
      date: '2024-01-08,
      category: 'Security,
      readTime: '7 min read,
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection],
      featured: false
    },
    {
      id: 5,
      title: 'The Rise of Autonomous Systems: From Theory to Reality,
      excerpt: 'How autonomous systems are transforming industries and what businesses need to know about implementation.,
      content: 'Full article content...,
      author: 'David Park,
      date: '2024-01-05,
      category: 'Autonomous Systems,
      readTime: '9 min read,
      tags: ['Autonomous Systems', 'Automation', 'Industry 4.0],
      featured: false
    },
    {
      id: 6,
      title: 'Data Privacy and AI: Navigating the Regulatory Landscape,
      excerpt: 'A comprehensive guide to data privacy regulations and how they impact AI development and deployment.,
      content: 'Full article content...,
      author: 'Lisa Wang,
      date: '2024-01-03,
      category: 'Privacy,
      readTime: '11 min read,
      tags: ['Data Privacy', 'Regulations', 'GDPR', 'AI Ethics],
      featured: false    }

  ];

  const categories = [
    { id: 'all', name: 'All Categories },
    { id: 'AI', name: 'Artificial Intelligence },
    { id: 'Quantum', name: 'Quantum Computing },
    { id: 'Infrastructure', name: 'Infrastructure },
    { id: 'Security', name: 'Cybersecurity },
    { id: 'Autonomous Systems', name: 'Autonomous Systems },
    { id: 'Privacy', name: 'Data Privacy }

  ]';

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||';
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))';

    const matchesCategory = selectedCategory === 'all || post.category === selectedCategory;;

    return matchesSearch && matchesCategory;

  });

  const featuredPosts = blogPosts.filter(post => post.featured);;

  const regularPosts = filteredPosts.filter(post => !post.featured);;

  return (

    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from Zion Tech Group experts. />
        <meta name="keywords" content="AI blog, technology insights, quantum computing, cybersecurity, autonomous systems, tech trends />
        <meta property="og:title" content="Blog - Zion Tech Group />
        <meta property="og:description" content="Latest insights on AI and emerging technologies />
        <meta property="og:type" content="website />
        <meta property="og:url" content="https://ziontechgroup.com/blog />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Hero Section */}

        <section className="pt-24 pb-16 px-4">          <div className="max-w-7xl mx-auto text-center>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent>
                Tech Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8>
              Stay ahead with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies
            </p>
            
            {/* Search Bar */}

            <div className="max-w-2xl mx-auto mb-8>
              <div className="relative>
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 />
                <input
                  type="text
                  placeholder="Search articles...
                  value={searchQuery}

                  onChange={(e) => setSearchQuery(e.target.value)}

                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors
                />
              </div>
            </div>

            {/* Category Filter */}

            <div className="flex flex-wrap justify-center gap-4>
              {categories.map((category) => (

                <button
                  key={category.id}

                  onClick={() => setSelectedCategory(category.id)}

                  className={px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-400 text-slate-900
                      : 'bg-white/10 text-white hover:bg-white/20
                  }}

                >
                  {category.name}

                </button>
              ))}            </div>
          </div>
        </section>

        {/* Featured Posts */}

        {featuredPosts.length > 0 && (

          <section className="py-8 px-4>
            <div className="max-w-7xl mx-auto>
              <h2 className="text-3xl font-bold text-white mb-12 text-center>Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8>
                {featuredPosts.map((post) => (

                  <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group>
                    <div className="p-8>
                      <div className="flex items-center space-x-4 mb-4>
                        <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-medium>                          {post.category}

                        </span>
                        <div className="flex items-center text-gray-400 text-sm>
                          <Clock className="w-4 h-4 mr-1 />
                          {post.readTime}

                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors>
                        {post.title}

                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed>
                        {post.excerpt}

                      </p>
                      <div className="flex items-center justify-between>
                        <div className="flex items-center space-x-4 text-sm text-gray-400>
                          <div className="flex items-center>
                            <User className="w-4 h-4 mr-1 />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center>
                            <Calendar className="w-4 h-4 mr-1 />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium>
                          <span>Read More</span>                          <ArrowRight className="w-4 h-4 />
                        </button>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 h-48 flex items-center justify-center>
                      <div className="text-6xl>📊</div>
                    </div>
                  </article>
                ))}

              </div>
            </div>
          </section>
        )}

        {/* All Posts */}

        <section className="py-16 px-4">          <div className="max-w-7xl mx-auto>
            <h2 className="text-3xl font-bold text-white mb-12 text-center>All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
              {regularPosts.map((post) => (

                <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group">                  <div className="p-6>
                    <div className="flex items-center space-x-4 mb-4>
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-medium>
                        {post.category}

                      </span>
                      <div className="flex items-center text-gray-400 text-sm>
                        <Clock className="w-4 h-4 mr-1 />
                        {post.readTime}

                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors>
                      {post.title}

                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed>
                      {post.excerpt}

                    </p>
                    <div className="flex flex-wrap gap-2 mb-4>
                      {post.tags.slice(0, 3).map((tag, index) => (

                        <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs>                          #{tag}

                        </span>
                      ))}

                    </div>
                    <div className="flex items-center justify-between>
                      <div className="flex items-center space-x-4 text-sm text-gray-400>
                        <div className="flex items-center>
                          <User className="w-4 h-4 mr-1 />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center>
                          <Calendar className="w-4 h-4 mr-1 />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm>
                        <span>Read</span>
                        <ArrowRight className="w-4 h-4 />
                      </button>
                    </div>
                  </div>
                </article>
              ))}

            </div>

            {regularPosts.length === 0 && searchQuery && (

              <div className="text-center py-16>
                <div className="text-6xl mb-4>🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4>No articles found</h3>
                <p className="text-gray-300 mb-8>Try adjusting your search terms or browse all categories</p>
                <button
                  onClick={() => {
                    setSearchQuery(')">

                    setSelectedCategory('all)";

                  }}

                  className="px-8 py-3 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors
                >
                  Clear Filters
                </button>              </div>
            )}

          </div>
        </section>

        {/* Newsletter Signup */}

        <section className="py-16 px-4>
          <div className="max-w-4xl mx-auto text-center>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20>
              <h2 className="text-3xl font-bold text-white mb-6>Stay Updated</h2>
              <p className="text-xl text-gray-300 mb-8>
                Subscribe to our newsletter for the latest insights and updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto>
                <input
                  type="email
                  placeholder="Enter your email
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors
                />
                <button className="px-8 py-3 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )">

}">

export default BlogPage";

'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Search, Calendar, User, Clock, ArrowRight, Tag, TrendingUp, Eye, Heart } from 'lucide-react'

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  views: number;
  likes: number;
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends and how they will shape the business landscape in 2024.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI',
      tags: ['Artificial Intelligence', 'Business', 'Technology', 'Future'],
      image: '/images/blog/ai-future.jpg',
      featured: true,
      views: 1250,
      likes: 89
    },
    {
      id: '2',
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration projects.',
      author: 'Mike Chen',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'Cloud',
      tags: ['Cloud Computing', 'Migration', 'Best Practices', 'AWS'],
      image: '/images/blog/cloud-migration.jpg',
      featured: false,
      views: 980,
      likes: 67
    },
    {
      id: '3',
      title: 'Cybersecurity in 2024: Protecting Your Digital Assets',
      excerpt: 'Discover the latest cybersecurity threats and how to protect your business.',
      author: 'Alex Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Security',
      tags: ['Cybersecurity', 'Security', 'Protection', 'Threats'],
      image: '/images/blog/cybersecurity.jpg',
      featured: true,
      views: 1100,
      likes: 78
    },
    {
      id: '4',
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'How to leverage data analytics to drive business decisions and growth.',
      author: 'Emily Davis',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'Analytics',
      tags: ['Data Analytics', 'Business Intelligence', 'Insights', 'Data'],
      image: '/images/blog/data-analytics.jpg',
      featured: false,
      views: 750,
      likes: 45
    },
    {
      id: '5',
      title: 'Mobile App Development: Native vs Cross-Platform',
      excerpt: 'Compare native and cross-platform development approaches for mobile applications.',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Development',
      tags: ['Mobile Development', 'React Native', 'Flutter', 'iOS', 'Android'],
      image: '/images/blog/mobile-development.jpg',
      featured: false,
      views: 650,
      likes: 52
    },
    {
      id: '6',
      title: 'The Rise of Edge Computing: What You Need to Know',
      excerpt: 'Understanding edge computing and its impact on modern applications.',
      author: 'Lisa Wang',
      date: '2024-01-03',
      readTime: '7 min read',
      category: 'Technology',
      tags: ['Edge Computing', 'IoT', 'Performance', 'Latency'],
      image: '/images/blog/edge-computing.jpg',
      featured: false,
      views: 580,
      likes: 38
    }
  ];

  const categories = ['all', 'AI', 'Cloud', 'Security', 'Analytics', 'Development', 'Technology'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tech <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent neon-text-advanced" data-text="Blog">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and innovations in AI, IT, and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent futuristic-input"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text-enhanced">Featured Article</h2>
            <div className="holographic-card-advanced cyber-card-enhanced rounded-2xl p-8 hover-quantum">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-cyan-400 text-sm font-medium">{featuredPost.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      {featuredPost.views}
                    </span>
                    <span className="flex items-center">
                      <Heart className="w-4 h-4 mr-2" />
                      {featuredPost.likes}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span key={index} className="bg-slate-700/50 text-cyan-400 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center quantum-button">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-gray-300">Featured Article</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text-enhanced">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-300">
              Discover insights, tutorials, and industry updates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="holographic-card-advanced cyber-card-enhanced rounded-2xl p-6 hover-quantum">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {post.views}
                  </span>
                  <span className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    {post.likes}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-slate-700/50 text-cyan-400 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center quantum-button">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text-enhanced">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest tech insights and industry updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 max-w-md px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent futuristic-input"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 quantum-button">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogPage
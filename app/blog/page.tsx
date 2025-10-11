import React from 'react';
import { Link  } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  return (

  const blogPosts = [{
      id: 1, title: 'The Future of AI in Enterprise: 2025 Predictions', excerpt: 'Explore the latest trends and predictions for AI adoption in enterprise environments.', category: 'AI Insights', date: 'January 15, 2025', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop', 'use client';
import React from 'react';
import { Helmet  
  );
} from 'react-helmet-async';
import { Link  } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Filter  } from 'lucide-react';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  return (

  const blogPosts = [
    {
      title: 'The Future of AI in Business', excerpt: 'Exploring how artificial intelligence is transforming modern business operations.', author: 'Zion Tech Team', date: '2024-01-15', readTime: '5 min read'
    
  );
}, {
      title: 'Cloud Migration Best Practices', excerpt: 'Essential strategies for successful cloud migration and optimization.', author: 'Zion Tech Team', date: '2024-01-10', readTime: '7 min read'
    }, {
      title: 'Cybersecurity Trends 2024', excerpt: 'Latest trends and threats in cybersecurity and how to protect your business.', author: 'Zion Tech Team', date: '2024-01-05', readTime: '6 min read'
    }];

const categories = ['All Posts', 'AI & Machine Learning', 'Quantum Computing', 'Cybersecurity', 'Cloud Computing', 'Data Analytics', 'Business Strategy'];
'use client';
import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest insights on AI and IT solutions.
          </p>
        </div>
      </div>
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends shaping enterprise technology and how businesses can leverage these innovations for competitive advantage.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Barriers',
      excerpt: 'Understanding how quantum computing is revolutionizing problem-solving capabilities.',
      category: 'Quantum Computing',
      date: 'January 10, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'AI Automation: Transforming Business Processes',
      excerpt: 'Learn how AI automation is reshaping traditional business workflows.',
      category: 'Automation',
      date: 'January 5, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of AI',
      excerpt: 'How artificial intelligence is both enhancing and challenging cybersecurity practices.',
      category: 'Cybersecurity',
      date: 'December 28, 2024',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Blockchain and Web3: The Next Digital Revolution',
      excerpt: 'Understanding the impact of blockchain technology on modern business operations.',
      category: 'Blockchain',
      date: 'December 20, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'IoT and Edge Computing: Connecting the Future',
      excerpt: 'Exploring the convergence of IoT devices and edge computing technologies.',
      category: 'IoT',
      date: 'December 15, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: Protecting Your Digital Assets',
      excerpt: 'Discover how AI is both enhancing cybersecurity capabilities and creating new challenges that organizations must address.',
      author: 'Alex Thompson',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Micro SAAS Solutions: Building Scalable Business Applications',
      excerpt: 'Learn how to build and scale micro SAAS applications that solve specific business problems and generate recurring revenue.',
      author: 'Jennifer Liu',
      date: '2024-01-08',
      readTime: '15 min read',
      category: 'Development',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics and Business Intelligence: Driving Data-Driven Decisions',
      excerpt: 'Explore how modern data analytics tools and techniques are transforming business decision-making processes.',
      author: 'David Park',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Data Analytics',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'The Rise of Quantum Computing: What It Means for Your Business',
      excerpt: 'Understand the potential impact of quantum computing on various industries and how to prepare for this technological revolution.',
      author: 'Dr. Maria Santos',
      date: '2024-01-03',
      readTime: '11 min read',
      category: 'Emerging Technology',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const categories = ['All', 'AI Insights', 'Quantum Computing', 'Automation', 'Cybersecurity', 'Blockchain', 'IoT'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation /></Navigation>
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Blog & Insights
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and innovations in AI, quantum computing, 
              and cutting-edge technology solutions.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            {blogPosts.filter(post => post.featured).map(post => (
              <div key={post.id} className="cyber-card hologram-card overflow-hidden">
                <div className="md: flex">
                  <div className="md:w-1/2">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 md: h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm ml-4">{post.date}</span>
                    </div>
                    <h2 className="text-2xl md: text-3xl font-bold text-white mb-4">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-6 text-lg">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                      <button className="cyber-button">
                        Read More
                      </button>
                    </div>
  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Development', 'Data Analytics', 'Emerging Technology'];

  return (
    <>
  </>
      <Helmet ></Helmet>
        <title>Blog - Zion Tech Group | AI and IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, and emerging technologies. Expert articles, tutorials, and industry trends." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, enterprise solutions, cloud computing, cybersecurity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
                Our Blog
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Insights, trends, and expert perspectives on AI, technology, and business transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="cyber-card p-6">
                  <h2 className="text-xl font-semibold text-white mb-3">{post.title}</h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" /></User>
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" /></Calendar>
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                    <button className="flex items-center text-cyan-400 hover: text-cyan-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" /></ArrowRight>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
{/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover: bg-white/10 transition-all duration-300">
                <div className="h-48 bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                      <BookOpen className="w-6 h-6 text-purple-400" /></BookOpen>
                    </div>
                    <span className="text-sm text-gray-300">Article Image</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                      {categories.find(c => c.name === post.category)?.label}

                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /></Calendar>
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /></Clock>
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover: text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 text-purple-400 hover: text-purple-300 font-medium transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4" /></ArrowRight>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    category === 'All' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-gray-700 text-gray-300 hover: bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map(post => (
              <article key={post.id} className="cyber-card hologram-card overflow-hidden group">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover: scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover: text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <button className="text-cyan-400 hover: text-cyan-300 font-medium">
                    Read More →
                  </button>
                </div>
              </article>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.name === selectedCategory)?.label}
          </h2>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {searchedPosts.map((post) => (
              <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover: border-purple-500/50 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /></Calendar>
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /></Clock>
                      {post.readTime}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="ml-2 text-sm text-gray-500">Featured</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" /></User>
                        <span>{post.author}</span>
                        <Clock className="w-4 h-4 ml-3 mr-1" /></Clock>
                        <span>{post.readTime}</span>
                      </div>
                      <Link to={`/blog/${post.id}`}
                        className="text-blue-600 hover: text-blue-800 font-medium flex items-center"
                      ></Link>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" /></ArrowRight>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

        {/* Featured Post */}
        <section className="py-16 px-4">
        </section>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/20 transition-all duration-300 group">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-2xl md: text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" /></User>
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" /></Calendar>
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" /></Clock>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <button className="flex items-center space-x-2 text-cyan-400 hover: text-cyan-300 transition-colors font-medium">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" /></ArrowRight>
                      </button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-6xl">📊</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 cyber-card hologram-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter and never miss the latest AI and technology insights.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-cyan-500 focus:outline-none"
              />
              <button className="cyber-button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer /></Footer>
    </div>
  );
};
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Calendar, User, ArrowRight, Tag  } from 'lucide-react'

const BlogPage: React.FC = () => {
  return (

  const blogPosts = [{
      title: 'The Future of AI in Business', excerpt: 'Exploring how artificial intelligence is transforming modern business operations.', author: 'Sarah Johnson', date: '2024-01-15', category: 'AI', readTime: '5 min read'
    
  );
}, {
      title: 'Cybersecurity Best Practices', excerpt: 'Essential security measures every organization should implement.', author: 'Michael Chen', date: '2024-01-10', category: 'Security', readTime: '7 min read'
    }, {
      title: 'Cloud Migration Strategies', excerpt: 'A comprehensive guide to successful cloud migration.', author: 'Emily Rodriguez', date: '2024-01-05', category: 'Cloud', readTime: '6 min read'
    }, {
      title: 'Data Analytics Trends 2024', excerpt: 'Latest trends in data analytics and business intelligence.', author: 'David Kim', date: '2024-01-01', category: 'Analytics', readTime: '4 min read'
    }, {
      title: 'Micro SAAS Development', excerpt: 'Building successful micro SAAS applications for modern businesses.', author: 'Lisa Wang', date: '2023-12-28', category: 'Development', readTime: '8 min read'
    }, {
      title: 'AI Customer Support Solutions', excerpt: 'How AI is revolutionizing customer service and support.', author: 'James Rodriguez', date: '2023-12-25', category: 'AI', readTime: '5 min read'
    }]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation /></Navigation>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and best practices in AI and IT.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="cyber-card hover: bg-white/20 transition-all duration-300 group">
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-4 group-hover: text-cyan-400 transition-colors">{post.title}</h2>
                <p className="text-gray-300 mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" /></User>
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" /></Calendar>
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <button className="text-cyan-400 hover: text-cyan-300 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" /></ArrowRight>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for the latest insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex-1 max-w-md"
            />
            <button className="cyber-button">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer /></Footer>
    </div>
  );
};

export default BlogPage;

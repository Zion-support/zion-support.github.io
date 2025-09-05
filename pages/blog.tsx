import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar, 
  User, 
<<<<<<< HEAD
  Tag,
  Search,
  Filter,
  Clock,
  Eye,
  ThumbsUp,
  MessageCircle
} from 'lucide-react';
=======
  Tag, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Search,
  Filter
} from 'lucide-react';
import Layout from '../components/Layout';
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131

const blogPosts = [
  {
    id: 1,
<<<<<<< HEAD
    title: 'The Future of AI in Business: Trends and Predictions for 2024',
    excerpt: 'Explore the latest AI trends shaping the business landscape and how companies can leverage these technologies for growth.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'AI & Machine Learning',
    image: '/api/placeholder/600/400',
    views: 1250,
    likes: 89,
    comments: 23
  },
  {
    id: 2,
    title: 'Micro SaaS: Building Profitable Small-Scale Software Solutions',
    excerpt: 'Learn how to build and scale micro SaaS applications that generate consistent revenue with minimal overhead.',
    author: 'Michael Chen',
    date: '2024-01-12',
    readTime: '6 min read',
    category: 'Micro SaaS',
    image: '/api/placeholder/600/400',
    views: 980,
    likes: 67,
    comments: 18
  },
  {
    id: 3,
    title: 'IT Infrastructure Modernization: A Complete Guide',
    excerpt: 'Discover best practices for modernizing your IT infrastructure to improve performance, security, and scalability.',
    author: 'David Rodriguez',
    date: '2024-01-10',
    readTime: '10 min read',
    category: 'IT Services',
    image: '/api/placeholder/600/400',
    views: 1450,
    likes: 112,
    comments: 31
  },
  {
    id: 4,
    title: 'Remote Work Best Practices for Tech Teams',
    excerpt: 'Essential strategies for managing remote tech teams effectively and maintaining productivity in a distributed environment.',
    author: 'Emily Watson',
    date: '2024-01-08',
    readTime: '7 min read',
    category: 'Workplace',
    image: '/api/placeholder/600/400',
    views: 890,
    likes: 54,
    comments: 15
  },
  {
    id: 5,
    title: 'Cybersecurity Trends: Protecting Your Business in 2024',
    excerpt: 'Stay ahead of cyber threats with the latest security trends and best practices for protecting your business data.',
    author: 'Alex Thompson',
    date: '2024-01-05',
    readTime: '9 min read',
    category: 'Security',
    image: '/api/placeholder/600/400',
    views: 2100,
    likes: 156,
    comments: 42
  },
  {
    id: 6,
    title: 'The Rise of No-Code Platforms: Democratizing Software Development',
    excerpt: 'How no-code platforms are changing the software development landscape and enabling non-technical users to build applications.',
    author: 'Lisa Park',
    date: '2024-01-03',
    readTime: '5 min read',
    category: 'Development',
    image: '/api/placeholder/600/400',
    views: 750,
    likes: 43,
    comments: 12
=======
    title: "The Future of AI in Business: Trends and Predictions for 2024",
    excerpt: "Explore the latest AI trends and how they're transforming business operations across industries.",
    author: "Zion Tech Team",
    date: "2024-01-15",
    category: "AI & Machine Learning",
    readTime: "5 min read",
    image: "/api/placeholder/600/300",
    featured: true
  },
  {
    id: 2,
    title: "Cloud Migration Best Practices: A Complete Guide",
    excerpt: "Learn the essential steps and strategies for successful cloud migration projects.",
    author: "Sarah Johnson",
    date: "2024-01-12",
    category: "Cloud Computing",
    readTime: "8 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 3,
    title: "Cybersecurity in 2024: Protecting Your Digital Assets",
    excerpt: "Discover the latest cybersecurity threats and how to protect your business from them.",
    author: "Mike Chen",
    date: "2024-01-10",
    category: "Cybersecurity",
    readTime: "6 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 4,
    title: "Micro SaaS: The Future of Software Development",
    excerpt: "How micro SaaS solutions are revolutionizing the software industry and creating new opportunities.",
    author: "Emily Rodriguez",
    date: "2024-01-08",
    category: "SaaS Development",
    readTime: "7 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 5,
    title: "Data Analytics: Turning Information into Insights",
    excerpt: "Learn how to leverage data analytics to make better business decisions and drive growth.",
    author: "David Kim",
    date: "2024-01-05",
    category: "Data Analytics",
    readTime: "9 min read",
    image: "/api/placeholder/600/300"
  },
  {
    id: 6,
    title: "Automation in Real Estate: PropTech Revolution",
    excerpt: "How automation and technology are transforming the real estate industry.",
    author: "Lisa Wang",
    date: "2024-01-03",
    category: "Real Estate Tech",
    readTime: "6 min read",
    image: "/api/placeholder/600/300"
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
  }
];

const categories = [
<<<<<<< HEAD
  'All',
  'AI & Machine Learning',
  'Micro SaaS',
  'IT Services',
  'Security',
  'Development',
  'Workplace'
];

const featuredPost = blogPosts[0];

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT services, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="blog, technology, AI, IT services, micro SaaS, tech insights, industry news" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Navigation */}
        <nav className="relative z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white text-xl font-bold">Zion Tech Group</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link href="/blog" className="text-white font-semibold">Blog</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Tech
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Insights
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay ahead of the curve with expert insights on AI, IT services, and the latest technology trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-80"
                  />
                </div>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filter
                </button>
              </div>
            </motion.div>
=======
  "All Posts",
  "AI & Machine Learning",
  "Cloud Computing",
  "Cybersecurity",
  "SaaS Development",
  "Data Analytics",
  "Real Estate Tech",
  "Industry Insights"
];

const featuredPost = blogPosts.find(post => post.featured);

export default function BlogPage() {
  return (
    <Layout
      title="Blog - Zion Tech Group"
      description="Latest insights, trends, and best practices in technology. Stay updated with our expert articles on AI, cloud computing, cybersecurity, and more."
      keywords="technology blog, AI insights, cloud computing, cybersecurity, SaaS development, data analytics, tech trends"
      canonical="https://ziontechgroup.com/blog"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Technology 
              <span className="text-blue-400"> Insights & Trends</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stay ahead of the curve with our expert insights on the latest technology trends, 
              best practices, and industry developments.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
                    <Tag className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-blue-600 font-semibold">{featuredPost.category}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-2" />
                      <span>{featuredPost.author}</span>
                      <Calendar className="w-4 h-4 ml-4 mr-2" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                  </div>
                  <Link 
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center mt-6 text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
          </div>
        </section>
      )}

<<<<<<< HEAD
        {/* Featured Post */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Featured Article</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="h-80 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Tag className="h-8 w-8" />
                      </div>
                      <p className="text-lg font-semibold">Featured Image</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-300 mb-6 text-lg">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-400">{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-400">{featuredPost.date}</span>
                        </div>
                      </div>
                      <Link href={`/blog/${featuredPost.id}`} className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
=======
      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-2/3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search articles..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="relative">
                    <Filter className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>All Categories</option>
                      {categories.slice(1).map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.filter(post => !post.featured).map((post, index) => (
                  <motion.article 
                    key={post.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <Tag className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-blue-600 font-semibold text-sm">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <Link 
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/3">
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category}>
                      <Link 
                        href={`/blog?category=${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Subscribe to our newsletter for the latest technology insights and updates.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
          </div>
        </div>
      </section>

<<<<<<< HEAD
        {/* Categories */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    category === 'All'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogPosts.slice(1).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Tag className="h-6 w-6" />
                      </div>
                      <p className="text-sm font-semibold">Blog Image</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      <Link href={`/blog/${post.id}`} className="text-blue-400 hover:text-blue-300 font-semibold">
                        Read More →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get the latest tech insights and industry news delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <span className="text-white text-xl font-bold">Zion Tech Group</span>
                </div>
                <p className="text-gray-400">
                  Transforming businesses with cutting-edge technology solutions.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/ai-services" className="text-gray-400 hover:text-white">AI Services</Link></li>
                  <li><Link href="/it-services" className="text-gray-400 hover:text-white">IT Services</Link></li>
                  <li><Link href="/micro-saas" className="text-gray-400 hover:text-white">Micro SaaS</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link href="/blog" className="text-white font-semibold">Blog</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">info@ziontechgroup.com</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
=======
      {/* Contact CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Custom Technology Solutions?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Our expert team is ready to help you implement the latest technology solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
>>>>>>> 2e9c29263b568858da4098d8218397d3dc948131
  );
}
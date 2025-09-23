import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Search,
  Filter
} from 'lucide-react';
import Layout from '../components/Layout';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business: Trends and Predictions for 2024",
    excerpt: "Explore the latest AI trends and how they're transforming business operations across industries.",
    author: "Zion Tech Team",
    date: "2024-01-15",
    category: "AI & Machine Learning",
    readTime: "5 min read",
    image: "/api/placeholder/600/300",
    featured: true
=======
import { Calendar, User, ArrowRight, Search, Tag, Clock } from 'lucide-react';
const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Business: Trends to Watch in 2024',
    excerpt: 'Discover the latest AI trends that are transforming how businesses operate and compete in the digital landscape.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'AI & Machine Learning',
    image: '/api/placeholder/600/400',    featured: true
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
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
<<<<<<< HEAD
    title: "Automation in Real Estate: PropTech Revolution",
    excerpt: "How automation and technology are transforming the real estate industry.",
    author: "Lisa Wang",
    date: "2024-01-03",
    category: "Real Estate Tech",
    readTime: "6 min read",
    image: "/api/placeholder/600/300"
  }
=======
    title: 'Digital Transformation: A Step-by-Step Guide',
    excerpt: 'Learn how to successfully navigate your organization through digital transformation.',
    author: 'Lisa Park',
    date: '2024-01-03',
    readTime: '9 min read',
    category: 'Digital Transformation',
    image: '/api/placeholder/600/400',
    featured: false  }
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
];

const categories = [
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
<<<<<<< HEAD
    <Layout
      title="Blog - Zion Tech Group"
      description="Latest insights, trends, and best practices in technology. Stay updated with our expert articles on AI, cloud computing, cybersecurity, and more."
      keywords="technology blog, AI insights, cloud computing, cybersecurity, SaaS development, data analytics, tech trends"
      canonical="https://ziontechgroup.com/blog"
=======
    <MainLayout      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and best practices in technology and digital transformation."
      keywords="technology blog, AI insights, cybersecurity, software development, digital transformation"
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
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
<<<<<<< HEAD
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
          </div>
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technology Insights
                <span className="block text-yellow-400">& Best Practices</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Stay ahead with expert insights on AI, cybersecurity, cloud computing, and digital transformation.
              </p>
            </motion.div>          </div>
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
        </section>
      )}

<<<<<<< HEAD
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
=======
        {/* Search and Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category === 'All'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
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
<<<<<<< HEAD
=======

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
          </div>
        </section>
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985

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
          </div>
        </div>
      </section>

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
<<<<<<< HEAD
        </div>
      </section>
    </Layout>
  );
=======
        </section>
      </div>
    </MainLayout>  );
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
}
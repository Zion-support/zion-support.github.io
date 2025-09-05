import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Calendar, User, ArrowRight, Tag, ExternalLink } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'Zion Tech Group Launches Revolutionary AI Email Responder',
    excerpt: 'Our new AI-powered email responder can generate intelligent, context-aware responses in seconds.',
    content: 'Zion Tech Group is proud to announce the launch of our revolutionary AI Email Responder service...',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Product Launch',
    image: '/news/ai-email-responder.jpg',
    readTime: '5 min read',
    tags: ['AI', 'Email', 'Product Launch', 'Innovation']
  },
  {
    id: 2,
    title: 'Company Expands Cloud Infrastructure Services',
    excerpt: 'New data centers in Europe and Asia to provide faster, more reliable cloud services globally.',
    content: 'To better serve our international clients, Zion Tech Group has expanded its cloud infrastructure...',
    author: 'Michael Chen',
    date: '2024-01-12',
    category: 'Infrastructure',
    image: '/news/cloud-expansion.jpg',
    readTime: '4 min read',
    tags: ['Cloud', 'Infrastructure', 'Global Expansion', 'Technology']
  },
  {
    id: 3,
    title: 'Partnership with Leading Healthcare Provider',
    excerpt: 'Strategic partnership to develop AI-powered healthcare solutions for improved patient care.',
    content: 'Zion Tech Group has entered into a strategic partnership with MedTech Solutions...',
    author: 'Dr. Emily Rodriguez',
    date: '2024-01-10',
    category: 'Partnership',
    image: '/news/healthcare-partnership.jpg',
    readTime: '6 min read',
    tags: ['Healthcare', 'Partnership', 'AI', 'Medical Technology']
  },
  {
    id: 4,
    title: 'New Micro SaaS Platform for Small Businesses',
    excerpt: 'Affordable, scalable SaaS solutions designed specifically for small and medium businesses.',
    content: 'Recognizing the unique needs of small businesses, Zion Tech Group has developed...',
    author: 'David Kim',
    date: '2024-01-08',
    category: 'Product Launch',
    image: '/news/micro-saas.jpg',
    readTime: '7 min read',
    tags: ['SaaS', 'Small Business', 'Product Launch', 'Scalability']
  },
  {
    id: 5,
    title: 'Cybersecurity Best Practices for Remote Work',
    excerpt: 'Essential security measures every remote team should implement to protect sensitive data.',
    content: 'As remote work becomes the new norm, cybersecurity has become more critical than ever...',
    author: 'Alex Thompson',
    date: '2024-01-05',
    category: 'Security',
    image: '/news/cybersecurity-remote.jpg',
    readTime: '8 min read',
    tags: ['Cybersecurity', 'Remote Work', 'Best Practices', 'Security']
  },
  {
    id: 6,
    title: 'AI Ethics and Responsible Development',
    excerpt: 'Our commitment to developing AI technologies that are ethical, transparent, and beneficial to society.',
    content: 'At Zion Tech Group, we believe that AI development must be guided by strong ethical principles...',
    author: 'Dr. Maria Santos',
    date: '2024-01-03',
    category: 'Ethics',
    image: '/news/ai-ethics.jpg',
    readTime: '9 min read',
    tags: ['AI Ethics', 'Responsible AI', 'Technology', 'Society']
  }
];

const categories = [
  'All',
  'Product Launch',
  'Infrastructure',
  'Partnership',
  'Security',
  'Ethics'
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="News & Updates - Zion Tech Group"
      description="Stay updated with the latest news, announcements, and insights from Zion Tech Group"
      keywords="news, updates, announcements, technology news, AI news, company updates"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                News & Updates
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Stay informed with the latest news, announcements, and insights from Zion Tech Group
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredArticles.length > 0 && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <h2 className="text-2xl font-bold mb-2">Featured Article</h2>
                        <p className="text-lg opacity-90">Latest News</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{filteredArticles[0].date}</span>
                      <span className="mx-2">•</span>
                      <span>{filteredArticles[0].readTime}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {filteredArticles[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg">
                      {filteredArticles[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>{filteredArticles[0].author}</span>
                      </div>
                      <Link
                        href={`/news/${filteredArticles[0].id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            )}
          </div>
        </section>

        {/* News Articles Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.slice(1).map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-lg font-bold mb-2">News Article</h3>
                      <p className="text-sm opacity-90">{article.category}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {article.category}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/news/${article.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
            
            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Calendar className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss the latest news and updates from Zion Tech Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}